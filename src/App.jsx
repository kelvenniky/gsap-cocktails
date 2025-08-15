import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CockTails from './components/cockTails'
import About from './components/About'
import Art from './components/Art'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <CockTails/>
        <About/>
        <Art/>
        
    </main>
  )
}

export default App