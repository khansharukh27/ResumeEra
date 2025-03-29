import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview109.css';
import HobbyIcons from '../HobbyIcons';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview109 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview109-specific sections)
    const [experienceHeading, setExperienceHeading] = useState('Work Experience');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [expertiseHeading, setExpertiseHeading] = useState('Areas of Expertise');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [projectHeading, setProjectHeading] = useState('Volunteer and Personal Project');
    const [interestHeading, setInterestHeading] = useState('Interest');

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

    console.log('hobbies preview 109:-', Hobbies);
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
            <div className="main109 marging">
<Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="preview109"
                    id="Alisha_mirza109"
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
                    <div className="personalInfo">
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
                            }}
                        >
                            {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
                        </p>
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
                    <div className="contact109">
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                wordBreak: 'break-all',
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-envelope me-2 ms-2" />
                            {personalInfo.email}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-telephone-fill me-2 ms-2" />
                            {personalInfo.mobileNumber}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                            }}
                            className=""
                        >
                            <i className="bi bi-geo-alt-fill me-2 ms-2" />
                            {personalInfo.city} {personalInfo.state} {personalInfo.country}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-linkedin me-2 ms-2" />
                            {socialMediaLink?.[0]?.linkedin || 'N/A'}
                        </p>
                    </div>
                    <div className="firstdiv109" style={{ backgroundColor: bgColor }}>
                        <div className="me-3" style={{ padding: `${padding}px` }}>
                            <div className="experience-section109">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                                    className="details-title109"
                                    style={{
                                        fontFamily: fontStyle,
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {experienceHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {work[0].map((works, index) => (
                                    <div key={index} className="employment-history109" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="exp-inner109">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    marginBottom: '-5px',
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail109"
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
                                                className="employment-detail109"
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
                                                className="employment-detail109"
                                            >
                                                {works.aboutexperience}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="language-109">
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
                                    {languageHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {languages[0].map((keys, index) => (
                                    <div key={index} className="language-item109">
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
                        <div style={{ padding: `${padding}px` }}>
                            <div className="technical-">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Areas of Expertise', setExpertiseHeading)}
                                    style={{
                                        fontFamily: fontStyle,
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {expertiseHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {keyskills[0].map((keys, index) => (
                                    <div
                                        key={index}
                                        className="technical-skill-item109"
                                        style={{ display: 'flex', marginBottom: '8px' }}
                                    >
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                marginRight: '0px',
                                                minWidth: '100px',
                                                marginBottom: '-5px',
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.keyskills}
                                        </p>
                                        <div style={{ display: 'flex' }}>
                                            {[...Array(5)].map((_, circleIndex) => (
                                                <span
                                                    key={circleIndex}
                                                    style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        margin: '0 3px',
                                                        backgroundColor: circleIndex < keys.rating ? 'blue' : 'lightgray',
                                                    }}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="education-section109 mt-3">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    className="details-title109"
                                    style={{
                                        fontFamily: fontStyle,
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {educationHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item109" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="certificate-item109">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail109"
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
                                                className="employment-detail109"
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
                                                className="employment-detail109"
                                            >
                                                {edu.startYear} - {edu.endYear}, {edu.city}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="technical-skills-title109 mt-3">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Volunteer and Personal Project', setProjectHeading)}
                                    style={{
                                        fontFamily: fontStyle,
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {projectHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {project[0].map((keys, index) => (
                                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p
                                            style={{
                                                marginBottom: '-5px',
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.link}
                                        </p>
                                        <p
                                            style={{
                                                marginBottom: '-5px',
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.startTime}-{keys.endTime}
                                        </p>
                                        <p
                                            style={{
                                                marginBottom: '-5px',
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            .{keys.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="technical-skills-title109 mt-3">
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
                                    {interestHeading} <hr style={{ width: '100%' }} />
                                </h4>
                                {Hobbies[0].map((keys, index) => (
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
                    elementId="Alisha_mirza109"
                />
            </div>
        </div>
    );
};

export default Preview109;