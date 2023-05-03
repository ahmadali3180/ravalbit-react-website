import React from 'react'
import "../../styles/HomePage.css"
import LandingPage from '../components/HomePage/LandingPage'
import AboutRavalbit from '../components/HomePage/AboutRavalbit'
import ServicesPage from '../components/HomePage/ServicesPage'
import TowardFuture from '../components/HomePage/TowardFuture'
import TechOfFuture from '../components/HomePage/TechOfFuture'

export default function HomePage() {
  return (
    <div className='width-100'>
        <LandingPage/>
        <AboutRavalbit/>
        <ServicesPage/>
        <TowardFuture/>
        <TechOfFuture/>
    </div>
  )
}
