import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../previewfolder/CSS/preview4.css'
import { useNavigate } from 'react-router-dom';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview4 = () => {
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

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively...</p>
            </header>
            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="preview-container4 d-sm-flex justify-content-between">
                <div className="resume-preview4 mb w-100"
                    style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}
                    id="Alish_mirza1">
                    <div className=''>
                        <div className="resume-header4 " style={{ width: '100%', position: 'relative' }}>
                            <div className="header-shapes4 d-flex justify-content-between " style={{ width: '100%' }}>
                                <div className="shape-left4" style={{ backgroundColor: '#100129', width: '100px', height: '100px' }}></div>
                                <div className="shape-right4" style={{}}></div>
                            </div>

                            <div className="personal-info mt-5 " style={{ position: 'absolute', top: '20px', left: '20px' }}>
                                <img src={personalInfo.image} className="personal-image" alt="Selected"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid white' }} />
                                <h3 className="first-name"
                                    style={{ color: headingColor, position: 'absolute', top: '20px', left: '150px', stroke: 'HighlightText', fontSize: `${fontSizeheading}px` }}>
                                    {personalInfo.firstName}
                                </h3>
                                <h3 className="last-name"
                                    style={{ color: headingColor, position: 'absolute', top: '50px', left: '250px', fontSize: `${fontSizeheading}px` }}>
                                    {personalInfo.lastName}
                                </h3>
                                <p className="job-title"
                                    style={{ position: 'absolute', top: '100px', left: '150px', fontSize: `${fontSize}px` }}>
                                    {work[0].map((i, index) => (
                                        <div key={index} style={{ color: fontColor }}>
                                            {i.jobtitle}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div className="resume-body d-flex mt-3 justify-content-between w-100 ">
                            <div className="left-column me-4 w-50" style={{ marginTop: '110px' }}>
                                <h4 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} 
                                className="section-title about-title w-100 text-center">About</h4>
                                <div className="about-content " >
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px` }} className="objective ms-2 mb-3">{personalInfo.object}</p>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px` }} className="contact-inf">
                                        <i className="bi bi-telephone-forward-fill me-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />{personalInfo.mobileNumber}
                                    </p>
                                    <p className="email" style={{ wordWrap: 'break-word', color: fontColor, fontSize: `${fontSize}px` }}>
                                        <i className="bi bi-envelope-at-fill" style={{ color: fontColor, fontSize: `${fontSize}px` }}></i>{personalInfo.email}
                                    </p>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px` }} className="address">
                                        <i className="bi bi-geo-alt-fill" style={{ color: fontColor, fontSize: `${fontSize}px` }}></i>{personalInfo.state} {personalInfo.city} {personalInfo.postalCode}
                                    </p>
                                </div>

                                <h4 className="section-title language-title text-center" style={{ backgroundColor: '#100129', color: headingColor, fontSize: `${fontSizeheading}px` }}>Language</h4>
                                <div className="language-content">
                                    {LLanguage[0].map((lan, index) => (
                                        <ul key={index}>
                                            <li style={{ fontSize: `${fontSize}px` }}>{lan.language}</li>
                                        </ul>
                                    ))}
                                </div>

                                <h4 className="section-title skills-title mt-3  text-center" style={{ color: headingColor, backgroundColor: '#100129', fontSize: `${fontSizeheading}px` }}>Skills</h4>
                                <div className="skills-content ">
                                    {keyskills[0].map((skill, index) => (
                                        <ul key={index}>
                                            <li style={{ fontSize: `${fontSize}px` }}>{skill.keyskills}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>

                            <div className="right-column w-50" style={{ marginTop: '70px', marginRight: '' }}>
                                <h4 className="section-title experience-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129', fontSize: `${fontSizeheading}px` }}>Experience</h4>
                                <div className="experience-content">
                                    {work[0].map((i, index) => (
                                        <div key={index}>
                                            <p style={{ marginBottom: '2px', whiteSpace: 'nowrap', color: fontColor, fontSize: `${fontSize}px` }}>
                                                <b>{i.jobtitle}</b>
                                            </p>
                                            <p style={{ marginBottom: '2px', color: fontColor, fontSize: `${fontSize}px` }}>
                                                <b>{i.organization}</b>
                                            </p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px` }}>
                                                <b>{i.startYear}-{i.endYear}</b>
                                            </p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px` }}>{i.aboutexperience}</p>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="section-title education-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129', fontSize: `${fontSizeheading}px` }}>Education</h4>
                                <div className="education-content">
                                    {education[0].map((edu, index) => (
                                        <div key={index}>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px` }}><b>{edu.degree}</b></p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px` }}><b>{edu.university}</b></p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px` }}><b>{edu.year}</b></p>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="section-title hobbies-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129', fontSize: `${fontSizeheading}px` }}>Hobbies</h4>
                                <div className="hobbies-content">
                                    {Hobbies[0].map((hobby, index) => (
                                        <ul key={index}>
                                            <li style={{ color: fontColor, fontSize: `${fontSize}px` }}>{hobby.hobbies}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="resume-download-section0">
                        <div style={{ width: '100%' }}><GoogleAd /></div>
                        <div className='downloadbuttondiv'>
                            <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
<PdfDownloadButton elementId="Alish_mirza1" fileName={inputFields} />
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
                                <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2 w-100" />
                            </div>
                        </div>
                        <div style={{ width: '100%' }}><GoogleAd /></div>
                    </div>
            </div>
        </div>
    );
}

export default Preview4;
