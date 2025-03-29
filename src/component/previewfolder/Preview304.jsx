import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview304.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

export default function Preview304() {
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

  console.log('SoftSkill preview 304:-',SoftSkill); // Updated log message to match component
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
      <div className="main304 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview304"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza304"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="personalInfo304" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="namediv304">
              <h3
                style={{
                  whiteSpace: 'nowrap', // Corrected from 'none'
                  color: headingColor,
                  fontFamily: fontStyle,
                  fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                  marginBottom: `${sectionSpacing}px`,
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </h3>
            </div>
            <div className="contact304">
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
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
              <div>-</div>
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
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
              <div>-</div>
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
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
            <div className="emptydiv1"></div>
            <div className="emptydiv2"></div>
            <hr className="dashed-line" />
            <h4
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, 'Objective Statement', setObjectiveHeading)}
              style={{
                color: headingColor,
                fontFamily: fontStyle,
                fontSize: `${headingSize}px`,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {objectiveHeading}
            </h4>
            <p
              className="object"
              style={{
                fontFamily: fontStyle,
                color: fontColor,
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
                color: headingColor,
                fontFamily: fontStyle,
                fontSize: `${headingSize}px`,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {softSkillsHeading}
            </h4>
            <div className="row" style={{ gap: '16px' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item304 col-4">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li
                      style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.softSkill} 
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="technical-" style={{ padding: `${padding}px` }}>
            <h4
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
              style={{
                color: headingColor,
                fontFamily: fontStyle,
                fontSize: `${headingSize}px`,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {technicalSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {keyskills[0].map((keys, index) => (
                <div key={index} className="technical-skill-item304">
                  <ul
                    style={{
                      fontSize: `${fontSize}px`,
                      color: fontColor,
                      fontFamily: fontStyle,
                      marginRight: '0px',
                      minWidth: '100px',
                      
                    }}
                  >
                    <li
                      style={{
                        color: fontColor,
                        lineHeight: `${lineSpacing}em`,
                        fontSize: `${fontSize}px`,
                      fontFamily: fontStyle,
                      marginRight: '0px',
                      minWidth: '100px',
                      
                      }}
                    >
                      {keys.keyskills}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="firstdiv304" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="me-3">
              <div className="experience-section304">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                  className="details-title304"
                  style={{
                    color: headingColor,
                    fontFamily: fontStyle,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {experienceHeading}
                </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history304" 
                  style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner304">
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail304"
                      >
                        <p></p>
                        <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || ' '} {/* Corrected from work.city */}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail304"
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
                          className="employment-detail304"
                        >
                          {works.aboutexperience}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section304 mt-1">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                  className="details-title304"
                  style={{
                    color: headingColor,
                    fontFamily: fontStyle,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {educationHeading}
                </h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item304" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item304" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            fontWeight: 600, // Corrected from 60
                            // 
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail304"
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            fontWeight: 600,
                            // 
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail304"
                        >
                          {edu.university}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            // 
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail304"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="d-flex" style={{ marginBottom: '5px' }}>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                    style={{
                      color: headingColor,
                      fontFamily: fontStyle,
                      fontSize: `${headingSize}px`,
                      marginTop: '10px',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {languageHeading}
                  </h4>
                </div>
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
                        <div
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
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="">
                <div className="technical-skills-title304 mt-1">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Interest', setInterestHeading)}
                    style={{
                      color: headingColor,
                      fontFamily: fontStyle,
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
                            
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginRight: '0px',
                            minWidth: '100px',
                            
                          }}
                        >
                          <li
                            style={{
                              fontSize: `${fontSize}px`,
                              
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
          elementId="Alisha_mirza304"
        />
      </div>
    </div>
  );
}