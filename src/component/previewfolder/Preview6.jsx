
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview6 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

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
        <div className=' d-flex justify-content-between p-5'>
            <div id='Alisha_mirza'>
                <h1 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h1>
                <p>
                    {work[0][0].jobtitle}
                </p>
                <div className="row">
                    <div className="col-md-4 mt-2"><b> <i className="bi bi-telephone-forward-fill me-2"></i>{personalInfo.mobileNumber}</b> </div>
                    <div className="col-md-4 mt-2"> <b><i className="bi bi-envelope-at me-2"></i>{personalInfo.email}</b></div>
                    <div className="col-md-4 mt-2"> <b><i className="bi bi-linkedin me-2"></i>{sMedia[0].linkedin}</b></div>
                    <div className="col-md-4 mt-2"><b><i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</b></div>
                </div>
                <div className="mt-4">
                    <h1> Job Experience</h1>
                    <hr />
                    {work[0].map((works, index) => (
                        <div key={index}>
                            <ul>
                                <li>
                                    <p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                    <p style={{}}>{works.organization} </p>
                                </li>
                            </ul>

                        </div>
                    ))}
                </div>
                <div className="" style={{}}>

                    <h1 className="mt-5 " >Education</h1>
                    <hr />
                    {education[0].map((edu, index) => (
                        <div key={index} className="">
                            <p ><b> {edu.univercity}</b></p>
                            <p>{edu.type}</p>
                            <p>{edu.startYear} - {edu.endYear}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <h4>Hobbies</h4>
                    <hr />
                    <div className='row'>
                    {Hobbies[0].map((hobb, index) => (
                        <div key={index} className='col-4'>
                            <div className='d-flex justify-content-between'>
                                <div><p> {hobb.hobbies}</p><hr style={{height:'5px'}} /></div>
                            </div>
                            
                                   
                                
                        </div>
                    ))}
                    </div>
                </div>
                <div className="mt-4">

                    <h1>Skills</h1>
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
                <div className="mt-4">
                    <h4><i class="bi bi-translate me-2 " />language</h4>
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
                <div className='mt-5'>
                    <h1>About Me</h1>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div><b>Date of Birth:- </b><p>{personalInfo.dateofbirth}</p><hr style={{height:'5px'}}/></div>
                        <div><b>Marital Status:- </b><p> {personalInfo.maritalstatus}</p><hr style={{height:'5px'}} /></div>
                        <div><b>Nationality:- </b><p>{personalInfo.nationality}</p><hr style={{height:'5px'}}/></div>
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
export default Preview6;