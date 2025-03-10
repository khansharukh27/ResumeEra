import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview4.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview4 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('black'); // Default font color
    const [headingColor, setHeadingColor] = useState('black'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3)
    const [contactHeading, setContactHeading] = useState('Contact');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [objectHeading, setObjectHeading] = useState('Object');
    const [experienceHeading, setExperienceHeading] = useState('Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo

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
            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="preview-container4 d-sm-flex justify-content-between">
                <div
                    className="resume-preview4 mb w-100"
                    style={{
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    id="Alish_mirza1"
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="">
                        <div className="resume-header4" style={{ width: '100%', position: 'relative' }}>
                            <div className="header-shapes4 d-flex justify-content-between" style={{ width: '100%' }}>
                                <div className="shape-left4" style={{ backgroundColor: '#100129', width: '100px', height: '100px' }}></div>
                                <div className="shape-right4"></div>
                            </div>
                            <div className="personal-info mt-5" style={{ position: 'absolute', top: '20px', left: '20px' }}>
                                <img
                                    src={personalInfo.image}
                                    className="personal-image"
                                    alt="Selected"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid white' }}
                                />
                                <h3
                                    className="first-name"
                                    style={{
                                        color: headingColor,
                                        position: 'absolute',
                                        top: '20px',
                                        left: '150px',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {personalInfo.firstName}
                                </h3>
                                <h3
                                    className="last-name"
                                    style={{
                                        color: headingColor,
                                        position: 'absolute',
                                        top: '50px',
                                        left: '250px',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {personalInfo.lastName}
                                </h3>
                                <p
                                    className="job-title"
                                    style={{
                                        position: 'absolute',
                                        top: '100px',
                                        left: '150px',
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {work[0].map((i, index) => (
                                        <div key={index} style={{ color: fontColor }}>
                                            {i.jobtitle}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div className="resume-body d-flex mt-3 justify-content-between w-100">
                            <div className="left-column me-4 w-50" style={{ marginTop: '110px', padding: `${padding}px` }}>
                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {contactHeading}
                                </h4>
                                <div className="contact-content">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="contact-inf"
                                    >
                                        <i className="bi bi-telephone-forward-fill me-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
                                        {personalInfo.mobileNumber}
                                    </p>
                                    <p
                                        className="email"
                                        style={{
                                            wordWrap: 'break-word',
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <i className="bi bi-envelope-at-fill me-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
                                        {personalInfo.email}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                        className="address"
                                    >
                                        <i className="bi bi-geo-alt-fill me-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
                                        {personalInfo.state} {personalInfo.city} {personalInfo.postalCode}
                                    </p>
                                </div>

                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {objectHeading}
                                </h4>
                                <div className="object-content">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                        className="objective ms-2"
                                    >
                                        {personalInfo.object}
                                    </p>
                                </div>

                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {languageHeading}
                                </h4>
                                <div className="language-content">
                                    {LLanguage[0].map((lan, index) => (
                                        <ul key={index}>
                                            <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{lan.language}</li>
                                        </ul>
                                    ))}
                                </div>

                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {skillsHeading}
                                </h4>
                                <div className="skills-content">
                                    {keyskills[0].map((skill, index) => (
                                        <ul key={index}>
                                            <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{skill.keyskills}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>

                            <div className="right-column w-50" style={{ marginTop: '70px', padding: `${padding}px` }}>
                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {experienceHeading}
                                </h4>
                                <div className="experience-content">
                                    {work[0].map((i, index) => (
                                        <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                            <p
                                                style={{
                                                    marginBottom: '2px',
                                                    whiteSpace: 'nowrap',
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                <b>{i.jobtitle}</b>
                                            </p>
                                            <p
                                                style={{
                                                    marginBottom: '2px',
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                <b>{i.organization}</b>
                                            </p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                                <b>{i.startYear}-{i.endYear}</b>
                                            </p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{i.aboutexperience}</p>
                                        </div>
                                    ))}
                                </div>

                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {educationHeading}
                                </h4>
                                <div className="education-content">
                                    {education[0].map((edu, index) => (
                                        <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}><b>{edu.degree}</b></p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}><b>{edu.univercity}</b></p>
                                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}><b>{edu.startYear}-{edu.endYear}</b></p>
                                        </div>
                                    ))}
                                </div>

                                <h4
                                    className="section-title text-center"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                                    style={{
                                        color: headingColor,
                                        backgroundColor: '#100129',
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {hobbiesHeading}
                                </h4>
                                <div className="hobbies-content">
                                    {Hobbies[0].map((hobby, index) => (
                                        <ul key={index}>
                                            <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{hobby.hobbies}</li>
                                        </ul>
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
                    elementId="Alish_mirza1"
                />
            </div>
            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview4;