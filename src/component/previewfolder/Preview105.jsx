import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview105.css'
import GoogleAd from "../adFolder/GoogleAd";
import PdfDownloadButton from "../PdfDownloadButton";

const Preview105 = () => {
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
        <div className="p-4">
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
            <div className="main105">
                <div className="preview105" id="Alisha_mirza105" style={{ backgroundColor: bgColor }}>
                    <div className="personalinfo105">
                        <div className="imagediv105">
                            <img src={personalInfo.image} alt="doctore resume"/>
                        </div>
                        <div className="namediv105">
                            <h3 style={{ whiteSpace: 'nowrap', marginBottom: '', color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}></p>
                            <p className="jobtitle105f" style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} >{work[0][0].jobtitle}</p>
                        </div>
                        <div className="contactdiv105">
                            <div className="d-flex">
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}><i className="bi bi-geo-alt-fill me-2 ms-2" /></p></div>
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize, wordBreak: "break-all" }}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}><i className="bi bi-telephone-fill me-2 ms-2" /></p></div>
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}> {personalInfo.mobileNumber}</p></div>
                            </div>

                            <div className="d-flex">
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} ><i className="bi bi-envelope me-2 ms-2" /></p></div>
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize, wordBreak: "break-all" }}>{personalInfo.email}</p></div>
                            </div>
                            <div>
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}><i class="bi bi-github ms-2" /></p></div>
                                <div><p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{socialMediaLink.github}</p></div>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 ">
                        <div className="inner105-1 w-50">
                            <h6 style={{color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>Profile</h6>
                            <p style={{color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{personalInfo.object}</p>
                            <div className=" ">
                                <h6 style={{color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>Language</h6>
                                {languages[0].map((keys, index) => (
                                    <div key={index} className="">
                                        <div>
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize}}>{keys.language}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="education-section105 mt-3">
                                <h6 className="details-title105" style={{color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>EDUCATION</h6>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item105">
                                        <div className="education-degree105">
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{edu.degree}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{edu.univercity}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }} className="education-duration105">{edu.startYear} - {edu.endYear},{edu.city}</p>
                                        </div>
                                        <div className="education-details105">
                                            <span><b></b></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divider105"></div>
                        <div className=".inner105-2">
                            <div className="experience-section105">
                                <h6 className="details-title105" style={{color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading}}>
                                    WORK EXPERIENCE</h6>
                                {work[0].map((works, index) => (
                                    <div key={index} className="employment-history101 ms-4">
                                        <div className="exp-inner105">
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className="employment-detail105"><b>{works.jobtitle}</b>|{works.organization}|{work.city}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className="employment-duration105">{works.startYear} - {works.endYear}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize}} className='aboutexperience105'>{works.aboutexperience}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="technical-skills-title105 mt-3">
                                <h6 className="" style={{color: headingColor, fontFamily: fontStyle,fontSize:fontSizeheading }}>
                                    TECHNICAL SKILL</h6>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                        <ul>
                                            <li><p style={{ color: fontColor, fontFamily: fontStyle,fontSize:fontSize }}>{keys.keyskills}</p></li>
                                        </ul>
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
<PdfDownloadButton elementId="Alisha_mirza105" fileName={inputFields} />
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
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    )
}
export default Preview105;