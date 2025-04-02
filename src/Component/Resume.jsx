import React from 'react'
import nextjs from '../images/Next.js.png'
import icons8Nextjs from '../images/icons8-nextjs-48.png'
import icons8Swagger from '../images/icons8Swagger.png'

function Resume() {
  const points=[
   {title:'Damascus • School',year:'JUN 2018', text:'' ,center : 'Professional Baccalaureate Degree (information technology)'},
   {title:'Syrian Virtual University',year:'MAR 2024', text:'Syrian Virtual University' ,center : 'Branch Bachelor in Information Technology (BAIT) Specialization Information Systems and Data networks (ISDN)', style:''},
   {title:'Syrian Virtual University',year:'AUG 2024', text:'' ,center : 'Master of Web Science (M.Sc. in Web Science).' , style1:'h-3', },
  
   
  ]
  const Experience=[
   {title:'Frontend Developer',year:'Feb 2021',text: 'multiple companies , Web page development , Add unique ideas Working on improving old interfaces in a modern way ', style:'h-full'},
   {title:'Backend Developer',year:'Nov 2022',text : 'Working on developing a pharmacy management program , Working on developing the program in a distinctive way , Correct and address errors after studying the project , developing an api and connected with mobile application',style:'h-full',  },
   {title:'Full-Stack Developer',year:'Aug 2024',text : 'create user authentication method , create crud operation , creating APIs to deal with the project , developing the interfaces for the web application',style:'h-3',  },
  ]
  const Frontend=[
    {title:'Frontend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' , tech:'HTML5'},
    {title:'Frontend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' , tech:'CSS'},
    {title:'Frontend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' , tech:'Javascript  '},
    {title:'Frontend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' , tech:'React JS  '},
    {title:'Frontend',style:'mx-5', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' , tech:'Bootstrap  '},
    {title:'Frontend',style:'mx-5', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' , tech:'Tawilwind'},
    {title:'Frontend',style:'mx-5', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' , tech:'SASS'},
    {title:'Frontend',style:'mx-5', src: icons8Nextjs, tech:'Nextjs'},

  ]

  const Backend=[
    {title:'Backend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' , tech:'C#'},
    {title:'Backend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' , tech:'PHP'},
    {title:'Backend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' , tech:'Node.js'},
    {title:'Backend', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' , tech:'ASP.Net'},
    {title:'Backend', src:icons8Nextjs , tech:'Nextjs'},
    
  ]

  const Database=[
    {title:'Database', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' , tech:'SQl Server'},
    {title:'Database', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' , tech:'MySql'},
    {title:'Database', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' , tech:'MongoDb  '},
  ]

  const Tools =[
    {title:'ools & Version Control', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' , tech:'VsCode'},
    {title:'ools & Version Control', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg' , tech:'V Studio'},
    {title:'ools & Version Control', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' ,style:'bg-white rounded-2xl', tech:'GitHub'},
    {title:'ools & Version Control', src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' , tech:'POSTMAN', },
    {title:'ools & Version Control', src:icons8Swagger , tech:'Swagger', },
  ]

  /*end tech*/  
 
  return (
      <div className=' w-full relative justify-start flex '>
          <div className='flex flex-col   space-y-6 '>
              <h1 className='text-3xl font-bold'>Resume</h1>
              <div className='w-full'><div className='h-[5px] rounded  w-10 bg-gradient-to-r from-[#474bff] to-[#bc48ff] '></div>
          </div>
              <div className='w-full flex flex-col    '>
                  <div className='flex space-x-8'>
                    <div className='flex flex-col items-center justify-start w-[1px]  bg-line h-28   '>
                      <div className='p-3  bg-grey-800 rounded-xl -my-1 flex justify-center items-center'>
                        <svg stroke="currentColor" fill="#617CDB"  stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>
                      </div>
                      </div>                    
                      <div >
                        <h1 className='text-2xl font-bold'>Education</h1> 
                    </div>  
                  </div>

                  
                      {points.map((item)=>(
                          // <div className='flex space-x-8 bg-red-900 w-2/3 '>
                          <div  key={item.title} className='flex space-x-8   '>
                            <div className={`flex flex-col items-center justify-start  w-[1px] bg-line  ${item.style1}  `}>
                            <div className={`flex justify-center items-center my-3 `}>
                              <div className='absolute flex justify-center items-center  '>
                                    <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838] '></div>
                                    <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                              </div>
                            </div>
                            </div>                    
                            <div className='flex flex-col space-y-1 '>
                                  <h3>{item.center}</h3>
                                  <h2 className='text-[#8D9BCF]'>{item.year}</h2>
                                  <p className='pb-5 opacity-60'>{item.title}</p>
                            </div>  
                          </div>
                        ))}   
                        

                    {/* right svg */}
                  <div className='flex flex-col space-y-3'>
                </div>
              </div>

              {/* start Experience  */}
              <div className='w-full flex flex-col    '>
                  <div className='flex space-x-8 '>
                    <div className='flex flex-col items-center justify-start w-[1px]  bg-line h-32   '>
                      <div className='p-3  bg-grey-800 rounded-xl -my-1 flex justify-center items-center'>
                      <svg stroke="currentColor" fill="#617CDB" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z"></path><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></svg>
                      </div>
                      </div>                    
                      <div >
                        <h1 className='text-2xl font-bold'>Experience</h1> 
                    </div>  
                  </div>
                  {Experience.map((item)=>(
                     
                    <div  key={item.title} className='flex space-x-8   '>
                      <div className={`flex flex-col items-center justify-start   w-[1px] bg-line  ${item.style}`}>
                      <div className={`flex justify-center items-center my-3 `}>
                          <div className='absolute flex justify-center items-center'>
                          <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838] '></div>
                          <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                            </div>
                      </div>
                      </div>                    
                      <div className='flex flex-col space-y-1 pb-5 ' >
                            <h3>{item.title}</h3>
                            <h2 className='text-[#8D9BCF]'>{item.year}</h2>
                            <p className=' opacity-60'>{item.text}</p>
                      </div>  
                    </div>
                  ))}        
                    {/* right svg */}
                  <div className='flex flex-col space-y-3'>
                </div>
              </div>
              {/* end  Experience  */}

                      {/* start Skills  */}
                      <div className='w-full flex flex-col   '>
                  <div className='flex space-x-8'>
                    <div className='flex flex-col items-center justify-start w-[1px]  bg-line h-24   '>
                      <div className='p-3  bg-grey-800 rounded-xl -my-1 flex justify-center items-center'>
                        <svg stroke="currentColor" fill="#617CDB  " stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"></path></svg>
                      </div>
                      </div>                    
                      <div >
                        <h1 className='text-2xl font-bold'>Skills</h1> 
                    </div>  
                  </div>
                     {/* start Skills 1 */}
                    <div className='flex space-x-8    '>
                      <div className={`flex flex-col items-center justify-start  w-[1px] bg-line    `}>
                      <div className={`flex justify-center items-center my-3 `}>
                        <div className='absolute flex justify-center items-center'>
                        <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838] '></div>
                        <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                        </div>
                      </div>
                      </div>                    
                      <div className='flex flex-col space-y-2   max-md:w-full  ' >
                            <h3>Frontend</h3>
                            <h2 className='text-[#8D9BCF]'>2025 - 2020</h2>
                       

                                        {/* start tech */}
                                        <div className={`grid  gap-3 grid-cols-4  max-md:grid-cols-3 max-sm:grid-cols-2 py-2 max-sm:w-4/5    `}> 
                                            {Frontend.map((item)=>(
                                                    <div   key={item.title} className=' flex py-1 px-1  space-x-2 flex justify-center items-center  rounded-2xl  border-grey-700  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   '>
                                                        <div className=' w-5 rounded '><img src={item.src}  className='h-6 w-6  rounded-2xl' /></div>
                                                        <div className='text-xs '>{item.tech}</div>
                                                        
                                                    </div> 
                                                  ))}
                                         </div>
                                        {/* end tech */}    
                                 
                      </div>  
                    </div>
                    {/* end  Skills  1 */}

                           {/* start Skills 2 */}
                    <div className='flex space-x-8    '>
                      <div className={`flex flex-col items-center justify-start  w-[1px] bg-line    `}>
                      <div className={`flex justify-center items-center my-3 `}>
                        <div className='absolute flex justify-center items-center'>
                            <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838]  '></div>
                            <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                        </div>
                      </div>
                      </div>                    
                      <div className='flex flex-col space-y-2   max-md:w-full  ' >
                            <h3>Backend</h3>
                            <h2 className='text-[#8D9BCF]'>2025 - 2020</h2>
                                  
                                        {/* start tech */}
                                        <div className='grid  gap-3 grid-cols-4  max-md:grid-cols-3 max-sm:grid-cols-2 py-2  max-sm:w-4/5'> 
                                            {Backend.map((item)=>(
                                                    <div  key={item.title} className=' flex py-2 px-1 space-x-2 flex justify-center items-center  rounded-2xl  border-grey-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] '>                                                    
                                                        <div className=' w-5 rounded '><img src={item.src} className='h-6 w-6' /></div>
                                                        <div className='text-xs'>{item.tech}</div>
                                                    </div> 
                                                  ))}
                                         </div>
                                        {/* end tech */}    
                      </div>  
                    </div>
                    {/* end  Skills  2 */}

                          {/* start Skills 3 */}
                    <div className='flex space-x-8    '>
                      <div className={`flex flex-col items-center justify-start  w-[1px] bg-line    `}>
                      <div className={`flex justify-center items-center my-3 `}>
                        <div className='absolute flex justify-center items-center'>
                            <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838] '></div>
                            <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                        </div>
                      </div>
                      </div>                    
                      <div className='flex flex-col space-y-2   max-md:w-full  ' >
                            <h3>Database</h3>
                            <h2 className='text-[#8D9BCF]'>2025 - 2020</h2>
                                  
                                        {/* start tech */}
                                        <div className='grid  gap-3 grid-cols-4  max-md:grid-cols-3 max-sm:grid-cols-2 py-2  max-sm:w-4/5'> 
                                            {Database.map((item)=>(
                                                    <div  key={item.title} className=' flex py-2  px-1 space-x-2 flex justify-center items-center  rounded-2xl order-grey-700  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  '>
                                                        <div className=' w-5 rounded '><img src={item.src} className='h-6 w-6' /></div>
                                                        <div className='text-xs '>{item.tech}</div>
                                                    </div> 
                                                  ))}
                                         </div>
                                        {/* end tech */}    
                      </div>  
                    </div>
                    {/* end  Skills  3 */}

                           {/* start Skills 4 */}
                    <div className='flex space-x-8    '>
                      <div className={`flex flex-col items-center justify-start  w-[1px] bg-line  h-0   `}>
                      <div className={`flex justify-center items-center my-3 `}>
                        <div className='absolute flex justify-center items-center'>
                            <div className='w-[18px] h-[18px] 	border-[1px] rounded-full  absolute opacity-70 bg-[#383838] border-[#383838] '></div>
                            <div className='w-[5.5px] h-[5.5px]   	rounded-full bg-[#7D94E3] absolute z-10 opacity-70'></div>
                        </div>
                      </div>
                      </div>                    
                      <div className='flex flex-col space-y-2   max-md:w-full   ' >
                            <h3>Tools & Version Control</h3>
                            <h2 className='text-[#8D9BCF]'>2025 - 2020</h2>
                                  
                                        {/* start tech */}
                                        <div className='grid  gap-3 grid-cols-4  max-md:grid-cols-3 max-sm:grid-cols-2  py-2  max-sm:w-4/5   '> 
                                            {Tools.map((item)=>(
                                                    <div  key={item.title} className=' flex py-2  px-2  space-x-2 flex justify-center items-center  rounded-2xl border-grey-700   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   '>
                                                                <div className=' w-5 rounded '><img src={item.src} className={`h-6 w-6 ${item.style}`} /></div>
                                                                <div className='text-xs '>{item.tech}</div>
                                                        
                                                    </div> 
                                                  ))}
                                         </div>
                                        {/* end tech */}    
                      </div>  
                    </div>
                    {/* end  Skills  4 */} 


                    {/* right svg */}
                  <div className='flex flex-col space-y-3'>
                </div>
              </div>
              {/* end  Skills  */}
          </div>
      </div>
  )
}

export default Resume