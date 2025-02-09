import React from 'react'
import '../previewfolder/CSS/preview302.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
export default function Preview308() {
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

  const handleDownloadPDF = async () => {
    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = "block"; // Show the spinner

    const element = document.getElementById('Alisha_mirza308');
    try {
      const scale = 3; // Increase the scale for better resolution
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true, // Allows cross-origin images to be rendered correctly
        logging: false, // Disable logging for better performance
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const a4Height = 297; // A4 height in mm

      // If the content is shorter than the A4 page height, center it vertically
      let verticalOffset = 0;
      if (imgHeight < a4Height) {
        // Center the content vertically
        verticalOffset = (a4Height - imgHeight) / 2;
      }

      // If content fits on one page
      if (imgHeight <= a4Height) {
        pdf.addImage(imgData, 'PNG', 0, verticalOffset, imgWidth, imgHeight, undefined, 'FAST');
      } else {
        // If content is taller than one page, split it into multiple pages
        let offsetY = 0;
        while (offsetY < canvas.height) {
          const currentHeight = Math.min(imgHeight, canvas.height - offsetY); // Handle remaining height
          pdf.addImage(imgData, 'PNG', 0, offsetY, imgWidth, currentHeight, undefined, 'FAST');
          offsetY += currentHeight;

          // If there's more content, add another page
          if (offsetY < canvas.height) {
            pdf.addPage();
          }
        }
      }

      const fileName = `${inputFields}.pdf`;
      pdf.save(fileName);

      // Hide loading spinner once PDF is ready
      loadingSpinner.style.display = "none"; // Hide the spinner

      const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
      savedResumes.push(imgData);
      localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

      alert('Your Resume is downloaded');
      // navigate('/myresume');
    } catch (error) {
      // Hide loading spinner if error occurs
      loadingSpinner.style.display = "none";
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
        <div className='preview302' style={{ backgroundColor: bgColor, }} id="Alisha_mirza308">
          <div className='namediv308' style={{}}>
            <div className='d-flex justify-content-between' style={{ backgroundColor: '#d9eafa' }}>
              <h4 style={{ whiteSpace: 'none', fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading, marginTop: '10px' }}>{personalInfo.firstName} {personalInfo.lastName}</h4>
              <div className='contact301' style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}><i className="bi bi-telephone-fill me-2 ms-2" style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }} />{personalInfo.mobileNumber}</p>
                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }} />{personalInfo.email}</p>
                <div className='contactinnerdiv304' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
              </div>
            </div>

            <div className=' maindiv302 mt-4' style={{}}>
              <div className='skilldiv m-3'>
                <div className='d-flex'>
                  <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                  <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>OBJECTIVE STATEMENT</h4>
                </div>
                <p className='object' style={{ fontFamily: fontStyle, color: fontColor,fontSize:fontSize }}>{personalInfo.object}</p>
                <div className="soft-skill" style={{ backgroundColor: bgColor, }}>
                  <div className='d-flex'>
                    <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                    <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>SOFT SKILL</h4>
                  </div>
                  <div>
                    {SoftSkill[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302" style={{}}>
                        <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}>{keys.softSkill}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tech-skill" style={{ backgroundColor: bgColor, }}>
                  <div className='d-flex'>
                    <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                    <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>TECHNICAL SKILL</h4>
                  </div>                  <div style={{}}>
                    {keyskills[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302" style={{}}>
                        <ul style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li><p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}>{keys.keyskills}</p></li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="experience-section302">
                  <div className='d-flex'>
                    <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                    <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>WORK EXPERIENCE</h4>
                  </div>
                  {work[0].map((works, index) => (
                    <div key={index} className="employment-history302">
                      <div className="exp-inner302">
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, marginBottom: '-5px' }} className="employment-detail302"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, marginBottom: '-5px' }} className="employment-detail302"><i>{works.startYear} - {works.endYear}</i></p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }} className='employment-detail302'>{works.aboutexperience}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="education-section302 mt-1">
                  <div className='d-flex'>
                    <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                    <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>EDUCATION</h4>
                  </div>
                  {education[0].map((edu, index) => (
                    <div key={index} className="education-item302">
                      <div className="certificate-item302">
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, fontWeight: 900, marginBottom: '-5px' }} className="employment-detail302">{edu.degree} in {edu.university} </p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, marginBottom: '-5px' }} className="employment-detail302">{edu.university}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize }} className="employment-detail302">{edu.startYear} - {edu.endYear},{edu.city}</p>
                      </div>
                      <div className="education-details302">
                        <span><b></b></span>
                      </div>
                    </div>
                  ))}
                </div>
                {Hobbies && Hobbies[0].length > 0 && (
                  <div>
                    <div className='d-flex'>
                      <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                      <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>HOBBIES & INTEREST</h4>
                    </div>
                    {Hobbies[0].map((keys, index) => (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

                        <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                          <li style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}>
                            {keys.hobbies}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                <div className=" language-301">
                  <div className='d-flex'>
                    <div style={{ width: '8px', height: '20px', backgroundColor: headingColor, marginRight: '4px', marginTop: '2px' }}></div>
                    <h4 style={{ fontFamily: fontStyle, color: headingColor, fontSize: fontSizeheading }}>LANGUAGE</h4>
                  </div>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item301">
                      <ul>
                        <li>
                          <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: fontSize, marginBottom: '-5px' }}>{keys.language}</p>

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
  )
}
