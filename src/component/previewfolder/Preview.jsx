import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    // const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    // const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);

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
        <div className="d-flex" style={{position:'relative'}}>
            <div className="" id="Alisha_mirza" style={{ backgroundColor: 'wheat' }}>

                <h1>Preview paga 1</h1>
                <div className="d-flex justify-content-center">
                    <img src={personalInfo.image} alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
                </div>
                <div className="text-center">
                    <h1 style={{ fontStretch: 'ultra-condensed' }}>{personalInfo.firstName} {personalInfo.lastName}</h1>

                    <p>{work[0].map((works, index) => (
                        <div key={index}>
                            {works.jobtitle}
                        </div>
                    ))}.{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                </div>
                <div className="d-flex me-5 ms-4">
                    <div className="me-4 text-center">
                        <h1>Detail</h1>
                        <p>{personalInfo.address}</p>
                        <p> {personalInfo.city} {personalInfo.state}</p>

                        <p>{personalInfo.mobileNumber}</p>
                        <p>{personalInfo.email}</p>
                        <h1>Skills</h1>

                        {keyskills[0].map((keys, index) => (
                            <div key={index}>
                                {keys.keyskills}
                                <hr style={{ height: '2px' }} />

                            </div>
                        ))}

                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <h1>Education {index + 1}</h1>
                                <p>{edu.startYear} - {edu.endYear}</p>
                                {edu.type} from {edu.univercity}




                            </div>
                        ))}

                    </div>
                    <div>
                        <h1>Profile</h1>
                        <p>{personalInfo.object}</p>

                        {work[0].map((works, index) => (
                            <div key={index}>
                                <h6 style={{ fontWeight: '800' }}>Employment History {index + 1}</h6>
                                <p style={{ fontWeight: '500' }}>{works.organization} {works.jobtitle}</p>
                                <p>{works.startYear}-{works.endYear}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{position:'absolute', top:'50%',left:'60%'}}>
                    <input type="text" placeholder="enter your resume name"style={{borderRadius:'5px', padding:'10px'}} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2">Download</button>
                </div>

        </div>
    );
};

export default Preview;
