import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpeg';
import { Link } from "react-scroll"; 
import Typed from 'react-typed'
import React from 'react';

const Home = () => {
  // const [imag,setImage] = useState(false)
  return (
    <div
    name="home"
    className="h-[700px] md:w-full bg-[#0a192f]"
  >
    <div className="pt-[100px]  sm:pt-0 bg-[#0a192f]  max-w-[1100px] mx-auto flex flex-col items-center justify-center h-full md:flex-row">
      <div className="flex flex-col justify-center h-full md:w-[60%] px-10 sm:px-[100px]">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          <span className='text-sky-800 sm:text-7xl'>I'm a</span> <br/><Typed
                    strings={['Web developer','Programmer','Graphics Designer']}
                    typeSpeed={100}
                    backSpeed={80}
                    loop={true}
                />
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I have 2 years of experience in web development.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next.js and Mongodb.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-sky-800 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>

      <div className='w-full md:w-[25%] mr-auto object-left duration-300'>
        <img
          src={me}  
          alt="my profile"
          className="rounded-xl shadow-lg mx-auto w-[80%] md:w-full md:brightness-[70%]"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;