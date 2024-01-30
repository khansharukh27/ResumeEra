

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

    const handleDownloadPDF = () => {
        const element = document.getElementById('Alisha_mirza');

        html2canvas(element).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
            pdf.save(`${inputFields}.pdf`);
        });

        alert('Your Resume is downloaded');
        navigate('/myresume');
    };
    return (
        <div className='d-sm-flex justify-content-between w-100'>
            <div className='p-1' id='Alisha_mirza'>
                <h4>{personalInfo.firstName} {personalInfo.lastName}</h4>
                <p className='mb-2'>
                    {work[0].map((i, index) => (
                        <div key={index}>
                            {i.jobtitle}
                        </div>
                    ))}
                </p>
                <div className='row mt-3'>
                    <div className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-between'>
                        <div className='me-3'>
                            <p><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        </div>
                        <div className='me-3'>
                            <p><i className="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        </div>
                        <div className='me-3'>
                            <p><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address}</p>
                        </div>
                    </div>
                </div>

                <p>{personalInfo.object} </p>
                <h1>Experience</h1>
                <hr />
                {work[0].map((i, index) => (
                    <div key={index}>
                        <p><b>{i.jobtitle} </b></p>
                        <p><i class="bi bi-calendar-day-fill"></i> {i.startYear}-{i.endYear}  {i.organization}</p>


                    </div>
                ))}
                <h4>Education</h4>
                <hr />
                {education[0].map((edu, index) => (
                    <div key={index} className="">
                        <p>{edu.type}</p>
                        <p> <i class="bi bi-calendar-day-fill"></i> {edu.startYear} - {edu.endYear}</p>
                        <p > {edu.univercity}</p>
                    </div>
                ))}
                <h4>Skills</h4>
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

                <h4>Hobbies</h4>
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
                <h4>Language</h4>
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
            <div className="d-flex m-sm-3 mt-3" >
                <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
            </div>
        </div>
    )
}
export default Preview5;