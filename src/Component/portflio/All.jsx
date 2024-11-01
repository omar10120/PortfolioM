import React from 'react'

const cardPortfolio = [
  {src:'/src/images/image.png', title:'CryptoByte', tech:'web-design'},
  {src:'/src/images/image.png', title:'CryptoByte', tech:'Web-Development'}
]
function all() {
  return (
        <>
      <div className='grid grid-cols-2 gap-2  w-4/5 '>
          {cardPortfolio.map((item)=>(
              <>
                        {item.tech == 'web-design' ? 
                    <div className='flex  flex-col space-y-3'>
                    {/* {item.tech == 'web-design' ? '' :} */}
                  <div className='w-60 '><img src={item.src} className='w-full rounded-xl' alt="" /></div>
                  <div className='flex flex-col '>
                    <div>{item.title}</div>
                    <div className='opacity-60'>{item.tech}</div>
                  </div>
                </div>
                    : ''}
              </>
          ))}
    </div>
    </>
  )
}

export default all