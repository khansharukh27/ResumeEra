import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview2.css';

const Preview2 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('black')
    const [headingColor, setHeadingColor] = useState('black')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const LLanguage = useSelector((state) => state.reducer.addLanguage);
    const Hobbies = useSelector((state) => state.reducer.addHobbies);
    

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza');

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
        <div className="preview2" >
            <div className=" main" id="Alisha_mirza" style={{ color:fontColor,backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className="main1">
                    <div className="maininner1">
                        <h3 className="pt-5" style={{ color: headingColor }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                        <p>{work[0][0].jobtitle}</p>
                        <div className="maininner2 p-2">
                            <img src={personalInfo.image} alt="Selected" />
                        </div>
                    </div>
                    <div className="maininner3">
                        <h1 style={{ color: headingColor }}><i className="bi bi-person-lines-fill" />Contact</h1>
                        <p><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p><i className="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    </div>
                    <div className="maininner4">
                        <h1 className="mt-5" style={{ color: headingColor }}>Education</h1>
                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <p><b>{edu.univercity}</b></p>
                                <p>{edu.type}</p>
                                <p>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="main2">
                    <div className="about">
                        <h1 style={{ color: headingColor }}><i className="bi bi-file-person-fill me-2"></i>About</h1>
                        <p>{personalInfo.object}</p>
                        <div className="jobExperience">
                            <h1 style={{ color: headingColor }}><i className="bi bi-briefcase-fill me-2"></i>Job Experience</h1>
                            {work[0].map((works, index) => (
                                <div key={index}>
                                    <p><b>{works.jobtitle}</b></p><p>{works.startYear}-{works.endYear}</p>
                                    <p>{works.organization}</p>
                                </div>
                            ))}
                        </div>
                        <div className="skill-section">
                            <h1 style={{ color: headingColor }}><i className="bi bi-mortarboard me-2"></i>Skills</h1>
                            {keyskills[0].map((keys, index) => (
                                <div key={index}>
                                    {keys.keyskills}
                                    <hr style={{ height: '2px' }} />
                                </div>
                            ))}
                        </div>
                        <div className="d-sm-flex justify-content-between">
                            <div className="language-section">
                                <h1 style={{ color: headingColor }}><i className="bi bi-translate me-2" />Language</h1>
                                {LLanguage && LLanguage[0].map((lan, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{lan.language}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="hobbies-section">
                                <h1 style={{ color: headingColor }}><i className="bi bi-joystick me-2" />Hobbies</h1>
                                {Hobbies && Hobbies[0].map((hobb, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{hobb.hobbies}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-download-section">
                <div className='d-flex'>
                    <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
                </div>

                {/* Color Picker for Background Color */}
                <div className=' ' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <input type="color" placeholder='bg color changer' value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="bg-color-picker ms-2" />
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
};

export default Preview2;
