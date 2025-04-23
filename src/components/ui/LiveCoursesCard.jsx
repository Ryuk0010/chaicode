import React from 'react';

export default function LiveCoursesCard({ link, discount, originalPrice, discountedPrice, name, details, buy }) {
  return (
    <div className="w-96 bg-gradient-to-br my-2 from-gray-800 via-gray-900 to-black text-white rounded-2xl overflow-hidden shadow-2xl duration-300 ring-2 ring-gray-700 hover:ring-orange-500 mx-auto">
      <img src={link} alt="Course Thumbnail" className="w-full py-2 px-2 rounded-2xl h-56 object-cover" />
      
      <div className="p-5 flex flex-col gap-4 h-[20rem] justify-between">
        <div>
          <h3 className="text-xl font-semibold leading-snug line-clamp-2">{name}</h3>
          <p className="mt-2 text-sm text-gray-300">{details}</p>
        </div>

        <div>
          <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl font-bold text-green-400 border-1 border-green-400 rounded-md px-2 py-1">₹{discountedPrice}</span>
            <span className="line-through text-gray-400 text-lg">₹{originalPrice}</span>
          </div>
          <span className="text-base text-red-400 font-semibold">{discount}% OFF</span>
        </div>

        <button
            className="w-[10rem] mt-2 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-800 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-105"
          onClick={() => window.location.href = buy}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
