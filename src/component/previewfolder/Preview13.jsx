import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview13.css'

const Preview13 = () => {
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
        height: '3px',
        width: '50%',
        background: 'linear-gradient(to right, black 25%, white 75%)',
        margin: ' ',
        borderRadius: '5px',
        border: '1px solid grey'
    };
    return (
        <div className='d-sm-flex justify-content-between main13'>
            <div id='Alisha_mirza' className='border'>
                <div className='d-flex justify-content-between'>
                    <div className='text-center'>
                        <h1 className="pt-5" style={{ lineHeight: '.5', whiteSpace: 'nowrap', fontWeight: '800', textAlign: 'end' }}>{personalInfo.firstName} {personalInfo.lastName} </h1>
                        <p className=''>
                            {work[0][0].jobtitle}
                        </p>
                    </div>
                    <div>
                        <img src={personalInfo.image} className=" m-2" alt="Selected" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '5px', marginTop: '5px' }} />

                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='ms-3'>
                        <h5 className='mt-5 '><i class="bi bi-person-lines-fill me-2"></i> CONTACT</h5>
                        <div className='mb-4' style={lineStyle}></div>
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
                        <h5 className="mt-5"  > <i class="bi bi-journal-code me-2"></i>EDUCATION</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p style={{ lineHeight: '.5' }}><b> {edu.univercity}</b></p>
                                <p style={{ lineHeight: '.5' }}><u>{edu.type}</u> </p>
                                <p style={{ lineHeight: '.5' }} className=''>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5 className='mt-5'><i class="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i>SKILLS</h5>
                        <div className='mb-4' style={lineStyle}></div>
                        <div className='row'>
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="col-6 d-flex justify-content-between">
                                    <div>  {keys.keyskills}</div>
                                </div>

                            ))}
                        </div>

                    </div>
                    <div className='ms-3 me-3' style={{ width: '3px', height: '800px', backgroundColor: 'grey', color: 'grey' }}></div>
                    <div className='me-3'>
                                <div><i class="bi bi-people-fill me-2"></i><b style={{lineHeight:'.5'}}>ABOUT ME</b>
                                <div className='mb-4' style={lineStyle}></div>
                                <p style={{lineHeight:'.5'}}> <b>Date of birth:</b> {personalInfo.dateofbirth}</p>
                                <p style={{lineHeight:'.5'}}> <b>Marital Status:</b> {personalInfo.maritalstatus}</p>
                                <p style={{lineHeight:'.5'}}> <b>Nationality:</b> {personalInfo.nationality}</p>
                                <p mt-3>{personalInfo.object}</p>
                                
                                </div>
                        <div>
                            <h5 className='mt-4'><i class="bi bi-person-workspace me-2"></i> JOB EXPERIENCE</h5>
                            <div className='mb-4' style={lineStyle}></div>
                            {work[0].map((works, index) => (
                                <div key={index} className=' mt-2'>
                                    <div >
                                        <div ><p style={{ whiteSpace: 'nowrap',lineHeight:'.5' }}><b>{works.jobtitle}</b></p></div>
                                            <div className='d-flex justify-content-between'>
                                            <div><p style={{ lineHeight: '.5' }} >{works.organization} </p></div>
                                            <div><p style={{ lineHeight: '.5' }}>{works.startYear}-{works.endYear}</p></div>
                                            </div>

                                    </div>
                                    <div className='mt-3'>{works.aboutexperience}</div>
                                </div>
                            ))}

                        </div>

                        <div className='d-flex justify-content-between mt-5'>
                            <div className="mt-5">
                                <h5><i class="bi bi-translate me-2"></i>LANGUAGE</h5>
                                <div className='mb-4' style={lineStyle}></div>

                                <div className='row'>
                                    {LLanguage[0].map((keys, index) => (
                                        <div key={index} className=" d-flex col-6 justify-content-between">
                                            <div>  {keys.language}</div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='row ms-3'>
                                <h5 className=' ' > <i class="bi bi-controller me-2"></i>HOBBIES</h5>
                                <div className='mb-4' style={lineStyle}></div>
                                {Hobbies[0].map((keys, index) => (
                                    <div key={index} className="col-6">
                                        <div className='d-flex justify-content-around'>
                                            <div ><p>{keys.hobbies}</p> </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
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
export default Preview13;