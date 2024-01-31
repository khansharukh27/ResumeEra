

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview4 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);

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
        <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-between border p-3'>
                <div className='ms-3 p-3' style={{backgroundColor:'#100129',color:'white'}}>
                    <img src={personalInfo.image} className="m-3" alt="Selected" style={{ position: '', width: '150px', height: '150px', borderRadius:'50%'}} />
                    <h2 className='text-center'>Contact</h2>
                    <hr />
                    <p>PHONE</p>
                    <p> <i className="bi bi-telephone-forward-fill me-2" style={{ backgroundColor: '', fontSize: '1.5rem' }} /> {personalInfo.mobileNumber}</p>
                    <p style={{ wordWrap: 'break-word' }}><i class="bi bi-envelope-at-fill" style={{ backgroundColor: '', fontSize: '1.5rem' }}></i> {personalInfo.email} </p>
                    <p> <i class="bi bi-geo-alt-fill" style={{ backgroundColor: '', fontSize: '1.5rem' }}></i> {personalInfo.state} {personalInfo.city} {personalInfo.postalCode} </p>

                    
                    <h4 className='mt-3 text-center' style={{ color: 'white', backgroundColor: '#100129' }}>Education</h4>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p>{edu.startYear} - {edu.endYear}</p>
                            <p>{edu.type}</p>
                            <p ><b> {edu.univercity}</b></p>
                        </div>
                    ))}
                    <h4 className='mt-3 text-center' style={{ color: 'white', backgroundColor: '#100129' }}>Skills</h4>
                    <hr />
                    {keyskills[0].map((skill, index) => (
                        <div>
                            <ul>
                                <li>
                                    {skill.keyskills}
                                </li>
                            </ul>
                        </div>
                    ))}

                    <h4 className="mt-3 text-center" style={{ color: 'white', backgroundColor: '#100129' }}>Language</h4>
                        <hr />
                    {LLanguage[0].map((lan, index) => (
                        <div>
                            <ul>
                                <li>
                                    {lan.language}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='ms-4'>
                    <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p>{work[0].map((i, index) => (
                        <div key={index}>
                            <p>{i.jobtitle}</p>
                        </div>
                    ))}</p>
                    <h4>object</h4>
                    <hr />
                    <p> {personalInfo.object}</p>
                   

                    <h4 className='mt-3 text-center' style={{ color: 'white', backgroundColor: '#100129' }}>Experience</h4>
                    {work[0].map((i, index) => (
                        <div key={index}>
                            <p><b>{i.jobtitle} </b></p>
                            <p><b>{i.organization} </b></p>
                            <p><b>{i.startYear}-{i.endYear} </b></p>
                        </div>
                    ))}
                    <h4 className='mt-3 text-center' style={{color:'white',backgroundColor:'#100129'}}>Hobbies</h4>
                    <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {hobb.hobbies}
                                    </li>
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
            <div className="d-flex m-sm-3 mt-3" >
                <input type="text"  placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className=" ms-2">Download</button>
            </div>
        </div>
    )
}
export default Preview4;