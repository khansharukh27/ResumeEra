import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './/CSS/preview103.css'
import GoogleAd from "../adFolder/GoogleAd";
// import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
const Preview103 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#rrggbb')
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    console.log('honorand award:-', Honor)
    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza103');
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
        <div className="personal-info-section103">
            <div className="main103 mt-4 me-md-5 ms-md-1" id="Alisha_mirza103" style={{fontFamily:fontStyle,color:fontColor,backgroundColor:bgColor}}>
                <div className="personal-header">
                    <h3 className="personal-name" style={{ color: headingColor }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                    <p className="personal-details">{personalInfo.city} {personalInfo.state} <b>.</b> {personalInfo.email} <b>.</b> {personalInfo.mobileNumber}</p>
                </div>
                <div className="profile-summary-section">
                    <h5 className="profile-summary-title" style={{ color: headingColor }}>PROFILE SUMMARY</h5>
                    <hr className="profile-summary-hr" />
                    <p className="profile-summary-content">{personalInfo.object}</p>
                </div>
                <div className="education-section">
                    <h5 className="details-title103" style={{ color: headingColor }}>EDUCATION</h5>
                    <hr className="education-hr" />
                    {education[0].map((edu, index) => (
                        <div key={index} className="education-item103">
                            <div className="education-degree103">
                                <span>{edu.degree}</span>
                                <span className="education-duration103">{edu.startYear} - {edu.endYear}</span>
                            </div>
                            <div className="education-details">
                                <span><b>{edu.univercity}</b></span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="experience-section">
                    <h5 className="details-title103" style={{ color: headingColor }}>PROFECTION EXPERIENCE</h5>
                    <hr className="experience-hr" />
                    {work[0].map((works, index) => (
                        <div key={index} className="employment-history103">
                            <div className="exp-inner103">
                            <p className="employment-detail103" style={{}}><b>{works.organization}</b>--{works.jobtitle}</p>
                            <p className="employment-duration103">{works.startYear} - {works.endYear}</p>
                            </div>
                            <p className='aboutexperience103'>{works.aboutexperience}</p>
                        </div>
                    ))}
                </div>
                <div className="skill-section103">
                    <h5 className="technical-skills-title" style={{ color: headingColor }}>TECHNICAL SKILL</h5>
                    <hr className="technical-skills-hr" />
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="technical-skill-item d-flex">
                            <p>{keys.keyskills}|</p> 
                        </div>
                    ))}
                </div>
                <div className="honor-award-section">
                    <h5 className="honor-title" style={{ color: headingColor }}>HONOR & AWARD</h5>
                    <hr className="honor-hr" />
                    {Honor[0].map((hobb, index) => (
                        <div key={index} className="honor-item">
                            <div className="honor-info">
                                <p><b>{hobb.title}</b></p>
                                <p><b>{hobb.year}</b></p>
                            </div>
                            <div className="honor-organization">
                                <p><b>{hobb.organization}</b></p>
                                <p><b>{hobb.description}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="resume-download-section0">
                    <div style={{ width: '100%' }}>
                        <GoogleAd />
                    </div>
                    <div style={{ width: '100%' }}>
                        <GoogleAd />
                    </div>
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
                    <div style={{ width: '100%' }}>
                        <GoogleAd/>
                    </div>

                </div>
        </div>
    )
}
export default Preview103;