import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/Preview3.css';  // Import the CSS file

const Preview3 = () => {
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
        const element = document.getElementById('Alish_mirza');
    
        try {
            const scale = 5; // Increase the scale for better resolution
            const canvas = await html2canvas(element, {
                scale: scale, 
                useCORS: true, // Allows cross-origin images to be rendered correctly
                logging: true, // Enable logging for debugging
            });
    
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
    
            // Calculate the aspect ratio to fit A4
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
    
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
        <div className='container3'>
            <div className='resume-wrapper' id='Alish_mirza' style={{color:fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className='sidebar'>
                    <div className='imagediv3'>
                        <img src={personalInfo.image} alt="Selected" className='image3' />
                    </div>
                    <div className='contactdiv' style={{color:fontColor}}>
                        <h6 style={{ color: headingColor }} className='section-title' >Contact</h6>
                        <hr />
                        
                        <p style={{color:fontColor}}><i className="bi bi-telephone-forward-fill icon" /> {personalInfo.mobileNumber}</p>
                        <p className='email' style={{color:fontColor,wordBreak:'break-all'}}><i className="bi bi-envelope-at-fill icon" /> {personalInfo.email}</p>
                        <p style={{color:fontColor}}><i className="bi bi-geo-alt-fill icon" /> {personalInfo.state} {personalInfo.city} {personalInfo.postalCode}</p>

                        <h6 style={{ color: headingColor }} className='section-title'>Education</h6>
                        <hr />
                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <p style={{color:fontColor}}>{edu.startYear} - {edu.endYear}</p>
                                <p style={{color:fontColor}}>{edu.type}</p>
                                <p style={{color:fontColor}}><b>{edu.univercity}</b></p>
                            </div>
                        ))}
                        <h6 style={{ color: headingColor }} className='section-title'>Skills</h6>
                        <hr />
                        {keyskills[0].map((skill, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{color:fontColor}}>{skill.keyskills}</li>
                                </ul>
                            </div>
                        ))}

                        <h6 style={{ color: headingColor }} className='section-title'>Language</h6>
                        <hr />
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{color:fontColor}}>{lan.language}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='main-content'>
                    <h4>{personalInfo.firstName} {personalInfo.lastName}</h4>
                    <div className='work-experience'>
                        {work[0].map((i, index) => (
                            <p key={index} style={{color:fontColor}}>{i.jobtitle}</p>
                        ))}
                    </div>
                    <h6 style={{ color: headingColor }}>Object</h6>
                    <hr />
                    <p style={{textAlign:'justify',color:fontColor}}>{personalInfo.object}</p>

                    <h6 style={{ color: headingColor }} className='section-title'>Experience</h6>
                    {work[0].map((i, index) => (
                        <div key={index}>
                            <p style={{color:fontColor}}><b>{i.jobtitle}</b></p>
                            <p style={{color:fontColor}}><b>{i.organization}</b></p>
                            <p style={{color:fontColor}}><b>{i.startYear}-{i.endYear}</b></p>
                        </div>
                    ))}
                    <h6 style={{ color: headingColor }} className='section-title'>Hobbies</h6>
                    <hr />
                    {Hobbies[0].map((hobb, index) => (
                        <div key={index}>
                            <ul>
                                <li style={{color:fontColor}}>{hobb.hobbies}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="resume-download-section">
                <div className='d-flex'>
                    <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>

                </div>

                {/* Color Picker for Background Color */}
                <div className='d-flex border' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
    );
}

export default Preview3;
