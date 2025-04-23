import React from "react";

import {
  Box,
  CalendarCheck,
  Users,
  Braces,
  Handshake,
  Trophy,
  Youtube,
  Github,
  Twitter,
} from "lucide-react";

export default function WhyChaiCodeSectionCard() {
  return (
    <div className="mx-2">
      <div className="container mx-auto py-12 text-center ">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-primary-400 font-semibold">
        But Why{' '}
        <span className=" text-orange-600 inline-block">
          ChaiCode ?
          
        </span>
      </h1>

        <h3 className="text-xl sm:text-2xl md:text-3xl text-primary-700 font-semibold py-6">
          <span className="text-orange-600">ChaiCode</span> exists because we love tech and teaching
        </h3>
      </div>

      <div className="relative px-4 py-4 md:max-w-[94rem] mx-auto border border-orange-500 rounded-2xl bg-[rgba(7,23,23,0.7)]">
        <div className="hidden md:block">
          <div className="absolute h-0 lg:h-0">
              <div className=" w-[600px] h-[600px] bg-primary-1200 blur-3xl rounded-full opacity-40 animate-orbit"></div>
          </div>

          <div className="absolute hidden lg:block right-[40%] top-[18rem] w-0 h-0">
            <div className="w-[400px] h-[400px] bg-primary-1200 blur-3xl rounded-full opacity-40 animate-orbit animate-pulse" style={{ animationDelay: "5s" }}></div>
          </div>
        </div>





        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="hidden md:flex flex-col gap-4">
            <GridItem
              title="Comprehensive Curriculum"
              description="Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters through practical, easy-to-understand lessons."
              icon={<Box />}
            />
            <GridItem
              title="You finish it"
              description="Our cohorts are a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community."
              icon={<CalendarCheck />}
            />
            <GridItem
              title="Industry Guests"
              description="We're connected with industry experts and regularly bring them into our classes for fun, engaging, and insightful sessions."
              icon={<Users />}
            />
          </div>

          <div className="flex flex-col h-full sm:grid sm:grid-cols-1 gap-4">
            <div className="h-full rounded-2xl border border-gray-500 p-4 md:rounded-3xl md:p-6">
              <div className="flex h-full flex-col justify-between gap-6 rounded-xl p-4 md:p-6 border border-gray-700">

                <div className="flex flex-1 flex-col gap-4 text-white">
                  <img
                    src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/hc-laptop.png"
                    alt="Hitesh Choudhary"
                    className="rounded-xl object-contain w-full max-h-64 shadow-md border border-gray-500"
                  />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    Hitesh Choudhary
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Retired from corporate and now a full-time YouTuber, founder of LCO (acquired),
                    ex-CTO and Sr. Director at PW. Runs 2 YouTube channels (950k & 470k subscribers),
                    has worked in 43 countries.
                  </p>

                  <h3 className="text-xl font-medium mt-4">Approach</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Project-based courses, peer learning, bounties, and tons of interactive activities.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-4">
                    <a href="https://www.youtube.com/@chaiaurcode" className="text-red-800 hover:underline text-sm">
                      <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                    <a href="https://github.com/hiteshchoudhary" className="text-gray-400 hover:underline text-sm">
                      <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                    <a href="https://x.com/Hiteshdotcom" className="text-blue-400 hover:underline text-sm">
                      <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <GridItem
              title="Code and Chill"
              description="Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place."
              icon={<Braces />}
            />
            <GridItem
              title="Improve Communication"
              description="One of the best ways to boost communication skills is through peer learning. Co-learners teach, share, and grow together."
              icon={<Handshake />}
            />
            <GridItem
              title="Bounties"
              description="Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping motivation high."
              icon={<Trophy />}
            />
          </div>
        </div>
      </div>

      <div className='my-10 flex justify-center'>
            <button className="group px-4 py-2 flex items-center text-lg text-primary-700 border-2 border-r-4 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:border-r-2 hover:text-white transition-all duration-300 cursor-pointer" onClick={() => window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17"}>
                Join Cohort Live Classes  
            </button>
      </div>
    </div>
  );
}

const GridItem = ({ icon, title, description }) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="h-full rounded-2.5xl border border-gray-500 p-2 md:rounded-3xl md:p-3">
        <div className="flex h-full flex-col justify-between gap-6 rounded-xl border border-gray-600 p-6">
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-orange-500 p-2 text-gray-300">{icon}</div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm md:text-base text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

