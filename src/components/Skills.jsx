import React from 'react';

const skills = [
    'Html',
    'CSS',
    'Javascript',
    'React JS',
    'Node/ExpressJS',
    'MySQL',
    'MongoDB',
    'PHP/Laravel',
    'GIT/GITHUB'
]

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-center text-lg sm:text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {
                skills.map((item,index)=>
                    <div key={item+index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4' >{item}</p>
                    </div>
                )
            }
          </div>
      </div>
    </div>
  );
};
export default Skills;