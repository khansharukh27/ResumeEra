import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview101.css'
// import DownloadSection from "../DownloadSection";

const Preview101 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#rrggbb')
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward[0]]);
    const Refrence = useSelector((state) => [state.reducer.addReference[0]])
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills[0]])
    console.log('refrences:-', personalInfo)
    console.log('honorand award:-', Honor)
    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza101');
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
        <div className="mains101">
            <div id="Alisha_mirza101" className="preview101"
                style={{ color: fontColor, fontFamily: fontStyle, backgroundColor: bgColor }}>
                <div className="preview101-1">
                    <div className="imagediv101">
                        <img className="image101" src={personalInfo ? personalInfo.image : null} alt="Selected" />
                        <h1 className="personal-name101" style={{ color: headingColor, }}>{personalInfo.firstName} <br />{personalInfo.lastName}</h1>
                        <p>{work.jobtitle}</p>
                    </div>
                    <div className="profile-summary-section101">
                        <h5 className="profile-summary-title101" style={{ color: headingColor }}>
                            <i class="bi bi-person-circle me-3" />PROFILE SUMMARY
                        </h5>
                        <p className="profile-summary-content101">{personalInfo.object}</p>
                    </div>
                    <div className="contact101">
                        <h5 style={{ color: headingColor }}><i className="bi bi-person-lines-fill me-3" />Contact</h5>
                        <p><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                        <p><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p style={{ wordBreak: "break-all" }}><i className="bi bi-envelope me-2" ></i>{personalInfo.email}</p>
                    </div>
                    <div className="reference101">
                        <h5 style={{ color: headingColor }}><i class="bi bi-person-fill-gear me-3" />REFERENCE</h5>
                        {
                            Refrence.map((ref, index) => (
                                <div key={index}>
                                    <div className="mbk-2">
                                        <p className="" style={{ textAlign: 'center' }}><b>{ref.name}</b></p>
                                        <p style={{ textAlign: 'center' }}>{ref.position}</p>
                                    </div>

                                    <p className="ms-4"><i className="bi bi-telephone-fill me-2"></i>{ref.contact}</p>
                                    <p className="ms-4"><i className="bi bi-envelope me-2"></i>{ref.email}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="preview101-2">
                    <div className="experience-section101">
                        <h5 className="details-title101" style={{ color: headingColor,wordBreak:'none' }}>
                            <i class="bi bi-person-workspace me-3" style={{}}></i>WORK-EXPERIENCE</h5>
                        {work.map((works, index) => (
                            <div key={index} className="employment-history101 ms-4">
                                <div className="exp-inner101">
                                    <p className="employment-duration101">{works.startYear} - {works.endYear}</p>
                                    <p>/</p>
                                    <p className="employment-detail101"><b>{works.organization}</b><br />{works.jobtitle}</p>
                                </div>
                                <p className='aboutexperience101'>{works.aboutexperience}</p>
                            </div>
                        ))}
                    </div>
                    <div className="education-section101">
                        <h5 className="details-title101" style={{ color: headingColor }}><i class="bi bi-book me-3"></i>EDUCATION</h5>
                        {education.map((edu, index) => (
                            <div key={index} className="education-item101 ms-4">
                                <div className="education-degree101">
                                    <span className="education-duration101">{edu.startYear} - {edu.endYear}</span>
                                    <span>{edu.degree} <br /><br />{edu.univercity}</span>
                                </div>
                                <div className="education-details101">
                                    <span><b></b></span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skill-section101 mt-3">
                        <h5><i class="bi bi-gear-wide-connected me-3"></i>SKILL</h5>
                        <div className="inner-101-1 ms-4">
                            <h6 className="technical-skills-title101" style={{ color: headingColor }}>
                                <i class="bi bi-person-fill-gear"></i>TECHNICAL SKILL</h6>
                            {keyskills.map((keys, index) => (
                                <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                    <p style={{marginTop:'10px'}}>{keys.keyskills}</p>
                                    {/* 5-star rating system */}
                                    <div className="star-rating ms-3 w-50">
                                        {[...Array(5)].map((_, i) => (
                                            <i
                                                key={i}
                                                className={`bi bi-star${i < keys.rating ? '-fill' : ''} star101`}
                                                style={{ color: i < keys.rating ? '#ffc150' : 'grey' }} // Filled stars are gold, others are gray
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="row inner-101-1">
                            <h6 className="soft-skills-title101" style={{ color: headingColor }}>
                                <i class="bi bi-person-fill-gear"></i>SOFT SKILL</h6>
                            {SoftSkill.map((soft, index) => (
                                <div className="col-4 ms-2">
                                    <p>{soft.softSkill}</p>
                                </div>
                            ))}
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
                <div className='d-flex border' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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

    )
}
export default Preview101;