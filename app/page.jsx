"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import EditorLayout from "@/components/EditorLayout";

export default function Home() {
  const [theme, setTheme] = useState("dark");

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

  return (
    <>
      <Navbar theme={theme} handleThemeClick={handleThemeClick} />
      <EditorLayout theme={theme} />
    </>
  );
}
