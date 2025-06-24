import React from 'react'
import Home from './components/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      {/* <Home/>
      <About/>
      <Contact/> */}

      
      <div className="d-flex">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
          </Routes>
        </div>
      </div>
    

    
    
    </>
  )
}

export default App
