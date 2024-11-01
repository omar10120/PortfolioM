import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Outlet, Link ,} from "react-router-dom";
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Blog from './Blog';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [navname, setNavname] = useState('');
  const [navigation, setNavigation] = useState([
    { name: 'About', href: '/', current: true },
    { name: 'Resume', href: 'Resume', current: false },
    { name: 'Portfolio', href: 'Portfolio', current: false },
    // { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: 'Contact', current: false },
  ]);

  const handleClick = (clickedItem) => {
    setNavname(clickedItem.name);
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItem.name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  const renderComponent = () => {
    switch (navname) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0 z-10 max-md:bottom-0 max-md:top-auto max-md:w-full max-md:opacity-0  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <Disclosure as="nav" className="w-full shadow-lg md:bg-navbar border-gray-700 rounded-2xl rounded-br-none rounded-tl-none	 ">
          <div className="w-full">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:justify-center">
                <div className="flex space-x-4 md:px-2">
                  {navigation.map((item) => (
                    <Link
                    
                      key={item.name}
                      onClick={() => handleClick(item)}
                      to={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'text-blue-600 animate-fadeIn'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white animate-fadeOut',
                        'rounded-md px-3 max-md:px-1 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <Link className="  relative" to="/Resume">resume</Link> */}
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>

      {/* <div className="h-full max-md:hidden">
        <TransitionGroup component={null}>
          <CSSTransition
            key={navname}
            timeout={300}
            classNames={{
              enter: 'animate-fadeIn',
              exit: 'animate-fadeOut',
            }}
          >
            <div className="content">
              {renderComponent()}
              <Link className="  relative" to="/Resume">resume</Link>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div> */}
    </>
  );
}
