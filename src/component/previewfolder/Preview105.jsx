import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview105.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview105 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview105-specific sections)
    const [profileHeading, setProfileHeading] = useState('Profile');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [experienceHeading, setExperienceHeading] = useState('Work Experience');
    const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');

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

    console.log('hobbies preview 105:-', Hobbies);
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
        <div className="p-4">
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
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
            <div className="main105">
                <div
                    className="preview105"
                    id="Alisha_mirza105"
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
                    <div className="personalinfo105">
                        <div className="imagediv105">
                            <img src={personalInfo.image} alt="doctor resume" />
                        </div>
                        <div className="namediv105">
                            <h3
                                style={{
                                    whiteSpace: 'nowrap',
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
                                className="jobtitle105f"
                                style={{
                                    color: fontColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {work[0][0].jobtitle}
                            </p>
                        </div>
                        <div className="contactdiv105">
                            <div className="d-flex">
                                <div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <i className="bi bi-geo-alt-fill me-2 ms-2" />
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            wordBreak: 'break-all',
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <i className="bi bi-telephone-fill me-2 ms-2" />
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
                                    >
                                        {personalInfo.mobileNumber}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <i className="bi bi-envelope me-2 ms-2" />
                                    </p>
                                </div>
                                <div>
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
                            <div className="d-flex">
                                <div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <i className="bi bi-github ms-2" />
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
                                    >
                                        {socialMediaLink?.[0]?.github || 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <div className="inner105-1 w-50" style={{ padding: `${padding}px` }}>
                            <h6
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Profile', setProfileHeading)}
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {profileHeading}
                            </h6>
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
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {languageHeading}
                                </h6>
                                {languages[0].map((keys, index) => (
                                    <div key={index}>
                                        <p
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
                            <div className="education-section105 mt-3">
                                <h6
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
                                    className="details-title105"
                                >
                                    {educationHeading}
                                </h6>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item105" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="education-degree105">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
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
                                            >
                                                {edu.univercity}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="education-duration105"
                                            >
                                                {edu.startYear} - {edu.endYear}, {edu.city}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divider105"></div>
                        <div className="inner105-2" style={{ padding: `${padding}px` }}>
                            <div className="experience-section105">
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="details-title105"
                                >
                                    {experienceHeading}
                                </h6>
                                {work[0].map((works, index) => (
                                    <div key={index} className="employment-history101 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="exp-inner105">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail105"
                                            >
                                                <b>{works.jobtitle}</b> | {works.organization} | {works.city || 'N/A'}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-duration105"
                                            >
                                                {works.startYear} - {works.endYear}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="aboutexperience105"
                                            >
                                                {works.aboutexperience}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="technical-skills-title105 mt-3">
                                <h6
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
                                </h6>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                        <ul>
                                            <li>
                                                <p
                                                    style={{
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {keys.keyskills}
                                                </p>
                                            </li>
                                        </ul>
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
                    elementId="Alisha_mirza105"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview105;