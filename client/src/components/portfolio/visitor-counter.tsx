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
        const endpoint = !hasVisited
          ? "https://countapi.mileshilliard.com/api/v1/hit/ajay2760_portfolio_views"
          : "https://countapi.mileshilliard.com/api/v1/get/ajay2760_portfolio_views";

        if (!hasVisited) {
          sessionStorage.setItem("visited_profile", "true");
        }

        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          const count = data.value ?? data.views;
          if (isMounted && typeof count === "number") {
            setViews(count);
            return;
          }
        }

        // Fallback to local express route if countapi is unreachable
        const fallbackEndpoint = !hasVisited ? "/api/views/increment" : "/api/views";
        const localRes = !hasVisited
          ? await apiRequest("POST", fallbackEndpoint)
          : await fetch(fallbackEndpoint);
        
        if (localRes.ok) {
          const localData = await localRes.json();
          if (isMounted && typeof localData.views === "number") {
            setViews(localData.views);
          }
        }
      } catch (err) {
        console.error("Failed to track visitor views:", err);
        if (isMounted && views === null) {
          setViews(1);
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
