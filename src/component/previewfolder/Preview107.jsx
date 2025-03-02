import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview107.css'
import GoogleAd from "../adFolder/GoogleAd";
import PdfDownloadButton from "../PdfDownloadButton";

const Preview107 = () => {
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
    const certi = useSelector((state) => state.reducer.certificateData);
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
            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="main107">
                <div className="preview107"   id="Alisha_mirza107" style={{backgroundColor:bgColor}}>
                    <div className="header107 " style={{}}>
                        <div className="imagediv107">
                            <img className="image107" src={personalInfo.image} style={{}} alt="doctore resume" />
                        </div>
                        <div className="profilediv107">
                            <h3 style={{ whiteSpace: 'none',color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, whiteSpace: 'none', fontWeight: 600, }}>{work[0][0].jobtitle}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{personalInfo.object}</p>
                        </div>
                        <div className="contactdiv107">
                            <div className="d-flex">
                                <div><i className="bi bi-telephone-fill me-2 ms-2" /></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{personalInfo.mobileNumber}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i className="bi bi-envelope me-2 ms-2" /></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, wordBreak: 'break-all' }}>{personalInfo.email}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i className="bi bi-geo-alt-fill me-2 ms-2" /></div>
                                <div><p className="mt-3" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, wordBreak: 'break-all' }}>{personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i class="bi bi-github ms-2 me-2" /></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{socialMediaLink[0].github}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4" >
                        <div style={{ width: '50%' }} className="me-4">
                            <h6 className='heading107' style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>SOFT SKILLS <br /><hr style={{ width: 'inherite' }} /></h6>
                            <ul className="custom-list" style={{ listStyleType: 'none', }}>
                                {SoftSkill && SoftSkill.length > 0 && SoftSkill[0].map((soft, index) => (
                                    <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                        <div><span style={{ color:fontColor,fontFamily:fontStyle,fontSize:fontSize, marginRight: "8px" }}>✔</span></div>
                                        <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{soft.softSkill}</p>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <h6 className='heading107' style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>HARD SKILLS <br /><hr style={{ width: 'inherite' }} /></h6>
                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {keyskills && keyskills.length > 0 && keyskills[0].map((hard, index) => (
                                        <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                            <div><span style={{ marginRight: "8px",color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>✔</span></div>
                                            <div style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{hard.keyskills}</div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h6 className="heading107" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>LANGUAGE <br /><hr style={{ width: 'inherite' }} /></h6>

                                <ul className="custom-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {languages && languages.length > 0 && languages[0].map((hard, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{hard.language}</span>
                                                <div
                                                    style={{
                                                        height: '8px', /* Line thickness */
                                                        width: '100px', /* Total width of the rating bar */
                                                        background: '#e0e0e0', /* Gray background for unfilled area */
                                                        position: 'relative',
                                                        marginLeft: '10px',
                                                        borderRadius: '4px', /* Optional: Rounded edges */
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            height: '100%', /* Matches parent height */
                                                            width: `${(hard.rating / 5) * 100}%`, /* Dynamic width based on rating */
                                                            background: 'green', /* Color of the filled rating */
                                                            borderRadius: '4px', /* Optional: Rounded edges */
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h6 className='heading107' style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>INTEREST <br /><hr style={{ width: 'inherite' }} /></h6>

                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {Hobbies && Hobbies.length > 0 && Hobbies[0].map((hard, index) => (
                                        <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                            <div><span style={{ color: "green", marginRight: "10px",color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>✔</span></div>
                                            <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{hard.hobbies}</p></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '50%' }} className="">
                            <div className=" ">
                                <h6 className='heading107' style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>EDUCATION <br /><hr style={{ width: '100%' }} /></h6>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item107">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className="employment-detail107 me-3" style={{ whiteSpace: 'none',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{edu.startYear}-{edu.endYear}</p>
                                            </div>
                                            <div>
                                                <p className="employment-detail107" style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.degree}</p>
                                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="employment-detail107 ">{edu.university}</p>
                                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className=" ">
                                <h6 className='heading107' style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}>CERTIFICATION <br /><hr style={{ width: 'inherite' }} /></h6>
                                {certi.map((edu, index) => (
                                    <div key={index} className="">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className=" me-3" style={{ whiteSpace: 'none',color:fontColor,fontFamily:fontStyle,fontSize:fontSize }}>{edu.issueDate}</p>
                                            </div>
                                            <div>
                                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className="">{edu.organization}</p>
                                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} className=" ">{edu.description}</p>
                                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{edu.city}</p>
                                            </div>
                                        </div>
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

                    <div className='downloadbuttondiv'>
                        <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
<PdfDownloadButton elementId="Alisha_mirza107" fileName={inputFields} />
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
            <div className="w-100"><GoogleAd /></div>
        </div>
    )
}
export default Preview107;