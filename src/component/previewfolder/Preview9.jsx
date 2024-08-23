import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview9.css'

const Preview9 = () => {
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
            const canvas = await html2canvas(element);
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);

            // Set the file name here
            const fileName = `${inputFields}.pdf`;

            // Save the PDF file using a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = pdf.output('bloburl');
            downloadLink.download = fileName;
            downloadLink.click();

            // Save the image data in local storage
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

    return (
        <div className=' preview9'>
            <div className="resume-preview9 " style={{ backgroundColor: bgColor, fontFamily: fontStyle }} id="Alisha_mirza">
                <div className='main-one-9' style={{ position: 'relative' }}>
                    <div className=' image-div9' style={{ position: 'absolute', left:'15px', backgroundColor: 'yellow', borderBottomLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottom: `10px solid ${bgColor}`, borderRight: `10px solid ${bgColor}`, borderLeft: `10px solid ${bgColor}` }}>
                        <img src={personalInfo.image} className=" image9" alt="Selected" style={{ }} />

                    </div>
                    <div className='contact-div9' style={{ backgroundColor: '#e4e2df', marginTop: '150px' }}>
                        <p>.</p>
                        <h5 className='mt-5 mb-4'> CONTACT_</h5>
                        <div>
                            <div className='d-flex' style={{ height: "70px" }}>
                                <div className='me-2 mb-3 ' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill me-2 p-1 "></i></div>
                                <div><p>{personalInfo.mobileNumber}</p></div>
                            </div>
                            <div className='d-flex '>
                                <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-envelope me-2 p-1"></i></div>
                                <div><p>{personalInfo.email}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2' style={{ backgroundColor: 'yellow' }}><i class="bi bi-geo-alt-fill me-2 p-1" ></i></div>
                                <div><p>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-2' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-linkedin me-2 p-1"></i></div>
                                <div><p> {sMedia[0].linkedin}</p></div>
                            </div>
                        </div>
                        <h5 className="mt-5 mb-5"  >EDUCATION_</h5>
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-inner9">
                                <p>{edu.degree}</p>
                                <p ><b> {edu.univercity}</b></p>
                                <p>{edu.type}</p>
                                <p>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5 className='mt-5 mb-5' >ABOUT ME_</h5>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                        </div>

                        <h5 className='mt-5 mb-5'>OBJECT CARRIERE_</h5>
                        <p style={{textAlign:'justify'}}>{personalInfo.object}</p>
                    </div>
                </div>
                <div className='main2-9'>
                    <div className='name-div9' >
                        <div >
                            <h1 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h1>

                        </div>

                        <p className='mb-5' style={{whiteSpace:'nowrap'}}>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <hr className='m-3' style={{ backgroundColor: 'yellow', height: '5px' }} />
                    <h5 className='mt-5 mb-5'> JOB EXPERIENCE_</h5>
                    {work[0].map((works, index) => (
                        <div key={index} className='d-flex justify-content-around mt-2'>
                            <div style={{ height: '100px', width: '4px', backgroundColor: 'yellow' }}> </div>
                            <div className='work-inner-div9'>
                                <p className='jobtitle9'><b>{works.jobtitle}</b></p>
                                <p className='job-year9'>{works.startYear}-{works.endYear}</p>
                                <p className='job-organization9' >{works.organization} </p></div>
                        </div>
                    ))}

                    <div><h5 className='mt-5 mb-5'>HOBBIES_</h5></div>
                    {Hobbies[0].map((hobb, index) => (
                        <div key={index}>
                            <p className='hobbiesp9'>{hobb.hobbies}</p>
                        </div>
                    ))}
                    <div className='row'>
                        <h5 className='mt-5 mb-5' >SKILLS_</h5>
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="col-6">
                                <div className='d-flex justify-content-around'>
                                    <div ><p>{keys.keyskills}</p> <hr style={{ height: '5px', backgroundColor: 'darkgoldenrod' }} /></div>
                                </div>
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
            </div>
        </div>
    )
}
export default Preview9;