import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <>
    <div className='hidden lg:flex'>
        <div className="herobg w-full h-[52em]">
            <Navbar/>
            <h1 className=' text-4xl md:text-6xl text-center text-white py-32 md:py-10'>Welcome To The Place Where Nature <br /> & Luxury serve you in Harmony</h1>
        </div>
    </div>

    <div className='lg:hidden'>
        <div className="herobgMob w-full h-[52em]">
            <Navbar/>
            <h1 className=' text-4xl md:text-6xl text-center text-white py-32 md:py-10'>Welcome To The Place Where Nature <br /> & Luxury serve you in Harmony</h1>
        </div>
    </div>

    </>
  )
}

export default Hero