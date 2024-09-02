
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview5.css'

const Preview5 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);

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
        <div className=' justify-content-between w-100'>
            <div className='p-1 d-sm-flex' style={{ color:fontColor,backgroundColor: bgColor, fontStyle: fontStyle }} id="Alisha_mirza">
                <div className='p-5' style={{ backgroundColor: 'grey' }}>
                    <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey' }} />
                    <h3 style={{ color: headingColor }}> Contact</h3>
                    <hr />
                    <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                    <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                    <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    <h3 style={{ color: headingColor }} className="mt-5 " >Education</h3>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                    <h3 style={{ color: headingColor }}>Skills</h3>
                    <hr />
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="text-center">
                            {keys.keyskills}

                            <hr style={{ height: '2px' }} />
                        </div>
                    ))}
                    <h3 style={{ color: headingColor }}>language</h3>
                    <hr />
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
                <div className='ms-5 ps-5 pe-5 pb-5'>
                    <h1 className="">{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p >

                        {work[0][0].jobtitle}
                    </p>
                    <p className='mt-4'>{personalInfo.object}</p>

                    <h3 style={{ color: headingColor }} className='mt-4'>Job Experience</h3>
                    <hr />
                    {work[0].map((works, index) => (
                        <div key={index}>
                            <ul>
                                <li className="work-item">
                                    <div className="line"></div>
                                    <div className="circle"></div>
                                    <div className="content">
                                        <p><b>{works.jobtitle}</b></p>
                                        <p>{works.startYear}-{works.endYear}</p>
                                        <p>{works.organization}</p>
                                    </div>
                                    <div className="circle"></div>
                                </li>
                            </ul>
                        </div>
                    ))}
                    <div><h3 style={{ color: headingColor }}>Hobbies</h3>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {hobb.hobbies}
                                    </li>
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
            
        </div>
    )
}
export default Preview5;