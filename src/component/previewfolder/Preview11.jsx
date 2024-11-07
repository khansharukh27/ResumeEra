import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview11.css'
const Preview11 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)


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
    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 75%)',
        margin: '20px auto',
        borderRadius: '5px'
    };

    return (
        <div className="main11">
            <div className="resume-container" 
            style={{ color:fontColor,fontFamily: fontStyle, backgroundColor: bgColor }} id='Alish_mirza1'>
                <div className="left-section" >
                    <div className="profile">
                        <h1 style={{color:headingColor}}>{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <p>{work[0].map((wor, index) => (
                            <div key={index}>
                                <p>{wor.jobtitle}</p>
                            </div>
                        ))}</p>
                        <img src={personalInfo.image} alt="Profile Image" className="profile-img" />
                    </div>

                    <div className="contact-info">
                        <div className="contact"><i class="bi bi-person-circle me-2 "></i><h3 style={{color:headingColor}}>CONTACT ME</h3></div>
                        
                        <p><i className="bi bi-telephone-fill"></i>{personalInfo.mobileNumber}</p>
                        <p><i className="bi bi-envelope-fill"></i> {personalInfo.email}</p>
                        <p><i className="bi bi-geo-alt-fill"></i> {personalInfo.city} {personalInfo.state}</p>
                    </div>
                    <hr />
                    <div className="education">
                    <div className="contact"><i class="bi bi-backpack me-2 "></i><h3 style={{color:headingColor}}>EDUCATION</h3></div>
                    {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p lassName='work-title10'>{edu.degree}</p>
                                <p className='work-title10'> {edu.univercity}</p>
                                <p className='work-title10'>{edu.type}</p>
                                <p className='work-title10'>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="references">
                    <div className="contact"><i class="bi bi-translate me-2 "></i><h3 style={{color:headingColor}}>LANGUAGE</h3></div>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {lan.language}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-section">
                    <div className="about-me">
                    <div className="contact"><i class="bi bi-vector-pen me-2"></i><h3 style={{color:headingColor}}>OBJECT</h3></div>
                        <p>{personalInfo.object}</p>
                    </div>
                    <hr />
                    <div className="job-experience">
                    <div className="contact"><i class="bi bi-person-workspace me-2 "></i><h3 style={{color:headingColor}}>JOB EXPERIENCE</h3></div>
                        {work[0].map((works, index) => (
                            <div key={index} className='d-flex justify-content-around mt-2 job-experience'>
                                <div>
                                    <p className='work-title10'>{works.jobtitle}</p>
                                    <p className='work-title10'>{works.startYear}-{works.endYear}</p>
                                    <p className='work-title10' style={{}}>{works.organization} </p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <hr />
                    <div className="skills">
                    <div className="contact"><i class="bi bi-gear me-2 "></i><h3 style={{color:headingColor}}>SKILLS</h3></div>
                        {keyskills[0].map((keys, index) => (

                            <div className='d-flex justify-content-around ' key={index}>
                                <div ><p className='mt-2'>{keys.keyskills}</p>
                                </div>
                                <div className='' style={lineStyle}></div>
                            </div>
                        ))}
                    </div>

                    <div className="language-hobbies">
                        <hr />
                        <div className="contact"><i class="bi bi-dice-4-fill me-2 "></i><h3 style={{color:headingColor}}>HOBBIES</h3></div>
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p lassName='work-title10'>{hobb.hobbies}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="resume-download-section0">
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
export default Preview11;