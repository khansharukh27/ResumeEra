import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview101.css'
import GoogleAd from "../adFolder/GoogleAd";
import PdfDownloadButton from "../PdfDownloadButton";
// import DownloadSection from "../DownloadSection";

const Preview101 = () => {
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
    const Refrence = useSelector((state) => [state.reducer.addReference])
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
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <h1>ResumeReady created by ResumeEra</h1>
            <GoogleAd />
            <div className="mainn101">
                <div id="Alisha_mirza301" className="preview101"
                    style={{ color: fontColor, fontFamily: fontStyle, backgroundColor: bgColor }}>
                    <div className="preview101-1" style={{ width: '50%' }}>
                        <div className="imagediv101">
                            <img className="image101" src={personalInfo ? personalInfo.image : null} alt="Selected" />
                            <h3 className="personal-name101" style={{ color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle }}>{personalInfo.firstName} <br />{personalInfo.lastName}</h3>
                            {work.map((works, index) => (
                                <p key={index}>
                                    {works.jobtitle}</p>
                            ))}
                        </div>
                        <div className="profile-summary-section101">
                            <h5 className="profile-summary-title101" style={{ color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}>
                                <i class="bi bi-person-circle me-3" />PROFILE SUMMARY
                            </h5>
                            <p className="profile-summary-content101" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{personalInfo.object}</p>
                        </div>
                        <div className="contact101">
                            <h5 style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}><i className="bi bi-person-lines-fill me-3" />Contact</h5>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, wordBreak: "break-all" }}><i className="bi bi-envelope me-2" ></i>{personalInfo.email}</p>
                        </div>
                        <div className="reference101">
                            {
                               Refrence && Refrence[0].map((ref, index) => (
                                    <div key={index}>
                                        <h5 style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}><i class="bi bi-person-fill-gear me-3" />REFERENCE</h5>
                                        <div className="mbk-2">
                                            <p className="" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize ,textAlign:'center'}}><b>{ref.name}</b></p>
                                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize,textAlign:'center'}}>{ref.position}</p>
                                        </div>

                                        <p className="ms-4" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><i className="bi bi-telephone-fill me-2"></i>{ref.contact}</p>
                                        <p className="ms-4" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><i className="bi bi-envelope me-2"></i>{ref.email}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="preview101-2" style={{ width: '50%' }}>
                        <div className="experience-section101">
                            <h5 className="details-title101" style={{ color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle, wordBreak: 'none' }}>
                                <i class="bi bi-person-workspace me-3" style={{}}></i>WORK-EXPERIENCE</h5>
                            {work[0].map((works, index) => (
                                <div key={index} className="employment-history101 ms-4">
                                    <div className="exp-inner101">
                                        <p className="employment-duration101" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{works.startYear} - {works.endYear}</p>
                                        <p>/</p>
                                        <p className="employment-detail101" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}><b>{works.organization}</b><br />{works.jobtitle}</p>
                                    </div>
                                    <p className='aboutexperience101' style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{works.aboutexperience}</p>
                                </div>
                            ))}
                        </div>
                        <div className="education-section101">
                            <h5 className="details-title101" style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}><i class="bi bi-book me-3"></i>EDUCATION</h5>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-item101 ms-4">
                                    <div className="education-degree101">
                                        <span className="education-duration101" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.startYear} - {edu.endYear}</span>
                                        <span style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.degree} <br /><br />{edu.univercity}</span>
                                    </div>
                                    <div className="education-details101">
                                        <span><b></b></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="skill-section101 mt-3">
                            <h5 style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}><i class="bi bi-gear-wide-connected me-3"></i>SKILL</h5>
                            <div className="inner-101-1 ms-4">
                                <h6 className="technical-skills-title101" style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}>
                                    <i class="bi bi-person-fill-gear"></i>TECHNICAL SKILL</h6>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                        <p style={{ marginTop: '10px',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{keys.keyskills}</p>
                                        {/* 5-star rating system */}
                                        <div className="star-rating ms-3 w-50">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi bi-star${i < keys.rating ? '-fill' : ''} star101`}
                                                    style={{ color: i < keys.rating ? '#ffc150' : 'grey' }} // Filled stars are gold, others are gray
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="row inner-101-1">
                                <h6 className="soft-skills-title101" style={{color: headingColor,fontSize:fontSizeheading,fontFamily:fontStyle}}>
                                    <i class="bi bi-person-fill-gear"></i>SOFT SKILL</h6>
                                {SoftSkill[0].map((soft, index) => (
                                    <div className="col-4 ms-2">
                                        <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{soft.softSkill}</p>
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
<PdfDownloadButton elementId="Alisha_mirza301" fileName={inputFields} />
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
export default Preview101;