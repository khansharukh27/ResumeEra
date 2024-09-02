import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview12.css'

const Preview12 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink[0]])
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

    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, darkgrey 75%, white 75%)',
        margin: '20px auto',
        borderRadius: '5px',
        border: '1px solid grey'
    };

    return (
        <div className='d-md-flex justify-content-between main12' style={{color:fontColor,backgroundColor: 'black',height: '100%'}}>
            <div className='me-4 resume-12' style={{
                position: "relative",
                borderRadius: '8px',
                backgroundColor: bgColor,
                fontFamily: fontStyle,
                width: '100%' }} id='Alisha_mirza'>
                <div className=' d-flex justify-content-between p-3 main12-1'
                    style={{ backgroundColor: "lightgray" }}>
                    <div className=' objective-div12 me-2'>
                        <h5 style={{color:headingColor,textAlign: 'start'}} className='' >
                            <i class="bi bi-file-person-fill "></i>OBJECT CARRIER</h5>
                        <p className='' style={{ textAlign: 'justify' }}>{personalInfo.object}</p>
                    </div>

                    <div className='workTitle-div12'>
                        <h3 className=" ">{personalInfo.firstName} {personalInfo.lastName} </h3>
                        <p className=''>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between job-experience12'>
                    <div className='mt-3 job-exe12 ' style={{}}>
                        <h5 style={{color:headingColor}} className='mt-4'><i class="bi bi-person-workspace me-2"></i> JOB EXPERIENCE</h5>
                        {work[0].map((works, index) => (
                            <div key={index} className='d-flex justify-content-between mt-2'>
                                <div style={{ lineHeight: '' }}>
                                    <p style={{}}>{works.jobtitle}</p>
                                    <p >{works.organization} </p></div>
                                <div><p>{works.startYear}-{works.endYear}</p></div>
                            </div>
                        ))}
                        <div className="mt-4 skill12">
                            <h5 style={{color:headingColor}}><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                            <div className='row'>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="col-6">
                                        <div>  {keys.keyskills}</div>
                                        <div className='' style={lineStyle}></div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <div className="">
                                <h5 style={{color:headingColor}}><i class="bi bi-translate me-2"></i>LANGUAGE</h5>
                                <div className='row'>
                                    {LLanguage[0].map((keys, index) => (
                                        <div key={index} className=" d-flex col-6 justify-content-between">
                                            <div>  {keys.language}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='row ms-3'>
                                <h5 style={{color:headingColor}} className=' ' > <i class="bi bi-controller me-2"></i>HOBBIES</h5>
                                {Hobbies[0].map((keys, index) => (
                                    <div key={index} className="col-6">
                                        <div className='d-flex justify-content-around'>
                                            <div ><p>{keys.hobbies}</p> </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <h5 style={{color:headingColor}} className='mt-5 about12' >ABOUT ME</h5>
                            <div className=' mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div className=' row'>
                                <div className=' d-flex justify-content-between col-6'>
                                    <div className='about-inner12'><i style={{whiteSpace:'nowrap'}}>Date of Birth:-</i>
                                        <p >{personalInfo.dateofbirth}</p>
                                        <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                    </div>
                                    <div className='ms-4 about-inner12'><i style={{whiteSpace:'nowrap'}}>Marital Status:-</i>
                                        <p> {personalInfo.maritalstatus}</p>
                                        <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                    </div>
                                    <div className='ms-4 about-inner12'><i style={{whiteSpace:'nowrap'}}>Nationality:-</i>
                                        <p>{personalInfo.nationality}</p>
                                        <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div >
                        <div className='d-flex image-profile-div12' style={{ backgroundColor: 'yellow', border: '10px solid white', }}>
                            <img src={personalInfo.image} className=" image-profile12" alt="Selected" style={{}} />
                        </div>
                        <div className=' contact-card12'
                            style={{ backgroundColor: 'black', color: 'white', borderRadius: '8px' }}>
                            <p>.</p>
                            <h5 style={{color:headingColor}} className='mt-5'><i class="bi bi-person-lines-fill"></i> CONTACT</h5>
                            <div style={{color:fontColor }}>
                                <div className='d-flex' >
                                    <div className='me-2 mb-3 ' style={{ backgroundColor: '', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill "></i></div>
                                    <div><p>{personalInfo.mobileNumber}</p></div>
                                </div>
                                <div className='d-flex '>
                                    <div className='me-2' style={{}}><i class="bi bi-envelope"></i></div>
                                    <div><p>{personalInfo.email}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{}}><i class="bi bi-geo-alt-fill" ></i></div>
                                    <div><p>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{}}><i class="bi bi-linkedin "></i></div>
                                    <div><p> {sMedia[0].linkedin}</p></div>
                                </div>
                            </div>
                            <div className='mb-2 pb-2' style={{color:fontColor }}>
                                <h5 style={{color:headingColor}} className="mt-2"  > <i class="bi bi-journal-code me-2"></i>EDUCATION</h5>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="">
                                        <p style={{ lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                        <p style={{ lineHeight: '.5' }}>{edu.type}</p>
                                        <p style={{ lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-download-section me-4">
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
export default Preview12;