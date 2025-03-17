import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview302.css'; // Kept as preview302.css per original code
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import HobbyIcons from '../HobbyIcons'; // Kept as per original (used in commented-out section)
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

export default function Preview308() {
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
  const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies & Interest');
  const [languageHeading, setLanguageHeading] = useState('Language');

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

  console.log('hobbies preview 308:-', Hobbies); // Updated log to reflect Preview308
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
      <div className="main302">
        <div
          className="preview302"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza308"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="namediv308" style={{ padding: `${padding}px` }}>
            <div className="d-flex justify-content-between" style={{ backgroundColor: '#d9eafa', padding: `${padding}px` }}>
              <h4
                style={{
                  whiteSpace: 'nowrap',
                  fontFamily: fontStyle,
                  color: headingColor,
                  fontSize: `${headingSize * 1.2}px`, // Larger for name
                  marginTop: '10px',
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </h4>
              <div className="contact301" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <p
                  style={{
                    color: fontColor,
                    fontFamily: fontStyle,
                    fontSize: `${fontSize}px`,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: fontColor }} />
                  {personalInfo.mobileNumber}
                </p>
                <p
                  style={{
                    color: fontColor,
                    fontFamily: fontStyle,
                    fontSize: `${fontSize}px`,
                    wordBreak: 'break-all',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  <i className="bi bi-envelope me-2 ms-2" style={{ color: fontColor }} />
                  {personalInfo.email}
                </p>
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
              </div>
            </div>

            <div className="maindiv302 mt-4" style={{ padding: `${padding}px` }}>
              <div className="skilldiv m-3">
                <div className="d-flex">
                  <div
                    style={{
                      width: '8px',
                      height: '20px',
                      backgroundColor: headingColor,
                      marginRight: '4px',
                      marginTop: '2px',
                    }}
                  ></div>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Objective Statement', setObjectiveHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {objectiveHeading}
                  </h4>
                </div>
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
                <div className="soft-skill" style={{ backgroundColor: bgColor }}>
                  <div className="d-flex">
                    <div
                      style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: headingColor,
                        marginRight: '4px',
                        marginTop: '2px',
                      }}
                    ></div>
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
                  </div>
                  <div>
                    {SoftSkill[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302">
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
                <div className="tech-skill" style={{ backgroundColor: bgColor }}>
                  <div className="d-flex">
                    <div
                      style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: headingColor,
                        marginRight: '4px',
                        marginTop: '2px',
                      }}
                    ></div>
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
                  </div>
                  <div>
                    {keyskills[0].map((keys, index) => (
                      <div key={index} className="technical-skill-item302">
                        <ul
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
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
              </div>
              <div>
                <div className="experience-section302">
                  <div className="d-flex">
                    <div
                      style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: headingColor,
                        marginRight: '4px',
                        marginTop: '2px',
                      }}
                    ></div>
                    <h4
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
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
                  </div>
                  {work[0].map((works, index) => (
                    <div key={index} className="employment-history302" style={{ marginBottom: `${sectionSpacing}px` }}>
                      <div className="exp-inner302">
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail302"
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
                          className="employment-detail302"
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
                          className="employment-detail302"
                        >
                          {works.aboutexperience}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="education-section302 mt-1">
                  <div className="d-flex">
                    <div
                      style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: headingColor,
                        marginRight: '4px',
                        marginTop: '2px',
                      }}
                    ></div>
                    <h4
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
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
                  </div>
                  {education[0].map((edu, index) => (
                    <div key={index} className="education-item302" style={{ marginBottom: `${sectionSpacing}px` }}>
                      <div className="certificate-item302">
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            fontWeight: 900,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail302"
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
                          className="employment-detail302"
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
                          className="employment-detail302"
                        >
                          {edu.startYear} - {edu.endYear}, {edu.city || 'N/A'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {Hobbies && Hobbies[0].length > 0 && (
                  <div>
                    <div className="d-flex">
                      <div
                        style={{
                          width: '8px',
                          height: '20px',
                          backgroundColor: headingColor,
                          marginRight: '4px',
                          marginTop: '2px',
                        }}
                      ></div>
                      <h4
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleEdit(e, 'Hobbies & Interest', setHobbiesHeading)}
                        style={{
                          fontFamily: fontStyle,
                          color: headingColor,
                          fontSize: `${headingSize}px`,
                          lineHeight: `${lineSpacing}em`,
                          marginBottom: `${sectionSpacing}px`,
                        }}
                      >
                        {hobbiesHeading}
                      </h4>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
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
                              {/* Uncomment to reintroduce HobbyIcons */}
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
                )}
                <div className="language-301">
                  <div className="d-flex">
                    <div
                      style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: headingColor,
                        marginRight: '4px',
                        marginTop: '2px',
                      }}
                    ></div>
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
                  </div>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item301">
                      <ul>
                        <li>
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
          elementId="Alisha_mirza308"
        />
      </div>
    </div>
  );
}