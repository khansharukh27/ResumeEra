import React, { useState, useEffect } from 'react';
import GoogleAd from '../adFolder/GoogleAd';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../previewfolder/CSS/preview303.css';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

export default function Preview303() {
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
  const [objectHeading, setObjectHeading] = useState('Object Statement');
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [contactHeading, setContactHeading] = useState('Contact');
  const [experienceHeading, setExperienceHeading] = useState('Work History');
  const [educationHeading, setEducationHeading] = useState('Education');
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

  console.log('hobbies preview 303:-', Hobbies);
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
      <div className="main303 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview303"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza303"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="blankdiv303"></div>
          <h3
            style={{
              whiteSpace: 'nowrap', // Corrected from 'none'
              marginBottom: `${sectionSpacing}px`,
              fontFamily: fontStyle,
              color: headingColor,
              fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
              lineHeight: `${lineSpacing}em`,
            }}
          >
            {personalInfo.firstName} {personalInfo.lastName}
          </h3>
          <div className="blankdiv303-2"></div>
          <div className="blanckall303-3"></div>
          <div className="innermain303 d-flex justify-content-around" style={{ padding: `${padding}px` }}>
            <div className="inner303-1" style={{ width: '50%' }}>
              <div className="d-flex">
                <h4
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Object Statement', setObjectHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    whiteSpace: 'nowrap',
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {objectHeading}
                </h4>
                <div className="blanckall303"></div>
              </div>
              <div className="blankdiv303-2"></div>
              <div className="blanckall303-3"></div>
              <p
                className="object303"
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  lineHeight: `${lineSpacing}em`,
                  marginBottom: `${sectionSpacing}px`,
                }}
              >
                {personalInfo.object}
              </p>
              <div className="soft-skill">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Soft Skill', setSoftSkillsHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {softSkillsHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div>
                  {SoftSkill[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item303">
                      <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
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
              <div className="technical-" style={{ backgroundColor: bgColor }}>
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {technicalSkillsHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item303">
                      <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li
                          style={{
                            fontSize: `${fontSize}px`,
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
            <div className="innerdiv303-2" style={{ width: '40%' }}>
              <div className="contact303">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {contactHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    marginBottom: '.1rem',
                    marginTop: '4px',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  ADDRESS:- {personalInfo.state} {personalInfo.postalCode}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    marginBottom: '.1rem',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  MOBILE:- {personalInfo.mobileNumber}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    wordBreak: 'break-all',
                    marginBottom: '.1rem',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  EMAIL:- {personalInfo.email}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    marginBottom: '.1rem',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  GITHUB:- {socialMediaLink?.[0]?.github || 'N/A'}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    marginBottom: '.1rem',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  LINKEDIN:- {socialMediaLink?.[0]?.linkedin || 'N/A'}
                </p>
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    marginBottom: '.1rem',
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  TWITTER:- {socialMediaLink?.[0]?.TWITTER || 'N/A'}
                </p>
              </div>
              <div className="experience-section303">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Work History', setExperienceHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {experienceHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history303" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner303">
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || 'N/A'}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section303 mt-1">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {educationHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item303" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item303">
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontWeight: 900,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        {edu.degree} in {edu.university}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        {edu.university}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail303"
                      >
                        {edu.startYear} - {edu.endYear}, {edu.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="language-303">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {languageHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item303">
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
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
              <div className="technical-skills-title303 mt-1">
                <div className="d-flex">
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                    style={{
                      fontFamily: fontStyle,
                      color: headingColor,
                      fontSize: `${headingSize}px`,
                      whiteSpace: 'nowrap',
                      lineHeight: `${lineSpacing}em`,
                      marginBottom: `${sectionSpacing}px`,
                    }}
                  >
                    {hobbiesHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
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
          elementId="Alisha_mirza303"
        />
      </div>
    </div>
  );
}