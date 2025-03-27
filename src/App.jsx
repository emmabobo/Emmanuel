// import React from 'react'
// import { BrowserRouter as Router, Routes ,Route } from 'react-router'

// function App() {
//   return (
//     <div className=' bg-cover bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-indigo-800'>
//       <Router>
//         <Routes>
//           <Route />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './Components/Header';

// 

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="bg-cover bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-indigo-800">
      <Router>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <div>thankyou</div>
                </motion.div>
              }
            /> */}
            {/* <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <div>thankyou</div>
                </motion.div>
              }
            /> */}
            {/* <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <div>thankyou</div>
                </motion.div>
              }
            /> */}
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;