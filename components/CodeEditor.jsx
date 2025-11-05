"use client";
import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ theme, language, code, setCode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCode(code);
  }, [code, language]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`flex flex-col h-full ${theme === "dark" ? "bg-[#1E1E1E]" : "bg-white"}`}>
      <div className="bg-miniNavBg flex items-center text-sm">
        <div className="bg-miniBoxBg text-miniBoxTx py-[1px] px-3 md:px-6 text-xs md:text-sm">Main</div>
      </div>
      <div className="relative flex-grow">
        <Editor
          height="100%"
          language={language}
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          value={code}
          onChange={(newCode) => setCode(newCode)}
          options={{
            fontSize: isMobile ? 12 : 13,
            minimap: { enabled: !isMobile },
            wordWrap: "on",
            wrappingIndent: "same",
            lineNumbers: isMobile ? "off" : "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
