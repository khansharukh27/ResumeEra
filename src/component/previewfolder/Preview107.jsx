import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CSS/preview107.css'
import GoogleAd from "../adFolder/GoogleAd";

const Preview107 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#rrggbb');
    const [headingColor, setHeadingColor] = useState('#rrggbb');
    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    // const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    // const Refrence = useSelector((state) => [state.reducer.addReference]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const hobbies = useSelector((state) => [state.reducer.addHobies])
    const certi = useSelector((state) => [state.reducer.certificateData[0]])
    console.log('certificate:-', certi);
    console.log('softskill:-', SoftSkill);
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
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="main107">
                <div className="preview107">
                    <div className="header107 " style={{}}>
                        <div className="imagediv107">
                            <img className="image107" src={personalInfo.image} style={{}} alt="doctore resume" />
                        </div>
                        <div className="profilediv107">
                            <h3 style={{ whiteSpace: 'none', }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <p style={{ color: 'lightgray', whiteSpace: 'none', fontWeight: 600, }}>{work[0][0].jobtitle}</p>
                            <p style={{ fontSize: '' }}>{personalInfo.object}</p>
                        </div>
                        <div className="contactdiv107">
                            <div className="d-flex">
                                <div><i className="bi bi-telephone-fill me-2 ms-2" /></div>
                                <div><p style={{}}>{personalInfo.mobileNumber}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i className="bi bi-envelope me-2 ms-2" /></div>
                                <div><p style={{ wordBreak: 'break-all' }}>{personalInfo.email}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i className="bi bi-geo-alt-fill me-2 ms-2" /></div>
                                <div><p className="mt-3" style={{ wordBreak: 'break-all' }}>{personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i class="bi bi-github ms-2 me-2" /></div>
                                <div><p>{socialMediaLink[0].github}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4" >
                        <div style={{ width: '50%' }} className="me-4">
                            <h6 className='heading107'>SOFT SKILLS <br /><hr style={{ width: 'inherite' }} /></h6>
                            <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                {SoftSkill && SoftSkill.length > 0 && SoftSkill[0].map((soft, index) => (
                                    <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                        <div><span style={{ color: "green", marginRight: "8px" }}>✔</span></div>
                                        <div>{soft.softSkill}</div>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <h6 className='heading107'>HARD SKILLS <br /><hr style={{ width: 'inherite' }} /></h6>

                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {keyskills && keyskills.length > 0 && keyskills[0].map((hard, index) => (
                                        <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                            <div><span style={{ color: "green", marginRight: "8px" }}>✔</span></div>
                                            <div>{hard.keyskills}</div>

                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div>
                                <h6 className="heading107">LANGUAGE <br /><hr style={{ width: 'inherite' }} /></h6>

                                <ul className="custom-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {languages && languages.length > 0 && languages[0].map((hard, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span>{hard.language}</span>
                                                <div
                                                    style={{
                                                        height: '8px', /* Line thickness */
                                                        width: '100px', /* Total width of the rating bar */
                                                        background: '#e0e0e0', /* Gray background for unfilled area */
                                                        position: 'relative',
                                                        marginLeft: '10px',
                                                        borderRadius: '4px', /* Optional: Rounded edges */
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            height: '100%', /* Matches parent height */
                                                            width: `${(hard.rating / 5) * 100}%`, /* Dynamic width based on rating */
                                                            background: 'green', /* Color of the filled rating */
                                                            borderRadius: '4px', /* Optional: Rounded edges */
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h6 className='heading107'>INTEREST <br /><hr style={{ width: 'inherite' }} /></h6>

                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {hobbies && hobbies.length > 0 && hobbies[0].map((hard, index) => (
                                        <li key={index} className="d-flex " style={{ marginLeft: '-50px' }}>
                                            <div><span style={{ color: "green", marginRight: "10px" }}>✔</span></div>
                                            <div>{hard.hobbies}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '50%' }} className="">
                            <div className=" ">
                                <h6 className='heading107'>EDUCATION <br /><hr style={{ width: '100%' }} /></h6>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item107">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className="employment-detail107 me-3" style={{ whiteSpace: 'none' }}>{edu.startYear}-{edu.endYear}</p>
                                            </div>
                                            <div>
                                                <p className="employment-detail107">{edu.degree}</p>
                                                <p className="employment-detail107 ">{edu.university}</p>
                                                <p>{edu.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className=" ">
                                <h6 className='heading107'>CERTIFICATION <br /><hr style={{ width: 'inherite' }} /></h6>
                                {certi.map((edu, index) => (
                                    <div key={index} className="">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className=" me-3" style={{ whiteSpace: 'none' }}>{edu.issueDate}</p>
                                            </div>
                                            <div>
                                                <p className="">{edu.organization}</p>
                                                <p className=" ">{edu.description}</p>
                                                <p>{edu.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume-download-section0">
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
                        <GoogleAd />
                    </div>

                </div>

            </div>
            <div className="w-100"><GoogleAd /></div>
        </div>
    )
}
export default Preview107;