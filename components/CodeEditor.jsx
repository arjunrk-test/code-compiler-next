"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ theme }) => {
  return (
    <div className={`bg-${theme === "dark" ? "[#1E1E1E]" : "white"} text-black flex items-center justify-center`}>
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
  );
};

export default CodeEditor;
