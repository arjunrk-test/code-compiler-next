"use client";
import Link from "next/link";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"; 

const Navbar = () => {
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
         <div className="flex justify-between items-center w-full">
            <Select>
               <SelectTrigger className="w-[70px] bg-transparent border-none text-white hover:bg-[#2D2E2F]">
                  <SelectValue placeholder="File" className="font-normal text-[16px]" />
               </SelectTrigger>
               <SelectContent className="bg-white text-black">
                  <SelectItem value="open" className="flex justify-between">
                     <span>Open File</span> 
                  </SelectItem>
                  <SelectItem value="save" className="flex justify-between">
                     <span>Save</span> 
                  </SelectItem>
               </SelectContent>
            </Select>
         </div>

      </div>
    </nav>
  );
};

export default Navbar;
