import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview7.css'
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
const Preview7 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings


    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)

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
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
            <div className='preview-main7 d-dm-flex'>

                <div className='resume-previeww7' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alish_mirza1">
                    <div className='name-div7'>
                        {/* Dynamic Heading */}
                        <h3 className="pt-5" style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontFamily: fontStyle, fontWeight: 700 }}>
                            {personalInfo.firstName} {personalInfo.lastName}
                        </h3>
                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>
                            {work[0][0].jobtitle}
                        </p>
                    </div>

                    <div className='d-flex justify-content-between contact-div7'>
                        <div className='text-end'>
                            <div className='contact-div7'>
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'> CONTACT</h5>
                                <hr />
                                <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                                <p style={{ fontSize: `${fontSize}px`, wordBreak: 'break-all',color:fontColor,fontFamily:fontStyle  }}><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                                <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                            </div>

                            <div className="education-div7">
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'>EDUCATION</h5>
                                <hr />
                                {education[0].map((edu, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}><b>{edu.degree}, {edu.type}</b></p>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}><b>{edu.univercity}</b></p>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{edu.type}</p>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{edu.startYear} - {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='skills-div7'>
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'>SKILLS</h5>
                                <hr />
                                {keyskills[0].map((keys, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{keys.keyskills}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='hobbies-div7'>
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'>HOBBIES</h5>
                                <hr />
                                {Hobbies[0].map((hobb, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{hobb.hobbies}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='devider7'></div>

                        <div className='job-experience7'>
                            <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'>JOB EXPERIENCE</h5>
                            <hr />
                            {work[0].map((works, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}><b>{works.jobtitle}</b></p>
                                    <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{works.startYear}-{works.endYear}</p>
                                    <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{works.organization}</p>
                                    <p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{works.aboutexperience}</p>
                                </div>
                            ))}

                            <div className="language7">
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px`,fontFamily:fontStyle }} className='heading7'>LANGUAGE</h5>
                                <hr />
                                {LLanguage[0].map((lan, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{lan.language}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading7'>ABOUT ME</h5>
                                <hr />
                                <div className='d-flex justify-content-start'>
                                    <div><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>Date of Birth:- </p><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                                    <div><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>Marital Status:- </p><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                                    <div><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>Nationality:- </p><p style={{ fontSize: `${fontSize}px`,color:fontColor,fontFamily:fontStyle }}>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume-download-section0">
                    <div style={{ width: 'inherit' }}><GoogleAd /></div>
                    <div className='downloadbuttondiv'>
                        <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
<PdfDownloadButton elementId="Alish_mirza1" fileName={inputFields} />S
                    </div>
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
                    <div style={{ width: 'inherit' }}><GoogleAd /></div>
                </div>
            </div>
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
        </div>
    )
}
export default Preview7;