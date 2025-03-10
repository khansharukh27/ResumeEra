import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview108.css'; // Assuming a corresponding CSS file exists
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview108 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#000000'); // Default font color
    const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3 and extended for Preview108-specific sections)
    const [experienceHeading, setExperienceHeading] = useState('Work Experience');
    const [skillsHeading, setSkillsHeading] = useState('Skill');
    const [certificatesHeading, setCertificatesHeading] = useState('Certificates');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [languageHeading, setLanguageHeading] = useState('Language');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const certi = useSelector((state) => state.reducer.certificateData);

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
            <div className="main108">
                <div
                    className="Alisha"
                    id="Alisha_mirza108"
                    style={{
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        color: fontColor,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="name108">
                        <h3
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
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            {work[0][0].jobtitle}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.object}
                        </p>
                    </div>
                    <hr className="hrtop" />
                    <div className="contact108">
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
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
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-telephone-fill me-2 ms-2" />
                            {personalInfo.mobileNumber}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
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
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-linkedin me-2 ms-2" />
                            {socialMediaLink?.[0]?.linkedin || 'N/A'}
                        </p>
                    </div>
                    <hr className="hrbottom" />
                    <div className="d-flex justify-content-around" style={{ backgroundColor: bgColor }}>
                        <div className="experience-section108" style={{ padding: `${padding}px` }}>
                            <h4
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                                className="details-title108"
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
                                <div key={index} className="employment-history108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div className="exp-inner108">
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                                            <br />
                                            {works.organization} {works.city || 'N/A'}
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            <i>{works.startYear} - {works.endYear}</i>
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            {works.aboutexperience}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ms-4" style={{ padding: `${padding}px` }}>
                            <div className="technical-skills-title108">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {skillsHeading}
                                </h4>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item108">
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.keyskills}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="technical-skills-title108 mt-2">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Certificates', setCertificatesHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {certificatesHeading}
                                </h4>
                                {certi.map((keys, index) => (
                                    <div key={index} className="certificate-item108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            <b>{keys.certificateName}</b>
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.organization}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="education-section108 mt-3">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    className="details-title108"
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
                                    <div key={index} className="education-item108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="certificate-item108">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    fontFamily: fontStyle,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail108"
                                            >
                                                {edu.degree}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    fontFamily: fontStyle,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail108"
                                            >
                                                {edu.univercity}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    fontFamily: fontStyle,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail108"
                                            >
                                                {edu.startYear} - {edu.endYear}, {edu.city}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="language-108">
                                <h4
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
                                </h4>
                                {languages[0].map((keys, index) => (
                                    <div key={index} className="language-item108">
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.language}
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
                    elementId="Alisha_mirza108"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview108;