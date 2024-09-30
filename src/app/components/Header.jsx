"use client"
import React, { useState } from "react";
import logo from'../Assets/logo.webp'
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
    const [open, setOpen] = useState(false);
const location =usePathname()
console.log(location)
return (
<header className="py-1 bg-blue-900 text-white">
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button
            type="button"
            onClick={()=>{
                setOpen(!open)
            }}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
        >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {/*
                                Icon when menu is closed.
                    
                                Menu open: "hidden", Menu closed: "block"
                            */}
            <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            </svg>
            {/*
                                Icon when menu is open.
                    
                                Menu open: "block", Menu closed: "hidden"
                            */}
            <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
            </svg>
        </button>
        </div>
        <div className="flex flex-1 items-center   justify-center   sm:justify-between">
        <div className="flex flex-shrink-0 items-center">
            <Image className="h-32 w-full" src={logo} alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block ">
            <div className="flex space-x-4 capitalize">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
                href="/"
                className={`rounded-md  ${location==='/'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950`}
                aria-current="page"
            >
                home
            </a>
            <a
                href="/About"
                className={`rounded-md  ${location==='/About'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950 `}
            >
                about us
            </a>
            <a
                href="/Products"
                className={`rounded-md  ${location==='/Products'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950 `}
            >
                products
            </a>
            <a
                href="/Why"
                className={`rounded-md  ${location==='/Why'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950 `}
            >
                why atc
            </a>
            <a
                href="/Profile"
                className={`rounded-md  ${location==='/Profile'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950 `}
            >
                profile
            </a>
            <a
                href="/Contact"
                className={`rounded-md  ${location==='/Contact'?'bg-blue-950 ':''} px-3 py-2 text-sm font-medium  hover:bg-blue-950 `}
            >
                contact us
            </a>
            </div>
        </div>
        </div>
    </div>
    </section>

    {/* Mobile menu, show/hide based on menu state. */}
    {open?
    <section className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2 capitalize">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <a
        href="/"
        className={`block rounded-md ${location==='/'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        aria-current="page"
        >
        home
        </a>
        <a
        href="/About"
        className={`block rounded-md ${location==='/About'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        >
        about us
        </a>
        <a
        href="/Products"
        className={`block rounded-md ${location==='/Products'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        >
        products
        </a>
        <a
        href="/Why"
        className={`block rounded-md ${location==='/Why'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        >
        why atc
        </a>
        <a
        href="/Profile"
        className={`block rounded-md ${location==='/Profile'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        >
        profile
        </a>
        <a
        href="/Contact"
        className={`block rounded-md ${location==='/Contact'?'bg-blue-950 ':''} px-3 py-2 text-base font-medium `}
        >
        contact us
        </a>
    </div>
    </section>:null
}
</header>

);
};

export default Header;
