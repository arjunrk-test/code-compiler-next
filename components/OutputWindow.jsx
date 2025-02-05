import React from "react";
import { Editor } from "@monaco-editor/react";

const OutputWindow = () => {
  return (
      <div className="bg-[#1E1E1E] text-white h-full flex flex-col">
  
        {/* Navbar inside the input window */}
        <div className="bg-black text-white flex items-center text-sm">
          <div className="bg-[#1e1e1e] text-white py-[1px] px-6">Output</div>
        </div>
  
        {/* Monaco Editor Input Window */}
        <div className="relative flex-1 overflow-hidden">
          <Editor
            height="100%" 
            language="text/plain"
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
              lineNumbers: "on",
              lineHeight: 20,
              automaticLayout: true,
              readOnly: true,
            }}
          />
        </div>
      </div>
    );
};

export default OutputWindow;
