import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './/CSS/preview103.css'
import GoogleAd from "../adFolder/GoogleAd";
import PdfDownloadButton from "../PdfDownloadButton";
// import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
const Preview103 = () => {
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
        <div className="personal-info-section103">
            <div className="main103 mt-4 me-md-5 ms-md-1" id="Alisha_mirza103" style={{backgroundColor:bgColor }}>
                <div className="personal-header">
                    <h3 className="personal-name" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                    <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="personal-details">{personalInfo.city} {personalInfo.state} <b>.</b> {personalInfo.email} <b>.</b> {personalInfo.mobileNumber}</p>
                </div>
                <div className="profile-summary-section">
                    <h5 className="profile-summary-title" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>PROFILE SUMMARY</h5>
                    <hr className="profile-summary-hr" />
                    <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="profile-summary-content">{personalInfo.object}</p>
                </div>
                <div className="education-section">
                    <h5 className="details-title103" style={{ color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>EDUCATION</h5>
                    <hr className="education-hr" />
                    {education[0].map((edu, index) => (
                        <div key={index} className="education-item103">
                            <div className="education-degree103">
                                <span style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.degree}</span>
                                <span style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="education-duration103">{edu.startYear} - {edu.endYear}</span>
                            </div>
                            <div className="education-details">
                                <span style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{edu.univercity}</b></span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="experience-section">
                    <h5 className="details-title103" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>PROFECTION EXPERIENCE</h5>
                    <hr className="experience-hr" />
                    {work[0].map((works, index) => (
                        <div key={index} className="employment-history103">
                            <div className="exp-inner103">
                                <p  className="employment-detail103" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{works.organization}</b>--{works.jobtitle}</p>
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="employment-duration103">{works.startYear} - {works.endYear}</p>
                            </div>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className='aboutexperience103'>{works.aboutexperience}</p>
                        </div>
                    ))}
                </div>
                <div className="skill-section103">
                    <h5 className="technical-skills-title" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>TECHNICAL SKILL</h5>
                    <hr className="technical-skills-hr" />
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="technical-skill-item d-flex">
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{keys.keyskills}|</p>
                        </div>
                    ))}
                </div>
                <div className="honor-award-section">
                    <h5 className="honor-title" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>HONOR & AWARD</h5>
                    <hr className="honor-hr" />
                    {Honor[0].map((hobb, index) => (
                        <div key={index} className="honor-item">
                            <div className="honor-info">
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{hobb.title}</b></p>
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{hobb.year}</b></p>
                            </div>
                            <div className="honor-organization">
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{hobb.organization}</b></p>
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{hobb.description}</b></p>
                            </div>
                        </div>
                    ))}
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
<PdfDownloadButton elementId="Alisha_mirza103" fileName={inputFields} />
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
    )
}
export default Preview103;