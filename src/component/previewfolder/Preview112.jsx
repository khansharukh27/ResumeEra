import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview11.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview12 = () => {
  // State for PDF filename and styling options
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
  const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
  const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
  const [margin, setMargin] = useState(10); // Margin for resume wrapper
  const [padding, setPadding] = useState(20); // Padding for sections (matched original 20px)
  const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
  const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

  // Editable headings
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skills');
  const [skillsHeading, setSkillsHeading] = useState('Skills');
  const [certificatesHeading, setCertificatesHeading] = useState('Certificates');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
  const languages = useSelector((state) => [state.reducer.addLanguage]);
  const Hobbies = useSelector((state) => [state.reducer.addHobies]);
  const project = useSelector((state) => [state.reducer.projectData]);
  const certi = useSelector((state) => state.reducer.certificateData || []); // Added for certificates, with fallback

  console.log('hobbies preview 12:-', Hobbies);
  console.log('honor and award:-', Honor);

  // Responsive heading size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setHeadingSize(14); // Smaller heading size for mobile
      } else {
        setHeadingSize(20); // Default heading size
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle heading edits
  const handleEdit = (e, defaultValue, setter) => {
    setter(e.target.textContent.trim() || defaultValue);
  };

  const lineStyle = {
    height: '5px',
    width: '75%',
    background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 25%)',
    margin: `${sectionSpacing}px auto`,
    borderRadius: '5px',
  };

  return (
    <div>
      <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
        <h1 style={{ fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
          Congratulations on Creating a Winning Resume!
        </h1>
        <small style={{ textAlign: 'center' }}>
          <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume doesn’t show your data, please refresh the page
        </small>
        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
          Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!
        </p>
      </header>
      <div>
        <GoogleAd />
      </div>
      <div className="main11">
        <div
          id="Alish_mirza1"
          style={{
            backgroundColor: bgColor,
            fontFamily: fontStyle,
            color: fontColor,
            margin: `${margin}px`,
            padding: `${padding}px`,
          }}
          contentEditable
          suppressContentEditableWarning
        >
          <h1 style={{ color: headingColor, fontSize: `${headingSize * 1.5}px`, lineHeight: `${lineSpacing}em` }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}>
            {work[0][0].jobtitle || 'Job Title'}
          </h2>
          <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {personalInfo.object || 'Your professional summary goes here.'}
          </p>
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {experienceHeading}
          </h3>
          {work[0].map((works, index) => (
            <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
              <h4 style={{ fontSize: `${fontSize + 2}px`, marginBottom: '-5px', lineHeight: `${lineSpacing}em` }}>
                {works.jobtitle}
              </h4>
              <p style={{ fontSize: `${fontSize}px`, marginBottom: '-5px', lineHeight: `${lineSpacing}em` }}>
                {works.organization}
                <br />
                {works.startYear} - {works.endYear}
              </p>
              <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                <li>{works.aboutexperience || 'Description of responsibilities and achievements.'}</li>
              </ul>
            </div>
          ))}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {educationHeading}
          </h3>
          {education[0].map((edu, index) => (
            <p key={index} style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
              {edu.degree} <br />
              {edu.university} <br />
              {edu.startYear} - {edu.endYear}
            </p>
          ))}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Technical Skills', setTechnicalSkillsHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {technicalSkillsHeading}
          </h3>
          {keyskills[0].length > 0 && (
            <div style={{ marginBottom: `${sectionSpacing}px` }}>
              <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                <strong>Programming Language:</strong> {keyskills[0].map((skill) => skill.keyskills).join(', ')}
              </p>
            </div>
          )}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {skillsHeading}
          </h3>
          <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {SoftSkill[0].map((skill, index) => (
              <li key={index}>{skill.softSkills || 'Skill'}</li>
            ))}
          </ul>
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Certificates', setCertificatesHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {certificatesHeading}
          </h3>
          <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {certi.map((cert, index) => (
              <li key={index}>{cert.title || 'Certificate'} ({cert.issueDate || 'Date'})</li>
            ))}
          </ul>
        </div>

        <PdfDownloadButton
          inputFields={inputFields}
          setInputFields={setInputFields}
          bgColor={bgColor}
          setBgColor={setBgColor}
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          headingColor={headingColor}
          setHeadingColor={setHeadingColor}
          fontColor={fontColor}
          setFontColor={setFontColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
          headingSize={headingSize}
          setHeadingSize={setHeadingSize}
          margin={margin}
          setMargin={setMargin}
          padding={padding}
          setPadding={setPadding}
          lineSpacing={lineSpacing}
          setLineSpacing={setLineSpacing}
          sectionSpacing={sectionSpacing}
          setSectionSpacing={setSectionSpacing}
          elementId="Alish_mirza1"
        />
      </div>
      <GoogleAd />
    </div>
  );
};

export default Preview12;