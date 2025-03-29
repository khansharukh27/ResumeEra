import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import HobbyIcons from '../HobbyIcons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './CSS/preview116.css';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview309 = () => {
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
  const [workHeading, setWorkHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [skillsHeading, setSkillsHeading] = useState('Skill');
  const [projectHeading, setProjectHeading] = useState('Personal Project');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');

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

  console.log('hobbies preview 309:-', Hobbies); // Updated to reflect Preview309
  console.log('keyskills:-', keyskills); // Corrected from 'honorand award'

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
          Tech ATS Resume Template
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
      <div className="main116 marging mt-5">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="Preview116"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza302"
          contentEditable
          suppressContentEditableWarning
        >
          <div
            className="Name-positio-summary116"
            style={{ border: `2px solid ${headingColor}`, padding: `${padding}px` }}
          >
            <h3
              style={{
                color: headingColor,
                fontSize: `${headingSize * 1.2}px`, // Larger for name
                backgroundColor: bgColor,
                fontFamily: fontStyle,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p
              className="jobtitle116"
              style={{ fontSize: `${fontSize}px`, color: 'black', fontFamily: fontStyle }}
            >
              {work[0].map((works, index) => (
                <div key={index}>
                  <p
                    style={{
                      fontSize: `${fontSize}px`,
                      fontFamily: fontStyle,
                      marginBottom: '-10px',
                      color: fontColor || '#f9dec7',
                      lineHeight: `${lineSpacing}em`,
                    }}
                  >
                    {works.jobtitle}
                  </p>
                </div>
              ))}
            </p>
            <p
              className="object116"
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: fontStyle,
                color: fontColor,
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
              }}
            >
              {personalInfo.object}
            </p>
          </div>
          <div className="contactdiv116" style={{ backgroundColor: headingColor, padding: `${padding}px` }}>
            <div className="contactinnerdiv116">
              <i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  display: 'inline',
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {personalInfo.state} {personalInfo.postalCode}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  display: 'inline',
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {personalInfo.mobileNumber}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-envelope me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  display: 'inline',
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {personalInfo.email}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-github ms-2" style={{ color: bgColor, fontSize: `${fontSize}px` }} />
              <p
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  display: 'inline',
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {socialMediaLink[0]?.github || 'N/A'}
              </p>
            </div>
          </div>
          <div className="combine-div116 mt-5" style={{ display: 'flex', padding: `${padding}px` }}>
            <div className="work-education me-4" style={{ width: '50%' }}>
              <div className="experience-section116 mt-4">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Work Experience', setWorkHeading)}
                  className="details-title116"
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-briefcase m-3"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                    }}
                  />
                  {workHeading}
                </h6>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history116 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner1">
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail116"
                      >
                        {works.jobtitle}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail116"
                      >
                        {works.organization}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-duration116"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="aboutexperience116"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                  className="heading116"
                >
                  <i
                    className="bi bi-backpack"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {educationHeading}
                </h6>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item116" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div className="ms-4">
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail116"
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail116"
                        >
                          {edu.university}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.city || 'N/A'}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail116 me-3"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <div className="inner-116-1 me-4">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-tools"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {skillsHeading}
                </h6>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="d-flex justify-content-between">
                      <p
                        className="technical-skill-item116"
                        style={{
                          backgroundColor: headingColor,
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                          padding: '5px 10px',
                        }}
                      >
                        {keys.keyskills}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Personal Project', setProjectHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-kanban-fill"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {projectHeading}
                </h6>
                <div>
                  {project[0]?.map((pro, index) => (
                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {pro.link} ({pro.startTime} - {pro.endTime})
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {pro.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-translate"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {languageHeading}
                </h6>
                {languages[0]?.map((keys, index) => (
                  <div key={index} className="d-flex justify-content-between" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {keys.language}
                      </p>
                    </div>
                    <div className="star-rating ms-3 w-50">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                          style={{
                            color: i < keys.rating ? fontColor : 'grey',
                            fontSize: `${fontSize}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title109 mt-3">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-file-music"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {hobbiesHeading}
                </h6>
                {Hobbies[0]?.map((keys, index) => (
                  <div key={index} className="d-flex align-items-center" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>
                      {HobbyIcons[keys.hobbies] || '🎯'}
                    </span>
                    <p
                      style={{
                        marginBottom: '-5px',
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.hobbies}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="resume-download-section0" style={{ padding: `${padding}px` }}>
         
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
            elementId="Alisha_mirza302"
          />
          <GoogleAd />
        </div>
      </div>
    </div>
  );
};

export default Preview309;