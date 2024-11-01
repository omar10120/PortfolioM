import React, { useState, useEffect } from 'react';
import Messageform from './Messageform'

function Contact() {


      const [isLoaded, setIsLoaded] = useState(false); // Track whether the iframe has loaded
      const handleIframeLoad = () => {
        setIsLoaded(true);
      };
  return (
    <>
    <div className=' w-full relative justify-start flex flex-col '>
         <div className='flex flex-col   space-y-6 '>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <div className='w-full'><div className='h-[5px] rounded  w-10 bg-gradient-to-r from-[#474bff] to-[#bc48ff] '></div></div>
        </div>
        <div className='py-5  '>
            {/* start loading */}
                        <div style={{ position: 'relative', height: '' }}>
                {/* Show the loading spinner or message until the iframe is loaded */}
                {!isLoaded && (
                    <div className='rounded-2xl absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-1 bg-map '>
                        <div role="status">
                        <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
               
                        </div>
                    </div>
                )}

                {/* Iframe with map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53228342715!2d36.20049408552258!3d33.507448225272874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1729281913819!5m2!1sen!2s"
                    className='border-0 w-full h-[370px] rounded-2xl'
                    onLoad={handleIframeLoad} // Attach the load event handler
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                </div>
            {/* end loading */}
        </div>
        <div>
             <h1 className='text-2xl font-bold pb-5'>Contact Form</h1>
        </div>

         <Messageform/>
    </div>

    </>
  )
}

export default Contact