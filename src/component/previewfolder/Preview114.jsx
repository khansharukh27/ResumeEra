
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview114.css'
// import Hobbies from '../Hobbies';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
const Preview114 = () => {
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

        const element = document.getElementById('Alisha_mirza301');
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

      <div className="main114">
        <div className="preview114" id="Alisha_mirza301">
          <div className='personalInfo114' style={{ backgroundColor: bgColor }}>
            <h3 style={{ whiteSpace: 'none', fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, marginBottom: '-10px' }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className='jobtitle' style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{work[0].map((works, index) => (
              <div key={index}>
                <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-10px' }}>{works.jobtitle}</p>
              </div>
            ))}</p>
            <p className='object' style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{personalInfo.object}</p>
          </div>
          <div className='contact114 ' style={{}}>
            <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" style={{ color: headingColor }} />{personalInfo.email}</p>
            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor }} />{personalInfo.mobileNumber}</p>
            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className=""><i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: headingColor }} /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-linkedin me-2 ms-2" style={{ color: headingColor }} />{socialMediaLink[0].linkedin}</p>
          </div>
          <div className='firstdiv114' style={{ backgroundColor: bgColor, }}>
            <div className='me-3'>
              <div className="experience-section114">
                <h4 className="details-title114" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading}}>
                  WORK EXPERIENCE <hr style={{ width: '100%' }} /></h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history114">
                    <div className="exp-inner114">
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail114"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail114"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className='employment-detail114'>{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section114 mt-3">
                <h4 className="details-title114" style={{fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading}}>EDUCATION <hr style={{ width: '100%' }} /></h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item114">
                    <div className="certificate-item114">
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, fontSize: 'small', fontWeight: 900, marginBottom: '-5px' }} className="employment-detail114">{edu.degree} in {edu.university} </p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginBottom: '-5px' }} className="employment-detail114">{edu.university}</p>
                      <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }} className="employment-detail114">{edu.startYear} - {edu.endYear},{edu.city}</p>
                    </div>
                    <div className="education-details114">
                      <span><b></b></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" language-114">
                <h4 style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading}}>LANGUAGE <hr style={{ width: '100%' }} /></h4>
                {languages[0].map((keys, index) => (
                  <div key={index} className="language-item114">
                    <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize,marginBottom:'-5px' }}>{keys.language}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
            <div className="technical-">
              <h4 className="" style={{fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading}}>TECHNICAL SKILLS <hr  style={{width:'100%'}} /></h4>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item114" style={{ display: 'flex', marginBottom: '8px' }}>
                  {/* Skill Name */}
                  <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    {keys.softSkill}
                  </p>

                  {/* Rating Circles */}
                  
                </div>
              ))}
            </div>

            <div className="technical-">
              <h4 className="" style={{fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading }}>SOFT SKILL <hr  style={{width:'100%'}} /></h4>
              {keyskills[0].map((keys, index) => (
                <div key={index} className="technical-skill-item114" style={{ display: 'flex', marginBottom: '8px' }}>
                  {/* Skill Name */}
                  <p style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
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
                          backgroundColor: circleIndex < keys.rating ? headingColor : 'lightgray',
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>


              <div className="technical-skills-title114 mt-3">
                <h4 className="" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading }}>
                  VOLUNTEER AND PERSONAL PROJECT <hr style={{ width: '100%' }} /></h4>
                {project[0].map((keys, index) => (
                  <div key={index} className="">
                    <p style={{ marginBottom: '-5px',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{keys.link}</p>
                    <p style={{ marginBottom: '-5px',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{keys.startTime}-{keys.endTime}</p>
                    <p style={{ marginBottom: '-5px' }}></p>
                    <p style={{ marginBottom: '-5px',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>.{keys.description}</p>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title114 mt-3">
                <h4 className="" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading}}>
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
  );
};

export default Preview114;
