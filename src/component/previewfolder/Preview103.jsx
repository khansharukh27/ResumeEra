import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview103.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview103 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview103-specific sections)
    const [profileSummaryHeading, setProfileSummaryHeading] = useState('Profile Summary');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [experienceHeading, setExperienceHeading] = useState('Profection Experience'); // Corrected typo from original
    const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
    const [honorAwardHeading, setHonorAwardHeading] = useState('Honor & Award');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const project = useSelector((state) => [state.reducer.projectData]);

    console.log('hobbies preview 103:-', Hobbies);
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
            <div className="personal-info-section103 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="main103 mt-4 me-md-5 ms-md-1"
                    id="Alisha_mirza103"
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
                    <div className="personal-header">
                        <h3
                            className="personal-name"
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.firstName} {personalInfo.lastName}
                        </h3>
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                            }}
                            className="personal-details"
                        >
                            {personalInfo.city} {personalInfo.state} <b>.</b> {personalInfo.email} <b>.</b>{' '}
                            {personalInfo.mobileNumber}
                        </p>
                    </div>
                    <div className="profile-summary-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Profile Summary', setProfileSummaryHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="profile-summary-title"
                        >
                            {profileSummaryHeading}
                        </h5>
                        <hr className="profile-summary-hr" />
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="profile-summary-content"
                        >
                            {personalInfo.object}
                        </p>
                    </div>
                    <div className="education-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title103"
                        >
                            {educationHeading}
                        </h5>
                        <hr className="education-hr" />
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-item103" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="education-degree103">
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.degree}
                                    </span>
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="education-duration103"
                                    >
                                        {edu.startYear} - {edu.endYear}
                                    </span>
                                </div>
                                <div className="education-details">
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{edu.univercity}</b>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="experience-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Profection Experience', setExperienceHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title103"
                        >
                            {experienceHeading}
                        </h5>
                        <hr className="experience-hr" />
                        {work[0].map((works, index) => (
                            <div key={index} className="employment-history103" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="exp-inner103">
                                    <p
                                        className="employment-detail103"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{works.organization}</b> -- {works.jobtitle}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="employment-duration103"
                                    >
                                        {works.startYear} - {works.endYear}
                                    </p>
                                </div>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                    className="aboutexperience103"
                                >
                                    {works.aboutexperience}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="skill-section103">
                        <h5
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
                            className="technical-skills-title"
                        >
                            {technicalSkillsHeading}
                        </h5>
                        <hr className="technical-skills-hr" />
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="technical-skill-item d-flex">
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {keys.keyskills}|
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="honor-award-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Honor & Award', setHonorAwardHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="honor-title"
                        >
                            {honorAwardHeading}
                        </h5>
                        <hr className="honor-hr" />
                        {Honor[0].map((hobb, index) => (
                            <div key={index} className="honor-item" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="honor-info">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.title}</b>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.year}</b>
                                    </p>
                                </div>
                                <div className="honor-organization">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.organization}</b>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.description}</b>
                                    </p>
                                </div>
                            </div>
                        ))}
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
                    elementId="Alisha_mirza103"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview103;