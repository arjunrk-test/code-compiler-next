"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import EditorLayout from "@/components/EditorLayout";
import { Code_Snippets } from "@/app/Constants";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [selectedLanguage, setSelectedLanguage] = useState("bash"); // Default language is Bash
  const [code, setCode] = useState(Code_Snippets["bash"]); // Default code snippet

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
    setCode(Code_Snippets[newLanguage] || ""); // Load default code for selected language
  };

  return (
    <>
      <Navbar 
        theme={theme} 
        handleThemeClick={handleThemeClick} 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      <EditorLayout 
        theme={theme} 
        selectedLanguage={selectedLanguage} 
        code={code} 
      />
    </>
  );
}
