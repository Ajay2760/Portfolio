import { useEffect, useState } from "react";
import { Users, Eye } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function trackAndFetchViews() {
      try {
        const hasVisited = sessionStorage.getItem("visited_profile");

        if (!hasVisited) {
          sessionStorage.setItem("visited_profile", "true");
          const res = await apiRequest("POST", "/api/views/increment");
          const data = await res.json();
          if (isMounted && data.views !== undefined) {
            setViews(data.views);
          }
        } else {
          const res = await fetch("/api/views");
          const data = await res.json();
          if (isMounted && data.views !== undefined) {
            setViews(data.views);
          }
        }
      } catch (err) {
        console.error("Failed to track visitor views:", err);
        if (isMounted && views === null) {
          setViews(1); // fallback default starting count
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    trackAndFetchViews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/30 bg-primary/10 hover:bg-primary/20 text-foreground text-xs md:text-sm font-medium transition-all shadow-sm select-none">
      <Users className="w-4 h-4 text-primary animate-pulse" />
      <span>Visitor:</span>
      <span className="font-bold text-primary font-mono">
        {isLoading ? "..." : (views ?? 1)}
      </span>
    </div>
  );
}
