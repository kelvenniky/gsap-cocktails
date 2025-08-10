import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CockTails from './components/cockTails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <CockTails/>
        
    </main>
  )
}

export default App