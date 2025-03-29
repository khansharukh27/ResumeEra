import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview306.css'; // Kept as preview306.css; update to preview307.css if intended
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

export default function Preview307() { // Updated to Preview307 based on personalInfo307
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
  const [objectiveHeading, setObjectiveHeading] = useState('Objective Statement');
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [languageHeading, setLanguageHeading] = useState('Language');
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

  console.log('hobbies preview 307:-', Hobbies); // Updated log to reflect Preview307
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
  const changeAlignment = (alignment) => {
    document.execCommand('justify' + alignment, false, null);
};

const toggleStyle = (style) => {
    document.execCommand(style, false, null);
};

// Function to toggle lists (bullet and numbered)
const toggleList = (listType) => {
    document.execCommand(listType, false, null);
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
      <div className="main306 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview306"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza306" // Kept as original; update to Alisha_mirza307 if intended
          contentEditable
          suppressContentEditableWarning
        >
          <div
            className="personalInfo307 d-flex"
            style={{
              justifyContent: 'start',
              flexDirection: 'column',
              backgroundColor: bgColor,
              padding: `${padding}px`,
            }}
          >
            <h3
              style={{
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                marginTop: 'auto',
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <div
              className="contact306"
              style={{ display: 'flex', justifyContent: 'start', backgroundColor: bgColor, gap: '5px' }}
            >
              <div className="contactinnerdiv306" style={{ whiteSpace: 'nowrap' }}>
                <p
                  style={{
                    color: fontColor,
                    fontFamily: fontStyle,
                    fontSize: `${fontSize}px`,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.state} {personalInfo.postalCode}
                </p>
              </div>
              <div>|</div>
              <div className="contactinnerdiv306" style={{ whiteSpace: 'nowrap' }}>
                <p
                  style={{
                    color: fontColor,
                    fontFamily: fontStyle,
                    fontSize: `${fontSize}px`,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.mobileNumber}
                </p>
              </div>
              <div>|</div>
              <div className="contactinnerdiv306" style={{ whiteSpace: 'nowrap' }}>
                <p
                  style={{
                    color: fontColor,
                    fontFamily: fontStyle,
                    fontSize: `${fontSize}px`,
                    wordBreak: 'break-all',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.email}
                </p>
              </div>
            </div>
          </div>
          <hr style={{ width: 'inherit' }} />
          <div className="d-flex justify-content-between" style={{ padding: `${padding}px 0` }}>
            <div>
              <h4
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(e, 'Objective Statement', setObjectiveHeading)}
                style={{
                  fontFamily: fontStyle,
                  color: headingColor,
                  fontSize: `${headingSize}px`,
                  width: '30%',
                  lineHeight: `${lineSpacing}em`,
                  marginBottom: `${sectionSpacing}px`,
                }}
              >
                {objectiveHeading}
              </h4>
            </div>
            <div style={{ width: '70%' }}>
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
          </div>
          <hr className="dashed-line" />
          <div
            className="soft-skill d-flex justify-content-between w-100"
            style={{ backgroundColor: bgColor, padding: `${padding}px 0` }}
          >
            <h4
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, 'Soft Skill', setSoftSkillsHeading)}
              style={{
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize}px`,
                marginRight: 'auto',
                whiteSpace: 'nowrap',
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {softSkillsHeading}
            </h4>
            <div className="row" style={{ width: '70%' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item306">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li
                      style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.softSkill} {/* Corrected from softSkill to match Redux state */}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="technical- d-flex justify-content-between" style={{ padding: `${padding}px 0` }}>
            <h4
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
              style={{
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize}px`,
                width: '30%',
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {technicalSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '70%' }}>
              {keyskills[0].map((keys, index) => (
                <div key={index} className="technical-skill-item306">
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
          <div className="firstdiv306" style={{ backgroundColor: bgColor, padding: `${padding}px 0` }}>
            <div className="me-3">
              <div className="experience-section306 d-flex">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                  className="details-title306"
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    width: '40%',
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {experienceHeading}
                </h4>
                <div style={{ width: '60%' }}>
                  {work[0].map((works, index) => (
                    <div key={index} className="employment-history306" style={{ marginBottom: `${sectionSpacing}px` }}>
                      <div className="exp-inner306">
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail306"
                        >
                          <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                          <br />
                          {works.organization} {works.city || 'N/A'} {/* Corrected from work.city */}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail306"
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
                          className="employment-detail306"
                        >
                          {works.aboutexperience}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="education-section306 d-flex justify-content-between mt-1">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                  className="details-title306"
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
                <div style={{ width: '70%' }}>
                  {education[0].map((edu, index) => (
                    <div key={index} className="certificate-item306" style={{ marginBottom: `${sectionSpacing}px` }}>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail306"
                      >
                        {edu.degree}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail306"
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
                        className="employment-detail306"
                      >
                        {edu.startYear}-{edu.endYear}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    marginTop: '10px',
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {languageHeading}
                </h4>
                <div style={{ width: '70%' }}>
                  {languages[0].reduce((result, _, index, array) => {
                    if (index % 2 === 0) result.push(array.slice(index, index + 2));
                    return result;
                  }, []).map((chunk, rowIndex) => (
                    <div key={rowIndex} className="row inner-104-1 mb-3">
                      {chunk.map((keys, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-6 justify-content-between"
                          style={{ paddingLeft: '10px', paddingRight: '10px' }}
                        >
                          <p
                            className="language"
                            style={{
                              color: fontColor,
                              fontFamily: fontStyle,
                              fontSize: `${fontSize}px`,
                              lineHeight: `${lineSpacing}em`,
                            }}
                          >
                            {keys.language}
                          </p>
                          {/* Uncomment to reintroduce language progress bars */}
                          {/* <div
                            style={{
                              width: '100%',
                              height: '8px',
                              backgroundColor: '#e0e0e0',
                              borderRadius: '4px',
                              overflow: 'hidden',
                              marginBottom: '12px',
                            }}
                          >
                            <div
                              style={{
                                width: `${(keys.rating / 5) * 100}%`,
                                height: '100%',
                                backgroundColor: headingColor,
                                transition: 'width 0.3s ease',
                              }}
                            ></div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-skills-title306 d-flex justify-content-between mt-1">
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '70%' }}>
                  {Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
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
          elementId="Alisha_mirza306" // Kept as original; update to Alisha_mirza307 if intended
        />
      </div>
    </div>
  );
}