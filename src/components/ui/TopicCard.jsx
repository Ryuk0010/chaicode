import React, { useEffect, useState } from 'react'

export default function TopicCard({ posX, posY, text, link }) {
  const [isVisible, setIsVisible] = useState(true)

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    const x = posX * 16
    const y = posY * 16

    const isInBounds =
      x >= 0 &&
      x + 150 <= windowSize.width &&
      y >= 0 &&
      y + 50 <= windowSize.height

    setIsVisible(isInBounds)
  }, [windowSize, posX, posY])

  const randomDelay = Math.random() * 3
  const randomMove = (Math.random() * 3) - 1

  if (!isVisible) return null 

  return (
    <div
      className="absolute px-3 py-2 border-2 border-primary-600 text-white rounded-full transition-all duration-300 hover:bg-orange-500 hover:scale-103 hover:shadow-lg hover:shadow-orange-300/40 hover:border-orange-600"
      style={{
        left: `${posX}rem`,
        top: `${posY}rem`,
        animation: `moveCard 3s ease-in-out infinite`,
        animationDelay: `${randomDelay}s`,
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span className="subtle-move">{text}</span>
      </a>
      <style>{`
  .subtle-move {
    display: inline-block;
    animation: subtleMove 3s ease-in-out infinite;
    animation-delay: ${randomDelay}s;
  }

  @keyframes moveCard {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${randomMove}rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes subtleMove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`}</style>

    </div>
  )
}
