import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CockTails from './components/cockTails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <CockTails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
        
    </main>
  )
}

export default App