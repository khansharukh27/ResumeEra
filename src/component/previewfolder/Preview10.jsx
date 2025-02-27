import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview10.css'
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
const Preview10 = () => {
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
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink])
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)


    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, yellow 75%, darkgrey 75%)',
        margin: '20px auto',
        borderRadius: '5px'
    };
    return (
        <div >
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div>
                <GoogleAd />
            </div>
            <div className='d-sm-flex resume-10'>
                <div className="resume-preview10" style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alish_mirza1">
                    <div className='main10' style={{ backgroundColor: 'grey' }}>
                        <div style={{ backgroundColor: 'black', color: 'white' }} className='main1-div10'>
                            <div className='imagediv-inner10'>
                                <img src={personalInfo.image} className="image10" alt="Selected" />
                            </div>
                            <div className='jobtite10'>
                                <p className='mb-5 p-2' style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '5px', fontSize: `${fontSize}px` }}>
                                    {work[0][0].jobtitle}
                                </p>
                                <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px`,fontFamily:fontStyle }} className="education10">EDUCATION</h5>
                                <div style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                                {education[0].map((edu, index) => (
                                    <div key={index}>
                                        <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}} className='work-year10'>{edu.degree}</p>
                                        <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}} className='work-year10'>{edu.univercity}</p>
                                        <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}} className='work-year10'>{edu.type}</p>
                                        <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }} className='work-year10'>{edu.startYear} - {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='heading'>SKILLS</h5>
                            <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div className='row'>
                                {keyskills[0].map((keys, index) => (
                                    <div className='d-flex justify-content-around' key={index}>
                                        <div>
                                            <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}} className='mt-2'>{keys.keyskills}</p>
                                        </div>
                                        <div style={lineStyle}></div>
                                    </div>
                                ))}
                            </div>

                            <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }} className='mt-5'>CONTACT</h5>
                            <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}><i className="bi bi-telephone-fill me-2 p-1"></i></div>
                                    <div><p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.mobileNumber}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow' }}><i className="bi bi-envelope me-2 p-1"></i></div>
                                    <div style={{ wordBreak: 'break-word' }}><p style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>{personalInfo.email}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow' }}><i className="bi bi-geo-alt-fill me-2 p-1"></i></div>
                                    <div><p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}><i className="bi bi-linkedin me-2 p-1"></i></div>
                                    <div className="mt-2 me-3"><b>{sMedia?.[0]?.linkedin && <><i className="bi bi-linkedin" /> {sMedia[0].linkedin}</>}</b></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='main2-10'>
                        <div className='p-2 mb-3 name-div10'>
                            <h3 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <p className='mb-5'>
                                <i className='p-1' style={{ backgroundColor: 'yellow', borderRadius: '5px',color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>{work[0][0].jobtitle}</i>
                            </p>
                            <p style={{ textAlign: 'justify',color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>
                                {personalInfo.object}
                            </p>
                        </div>

                        <h5 style={{ fontFamily: fontStyle, color: headingColor, fontSize: `${fontSizeheading}px` }}>JOB EXPERIENCE</h5>
                        <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {work[0].map((works, index) => (
                            <div key={index} className='d-flex justify-content-around mt-2 job-experience'>
                                <div style={{ height: '100px', width: '4px', backgroundColor: 'yellow' }}></div>
                                <div>
                                    <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }} className='work-title10'>{works.jobtitle}</p>
                                    <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }} className='work-year10'>{works.startYear} - {works.endYear}</p>
                                    <p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }} className='work-organization10'>{works.organization}</p>
                                </div>
                            </div>
                        ))}

                        <div>
                            <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>HOBBIES</h5>
                        </div>
                        <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }} className='work-year10'>{hobb.hobbies}</p>
                            </div>
                        ))}
                        <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>ABOUT ME</h5>
                        <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        <div className='row'>
                            <div className='d-flex justify-content-between col-6'>
                                <div><i style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>Date of Birth:-</i><p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>{personalInfo.dateofbirth}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                <div className='ms-4'><i style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>Marital Status:-</i><p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.maritalstatus}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                <div className='ms-4'><i style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px`}}>Nationality:-</i><p style={{ color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.nationality}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                            </div>
                        </div>
                        <div>
                            <h5 style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>LANGUAGE</h5>
                        </div>
                        <div className='mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{color:fontColor,fontFamily:fontStyle, fontSize: `${fontSize}px` }}>{lan.language}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-download-section0 ms-2 ps-2">
                    <div style={{ width: 'inherit' }}><GoogleAd /></div>
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
                            <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                    </div>
                    <div style={{ width: 'inherit' }}><GoogleAd /></div>
                </div>
            </div>
            <div>
                <GoogleAd />
            </div>
        </div>
    )
}
export default Preview10;