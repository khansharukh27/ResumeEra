import React, { useState } from 'react'
import GoogleAd from '../adFolder/GoogleAd';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../previewfolder/CSS/preview303.css'
import PdfDownloadButton from '../PdfDownloadButton';
export default function Preview303() {
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
    console.log('hobbies preview 303:-', Hobbies)
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
      <div className='main303'>
        <div className='preview303' style={{backgroundColor:bgColor}} id='Alisha_mirza303'>
          <div className='blankdiv303'></div>
          <h3 style={{ whiteSpace: 'none', marginBottom: '-10px', fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
          <div className='blankdiv303-2'></div>
          <div className='blanckall303-3'></div>
          <div className='innermain303 d-flex justify-content-around'>
            <div className='inner303-1' style={{ width: '50%' }}>
              <div className='d-flex'>
                <h4 className="" style={{
                  fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                  whiteSpace: 'nowrap'
                }}>OBJECT STATEMENT</h4>
                <div className='blanckall303'></div>
              </div>
              <div className='blankdiv303-2'></div>
              <div className='blanckall303-3'></div>
              <p className='object303' style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle }}>{personalInfo.object}</p>
              <div className="soft-skill">
                <div className='d-flex'>
                  <h4 className="" style={{ fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading, whiteSpace: 'nowrap' }}>SOFT SKILL</h4>
                  <div className='blanckall303'></div>
                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                <div>
                  {SoftSkill[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item303" style={{}}>
                      <ul style={{  marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li style={{fontSize:fontSize, color: fontColor, fontFamily: fontStyle}}>{keys.softSkill}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-" style={{ backgroundColor: bgColor }}>
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>TECHNICAL SKILL</h4>
                  <div className='blanckall303'></div>
                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                <div>
                  {keyskills[0].map((keys, index) => (
                    <div
                      key={index}
                      className="technical-skill-item303"
                      style={{

                      }}
                    >
                      {/* Skill Name */}

                      <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li
                         
                        >
                          <p style={{fontSize:fontSize, color: fontColor, fontFamily: fontStyle}}>{keys.keyskills}</p>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='innerdiv303-2' style={{ width: '40%' }}>
              < div className="contact303">
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>CONTACT</h4>
                  <div className='blanckall303'></div>
                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom:'.1rem', marginTop: '4px' }}>ADDRESS:-  {personalInfo.state} {personalInfo.postalCode}</p>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle,marginBottom:'.1rem' }}>MOBILE:- {personalInfo.mobileNumber}</p>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, wordBreak: 'break-all', marginBottom:'.1rem'}}>EMAIL:- {personalInfo.email}</p>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle,marginBottom:'.1rem' }}>GITHUB:-{socialMediaLink[0].github}</p>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom:'.1rem'}}>LINKEDIN:- {socialMediaLink[0].linkedin}</p>
                <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom:'.1rem' }}>TWITTER:- {socialMediaLink[0].TWITTER}</p>

              </div>
              <div className="experience-section303">
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>WORK HISTORY</h4>
                  <div className='blanckall303'></div>

                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history303">
                    <div className="exp-inner303">
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}
                       className="employment-detail303"><b style={{ fontWeight: 500, color: fontColor }}>
                        {works.jobtitle}</b><br />{works.organization}{work.city}</p>
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail303"><i>{works.startYear} - {works.endYear}</i></p>
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle}} className='employment-detail303'>{works.aboutexperience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section303 mt-1">
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>EDUCATION</h4>
                  <div className='blanckall303'></div>

                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item303">
                    <div className="certificate-item303">
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, fontWeight: 900, marginBottom: '-5px' }} className="employment-detail303">{edu.degree} in {edu.university} </p>
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }} className="employment-detail303">{edu.university}</p>
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle}} className="employment-detail303">{edu.startYear} - {edu.endYear},{edu.city}</p>
                    </div>
                    <div className="education-details303">
                      <span><b></b></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" language-303">
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>LANGUAGE</h4>
                  <div className='blanckall303'></div>
                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item303">
                      <p style={{ fontSize:fontSize, color: fontColor, fontFamily: fontStyle, marginBottom: '-5px' }}>{keys.language}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-skills-title303 mt-1">
                <div className='d-flex'>
                  <h4 className="" style={{
                    fontFamily: fontStyle, color: headingColor,fontSize:fontSizeheading,
                    whiteSpace: 'nowrap'
                  }}>HOBBIES</h4>
                  <div className='blanckall303'></div>
                </div>
                <div className='blankdiv303-2'></div>
                <div className='blanckall303-3'></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {Hobbies && Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <ul style={{ fontSize: 'small', color: fontColor, fontFamily: fontStyle, marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li style={{ marginBottom: "-5px", color: fontColor, fontFamily: fontStyle }}>

                          {/* <span style={{ marginRight: "10px", fontSize: "20px" }}>
                                                        {HobbyIcons[keys.hobbies] || "🎯"} 
                                                    </span> */}
                          <p style={{fontSize: fontSize, color: fontColor, fontFamily: fontStyle}}>{keys.hobbies}</p>
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
<PdfDownloadButton elementId='Alisha_mirza303' fileName={inputFields} />
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
