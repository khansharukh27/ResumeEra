// TechAtsResumeTemplate.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleAd from '../adFolder/GoogleAd';
import HobbyIcons from '../HobbyIcons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './CSS/preview116.css'

const Preview116 = () => {
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
  // const Certificate = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies])
  const project = useSelector((state) => [state.reducer.projectData])
  console.log('hobbies preview 302:-', Hobbies)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', keyskills)

  const handleDownloadPDF = async () => {
    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = "block"; // Show the spinner

    const element = document.getElementById('Alisha_mirza302');
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
            pdf.addPage(3);
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

      <header style={{ fontSize: fontSize, paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
        <h1>Tech ATS Resume Template</h1>
        <small style={{ fontSize: fontSize, textAlign: 'center' }}> <i style={{ fontSize: fontSize, color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

        <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
        </p>
      </header>
      <div className='main116 d-md-flex'>
        <div className='Preview116' style={{ backgroundColor: bgColor }} id='Alisha_mirza302'>
          <div className='Name-positio-summary116' style={{ border: '2px solid', borderColor: headingColor }}>
            <h3 style={{ color: headingColor, fontSize: fontSizeheading, backgroundColor: bgColor }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className='jobtitle116' style={{ fontSize: fontSize, fontSize: fontSize, color: 'black', fontFamily: fontStyle }}>{work[0].map((works, index) => (
              <div key={index}>
                <p style={{ fontSize: fontSize, fontFamily: fontStyle, marginBottom: '-10px', color: fontColor || '#f9dec7' }}>{works.jobtitle}</p>
              </div>
            ))}</p>
            <p className='object116' style={{ fontSize: fontSize, fontFamily: fontStyle, color: fontColor }}>{personalInfo.object}</p>

          </div>
          <div className="contactdiv116" style={{ backgroundColor: headingColor }}>
            <div className='contactinnerdiv116'><i className="bi bi-geo-alt-fill me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
            <div className='contactinnerdiv116'><i className="bi bi-telephone-fill me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{personalInfo.mobileNumber}</p></div>
            <div className='contactinnerdiv116'><i className="bi bi-envelope me-2 ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: fontColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{personalInfo.email}</p></div>
            <div className='contactinnerdiv116'><i class="bi bi-github ms-2" style={{ borderColor: fontColor, fontSize: fontSize, color: bgColor }} /><p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{socialMediaLink[0].github}</p></div>
          </div>
          <div className='combine-div116 mt-5'>
            <div className='work-education'>
              <div className="experience-section116 mt-4">
                <h6 className="details-title116" style={{ color: headingColor, fontSize: fontSizeheading, }}>
                  <i class="bi bi-briefcase m-3" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%' }}></i> WORK EXPERIENCE</h6>

                {work[0].map((works, index) => (
                  <div key={index} className="employment-history116 ms-4">
                    <div className="exp-inner1">
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail116">{works.jobtitle}</p>
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail116">{works.organization}</p>
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, fontStyle }} className="employment-duration116" ><i>{works.startYear} - {works.endYear}</i></p>

                    </div>
                    <div>
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }} className='aboutexperience116' >{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>

                <div className=" ">
                  <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='heading116'>
                    <i class="bi bi-backpack" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }}></i>EDUCATION <br /></h6>
                  {education[0].map((edu, index) => (
                    <div key={index} className="education-item116">
                      <div className="d-flex justify-content-between">
                        <div className='ms-4'>
                          <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail116">{edu.degree}</p>
                          <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail116 ">{edu.university}</p>
                          <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}>{edu.city}</p>
                          <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }} className="employment-detail116 me-3" >{edu.startYear}-{edu.endYear}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="inner-116-1 me-4">
                <h6 style={{ color: headingColor, fontSize: fontSizeheading }}><i class="bi bi-tools" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }} />SKILL</h6>
                <div style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className=" d-flex justify-content-between">
                      <p className='technical-skill-item116'
                        style={{backgroundColor: headingColor,fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>
                        {keys.keyskills}</p>
                      {/* 5-star rating system */}
                    </div>
                  ))}
                </div>

              </div>
              <div>
              <h6 style={{ color: headingColor, fontSize: fontSizeheading }}><i class="bi bi-kanban-fill" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }}></i>PERSONAL PROJECT<br /></h6>
              <div>
                  {project && project.map((pro) => (
                    <div key={pro.id}>
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{pro.link}({pro.startTime - pro.endTime})</p>
                      <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{pro.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
              <h6 style={{ color: headingColor, fontSize: fontSizeheading }}><i class="bi bi-translate" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }}></i>LANGUAGE<br /></h6>
                {languages && languages[0].map((keys, index) => (
                  <div key={index} className=" d-flex  justify-content-between">
                    <div>  <p style={{ fontSize: fontSize, color: fontColor, fontFamily: fontStyle, }}>{keys.language}</p></div>
                    <div className="star-rating ms-3 w-50">
                      {[...Array(5)].map((_, i) => (
                        <i

                          key={i}
                          className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                          style={{ color: i < keys.rating ? fontColor : 'grey', fontSize: fontSize, fontFamily: fontStyle }} // Filled stars are gold, others are gray
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title109 mt-3">
              <h6 style={{ color: headingColor, fontSize: fontSizeheading }}><i class="bi bi-file-music" style={{ fontSize: fontSize, border: `1px solid ${headingColor}`, padding: '7px', borderRadius: '50%', margin: '5px' }}></i>HOBBIES <br /></h6>
                 
                {Hobbies[0].map((keys, index) => (
                  <div key={index} className="d-flex align-items-center">
                    {/* Render Icon */}
                    <span style={{ marginRight: "10px", fontSize: "20px" }}>
                      {HobbyIcons[keys.hobbies] || "🎯"} {/* Default icon if hobby not in mapping */}
                    </span>
                    {/* Render Hobby Name */}
                    <p style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle, fontSize: fontSize }}>{keys.hobbies}</p>
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
            <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
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
          </div>
          <div style={{ fontSize: fontSize, width: '100%' }}>
            <GoogleAd />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Preview116;
