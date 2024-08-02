import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview10 = () => {
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
        background: 'linear-gradient(to right, yellow 75%, darkgrey 75%)',
        margin: '20px auto',
        borderRadius:'5px'
    };
    return (
        <div className='d-sm-flex'>
        <div className='d-flex' id="Alisha_mirza">
            <div style={{backgroundColor:'grey'}}>
                <div style={{ backgroundColor: 'black',color:'white' }}>
                    <div className='ms-5'>
                        <img src={personalInfo.image} className=" " alt="Selected" style={{ width: '120px', height: '120px',  marginTop: '60px', marginLeft: '5px',backgroundColor:'black' }} />
                    </div>
                    <div className='ms-5' style={{}} >
                        <i className='mb-5 p-2' style={{backgroundColor:'yellow',color:'black' ,borderRadius:'5px'}}>
                            {work[0][0].jobtitle}
                        </i>
                        <h5 className="mt-5"  >EDUCATION</h5>
                        <div style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p ><b> {edu.univercity}</b></p>
                                <p>{edu.type}</p>
                                <p>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='ms-5' style={{ backgroundColor: 'grey' }}>
                    <h5 className='' >SKILLS</h5>
                    <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
                    <div className='row'>
                    {keyskills[0].map((keys, index) => (
                        
                            <div className='d-flex justify-content-around ' key={index}>
                                <div ><p className='mt-2'>{keys.keyskills}</p> </div>
                                <div className='' style={lineStyle}></div>
                            </div>


                        
                    ))}
                    </div>

                    <h5 className='mt-5'> CONTACT</h5>
                    <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
                    <div>
                        <div className='d-flex' style={{  }}>
                            <div className='me-2 ' style={{ backgroundColor: 'yellow', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}><i class="bi bi-telephone-fill me-2 p-1 "></i></div>
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
                            <div className='me-2' style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}><i class="bi bi-linkedin me-2 p-1"></i></div>
                            <div><p> {sMedia[0].linkedin}</p></div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='ms-5'>
                
                <div className='  p-2 mb-3 ' >
                    <h1 className="pt-5">{personalInfo.firstName} </h1>
                    <h1>{personalInfo.lastName}</h1>
                    <p className='mb-5' style={{}}>
                        <i className='p-1' style={{backgroundColor:'yellow',borderRadius:'5px'}}>{work[0][0].jobtitle}</i>
                    </p>
                    <p>
                    {personalInfo.object}
                </p>
                </div>
                <h5 className=''> JOB EXPERIENCE</h5>
                <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
            {work[0].map((works, index) => (
                <div key={index} className='d-flex justify-content-around mt-2'>
                    <div style={{ height: '100px', width: '4px', backgroundColor: 'yellow' }}> </div>
                    <div><p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                        <p style={{}}>{works.organization} </p></div>

                </div>
            ))}
            <div><h5 className=''>HOBBIES</h5></div>
            <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
            {Hobbies[0].map((hobb, index) => (
                <div key={index}>
                    <p>{hobb.hobbies}</p>
                </div>
            ))}
            <h5 className='' >ABOUT ME</h5>
            <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
            <div className=' row'>
                <div className=' d-flex justify-content-between col-6'>
                <div className=''><i>Date of Birth:-</i> <p >{personalInfo.dateofbirth}</p><hr style={{height:'5px', backgroundColor:'grey'}} /></div>
                <div className='ms-4'><i>Marital Status:-</i> <p> {personalInfo.maritalstatus}</p><hr style={{height:'5px', backgroundColor:'grey'}}  /></div>
                <div className='ms-4 '><i>Nationality:-</i> <p>{personalInfo.nationality}</p><hr style={{height:'5px', backgroundColor:'grey'}} /></div>
                </div>
            </div>
            <div><h5 style={{  }}>LANGUAGE</h5></div>
            <div className=' mb-4' style={{width:'50px',height:'4px', backgroundColor:'yellow'}}></div>
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
            
        </div>
        <div className="d-flex m-sm-3 mt-3" style={{}}>
            <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
            <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
        </div>
    </div>
    )
}
export default Preview10;