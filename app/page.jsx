"use client";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Navbar from "@/components/Navbar";
import EditorLayout from "@/components/EditorLayout";
import { Code_Snippets, Language_Versions, Extensions, Download_Filename } from "@/app/Constants";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [selectedLanguage, setSelectedLanguage] = useState("bash");
  const [code, setCode] = useState(Code_Snippets["bash"]);
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const handleThemeClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    setCode(Code_Snippets[newLanguage] || ""); 
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post('https://code-compiler-next.onrender.com/api/run-code', {
        language: selectedLanguage,
        version: Language_Versions[selectedLanguage],
        code: code,
        stdin: inputText,
      });
      const errorMessage = response.data.run?.stderr || response.data.stderr || response.data.compile?.stderr;
      if(errorMessage){
        setOutput("Error: \n" + errorMessage);
      }else{
        setOutput(response.data.run.stdout || "No output");
      }
    } catch (error) {
      setOutput("Execution error: " + (error.response?.data?.error || error.message || "Unknown error"));
    }
  };

  const getLanguageFromExtension = (extension) => {
    // Remove leading dot if present
    const ext = extension.toLowerCase().replace(/^\./, '');
    // Reverse lookup: find language that has this extension
    for (const [language, langExtension] of Object.entries(Extensions)) {
      if (langExtension === ext) {
        return language;
      }
    }
    return null;
  };

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Get file extension
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop() || '';
      const detectedLanguage = getLanguageFromExtension(fileExtension);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        if (typeof fileContent === 'string') {
          setCode(fileContent);
          // Automatically set language if detected
          if (detectedLanguage && Language_Versions[detectedLanguage]) {
            setSelectedLanguage(detectedLanguage);
          }
        }
      };
      reader.readAsText(file);
    }
    // Reset input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSaveFile = () => {
    const filename = Download_Filename[selectedLanguage] || 'code';
    const extension = Extensions[selectedLanguage] || 'txt';
    const fullFilename = `${filename}.${extension}`;
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fullFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={Object.values(Extensions).map(ext => `.${ext}`).join(',')}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Navbar 
        theme={theme} 
        handleThemeClick={handleThemeClick} 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange}
        handleRunCode={handleRunCode}
        handleOpenFile={handleOpenFile}
        handleSaveFile={handleSaveFile}
      />
      <EditorLayout 
        theme={theme} 
        selectedLanguage={selectedLanguage} 
        code={code} 
        setCode={setCode}
        inputText={inputText}
        setInputText={setInputText}
        output={output}
      />
    </>
  );
}
