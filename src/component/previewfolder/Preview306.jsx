import React from 'react'
import '../previewfolder/CSS/preview306.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
export default function Preview305() {
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
  console.log('hobbies preview 306:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', Honor)

  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza306');
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
      <div className='main306'>
        <div className="preview306" style={{ backgroundColor: bgColor, }} id="Alisha_mirza306">

          <div className='personalInfo306 d-flex justify-content-between' style={{ backgroundColor: bgColor }}>
            <h3 style={{ fontFamily: fontStyle, color: fontColor, marginTop: 'auto' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            < div className="contact306" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: bgColor }}>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle, }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle, }}>{personalInfo.mobileNumber}</p></div>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle, wordBreak: 'break-all' }}>{personalInfo.email}</p></div>
            </div>
          </div>
          <hr style={{ width: 'inherit' }} />
          <div className='d-flex justify-content-between'>
            <div>
              <h4 style={{ color: headingColor, fontFamily: fontStyle, width: '30%' }}>OBJECTIVE STATEMENT</h4>
            </div>
            <div style={{ width: '70%' }}>
              <p className='object' style={{ fontFamily: fontStyle, color: fontColor }}>{personalInfo.object}</p>
            </div>
          </div>


          <hr className='dashed-line' />
          <div className="soft-skill d-flex justify-content-between w-100" style={{ backgroundColor: bgColor, }}>
            <h4 className="" style={{ color: headingColor, fontFamily: fontStyle, marginRight: 'auto', whiteSpace: 'nowrap' }}>SOFT SKILL</h4>
            <div className='row' style={{ width: '70%' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item306 " style={{}}>
                  <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li>{keys.softSkill}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="technical- d-flex justify-content-between">
            <h4 className="" style={{ color: headingColor, fontFamily: fontStyle, width: '30%' }}>
              TECHNICAL SKILL
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '70%' }}>
              {keyskills[0].map((keys, index) => (
                <div
                  key={index}
                  className="technical-skill-item306"
                  style={{

                  }}
                >
                  {/* Skill Name */}

                  <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li
                      style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        marginRight: '10px',
                        minWidth: '100px',

                      }}
                    >
                      {keys.keyskills}

                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='firstdiv306' style={{ backgroundColor: bgColor, }}>
            <div className='me-3'>
              <div className="experience-section306 d-flex ">
                <h4 className="details-title306" style={{ color: headingColor, fontFamily: fontStyle, width: '40%' }}>
                  WORK EXPERIENCE </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history306">
                    <div className="exp-inner306">
                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail306"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>

                      <p style={{ color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail306"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{ color: fontColor, fontFamily: fontStyle }} className='employment-detail306'>{works.aboutexperience}</p>

                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section306 d-flex justify-content-between mt-1">
                <h4 className="details-title306" style={{ color: headingColor, fontFamily: fontStyle }}>EDUCATION</h4>
                <div style={{ width: '70%' }}>
                  {education[0].map((edu, index) => (
                      <div className="certificate-item306" style={{}}>
                        <p className="employment-detail306">{edu.degree}</p>
                        <p className="employment-detail306"> {edu.university} </p>
                        <p className="employment-detail306">{edu.startYear}-{edu.endYear}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 style={{ color: headingColor, marginTop: '10px' }}>LANGUAGE</h4>
                <div style={{ width: '70%' }}>
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
                            {/* <div
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
                            </div> */}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className=''>
              <div className="technical-skills-title306 d-flex justify-content-between mt-1">
                <h4 className="" style={{ color: headingColor, fontFamily: fontStyle }}>
                  INTEREST
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '70%' }}>
                  {Hobbies && Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle }}>

                          {/* <span style={{ marginRight: "10px", fontSize: "20px" }}>
                                                        {HobbyIcons[keys.hobbies] || "🎯"} 
                                                    </span> */}
                          {keys.hobbies}
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
