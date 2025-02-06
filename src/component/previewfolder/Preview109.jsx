
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview109.css'
// import Hobbies from '../Hobbies';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
const Preview109 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#e6c4c5')
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
  // const Certificate = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies])
  const project = useSelector((state) => [state.reducer.projectData])
  console.log('hobbies preview 109:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', Honor)
  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza109');
    try {
      const scale = 2; // Increase the scale for better resolution
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
      setIsDownloaded(true)
      setTimeout(() => {
        setIsDownloaded(false)
      }, 4000)
      // Store the image data URL in localStorage
      const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
      savedResumes.push(imgData);
      localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

      alert('Your Resume is downloaded');
      // navigate('/myresume');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  return (
    <div>
      <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
        <h1>Congratulations on Creating a Winning Resume!</h1>
        <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

        <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
        </p>
      </header>
      <GoogleAd />

      <div className="main109">
        <div className="preview109" id="Alisha_mirza109">
          <div className='personalInfo'>
            <h3 style={{ whiteSpace: 'none', fontFamily: fontStyle }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className='jobtitle' style={{ color: 'black', fontFamily: fontStyle }}>{work[0].map((works, index) => (
              <div key={index}>
                <p style={{ fontFamily: fontStyle }}>{works.jobtitle}</p>
              </div>
            ))}</p>
            <p className='object' style={{ fontFamily: fontStyle }}>{personalInfo.object}</p>
          </div>
          <div className='contact109 ' style={{}}>
            <p style={{ color: fontColor, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" />{personalInfo.email}</p>
            <p style={{ color: fontColor, fontFamily: fontStyle }}><i className="bi bi-telephone-fill me-2 ms-2" />{personalInfo.mobileNumber}</p>
            <p style={{ color: fontColor, fontFamily: fontStyle }} className=""><i className="bi bi-geo-alt-fill me-2 ms-2" /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
            <p style={{ color: fontColor, fontFamily: fontStyle }}><i className="bi bi-linkedin me-2 ms-2" />{socialMediaLink[0].linkedin}</p>
          </div>
          <div className='firstdiv109' style={{ backgroundColor: bgColor, }}>
            <div className='me-3'>
              <div className="experience-section109">
                <h4 className="details-title109" style={{ color: headingColor, fontFamily: fontStyle }}>
                  WORK EXPERIENCE <hr style={{ width: '100%' }} /></h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history109">
                    <div className="exp-inner109">
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail109"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail109"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{ color: fontColor, fontFamily: fontStyle }} className='employment-detail109'>{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" language-109">
                <h4 style={{ color: headingColor, fontFamily: fontStyle }}>LANGUAGE <hr style={{ width: '100%' }} /></h4>
                {languages[0].map((keys, index) => (
                  <div key={index} className="language-item109">
                    <p style={{ color: fontColor, marginBottom: '-5px' }}>{keys.language}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
              <div className="technical-">
                <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>AREAS OF EXPERTISE <hr style={{ width: '100%' }} /></h4>
                {keyskills[0].map((keys, index) => (
                  <div key={index} className="technical-skill-item109" style={{ display: 'flex', marginBottom: '8px' }}>
                    {/* Skill Name */}
                    <p style={{ color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                      {keys.keyskills}
                    </p>

                    {/* Rating Circles */}
                    <div style={{ display: 'flex' }}>
                      {[...Array(5)].map((_, circleIndex) => (
                        <span
                          key={circleIndex}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            margin: '0 3px',
                            backgroundColor: circleIndex < keys.rating ? 'blue' : 'lightgray',
                          }}
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section109 mt-3">
                <h4 className="details-title109" style={{ color: headingColor, fontFamily: fontStyle }}>EDUCATION <hr style={{ width: '100%' }} /></h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item109">
                    <div className="certificate-item109">
                      <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail109">{edu.degree}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail109">{edu.univercity}</p>
                      <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail109">{edu.startYear} - {edu.endYear},{edu.city}</p>
                    </div>
                    <div className="education-details109">
                      <span><b></b></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title109 mt-3">
                <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>
                  VOLUNTEER AND PERSONAL PROJECT <hr style={{ width: '100%' }} /></h4>
                {project[0].map((keys, index) => (
                  <div key={index} className="">
                    <p style={{ marginBottom: '-5px', color: fontColor, fontFamily: fontStyle }}>{keys.link}</p>
                    <p style={{ marginBottom: '-5px', color: fontColor, fontFamily: fontStyle }}>{keys.startTime}-{keys.endTime}</p>
                    <p style={{ marginBottom: '-5px' }}></p>
                    <p style={{ marginBottom: '-5px', color: fontColor, fontFamily: fontStyle }}>.{keys.description}</p>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title109 mt-3">
                <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>
                  INTEREST <hr style={{ width: '100%' }} />
                </h4>
                {Hobbies[0].map((keys, index) => (
                  <div key={index} className="d-flex align-items-center">
                    {/* Render Icon */}
                    <span style={{ marginRight: "10px", fontSize: "20px" }}>
                      {HobbyIcons[keys.hobbies] || "🎯"} {/* Default icon if hobby not in mapping */}
                    </span>
                    {/* Render Hobby Name */}
                    <p style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle }}>{keys.hobbies}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> |
        <div className="resume-download-section0">
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>
          <div style={{ width: '100%' }}>
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
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Preview109;
