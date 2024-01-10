'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Home from '../page';
import Link from 'next/link'


function Navbar() {
  const navbarLinks=[{
    "name":'HOME',
    "href":"/home",
  },
  {
    "name":'ABOUT US',
    "href":"/about",
  },
  {
    "name":'INVEST IN RWANDA',
    "href":"/invest",
  },
  {
    "name":'UPDATES AND EVENTS',
    "href":"/events",
  }
]


const [IsactiveLink, setIsactiveLink] = useState('');
const activity = (name, event) => {
  event.preventDefault(); // Prevent full page reload
  console.log(`Clicked on ${name}`);
  setIsactiveLink(name);
};
  
console.log(IsactiveLink);
  return (
    <div>
        

      <nav class="bg-white border-white border-b-2 shadow-md ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/Images/logo.png" class="h-16" alt="Flowbite Logo" width="140" height="120"/>
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse " id="navbar-cta">
          <div class="pr-8">
            <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSfoiMc0dCaNdg-0ASyb9Iv9VErOpSocLqlntyLQRq9FSjcc4Q/viewform')} type="button" class="hidden md:hidden hover:drop-shadow-lg lg:hidden xl:inline-block text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue font-medium rounded-lg text-base px-4 py-3 text-center hover:scale-110" target="_blank">Become A Member</button>
            </div>
            <button type="button" class="hidden hover:drop-shadow-lg md:hidden lg:hidden xl:inline-block text-white hover:bg-blue bg-blue border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue font-medium rounded-lg text-base px-4 py-3 text-center hover:scale-110" >Contact Us</button>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5 text-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div class="items-center ml-24 justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navbarLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsactiveLink(link.name)}
                  className={`block py-2 px-3 md:p-0 text-gray-700 font-light hover:text-blue rounded md:bg-transparent text-base ${IsactiveLink === link.name ? "text-blue !font-extrabold" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar