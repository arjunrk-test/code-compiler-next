"use client";
import Split from "react-split";
import CodeEditor from "./CodeEditor";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";

const EditorLayout = () => {
  return (
    <div className="h-[calc(100vh-50px)]">
      <Split
        className="flex h-full"
        sizes={[60, 40]}
        minSize={300}
        gutterSize={5}
        gutter={(index, direction) => {
          const gutter = document.createElement("div");
          gutter.className = `gutter ${direction === "vertical" ? "gutter-vertical" : "gutter-horizontal"}`;
          return gutter;
        }}
      >
        {/* Code Editor (Left Side) */}
        <CodeEditor />

        {/* Right Panel (Input + Output) */}
        <Split
          direction="vertical"
          sizes={[50, 50]}
          minSize={100}
          gutterSize={5}
          gutter={(index, direction) => {
            const gutter = document.createElement("div");
            gutter.className = `gutter ${direction === "vertical" ? "gutter-vertical" : "gutter-horizontal"}`;
            return gutter;
          }}
        >
          {/* Input Window (Top Right) */}
          <InputWindow />
          
          {/* Output Window (Bottom Right) */}
          <OutputWindow />
          
        </Split>
      </Split>
    </div>
  );
};

export default EditorLayout;
