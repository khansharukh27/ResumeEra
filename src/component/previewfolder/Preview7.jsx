import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview7 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
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
        <div className='d-flex justify-content-between'>
            <div className='border' id='Alisha_mirza'>
                <div className='text-center'>
                    <h1 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p>
                        {work[0][0].jobtitle}
                    </p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='text-end'>
                        <h5> CONTACT</h5>
                        <hr />
                        <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                        <h5 className="mt-5 " >EDUCATION</h5>
                        <hr />
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p ><b> {edu.univercity}</b></p>
                                <p>{edu.type}</p>
                                <p>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5 className='mt-5'>SKILLS</h5>
                        <hr />
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="">
                                {keys.keyskills}

                                
                            </div>
                        ))}
                        <div className="mt-5">
                            <div><h5>HOBBIES</h5></div>
                            <hr />
                            {Hobbies[0].map((hobb, index) => (
                                <div key={index}>
                                    <p>{hobb.hobbies}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div  className='m-5' style={{height:'800px',width:'3px' ,backgroundColor:'grey'}}></div>
                    <div>
                        <h5> JOB EXPERIENCE</h5>
                        <hr />
                        {work[0].map((works, index) => (
                            <div key={index}>
                                <p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                <p style={{}}>{works.organization} </p>
                            </div>
                        ))}

                        <div className="mt-5">
                            <div><h5>LANGUAGE</h5></div>
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
                        <h5 className='mt-5'>ABOUT ME</h5>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="d-flex m-sm-3 mt-3" style={{}}>
                <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
            </div>
        </div>
    )
}
export default Preview7;