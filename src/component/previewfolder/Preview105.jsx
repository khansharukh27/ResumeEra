import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview105.css'

const Preview105 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#rrggbb')
    const [fontSize,setFontSize] = useState('medium')
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    const Refrence = useSelector((state) => [state.reducer.addReference])
    // const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    console.log('refrences:-', Refrence)
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
        <div className="main105">
            <div className="preview105" id="Alisha_mirza" style={{ fontSize:fontSize,color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className="personalinfo105">
                    <div className="imagediv105">
                        <img src={personalInfo.image} alt="doctore resume" />
                    </div>
                    <div className="namediv105">
                        <h2 style={{ whiteSpace: 'nowrap', marginBottom: '' }}>{personalInfo.firstName} {personalInfo.lastName}</h2>
                        <p></p>
                        <p style={{ color: 'lightgray' }}>{work[0][0].jobtitle}</p>
                    </div>
                    <div className="contactdiv105">
                        <p><i className="bi bi-geo-alt-fill me-2 ms-2" />{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                        <p><i className="bi bi-telephone-fill me-2 ms-2" />{personalInfo.mobileNumber}</p>
                        <p style={{ wordBreak: "break-all" }}><i className="bi bi-envelope me-2 ms-2" />{personalInfo.email}</p>
                        <p><i class="bi bi-github ms-2" />{socialMediaLink.github}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="inner105-1 w-50">
                        <h6 style={{ color: headingColor,fontFamily:fontStyle }}>Profile</h6>
                        <p>{personalInfo.object}</p>
                        <div className=" ">
                            <h6 style={{ color: headingColor }}>Language</h6>
                            {languages[0].map((keys, index) => (
                                <div key={index} className="">
                                    <div>
                                        {keys.language}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="education-section105 mt-3">
                            <h6 className="details-title105" style={{ color: headingColor }}>EDUCATION</h6>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-item105">
                                    <div className="education-degree105">
                                        <p>{edu.degree}</p>
                                        <p>{edu.univercity}</p>
                                        <p className="education-duration105">{edu.startYear} - {edu.endYear},{edu.city}</p>
                                    </div>
                                    <div className="education-details105">
                                        <span><b></b></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divider105"></div>
                    <div className=".inner105-2">
                        <div className="experience-section105">
                            <h6 className="details-title105" style={{ color: headingColor }}>
                                WORK EXPERIENCE</h6>
                            {work[0].map((works, index) => (
                                <div key={index} className="employment-history101 ms-4">
                                    <div className="exp-inner105">
                                        <p className="employment-detail105"><b>{works.jobtitle}</b>|{works.organization}|{work.city}</p>
                                        <p className="employment-duration105">{works.startYear} - {works.endYear}</p>
                                        <p className='aboutexperience105'>{works.aboutexperience}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="technical-skills-title105 mt-3">
                            <h6 className="" style={{ color: headingColor }}>
                                TECHNICAL SKILL</h6>
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                    <ul>
                                        <li>{keys.keyskills}</li>
                                    </ul>
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
                <div>
    <span>Font Size </span>
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className="bg-color-picker ms-2">
    <option value="xx-small">xx-Small</option>
    <option value="x-small">x-Small</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="xx-large">xx-Large</option>
        <option value="xx-large">x-Large</option>
        <option value="large">Large</option>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
    </select>
</div>
            </div>
        </div>
    )
}
export default Preview105;