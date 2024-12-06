import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview104.css'
import GoogleAd from "../adFolder/GoogleAd";
// import Hobbies from "../Hobbies";
// import { socialMediaLink } from "../../Redux/action";


const Preview104 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb')
    const [headingColor, setHeadingColor] = useState('#rrggbb')
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    const Refrence = useSelector((state) => [state.reducer.addReference]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state)=>[state.reducer.addHobies[0]])
    const PNumber = useSelector((state) =>[state.reducer.templatePage])
    // console.log('hobbies:-',Hobbies)
    console.log('refrences:-', Refrence)
    console.log('honorand award:-', Honor)
    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza101');
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
        <div style={{padding:'15px'}}>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p style={{color:fontColor,fontFamily:fontStyle,}}>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div style={{ width: '100%' }}>
                        <GoogleAd/>
                    </div>
        <div className="main104">
            <div className="alisha104" id="Alisha_mirza101">
                <div className="personalinfo104">
                    <div className="imagediv104">
                        <img src={personalInfo.image} alt="hospital resume" />
                    </div>
                    <div className="namediv104">
                        <p style={{color:fontColor,fontFamily:fontStyle,}}>{personalInfo.firstName}</p>
                        <p style={{color:fontColor,fontFamily:fontStyle,}}>{personalInfo.lastName}</p>
                        <p style={{ color: 'lightgray',fontSize:'xx-small',whiteSpace:'none' }}>{work[0][0].jobtitle}</p>
                    </div>
                    <div className="contactdiv104">
                        <p style={{color:fontColor,fontFamily:fontStyle,}}>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}<i className="bi bi-geo-alt-fill me-2 ms-2" /></p>
                        <p style={{color:fontColor,fontFamily:fontStyle,}}>{personalInfo.mobileNumber}<i className="bi bi-telephone-fill me-2 ms-2" /></p>
                        <p style={{ wordBreak: "break-all" }}>{personalInfo.email}<i className="bi bi-envelope me-2 ms-2" /></p>
                        <p style={{color:fontColor,fontFamily:fontStyle,}}>{socialMediaLink.github}<i class="bi bi-github ms-2" /></p>
                    </div>
                </div>
                <div className="aboutme104" >
                    <p style={{color:fontColor,fontFamily:fontStyle,}}><b>AboutMe.</b>{personalInfo.object}</p>
                </div>
                <div>
                    <h5>SKILL</h5>
                    <hr />
                </div>
                <div className="skill-section104 mt-3">
                    <div className="inner-104-1 me-4">
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="technical-skill-item104 d-flex justify-content-between">
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{keys.keyskills}</p>
                                {/* 5-star rating system */}
                            </div>
                        ))}
                    </div>
                    <div className="row inner-104-1">
                        {languages[0].map((keys, index) => (
                            <div key={index} className="col-6 ms-2 d-flex justify-content-between me-5">
                                <div>
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{keys.language}</p>
                                </div>
                                <div className="star-rating ms-3 w-50 d-flex">
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
                    <div className="row inner-104-1">
                        {SoftSkill[0].map((soft, index) => (
                            <div className="col-4 ms-2">
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{soft.softSkill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="details-title104" style={{ color: headingColor }}>EDUCATION</h5>
                    <hr />
                </div>
                <div className="education-section104">
                    {education[0].map((edu, index) => (
                        <div key={index} className="education-item101 ms-4">
                            <div className="education-degree104">
                                <p className="education-duration104">{edu.startYear} - {edu.endYear}</p>
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{edu.univercity},{edu.city}</p>
                            </div>
                            <div className="education-details104">
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{edu.degree}</p>
                                <p style={{color:fontColor,fontFamily:fontStyle,}}>{edu.univercity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="experience-section104 mt-4">
                    <h5 className="details-title104" style={{ color: headingColor }}>
                        VOLUNTEER EXPERIENCE</h5>
                        <hr />
                    {work[0].map((works, index) => (
                        <div key={index} className="employment-history101 ms-4 d-flex justify-content-between">
                            <div className="exp-inner104">
                                <p className="employment-duration104" style={{whiteSpace:'none'}}>{works.startYear} - {works.endYear}</p>
                            </div>
                            <div>
                            <p className="employment-detail104"><b>{works.organization}</b><br />{works.jobtitle}</p>
                                <p className='aboutexperience104' style={{fontSize:'medium'}}>{works.aboutexperience}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="experience-section104">
                    <h5 className="details-title101" style={{ color: headingColor }}>
                        INTEREST</h5>
                        <hr />
                    {Hobbies.map((works, index) => (
                        <div key={index} className="employment-history104 ms-4 ">     
                             <p className="employment-duration101">{works.hobbies}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="resume-download-section0">
                    <div style={{ width: '100%' }}>
                        <GoogleAd />
                    </div>
                    <div style={{ width: '100%' }}>
                        <GoogleAd />
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
                    <div style={{ width: '100%' }}>
                        <GoogleAd/>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Preview104;