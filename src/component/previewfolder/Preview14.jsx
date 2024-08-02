import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview14.css'

const Preview14 = () => {
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

    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, darkgrey 75%, white 75%)',
        margin: '20px auto',
        borderRadius: '5px',
        border: '1px solid grey'
    };

    return (
        <div className=' d-sm-flex justify-content-between main14'>
            <div className='d-flex justify-content-between border' id='Alisha_mirza'>
                <div>
                    <div className='d-flex ms-5' style={{ backgroundColor: 'yellow', width: '180px', height: '180px', border: '10px solid white', borderRadius: '50%' }}>
                        <img src={personalInfo.image} className=" " alt="Selected" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '5px', marginTop: '5px' }} />

                    </div>

                    <div className='ms-5 mt-1 local'>
                        <div className='localinner'></div>
                        <div>
                            <h1 className="-5" style={{ lineHeight: '.5', whiteSpace: 'nowrap', fontWeight: '500' }}>{personalInfo.firstName}  </h1>
                            <h1 style={{ fontWeight: '800' }}>{personalInfo.lastName}</h1>
                            <p className=''>
                                {work[0][0].jobtitle}
                            </p>
                        </div>

                    </div>
                    <div className='ms-5 mt-5 local'>
                        <div className='localinner'></div>
                        <div>
                            <h5 className=' mb-4'><i class="bi bi-person-lines-fill me-2"></i> CONTACT</h5>
                            <div>
                                <div className='d-flex' style={{ height: "" }}>
                                    <div className='me-2 mb-3 ' style={{ backgroundColor: '', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}><i class="bi bi-telephone-fill me-2 p-1 "></i></div>
                                    <div><p>{personalInfo.mobileNumber}</p></div>
                                </div>
                                <div className='d-flex '>
                                    <div className='me-2' style={{}}><i class="bi bi-envelope me-2 p-1"></i></div>
                                    <div><p>{personalInfo.email}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{}}><i class="bi bi-geo-alt-fill me-2 p-1" ></i></div>
                                    <div><p>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p></div>
                                </div>
                                <div className='d-flex'>
                                    <div className='me-2' style={{}}><i class="bi bi-linkedin me-2 "></i></div>
                                    <div><p> {sMedia[0].linkedin}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' ms-5 local'>
                        <div className='localinner'></div>

                        <div className="row">
                            <h5 className='mt-5'><i class="bi bi-translate me-2"></i>LANGUAGE</h5>
                                {LLanguage[0].map((keys, index) => (
                                    <div key={index} className=" d-flex col-6 justify-content-between">
                                        <div>  {keys.language}</div>
                                    </div>
                                ))}
                        </div>

                    </div>
                    <div className='ms-5 local'>
                        <div className='localinner'></div>
                        <div className='row'>
                            <h5 className='mt-5 ' > <i class="bi bi-controller me-2"></i>HOBBIES</h5>
                            {Hobbies[0].map((keys, index) => (
                                <div key={index} className=" d-flex col-6 justify-content-between">   
                                        <div ><p>{keys.hobbies}</p> </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div style={{width:'3px',height:'100%',backgroundColor:'grey',marginLeft:'10px',marginRight:'10px'}}></div>
                <div>
                    <div>
                        <h5 className='mt-5' >ABOUT ME</h5>
                        <div className=' mb-4' style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        <div className=' row'>
                            <div className=' d-flex justify-content-between col-6'>
                                <div className=''><i>Date of Birth:-</i> <p >{personalInfo.dateofbirth}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                <div className='ms-4'><i>Marital Status:-</i> <p> {personalInfo.maritalstatus}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                                <div className='ms-4 '><i>Nationality:-</i> <p>{personalInfo.nationality}</p><hr style={{ height: '5px', backgroundColor: 'grey' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 pb-2'>
                        <h5 className="mt-5 mb-5"  > <i class="bi bi-journal-code me-2"></i>EDUCATION</h5>
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p style={{ lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                <p style={{ lineHeight: '.5' }}>{edu.type}</p>
                                <p style={{ lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h5 className='mt-4 mb-5'><i class="bi bi-person-workspace me-2"></i> JOB EXPERIENCE</h5>
                        {work[0].map((works, index) => (
                            <div key={index} className='d-flex justify-content-between mt-2'>
                                <div style={{ lineHeight: '.5' }}><p style={{ whiteSpace: 'nowrap' }}><b>{works.jobtitle}</b></p>
                                    <p >{works.organization} </p></div>
                                <div><p>{works.startYear}-{works.endYear}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h5><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                        <div className='row'>
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="col-6 d-flex justify-content-between">
                                    <div>  {keys.keyskills}</div>
                                    <div className='' style={lineStyle}></div>
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
export default Preview14;