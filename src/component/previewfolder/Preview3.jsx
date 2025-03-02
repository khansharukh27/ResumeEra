import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/Preview3.css';  // Import the CSS file
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview3 = () => {
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
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);


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
            <div className='container3'>

                <div className='resume-wrapper' id='Alish_mirza1' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                    <div className='sidebar'>
                        <div className='imagediv3'>
                            <img src={personalInfo.image} alt="Selected" className='image3' />
                        </div>
                        <div className='contactdiv' style={{ color: fontColor }}>
                            <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title' >Contact</h6>
                            <hr style={{ width: "100%" }} />
                            <p style={{ color: fontColor, fontSize: fontSize }}><i className="bi bi-telephone-forward-fill icon" /> {personalInfo.mobileNumber}</p>
                            <p className='email' style={{ color: fontColor, wordBreak: 'break-all', fontSize: fontSize }}><i className="bi bi-envelope-at-fill icon" /> {personalInfo.email}</p>
                            <p style={{ color: fontColor, fontSize: fontSize }}><i className="bi bi-geo-alt-fill icon" /> {personalInfo.state} {personalInfo.city} {personalInfo.postalCode}</p>

                            <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title'>Education</h6>
                            <hr />
                            {education[0].map((edu, index) => (
                                <div key={index}>
                                    <p style={{ color: fontColor, fontSize: fontSize }}>{edu.startYear} - {edu.endYear}</p>
                                    <p style={{ color: fontColor, fontSize: fontSize }}>{edu.type}</p>
                                    <p style={{ color: fontColor, fontSize: fontSize }}><b>{edu.univercity}</b></p>
                                </div>
                            ))}
                            <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title'>Skills</h6>
                            <hr />
                            {keyskills[0].map((skill, index) => (
                                <div key={index}>
                                    <ul>
                                        <li style={{ color: fontColor, fontSize: fontSize }}>{skill.keyskills}</li>
                                    </ul>
                                </div>
                            ))}

                            <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title'>Language</h6>
                            <hr />
                            {LLanguage[0].map((lan, index) => (
                                <div key={index}>
                                    <ul>
                                        <li style={{ color: fontColor, fontSize: fontSize }}>{lan.language}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='main-content'>
                        <h4 style={{ fontSize: fontSizeheading }}>{personalInfo.firstName} {personalInfo.lastName}</h4>
                        <div className='work-experience'>
                            {work[0].map((i, index) => (
                                <p key={index} style={{ color: fontColor, fontSize: fontSize }}>{i.jobtitle}</p>
                            ))}
                        </div>
                        <h6 style={{ color: headingColor, fontSize: fontSizeheading }}>Object</h6>
                        <hr />
                        <p style={{ textAlign: 'justify', color: fontColor, fontSize: fontSize }}>{personalInfo.object}</p>

                        <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title'>Experience</h6>
                        {work[0].map((i, index) => (
                            <div key={index}>
                                <p style={{ color: fontColor, fontSize: fontSize }}><b>{i.jobtitle}</b></p>
                                <p style={{ color: fontColor, fontSize: fontSize }}><b>{i.organization}</b></p>
                                <p style={{ color: fontColor, fontSize: fontSize }}><b>{i.startYear}-{i.endYear}</b></p>
                            </div>
                        ))}
                        <h6 style={{ color: headingColor, fontSize: fontSizeheading }} className='section-title'>Hobbies</h6>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{ color: fontColor, fontSize: fontSize }}>{hobb.hobbies}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-download-section0">
                    <div style={{ width: '100%' }}><GoogleAd /></div>
                    <div className='downloadbuttondiv'>
                        <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
<PdfDownloadButton elementId='Alish_mirza1' fileName={inputFields} />
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
                    <div style={{ width: '100%' }}><GoogleAd /></div>
                </div>
            </div>
            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
}

export default Preview3;
