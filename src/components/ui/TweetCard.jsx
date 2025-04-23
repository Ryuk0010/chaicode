import React from 'react'

export default function TweetCard({ name, username, tweet, tweetUrl, date }) {
  return (
    <div className="w-[300px] h-[350px] rounded-[20px] transition-all duration-300 bg-gradient-to-br from-[#ff6600] to-[#c2926a6c] hover:shadow-[0px_0px_30px_1px_rgba(255,165,0,0.3)]">
      <div className="w-full h-full rounded-[15px] bg-[#1a1a1a] transition-all duration-200 hover:scale-95 hover:rounded-[20px] p-5 text-white flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-blue-400">@{username}</p>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: tweet }}
        ></p>

        <p className="text-xs text-gray-400 mt-auto">
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {date}
          </a>
        </p>
      </div>
    </div>
  )
}
