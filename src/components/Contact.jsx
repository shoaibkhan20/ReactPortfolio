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
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pb-10 pt-[100px]'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='py-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>

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
  )
}
export default Contact