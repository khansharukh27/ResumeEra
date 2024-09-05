import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Preview101 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#rrggbb')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward[0]]);
    console.log('honorand award:-', Honor)

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza1');
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
        <div>
            <div>
                <div>
                    <h1 className="" style={{ color: headingColor }}>{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p>{personalInfo.city} {personalInfo.state} <b>.</b> {personalInfo.email} <b>.</b> {personalInfo.mobileNumber}</p>
                </div>
                <div>
                    <h1>Profile Summary</h1>
                    <hr />
                    <p>
                        {personalInfo.object}
                    </p>
                </div>
                <div>
                    <h1 className="details-title101" style={{ color: headingColor }}>Education</h1>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="education-item101">
                            <div>
                            <span>{edu.degree}</span>
                            <span className="education-duration101">{edu.startYear} - {edu.endYear}</span>
                            </div>
                            <div>
                            <span><b>{edu.univercity}</b></span>
                            <span className="education-detail101">{edu.type} from {edu.univercity}</span>
                            </div>
                            </div>
                    ))}
                </div>
                <div>
                    <h1 className="details-title101" style={{ color: headingColor }}>Profetional Experience</h1>
                    <hr />
                    {work[0].map((works, index) => (
                        <div key={index} className="employment-history101">
                            <span className="employment-detail101" style={{ fontWeight: '500' }}>{works.organization} {works.jobtitle}</span>
                            <br />
                            <span className="employment-duration101">{works.startYear} - {works.endYear}</span><br />
                            <span className='aboutexperience101'>{works.aboutexperience}</span>
                        </div>
                    ))}
                </div>
                <div className="skill-section101">
                    <h1 style={{ color: headingColor }}>Skills</h1>
                    <hr />
                    {keyskills[0].map((keys, index) => (
                        <div key={index}>
                            {keys.keyskills}
                            <hr style={{ height: '2px' }} />
                        </div>
                    ))}
                </div>
                <div className="hobbies-section">
                    <h1 style={{ color: headingColor }}>Honor</h1>
                    <hr />
                    {Honor[0].map((hobb, index) => (
                        <div key={index}>
                            <div>
                                <p><b>{hobb.title}</b></p>
                                <p><b>{hobb.year}</b></p>
                            </div>
                            <div>
                                <p><b>{hobb.organization}</b></p>
                                <p><b>{hobb.description}</b></p>
                            </div>
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
    )
}
export default Preview101;