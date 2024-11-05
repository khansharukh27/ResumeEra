import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview9.css'
// import { color } from 'html2canvas/dist/types/css/types/color';

const Preview9 = () => {
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
        <div className=' preview9'>
            <div className="resume-preview9 " style={{ color:fontColor,backgroundColor: bgColor, fontFamily: fontStyle }} id="Alisha_mirza">
                <div className='main-one-9' style={{ position: 'relative' }}>
                    <div className='image-div9' style={{ position: 'absolute', left:'15px', backgroundColor: 'yellow', borderBottomLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottom: `10px solid ${bgColor}`, borderRight: `10px solid ${bgColor}`, borderLeft: `10px solid ${bgColor}` }}>
                        <img src={personalInfo.image} className="image9" alt="Selected" style={{ }} />
                    </div>
                    <div className='contact-div9' style={{ color:fontColor,backgroundColor: '#e4e2df', marginTop: '150px' }}>
                        <p>.</p>
                        <p className='heading9' style={{color:headingColor}}> CONTACT_</p>
                        <div style={{color:fontColor}} >
                            <div className='d-flex' style={{ height: "70px",color:fontColor }}>
                                <div className='me-2 mb-3 ' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill me-2 p-1 "></i></div>
                                <p style={{color:fontColor}}>{personalInfo.mobileNumber}</p>
                            </div>
                            <div className='d-flex '>
                                <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-envelope me-2 p-1"></i></div>
                                <div><p style={{color:fontColor}}>{personalInfo.email}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-geo-alt-fill me-2 p-1" ></i></div>
                                <div><p style={{color:fontColor}}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-linkedin me-2 p-1"></i></div>
                                <div><p style={{color:fontColor}}> {sMedia?.[0]?.linkedin || ''}</p></div>
                            </div>
                        </div>
                        <p className="heading9" style={{color:headingColor}}  >EDUCATION_</p>
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-inner9">
                                <p style={{color:fontColor}}>{edu.degree}</p>
                                <p style={{color:fontColor}}><b> {edu.univercity}</b></p>
                                <p style={{color:fontColor}}>{edu.type}</p>
                                <p style={{color:fontColor}}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <p className='heading9' style={{color:headingColor}} >ABOUT ME_</p>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div><b>Date of Birth:- </b><p style={{color:fontColor}}>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Marital Status:- </b><p style={{color:fontColor}}> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Nationality:- </b><p style={{color:fontColor}}>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                        </div>

                        <p className='heading9' style={{color:headingColor}}>OBJECT CARRIERE_</p>
                        <p style={{textAlign:'justify',color:fontColor}}>{personalInfo.object}</p>
                    </div>
                </div>
                <div className='main2-9'>
                    <div className='name-div9' > 
                            <h1 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <p className='mb-5 job-titlen' style={{whiteSpace:'',color:fontColor}}>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <hr className='m-3' style={{ backgroundColor: 'yellow', height: '5px' }} />
                    <p className='heading9' style={{color:headingColor}}> JOB EXPERIENCE_</p>
                    {work[0].map((works, index) => (
                        <div key={index} className='d-flex justify-content-around mt-2 work-div9'>
                            <div style={{ height: '100px', width: '3px', backgroundColor: 'yellow'}}> </div>
                            <div className='work-inner-div9' >
                                <p className='jobtitle9' style={{color:fontColor}}>{works.jobtitle}</p>
                                <p className='job-year9' style={{color:fontColor}}>{works.startYear}-{works.endYear}</p>
                                <p className='job-organization9' style={{color:fontColor}} >{works.organization} </p></div>
                        </div>
                    ))}

                    <div><p className='heading9' style={{color:headingColor}}>HOBBIES_</p></div>
                    {Hobbies[0].map((hobb, index) => (
                        <div key={index}>
                            <p className='hobbiesp9' style={{color:fontColor}}>{hobb.hobbies}</p>
                        </div>
                    ))}
                    <div className='row'>
                        <p className='heading9' style={{color:headingColor}} >SKILLS_</p>
                        {keyskills[0].map((keys, index) => (
                            
                                <div className='skills9'>
                                    <div ><p style={{color:fontColor}}>{keys.keyskills}</p> <hr style={{ height: '5px', backgroundColor: 'darkgoldenrod' }} /></div>
                               
                            </div>
                        ))}
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
export default Preview9;