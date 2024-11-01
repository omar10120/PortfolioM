import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, Link ,} from "react-router-dom";
import React, { useState, useEffect } from 'react';



  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  const [navigation, setNavigation] = useState([

    { name: 'About', href: 'About', current: true },
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
    <Disclosure as="nav" className="  w-full  shadow-[8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:bg-navbar border-[rgba(0,0,0,0.60)] rounded-2xl md:rounded-tl-[0] md:rounded-br-[0] md:border-t-0 md:border-r-0 md:border-t-0 border-grey-700 ">
      <div className="w-full ">
        <div className="relative flex h-16 items-center justify-between  ">
          <div className="flex flex-1 items-center justify-center  sm:justify-center ">
              <div className="flex space-x-4 md:px-2  ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => handleClick(item)}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-blue-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 max-md:px-1 py-2 text-sm font-medium ',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              onClick={() => handleClick(item)}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
