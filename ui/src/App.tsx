import Login from './pages/login/login'
import SystemAppBar from './components/SystemAppBar/SystemAppBar';
import Hero from './components/Hero/Hero';
import LandingNav from './components/LandingNav/LandingNav';
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
