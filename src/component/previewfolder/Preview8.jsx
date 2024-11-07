import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview8.css'
const Preview8 = () => {
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
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink])
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
    
    return (
        <div className="preview-main8">
            <div className="resume-preview8 " style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alish_mirza1">
                <div className='main1-8' style={{ backgroundColor: '#c9bca4' }}>
                    <img src={personalInfo.image} className="mb-3 " alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    <h5 style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }}> CONTACT</h5>

                    <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                    <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                    <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    <div className="mt-2 me-3">
                        <b>
                            {sMedia?.[0]?.linkedin && (
                                <>
                                    <i className="bi bi-linkedin" /> {sMedia[0].linkedin}
                                </>
                            )}
                        </b>
                    </div>
                    <h5 className="mt-5 " style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }} >EDUCATION</h5>
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                    <h5 className='mt-5' style={{ backgroundColor: 'balck', color: headingColor, padding: '3px' }}>SKILLS</h5>
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="">
                            <ul>
                                <li>
                                    {keys.keyskills}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='.main2-8'>
                    <div className=' name-div8 '>
                        <h1 className="pt-5" style={{ color: headingColor }}>{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <p className='mb-5'>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <div>
                        <h5 style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }}> JOB EXPERIENCE</h5>
                        {work[0].map((works, index) => (
                            <div key={index} className='jobinner-div8'>
                                <p><b>{works.jobtitle}</b></p>
                                <p className='year8'>{works.startYear}-{works.endYear}</p>
                                <p className='year8'>{works.organization} </p>
                            </div>
                        ))}
                        <div><h5 style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }}>LANGUAGE</h5>
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
                        <h5 className='mt-5' style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }}>ABOUT ME</h5>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                        </div>
                        <div><h5 style={{ backgroundColor: 'black', color: headingColor, padding: '3px' }}>HOBBIES</h5></div>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p>{hobb.hobbies}</p>
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
export default Preview8;