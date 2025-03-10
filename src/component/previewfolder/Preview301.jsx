import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview301.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

export default function Preview301() {
  // State for PDF filename and styling options
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
  const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
  const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
  const [margin, setMargin] = useState(10); // Margin for resume wrapper
  const [padding, setPadding] = useState(10); // Padding for sections
  const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
  const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

  // Editable headings
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [interestHeading, setInterestHeading] = useState('Interest');

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

  console.log('hobbies preview 301:-', Hobbies);
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
      <GoogleAd />
      <div className="main301 d-md-flex">
        <div
          className="preview301"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza301"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="personalInfo301" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="blueline"></div>
            <h3
              style={{
                whiteSpace: 'nowrap', // Corrected from 'none'
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p
              className="jobtitle"
              style={{
                color: fontColor,
                fontFamily: fontStyle,
                fontSize: `${fontSize}px`,
                lineHeight: `${lineSpacing}em`,
                textAlign: 'center',
              }}
            >
              {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
            </p>
            <div className="contact301">
              <p
                style={{
                  color: fontColor,
                  fontFamily: fontStyle,
                  fontSize: `${fontSize}px`,
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                {personalInfo.mobileNumber}
              </p>
              <div>
                <p style={{ width: '20px' }}>|</p>
              </div>
              <p
                style={{
                  wordBreak: 'break-all',
                  color: fontColor,
                  fontFamily: fontStyle,
                  fontSize: `${fontSize}px`,
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                <i className="bi bi-envelope me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                {personalInfo.email}
              </p>
            </div>
            <hr className="dashed-line" />
            <p
              className="object"
              style={{
                color: fontColor,
                fontFamily: fontStyle,
                fontSize: `${fontSize}px`,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {personalInfo.object}
            </p>
          </div>
          <hr className="dashed-line" />
          <div className="soft-skill" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <h4
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, 'Soft Skill', setSoftSkillsHeading)}
              style={{
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize}px`,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {softSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item301">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li
                      style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.softSkills} {/* Corrected from softSkill to match Redux state */}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="firstdiv301" style={{ padding: `${padding}px` }}>
            <div className="me-3">
              <div className="experience-section301">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                  className="details-title301"
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {experienceHeading}
                </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history301" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner301">
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || 'N/A'}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section301 mt-1">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                  className="details-title301"
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {educationHeading}
                </h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item301" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item301">
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          fontWeight: 900,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        {edu.degree} in {edu.university}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        {edu.university}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail301"
                      >
                        {edu.startYear} - {edu.endYear}, {edu.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="language-301">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {languageHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item301">
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {keys.language}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="technical-">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {technicalSkillsHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item301">
                      <ul
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginRight: '0px',
                          minWidth: '100px',
                          marginBottom: '-5px',
                        }}
                      >
                        <li
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {keys.keyskills}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-skills-title301 mt-1">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Interest', setInterestHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {interestHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <ul
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginRight: '0px',
                          minWidth: '100px',
                          marginBottom: '-5px',
                        }}
                      >
                        <li
                          style={{
                            marginBottom: '-5px',
                            color: fontColor,
                            fontFamily: fontStyle,
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {/* Uncomment if you want to reintroduce hobby icons */}
                          {/* <span style={{ marginRight: '10px', fontSize: '20px' }}>
                            {HobbyIcons[keys.hobbies] || '🎯'}
                          </span> */}
                          {keys.hobbies}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-download-section0">
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>
          <div style={{ width: '100%' }}>
            <GoogleAd />
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
            elementId="Alisha_mirza301"
          />
          <div id="loadingSpinner" style={{ display: 'none', position: 'fixed', top: '50%', left: '50%' }}>
            <div className="spinner"></div>
          </div>
          <div style={{ width: '100%' }}>
            <GoogleAd />
          </div>
        </div>
      </div>
    </div>
  );
}