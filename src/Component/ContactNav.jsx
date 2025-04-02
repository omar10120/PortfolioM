import React, { useState, useEffect, createElement } from 'react';
import './ContactNav.module.css'
// import icons8download50 from '../images/arrowicon.png'
import { RiDownloadFill } from "react-icons/ri";
import Profile  from '../images/profile.png'

const navigation = [
  {name : 'EMAIL',style:' transition transform duration-150 active:scale-90 hover:scale-105',email :  <a href='mailto:amr.dawoodi@hotmail.com' target='_blank'>amr.dawoodi@hotr...</a> , icon : '3' , src:'https://img.icons8.com/ios-filled/50/new-post.png'},
  {name : 'PHONE',style:' transition transform duration-150 active:scale-90 hover:scale-105',email : <a href='https://wa.me/+963999596071' target='_blank'>+96399596071</a>  , icon : '3',src:'https://img.icons8.com/ios-glyphs/30/phone--v1.png' },
  {name : 'Birthday', email : 'August 8, 1999' , icon : '3' ,src:'https://img.icons8.com/ios-filled/50/birth-date.png'},
  {name : 'Location',email : 'Syria , Damascus ' , icon : '3' ,src:'https://img.icons8.com/ios-filled/50/marker.png'},
]
const social = [
  {name : '1',a:'https://www.facebook.com/amr.dawode.7', email : '2' , icon : '3' ,style:'', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg'},
  {name : '1',a:'', email : '2' , icon : '3' ,style:'bg-white', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg'},
  {name : '1',a:'https://www.linkedin.com/in/omar-dawoodi-65044b201/', email : '2' , icon : '3' ,style:'', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'},
  {name : '1',a:'https://github.com/omar10120/', email : '2' , icon : '3' ,style:'bg-white', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'},

]

function ContactNav() {
  
  // start animation
    // State to track the visibility of the div
    const [isVisible, setIsVisible] = useState(window.innerWidth > 1280);
    // State to store current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    // Toggle visibility function
    const toggleVisibility = () => {
      setIsVisible((prevVisible) => !prevVisible);
    };
  
    // Effect to handle screen resize and update visibility based on screen size
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
  
        // Automatically hide div if screen width is 1280px or less
        if (width <= 1280) {
          setIsVisible(false);
        } else if (!isVisible) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup the resize event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, [isVisible]);

  // end animation
  const[ Showcontact , setcontanct ]= useState(true);
  useEffect(() => {
    // setIsVisible(false)
    let width = window.innerWidth;    

    if(width <= 580){
      document.getElementById("buttontext").appendChild=  '';
    }else{
      document.getElementById("buttontext").innerHTML= "Show Contact";
    }

     window.onresize = function(){
       let width = window.innerWidth;     
       if(width <= 580){
         document.getElementById("buttontext").appendChild= ''}else
         document.getElementById("buttontext").innerHTML= "Show Contact";
      } 
      
    
  
      
      
})

    function downloadCV() {
        const cvPath = "../cv/A'mr dawoodi resume.pdf";
        const link = document.createElement("a");
        link.href = cvPath;
        link.setAttribute("download", "A'mr dawoodi resume.pdf"); // Set the download attribute
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  
  return (
    <>
    
        <div className='w-3/12 max-xl:w-full   bg-component h-[775px] max-xl:h-full text-white rounded-2xl border-grey-700    transition ease-in-out duration-300  relative  shadow-custom-4  sticky top-10 '>
            <div className='absolute right-0  opacity-100  xl:opacity-0'><button className='   shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-tr-xl bg-navbar  rounded-bl-xl p-2 hover:bg-gradient-to-r hover:from-indigo-500 ' onClick={()=> toggleVisibility()} id='buttontext'>
              <img src="https://img.icons8.com/color/48/sort-down.png" className='w-4 h-4 grayscale-[90%]'  alt="" />
                </button></div>

          <div className='flex flex-col justify-around h-full w-full  '>
            <div className='w-full max-xl:w-2/3 h-2/5 flex flex-col max-xl:flex-row justify-center max-xl:space-x-4 max-sm:space-x-2 max-xl:justify-start space-y-4 max-xl:space-y-0  items-center mt-5 '>  
              <div><img src={Profile} className='rounded-3xl pointer-events-none max-xl:p-4' alt="no Image" width={150} height={250} /></div>
              <div className='flex flex-col space-y-4 max-sm:space-y-3 max-sm:w-full  '>
                <div><h1 className='font-bold text-2xl max-sm:text-sm'>A'mr dawoodi</h1></div>
                <div className='max-sm:w-2/3 '><div className='bg-[#2B2B2C] px-2 py-1 rounded-xl text-center max-sm:p-2 max-sm:w-5/5 max-sm:text-[10px]  ' >web developer</div></div>
                <div className='max-sm:w-2/3 '><div className='bg-[#2B2B2C] px-2 py-1 rounded-xl text-center max-sm:p-2 max-sm:w-5/5 max-sm:text-[10px] ' >
                  <button  >
                    <div onClick={downloadCV} className='flex items-center space-x-2 gap-3  max-sm:text-[10px] max-sm:gap-2'>download CV <RiDownloadFill/></div>
                    {/* <img  width="18" height="18" src= {icons8download50} alt="download--v1"/> */}
                  </button></div></div>
              </div>
            </div>
        
              <div
        // className={`${
        //   isVisible  ? " opacity-100 h-3/5 max-xl:h-auto max-xl:py-12 " : "opacity-0  h-0 py-0 "
        // } transition-all duration-500 ease-in-out text-center mt-4 overflow-hidden`}>
                className={`${
                  isVisible ? "opacity-100 max-h-custom  max-xl:max-h-screen max-xl:py-12 h-full" : "opacity-0 max-h-0 py-0"
                } transition-all duration-500 ease-in-out text-center mt-4 overflow-hidden`}
                >

                        <div className='h-5 py-2 w-full flex justify-center'><div className=' w-2/3 h-[1px] bg-white opacity-20'></div></div>
                        <div className='w-full h-3/5 flex flex-col justify-evenly  px-3 max-xl:py-2  max-xl:grid max-xl:grid-cols-2 max-xl:gap-y-5  max-sm:flex   max-sm:flex-col '>
                    {navigation.map((item ) => (
                      <div key={item.title} className='w-full  flex  space-x-3 items-center flex justify-center max-sm:justify-start  '>
                            <div className=' min-xl:w-1/4  flex justify-center items-center '>
                              <img src={item.src} className='w-8 h-8 rounded p-1 shadow-inner  border-b-2 border-l-2 bg-white' />
                            </div>              
                            <div className='flex flex-col w-2/3  items-start overflow-hidden '>
                              <div className='opacity-50'>{item.name}</div>
                              <div className={`${item.style}`} >{item.email}</div>
                            </div>                  
                        </div>
                      ))} 
                  </div>
                  <div className='h-5 py-2 w-full flex justify-center'><div className=' w-2/3 h-[1px] bg-white opacity-20'></div></div>
                      <div className='w-full  flex justify-evenly max-xl:justify-start  max-xl:space-x-5 max-xl:px-8 items-center py-3 '>
                      {social.map((item) => (
                        <div key={item.name} >
                          <a href={item.a} target="_blank" rel="noopener noreferrer">
                            <img
                              src={item.src}
                              className={`w-6 h-6 ${item.style} transition transform duration-150 active:scale-90 hover:scale-110 rounded-2xl`}
                              alt={item.name}
                            />
                          </a>
                        </div>
                      ))}
                      </div>
              </div>
            
                  
            </div>
        </div>
    
    </>
  )
}

export default ContactNav