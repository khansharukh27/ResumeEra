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
    const [fontSize, setFontSize] = useState(16); // Initial font size
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size


    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => state.reducer.addLanguage);
    const Hobbies = useSelector((state) => state.reducer.addHobbies);
    
    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize+1); // Increase font size by 2px
    };
    const decreaseFontSize = () => {
        setFontSize((prevSize) =>prevSize-1)
    }
    const increaseFontSizeHeading = () => {
        setFontSizeheading((prevSize) => prevSize+1); // Increase font size by 2px
    };
    const decreaseFontSizeHeading = () => {
        setFontSizeheading((prevSize) =>prevSize-1)
    }

    
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
        <div className="preview2" >
            <div className=" main" id="Alish_mirza1" style={{ color:fontColor,backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className="main1">
                    <div className="maininner1">
                        <h3 className="pt-5" style={{ color: headingColor,fontSize:`${fontSize}px` }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                        <p  style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{work[0][0].jobtitle}</p>
                        <div className="maininner2 p-2">
                            <img src={personalInfo.image} alt="Selected" />
                        </div>
                    </div>
                    <div className="maininner3">
                        <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-person-lines-fill" />Contact</h3>
                        <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`,wordBreak:'break-all'}}><i className="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    </div>
                    <div className="maininner4">
                        <h3 className="mt-5" style={{color:headingColor,fontSize:`${fontSizeheading}px`}}>Education</h3>
                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}><b>{edu.univercity}</b></p>
                                <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{edu.type}</p>
                                <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="main2">
                    <div className="about">
                        <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-file-person-fill me-2"></i>About</h3>
                        <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{personalInfo.object}</p>
                        <div className="jobExperience">
                            <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-briefcase-fill me-2"></i>Job Experience</h3>
                            {work[0].map((works, index) => (
                                <div key={index}>
                                    <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{works.jobtitle}</p><p style={{color:fontColor,fontSize:`${fontSize}px`}}>{works.startYear}-{works.endYear}</p>
                                    <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`}}>{works.organization}</p>
                                </div>
                            ))}
                        </div>
                        <div className="skill-section">
                            <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-mortarboard me-2"></i>Skills</h3>
                            {keyskills[0].map((keys, index) => (
                                <div key={index}>
                                    <p style={{fontFamily: fontStyle ,color:fontColor,fontSize:`${fontSize}px`,textAlign:'center'}}>{keys.keyskills}</p>
                                    <hr style={{ height: '2px' }} />
                                </div>
                            ))}
                        </div>
                        <div className="d-sm-flex justify-content-between">
                            <div className="language-section">
                                <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-translate me-2" />Language</h3>
                                {LLanguage.map((lan, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{lan.language}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="hobbies-section">
                                <h3 style={{color:headingColor,fontSize:`${fontSizeheading}px`}}><i className="bi bi-joystick me-2" />Hobbies</h3>
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
            <div className="resume-download-section0">
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
                <div>
                    
                    <button onClick={increaseFontSize} className="ms-2"><i class="bi bi-plus-circle">increase text</i></button>
                    <button onClick={decreaseFontSize} className="ms-2"><i class="bi bi-dash-circle">decrease text</i></button>
                    <button onClick={increaseFontSizeHeading} className="ms-2"><i class="bi bi-plus-circle">increase heading</i></button>
                    <button onClick={decreaseFontSizeHeading} className="ms-2"><i class="bi bi-dash-circle">decrease heading</i></button>

            </div>
            </div>
        </div>
    );
};

export default Preview2;
