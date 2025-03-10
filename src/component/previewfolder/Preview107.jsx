import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview107.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview107 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview107-specific sections)
    const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skills');
    const [hardSkillsHeading, setHardSkillsHeading] = useState('Hard Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [interestHeading, setInterestHeading] = useState('Interest');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [certificationHeading, setCertificationHeading] = useState('Certification');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const certi = useSelector((state) => state.reducer.certificateData);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const project = useSelector((state) => [state.reducer.projectData]);

    console.log('hobbies preview 107:-', Hobbies);
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
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
            <div className="main107">
                <div
                    className="preview107"
                    id="Alisha_mirza107"
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
                    <div className="header107">
                        <div className="imagediv107">
                            <img className="image107" src={personalInfo.image} alt="doctor resume" />
                        </div>
                        <div className="profilediv107">
                            <h3
                                style={{
                                    whiteSpace: 'nowrap', // Corrected from 'none'
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
                                    whiteSpace: 'nowrap', // Corrected from 'none'
                                    fontWeight: 600,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {work[0][0].jobtitle}
                            </p>
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
                        <div className="contactdiv107">
                            <div className="d-flex">
                                <div>
                                    <i className="bi bi-telephone-fill me-2 ms-2" />
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
                                    <i className="bi bi-envelope me-2 ms-2" />
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
                                    <i className="bi bi-geo-alt-fill me-2 ms-2" />
                                </div>
                                <div>
                                    <p
                                        className="mt-3"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            wordBreak: 'break-all',
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <i className="bi bi-github ms-2 me-2" />
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
                    <div className="d-flex mt-4">
                        <div className="me-4" style={{width: '50%', padding: `${padding}px` }}>
                            <h6
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Soft Skills', setSoftSkillsHeading)}
                                className="heading107"
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {softSkillsHeading} <br />
                                <hr style={{ width: 'inherit' }} />
                            </h6>
                            <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                {SoftSkill && SoftSkill.length > 0 && SoftSkill[0].map((soft, index) => (
                                    <li key={index} className="d-flex" style={{ marginLeft: '-50px' }}>
                                        <div>
                                            <span
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    marginRight: '8px',
                                                }}
                                            >
                                                ✔
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {soft.softSkill}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Hard Skills', setHardSkillsHeading)}
                                    className="heading107"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {hardSkillsHeading} <br />
                                    <hr style={{ width: 'inherit' }} />
                                </h6>
                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {keyskills && keyskills.length > 0 && keyskills[0].map((hard, index) => (
                                        <li key={index} className="d-flex" style={{ marginLeft: '-50px' }}>
                                            <div>
                                                <span
                                                    style={{
                                                        marginRight: '8px',
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                    }}
                                                >
                                                    ✔
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                {hard.keyskills}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                    className="heading107"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {languageHeading} <br />
                                    <hr style={{ width: 'inherit' }} />
                                </h6>
                                <ul className="custom-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {languages && languages.length > 0 && languages[0].map((hard, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span
                                                    style={{
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {hard.language}
                                                </span>
                                                <div
                                                    style={{
                                                        height: '8px',
                                                        width: '100px',
                                                        background: '#e0e0e0',
                                                        position: 'relative',
                                                        marginLeft: '10px',
                                                        borderRadius: '4px',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            height: '100%',
                                                            width: `${(hard.rating / 5) * 100}%`,
                                                            background: 'green',
                                                            borderRadius: '4px',
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Interest', setInterestHeading)}
                                    className="heading107"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {interestHeading} <br />
                                    <hr style={{ width: 'inherit' }} />
                                </h6>
                                <ul className="custom-list" style={{ listStyleType: 'none' }}>
                                    {Hobbies && Hobbies.length > 0 && Hobbies[0].map((hard, index) => (
                                        <li key={index} className="d-flex" style={{ marginLeft: '-50px' }}>
                                            <div>
                                                <span
                                                    style={{
                                                        color: fontColor,
                                                        marginRight: '10px',
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                    }}
                                                >
                                                    ✔
                                                </span>
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
                                                    {hard.hobbies}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '50%', padding: `${padding}px` }}>
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    className="heading107"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {educationHeading} <br />
                                    <hr style={{ width: '100%' }} />
                                </h6>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item107" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p
                                                    className="employment-detail107 me-3"
                                                    style={{
                                                        whiteSpace: 'nowrap', // Corrected from 'none'
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {edu.startYear}-{edu.endYear}
                                                </p>
                                            </div>
                                            <div>
                                                <p
                                                    className="employment-detail107"
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
                                                    className="employment-detail107"
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
                                                >
                                                    {edu.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Certification', setCertificationHeading)}
                                    className="heading107"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {certificationHeading} <br />
                                    <hr style={{ width: 'inherit' }} />
                                </h6>
                                {certi.map((edu, index) => (
                                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p
                                                    className="me-3"
                                                    style={{
                                                        whiteSpace: 'nowrap', // Corrected from 'none'
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {edu.issueDate}
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
                                                    {edu.organization}
                                                </p>
                                                <p
                                                    style={{
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
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
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {edu.city}
                                                </p>
                                            </div>
                                        </div>
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
                    elementId="Alisha_mirza107"
                />
            </div>
            <div className="w-100">
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview107;