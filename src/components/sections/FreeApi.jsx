import React from 'react';

export default function FreeApi() {
  return (
    <section className="mx-auto my-16 md:my-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="inline-block px-4 text-primary-700 text-4xl sm:text-5xl lg:text-6xl font-bold transition-all">
          FreeAPI - Open Source
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border border-orange-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg gap-8 md:gap-12 lg:gap-16">

        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 w-full">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 leading-tight sm:leading-snug mb-4">
              Unlock Your Potential<br />with Our API Hub
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
              Our API Hub is designed to streamline your learning experience in API handling across various programming languages. With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications. Join us to enhance your skills and take your coding projects to the next level!
            </p>
            <a
              href="https://freeapi.app/"
              target="_blank"
              rel="noopener noreferrer"

              className="inline-block bg-primary-700 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-orange-500 transition-colors duration-300 text-sm sm:text-base"
            >
              Check Out FreeAPI
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <div className='border border-orange-500 rounded-xl md:rounded-2xl overflow-hidden p-1.5 md:p-2 bg-black/20 w-full max-w-lg aspect-video'> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xJq0EQMFGyg?si=Qqfm_TMj-Pin3BqO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
