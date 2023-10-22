import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SystemAppBar from './components/SystemAppBar/SystemAppBar';
import Hero from './components/Hero/Hero';
import './App.css'
import LandingNav from './components/LandingNav/LandingNav';

function App() {

  return (
    <>
    <SystemAppBar />
    <Hero />
    <LandingNav />
    </>
  )
}

export default App;
