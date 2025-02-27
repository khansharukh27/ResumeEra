
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview111.css'
// import Hobbies from '../Hobbies';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
const Preview111 = () => {
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
    const certi = useSelector((state) => state.reducer.certificateData);
    const Hobbies = useSelector((state) => [state.reducer.addHobies])
    const project = useSelector((state) => [state.reducer.projectData])
    console.log('hobbies preview 301:-', Hobbies)
    console.log('honorand award:-', Honor)

  return (
    <div className='resume111'>
      <header style={{ paddingLeft: '10px', paddingRight: '20px', textAlign: 'center' }}>
        <h1>Congratulations on Creating a Winning Resume!</h1>
        <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

        <p style={{ color: fontColor, fontFamily: fontStyle, }}>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
        </p>
      </header>
      <div style={{ width: 'inherit' }}>
        <GoogleAd />
      </div>
      <h1>Functional-ATS-Resume-Template</h1>
      <div className='main111'>
        <div className='preview111' id="Alisha_mirza111" style={{backgroundColor:bgColor}}>
          <div className='about111' style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>
            <h3 style={{ marginBottom: '-5px',marginTop:'0px',fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize, whiteSpace: 'none' }}>{work[0][0].jobtitle}</p>
            <hr style={{ marginTop: '-15px'}} />
            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize, lineHeight: '.95' }}>{personalInfo.object}</p>
          </div>
          <div className='d-flex'>
            <div className='contact111'>
              <div className="contactdiv111">
                <div className='contactinnerdiv111'><i className="bi bi-geo-alt-fill me-2 ms-2" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} /><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
                <div className='contactinnerdiv111'><i className="bi bi-telephone-fill me-2 ms-2" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} /><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{personalInfo.mobileNumber}</p></div>
                <div className='contactinnerdiv111'><i className="bi bi-envelope me-2 ms-2" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} /><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,wordBreak:'break-all' }}>{personalInfo.email}</p></div>
                <div className='contactinnerdiv111'><i class="bi bi-github ms-2" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} /><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{socialMediaLink[0].github}</p></div>
              </div>
              <div className="inner-104-1 me-4">
                <h6 style={{fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading}}>SKILL</h6>
                <hr style={{ width: 'inherit' }} />
                {keyskills[0].map((keys, index) => (
                  <div key={index} className=" d-flex justify-content-between">
                    <p className='technical-skill-item111' style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{keys.keyskills}</p>
                    {/* 5-star rating system */}
                  </div>
                ))}
              </div>
              <div className=" ">
                <h6 style={{ fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading}} className='heading107'>CERTIFICATION <br /><hr style={{ width: 'inherite' }} /></h6>
                {certi.map((edu, index) => (
                  <div key={index} className="">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} className="">{edu.organization}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} className=" ">{edu.description}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{edu.city}</p>
                        <p className=" me-3" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{edu.issueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='work111'>
              <div className="experience-section104 mt-4">
                <h6 className="details-title104" style={{ fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading }}>
                  VOLUNTEER EXPERIENCE</h6>
                <hr />
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history101 ms-4">
                    <div className="exp-inner1">
                      <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,marginBottom:'-5px' }} className="employment-detail104">{works.jobtitle}</p>
                      <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,marginBottom:'-5px'}} className="employment-detail104">{works.organization}</p>
                      <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} className="employment-duration104" >{works.startYear} - {works.endYear}</p>
                    </div>
                    <div>
                      <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize, }} className='aboutexperience104' >{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" ">
                <h6 style={{fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading}} className='heading107'>EDUCATION <br /><hr style={{ width: 'inherit' }} /></h6>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item111">
                    <div className="d-flex justify-content-between">
                      <div className='ms-4'>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,marginBottom:'-5px' }} className="employment-detail111">{edu.degree}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,marginBottom:'-5px' }} className="employment-detail111 ">{edu.university}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize,marginBottom:'-5px' }}>{edu.city}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize, }} className="employment-detail111 me-3" >{edu.startYear}-{edu.endYear}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <h6 style={{fontFamily:fontStyle,color:headingColor,fontSize:fontSizeheading}}>LANGUAGE</h6>
                <hr style={{ width: 'inherit' }} />
                {languages[0].reduce((result, _, index, array) => {
                  if (index % 2 === 0) result.push(array.slice(index, index + 2));
                  return result;
                }, [])
                  .map((chunk, rowIndex) => (
                    <div key={rowIndex} className="row inner-104-1 mb-3">
                      {chunk.map((keys, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-6 d-flex justify-content-between"
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <p className='language' style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>
                            {keys.language}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
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
<PdfDownloadButton elementId="Alisha_mirza111" fileName={inputFields} />
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
        <div style={{ width: 'inherit' }}>
          <GoogleAd />
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Preview111;
