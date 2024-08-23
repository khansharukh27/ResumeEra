import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview.css';

const Preview = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo[0]);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alisha_mirza');

        try {
            const canvas = await html2canvas(element);
            const pdf = new jsPDF('span', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);

            const fileName = `${inputFields}.pdf`;

            const downloadLink = document.createElement('a');
            downloadLink.href = pdf.output('bloburl');
            downloadLink.download = fileName;
            downloadLink.click();

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
        <div className="preview-container d-sm-flex" style={{ position: 'relative' }}>
            <div className="preview-page" id="Alisha_mirza" style={{ backgroundColor: bgColor, fontFamily: fontStyle }}>
                <div className="d-flex justify-content-center preview-image-container">
                    <img src={personalInfo.image} alt="Selected" className="preview-image" />
                </div>
                <div className="text-center preview-text">
                    <span className="preview-name">{personalInfo.firstName} {personalInfo.lastName}</span>
                    <span className="preview-address">
                        {work[0].map((works, index) => (
                            <div key={index} className="preview-job-title">
                                {works.jobtitle}
                            </div>
                        ))}.
                        {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                    </span>
                </div>
                <div className="d-flex preview-details">
                    <div className="me-4 text-center preview-details-section">
                        <div className='d-flex outer'>
                            <div className='emptydiv'></div><h6 className="details-title">Detail</h6><div className='emptydiv'></div>
                        </div>
                        <span className="details-address">{personalInfo.address} </span>
                        <span className="details-city-state">{personalInfo.city} {personalInfo.state}</span><br />
                        <span className="details-mobile">{personalInfo.mobileNumber}</span><br />
                        <span className="details-email">{personalInfo.email}</span>
                        <br />
                        <div className='d-flex outer'>
                            <div className='emptydiv'></div><h6 className="details-title">Skills</h6><div className='emptydiv'></div>
                        </div>

                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="skill-item">
                                {keys.keyskills}
                                <hr className="skill-divider" style={{ height: '5px', color: 'black', backgroundColor: '' }} />
                            </div>
                        ))}
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className='d-flex outer'>
                                    <div className='emptydiv'></div><h6 className="details-title">Education {index + 1}</h6><div className='emptydiv'></div>
                                </div>
                                <span className="education-duration">{edu.startYear} - {edu.endYear}</span>
                                <span className="education-detail">{edu.type} from {edu.univercity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="preview-profile-section">
                        
                            <h6 className="details-title">Profile</h6>
                      
                        <span className="profile-description">{personalInfo.object}</span>
                        <h6 className="details-title" style={{ }}>Employment History</h6>
                        {work[0].map((works, index) => (
                            <div key={index} className="employment-history">
                                <span className="employment-detail" style={{ fontWeight: '500' }}>{works.organization} {works.jobtitle}</span>
                                <br />
                                <span className="employment-duration">{works.startYear} - {works.endYear}</span><br />
                                <span className='aboutexperience'>{works.aboutexperience}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="resume-download-section">
                <div className='d-flex'>
                    <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                    <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>

                </div>

                {/* Color Picker for Background Color */}
                <div className='d-flex border' style={{marginTop:'5px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="bg-color-picker ms-2" />
                    {/* Font Style Selector */}
                    <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)} className="font-style-selector ms-2">
                        <option value="Arial">Arial</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Trebuchet MS">Trebuchet MS</option>
                        <option value="Impact">Impact</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Palatino Linotype">Palatino Linotype</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Lucida Console">Lucida Console</option>
                        <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                        <option value="Gill Sans">Gill Sans</option>
                        <option value="Century Gothic">Century Gothic</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Garamond">Garamond</option>
                        <option value="Bookman">Bookman</option>
                        <option value="Arial Narrow">Arial Narrow</option>
                        <option value="Brush Script MT">Brush Script MT</option>
                        <option value="Candara">Candara</option>
                        <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
                        <option value="Goudy Old Style">Goudy Old Style</option>
                        <option value="Herculanum">Herculanum</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Optima">Optima</option>
                        <option value="Perpetua">Perpetua</option>
                        <option value="Rockwell">Rockwell</option>
                        <option value="Segoe UI">Segoe UI</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Preview;
