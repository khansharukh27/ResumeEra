import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview14.css'
import imagepng from './imagepng.png'
const Preview14 = () => {
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
    // const sMedia = useSelector((state) => [state.reducer.socialMediaLink[0]])
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza14');

        try {
            const scale = 5; // Increase the scale for better resolution
            console.log('Rendering element with id:', element.id);

            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true,
                logging: true,
                backgroundColor: null,
            });

            console.log('Canvas rendered:', canvas);

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
            console.log('Image data URL:', imgData);

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

            const fileName = `${inputFields || 'resume'}.pdf`;
            console.log('Saving PDF with filename:', fileName);
            pdf.save(fileName);

            const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
            savedResumes.push(imgData);
            localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

            alert('Your Resume is downloaded');
            navigate('/myresume');

        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('An error occurred while downloading your resume.');
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
        <div className=' d-sm-flex justify-content-between main14'>
            <div className='' id='Alisha_mirza14' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className='d-flex justify-content-between faltu14'>
                    <div className='main1-14 '>
                        <div className='d-flex images14 mt-2 ms-2' style={{}}>
                            <img src={personalInfo.image} className=" " alt="Selected" style={{}} />
                        </div>
                        <div className=' mt-2 ms-1 local'>
                            <div>
                            <img className='circle-div' src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                            <div className='localinner'></div>
                            
                            </div>
                            <div className=''>
                                <h3 className="" style={{ lineHeight: '.5', whiteSpace: 'nowrap', fontWeight: '500' }}>{personalInfo.firstName}  </h3>
                                <h3 style={{ fontWeight: '800' }}>{personalInfo.lastName}</h3>
                                <p className=''>
                                    {work[0][0].jobtitle}
                                </p>
                            </div>

                        </div>
                        <div className=' local ms-1'>
                            <div>
                                <img className='circle-div' src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                                <div className='localinner'></div>

                            </div>
                            <div className='contact-div14'>
                                <h5 style={{ color: headingColor }} className='heading14'><i class="bi bi-person-lines-fill me-1"></i> CONTACT</h5>
                                <div>
                                    <div className='d-flex' style={{ height: "" }}>
                                        <div className='me-1 ' style={{ backgroundColor: '', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill "></i></div>
                                        <div><p>{personalInfo.mobileNumber}</p></div>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='me-1' style={{}}><i class="bi bi-envelope"></i></div>
                                        <div style={{width:'inherit',wordBreak:'break-word'}}><p style={{ marginRight: '' }}>{personalInfo.email}</p></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='me-1' style={{}}><i class="bi bi-geo-alt-fill " ></i></div>
                                        <div><p> {personalInfo.city} {personalInfo.state}</p></div>
                                    </div>
                                    {/* <div className='d-flex'> */}
                                    {/* <div className='me-1' style={{}}><i class="bi bi-linkedin "></i></div> */}
                                    {/* <div><p> {sMedia[0].linkedin}</p></div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className=' local ms-1'>
                            <div>
                            <img className='circle-div' src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                            <div className='localinner'></div>
                            </div>
                            
                            <div className="">
                                <h5 style={{ color: headingColor }} className=' heading14'><i class="bi bi-translate me-1"></i>LANGUAGE</h5>
                                {LLanguage[0].map((keys, index) => (
                                    <div key={index} className=" d-flex  justify-content-between">
                                        <div>  <p>{keys.language}</p></div>
                                        <div className="star-rating ms-3 w-50">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                                                    style={{ color: i < keys.rating ? '#ffc150' : 'grey' }} // Filled stars are gold, others are gray
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=' local ms-1'>
                            <div>
                            <img className='circle-div' src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                            <div className='localinner'></div>
                            
                            </div>
                            <div className=''>
                                <h5 style={{ color: headingColor }} className=' heading14' > <i class="bi bi-controller me-1"></i>HOBBIES</h5>
                                {Hobbies[0].map((keys, index) => (
                                    <div key={index} className=" d-flex justify-content-between">
                                        <div ><p>{keys.hobbies}</p> </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='devider14' style={{ width: '5px', height: '100%', margin: '5px' }}></div>
                    <div className='main2-14'>
                        <div className='about-div14'>
                            <h5 style={{ color: headingColor }} className='mt-5 heading14' >ABOUT ME</h5>
                            <div className='' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div className=' row'>
                                <div className=' d-sm-flex justify-content-between'>
                                    <div className=''><i>Date of Birth:-</i> <p >{personalInfo.dateofbirth}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                    <div className=''><i>Marital Status:-</i> <p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                    <div className=' '><i>Nationality:-</i> <p>{personalInfo.nationality}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2 pb-2'>
                            <h5 style={{ color: headingColor }} className="mt-2 heading14"  > <i class="bi bi-journal-code me-1"></i>EDUCATION</h5>
                            {education[0].map((edu, index) => (
                                <div key={index} className="">
                                    <p style={{ lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                    <p style={{ lineHeight: '.5' }}>{edu.type}</p>
                                    <p style={{ lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h5 style={{ color: headingColor }} className=' heading14'><i class="bi bi-person-workspace me-1"></i> JOB EXPERIENCE</h5>
                            {work[0].map((works, index) => (
                                <div key={index} className='d-flex justify-content-between mt-2'>
                                    <div style={{ lineHeight: '' }}><p style={{}}><b>{works.jobtitle}</b></p>
                                        <p >{works.organization} </p></div>
                                    <div><p>{works.startYear}-{works.endYear}</p></div>
                                </div>
                            ))}
                        </div>
                        <div className="skill14">
                            <h5 style={{ color: headingColor }} className='heading14'><i class="bi bi-mortarboard-fill me-1" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                            <div className='row'>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="col-12 d-sm-flex justify-content-around">
                                        <div>  {keys.keyskills}</div>
                                        <div className="star-rating ms-3 w-50">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi bi-star${i < keys.rating ? '-fill' : '' }`}
                                                    style={{ color: i < keys.rating ? '#ffc150' : 'grey' }} // Filled stars are gold, others are gray
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
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
export default Preview14;