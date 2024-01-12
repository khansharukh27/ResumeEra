import React, { useEffect } from 'react';
import AOS from 'aos';
// import './aos/dist/aos.css'


function Image({sources}){
    useEffect(()=>{
        AOS.init()
    },[])
    
    return (
        <div id="box" className="image-container">
            <h1 className="galary" style={{whiteSpace:'none'}}>Image Galary</h1>
            <br />
            <hr />
          <div data-aos="flip-left">  {sources.map((source) =>(
                <img key={source.key} src={source.src} className="simage " alt={source.alt} />
            ))}
          
          </div>
           
            
        </div>
    )
}
export default Image;