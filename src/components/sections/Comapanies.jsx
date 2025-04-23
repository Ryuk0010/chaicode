import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CompanyNames } from "../../utils/CompanyNames"; 
import CompanyLogoCard from "../ui/CompanyLogoCard";

export default function Companies() {
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
    rtl: true,
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
    
    <div className="w-full mx-auto"> 
      <div className="justify-items-center container mx-auto mb-10">
        <h3 className="text-lg md:text-xl lg:text-2xl text-primary-100 font-semibold py-2 text-center"> 
          Our students are not only working in big tech companies but <br />
          are now founders of funded startups and product creators
        </h3>
      </div>

     
      <div>
        <Slider {...settings}>
          {CompanyNames.map((data, index) => (
            <div key={index} className="px-3 md:px-4">
              <CompanyLogoCard name={data.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}