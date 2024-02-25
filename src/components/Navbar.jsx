import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='z-[1] fixed w-full h-[80px] flex justify-around items-center bg-[#0a192f] text-gray-300 shadow-lg'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif border px-4 py-1 cursor-pointer'>
          <Link to='home' smooth={true} spy={true} duration={500}>
            shoaib's portfolio
          </Link>
        </h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-3 text-sm'>
        <li >
          <Link to='home' smooth={true} spy={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} spy={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} spy={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} spy={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} spy={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='text-3xl'/> : <FaTimes className='text-3xl'/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} spy={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} spy={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} spy={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} spy={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} spy={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='md:flex fixed bottom-[0] flex-col md:top-[35%] md:left-0 '>
        <ul className='flex  md:flex-col w-full'>
          <li className='md:w-[160px] h-[60px] flex justify-between items-center sm:ml-[-100px] sm:hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/shoaibkhan10/' target='blank'
            >
              Linkedin <FaLinkedin className='ml-1 sm:ml-0 text-lg sm:text-2xl' />
            </a>
          </li>
          <li className='md:w-[160px] h-[60px] flex justify-between items-center sm:ml-[-100px] sm:hover:ml-[-10px] duration-300 bg-[#333333] '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/shoaibkhan20' target='blank'
            >
              Github <FaGithub className='ml-1 sm:ml-0 text-lg sm:text-2xl' />
            </a>
          </li>
          <li className='md:w-[160px] h-[60px] hidden sm:flex justify-between items-center sm:ml-[-100px] sm:hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/#inbox?compose=CllgCJvlHztTWBPcZRTzjZQMTKFbgtMCxmSTSLKqFQbgMSLPzjsnxZsQRdpnPCMqDSfffGchcvq'
              target='blank'
            >
              Email <HiOutlineMail className='ml-1 sm:ml-0 text-lg sm:text-2xl' />
            </a>
          </li>
          <li className='md:w-[160px] h-[60px] flex justify-between items-center sm:ml-[-100px] sm:hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full  text-gray-300'
              href={resume} target='blank'
            >
              Resume <BsFillPersonLinesFill className='ml-1 sm:ml-0 text-lg sm:text-2xl' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;