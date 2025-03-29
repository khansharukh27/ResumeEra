import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview111.css';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview111 = () => {
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
  const [experienceHeading, setExperienceHeading] = useState('Volunteer Experience');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [expertiseHeading, setExpertiseHeading] = useState('Skill');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [certificationHeading, setCertificationHeading] = useState('Certification');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
  const languages = useSelector((state) => [state.reducer.addLanguage]);
  const certi = useSelector((state) => state.reducer.certificateData);
  const Hobbies = useSelector((state) => [state.reducer.addHobies]);
  const project = useSelector((state) => [state.reducer.projectData]);

  console.log('hobbies preview 111:-', Hobbies);
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
    <div className="resume111">
      <header style={{ paddingLeft: '10px', paddingRight: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
          Congratulations on Creating a Winning Resume!
        </h1>
        <small style={{ textAlign: 'center' }}>
          <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume doesn’t show your data, please refresh the page
        </small>
        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
          Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

          Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

          Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!
        </p>
      </header>
      <div style={{ width: 'inherit' }}>
        <GoogleAd />
      </div>
      <h1 style={{ fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
        Functional-ATS-Resume-Template
      </h1>
      <div className="main111">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview111"
          id="Alisha_mirza111"
          style={{
            backgroundColor: bgColor,
            color: fontColor,
            fontFamily: fontStyle,
            margin: `${margin}px`,
            padding: `${padding}px`,
          }}
          contentEditable
          suppressContentEditableWarning
        >
          <div className="about111" style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>
            <h3
              style={{
                marginBottom: '-5px',
                marginTop: '0px',
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                lineHeight: `${lineSpacing}em`,
              }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p
              style={{
                color: fontColor,
                fontFamily: fontStyle,
                fontSize: `${fontSize}px`,
                whiteSpace: 'nowrap', // Corrected from 'none'
                lineHeight: `${lineSpacing}em`,
              }}
            >
              {work[0][0].jobtitle}
            </p>
            <hr style={{ marginTop: '-15px' }} />
            <p
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
          <div className="d-flex">
            <div className="contact111" style={{ padding: `${padding}px` }}>
              <div className="contactdiv111">
                <div className="contactinnerdiv111">
                  <i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: headingColor }} />
                  <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                    {personalInfo.state} {personalInfo.postalCode}
                  </p>
                </div>
                <div className="contactinnerdiv111">
                  <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor }} />
                  <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                    {personalInfo.mobileNumber}
                  </p>
                </div>
                <div className="contactinnerdiv111">
                  <i className="bi bi-envelope me-2 ms-2" style={{ color: headingColor }} />
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
                <div className="contactinnerdiv111">
                  <i className="bi bi-github ms-2" style={{ color: headingColor }} />
                  <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                    {socialMediaLink?.[0]?.github || 'N/A'}
                  </p>
                </div>
              </div>
              <div className="inner-104-1 me-4">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Skill', setExpertiseHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {expertiseHeading}
                  <hr style={{ width: 'inherit' }} />
                </h6>
                {keyskills[0].map((keys, index) => (
                  <div key={index} className="d-flex justify-content-between" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <p
                      className="technical-skill-item111"
                      style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.keyskills}
                    </p>
                    {/* Optional: Add a rating system like in Preview110 */}
                  </div>
                ))}
              </div>
              <div className="">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Certification', setCertificationHeading)}
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {certificationHeading}
                  <hr style={{ width: 'inherit' }} />
                </h6>
                {certi.map((edu, index) => (
                  <div key={index} className="" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.organization}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.description}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.city}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.issueDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="work111" style={{ padding: `${padding}px` }}>
              <div className="experience-section104 mt-4">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Volunteer Experience', setExperienceHeading)}
                  className="details-title104"
                  style={{
                    fontFamily: fontStyle,
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  {experienceHeading}
                  <hr />
                </h6>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history101 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner1">
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail104"
                      >
                        {works.jobtitle}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail104"
                      >
                        {works.organization}
                      </p>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-duration104"
                      >
                        {works.startYear} - {works.endYear}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: fontColor,
                          fontFamily: fontStyle,
                          fontSize: `${fontSize}px`,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="aboutexperience104"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <h6
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
                  <hr style={{ width: 'inherit' }} />
                </h6>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item111" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div className="ms-4">
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail111"
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail111"
                        >
                          {edu.university}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.city}
                        </p>
                        <p
                          style={{
                            color: fontColor,
                            fontFamily: fontStyle,
                            fontSize: `${fontSize}px`,
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail111 me-3"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <h6
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
                  <hr style={{ width: 'inherit' }} />
                </h6>
                {languages[0].reduce((result, _, index, array) => {
                  if (index % 2 === 0) result.push(array.slice(index, index + 2));
                  return result;
                }, []).map((chunk, rowIndex) => (
                  <div key={rowIndex} className="row inner-104-1 mb-3">
                    {chunk.map((keys, colIndex) => (
                      <div
                        key={colIndex}
                        className="col-6 d-flex justify-content-between"
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
                      </div>
                    ))}
                  </div>
                ))}
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
          elementId="Alisha_mirza111"
        />
      </div>
    </div>
  );
};

export default Preview111;