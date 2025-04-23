import React from 'react'
import TopicCard from '../ui/TopicCard'
import { TopicsData } from '../../utils/TopicsList'

export default function TopicAndSocialSection() {
  return (
    <div>
      <div>
        <div className="justify-items-center container mx-auto py-10 text-center">
          <h1 className="text-5xl text-primary-400 font-semibold">Topics Cloud</h1>
            <h3 className="text-2xl text-primary-700 font-semibold pt-5">
              You can find videos and courses on topics and much more
            </h3>
        </div>
      </div>
      <div className="max-w-7xl min-h-96 flex mx-auto relative">
      <div className="absolute hidden lg:block left-[10rem] w-[1000px] h-[400px] bg-primary-1200 blur-3xl rounded-full z-0 opacity-50"></div>
      {TopicsData.map((item, idx) => (
        <TopicCard
          key={idx}
          posX={item.posX}
          posY={item.posY}
          text={item.text}
          link={item.link}
        />
      ))}
      </div>
    </div>
  )
}
