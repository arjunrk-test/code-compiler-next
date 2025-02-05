"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ theme }) => {
  return (
    <div className={`flex flex-col h-full ${theme === "dark" ? "bg-[#1E1E1E]" : "bg-white"}`}>

      {/* navbar for editor */}
      <div className="bg-black text-white flex items-center text-sm">
        <div className="bg-[#1e1e1e] text-white py-[1px] px-6">Main</div>
      </div>

      <div className="relative flex-grow">
      <Editor
        height="100%"
        language="javascript"
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
        options={{
          fontSize: 13,
          minimap: { enabled: true },
          wordWrap: "on",
          wrappingIndent: "same",
        }}
      />
      </div>
    </div>
  );
};

export default CodeEditor;