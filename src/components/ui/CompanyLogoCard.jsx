import React from 'react'

export default function CompanyLogoCard({ name }) {
  return (
    <div className="w-[300px] h-[150px] rounded-[20px] transition-all duration-300 bg-gradient-to-br from-[#ff6600] to-[#c2926a6c] hover:shadow-[0px_0px_30px_1px_rgba(255,165,0,0.3)]">
      <div className="w-full h-full rounded-[15px] bg-[#1a1a1a] transition-all duration-200 hover:scale-95 hover:rounded-[20px] p-5 text-white flex items-center justify-center">
        <p className="text-3xl font-semibold">{name}</p>
      </div>
    </div>
  )
}
