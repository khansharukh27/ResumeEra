import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './component/navbar/Navbar';
import TemplatePage from './component/TemplatePage';
import MainPage from './component/MainPage';
import resum1 from './image/resum1.jpg'
import resume7 from './image/resume7.png'
import resume2 from './image/resume2.jpg'
import resume3 from './image/resume3.jpg'
import resume4 from './image/resume4.jpg'
import resume5 from './image/resume5.jpg'
import resume6 from './image/resume6.jpg'
import resume8 from './image/resume8.png'
import resume9 from './image/resume9.png'
import resume10 from './image/resume10.png'
import resume11 from './image/resume11.png'
import resume12 from './image/resume12.png'
import resume13 from './image/resume13.png'
import resume14 from './image/resume14.png'
import MyResume from './component/MyResume';
import Preview from './component/previewfolder/Preview';
import Preview2 from './component/previewfolder/Preview2';
import Preview3 from './component/previewfolder/Preview3';
import Preview4 from './component/previewfolder/Preview4';
import Preview5 from './component/previewfolder/Preview5';
import ResumeEra from './component/ResumeEra';
import Preview6 from './component/previewfolder/Preview6';
import Preview7 from './component/previewfolder/Preview7';
import Preview8 from './component/previewfolder/Preview8';
import Preview9 from './component/previewfolder/Preview9';
import Preview10 from './component/previewfolder/Preview10';
import Preview11 from './component/previewfolder/Preview11';
import Preview12 from './component/previewfolder/Preview12';
import Preview13 from './component/previewfolder/Preview13';
import Preview14 from './component/previewfolder/Preview14';



// import Preview2 from './component/Preview2';


var images = [
  { id: 1, src: resum1, alt: 'image1' },{ id: 2, src: resume2, alt: 'image2' },{ id: 3, src: resume3, alt: 'image3' },
  { id: 4, src: resume4, alt: 'image4' },{ id: 5, src: resume5, alt: 'image5' },{ id: 6, src: resume6, alt : 'image6'},
  { id: 7, src: resume7, alt : 'image7'},{ id: 8, src: resume8, alt: 'image8'}, { id: 9, src: resume9, alt : 'image9'},
  { id: 10, src: resume10, alt: 'image10'},{id:11,src: resume11, alt: 'image11'},{id:12, src: resume12, alt : 'image12'},
  { id: 13, src: resume13, alt: 'image13'},{id:14, src: resume14, alt: 'image14'}
]
console.log('images:=',images)
console.log(images[0].id)
const path = 'mainpage'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Router style={{ backgroundColor: 'white',width:'100%' }}>
      <Navbar />
      <Routes style={{ width:'100%' }}>
        <Route path='/' exact element={<TemplatePage images={images} />} />
        {images.map((image) => (
          <Route
            key={image.id}
            path={`/mainpage/${image.id}`}
            element={<MainPage path={`/${path}/${image.id}`} images={images} />}
          />
        ))}
        
        <Route path='/ResumeEra' element={<ResumeEra/>}/>
        <Route path='/myresume' element={<MyResume />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/preview2' element={<Preview2 />} />
        <Route path='/preview3' element={<Preview3/>}/>
        <Route path='/preview4' element={<Preview4/>}/>
        <Route path='/preview5' element={<Preview5/>}/>
        <Route path='/preview6' element={<Preview6/>}/>
        <Route path='/preview7' element={<Preview7/>}/>
        <Route path='/preview8' element={<Preview8/>}/>
        <Route path='/preview9' element={<Preview9/>}/>
        <Route path='/preview10' element={<Preview10/>}/>
        <Route path='/preview11' element={<Preview11 />}/>
        <Route path='/preview12' element={<Preview12/>}/>
        <Route path='/preview13' element={<Preview13/>}/>
        <Route path='/preview14' element={<Preview14/>}/>


        

      </Routes>
    </Router>



  );
}

export default App;
