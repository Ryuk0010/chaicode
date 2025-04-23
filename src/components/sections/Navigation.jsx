import React from 'react'
import cupLogo from '../icons/cup-logo.svg'
import { NavContent } from '../../utils/Content'

export default function Navigation() {
  return (
    <nav className="text-primary-50 auto flex justify-between max-w-[90rem] container mx-auto px-15  text-lg/8 font-light py-2 md:py-8">
      <a href='#'>
        <div className='text-orange-500 flex items-center '>
          <img className='w-12 h-12' src={cupLogo} alt="Cup Logo" />
          <p className="text-xl font-bold ">ChaiCode</p>
        </div>
      </a>



      <ul className="hidden md:flex items-center gap-x-6">
        {NavContent.map((link) => (
          <li key={link.id} className="flex items-center gap-1">
            <a
              className="hover:text-primary-300 transition-all"
              href={link.href}
              target={link.link === "Udemy" ? "_blank" : "_self"}
              rel={link.link === "Udemy" ? "noopener noreferrer" : undefined}
            >
              {link.link}
            </a>
            {link.link === "Cohorts" && <LiveBlinker />}
          </li>
        ))}
      </ul>


      
      <div>
      <button
        onClick={() => window.location.href = "https://courses.chaicode.com/learn/account/signin"}
        className="bg-orange-500 text-white text-lg/8 font-medium border-1 border-orange-500 rounded-full px-4 py-1 
        hover:bg-orange-100 hover:text-orange-500 transition-all cursor-pointer glow glow-hover">
        Login
      </button>

      </div>
    </nav>
  )
}

export function LiveBlinker () {
  return (
    <span className="live-blinker relative inline-flex w-3 h-3">
      <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
    </span>
  );
}

