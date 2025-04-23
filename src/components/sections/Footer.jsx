import React from 'react';

import { SocialIcon } from 'react-social-icons'
import cupLogo from '../icons/cup-logo.svg';
export default function FooterMain() {
  return (
    <footer className="text-white px-6 py-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="flex flex-col gap-3 ">
          <div className="flex items-center text-center gap-2 group cursor-pointer">
            <img
              className="w-12 h-12 group-hover:animate-logo-bounce"
              src={cupLogo}
              alt="Cup Logo"
            />
            <div className="text-2xl font-bold text-amber-600 pt-2 group-hover:animate-logo-bounce">
              ChaiCode
            </div>

            <style>{`
              @keyframes logoBounce {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-5px);
                }
              }

              @keyframes logoGlow {
                0% {
                  text-shadow: 0 0 0px transparent;
                }
                50% {
                  text-shadow: 0 0 10px #fbbf24;
                }
                100% {
                  text-shadow: 0 0 0px transparent;
                }
              }

              .group-hover\\:animate-logo-bounce:hover {
                animation: logoBounce 0.6s ease-in-out;
              }
            `}</style>
          </div>


            <div className="text-gray-400 text-sm">Home for Programmers</div>
            <div className="text-sm mt-4 text-gray-300 font-medium">Socials</div>
            <div className="flex flex-row gap-4 items-center">
              <SocialIcon
                url="https://www.youtube.com/@chaiaurcode"
                className="!w-8 !h-8 transition-transform transform hover:scale-120"
              />
              <SocialIcon
                url="https://www.instagram.com/hiteshchoudharyofficial/?hl=en"
                className="!w-8 !h-8 transition-transform transform hover:scale-120"
              />
              <SocialIcon
                url="https://github.com/hiteshchoudhary"
                className="!w-8 !h-8 transition-transform transform hover:scale-120"
              />
              <SocialIcon
                url="https://x.com/hiteshdotcom"
                className="!w-8 !h-8 transition-transform transform hover:scale-120"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/hiteshchoudhary?originalSubdomain=in"
                className="!w-8 !h-8 transition-transform transform hover:scale-120"
              />
            </div>


          </div>


          <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-semibold mb-2 ">Products</h3>
            <a href="https://courses.chaicode.com/learn" className="text-gray-400 hover:text-orange-500">Courses</a>
            <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" className="text-gray-400 hover:text-orange-500">Cohort</a>
            <a href="https://courses.chaicode.com/learn/batch/about?bundleId=226894" className="text-gray-400 hover:text-orange-500">Coding Hero</a>
            <a href="https://freeapi.app/" className="text-gray-400 hover:text-orange-500">FreeAPI</a>
            <a href="https://masterji.co/" className="text-gray-400 hover:text-orange-500 ">Masterji</a>
          </div>



          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <a href="https://www.chaicode.com/docs" className="text-gray-400 hover:text-orange-500">Docs</a>
            <a href="https://www.chaicode.com/privacy-policy" className="text-gray-400 hover:text-orange-500">Privacy Policy</a>
            <a href="https://www.chaicode.com/terms-of-services" className="text-gray-400 hover:text-orange-500">Terms of Service</a>
            <a href="https://www.chaicode.com/pricing-policy" className="text-gray-400 hover:text-orange-500">Pricing Policy</a>
            <a href="https://www.chaicode.com/refund-policy" className="text-gray-400 hover:text-orange-500">Refund Policy</a>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="text-6xl md:text-8xl lg:text-[12rem] font-extrabold text-amber-600">CHAICODE</div>
          <div className="mt-4 text-sm text-gray-500">© 2025 ChaiCode. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}
