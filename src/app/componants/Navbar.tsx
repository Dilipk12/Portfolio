"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-3 ">
        <Link href="/">
          <h1 className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-black font-bold tracking-wide">
              ConfiDental
            </span>
          </h1>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-black ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/"
               className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center duration-300 hover:text-sky-500  ">
                Home
              
            </Link>
            <Link href="/about"
               className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center duration-300 hover:text-sky-500 ">
                About us
              
            </Link>
            <Link href="/service"
               className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center duration-300 hover:text-sky-500 ">
                Service
              
            </Link>
            <Link href="/contact"
               className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center duration-300 hover:text-sky-500 ">
                Contact
              
            </Link>
            <Link
              href="/contact"
              className="bg-[#26292f] hover:bg-zinc-700 duration-300 hover:scale-90 lg:ml-10 px-8 py-4 font-semibold text-sm text-white rounded-full"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


