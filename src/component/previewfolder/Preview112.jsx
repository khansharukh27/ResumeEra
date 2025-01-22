// MinimalistAtsResumeTemplate.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../component/previewfolder/CSS/Preview112.css'
// import Hobbies from '../Hobbies';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';

const Preview112 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('#6a213f'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#5a1d36')
  const [isDownloaded, setIsDownloaded] = useState(false);

  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  const Refrence = useSelector((state) => [state.reducer.addReference])
  // const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
  const languages = useSelector((state) => [state.reducer.addLanguage]);
  const certi = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies])
  const project = useSelector((state) => [state.reducer.projectData])
  console.log('hobbies preview 110:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', Honor)
  let timeoutId;
  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza101');
    try {
      const scale = 2.5;
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true,
        logging: true,
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      const fileName = `${inputFields}.pdf`;
      pdf.save(fileName);

      setIsDownloaded(true);
      clearTimeout(timeoutId); // Clear any existing timeout
      timeoutId = setTimeout(() => {
        setIsDownloaded(false);
      }, 4000);

      const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
      savedResumes.push(imgData);
      localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

      alert('Your Resume is downloaded');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div>
      <h1>Minimalist ATS Resume Template</h1>
      <p style={{ fontFamily: "sans-serif", fontSize: '5rem' }}>This Template Is Note Ready To Use</p>
      <div className='main112 d-flex justify-content-between'>
        <div className='preview112 d-flex'>

          <div className='firstdiv112'>
            < div className="contact112">
              <div className='contactinnerdiv112'><i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: bgColor }} /><p style={{ color: fontColor, fontFamily: fontStyle, }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
              <div className='contactinnerdiv112'><i className="bi bi-telephone-fill me-2 ms-2" style={{ color: bgColor }} /><p style={{ color: fontColor, fontFamily: fontStyle, }}>{personalInfo.mobileNumber}</p></div>
              <div className='contactinnerdiv112'><i className="bi bi-envelope-fill me-2 ms-2" style={{ color: bgColor }} /><p style={{ color: fontColor, fontFamily: fontStyle, wordBreak: 'break-all' }}>{personalInfo.email}</p></div>
              <div className='contactinnerdiv112'><i class="bi bi-github ms-2 me-2" style={{ color: bgColor }} /><p style={{ color: fontColor, fontFamily: fontStyle, }}>{socialMediaLink[0].github}</p></div>
            </div>
            <div className="inner-104-1 me-4">
              <div className='d-flex' style={{ marginBottom: '5px' }}>
                <i style={{ fontSize: '1.5rem', color: '#cd9c5a' }} class="bi bi-suit-diamond-fill" />
                <h4 style={{ color: headingColor, marginTop: '10px' }}>SKILL</h4>
              </div>
              {keyskills[0].map((keys, index) => (
                <div key={index} className=" d-flex justify-content-between">
                  <p className='technical-skill-item112'
                    style={{ color: fontColor, fontFamily: fontStyle, }}>{keys.keyskills}</p>
                  {/* 5-star rating system */}
                </div>
              ))}
            </div>
            <div className="">
              <div className='d-flex' style={{ marginBottom: '5px' }}>
                <i style={{ fontSize: '1.5rem', color: '#cd9c5a' }} class="bi bi-suit-diamond-fill" />
                <h4 style={{ color: headingColor, marginTop: '10px' }}>LANGUAGE</h4>
              </div>
              {languages[0].reduce((result, _, index, array) => {
                if (index % 2 === 0) result.push(array.slice(index, index + 2));
                return result;
              }, [])
                .map((chunk, rowIndex) => (
                  <div key={rowIndex} className="row inner-104-1 mb-3">
                    {chunk.map((keys, colIndex) => (
                      <div
                        key={colIndex}
                        className="col-6  justify-content-between"
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        <p className='language' style={{ color: fontColor, fontFamily: fontStyle }}>
                          {keys.language}
                        </p>
                        <div
                          style={{
                            width: '100%',
                            height: '8px',
                            backgroundColor: '#e0e0e0', // Light gray for the uncolored portion
                            borderRadius: '4px', // Rounded corners
                            overflow: 'hidden', // Prevent overflow of the colored part
                            marginBottom: '12px'
                          }}
                        >
                          <div
                            style={{
                              width: `${(keys.rating / 5) * 100}%`, // Dynamic width based on rating
                              height: '100%',
                              backgroundColor: headingColor, // Primary color for the colored portion
                              transition: 'width 0.3s ease', // Smooth transition
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
            <div>
              <h3>Honor And Award</h3>
            </div>
            <div>
              <h3>Hobbies</h3>
            </div>

          </div>

          <div className='seconddiv112'>
            <div>
              <h3 style={{ marginBottom: '-5px', marginTop: '0px' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
              <p style={{ color: 'lightgray', fontSize: 'xx-small', whiteSpace: 'none' }}>{work[0][0].jobtitle}</p>
              <p style={{ color: fontColor, fontFamily: fontStyle, lineHeight: '.95' }}>{personalInfo.object}</p>

            </div>
            <div className="experience-section104 mt-4">
              <h6 className="details-title104" style={{ color: bgColor }}>
                VOLUNTEER EXPERIENCE</h6>
              <hr />
              {work[0].map((works, index) => (
                <div key={index} className="employment-history101 ms-4">
                  <div className="exp-inner1">
                    <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail104">{works.jobtitle}</p>
                    <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail104">{works.organization}</p>
                    <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-duration104" >{works.startYear} - {works.endYear}</p>
                  </div>
                  <div>
                    <p style={{ color: fontColor, fontFamily: fontStyle, }} className='aboutexperience104' >{works.aboutexperience}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" ">
              <h6 style={{ color: bgColor }} className='heading107'>EDUCATION <br /><hr style={{ width: 'inherit' }} /></h6>
              {education[0].map((edu, index) => (
                <div key={index} className="education-item112">
                  <div className="d-flex justify-content-between">
                    <div className='ms-4'>
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail112">{edu.degree}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail112 ">{edu.university}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}>{edu.city}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, }} className="employment-detail112 me-3" >{edu.startYear}-{edu.endYear}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" ">
              <h6 style={{ color: bgColor }} className='heading107'>CERTIFICATION <br /><hr style={{ width: 'inherite' }} /></h6>
              {certi.map((edu, index) => (
                <div key={index} className="">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p style={{ color: fontColor, fontFamily: fontStyle, }} className="">{edu.organization}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, }} className=" ">{edu.description}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, }}>{edu.city}</p>
                      <p className=" me-3" style={{ color: fontColor, fontFamily: fontStyle, }}>{edu.issueDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="resume-download-section0">
          <div style={{ width: 'inherit' }}>
            <GoogleAd />
          </div>
          <div style={{ width: 'inherit' }}>
            <GoogleAd />
          </div>
          <div className='downloadbuttondiv'>
            <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
            <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
          </div>
          {/* Color Picker for Background Color */}
          <div className='d-flex border fontfamilydiv' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
          <div className='colordiv'>
            <div>
              <span>Font Color </span>
              <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
            </div>
            <div>
              <span>Heading Color </span>
              <input type="color" value={headingColor} onChange={(e) => setHeadingColor(e.target.value)} className="bg-color-picker ms-2" />
            </div>
          </div>
          <div style={{ width: 'inherit' }}>
            <GoogleAd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview112;
