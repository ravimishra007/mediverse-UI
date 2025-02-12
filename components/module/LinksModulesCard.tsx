"use client";

import Link from "next/link";

const LinksModules = () => {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full min-w-xl bg-white rounded-xl shadow-lg p-8 space-y-2 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg">Linked Modules :</h3>
        <div className="flex flex-col text-gray-600 text-sm">
        <Link href="#"> <strong className="hover:text-[#742193] hover:underline ">Circulatory System A-Z</strong> &gt;  The Heart: Introduction to basic Stuctures</Link>
       <Link href="#"><strong className="hover:text-[#742193] hover:underline ">Circulatory System A-Z</strong> &gt;  The Heart: Introduction to basic Stuctures</Link>
       <Link href="#"><strong className="hover:text-[#742193] hover:underline ">Circulatory System A-Z</strong> &gt;  The Heart: Introduction to basic Stuctures</Link>
       <Link href="#"><strong className="hover:text-[#742193] hover:underline ">Circulatory System A-Z</strong> &gt;  The Heart: Introduction to basic Stuctures</Link>
        </div>
      
    </div>
    </div>
  );
};

export default LinksModules;
