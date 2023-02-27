import React from 'react'
import Amenities from './components/Amenities'
import Client from './components/Client'
import Cofounders from './components/Cofounders'
import Diamond from './components/Diamond'
import Distance from './components/Distance'
import Event from './components/Event'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Frams from './components/Frams'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurRooms from './components/OurRooms'

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Diamond/>
      <OurRooms/>
      <Event/>
      <Facilities/>
      <Amenities/>
      <Frams/>
      <Distance/>
      <Cofounders/>
      <Client/>
      <Footer/>
      
    </div>
  )
}

export default App