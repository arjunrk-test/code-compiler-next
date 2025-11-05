"use client";
import { useState, useEffect } from "react";
import Split from "react-split";
import CodeEditor from "./CodeEditor";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";

const EditorLayout = ({ theme, selectedLanguage, code, inputText, setInputText, output, setCode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: Stack vertically
  if (isMobile) {
    return (
      <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-50px)] overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Code Editor - Takes 50% of viewport */}
          <div className="h-[50vh] min-h-[300px] flex-shrink-0">
            <CodeEditor theme={theme} language={selectedLanguage} code={code} setCode={setCode} />
          </div>
          
          {/* Input Window - Takes 25% of viewport */}
          <div className="h-[25vh] min-h-[150px] flex-shrink-0">
            <InputWindow theme={theme} inputText={inputText} setInputText={setInputText} />
          </div>
          
          {/* Output Window - Takes 25% of viewport */}
          <div className="h-[25vh] min-h-[150px] flex-shrink-0">
            <OutputWindow theme={theme} output={output} />
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Use split panes
  return (
    <div className="h-[calc(100vh-50px)]">
      <Split
        className="flex h-full bg-gutterBg"
        sizes={[60, 40]}
        minSize={300}
        gutterSize={5}
        gutter={(index, direction) => {
          const gutter = document.createElement("div");
          gutter.className = `gutter ${direction === "vertical" ? "gutter-vertical" : "gutter-horizontal"}`;
          return gutter;
        }}
      >
        <CodeEditor theme={theme} language={selectedLanguage} code={code} setCode={setCode} />
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
          <InputWindow theme={theme} inputText={inputText} setInputText={setInputText} />
          <OutputWindow theme={theme} output={output} />
        </Split>
      </Split>
    </div>
  );
};

export default EditorLayout;
