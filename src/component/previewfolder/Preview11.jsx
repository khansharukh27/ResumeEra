import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview11.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview11 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('black'); // Default font color
    const [headingColor, setHeadingColor] = useState('black'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3)
    const [contactHeading, setContactHeading] = useState('Contact Me');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [objectHeading, setObjectHeading] = useState('Object');
    const [experienceHeading, setExperienceHeading] = useState('Job Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for consistency with other previews

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);

    const result = useSelector((state) => [state.reducer]);
    console.log('reducer:-', result);

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

    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 75%)',
        margin: `${sectionSpacing}px auto`,
        borderRadius: '5px',
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
            <div>
                <GoogleAd />
            </div>
            <div className="main11">
                <div
                    className="resume-container"
                    style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        backgroundColor: bgColor,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    id="Alish_mirza1"
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="left-section" style={{ padding: `${padding}px` }}>
                        <div className="profile">
                            <h3
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {personalInfo.firstName} {personalInfo.lastName}
                            </h3>
                            <p>
                                {work[0].map((wor, index) => (
                                    <div key={index}>
                                        <p
                                            style={{
                                                color: headingColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {wor.jobtitle}
                                        </p>
                                    </div>
                                ))}
                            </p>
                            <img src={personalInfo.image} alt="Profile" className="profile-img" />
                        </div>

                        <div className="contact-info">
                            <div className="contact d-flex">
                                <div>
                                    <i className="bi bi-person-circle me-2"></i>
                                </div>
                                <div>
                                    <h3
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleEdit(e, 'Contact Me', setContactHeading)}
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${headingSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                    >
                                        {contactHeading}
                                    </h3>
                                </div>
                            </div>
                            <p
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                <i className="bi bi-telephone-fill"></i> {personalInfo.mobileNumber}
                            </p>
                            <p
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    wordBreak: 'break-all',
                                }}
                            >
                                <i className="bi bi-envelope-fill"></i> {personalInfo.email}
                            </p>
                            <p
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                <i className="bi bi-geo-alt-fill"></i> {personalInfo.city} {personalInfo.state}
                            </p>
                        </div>
                        <hr />

                        <div className="education">
                            <div className="contact">
                                <i className="bi bi-backpack me-2"></i>
                                <h3
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
                                >
                                    {educationHeading}
                                </h3>
                            </div>
                            {education[0].map((edu, index) => (
                                <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <p
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.degree}
                                    </p>
                                    <p
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.univercity}
                                    </p>
                                    <p
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.type}
                                    </p>
                                    <p
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <hr />

                        <div className="references">
                            <div className="contact">
                                <i className="bi bi-translate me-2"></i>
                                <h3
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
                                </h3>
                            </div>
                            {LLanguage[0].map((lan, index) => (
                                <div key={index}>
                                    <ul>
                                        <li
                                            style={{
                                                fontSize: `${fontSize}px`,
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {lan.language}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="right-section" style={{ padding: `${padding}px` }}>
                        <div className="about-me">
                            <div className="contact">
                                <i className="bi bi-vector-pen me-2"></i>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {objectHeading}
                                </h3>
                            </div>
                            <p
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
                        <hr />

                        <div className="job-experience">
                            <div className="contact">
                                <i className="bi bi-person-workspace me-2"></i>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Job Experience', setExperienceHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {experienceHeading}
                                </h3>
                            </div>
                            {work[0].map((works, index) => (
                                <div key={index} className="d-flex justify-content-around mt-2 job-experience" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div>
                                        <p
                                            style={{
                                                color: headingColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {works.jobtitle}
                                        </p>
                                        <p
                                            style={{
                                                color: headingColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {works.startYear}-{works.endYear}
                                        </p>
                                        <p
                                            style={{
                                                color: headingColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {works.organization}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />

                        <div className="skills">
                            <div className="contact">
                                <i className="bi bi-gear me-2"></i>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {skillsHeading}
                                </h3>
                            </div>
                            {keyskills[0].map((keys, index) => (
                                <div className="d-flex justify-content-around" key={index}>
                                    <div>
                                        <p
                                            style={{
                                                color: headingColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.keyskills}
                                        </p>
                                    </div>
                                    <div style={lineStyle}></div>
                                </div>
                            ))}
                        </div>

                        <div className="language-hobbies">
                            <hr />
                            <div className="contact">
                                <i className="bi bi-dice-4-fill me-2"></i>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {hobbiesHeading}
                                </h3>
                            </div>
                            {Hobbies[0].map((hobb, index) => (
                                <div key={index}>
                                    <p
                                        style={{
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {hobb.hobbies}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="about-me">
                            <hr />
                            <div className="contact">
                                <i className="bi bi-person-lines-fill me-2"></i>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {aboutHeading}
                                </h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <b>Date of Birth:</b>{' '}
                                    <p
                                        style={{
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            color: fontColor,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {personalInfo.dateofbirth}
                                    </p>
                                </div>
                                <div>
                                    <b>Marital Status:</b>{' '}
                                    <p
                                        style={{
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            color: fontColor,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {personalInfo.maritalstatus}
                                    </p>
                                </div>
                                <div>
                                    <b>Nationality:</b>{' '}
                                    <p
                                        style={{
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            color: fontColor,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {personalInfo.nationality}
                                    </p>
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
                    elementId="Alish_mirza1"
                />
            </div>
            <GoogleAd />
        </div>
    );
};

export default Preview11;