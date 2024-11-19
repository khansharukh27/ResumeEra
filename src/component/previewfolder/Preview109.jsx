
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview109.css'
const Preview109 = () => {
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#rrggbb')
  const [headingColor, setHeadingColor] = useState('#rrggbb')
  const [isDownloaded, setIsDownloaded] = useState(false);

  const navigate = useNavigate();
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  const Refrence = useSelector((state) => [state.reducer.addReference])
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
  const languages = useSelector((state) => [state.reducer.addLanguage]);
  const Certificate = useSelector((state) => state.reducer.certificateData);
  const result = useSelector((state) => state.reducer)
  console.log(result)
  // console.log('Certificate:-', Certificate)
  console.log('honorand award:-', Honor)
  const handleDownloadPDF = async () => {
    const element = document.getElementById('Alisha_mirza109');
    try {
      const scale = 2; // Increase the scale for better resolution
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true, // Allows cross-origin images to be rendered correctly
        logging: true, // Enable logging for debugging
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      // Calculate the aspect ratio to fit A4
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      const fileName = `${inputFields}.pdf`;
      pdf.save(fileName);
      setIsDownloaded(true)
      setTimeout(() => {
        setIsDownloaded(false)
      }, 4000)
      // Store the image data URL in localStorage
      const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
      savedResumes.push(imgData);
      localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

      alert('Your Resume is downloaded');
      // navigate('/myresume');
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  return (
    <div className="main109">
      <div className="preview109" id="Alisha_mirza109">
        <div>
          <h3>{personalInfo.firstName} {personalInfo.lastName}</h3>
          <p style={{ color: fontColor, fontFamily: fontStyle }}>{work[0].map((works, index) => (
            <div key={index}>
              <p>{works.jobtitle}</p>
            </div>
          ))}</p>
          <p>{personalInfo.object}</p>
        </div>
        <div className='contact109 '>
          <p style={{ color: fontColor, wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" />{personalInfo.email}</p>
          <p style={{ color: fontColor, fontFamily: fontStyle }}><i className="bi bi-telephone-fill me-2 ms-2" />{personalInfo.mobileNumber}</p>
          <p style={{ color: fontColor, fontFamily: fontStyle }} className=""><i className="bi bi-geo-alt-fill me-2 ms-2" /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
          <p style={{ color: fontColor, fontFamily: fontStyle }}><i className="bi bi-linkedin me-2 ms-2" />{socialMediaLink[0].linkedin}</p>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
          <div className="experience-section109">
            <h4 className="details-title109" style={{ color: headingColor, }}>
              WORK EXPERIENCE</h4>
            {work[0].map((works, index) => (
              <div key={index} className="employment-history109">
                <div className="exp-inner109">
                  <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail109"><b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b><br />{works.organization}{work.city}</p>
                  <p style={{ color: fontColor, fontFamily: fontStyle }} className="employment-detail109"><i>{works.startYear} - {works.endYear}</i></p>
                  <p style={{ color: fontColor, fontFamily: fontStyle }} className='employment-detail109'>{works.aboutexperience}</p>
                </div>
              </div>
            ))}
            </div>
            <div className=" language-109">
                <h4 style={{ color: headingColor, }}>LANGUAGE</h4>
                {languages[0].map((keys, index) => (
                  <div key={index} className="language-item109">
                    <p >{keys.language}</p>
                  </div>
                ))}
              </div>
          </div>
          <div className=''>
            <div className="technical-skills-title109">
              <h4 className="" style={{ color: headingColor }}>AREAS OF EXPERTISE</h4>
              {keyskills[0].map((keys, index) => (
                <div key={index} className="technical-skill-item109" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  {/* Skill Name */}
                  <p style={{ color: fontColor, fontFamily: fontStyle, marginRight: '10px', minWidth: '150px' }}>
                    {keys.keyskills}
                  </p>

                  {/* Rating Circles */}
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, circleIndex) => (
                      <span
                        key={circleIndex}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          margin: '0 3px',
                          backgroundColor: circleIndex < keys.rating ? 'blue' : 'lightgray',
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="education-section109 mt-3">
                <h4 className="details-title109" style={{ color: headingColor, }}>EDUCATION</h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item109">
                    <div className="certificate-item109">
                      <p style={{ color: fontColor ,fontFamily:fontStyle}} className="employment-detail109">{edu.degree}</p>
                      <p style={{ color: fontColor ,fontFamily:fontStyle}} className="employment-detail109">{edu.univercity}</p>
                      <p style={{ color: fontColor ,fontFamily:fontStyle}} className="employment-detail109">{edu.startYear} - {edu.endYear},{edu.city}</p>
                    </div>
                    <div className="education-details109">
                      <span><b></b></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div> |
      </div>
      );
};

      export default Preview109;
