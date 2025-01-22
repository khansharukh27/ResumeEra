import React from 'react'
import '../previewfolder/CSS/preview302.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
export default function Preview302() {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f')
  const [isDownloaded, setIsDownloaded] = useState(false);

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
  // const Certificate = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies])
  const project = useSelector((state) => [state.reducer.projectData])
  console.log('hobbies preview 302:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', keyskills)

  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza302');
    try {
      const scale = 3; // Increase the scale for better resolution
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
      <div className='main302'>
        <div className='preview302' style={{ backgroundColor: bgColor, }} id="Alisha_mirza302">
          <div className='header302' style={{ backgroundColor: '#fddad4' }}></div>
          <div className='headermiddle302' style={{ backgroundColor: 'white' }}></div>
          <div className='namediv302' style={{ backgroundColor: bgColor, }}>
            <h3 style={{ whiteSpace: 'none', fontFamily: fontStyle, color: fontColor, marginBottom: '-10px' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <div className='contact301'>
              <p style={{ color: fontColor, fontFamily: fontStyle }}><i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor }} />{personalInfo.mobileNumber}</p>
              <div > <p style={{ width: '20px' }}>|</p></div><p style={{ color: fontColor, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" style={{ color: headingColor }} />{personalInfo.email}</p>
            </div>
            <div className=' maindiv302' style={{}}>
              <div className='skilldiv'>
                <h4 style={{ color: headingColor, fontFamily: fontStyle }}>OBJECTIVE STATEMENT</h4>
                <p className='object' style={{ fontFamily: fontStyle, color: fontColor }}>{personalInfo.object}</p>
                <div className="soft-skill" style={{ backgroundColor: bgColor, }}>
                  <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>SOFT SKILL</h4>
                  <div style={{}}>
                    {SoftSkill[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302" style={{}}>
                        <ul style={{ fontSize: 'small',  marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li><p style={{color: fontColor, fontFamily: fontStyle,}}>{keys.softSkill}</p></li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tech-skill" style={{ backgroundColor: bgColor, }}>
                  <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>TECHNICAL SKILL</h4>
                  <div style={{}}>
                    {keyskills[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302" style={{}}>
                        <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li><p style={{color: fontColor, fontFamily: fontStyle,}}>{keys.keyskills}</p></li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="experience-section302">
                  <h4 className="details-title302" style={{ color: headingColor, fontFamily: fontStyle }}>
                    WORK EXPERIENCE </h4>
                  {work[0].map((works, index) => (
                    <div key={index} className="employment-history302">
                      <div className="exp-inner302">
                        <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail302"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail302"><i>{works.startYear} - {works.endYear}</i></p>
                        <p style={{ color: fontColor, fontFamily: fontStyle }} className='employment-detail302'>{works.aboutexperience}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="education-section302 mt-1">
                  <h4 className="details-title302" style={{ color: headingColor, fontFamily: fontStyle }}>EDUCATION</h4>
                  {education[0].map((edu, index) => (
                    <div key={index} className="education-item302">
                      <div className="certificate-item302">
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: 'small', fontWeight: 900, marginBottom: '-5px' }} className="employment-detail302">{edu.degree} in {edu.university} </p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail302">{edu.university}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail302">{edu.startYear} - {edu.endYear},{edu.city}</p>
                      </div>
                      <div className="education-details302">
                        <span><b></b></span>
                      </div>
                    </div>
                  ))}
                </div>
                {Hobbies && Hobbies[0].length > 0 && (
                  <div>
                    <h4 style={{ color: headingColor, fontFamily: fontStyle }}>HOBBIES & INTEREST</h4>
                    {Hobbies[0].map((keys, index) => (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

                        <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle }}>
                            <p style={{color: fontColor, fontFamily: fontStyle}}>{keys.hobbies}</p>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                <div className=" language-301">
                  <h4 style={{ color: headingColor, fontFamily: fontStyle }}>LANGUAGE </h4>
                    {languages[0].map((keys, index) => (
                      <div key={index} className="language-item301">
                        <ul>
                          <li>
                          <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}>{keys.language}</p>

                          </li>
                        </ul>
                      </div>
                    ))}
                  
                </div>
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
  )
}
