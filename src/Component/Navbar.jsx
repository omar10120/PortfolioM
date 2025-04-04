import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';
import { Outlet, Link ,} from "react-router-dom";
import { Routes, Route, useLocation } from 'react-router-dom';




  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  const [navigation, setNavigation] = useState([

    { name: 'About', href: '/', current: true },
    { name: 'Resume', href: 'Resume', current: false },
    { name: 'Portfolio', href: 'Portfolio', current: false },
    // { name: 'Blog', href: 'Blog', current: false },
    { name: 'Contact', href: 'Contact', current: false },
  ])



  const handleClick = (clickedItem) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        
        item.name === clickedItem.name
          ? { ...item, current: true} // Set current to true for the clicked item
          : { ...item, current: false } // Set current to false for other items
      )
    );
  };

  return (
    
    <Disclosure as="nav" className="  w-full  shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:bg-navbar  border-[rgba(0,0,0,0.60)] rounded-2xl md:rounded-tl-[0] md:rounded-br-[0] md:border-t-0 md:border-r-0 md:border-t-0 border-grey-700  ">
      <div className="w-full ">
        <div className="relative flex h-16 items-center justify-between  ">
          <div className="flex flex-1 items-center justify-center  sm:justify-center ">
              <div className="flex space-x-4 md:px-2  ">

                
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    onClick={() => handleClick(item)}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-blue-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 max-md:px-1 py-2 text-sm font-medium ',
                    )}
                    >
                    {item.name}
                  </Link>
                ))}

        
           
              </div>
            </div>
        </div>
        
      </div>

   
    </Disclosure>
  )
}
