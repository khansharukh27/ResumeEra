import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview9 = () => {
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
        <div className='d-flex'>
            <div className='d-flex' id='Alisha_mirza'>
                <div className='me-5' style={{ position: 'relative' }}>
                    <div className='d-flex ms-5' style={{ position: 'absolute', backgroundColor: 'yellow', width: '150px', height: '200px', border: '10px solid white', borderBottomLeftRadius: '70px', borderBottomRightRadius: '70px', }}>
                        <img src={personalInfo.image} className=" " alt="Selected" style={{ width: '120px', height: '120px', borderRadius: '50%', marginTop: '60px', marginLeft: '5px' }} />

                    </div>
                    <div className='ps-5' style={{ backgroundColor: '#e4e2df', marginTop: '150px' }}>
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
                            <div key={index} className="">
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
                        <p>{personalInfo.object}</p>
                    </div>
                </div>
                <div>
                    <div className='  p-2 mb-3 ' >
                        <h1 className="pt-5">{personalInfo.firstName} </h1>
                        <h1>{personalInfo.lastName}</h1>
                        <p className='mb-5'>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <hr className='m-3' style={{ backgroundColor: 'yellow', height: '5px' }} />
                    <h5 className='mt-5 mb-5'> JOB EXPERIENCE_</h5>
                    {work[0].map((works, index) => (
                        <div key={index} className='d-flex justify-content-around mt-2'>
                            <div style={{ height: '100px', width: '4px', backgroundColor: 'yellow' }}> </div>
                            <div><p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                <p style={{}}>{works.organization} </p></div>

                        </div>
                    ))}

                    <div><h5 className='mt-5 mb-5'>HOBBIES_</h5></div>
                    {Hobbies[0].map((hobb, index) => (
                        <div key={index}>
                            <p>{hobb.hobbies}</p>
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
            <div className="d-flex m-sm-3 mt-3" style={{}}>
                <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
            </div>
        </div>
    )
}
export default Preview9;