import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';
import Navbar from './component/navbar/Navbar';
import VideoComponent from './component/VedioComponent';
import About from './component/About';
import Services from './component/Services';
import CallToAction from './component/CallToAction';
import MainTeam from './component/MainTeam';
import Client from './component/Client';

function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div style={{backgroundColor:'wheat'}}>
      <Navbar/>
      <VideoComponent/>
      <About/>
      <Services/>
      <CallToAction/>
      <MainTeam/>
      <Client/>
      </div>
  );
}

export default App;
