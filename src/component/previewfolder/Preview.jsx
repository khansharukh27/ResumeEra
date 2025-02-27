
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('black');
    const [headingColor, setHeadingColor] = useState('black');
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1 style={{ fontSize: `${fontSizeheading}px` }}>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p style={{ fontSize: `${fontSize}px` }}>
                    Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.
                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.
                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!
                </p>
            </header>

            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="preview-container d-md-flex" style={{ position: 'relative' }}>
                <div className="preview-page" id="Alish_mirza1" style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                    <div className="d-flex justify-content-center preview-image-container">
                        <img src={personalInfo.image} alt="Selected" className="preview-image" />
                    </div>
                    <div className="text-center preview-text">
                        <div>
                            <h3 className="preview-name" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>
                                {personalInfo.firstName} {personalInfo.lastName}
                            </h3>
                        </div>
                        <span className="preview-address" style={{ fontSize: `${fontSize}px` }}>
                            {work.map((works, index) => (
                                <div key={index} className="preview-job-title">
                                    {works.jobtitle}
                                </div>
                            ))}.
                            {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                        </span>
                    </div>
                    <div className="d-flex preview-details">
                        <div className="me-4 text-center preview-details-section">
                            <div className='d-flex outer'>
                                <div className='emptydiv'>
                                </div>
                                <h6 className="details-title" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>Detail</h6>
                                <div className='emptydiv'>
                                </div>
                            </div>
                            <span className="details-address" style={{ fontSize: `${fontSize}px` }}>{personalInfo.address}</span>
                            <span className="details-city-state" style={{ fontSize: `${fontSize}px` }}>{personalInfo.city} {personalInfo.state}</span><br />
                            <span className="details-mobile" style={{ fontSize: `${fontSize}px` }}>{personalInfo.mobileNumber}</span><br />
                            <span className="details-email" style={{ fontSize: `${fontSize}px` }}>{personalInfo.email}</span>
                            <br />
                            <div className='d-flex outer'>
                                <div className='emptydiv'></div>
                                <h6 className="details-title" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>Skills</h6>
                                <div className='emptydiv'></div>
                            </div>

                            {keyskills.map((keys, index) => (
                                <div key={index} className="skill-item" style={{ fontSize: `${fontSize}px` }}>
                                    {keys.keyskills}
                                    <hr className="skill-divider" style={{ height: '5px', color: 'black', backgroundColor: '' }} />
                                </div>
                            ))}
                            {education.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <div className='d-flex outer'>
                                        <div className='emptydiv'></div>
                                        <h6 className="details-title" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>Education {index + 1}</h6>
                                        <div className='emptydiv'></div>
                                    </div>
                                    <span className="education-duration" style={{ fontSize: `${fontSize}px` }}>{edu.startYear} - {edu.endYear}</span>
                                    <span className="education-detail" style={{ fontSize: `${fontSize}px` }}>{edu.type} from {edu.univercity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="preview-profile-section">

                            <h6 className="details-title" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>Profile</h6>

                            <span className="profile-description" style={{ fontSize: `${fontSize}px` }}>{personalInfo.object}</span>
                            <h6 className="details-title" style={{ color: headingColor, fontSize: `${fontSizeheading}px` }}>Employment History</h6>
                            {work.map((works, index) => (
                                <div key={index} className="employment-history">
                                    <span className="employment-detail" style={{ fontSize: `${fontSize}px`, fontWeight: '500' }}>
                                        {works.organization} {works.jobtitle}
                                    </span>
                                    <br />
                                    <span className="employment-duration" style={{ fontSize: `${fontSize}px` }}>{works.startYear} - {works.endYear}</span><br />
                                    <span className='aboutexperience' style={{ fontSize: `${fontSize}px` }}>{works.aboutexperience}</span>
                                </div>
                            ))}
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
                            <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                    </div>
                    <div style={{ width: '100%' }}><GoogleAd /></div>

                </div>
            </div>
            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview;
