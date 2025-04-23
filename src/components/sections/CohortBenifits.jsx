import React from 'react'
import { CohortBenifitsCard } from '../ui/CohortBenifitsCard';
import { CohortBenifitsData } from "../../utils/CohortBenifitsData";

export default function CohortBenifits() {
  return (
    <div className="px-2 my-32">
        <div className="container mx-auto py-12 text-center">
        <h1 className="text-5xl md:text-7xl text-primary-400 font-semibold">
          Key Benefits of Cohorts
        </h1>
        <h3 className="text-xl md:text-3xl text-primary-700 font-semibold py-6 px-4 md:px-0">
          Cohorts are best way to learn because you finish the course in a timely manner
        </h3>
      </div>
        <div className="relative max-w-[94rem] mx-auto px-8 border-gray-700 border-1 rounded-4xl">
        <div className="absolute right-0 top-30 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600 rounded-full z-0 blur-3xl opacity-10"></div>
        <div className="absolute left-15 bottom-0  w-[600px] h-[600px] bg-primary-600 rounded-full z-0 blur-3xl opacity-10"></div>
            <CohortBenifitsCard items={CohortBenifitsData} />
        </div>
    </div>

  );
}
