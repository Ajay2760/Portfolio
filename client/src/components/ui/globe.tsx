import React from "react";

const Globe: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div
        className="relative rounded-full isolate"
        style={{
          width: "260px",
          height: "260px",
          flexShrink: 0,
          contain: "layout paint style",
        }}
      >
        {/* Use transform animation for smoother, low-cost rendering */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-[200%]"
            style={{
              backgroundImage:
                "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
              backgroundSize: "auto 100%",
              backgroundRepeat: "repeat-x",
              animation: "earthTextureDrift 26s linear infinite",
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "0 0 16px rgba(255,255,255,0.16), -6px 0 10px #c3f4ff66 inset, 12px 2px 20px #000000bf inset, 90px 0 30px #00000088 inset",
            pointerEvents: "none",
          }}
        />

        <div
          className="absolute left-[-20px] top-[10px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 3s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 2.4s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[350px] top-[90px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 4s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[200px] top-[290px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 3s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[50px] top-[270px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 1.7s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[250px] top-[-50px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 4.2s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[290px] top-[60px] w-1 h-1 bg-white rounded-full z-[-1]"
          style={{ animation: "twinkling 2.2s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
};

export default React.memo(Globe);
