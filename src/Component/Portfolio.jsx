import { Disclosure } from '@headlessui/react';
import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [navname, setNavname] = useState('');
  const [loading, setLoading] = useState(true);
  const [navigation, setNavigation] = useState([
    { name: 'All', href: '#', current: true },
    { name: 'Webdesign', href: '#', current: false },
    { name: 'WebDevelopment', href: '#', current: false },
  ]);

  const cardPortfolio = [
    { src: '/src/images/image.png', title: 'CryptoByte', tech: 'web-design' },
    { src: '/src/images/image.png', title: 'CryptoByte', tech: 'webdesign' },
    { src: '/src/images/image.png', title: 'CryptoByte', tech: 'WebDevelopment' },
  ];

  // Set default navigation name if empty
  useEffect(() => {
    if (navname === '') setNavname('All');
  }, [navname]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Set loading time to 1s
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (clickedItem) => {
    setNavname(clickedItem.name);
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItem.name ? { ...item, current: true } : { ...item, current: false }
      )
    );
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="w-full relative flex flex-col h-full  max-md:px-0">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="h-[5px] w-10 bg-gradient-to-r from-[#474bff] to-[#bc48ff] rounded"></div>

        <div className="flex flex-col space-y-5">
          {/* Show loader while loading */}
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Navigation Bar */}
              <Disclosure as="nav" className="w-full ">
                <div className="flex justify-start max-md:justify-center">
                  <div className="flex space-x-4  ">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => handleClick(item)}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'text-blue-700 border-b-2 border-l-2 border-black'
                            : 'text-gray-300 border-b-4 border-l-4 border-black hover:opacity-60',
                          'rounded-md px-3 py-2 text-sm font-medium bg-gray-800 cursor-pointer transition duration-300'
                        )}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Disclosure>

              {/* Portfolio Items */}
              <div
                className={`grid gap-4 w-full place-items-start max-md:place-items-center py-8   ${
                  navname === 'All' ? 'grid-cols-3 max-md:grid-cols-1' : 'grid-cols-2 max-md:grid-cols-1'
                } w-4/5 mx-auto transition-all duration-500 ease-in-out transform ${
                  navname === 'All' ? 'scale-100' : 'scale-95'
                }`}
              >
                {cardPortfolio
                  .filter(
                    (item) =>
                      navname === 'All' || item.tech.toLowerCase() === navname.toLowerCase()
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-3 items-start animate-fadeIn transition-all duration-500"
                    >
                      <div className="w-48 h-50 overflow-hidden rounded-xl flex items-center justify-center group relative ">
                        <img

                          src={item.src}
                          className="w-full h-full  object-cover rounded-xl transition-transform duration-300 ease-in-out W-full  group-hover:scale-110"
                          alt={item.title}
                        />
                        <div className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-60 flex items-center justify-center text-blue-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-start">
                        <div>{item.title}</div>
                        <div className="opacity-60">{item.tech}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;