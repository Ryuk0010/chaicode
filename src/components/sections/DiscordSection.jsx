import React from 'react'
import discordlogo from "../../assets/ChatGPT_discord.png"

export default function DiscordSection() {

  return (
    <section className="flex mx-auto my-24 max-w-7xl px-6 md:px-16">
        <div className='text-center'>
            <div className="inline-block px-4 my-14 text-primary-700 text-6xl font-bold transition-all">
                Join Our Community
            </div>


            <div className="flex flex-col md:flex-row items-center justify-between border border-orange-500 rounded-3xl p-10 shadow-md relative">
            <div className="absolute hidden md:block left-[200px] top-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-1100 blur-2xl rounded-full z-1 opacity-15"></div>

            <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#5865F2] p-1 rounded-2xl w-14 h-14 flex items-center justify-center">
                <img 
                src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/discord.svg" 
                alt="Discord icon"
                className="w-full h-full"
                />
            </div>
    
            <span className="text-3xl font-semibold text-[#5865F2] tracking-tight">
                Discord
            </span>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-500 leading-snug mb-4">
                    Join our Community<br/>Where Creativity Thrives
                </h2>
                <p className="text-gray-600 mb-6 max-w-md">
                    Connect with like-minded learners, ask questions, share your wins, and stay in the loop with updates, exclusive content.
                </p>
                <a 
                    href="https://discord.com/invite/478YtKdN" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-700 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-500 transition-all "
                >
                    Join Discord
                </a>
   
            </div>
            <p className="text-gray-400 px-2 text-xl font-bold max-w-md py-3">
                        80,000+ Active coders
                    </p>
            </div>
            <div className="flex-1 flex justify-center">
                <div className='border-1 border-orange-500 rounded-2xl'>
                    <img 
                    src={discordlogo} 
                    alt="Discord" 
                    className="w-48 md:w-[64rem] object-contain px-5 py-5 rounded-3xl"
                />
                </div>
            
            </div>
        </div>
        </div>
        



    </section>
  )
}
