import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview9.css'
import GoogleAd from '../adFolder/GoogleAd';
// import { color } from 'html2canvas/dist/types/css/types/color';

const Preview9 = () => {
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
    // const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink])
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)


    
    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alish_mirza1');
        try {
            const scale = 3; // Slightly higher resolution without excessive file size
            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true,
                logging: true,
            });
    
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/jpeg', 0.75); // Use JPEG format with 75% quality for compression
    
            const a4Width = 210; // A4 width in mm
        const a4Height = 297;
            const imgHeight = (canvas.height * a4Width) / canvas.width;
            // let position = 0;
    
            // Check if the image height is greater than a single page height
            pdf.addImage(imgData, 'JPEG', 0, 0, a4Width, imgHeight > a4Height ? a4Height : imgHeight, undefined, 'FAST');

    
            const fileName = `${inputFields}.pdf`;
            pdf.save(fileName);
    
            // Store the image data URL in localStorage
            const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
            savedResumes.push(imgData);
            localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
    
            alert('Your Resume is downloaded');
            navigate('/myresume');
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

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
            <div style={{width:'inherit'}}><GoogleAd/></div>
        <div className=' preview9'>
        <div className="resume-preview9" style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alish_mirza1">
                    <div className='main-one-9' style={{ position: 'relative' }}>
                        <div className='image-div9' style={{ position: 'absolute', left: '15px', backgroundColor: 'yellow', borderBottomLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottom: `10px solid ${bgColor}`, borderRight: `10px solid ${bgColor}`, borderLeft: `10px solid ${bgColor}` }}>
                            <img src={personalInfo.image} className="image9" alt="Selected" />
                        </div>
                        <div className='contact-div9' style={{ color: fontColor, backgroundColor: '#e4e2df' }}>
                            <h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900,paddingTop:'250px' }}>CONTACT_</h3>
                            <div style={{ color: fontColor }}>
                                <div className='d-flex' style={{ height: "70px", color: fontColor }}>
                                    <div className='me-2 mb-3 ' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill me-2 p-1 "></i></div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.mobileNumber}</p>
                                </div>
                                <div className='d-flex '>
                                    <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-envelope me-2 p-1"></i></div>
                                    <div><p style={{ color: fontColor, wordBreak: 'break-all', fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.email}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-geo-alt-fill me-2 p-1"></i></div>
                                    <div><p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-linkedin me-2 p-1"></i></div>
                                    <div><p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}> {sMedia?.[0]?.linkedin || ''}</p></div>
                                </div>
                            </div>
                            <h3 className="heading9" style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900, fontFamily: fontStyle }}>EDUCATION_</h3>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-inner9">
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.degree}</p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><b> {edu.univercity}</b></p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.type}</p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.startYear} - {edu.endYear}</p>
                                </div>
                            ))}

                            <h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900, fontFamily: fontStyle }}>ABOUT ME_</h3>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div><b>Date of Birth:- </b><p style={{ color: fontColor, fontSize: `${fontSize}px` }}>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                                <div><b>Marital Status:- </b><p style={{ color: fontColor, fontSize: `${fontSize}px` }}>{personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                                <div><b>Nationality:- </b><p style={{ color: fontColor, fontSize: `${fontSize}px` }}>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                            </div>

                            <h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900 }}>OBJECT CARRIERE_</h3>
                            <p style={{ textAlign: 'justify', color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{personalInfo.object}</p>
                        </div>
                    </div>
                    <div className='main2-9'>
                        <div className='name-div9'>
                            <h3 className="pt-5" style={{ fontWeight: 900, color: headingColor, fontSize: `${fontSizeheading}px` }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <p className='mb-5 jobtitles9' style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>
                                {work[0][0].jobtitle}
                            </p>
                        </div>
                        <hr className='m-3' style={{ backgroundColor: 'yellow', height: '5px' }} />
                        <h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900 }}>JOB EXPERIENCE_</h3>
                        {work[0].map((works, index) => (
                            <div key={index} className='d-flex justify-content-around mt-2 work-div9'>
                                <div style={{ height: '100px', width: '3px', backgroundColor: 'yellow' }}> </div>
                                <div className='work-inner-div9'>
                                    <p className='jobtitle9' style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.jobtitle}</p>
                                    <p className='job-year9' style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.startYear}-{works.endYear}</p>
                                    <p className='job-organization9' style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.organization}</p>
                                </div>
                            </div>
                        ))}

                        <div><h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900 }}>HOBBIES_</h3></div>
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p className='hobbiesp9' style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{hobb.hobbies}</p>
                            </div>
                        ))}
                        <div className='row'>
                            <h3 className='heading9' style={{ color: headingColor, fontSize: `${fontSizeheading}px`, fontWeight: 900 }}>SKILLS_</h3>
                            {keyskills[0].map((keys, index) => (
                                <div className='skills9'>
                                    <div><p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{keys.keyskills}</p> <hr style={{ height: '5px', backgroundColor: 'darkgoldenrod' }} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div className="resume-download-section0">
            <div style={{width:'inherit'}}><GoogleAd/></div>
                <div className='downloadbuttondiv'>
                    <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
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
                <div style={{width:'inherit'}}><GoogleAd/></div>

            </div>
        </div>
        <div style={{width:'inherit'}}><GoogleAd/></div>
        </div>
    )
}
export default Preview9;