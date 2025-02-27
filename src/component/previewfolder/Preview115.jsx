// TechAtsResumeTemplate.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleAd from '../adFolder/GoogleAd';
import HobbyIcons from '../HobbyIcons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './CSS/preview115.css'
import PdfDownloadButton from '../PdfDownloadButton';

const Preview115 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f')
  // const [isDownloaded, setIsDownloaded] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
  const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings

  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  // const Refrence = useSelector((state) => [state.reducer.addReference])
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
  const languages = useSelector((state) => [state.reducer.addLanguage]);
  const Certificate = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies])
  const project = useSelector((state) => [state.reducer.projectData])
  console.log('hobbies preview 302:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', keyskills)

  return (
    <div>

      <header style={{ fontSize: fontSize, paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
        <h1>Tech ATS Resume Template</h1>
        <small style={{ fontSize: fontSize, textAlign: 'center' }}> <i style={{ fontSize: fontSize, color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

        <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
        </p>
      </header>
      <div className='main115 d-md-flex'>
        <div className='preview115' style={{ backgroundColor: bgColor }} id='Alisha_mirza115'>
          <div className='personalandword115'>
            <div className='personal115'>
              <h3 style={{ color: headingColor, fontSize: fontSizeheading, fontFamily: fontStyle }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
              <p className='jobtitle' style={{ fontSize: fontSize, fontSize: fontSize, color: 'black', fontFamily: fontStyle }}>{work[0].map((works, index) => (
                <div key={index}>
                  <p style={{ fontSize: fontSize, fontFamily: fontStyle, marginBottom: '-10px', color: fontColor }}>{works.jobtitle}</p>
                </div>
              ))}</p>
              <p className='object' style={{ fontSize: fontSize, fontFamily: fontStyle, color: fontColor }}>{personalInfo.object}</p>
            </div>

            <div>
              <div>
                <div className="experience-section115 mt-4">
                  <h6 className="details-title115" style={{ color: headingColor, fontSize: fontSizeheading, fontFamily: fontStyle }}>
                    <i class="bi bi-briefcase m-3" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%' }}></i> WORK EXPERIENCE</h6>

                  {work[0].map((works, index) => (
                    <div key={index} className="employment-history115 ms-4">
                      <div className="exp-inner1">
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail115">{works.jobtitle}</p>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail115">{works.organization}</p>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, fontStyle }} className="employment-duration115" ><i>{works.startYear} - {works.endYear}</i></p>

                      </div>
                      <div>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }} className='aboutexperience115' >{works.aboutexperience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" ">
                <h6 style={{ color: headingColor, fontSize: fontSizeheading, fontFamily: fontStyle }} className='heading115'>
                  <i class="bi bi-backpack" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }}></i>EDUCATION <br /></h6>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item115">
                    <div className="d-flex justify-content-between">
                      <div className='ms-4'>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail115">{edu.degree}</p>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail115 ">{edu.university}</p>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}>{edu.city}</p>
                        <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }} className="employment-detail115 me-3" >{edu.startYear}-{edu.endYear}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='contactdivouter115'>
            <div className="contactdiv115">
              <div className='contactinnerdiv115'><i className="bi bi-geo-alt-fill me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
              <div className='contactinnerdiv115'><i className="bi bi-telephone-fill me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{personalInfo.mobileNumber}</p></div>
              <div className='contactinnerdiv115'><i className="bi bi-envelope me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{personalInfo.email}</p></div>
              <div className='contactinnerdiv115'><i class="bi bi-github ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: bgColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{socialMediaLink[0].github}</p></div>
            </div>
            <div className='technicalskills115'>
              <div className="inner-115-1 me-4">
                <h6 style={{ color: headingColor, fontSize: fontSizeheading, fontFamily: fontStyle }}><i class="bi bi-tools" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }} />SKILL</h6>

                {keyskills[0].map((keys, index) => (
                  <div key={index} className=" d-flex justify-content-between">
                    <p className='technical-skill-item115'
                      style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>
                      {keys.keyskills}</p>
                    {/* 5-star rating system */}
                  </div>
                ))}
              </div>
              <div className='certificate115'>
                <h6 style={{ color: headingColor, fontSize: fontSizeheading, fontFamily: fontStyle }}><i class="bi bi-file-text" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }} />CERTIFICATE</h6>
                {Certificate && Certificate.map((img) => (
                  <div>
                    <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle }}>{img.certificateName}({img.issueDate})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resume-download-section0">
          <div style={{ fontSize: fontSize, width: '100%' }}>
            <GoogleAd />
          </div>
          <div style={{ fontSize: fontSize, width: '100%' }}>
            <GoogleAd />
          </div>
          <div className='downloadbuttondiv'>
            <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ fontSize: fontSize, borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
            <PdfDownloadButton elementId='Alisha_mirza115' fileName={inputFields} />
          </div>
          {/* Color Picker for Background Color */}
          <div className='d-flex border fontfamilydiv' style={{ fontSize: fontSize, marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
              <span style={{ color: fontColor }}>FC <i class="bi bi-palette"></i> </span>
              <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
            </div>
            <div>
              <span style={{ color: headingColor }}>HC <i class="bi bi-palette"></i></span>
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
          </div> </div>

      </div>
    </div>
  );
};

export default Preview115;
