import React,{useCallback ,useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';
// import Dummy from '../assets/code2.png';
import upworkClone from '../assets/upwork.jpeg'
import portfolio_web from '../assets/porfolio_web.jpeg'
import ecommerce_web from '../assets/ecom.png'
import calc from '../assets/calc.png'


const Works = () => {

  const [currentImage, setCurrentImage] = useState(0);  // implementing react-image-viewer
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    upworkClone,
    portfolio_web,
    ecommerce_web,
    calc
  ]
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  //? above code is for implemting image viewer for portfolio images

  const worksData = [
    {
      title:"Upword-UI Clone",
      disccription:"Clone of upwork website using html , css , javascript",
      imageUrl : upworkClone,
      Codelink : 'https://github.com/shoaibkhan20/Upwork-ui-clone',
      Demolink : 'https://shoaibkhan20.github.io/Upwork-ui-clone/'
    },
    {
      title:"Bootstrap Portfolio",
      disccription:"Created personal portfolio using html , css , bootstrap , javascript",
      imageUrl : portfolio_web,
      Codelink : 'https://github.com/shoaibkhan20/Bootstrap-Resume',
      Demolink : 'https://shoaibkhan20.github.io/Bootstrap-Resume/'
    },
    {
      title:"Ecommerce Shop",
      disccription:"Created Ecommerce website with all advance features including cart,cost calculation using ReactJS",
      imageUrl : ecommerce_web,
      Demolink : 'https://github.com/shoaibkhan20/React-Ecom.git',
      Codelink : 'https://github.com/shoaibkhan20/React-Ecom.git'
    },
    {
      title:"Calculator",
      disccription:"Created calculator using html , css , javascript",
      imageUrl : calc,
      Codelink : 'https://github.com/shoaibkhan20/Arithematic-Calculator',
      Demolink : 'https://shoaibkhan20.github.io/Arithematic-Calculator/'
    }
  ]
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-lg sm:text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* will iterate the works data */}
          {
            worksData.map((item,index)=>{
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
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
                  onClick={()=>openImageViewer(index)}
                >
                  preview
                </button>
                <a href={item.Demolink} target='_blank' rel='noreferrer'>
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
      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}    

        </div>
      </div>

    </div>
  );
};
export default Works;