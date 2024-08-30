import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview13.css'
// import { color } from 'html2canvas/dist/types/css/types/color';

const Preview13 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style

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
        height: '3px',
        width: '50%',
        // color:'grey',
        background: 'linear-gradient(to right, black 25%, white 75%)',
        margin: ' ',
        borderRadius: '5px',
        border: '1px solid grey'
    };
    return (
        <div className=' main13'>
            <div className='me-4 resume-13' style={{ backgroundColor: bgColor, fontFamily: fontStyle, width: '100%' }} id='Alisha_mirza'>
                <div className='d-flex justify-content-around resume-namediv13'>
                    <div className='text-center name-div13'>
                        <h1 className="pt-5" style={{ lineHeight: '.5', whiteSpace: 'nowrap', fontWeight: '800', textAlign: 'end' }}>{personalInfo.firstName} {personalInfo.lastName} </h1>
                        <p className=''>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <div className='image-div13'>
                        <img src={personalInfo.image} className=" m-2 image13" alt="Selected" style={{}} />
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between resume-main-2 '>
                    <div className='ms-3 resume-main-2-1'>
                        <h5 className=' '><i class="bi bi-person-lines-fill me-2"></i> CONTACT</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        <div className='contact-div13'>
                            <div className='d-flex' style={{ height: "" }}>
                                <div className='me-2 mb-3 div1' style={{ backgroundColor: '', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill "></i></div>
                                <div><p>{personalInfo.mobileNumber}</p></div>
                            </div>
                            <div className='d-flex '>
                                <div className='me-2 div1' style={{}}><i class="bi bi-envelope "></i></div>
                                <div><p>{personalInfo.email}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2 div1' style={{}}><i class="bi bi-geo-alt-fill" ></i></div>
                                <div><p>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2 div1' style={{}}><i class="bi bi-linkedin "></i></div>
                                <div><p> {sMedia[0].linkedin}</p></div>
                            </div>
                        </div>
                        <h5 className="mt-5"  > <i class="bi bi-journal-code me-2"></i>EDUCATION</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-div13">
                                <p style={{ lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                <p style={{ lineHeight: '.5' }}><u>{edu.type}</u> </p>
                                <p style={{ lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5 className='mt-5'><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        <div className='row skills-div13'>
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="col-6 d-flex justify-content-between">
                                    <div>  {keys.keyskills}</div>
                                </div>

                            ))}
                        </div>

                    </div>
                    <div className='ms-3 me-3' style={{ width: '3px', height: '800px', backgroundColor: 'grey', color: 'grey' }}></div>
                    <div className='me-3 resume-main-2-2'>
                        <h5><i class="bi bi-people-fill me-2"></i><b style={{ lineHeight: '.5' }}>ABOUT ME</b>
                            <div className='mb-4' style={lineStyle}></div>
                            <p style={{ lineHeight: '.5' }}> <b>Date of birth:</b> {personalInfo.dateofbirth}</p>
                            <p style={{ lineHeight: '.5' }}> <b>Marital Status:</b> {personalInfo.maritalstatus}</p>
                            <p style={{ lineHeight: '.5' }}> <b>Nationality:</b> {personalInfo.nationality}</p>
                            <p style={{textAlign:'justify'}}>{personalInfo.object}</p>

                        </h5>
                        <div>
                            <h5 className='mt-4'><i class="bi bi-person-workspace me-2"></i> JOB EXPERIENCE</h5>
                            <div className='mb-4' style={lineStyle}></div>
                            {work[0].map((works, index) => (
                                <div key={index} className=' mt-2'>
                                    <div >
                                        <div ><p style={{ whiteSpace: 'nowrap', lineHeight: '.5' }}><b>{works.jobtitle}</b></p></div>
                                        <div className='d-flex justify-content-between'>
                                            <div><p style={{ lineHeight: '.5' }} >{works.organization} </p></div>
                                            <div><p style={{ lineHeight: '.5' }}>{works.startYear}-{works.endYear}</p></div>
                                        </div>

                                    </div>
                                    <div className='mt-3'>{works.aboutexperience}</div>
                                </div>
                            ))}

                        </div>

                        <div className='d-flex justify-content-between mt-5'>
                            <div className="">
                                <h5><i class="bi bi-translate me-2"></i>LANGUAGE</h5>
                                <div className='mb-4' style={lineStyle}></div>

                                <div className='row language13'>
                                    {LLanguage[0].map((keys, index) => (
                                        <div key={index} className=" language-inner13">
                                            <p>  {keys.language}</p>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='row hobbies-div13'>
                                <h5 className=' ' > <i class="bi bi-controller me-2"></i>HOBBIES</h5>
                                <div className='mb-4' style={lineStyle}></div>
                                <div className='row'>
                                {Hobbies[0].map((keys, index) => (
                                    <div key={index} className=" hobbies-inner13">
                                        
                                            <p className='d-sm-flex' style={{whiteSpace:'nowrap'}}>{keys.hobbies}</p> 
                                       
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
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
            </div>
        </div>
    )
}
export default Preview13;