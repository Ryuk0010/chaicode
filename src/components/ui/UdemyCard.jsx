import React from 'react';

export default function UdemyCard({ link, name, details, Rating, learners, buy }) {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl w-full my-4 bg-zinc-900 text-white rounded-xl overflow-hidden shadow-lg hover:ring-2 hover:ring-orange-500 transition duration-200">
      <div className="md:w-1/2 w-full bg-black/20 rounded-t-xl md:rounded-l-xl md:rounded-t-none flex items-center justify-center">
        <a href={buy} target="_blank" rel="noopener noreferrer" className="block w-full h-full p-3 md:p-4">
          <img
            src={link}
            alt={`${name} Course Thumbnail`}
            className="w-full h-48 md:h-full object-contain"
          />
        </a>
      </div>

      <div className="flex flex-col justify-between p-4 md:p-5 gap-3 md:gap-4 md:w-1/2">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{name}</h3>
          <p className="text-sm sm:text-base text-gray-300 mt-2 md:mt-2.5">{details}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
           <p className="text-green-400 font-medium text-sm sm:text-base">{Rating}</p>
           <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">{learners} learners</p>
        </div>

        <div className="mt-2">
            <button
              className="bg-primary-600 hover:bg-orange-500 text-white font-medium py-2.5 px-5 w-full sm:w-auto rounded transition duration-200 cursor-pointer text-sm md:text-base self-start"
              onClick={() => window.open(buy, "_blank")}>
              Explore Course
            </button>
        </div>
      </div>
    </div>
  );
}