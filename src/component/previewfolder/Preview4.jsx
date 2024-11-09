import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../previewfolder/CSS/preview4.css'
import { useNavigate } from 'react-router-dom';

const Preview4 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alish_mirza1');
        try {
            const scale = 4; // Slightly higher resolution without excessive file size
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
        <div className="preview-container4 d-sm-flex justify-content-between">
            <div className="resume-preview4 mb w-100" 
            style={{color:fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alish_mirza1">
                <div className=''>
                    <div className="resume-header4 " style={{ width: '100%', position: 'relative' }}>
                        <div className="header-shapes4 d-flex justify-content-between " style={{ width: '100%' }}>
                            <div className="shape-left4" style={{ backgroundColor: '#100129', width: '100px', height: '100px' }}></div>
                            <div className="shape-right4" style={{}}></div>
                        </div>

                        <div className="personal-info mt-5 " style={{ position: 'absolute', top: '20px', left: '20px' }}>
                            <img src={personalInfo.image} className="personal-image" alt="Selected" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid white' }} />
                            <h3 className="first-name" style={{color:headingColor ,position: 'absolute', top: '20px', left: '150px', stroke: 'HighlightText' }}>{personalInfo.firstName}</h3>
                            <h3 className="last-name" style={{ color:headingColor,position: 'absolute', top: '50px', left: '250px' }}>{personalInfo.lastName}</h3>
                            <p className="job-title" style={{ position: 'absolute', top: '90px', left: '150px' }}>
                                {work[0].map((i, index) => (
                                    <div key={index}  style={{color:fontColor}}>
                                        {i.jobtitle}
                                    </div>
                                ))}
                            </p>
                        </div>
                    </div>

                    <div className="resume-body d-flex mt-3 justify-content-between w-100 ">
                        <div className="left-column me-4 w-50" style={{ marginTop: '110px' }}>
                            <h4 style={{ color: headingColor }} className="section-title about-title w-100 text-center">About</h4>
                            <div className="about-content ms-3" >
                                <p style={{color:fontColor}} className="objective ms-2 ">{personalInfo.object}</p>
                                <p style={{color:fontColor}} className="contact-info"><i className="bi bi-telephone-forward-fill me-2" style={{ }} />{personalInfo.mobileNumber}</p>
                                <p  className="email" style={{ wordWrap: 'break-word',color:fontColor }}><i className="bi bi-envelope-at-fill" style={{  }}></i>{personalInfo.email}</p>
                                <p style={{color:fontColor}} className="address"><i className="bi bi-geo-alt-fill" style={{ fontSize: '' }}></i>{personalInfo.state} {personalInfo.city} {personalInfo.postalCode}</p>
                            </div>

                            <h4 className="section-title language-title text-center" style={{  backgroundColor: '#100129',color:headingColor }}>Language</h4>
                            <div className="language-content">
                                {LLanguage[0].map((lan, index) => (
                                    <ul key={index}>
                                        <li>{lan.language}</li>
                                    </ul>
                                ))}
                            </div>

                            <h4  className="section-title skills-title mt-3  text-center" style={{ color: headingColor, backgroundColor: '#100129' }}>Skills</h4>
                            <div className="skills-content ms-5">
                                {keyskills[0].map((skill, index) => (
                                    <ul key={index}>
                                        <li>{skill.keyskills}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="right-column w-50" style={{ marginTop: '70px', marginRight: '' }}>
                            <h4  className="section-title experience-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129' }}>Experience</h4>
                            <div className="experience-content">
                                {work[0].map((i, index) => (
                                    <div key={index}>
                                        <p style={{ marginBottom: '2px', whiteSpace: 'nowrap',color:fontColor }}><b>{i.jobtitle}</b></p>
                                        <p style={{ marginBottom: '2px',color:fontColor }}><b>{i.organization}</b></p>
                                        <p style={{color:fontColor}}><b>{i.startYear}-{i.endYear}</b></p>
                                        <p style={{color:fontColor}}>{i.aboutexperience}</p>
                                    </div>
                                ))}
                            </div>

                            <h4  className="section-title education-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129' }}>Education</h4>
                            <div className="education-content">
                                {education[0].map((edu, index) => (
                                    <div key={index}>
                                        <p style={{color:fontColor}} className=''><b>{edu.univercity}</b></p>
                                        <p style={{color:fontColor}} className=''>{edu.type}</p>
                                        <p style={{color:fontColor}}>{edu.startYear} - {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>

                            <h4 className="section-title hobbies-title mt-3 text-center" style={{ color: headingColor, backgroundColor: '#100129' }}>Hobbies</h4>
                            <div className="hobbies-content">
                                {Hobbies[0].map((hobb, index) => (
                                    <ul key={index}>
                                        <li>{hobb.hobbies}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                    </div>


                </div>
                <div className='underdiv'>
                    <div className="shape-bottom-left4" style={{}}></div>
                    <div className="shape-bottom-right4" style={{}}>hi</div>

                </div>
            </div>
            <div className="resume-download-section0">
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
            </div>
        </div>
    )
}

export default Preview4;
