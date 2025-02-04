"use client";
import Split from "react-split";

const EditorLayout = () => {
  return (
    <div className="h-[calc(100vh-50px)]">
      <Split
        className="flex h-full"
        sizes={[60, 40]}
        minSize={300}
        gutterSize={3}
        gutter={(index, direction) => {
          const gutter = document.createElement("div");
          gutter.className = `gutter ${direction === "vertical" ? "gutter-vertical" : "gutter-horizontal"}`;
          return gutter;
        }}
      >
        {/* Code Editor (Left Side) */}
        <div className="bg-[#1E1E1E] text-white flex items-center justify-center">
          Code Editor
        </div>

        {/* Right Panel (Input + Output) */}
        <Split
          direction="vertical"
          sizes={[50, 50]}
          minSize={100}
          gutterSize={3}
          gutter={(index, direction) => {
            const gutter = document.createElement("div");
            gutter.className = `gutter ${direction === "vertical" ? "gutter-vertical" : "gutter-horizontal"}`;
            return gutter;
          }}
        >
          {/* Input Window (Top Right) */}
          <div className="bg-[#1e1e1e] text-white flex items-center justify-center">
            Input Window
          </div>

          {/* Output Window (Bottom Right) */}
          <div className="bg-[#1e1e1e] text-white flex items-center justify-center">
            Output Window
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default EditorLayout;
