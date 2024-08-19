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
            const canvas = await html2canvas(element);
            const pdf = new jsPDF('span', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);

            const fileName = `${inputFields}.pdf`;

            const downloadLink = document.createElement('a');
            downloadLink.href = pdf.output('bloburl');
            downloadLink.download = fileName;
            downloadLink.click();

            const imageDataUrl = canvas.toDataURL('image/png');
            const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
            savedResumes.push(imageDataUrl);
            localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

            alert('Your Resume is downloaded');
            navigate('/myresume');
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };
    const lines = Array.from({ length: 15 }, (_, index) => (
        <p key={index} style={{}}><hr /></p>
    ));

    return (
        <div className="preview-container4 d-sm-flex justify-content-between">
            <div className="resume-preview4 mb w-100" style={{ backgroundColor: bgColor, fontStyle: fontStyle }} id="Alisha_mirza">
                <div>
                <div className="resume-header4" style={{ width: '100%', position: 'relative' }}>
                    <div className="header-shapes4 d-flex justify-content-between " style={{ width: '100%' }}>
                        <div className="shape-left4" style={{ backgroundColor: '#100129', width: '100px', height: '100px' }}></div>
                        <div className="shape-right4" style={{}}></div>
                    </div>

                    <div className="personal-info mt-5" style={{ position: 'absolute', top: '20px', left: '20px' }}>
                        <img src={personalInfo.image} className="personal-image" alt="Selected" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid white' }} />
                        <h1 className="first-name" style={{ position: 'absolute', top: '20px', left: '150px', stroke: 'HighlightText' }}>{personalInfo.firstName}</h1>
                        <h1 className="last-name" style={{ position: 'absolute', top: '50px', left: '250px' }}>{personalInfo.lastName}</h1>
                        <p className="job-title" style={{ position: 'absolute', top: '90px', left: '150px' }}>
                            {work[0].map((i, index) => (
                                <div key={index} style={{}}>
                                    {i.jobtitle}
                                </div>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="resume-body d-flex mt-3 justify-content-between w-100">
                    <div className="left-column ms-2 me-2 w-50" style={{ marginTop: '110px' }}>
                        <h4 className="section-title about-title w-100 text-center">About</h4>
                        <div className="about-content ms-3">
                            <p className="objective ms-2">{personalInfo.object}</p>
                            <p className="contact-info"><i className="bi bi-telephone-forward-fill me-2" style={{ fontSize: '1.5rem' }} />{personalInfo.mobileNumber}</p>
                            <p className="email" style={{ wordWrap: 'break-word' }}><i className="bi bi-envelope-at-fill" style={{ fontSize: '1.5rem' }}></i>{personalInfo.email}</p>
                            <p className="address"><i className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem' }}></i>{personalInfo.state} {personalInfo.city} {personalInfo.postalCode}</p>
                        </div>

                        <h4 className="section-title language-title mt-3 text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Language</h4>
                        <div className="language-content">
                            {LLanguage[0].map((lan, index) => (
                                <ul key={index}>
                                    <li>{lan.language}</li>
                                </ul>
                            ))}
                        </div>

                        <h4 className="section-title skills-title mt-3  text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Skills</h4>
                        <div className="skills-content ms-5">
                            {keyskills[0].map((skill, index) => (
                                <ul key={index}>
                                    <li>{skill.keyskills}</li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="right-column w-50" style={{ marginTop: '70px' }}>
                        <h4 className="section-title experience-title mt-3 text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Experience</h4>
                        <div className="experience-content">
                            {work[0].map((i, index) => (
                                <div key={index}>
                                    <p><b>{i.jobtitle}</b></p>
                                    <p><b>{i.organization}</b></p>
                                    <p><b>{i.startYear}-{i.endYear}</b></p>
                                </div>
                            ))}
                        </div>

                        <h4 className="section-title education-title mt-3 text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Education</h4>
                        <div className="education-content">
                            {education[0].map((edu, index) => (
                                <div key={index}>
                                    <p><b>{edu.univercity}</b></p>
                                    <p>{edu.type}</p>
                                    <p>{edu.startYear} - {edu.endYear}</p>
                                </div>
                            ))}
                        </div>

                        <h4 className="section-title hobbies-title mt-3 text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Hobbies</h4>
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
            </div>
        </div>
    )
}

export default Preview4;
