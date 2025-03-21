import React from 'react'
import NavBar from './components/NavBar'
import LandPage from './components/LandPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Freatured from './components/Freatured'
import ThreeCards from './components/ThreeCards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <NavBar/>
      <LandPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Freatured/>
      <ThreeCards/>
      <Footer/>
    </div>
  )
}

export default App