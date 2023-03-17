import React from 'react';
// import Dummy from '../assets/code2.png';
import upwork from '../assets/upwork.jpeg'
import portfolio_image from '../assets/porfolio_web.jpeg'
import company_web from '../assets/company_web.jpeg'

const Works = () => {

  const worksData = [
    {
      title:"Upword-UI Clone",
      disccription:"Clone of upwork website using html , css , javascript",
      imageUrl : upwork,
      Demolink : upwork,
      Codelink : '#'
    },
    {
      title:"Personal Portfolio",
      disccription:"Created personal portfolio using html , css , bootstrap , javascript",
      imageUrl : portfolio_image,
      Demolink : portfolio_image,
      Codelink : '#'
    },
    {
      title:"Company Website",
      disccription:"Created company website using html , css , javascript",
      imageUrl : company_web,
      Demolink : company_web,
      Codelink : '#'
    },

  ]
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Works
          </p>
          <p className='py-6 text-lg sm:text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* will iterate the works data */}

          {
            worksData.map((item , index)=>{
             return <div
                style={{ backgroundImage: `url(${item.imageUrl})`,"backgroundPosition":"center top" }}
                key={index}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-80 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                {item.title}
              </span>
              <p className='text-center'>{item.disccription}</p>
              <div className='pt-8 text-center'>
                <a href={item.Demolink} target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href={item.Codelink}>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           })
           }   {/* The End of the Iteration*/}

           {/* temprory messege for untill i upload my works */}


          {/* <div className='text-white text-4xl w-full text-center border-2 border-sky-500 p-10 col-span-full shadow-lg shadow-sky-400'>Currently working on Projects. i will upload portfolio projects soon..</div> */}

        </div>
      </div>

    </div>
  );
};
export default Works;