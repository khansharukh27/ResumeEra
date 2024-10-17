// BasicAtsResumeTemplate.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview108.css'
const Preview108 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#rrggbb')
  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
  const education = useSelector((state) => [state.reducer.education[0]]);
  const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
  const work = useSelector((state) => [state.reducer.workExperience[0]]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward[0]]);
  const Refrence = useSelector((state) => [state.reducer.addReference[0]])
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills[0]])
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink[0]]);
  const languages = useSelector((state) => [state.reducer.addLanguage[0]]);
  console.log('refrences:-', Refrence)
  console.log('honorand award:-', Honor)
  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza101');
    try {
      const scale = 5; // Increase the scale for better resolution
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true, // Allows cross-origin images to be rendered correctly
        logging: true, // Enable logging for debugging
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      // Calculate the aspect ratio to fit A4
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      const fileName = `${inputFields}.pdf`;
      pdf.save(fileName);

      // Store the image data URL in localStorage
      const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
      savedResumes.push(imgData);
      localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

      alert('Your Resume is downloaded');
      navigate('/myresume');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  return (
    <div >
      <h1>Basic ATS Resume Template</h1>
      <div className='main108'>

        <div className='Alisha' id='Alisha_mirza' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
          <div className='name108'>
            <h1 style={{}}>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <p style={{ color: 'lightgray' }}>{work[0][0].jobtitle}</p>
            <p>{personalInfo.object}</p>
          </div>
          <hr className='hrtop' />
          <div className='contact108 '>
            <p style={{ wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" />{personalInfo.email}</p>
            <p><i className="bi bi-telephone-fill me-2 ms-2" />{personalInfo.mobileNumber}</p>
            <p className=""><i className="bi bi-geo-alt-fill me-2 ms-2" /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
            <p><i className="bi bi-linkedin me-2 ms-2" />{socialMediaLink[0].linkedin}</p>
          </div>
          <hr className='hrbottom' />
          <div className='d-flex'>
            <div className="experience-section108">
              <h4 className="details-title108" style={{ color: headingColor, fontWeight: 700 }}>
                WORK EXPERIENCE</h4>
              {work[0].map((works, index) => (
                <div key={index} className="employment-history108">
                  <div className="exp-inner108">
                    <p className="employment-detail108"><strong style={{ fontWeight: 500 }}>{works.jobtitle}</strong><br />{works.organization}{work.city}</p>
                    <p className="employment-detail108"><i>{works.startYear} - {works.endYear}</i></p>
                    <p className='employment-detail108'>{works.aboutexperience}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='ms-4'>
              <div className="technical-skills-title108">
                <h4 className="" style={{ color: headingColor, fontWeight: 700}}>
                  SKILL</h4>
                {keyskills[0].map((keys, index) => (
                  <div key={index} className="technical-skill-item108">
                    <p>{keys.keyskills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resume-download-section">
          <div className='d-flex'>
            <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
            <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
          </div>
          {/* Color Picker for Background Color */}
          <div className='d-flex border' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="bg-color-picker ms-2" />
            {/* Font Style Selector */}
            <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)} className="font-style-selector ms-2">
              <option value="Arial">Arial</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Verdana">Verdana</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Impact">Impact</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Palatino Linotype">Palatino Linotype</option>
              <option value="Courier New">Courier New</option>
              <option value="Lucida Console">Lucida Console</option>
              <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
              <option value="Gill Sans">Gill Sans</option>
              <option value="Century Gothic">Century Gothic</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Arial Narrow">Arial Narrow</option>
              <option value="Brush Script MT">Brush Script MT</option>
              <option value="Candara">Candara</option>
              <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
              <option value="Goudy Old Style">Goudy Old Style</option>
              <option value="Herculanum">Herculanum</option>
              <option value="Monaco">Monaco</option>
              <option value="Optima">Optima</option>
              <option value="Perpetua">Perpetua</option>
              <option value="Rockwell">Rockwell</option>
              <option value="Segoe UI">Segoe UI</option>
            </select>
          </div>
          <div>
            <span>Font Color </span>
            <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
          </div>
          <div>
            <span>Heading Color </span>
            <input type="color" value={headingColor} onChange={(e) => setHeadingColor(e.target.value)} className="bg-color-picker ms-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview108;
