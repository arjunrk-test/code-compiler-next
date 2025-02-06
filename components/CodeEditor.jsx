"use client";
import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ theme, language, code }) => {
  const [editorCode, setEditorCode] = useState(code);

  useEffect(() => {
    setEditorCode(code);
  }, [code, language]); // Update editor when language or code changes

  return (
    <div className={`flex flex-col h-full ${theme === "dark" ? "bg-[#1E1E1E]" : "bg-white"}`}>
      {/* Navbar for editor */}
      <div className="bg-miniNavBg flex items-center text-sm">
        <div className="bg-miniBoxBg text-miniBoxTx py-[1px] px-6">Main</div>
      </div>

      <div className="relative flex-grow">
        <Editor
          height="100%"
          language={language}
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          value={editorCode}
          onChange={(newCode) => setEditorCode(newCode)}
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
