import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Tails from './components/Tails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Tails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
        
    </main>
  )
}

export default App