"use client";
import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const InputWindow = ({ theme, inputText, setInputText }) => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInputChange = (value) => {
    setInputText(value); 
  };

  return (
    <div className={`bg-${theme === "dark" ? "[#1E1E1E]" : "white"} text-black h-full flex flex-col`}>

      {/* Navbar inside the input window */}
      <div className="bg-miniNavBg flex items-center text-sm outline-1">
        <div className="bg-miniBoxBg text-miniBoxTx py-[1px] px-3 md:px-6 text-xs md:text-sm">Input</div>
      </div>

      {/* Monaco Editor Input Window */}
      <div className="relative flex-1 overflow-hidden">
        <Editor
          height="100%" 
          language="text/plain"
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          value={inputText}
          onChange={handleInputChange}
          options={{
            fontSize: isMobile ? 12 : 14,
            minimap: { enabled: false },
            wordWrap: "on",
            lineNumbers: isMobile ? "off" : "on",
            readOnly: false,
            lineHeight: isMobile ? 18 : 20,
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
};

export default InputWindow;
