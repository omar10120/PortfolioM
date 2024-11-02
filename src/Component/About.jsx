import React from 'react'
import { Button } from "flowbite-react";
import './About.module.css'

// import Dcomp from './Dcomp'


function About() {

  const card = [
    {title : 'FrontEnd', text : 'Crafting responsive and user-friendly interfaces with the latest technologies to deliver seamless, engaging web experiences.', src:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-front-end-ux-and-ui-icons-flaticons-lineal-color-flat-icons.png'},
    {title : 'Datebase', text : 'Designing and managing efficient databases to store, organize, and retrieve data, providing seamless data flow and integration.', src:'https://img.icons8.com/3d-fluency/94/database.png'},
    {title : 'Backend', text : 'Building robust and scalable server-side solutions, ensuring secure, fast, and efficient functionality for your web applications.', src:'https://img.icons8.com/color/48/programming--v1.png'},    
  ]
  const cardBottom = [
    {title : 'Fiverr',a:'', text : 'Coming Soon... ', src:'https://img.icons8.com/color/48/fiverr.png'},
    {title : 'LinkedIn',a:'', text : 'Connect with me on LinkedIn to view my professional journey, network, and explore opportunities for collaboration. ', src:'https://img.icons8.com/3d-fluency/94/linkedin.png'},
  ]
  return (
    <div className=' w-full relative justify-center flex flex-col  '>
        {/* <Dcomp/> */}
        <div className='flex flex-col   space-y-6 '>
            <h1 className='text-3xl font-bold '>About Me  </h1>
            <div className='w-full'><div className='h-[5px] rounded  w-10 bg-gradient-to-r from-[#474bff] to-[#bc48ff] '></div></div>
          <p className='opacity-70'>I am a full-stack developer (React.js & PHP & ASP.Net & C#) with a focus on creating (and sometimes designing) exceptional digital experiences that are fast, accessible, visually engaging, and responsive. I have been building web and desktop applications for over 4 years, and I am always on the cutting edge.</p>
        </div>
        <div className=' flex flex-col  h-full  '>
          
          <div><h1 className='text-2xl font-bold py-5'>What Am Doing</h1></div>
            <div className='w-full grid grid-cols-2 max-md2:grid-cols-1  gap-6   p-3  '>
              {card.map((item)=>(
                //start card what am doing
                <div className='   border-grey-700 drop-shadow-2xl rounded-2xl p-3 flex justify-center max-sm:items-center max-sm:flex-col max-sm:text-center py-5   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] '>
                  
                  <div className=' w-1/5 max-md2:w-3/12 p-2   max-md2:flex max-md2:justify-center '><img src={item.src} className='h-10 w-10' alt="" /></div>
                  <div className=' w-2/3 max-md2:w-full flex flex-col space-y-3 '>
                    <div className='text-xl'>{item.title}</div>
                    <div><p className='opacity-70  '>{item.text}</p></div>
                  </div>
                </div>
                //end card what am doing
              ))}

    
            </div>

        </div>
        <div className='flex justify-center py-6'>
          <button className=" appearance-none block  bg-component  text-white rounded-2xl  border-grey-700 rounded py-3 px-7 leading-tight focus:outline-none focus:border-gray-500 flex space-x-3 items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 max-md:w-full shadow-custom-4 ">
            <div className='text-blue-400'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path></svg>
            </div>
            <div>
              <span className='text-blue-400  ' >Explore Plans</span>
            </div>
            </button>
        </div>
        <div >
        <h1 className='text-2xl font-bold pb-3'>Professional Network</h1>
        <div className='w-full grid grid-cols-2 gap-4 py-3 max-md:grid-cols-1'>
              {cardBottom.map((item)=>(
                //start card what am doing
                // <div className='   border-grey-700  rounded-2xl p-3 flex justify-center max-sm:items-center max-sm:flex-col max-sm:text-center  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  '>
                <div className='   border-grey-700  rounded-2xl p-3 flex justify-center max-sm:items-center max-sm:flex-col max-sm:text-center  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  '>
                <div className=' w-1/5 p-2 '><img src={item.src} className='h-10 w-10' alt="" /></div>
                <div className=' w-2/3 max-sm:w-full flex flex-col space-y-3'>
                  <div className='text-xl'>{item.title}</div>
                  <div><p className='opacity-70 '>{item.text}</p></div>
                </div>
              </div>
                //end card what am doing
              ))}
            </div>
        </div>
     
      
     
    
        
    </div>
  )
}

export default About