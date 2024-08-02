import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview11 = () => {
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

    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 75%)',
        margin: '20px auto',
        borderRadius: '5px'
    };

    return (
        <div className='d-sm-flex justify-content-between' style={{ width: '100%' }}>
            <div className='d-flex justify-content-between  ' style={{ width: '100%' }} id='Alisha_mirza'>
                <div className='m' style={{ backgroundColor: '#96d1dbcc' }}>
                    <div className="text-center " style={{}}>
                        <h1 style={{ lineHeight: '.5', fontWeight: '800', whiteSpace: 'nowrap' }} className="pt-1">{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <p style={{ lineHeight: '.5' }}>
                            {work[0][0].jobtitle}
                        </p>
                        <div className="maininner2 p-2" >
                            <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '5px solid white' }} />

                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <h5> <i class="bi bi-person-lines-fill me-2" style={{ color: '#082f36cc' }} />CONTACT</h5>
                        <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p><i class="bi bi-envelope-fill me-2"></i>{personalInfo.email}</p>
                        <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>

                    </div>
                    <div className=" text-center"  >
                        <h5 className="mt-5 " ><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>EDUCATION</h5>
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p style={{ lineHeight: '1' }}><b> {edu.univercity}</b></p>
                                <p style={{ lineHeight: '.5' }}>{edu.type}</p>
                                <p style={{ lineHeight: '.5' }}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='ms-2 me-2' style={{ width: '3px', height: '100%', backgroundColor: 'grey' }}></div>


                <div>
                    <div>
                        <h5><i class="bi bi-file-person-fill me-2" style={{ color: '#082f36cc' }}></i>ABOUT</h5>
                        <p>{personalInfo.object}</p>
                    </div>

                    <div className="jobExperience">
                        <h5> <i class="bi bi-briefcase-fill me-2" style={{ color: '#082f36cc' }}></i>JOB EXPERIENCE</h5>
                        {work[0].map((works, index) => (
                            <div key={index}>
                                <p style={{ lineHeight: '.5' }}><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                <p style={{ lineHeight: '.5' }}>{works.organization} </p>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <h5><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className=" d-flex justify-content-between">
                                <div>  {keys.keyskills}</div>
                                <div className='' style={lineStyle}></div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="">
                            <h5><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>LANGUAGE</h5>
                            {LLanguage[0].map((keys, index) => (
                                <div key={index} className=" d-flex justify-content-between">
                                    <div>  {keys.language}</div>
                                </div>
                            ))}
                        </div>
                        <div className='row'>
                            <h5 className='mt-5 mb-5' >HOBBIES</h5>
                            {Hobbies[0].map((keys, index) => (
                                <div key={index} className="col-6">
                                    <div className='d-flex justify-content-around'>
                                        <div ><p>{keys.hobbies}</p> <hr style={{ height: '5px', backgroundColor: 'darkgoldenrod' }} /></div>
                                    </div>
                                </div>
                            ))}
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
export default Preview11;