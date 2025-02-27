
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview110.css'
// import Hobbies from '../Hobbies';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
const Preview110 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#6a8a3f')
    // const [isDownloaded, setIsDownloaded] = useState(false);
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings


    // const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    // const Refrence = useSelector((state) => [state.reducer.addReference])
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    // const Certificate = useSelector((state) => state.reducer.certificateData);
    const Hobbies = useSelector((state) => [state.reducer.addHobies])
    const project = useSelector((state) => [state.reducer.projectData])
    console.log('hobbies preview 301:-', Hobbies)
    // console.log('Certificate:-', Certificate)
    console.log('honorand award:-', Honor)


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

      <div className="main110">
        <div className="preview110" id="Alisha_mirza110">
          <div className='personalInfo110' style={{ backgroundColor: bgColor }}>
            <h3 style={{ whiteSpace: 'none', color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading, marginBottom: '-10px' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className='jobtitle' style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{work[0].map((works, index) => (
              <div key={index}>
                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-10px' }}>{works.jobtitle}</p>
              </div>
            ))}</p>
            <p className='object' style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{personalInfo.object}</p>
          </div>
          <div className='contact110 ' style={{}}>
            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" style={{ color: headingColor }} />{personalInfo.email}</p>
            <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor }} />{personalInfo.mobileNumber}</p>
            <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className=""><i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: headingColor }} /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
            <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-linkedin me-2 ms-2" style={{ color: headingColor }} />{socialMediaLink[0].linkedin}</p>
          </div>
          <div className='firstdiv110' style={{ backgroundColor: bgColor, width:''}}>
            <div className='me-3' style={{width:'60%'}}>
              <div className="experience-section110">
                <h4 className="details-title110" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>
                  WORK EXPERIENCE <hr style={{ width: '100%' }} /></h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history110">
                    <div className="exp-inner110">
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail110"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail110"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className='employment-detail110'>{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section110 mt-3">
                <h4 className="details-title110" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>EDUCATION <hr style={{ width: '100%' }} /></h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item110">
                    <div className="certificate-item110">
                      <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, fontWeight: 900, marginBottom: '-5px' }} className="employment-detail110">{edu.degree} in {edu.university} </p>
                      <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail110">{edu.university}</p>
                      <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className="employment-detail110">{edu.startYear} - {edu.endYear},{edu.city}</p>
                    </div>
                    <div className="education-details110">
                      <span><b></b></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" language-110">
                <h4 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>LANGUAGE <hr style={{ width: '100%' }} /></h4>
                {languages[0].map((keys, index) => (
                  <div key={index} className="language-item110">
                    <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{keys.language}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className=''><div className="">
              <h4 className="" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>
                AREAS OF EXPERTISE
                <hr style={{ width: '100%' }} />
              </h4>
              {keyskills[0].map((keys, index) => (
                <div
                  key={index}
                  className="technical-skill-item110"
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '-10px' }}
                >
                  {/* Skill Name */}
                  <p
                    style={{
                      color:fontColor,fontFamily:fontStyle,fontSize:fontSize,
                      marginRight: '10px',
                      minWidth: '120px',
                    }}
                  >
                    {keys.keyskills}
                  </p>

                  {/* Rating Line */}
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


              <div className="technical-skills-title110 mt-3">
                <h4 className="" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>
                  VOLUNTEER AND PERSONAL PROJECT <hr style={{ width: '100%' }} /></h4>
                {project[0].map((keys, index) => (
                  <div key={index} className="">
                    <p style={{ marginBottom: '-5px', color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{keys.link}</p>
                    <p style={{ marginBottom: '-5px', color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{keys.startTime}-{keys.endTime}</p>
                    <p style={{ marginBottom: '-5px' }}></p>
                    <p style={{ marginBottom: '-5px', color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>.{keys.description}</p>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title110 mt-3">
                <h4 className="" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>
                  INTEREST <hr style={{ width: '100%' }} />
                </h4>
                {Hobbies[0].map((keys, index) => (
                  <div key={index} className="d-flex align-items-center">
                    {/* Render Icon */}
                    <span style={{ marginRight: "10px", fontSize: "20px" }}>
                      {HobbyIcons[keys.hobbies] || "🎯"} {/* Default icon if hobby not in mapping */}
                    </span>
                    {/* Render Hobby Name */}
                    <p style={{ marginBottom:"-5px",color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}> {keys.hobbies} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resume-download-section0">
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>
          <div className='downloadbuttondiv'>
            <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
<PdfDownloadButton elementId="Alisha_mirza110" fileName={inputFields} />
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
          <div className='colordiv'>
            <div>
              <span style={{ color: headingColor }}><i class="bi bi-patch-plus"></i>HS  </span>
              <input type="number" value={fontSizeheading} onChange={(e) => setFontSizeheading(Number(e.target.value))} className="bg-color-picker ms-2" />
            </div>
            <div>
              <span style={{ color: fontColor }}><i class="bi bi-patch-plus"></i>FS  </span>
              <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2" />
            </div>
          </div>
          <div id="loadingSpinner" style={{ display: "none", position: "fixed", top: "50%", left: "50%" }}>
            <div class="spinner"></div>
          </div>
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Preview110;
