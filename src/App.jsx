
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css'

// // start import components 
// import Home   from './Component/Home';
// import ContactNav  from './Component/ContactNav';
// import Portfolio from './Component/Portfolio';
// import Navbar from './Component/Navbar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//   <BrowserRouter>
//       <Routes>
//         <Route path="/" element={[<Home/>]}>
//           {/* <Route index element={[<Portfolio/>]} /> */}
//           <Route path="Portfolio" element={[<Portfolio />]} />
//         </Route>
//       </Routes>
//  </BrowserRouter>
 
       
//     </>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Home from './Component/Home';
import Navbar from './Component/Navbar'; // 
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Resume from './Component/Resume';
import Contact from './Component/Contact';

function App() {

  return (
      <>
          <Home />

      </>
  );
}

export default App;
