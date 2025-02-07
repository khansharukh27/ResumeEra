import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview13.css'
import GoogleAd from '../adFolder/GoogleAd';
// import { color } from 'html2canvas/dist/types/css/types/color';

const Preview13 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings

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
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div>
                <GoogleAd/>
            </div>
        <div className=' main13'>
            <div className='me-4 resume-13' 
            style={{ color:fontColor,backgroundColor: bgColor, fontFamily: fontStyle, width: '100%' }} id='Alish_mirza1'>
                <div className='d-flex justify-content-around resume-namediv13'>
                    <div className='text-center name-div13'>
                        <h3 className="pt-5" style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading, lineHeight: '.5', whiteSpace: 'nowrap', fontWeight: '800', textAlign: 'end' }}>{personalInfo.firstName} {personalInfo.lastName} </h3>
                        <p className='' style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>
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
                        <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}} className=' '><i class="bi bi-person-lines-fill me-2"></i> CONTACT</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        <div className='contact-div13' style={{}}>
                            <div className='d-flex' style={{ height: "" }}>
                                <div className='me-2 mb-3 div1' style={{ backgroundColor: '', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill "></i></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{personalInfo.mobileNumber}</p></div>
                            </div>
                            <div className='d-flex '>
                                <div className='me-2 div1' style={{}}><i class="bi bi-envelope " style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}></i></div>
                                <div><p style={{wordBreak:'break-all',color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{personalInfo.email}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2 div1' style={{}}><i class="bi bi-geo-alt-fill"style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}} ></i></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2 div1' style={{}}><i class="bi bi-linkedin " style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}></i></div>
                                <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}> {sMedia[0].linkedin}</p></div>
                            </div>
                        </div>
                        <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}} className="mt-5"  > <i class="bi bi-journal-code me-2"></i>EDUCATION</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-div13">
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }}><u>{edu.type}</u> </p>
                                <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}} className='mt-5'><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        <div className='row skills-div13'>
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="col-6 d-flex justify-content-between">
                                    <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}> {keys.keyskills}</p> </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='ms-3 me-3' style={{ width: '3px', height: '800px', backgroundColor: 'grey', color: 'grey' }}></div>
                    <div className='me-3 resume-main-2-2'>
                        <div>
                        <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}><i class="bi bi-people-fill me-2"></i><b style={{ lineHeight: '.5' }}>ABOUT ME</b></h5>
                            <div className='mb-4' style={lineStyle}></div>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }}> <b>Date of birth:</b> {personalInfo.dateofbirth}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }}> <b>Marital Status:</b> {personalInfo.maritalstatus}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.5' }}> <b>Nationality:</b> {personalInfo.nationality}</p>
                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize,textAlign:'justify'}}>{personalInfo.object}</p>

                        </div>
                       
                        <div>
                            <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}} className='mt-4'><i class="bi bi-person-workspace me-2"></i> JOB EXPERIENCE</h5>
                            <div className='mb-4' style={lineStyle}></div>
                            {work[0].map((works, index) => (
                                <div key={index} className=' mt-2'>
                                    <div >
                                        <div ><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, whiteSpace: 'nowrap', lineHeight: '.5' }}><b>{works.jobtitle}</b></p></div>
                                        <div className='d-flex justify-content-between'>
                                            <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.8' }} >{works.organization} </p></div>
                                            <div><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize, lineHeight: '.8' }}>{works.startYear}-{works.endYear}</p></div>
                                        </div>

                                    </div>
                                    <div className='mt-3'><p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{works.aboutexperience}</p></div>
                                </div>
                            ))}

                        </div>

                        <div className='d-flex justify-content-between mt-5'>
                            <div className="">
                                <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}}><i class="bi bi-translate me-2"></i>LANGUAGE</h5>
                                <div className='mb-4' style={lineStyle}></div>

                                <div className='row language13'>
                                    {LLanguage[0].map((keys, index) => (
                                        <div key={index} className=" language-inner13">
                                            <p style={{color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>  {keys.language}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='row hobbies-div13'>
                                <h5 style={{color:headingColor,fontFamily:fontStyle,fontSize:fontSizeheading}} className=' ' > <i class="bi bi-controller me-2"></i>HOBBIES</h5>
                                <div className='mb-4' style={lineStyle}></div>
                                <div className='row'>
                                {Hobbies[0].map((keys, index) => (
                                    <div key={index} className=" hobbies-inner13">
                                        
                                            <p className='d-sm-flex' style={{whiteSpace:'nowrap',color:fontColor,fontFamily:fontStyle,fontSize:fontSize}}>{keys.hobbies}</p> 
                                       
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
            <div className="resume-download-section0">
                <div style={{width:'100%'}}>
                    <GoogleAd/>
                </div>
                <div className='downloadbuttondiv'>
                    <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
                </div>
                {/* Color Picker for Background Color */}
                <div className='d-flex border fontfamilydiv' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
                <div className='colordiv'>
                    <div>
                        <span>Font Color </span>
                        <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
                    </div>
                    <div>
                        <span>Heading Color </span>
                        <input type="color" value={headingColor} onChange={(e) => setHeadingColor(e.target.value)} className="bg-color-picker ms-2" />
                    </div>
                </div>
                <div className='colordiv'>
                        <div>
                            <span style={{ color: headingColor }}><i class="bi bi-patch-plus"></i>HS  </span>
                            <input type="number" value={fontSizeheading} onChange={(e) => setFontSizeheading(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                        <div>
                            <span style={{ color: fontColor }}><i class="bi bi-patch-plus"></i>FS  </span>
                            <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="bg-color-picker ms-2" />
                        </div>
                    </div>
                <div style={{width:'100%'}}>
                    <GoogleAd/>
                </div>
            </div>
        </div>
        <GoogleAd/>
        </div>
    )
}
export default Preview13;