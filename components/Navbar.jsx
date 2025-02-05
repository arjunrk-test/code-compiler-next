"use client";
import Link from "next/link";
import { useState } from "react";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"; 
import { Language_Versions } from "@/app/Constants";
import { Button } from "./ui/button";
import { FaGithub, FaPlay } from "react-icons/fa";
import { CiLight, CiDark } from "react-icons/ci";

const languages = Object.entries(Language_Versions);
const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const handleThemeClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <nav className="bg-[#1B1C1D] text-white p-2">
      <div className="flex justify-between items-center w-full">

         {/* Logo */}
        <Link href="https://arjun-s.in"  
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-3xl font-semibold ml-2 mr-6"
        >
          <TbHexagonLetterAFilled/>
        </Link>

         {/* File menu */}
         <div className="flex justify-between items-center ml-2 mr-6">
            <Select>
               <SelectTrigger className="w-[100px] bg-transparent border-none text-white hover:bg-[#2D2E2F] text-sm">
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
            <Select>
               <SelectTrigger className=" w-[150px] bg-transparent border-none text-white hover:bg-[#2d2e2f] text-sm">
                  <SelectValue placeholder="Languages" />
               </SelectTrigger>
               <SelectContent className="bg-white text-black">
                  {
                     languages.map(([language, version]) => (
                        <SelectItem 
                           key={language} 
                           value={language}
                           className="capitalize flex justify-between items-center text-sm"
                           >
                              <span>{language}</span>
                              <span className="ml-auto text-gray-500 text-sm">&nbsp;{version}</span>
                        </SelectItem>
                     ))
                  }
               </SelectContent>
            </Select>
         </div>

         {/* Run Button */}
         <div className="flex justify-between items-center w-full ml-2 mr-6">
            <Button className="bg-[#007fbf] text-white hover:bg-[#0072bb] text-sm">
               <FaPlay />
               <span>Run Code</span>
            </Button>
         </div>

         {/* Theme */}
         <div className="flex justify-between items-center ml-2 mr-2">
            <Button 
               onClick={handleThemeClick}
               className="bg-none text-white hover:bg-[#2D2E2F] hover:text-white"
               variant="ghost"
            >
               {theme === "light" && <CiLight />}
               {theme === "dark" && <CiDark />}
            </Button>
         </div>

         {/* Github Repo link */}
         <Link href="https://github.com/arjunrk-test/judge0-clone"  
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-3xl font-semibold ml-6 mr-2"
         >
            <FaGithub/>
         </Link>

      </div>
    </nav>
  );
};

export default Navbar;
