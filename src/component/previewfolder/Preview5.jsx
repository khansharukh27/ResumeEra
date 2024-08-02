

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview5 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    console.log('work:',work)

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
        <div className='d-sm-flex justify-content-between w-100'>
            <div className='p-1 d-flex' id='Alisha_mirza'>
                <div className='p-5' style={{ backgroundColor: 'grey' }}>
                    <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey' }} />
                    <h3> Contact</h3>
                    <hr />
                    <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                    <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                    <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    <h3 className="mt-5 " >Education</h3>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                    <h3>Skills</h3>
                    <hr />
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="text-center">
                            {keys.keyskills}

                            <hr style={{ height: '2px' }} />
                        </div>
                    ))}
                    <h3>language</h3>
                    <hr />
                    {LLanguage[0].map((lan, index) => (
                        <div key={index}>
                            <ul>
                                <li>
                                    {lan.language}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='ms-5 ps-5 pe-5 pb-5'>
                    <h1 className="">{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p >
                        
                            {work[0][0].jobtitle}    
                    </p>
                    <p className='mt-4'>{personalInfo.object}</p>

                    <h3 className='mt-4'>Job Experience</h3>
                    <hr />
                    {work[0].map((works, index) => (
    <div key={index}>
        <ul>
            <li className="work-item">
                <div className="line"></div>
                <div className="circle"></div>
                <div className="content">
                    <p><b>{works.jobtitle}</b></p>
                    <p>{works.startYear}-{works.endYear}</p>
                    <p>{works.organization}</p>
                </div>
                <div className="circle"></div>
            </li>
        </ul>
    </div>
))}


                    <div><h3>Hobbies</h3>
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
            </div>
            <div className="d-flex m-sm-3 mt-3" >
                <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
            </div>
        </div>
    )
}
export default Preview5;