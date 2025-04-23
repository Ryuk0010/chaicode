import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { twitterData } from "../../utils/twitterTestimonials"; 
import TweetCard from "../ui/TweetCard";

export default function TwitterLove() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, 
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    arrows: false,
    pauseOnHover: false, 
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
          infinite: true,
          dots: false 
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }

    ]
  };

  return (
    // tweet Love
    <div className="w-full mx-auto">
      <div className="justify-items-center container mx-auto text-center px-4">
        <h3 className="text-2xl text-primary-700 font-semibold py-2">
          Love that we get from our community
        </h3>
        <h1 className="text-4xl md:text-5xl text-primary-400 font-semibold">
           Tweet Love ❤️
        </h1>
      </div>

    
      <div className="py-10 relative overflow-hidden px-0 md:px-4">
        <div className="absolute left-[-150px] md:left-[-200px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary-1200 blur-2xl rounded-full z-1 opacity-25"></div>
        <div className="absolute right-[-150px] md:right-[-200px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary-1200 blur-2xl rounded-full z-1 opacity-25"></div>

        <div> 
          <Slider {...settings}>
            {twitterData.map((data, index) => (
              <div key={index} className="py-4 px-2 md:px-3">
                <TweetCard
                  name={data.name}
                  username={data.username}
                  tweet={data.tweet}
                  tweetUrl={data.tweetUrl}
                  date={data.date}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='my-10 flex justify-center px-4'>
        <button
          className="group px-4 py-2 flex items-center text-lg text-primary-700 border-2 border-r-4 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:border-r-2 hover:text-white transition-all duration-300 cursor-pointer"
          onClick={() => window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17"}
        >
          Join Cohort Live Classes
        </button>
      </div>
    </div>
  );
}