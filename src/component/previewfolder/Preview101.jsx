import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview101.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview101 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview101-specific sections)
    const [contactHeading, setContactHeading] = useState('Contact');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [skillsHeading, setSkillsHeading] = useState('Skill');
    const [experienceHeading, setExperienceHeading] = useState('Work-Experience');
    const [referenceHeading, setReferenceHeading] = useState('Reference');
    const [profileSummaryHeading, setProfileSummaryHeading] = useState('Profile Summary');
    const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
    const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward]);
    const Refrence = useSelector((state) => [state.reducer.addReference]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink]);
    const languages = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const project = useSelector((state) => [state.reducer.projectData]);

    console.log('hobbies preview 101:-', Hobbies);
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
            <h1 style={{ fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, textAlign: 'center' }}>
                ResumeReady created by ResumeEra
            </h1>
            <GoogleAd />
            <div className="mainn101">
                <div
                    id="Alisha_mirza301"
                    className="preview101"
                    style={{
                        color: fontColor,
                        fontFamily: fontStyle,
                        backgroundColor: bgColor,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="preview101-1" style={{ width: '50%', padding: `${padding}px` }}>
                        <div className="imagediv101">
                            <img className="image101" src={personalInfo ? personalInfo.image : null} alt="Selected" />
                            <h3
                                className="personal-name101"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {personalInfo.firstName} <br /> {personalInfo.lastName}
                            </h3>
                            {work.map((works, index) => (
                                <p
                                    key={index}
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {works.jobtitle}
                                </p>
                            ))}
                        </div>
                        <div className="profile-summary-section101">
                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Profile Summary', setProfileSummaryHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                                className="profile-summary-title101"
                            >
                                <i className="bi bi-person-circle me-3" /> {profileSummaryHeading}
                            </h5>
                            <p
                                className="profile-summary-content101"
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
                        <div className="contact101">
                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                <i className="bi bi-person-lines-fill me-3" /> {contactHeading}
                            </h5>
                            <p
                                style={{
                                    color: fontColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                <i className="bi bi-telephone-fill me-2"></i>
                                {personalInfo.mobileNumber}
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    wordBreak: 'break-all',
                                }}
                            >
                                <i className="bi bi-envelope me-2"></i>
                                {personalInfo.email}
                            </p>
                        </div>
                        <div className="reference101">
                            {Refrence && Refrence[0].map((ref, index) => (
                                <div key={index}>
                                    <h5
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleEdit(e, 'Reference', setReferenceHeading)}
                                        style={{
                                            color: headingColor,
                                            fontSize: `${headingSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                    >
                                        <i className="bi bi-person-fill-gear me-3" /> {referenceHeading}
                                    </h5>
                                    <div className="mbk-2">
                                        <p
                                            className=""
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <b>{ref.name}</b>
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {ref.position}
                                        </p>
                                    </div>
                                    <p
                                        className="ms-4"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        {ref.contact}
                                    </p>
                                    <p
                                        className="ms-4"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <i className="bi bi-envelope me-2"></i>
                                        {ref.email}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="preview101-2" style={{ width: '50%', padding: `${padding}px` }}>
                        <div className="experience-section101">
                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Work-Experience', setExperienceHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                    wordBreak: 'normal', // Corrected from 'none'
                                }}
                                className="details-title101"
                            >
                                <i className="bi bi-person-workspace me-3"></i> {experienceHeading}
                            </h5>
                            {work[0].map((works, index) => (
                                <div key={index} className="employment-history101 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div className="exp-inner101">
                                        <p
                                            className="employment-duration101"
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {works.startYear} - {works.endYear}
                                        </p>
                                        <p style={{ lineHeight: `${lineSpacing}em` }}>/</p>
                                        <p
                                            className="employment-detail101"
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            <b>{works.organization}</b>
                                            <br />
                                            {works.jobtitle}
                                        </p>
                                    </div>
                                    <p
                                        className="aboutexperience101"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {works.aboutexperience}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="education-section101">
                            <h5
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
                                className="details-title101"
                            >
                                <i className="bi bi-book me-3"></i> {educationHeading}
                            </h5>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-item101 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div className="education-degree101">
                                        <span
                                            className="education-duration101"
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {edu.startYear} - {edu.endYear}
                                        </span>
                                        <span
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {edu.degree} <br />
                                            <br />
                                            {edu.univercity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="skill-section101 mt-3">
                            <h5
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
                                <i className="bi bi-gear-wide-connected me-3"></i> {skillsHeading}
                            </h5>
                            <div className="inner-101-1 ms-4">
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize - 2}px`, // Slightly smaller than h5
                                        fontFamily: fontStyle,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="technical-skills-title101"
                                >
                                    <i className="bi bi-person-fill-gear"></i> {technicalSkillsHeading}
                                </h6>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item101 d-flex justify-content-between">
                                        <p
                                            style={{
                                                marginTop: '10px',
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.keyskills}
                                        </p>
                                        <div className="star-rating ms-3 w-50">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi bi-star${i < keys.rating ? '-fill' : ''} star101`}
                                                    style={{ color: i < keys.rating ? '#ffc150' : 'grey' }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row inner-101-1">
                                <h6
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Soft Skill', setSoftSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize - 2}px`, // Slightly smaller than h5
                                        fontFamily: fontStyle,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="soft-skills-title101"
                                >
                                    <i className="bi bi-person-fill-gear"></i> {softSkillsHeading}
                                </h6>
                                {SoftSkill[0].map((soft, index) => (
                                    <div key={index} className="col-4 ms-2">
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
                    elementId="Alisha_mirza301"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview101;