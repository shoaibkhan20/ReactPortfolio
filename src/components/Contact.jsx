import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import loader from '../assets/loader.gif'

const Contact = () => {

  const form = useRef();
  const [user_messege,setUsermessege] = useState("");
  const [reqMessege,setMessege] = useState("");
  const [changeButton,setButton] = useState(false);

  // empty form after submittin 
function EmptyForm(){
  form.current.user_name.value = ''
  form.current.user_email.value = ''
  setUsermessege('');
}
 
// change buttton again after the messege send
function AfterSend(){ 
    window.setTimeout(()=>{
      setButton(false)
    },2000)
}

//  main funcition of email sending
  const sendEmail = (e) => {
    e.preventDefault();

    setMessege("wait sending"); // show sending messege
    setButton(true);

    emailjs.sendForm('service_h429coe', 'template_clmqtrv', form.current, 'gSGSIm3QeX-hHvgie')
      .then((result) => {
          window.setTimeout(()=>{
            setMessege("Send Successfully");
            EmptyForm();
            AfterSend();
          },2000)
      }, (error) => {
          setMessege("caught error try again")
          AfterSend();
      });
  };
  return (
    <>
    <div name='contact' className='w-full h-full bg-[#0a192f] p-4 md:p-16 pt-[100px] overflow-hidden'>
        <div className='py-8 flex flex-col justify-center w-full h-full items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4 text-center'>Contact Form is working fine. messege me and i will reply you in a minutes</p>
        </div>

      <div className='flex justify-between items-start flex-wrap'>

          <div className="flex justify-center flex-1">
                <div className="h-full pr-6">
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-400 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Peshawer,KPK</p>
                                <p className="text-gray-600 dark:text-slate-400">Pakistan</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none"  stroke="currentColor" strokeWidth="2" trokeLinecap="round"
                                    strokeLinejoin='round' className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"/>
                                    <path d="M15 3a6 6 0 0 1 6 6"/>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-400 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: <a href="tel:+92-332 6958702" className='underline'>+92-332 6958702</a> </p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: muhammadshoaibk065@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                                    <path d="M12 7v5l3 3"/>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-400 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
               </div>
            </div>
            <div className='flex flex-2 flex-col max-w-[600px] w-full'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                 <input className='bg-[#ffff] p-2 rounded' type="text" placeholder='Name' name='user_name' required/>
                 <input className='my-4 p-2 bg-[#ffff] rounded' type="email" placeholder='Email' name='user_email' required autoComplete='off'/>
                 <textarea className='bg-[#ffff] p-2 rounded' name="message" rows="10" placeholder='Message' required autoComplete='off' value={user_messege} onChange={(e)=>setUsermessege(e.target.value)
                }></textarea>
                {
                  !changeButton ? 
                  <button  type='submit' value="send" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-10 mx-auto flex items-center'>Let's Collaborate</button>
                  :
                  <button  className='text-white  px-4 py-3 my-10 mx-auto flex items-center bg-green-800'>{reqMessege}</button>
                }
            </form>
          </div>

          </div>
    </div>
  </>
  )
}
export default Contact