import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './component/navbar/Navbar';
import TemplatePage from './component/TemplatePage';
import MainPage from './component/MainPage';
import resum1 from './image/resum1.jpg'
import resume2 from './image/resume2.jpg'
import resume5 from './image/resume5.jpg'
import resume6 from './image/resume6.jpg'
import resume7 from './image/resume7.jpg'
import resume8 from './image/resume8.jpg'
import MyResume from './component/MyResume';
import Preview from './component/Preview';
import Preview2 from './component/Preview2';
import Preview3 from './Preview3';
import Preview4 from './component/Preview4';
import Preview5 from './component/Preview5';
// import Preview2 from './component/Preview2';


var images = [
  { id: 1, src: resum1, alt: 'image1' },
  { id: 2, src: resume2, alt: 'image2' },
  { id: 3, src: resume6, alt: 'image5' },
  { id: 4, src: resume7, alt: 'image6' },
  { id: 5, src: resume8, alt: 'image7' },
  { id: 6, src: resume5, alt: 'image8' },
]
console.log('images:=',images)
console.log(images[0].id)
const path = 'mainpage'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Router style={{ backgroundColor: 'wheat' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<TemplatePage images={images} />} />
        {images.map((image) => (
          <Route
            key={image.id}
            path={`/mainpage/${image.id}`}
            element={<MainPage path={`/${path}/${image.id}`} images={images} />}
          />
        ))}
        
        
        <Route path='/myresume' element={<MyResume />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/preview2' element={<Preview2 />} />
        <Route path='/preview3' element={<Preview3/>}/>
        <Route path='/preview4' element={<Preview4/>}/>
        <Route path='/preview5' element={<Preview5/>}/>
      </Routes>
    </Router>



  );
}

export default App;
