import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview2 = () => {
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
        <div className="d-sm-flex justify-content-between " style={{  }}>

            <div className="d-flex main border m-sm-3 " id="Alisha_mirza" style={{ backgroundColor: 'rgb(120, 139, 88)' }}>
                <div className="main1 d-flex flex-column m-1 justify-content-center">
                    <div className="maininner1 text-center pt-5" style={{backgroundColor:'black',width:'200px',borderBottomLeftRadius:'50%',borderBottomRightRadius:'50%',color:'white'}}>
                        <h3 className="pt-5">{personalInfo.firstName} {personalInfo.lastName}</h3>
                        <p>{work[0].map((works, index) => (
                            <div key={index}>
                                {works.jobtitle}
                            </div>
                        ))}</p>
                        <div className="maininner2 p-2">
                            <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%',border:'3px solid grey'  }} />

                        </div>
                    </div>
                    <div className="maininner3 ms-4 mt-4">
                    <h1> <i class="bi bi-person-lines-fill"/>Contact</h1>
                        <p><i class="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p><i class="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p><i class="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>

                    </div>
                    <div className="maininner4 ms-1 mt-4 p-3 bg-dark text-center" style={{color:'white',width:'200px',borderTopRightRadius:'50%',borderTopLeftRadius:'50%'}}>
                            <h1 className="mt-5 " >Education</h1>
                        {education[0].map((edu, index) => (
                            <div key={index} className="">
                                <p ><b> {edu.univercity}</b></p>
                                <p>{edu.type}</p>
                                <p>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="main2 m-2">
                        <div className="about">
                            <div>
                                <h1><i class="bi bi-file-person-fill me-2"></i>About</h1>
                                <p>{personalInfo.object}</p>

                            </div>
                            <div className="jobExperience">
                                <h1> <i class="bi bi-briefcase-fill me-2"></i>Job Experience</h1>
                                {work[0].map((works, index) => (
                                    <div key={index}>
                                        <p><b>{works.jobtitle}</b></p>  <p>{works.startYear}-{works.endYear}</p>
                                        <p style={{}}>{works.organization} </p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                
                                    <h1><i class="bi bi-mortarboard me-2"></i>Skills</h1>
                                    {keyskills[0].map((keys, index) => (
                                        <div key={index} className="text-center">
                                            {keys.keyskills}
                                            
                                            <hr style={{ height: '2px' }} />
                                       </div>
                                    ))}
                               
                            </div>
                            <div className="d-sm-flex justify-content-between">
                                <div className="mb-2">
                                    <div><h4><i class="bi bi-translate me-2"/>language</h4></div>
                                    {LLanguage[0].map((lan,index)=>(
                                        <div key={index}>
                                           <ul>
                                            <li>
                                            {lan.language}
                                            </li>
                                           </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-sm-2">
                                    <div><h4><i class="bi bi-joystick me-2"/>Hobbies</h4></div>
                                    {Hobbies[0].map((hobb,index) =>(
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
                    </div>
            </div>
            <div className="d-flex m-sm-3 mt-3" style={{ }}>
                <input type="text" placeholder="enter your resume name" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
            </div>

        </div>
    );
};

export default Preview2;
