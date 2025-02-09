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

        const element = document.getElementById('Alisha_mirza306');
        try {
            const scale = 2.7; // Increase the scale for better resolution
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
      <div className='main306'>
        <div className="preview306 p-3" style={{ backgroundColor: bgColor, }} id="Alisha_mirza306">

          <div className='personalInfo306 d-flex justify-content-between' style={{}}>
            <h3 style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, marginTop: 'auto' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            < div className="contact306" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: bgColor }}>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>  {personalInfo.state} {personalInfo.postalCode}</p></div>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{personalInfo.mobileNumber}</p></div>
              <div className='contactinnerdiv306' style={{ whiteSpace: 'nowrap' }}><p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize, wordBreak: 'break-all' }}>{personalInfo.email}</p></div>
            </div>,
          </div>,
          <hr style={{ width: 'inherit' }} />
          <div className='d-flex justify-content-between'>
            <div>
              <h4 style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, width: '30%' }}>OBJECTIVE STATEMENT</h4>
            </div>
            <div style={{ width: '70%' }}>
              <p className='object' style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{personalInfo.object}</p>
            </div>
          </div>


          <hr className='dashed-line' />
          <div className="soft-skill d-flex justify-content-between w-100" style={{ backgroundColor: bgColor, }}>
            <h4 className="" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, marginRight: 'auto', whiteSpace: 'nowrap' }}>SOFT SKILL</h4>
            <div className='row' style={{ width: '70%' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item306 " style={{}}>
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{keys.softSkill}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="technical- d-flex justify-content-between">
            <h4 className="" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, width: '30%' }}>
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

                  <ul style={{marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li
                      style={{
                        color: fontColor, fontFamily: fontStyle,fontSize:fontSize,
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
          <div className='firstdiv306' style={{}}>
            <div className='me-3'>
              <div className="experience-section306 d-flex ">
                <h4 className="details-title306" style={{ color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading, width: '40%' }}>
                  WORK EXPERIENCE </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history306">
                    <div className="exp-inner306">
                      <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail306"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>

                      <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail306"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} className='employment-detail306'>{works.aboutexperience}</p>

                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section306 d-flex justify-content-between mt-1">
                <h4 className="details-title306" style={{ color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>EDUCATION</h4>
                <div style={{ width: '70%' }}>
                  {education[0].map((edu, index) => (
                      <div className="certificate-item306" style={{}}>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className="employment-detail306">{edu.degree}</p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className="employment-detail306"> {edu.university} </p>
                        <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className="employment-detail306">{edu.startYear}-{edu.endYear}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 style={{ color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading, marginTop: '10px' }}>LANGUAGE</h4>
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
                            <p className='language' style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>
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
                <h4 className="" style={{ color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>
                  INTEREST
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '70%' }}>
                  {Hobbies && Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>

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
