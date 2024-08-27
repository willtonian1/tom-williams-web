import { useState } from 'react'
import { useEffect } from 'react'
import Wrapper from './assets/Wrapper'; // Assuming Wrapper.js is in the same directory
import About from './assets/About';
import './App.css'
import Header from './assets/Header'
import Projects from './assets/Projects'

function App() {

  const mainStyle = { 
      backgroundColor: 'white', // Background of the element
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      display: 'inline-block', // Optional: Prevents expanding to full width

  };

  const bgStyle = {
    zIndex: -10,
  }

  return (
    <div>
      <div class="w-screen h-screen flex items-center h-screen absolute" style={bgStyle}>
        <div class="flex-1 bg-white h-[100%]"></div>
        <div class="flex-1 bg-[rgb(245,245,247)] h-[100%]"></div>
      </div>

    <div class="h-12"> </div>
    <div class="mx-auto w-[80%] z-20 h-[50%]" style={mainStyle}>
    <Header/>
    <Wrapper />
    </div>
    
    <div class="mx-auto w-[80%] z-20 h-[50%] mt-12" style={mainStyle}>
      <About/>
    </div>

    <div class="mx-auto w-[80%] z-20 h-[50%] mt-12" style={mainStyle}>
    <Projects />
    </div>

    </div>
  )
}

export default App
