import Login from './pages/Login/login'
import SystemAppBar from './components/SystemAppBar/systemAppBar';
import Hero from './components/Hero/hero';
import LandingNav from './components/LandingNav/landingNav';
import './App.css'


function App() {

  return (
    <>
    {/* <Login /> */}
    <SystemAppBar />
    <Hero />
    <LandingNav />
    </>
  )
}

export default App;
