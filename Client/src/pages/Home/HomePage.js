import React from 'react'
import Home from '../../components/Home/Home'
import Navbar from '../../components/Navbar/Navbar'
import Skills from '../../components/AboutUs/Ourskills/Ourskills'
import Weare from '../../components/AboutUs/WeAre/Weare'
import AboutUs from '../../components/AboutUs/AboutUs'
import Partners from '../../components/Partners/Partners'
import Statistics from '../../components/statistics/Statistics'
import Contact from '../../components/Contact/contact'

export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <Home/>
            <AboutUs/>
            <Weare/>
            <Skills/>
            <Partners/>
            <Statistics/>
            <Contact/>
        </div>
    )
}