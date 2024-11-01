import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  const [navname, setNavname] = useState('About');
  const [navigation, setNavigation] = useState([
    { name: 'About', href: '#', current: true },
    { name: 'Resume', href: '#', current: false },
    { name: 'Portfolio', href: '#', current: false },
    // { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
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
      <div className="absolute  ">
        <Disclosure as="nav" className="w-full shadow-lg md:bg-navbar border-gray-700 rounded-2xl rounded-br-none rounded-tl-none	 ">
          <div className="w-full">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:justify-center">
                <div className="flex space-x-4 md:px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => handleClick(item)}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'text-blue-600'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 max-md:px-1 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>

      <div className="h-full max-md:block">
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
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}
