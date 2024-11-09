import React from 'react';
import '../css/DownloadPopUp.css'
// import { color } from 'html2canvas/dist/types/css/types/color';
const DownloadPopUp = ({ isDownloaded }) => {
    const createStars = () => {
        const stars = [];
        for (let i = 0; i < 20; i++) {
          stars.push(<div className="star" key={i}></div>);
        }
        return stars;
      };
  return (
    <>
      {isDownloaded && (
        <div className='popUpStyle'>
          <p style={{color:'green'}}>Congratulations! <br />You Are Here</p>
          <div className="stars">
            {createStars()}
          </div>
        </div>
      )}
    </>
  );
};


export default DownloadPopUp;
