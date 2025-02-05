"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

const InputWindow = () => {
  const [inputText, setInputText] = useState(""); 
  const handleInputChange = (value) => {
    setInputText(value); 
  };

  return (
    <div className="bg-[#1E1E1E] text-white h-full flex flex-col">

      {/* Navbar inside the input window */}
      <div className="bg-black text-white flex items-center">
        <div className="bg-[#1e1e1e] text-white text-[14px] py-[1px] px-6">Input</div>
      </div>

      {/* Monaco Editor Input Window */}
      <div className="relative flex-1 overflow-hidden">
        <Editor
          height="100%" 
          language="text/plain"
          theme="vs-dark"
          value={inputText}
          onChange={handleInputChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
            lineNumbers: "on",
            readOnly: false,
            lineHeight: 20,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default InputWindow;
