import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Blog from './Blog'
import './About_asside.module.css'
import NavbarCopy from './Navbarcopy'
import NavbarBottom from './Navbarcopybottom'

import { BrowserRouter, Routes, Route , useLocation  } from "react-router-dom";

// start navbar

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, Link ,} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function About_asside({}) {
  const [navname,setnavname] = useState('')



  const [navigation, setNavigation] = useState([

    { name: 'About', href: '#', current: true },
    { name: 'Resume', href: '#', current: false },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ])



  return (
    <>
        <div className='w-4/5 rounded-2xl max-xl:w-full transition  '>
            {/* start navbar */}

                <BrowserRouter>
                  <div className='flex justify-center flex-col p-8 h-full  bg-component rounded-2xl border-solid  border-grey-700 relative  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]     '>                  
                      <NavbarCopy  /> 
                      <div>
                        <Routes>
                            <Route path="/" element={[ <About/>  ]} /> 
                            {/* <Route path="About" element={[ <About/>]} />  */}
                            <Route path="Portfolio"  element={[<Portfolio/>]} /> 
                            <Route path="Resume" element={[<Resume />]} /> 
                            <Route path="Blog" element={[<Blog/>]} /> 
                            <Route path="Contact" element={[<Contact />]} /> 
                        </Routes>
                      </div>
                        </div>
               </BrowserRouter>

            {/* End navbar */}
        </div>
    </>
  )
}

export default About_asside