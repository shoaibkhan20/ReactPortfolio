import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 
const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl sm:text-4xl font-bold">
              <p>
                Hi. I'm Shoaib Khan, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am Professional Front-end Web Developer from pakistan. I have 2 years of experience in web development field. i have worked on different front-end projects.
                 I am passionate about creating engaging and user-friendly digital experiences.
              </p>
                 <div>
                   <Link
                     to="skills"
                     smooth
                     duration={500}
                     className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#0a192f] cursor-pointer"
                     >
                       See My Skills
                   <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight size={25} className="ml-3" />
                    </span>
                  </Link>
               </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;