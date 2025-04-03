import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router'
import { AnimatePresence } from "motion/react"

import Header from './Pages/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'


function App() {
  return (
    <div className=' ' >
      <Router>
       <Header />
        <AnimatePresence>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/ErrorPage' element={<ErrorPage />}/>
        </Routes>
        </AnimatePresence>

      </Router>
    </div>
  )
}

export default App
// className='bg-cover bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-indigo-800'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
// import { motion, AnimatePresence } from 'framer-motion';

// import Header from './Components/Header';

// // 

// function App() {
//   const location = useLocation();

//   // const pageVariants = {
//   //   initial: {
//   //     opacity: 0,
//   //     x: "-100vw",
//   //     scale: 0.8,
//   //   },
//   //   in: {
//   //     opacity: 1,
//   //     x: 0,
//   //     scale: 1,
//   //   },
//   //   out: {
//   //     opacity: 0,
//   //     x: "100vw",
//   //     scale: 1.2,
//   //   },
//   // };

//   // const pageTransition = {
//   //   type: "tween",
//   //   ease: "anticipate",
//   //   duration: 0.5,
//   // };

//   return (
//     <div className="bg-cover bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-indigo-800">
//       <Router>
//         <Header />
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             {/* <Route
//               path="/"
//               element={
//                 <motion.div
//                   variants={pageVariants}
//                   initial="initial"
//                   animate="in"
//                   exit="out"
//                   transition={pageTransition}
//                 >
//                   <div>thankyou</div>
//                 </motion.div>
//               }
//             /> */}
//             {/* <Route
//               path="/about"
//               element={
//                 <motion.div
//                   variants={pageVariants}
//                   initial="initial"
//                   animate="in"
//                   exit="out"
//                   transition={pageTransition}
//                 >
//                   <div>thankyou</div>
//                 </motion.div>
//               }
//             /> */}
//             {/* <Route
//               path="/contact"
//               element={
//                 <motion.div
//                   variants={pageVariants}
//                   initial="initial"
//                   animate="in"
//                   exit="out"
//                   transition={pageTransition}
//                 >
//                   <div>thankyou</div>
//                 </motion.div>
//               }
//             /> */}
//           </Routes>
//         </AnimatePresence>
//       </Router>
//     </div>
//   );
// }

// export default App;