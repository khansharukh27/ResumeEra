
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview6.css'
const Preview6 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')


    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer?.personalInfo?.[0] || null);
    const education = useSelector((state) => state.reducer?.education?.[0] ? [state.reducer.education[0]] : []);
    const LLanguage = useSelector((state) => state.reducer?.addLanguage?.[0] ? [state.reducer.addLanguage[0]] : []);
    const Hobbies = useSelector((state) => state.reducer?.addHobies?.[0] ? [state.reducer.addHobies[0]] : []);
    const keyskills = useSelector((state) => state.reducer?.keySkills?.[0] ? [state.reducer.keySkills[0]] : []);
    const work = useSelector((state) => state.reducer?.workExperience?.[0] ? [state.reducer.workExperience[0]] : []);
    const sMedia = useSelector((state) => state.reducer?.socialMediaLink?.[0] ? [state.reducer.socialMediaLink[0]] : []);

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
        <div className='preview6-main'>
            <div className="resume-preview6" style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }} id="Alisha_mirza">

                <div className='name-div'>
                    <h5 style={{ color: headingColor }} className="pt-5 ms-5"><b>{personalInfo.firstName} {personalInfo.lastName}</b></h5>
                    <p className='ms-5 '>
                        {work[0][0].jobtitle}
                    </p>
                </div>
                <div className="information-section6 ms-5" style={{ color: 'grey' }}>
                    <div className='d-flex inner-information6' >
                        <div className="mt-2 me-3"><b> <i className="bi bi-telephone-forward-fill"></i>{personalInfo.mobileNumber}</b> </div>
                        <div className="mt-2 me-3"><b><i className="bi bi-geo-alt-fill "></i> {personalInfo.city} {personalInfo.state} </b></div>

                    </div>
                    <div className='d-flex justify-content-between inner-information6'>
                        <div className=" mt-2 me-3" style={{ whiteSpace: 'nowrap' }}> <b><i className="bi bi-envelope-at"></i>{personalInfo.email}</b></div>
                        <div className="mt-2 me-3">
                            <b>
                                {sMedia?.[0]?.linkedin && (
                                    <>
                                        <i className="bi bi-linkedin" /> {sMedia[0].linkedin}
                                    </>
                                )}
                            </b>
                        </div>
                    </div>
                </div>
                <div className="job-experience6 mt-4 ms-5">
                    <h5 style={{ color: headingColor }} className='job-heading6'> JOB EXPERIENCE</h5>
                    <hr />
                    {work[0].map((works, index) => (
                        <div key={index} >
                            <ul>
                                <li>
                                    <p>{works.jobtitle}</p>  <p>{works.startYear}-{works.endYear}</p>
                                    <p style={{}}>{works.organization} </p>
                                    <p>{works.aboutexperience}</p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="ms-5 education-section6" style={{}}>
                    <h5 style={{ color: headingColor }} className="mt-5 education-heading6" >EDUCATION</h5>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="" >
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                </div>
                <div className=" ms-5 mt-4 hobbies-section6">
                    <h5 style={{ color: headingColor }} className='hobbies-heading6'>HOBBIES</h5>
                    <hr />
                    <div className='row'>
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index} className='col-4'>
                                <div className='d-flex justify-content-between'>
                                    <div><p> {hobb.hobbies}</p><hr style={{ height: '5px' }} /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ms-5 mt-4 skills-section6">

                    <h5 style={{ color: headingColor }} className='skills-heading6'>SKILLS</h5>
                    <hr />
                    <div className="row">
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="col-4">
                                <div className="d-flex justify-content-between">
                                    <div><p>{keys.keyskills}</p><hr style={{ height: '5px' }} /></div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="language-section6 mt-4 ms-5">
                    <h5 style={{ color: headingColor }} className='language-heading6'><i class="bi bi-translate me-2 " />LANGUAGE</h5>
                    <hr />
                    <div className='row'>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index} className='col-4'>
                                <div className="d-flex justify-content-between">
                                    <div><p>{lan.language}</p><hr style={{ height: '5px' }} /></div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='about-section6 mt-5 ms-5'>
                    <h5 style={{ color: headingColor }} className='about-heading6'>ABOUT ME</h5>
                    <hr />
                    <div className='about-inner-div6 '>
                        <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                        <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                        <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
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


    )
}
export default Preview6;