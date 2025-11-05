"use client";
import { useState } from "react";
import Link from "next/link";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Language_Versions } from "@/app/Constants";
import { Button } from "./ui/button";
import { FaGithub, FaPlay, FaBars, FaTimes } from "react-icons/fa";
import { CiLight, CiDark } from "react-icons/ci";

const languages = Object.entries(Language_Versions);

const Navbar = ({ theme, handleThemeClick, selectedLanguage, onLanguageChange, handleRunCode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (value) => {
    onLanguageChange(value);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-navbar text-navbar-text p-2">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="https://arjun-s.in" target="_blank" rel="noopener noreferrer" className="text-3xl font-semibold ml-2 mr-6 text-navbarText">
          <TbHexagonLetterAFilled />
        </Link>

        {/* File Menu */}
        <div className="flex justify-between items-center ml-2 mr-6">
          <Select>
            <SelectTrigger className="w-[150px] bg-transparent border-none text-navbarText hover:bg-navbarHover text-sm">
              <SelectValue placeholder="File" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="open" className="flex justify-between text-sm">
                <span>Open File</span>
              </SelectItem>
              <SelectItem value="save" className="flex justify-between text-sm">
                <span>Save</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language Dropdown */}
        <div className="flex justify-between items-center ml-2 mr-6">
          <Select onValueChange={onLanguageChange} value={selectedLanguage}>
            <SelectTrigger className="w-[200px] bg-transparent border-none text-navbarText hover:bg-navbarHover text-sm">
              <SelectValue placeholder="Languages" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              {languages.map(([language, version]) => (
                <SelectItem key={language} value={language} className="capitalize flex justify-between items-center text-sm">
                  <span className="capitalize">{language}</span>
                  <span className="ml-auto text-gray-500 text-sm">&nbsp;{version}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Run Button */}
        <div className="flex justify-between items-center w-full ml-2 mr-6">
          <Button onClick={handleRunCode} className="bg-runButton text-runButtonText hover:bg-runButtonHover text-sm">
            <FaPlay />
            <span>Run Code</span>
          </Button>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-between items-center ml-2 mr-2">
          <Button onClick={handleThemeClick} className="bg-none text-navbarText hover:bg-navbarHover hover:text-navbarText" variant="ghost">
            {theme === "light" ? <CiLight /> : <CiDark />}
          </Button>
        </div>

        {/* GitHub Repo Link */}
        <Link href="https://github.com/arjunrk-test/code-compiler-next" target="_blank" rel="noopener noreferrer" className="text-3xl font-semibold ml-6 mr-2 text-navbarText">
          <FaGithub />
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between items-center w-full">
        {/* Logo and Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link href="https://arjun-s.in" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl font-semibold text-navbarText flex items-center">
            <TbHexagonLetterAFilled size={20} />
          </Link>
          <Button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="bg-transparent text-navbarText hover:bg-navbarHover p-2 h-8 w-8 md:h-auto md:w-auto"
            variant="ghost"
          >
            {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </Button>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button onClick={handleRunCode} className="bg-runButton text-runButtonText hover:bg-runButtonHover text-xs px-2 py-1 h-8 md:h-auto">
            <FaPlay size={12} />
            <span className="ml-1">Run</span>
          </Button>
          <Button onClick={handleThemeClick} className="bg-none text-navbarText hover:bg-navbarHover p-2 h-8 w-8 md:h-auto md:w-auto" variant="ghost">
            {theme === "light" ? <CiLight size={18} /> : <CiDark size={18} />}
          </Button>
          <Link href="https://github.com/arjunrk-test/code-compiler-next" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-navbarText flex items-center">
            <FaGithub size={18} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pb-3 space-y-3 border-t border-navbarHover pt-3">
          {/* File Menu */}
          <div className="px-2">
            <Select>
              <SelectTrigger className="w-full bg-transparent border border-navbarHover text-navbarText hover:bg-navbarHover text-sm">
                <SelectValue placeholder="File" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="open" className="flex justify-between text-sm">
                  <span>Open File</span>
                </SelectItem>
                <SelectItem value="save" className="flex justify-between text-sm">
                  <span>Save</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Dropdown */}
          <div className="px-2">
            <Select onValueChange={handleLanguageChange} value={selectedLanguage}>
              <SelectTrigger className="w-full bg-transparent border border-navbarHover text-navbarText hover:bg-navbarHover text-sm">
                <SelectValue placeholder="Languages" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                {languages.map(([language, version]) => (
                  <SelectItem key={language} value={language} className="capitalize flex justify-between items-center text-sm">
                    <span className="capitalize">{language}</span>
                    <span className="ml-auto text-gray-500 text-sm">&nbsp;{version}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
