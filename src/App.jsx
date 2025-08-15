import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CockTails from './components/cockTails'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <CockTails/>
        <About/>
        
    </main>
  )
}

export default App