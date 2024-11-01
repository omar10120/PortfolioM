import React, { useEffect, useRef, useState } from 'react';
import ContactNav from './ContactNav'
import About_asside from './About_asside'
import Navbar from './Navbar'
import Navbarcopy from './Navbarcopy'
import Navbarbottom from './Navbarcopybottom'
import Resume from './Resume'

function Home() {

  const [isSticky, setIsSticky] = useState(false);
  const aboutRef = useRef(null);
  const contactNavRef = useRef(null);


  useEffect(() => {
    const handleObserver = (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
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
              <About_asside />
            </div>
          </div>

          <div className="sticky bottom-0 z-20 w-full backdrop-blur-xl md:hidden"><Navbar /></div>

  
        
    </>
  )
}

export default Home