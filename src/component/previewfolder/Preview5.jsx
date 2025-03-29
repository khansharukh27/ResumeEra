import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview5.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview5 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black');
    const [fontColor, setFontColor] = useState('black');
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [headingsize, setHeadingsize] = useState(20); // Dynamic font size for headings

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const changeAlignment = (alignment) => {
        document.execCommand('justify' + alignment, false, null);
    };
    
    const toggleStyle = (style) => {
        document.execCommand(style, false, null);
    };

    // Function to toggle lists (bullet and numbered)
    const toggleList = (listType) => {
        document.execCommand(listType, false, null);
    };
    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume doesn't show your data in resume, please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals! 
                </p>
            </header>
            <div className="w-100"><GoogleAd /></div>
            <div className="d-md-flex marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div className="preview05" id="Alish_mirza1" style={{ backgroundColor: bgColor }}>
                    <div className="contact05" style={{ backgroundColor: 'grey' }}>
                        <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey' }} />
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}> Contact</h3>
                        <hr style={{ borderColor: fontColor }} />
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, wordBreak: 'break-all' }}><i className="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, wordBreak: 'break-all' }}><i className="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}>Education</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><b> {edu.univercity}</b></p>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.type}</p>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}>Skills</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="text-center">
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{keys.keyskills}</p>
                                <hr style={{ height: '2px', borderColor: fontColor }} />
                            </div>
                        ))}
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}>Language</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{lan.language}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="second05">
                        <h3 className="" style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>
                            {work[0][0].jobtitle}
                        </p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }} className='mt-4'>{personalInfo.object}</p>

                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }} className='mt-4'>Job Experience</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {work[0].map((works, index) => (
                            <div key={index}>
                                <ul>
                                    <li className="work-item05">
                                        <div className="lines"></div>
                                        <div className="circle"></div>
                                        <div className="content05">
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><b>{works.jobtitle}</b></p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.startYear}-{works.endYear}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.organization}</p>
                                        </div>
                                        <div className="circle"></div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        
                        <div>
                            <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingsize}px` }}>Hobbies</h3>
                            <hr style={{ borderColor: fontColor }} />
                            {Hobbies[0].map((hobb, index) => (
                                <div key={index}>
                                    <ul>
                                        <li>
                                           <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}> {hobb.hobbies}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="resume-download-section0">
                    <div className="w-100"><GoogleAd /></div>
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
                            <span style={{ color: headingColor }}><i class="bi bi-patch-plus"></i> HS  </span>
                            <input type="number" value={headingsize} onChange={(e) => setHeadingsize(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                        <div>
                            <span style={{ color: fontColor }}><i class="bi bi-patch-plus"></i> FS  </span>
                            <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                    </div>
                    <div className="w-100"><GoogleAd /></div>
                </div>
            </div>
            <div className="w-100"><GoogleAd /></div>
        </div>
    )
}
export default Preview5;
