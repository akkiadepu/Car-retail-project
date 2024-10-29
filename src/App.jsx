import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Components/About/About';
import Services from './Services/Services';
import CarList from './CarList/CarList';
import Testimonial from './Testimonial/Testimonial';
import AppStoreBanner from './AppStoreBanner/AppStoreBanner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



function App() {
 
  //Dark Mode Feature
  const [theme,setTheme] = React.useState(localStorage.getItem("theme")?
  localStorage.getItem("theme"):"ligth");

  const element = document.documentElement;
  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);

  //AOS Initialization
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100,
    })
    AOS.refresh()
  },[]);
  


  return (
    <>
    {/* <Navbar theme={theme} setTheme={setTheme}/>
    <Hero theme={theme}/>
    <About/>
    <Services/>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <CarList/>
    </div>
   <Testimonial/>
   <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <AppStoreBanner/>
    </div>
    <Contact/>
    <Footer/> */}


    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    
    <Navbar theme={theme} setTheme={setTheme} />
    <Hero theme={theme} />
       <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer /> 
    </div>
    </>
  )
}

export default App
