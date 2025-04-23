import { HoverEffect } from "../ui/FeedbackCardHoverEffect";
import { StudentsFeedbackData } from "../../utils/StudentsFeedbackData";

export default function StudentsFeedback() {
  return (
    <div className=" mx-2 my-32">
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-5xl md:text-7xl text-primary-400 font-semibold">
          Feedbacks From Our Students
        </h1>
        <h3 className="text-xl md:text-3xl text-primary-700 font-semibold py-6 px-4 md:px-0">
          Explore the incredible advantages of enrolling <br/>
          in our courses and enhancing your skills.
        </h3>
      </div>
        <div className="relative max-w-[94rem] mx-auto px-8 border-gray-700 border-1 rounded-4xl">
        <div className="absolute right-0 top-30 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600 rounded-full z-0 blur-3xl opacity-10"></div>
        <div className="absolute left-15 bottom-0  w-[600px] h-[600px] bg-primary-600 rounded-full z-0 blur-3xl opacity-10"></div>
            <HoverEffect items={StudentsFeedbackData} />
        </div>
        
        <div className='my-12 flex justify-center'>
            <button className="group px-4 py-2 flex items-center text-lg text-primary-700 border-2 border-r-4 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:border-r-2 hover:text-white transition-all duration-300 cursor-pointer" onClick={() => window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17"}>
                Join Cohort Live Classes  
            </button>
        </div>
    </div>

  );
}
