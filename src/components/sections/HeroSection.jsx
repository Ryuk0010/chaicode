import React from 'react'
import { LiveBlinker } from './Navigation'

export default function HeroSection() {
  return (
    <div className=" flex w-full items-center justify-center">

      <div className="pointer-events-none inset-0 flex items-center justify-center" />


      <div className="px-8 py-20 w-full">
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-primary-700 border-2 rounded-full px-2 py-2 glow text-center">
            Trusted By 1.5M Code Learners
          </p>

          <div className="gap-5 py-12 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-100">
              Consistency and Community
            </h1>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-100 pl-0 sm:pl-5">
              Learning for Coding Courses
            </h2>
          </div>

          <h4 className="text-primary-50 leading-relaxed text-xl sm:text-2xl text-center max-w-5xl">
            Content is everywhere, we provide a learning experience that is unmatched. <br />
            <b>Bounties</b>, <b>peer learning</b>, <b>code reviews</b>, <b>Virtual hostel</b>, <b>Alumni Network</b>, <br />
            <b>Doubt sessions</b>, <b>group projects</b>, and so many activities to keep you on track.
          </h4>


          <div className="my-10">
            <button className="group px-4 py-2 flex items-center text-lg text-primary-700 border-2 border-r-4 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:border-r-2 hover:text-white transition-all duration-300">
              <span className="flex items-center gap-2      ">
                <span className="transition-all duration-300 ml-1 group-hover:ml-4">
                  Check all Live Cohorts
                </span>
                <span className="transition-all glow duration-300 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-75">
                  <LiveBlinker />
                </span>
              </span>
            </button>
          </div>

          <div className="w-full max-w-5xl aspect-[14/8]">
          <iframe className='w-full h-full rounded-xl shadow-lg' width="560" height="315" src="https://www.youtube.com/embed/yG8JMlldoCE?si=mhz-kyuK7p69NJ_f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
