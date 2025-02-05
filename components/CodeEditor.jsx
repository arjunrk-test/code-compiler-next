"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div className="bg-[#1E1E1E] text-white flex items-center justify-center">
      <Editor
        height="100%"
        language="javascript"
        theme="vs-dark"
        options={{
          fontSize: 13,
          minimap: { enabled: true },
          wordWrap: "on",
          wrappingIndent: "same",
        }}
      />
    </div>
  );
};

export default CodeEditor;
