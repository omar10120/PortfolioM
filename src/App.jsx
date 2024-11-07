import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route , useNavigate } from "react-router-dom";

// Import components
import ContactNav from './Component/ContactNav'
import About_asside from './Component/About_asside'
import Navbar from './Component/Navbar'
import Navbarcopy from './Component/Navbarcopy'
import Navbarbottom from './Component/Navbarcopybottom'
import Resume from './Component/Resume'
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import About from './Component/About';


function App() {

        const [isSticky, setIsSticky] = useState(false);
        const aboutRef = useRef(null);
        const contactNavRef = useRef(null);
        const navigate = useNavigate();

        const goToAbout = () => {
            navigate('/');
          };

        function classNames(...classes) {
          return classes.filter(Boolean).join(' ')
        }
        const [navname,setnavname] = useState('')
        const [navigation, setNavigation] = useState([

          { name: 'About', href: '#', current: true },
          { name: 'Resume', href: '#', current: false },
          { name: 'Portfolio', href: '#', current: false },
          { name: 'Blog', href: '#', current: false },
          { name: 'Contact', href: '#', current: false },
        ])

        
        useEffect(() => {
          const handleObserver = (entries) => {
              entries.forEach((entry) => {
                  if (!entry.isIntersecting) {
                      setIsSticky(true);
                  } else {
                      setIsSticky(false);
                  }
              });
                goToAbout();
          };

          const observer = new IntersectionObserver(handleObserver, {
              root: null,
              threshold: 0,
          });

          if (aboutRef.current) {
              observer.observe(aboutRef.current);
          }

          return () => {
              if (aboutRef.current) observer.unobserve(aboutRef.current);
          };
      }, []);
      


      
  return (
      <>
        
            <div className="w-full flex justify-center items-center h-full p-16 max-sm:p-0 max-xl:py-8 max-xl:px-0 max-sm:py-8 transition-all duration-500 animate-slide-in">
                <div className="w-9/12 h-full flex space-x-4 max-xl:space-x-0 max-xl:space-y-4 max-xl:flex-col transition-all duration-500 ease-in-out justify-center max-xl:w-10/12 max-sm:w-11/12 animate-fade-in">
                        <ContactNav />
                    {/* start continer */}
                    <div className='w-4/5 rounded-2xl max-xl:w-full transition   shadow-custom-4 '>
                        <div className='flex justify-center flex-col p-8 h-full  bg-component rounded-2xl border-solid  border-grey-700 relative  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]     '>                  
                            <Navbarcopy  /> 
                            <Routes>
                                <Route path="/" element={[ <About/>  ]} /> 
                                {/* <Route path="About" element={[ <About/>]} />  */}
                                <Route path="/Portfolio"  element={[<Portfolio/>]} /> 
                                <Route path="/Resume" element={[<Resume />]} /> 
                                <Route path="/Blog" element={[<Blog/>]} /> 
                                <Route path="/Contact" element={[<Contact />]} /> 
                                <Route path="*" element={<About />} />
                            </Routes>
                    </div>
                    </div>
                    {/* end continer */}
                </div>
            </div>
            <div className="fixed bottom-0 z-20 w-full backdrop-blur-2xl md:hidden w-2/3 backdrop-brightness-50"><Navbar /></div>
      </>
  );
}

export default App;