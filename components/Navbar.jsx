"use client";
import Link from "next/link";
import { TbHexagonLetterAFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bg-[#1B1C1D] text-white p-3">
      <div className="flex justify-between items-center w-full">

         {/* Logo */}
        <Link href="https://arjun-s.in"  
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-3xl font-semibold ml-2"
        >
          <TbHexagonLetterAFilled/>
        </Link>

         {/* File menu */}

      </div>
    </nav>
  );
};

export default Navbar;
