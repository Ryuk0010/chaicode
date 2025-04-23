import React from 'react'

export default function FreeApi() {
  return (
    <section className="flex mx-auto items-center my-24 lg:max-w-7xl px-10">
      <div className="text-center">
        <div className="inline-block px-4 my-14 text-primary-700 text-6xl font-bold transition-all">
          FreeAPI - Open Source
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border border-orange-500 rounded-3xl p-10 shadow-md gap-18">


          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-6">

            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-500 leading-snug mb-4">
                Unlock Your Potential<br />with Our API Hub
              </h2>
              <p className="text-gray-600 text-center md:text-left mb-6 max-w-md mx-auto md:mx-0">
                Our API Hub is designed to streamline your learning experience in API handling across various programming languages. With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications. Join us to enhance your skills and take your coding projects to the next level!
              </p>

              <a
                href="https://freeapi.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-700 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-500 transition-all"
              >
                CheckOut FreeAPI
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className='border-1 border-orange-500 rounded-2xl overflow-hidden px-2 py-2'>
              <iframe
                className="rounded-3xl w-[20rem] md:w-[36rem] h-64 md:h-80"
                src="https://www.youtube.com/embed/xJq0EQMFGyg?si=b2L2Tuho91t573Yt"
                title="FreeAPI Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
