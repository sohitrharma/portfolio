import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Beam from "./Beam/Beam";
import { educationTimeline } from "@/data";

const Education = () => {
  return (
    <div id="education" className="py-20 w-full">
      <h1 className="heading mb-12">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent -left-4 md:-left-10">
          <Beam showBeam={true} className="left-1" />
        </div>
        {educationTimeline.map((item, idx) => (
          <div
            key={`timeline-item-${idx}`}
            className="border-b border-zinc-800 pb-8 mb-8 pl-10 md:pl-20 relative"
          >
            <div className="absolute left-0 top-2 md:top-1 transform -translate-x-1/2">
              <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-200 mb-2">
              {item.degree}
            </h2>
            <div className="text-zinc-400 mb-4">
              <p className="flex items-center mb-1">
                <HiOutlineAcademicCap className="mr-2 text-cyan-500" />
                {item.institution}
              </p>
              <p className="flex items-center mb-1">
                <HiOutlineCalendar className="mr-2 text-cyan-500" />
                {item.duration}
              </p>
              <p className="flex items-center mb-1">
                <HiOutlineLocationMarker className="mr-2 text-cyan-500" />
                {item.location}
              </p>
              <p className="font-semibold">GPA: {item.gpa}</p>
            </div>
            {item.coursework.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-zinc-300 mb-2">
                  Relevant Coursework:
                </h3>
                <ul className="list-disc list-inside text-zinc-400 pl-5">
                  {item.coursework.map((course, courseIdx) => (
                    <li key={`course-${idx}-${courseIdx}`}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
