import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview8 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const sMedia = useSelector((state) =>[state.reducer.socialMediaLink[0]])
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
        <div className="d-flex justify-content-between m-3">
            <div className="d-flex m-3 " id='Alisha_mirza'>
                <div className='p-4 me-3' style={{backgroundColor:'#c9bca4'}}>
                    <img src={personalInfo.image} className="mb-3 " alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    <h5 style={{backgroundColor:'black',color:'white',padding:'3px'}}> CONTACT</h5>

                    <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                    <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                    <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                    <p><i class="bi bi-linkedin"></i> {sMedia[0].linkedin}</p>
                    <h5 className="mt-5 " style={{backgroundColor:'black',color:'white',padding:'3px'}} >EDUCATION</h5>
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                    <h5 className='mt-5' style={{backgroundColor:'black',color:'white',padding:'3px'}}>SKILLS</h5>
                    {keyskills[0].map((keys, index) => (
                        <div key={index} className="">
                            <ul>
                                <li>
                                {keys.keyskills}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <div className=' text-center p-2 mb-3 ' style={{backgroundColor:'black', color:'white'}}>
                        <h1 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <p className='mb-5'>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <div>
                        <h5 style={{backgroundColor:'black',color:'white',padding:'3px'}}> JOB EXPERIENCE</h5>
                        {work[0].map((works, index) => (
                            <div key={index}>
                                <p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                <p style={{}}>{works.organization} </p>
                            </div>
                        ))}
                        <div><h5 style={{backgroundColor:'black',color:'white',padding:'3px'}}>LANGUAGE</h5></div>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {lan.language}
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <h5 className='mt-5' style={{backgroundColor:'black',color:'white',padding:'3px'}}>ABOUT ME</h5>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px' }} /></div>
                            <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{ height: '5px' }} /></div>
                        </div>
                        <div><h5 style={{backgroundColor:'black',color:'white',padding:'3px'}}>HOBBIES</h5></div>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p>{hobb.hobbies}</p>
                            </div>
                        ))}

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
export default Preview8;