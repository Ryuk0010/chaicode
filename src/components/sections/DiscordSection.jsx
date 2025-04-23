import React from 'react';
import discordlogo from "../../assets/ChatGPT_discord.png"

export default function DiscordSection() {

  return (
    <section className="mx-auto my-16 md:my-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className='text-center mb-12 md:mb-16'>
        <h1 className="inline-block px-4 text-primary-700 text-4xl sm:text-5xl lg:text-6xl font-bold transition-all">
          Join Our Community
        </h1>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between border border-orange-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute hidden md:block left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-primary-1100 blur-3xl rounded-full z-0 opacity-10 pointer-events-none"></div>
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 relative z-10">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="bg-[#5865F2] p-1 rounded-xl md:rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <img
                src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/discord.svg"
                alt="Discord icon"
                className="w-full h-full"
              />
            </div>
            <span className="text-2xl sm:text-3xl font-semibold text-[#5865F2] tracking-tight">
              Discord
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 leading-snug mb-4">
              Join our Community<br/>Where Creativity Thrives
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Connect with like-minded learners, ask questions, share your wins, and stay in the loop with updates, exclusive content.
            </p>
            <a
              href="https://discord.com/invite/478YtKdN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-700 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-orange-500 transition-colors duration-300 text-sm sm:text-base"
            >
              Join Discord
            </a>
          </div>

          <p className="text-gray-400 mt-6 text-lg sm:text-xl font-bold max-w-md mx-auto md:mx-0">
            80,000+ Active coders
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center relative z-10 md:basis-1/2 lg:basis-2/5 mt-8 md:mt-0">
          <div className='border border-orange-500 rounded-xl md:rounded-2xl p-2 bg-black/20'>
            <img
              src={discordlogo}
              alt="Discord Community Screenshot"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-lg md:rounded-xl"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/7289DA/FFFFFF?text=Discord+Error" }} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
