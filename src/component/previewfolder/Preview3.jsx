import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/Preview3.css'; // Import the CSS file
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview3 = () => {
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

    // Editable headings
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
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Fixed typo: addHobies -> addHobbies

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
            <div className="container3">
                <div
                    className="resume-wrapper"
                    id="Alish_mirza1"
                    contentEditable
                            suppressContentEditableWarning
                    style={{
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                >
                    <div className="sidebar">
                        <div className="imagediv3" style={{ marginBottom: `${sectionSpacing}px` }}>
                            <img src={personalInfo.image} alt="Selected" className="image3" />
                        </div>
                        <div className="contactdiv" style={{ color: fontColor }}>
                            <h6
                                className="section-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {contactHeading}
                            </h6>
                            <hr style={{ width: '100%' }} />
                            <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <i className="bi bi-telephone-forward-fill icon" /> {personalInfo.mobileNumber}
                            </p>
                            <p
                                className="email"
                                style={{
                                    color: fontColor,
                                    wordBreak: 'break-all',
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                <i className="bi bi-envelope-at-fill icon" /> {personalInfo.email}
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                <i className="bi bi-geo-alt-fill icon" /> {personalInfo.state} {personalInfo.city} {personalInfo.postalCode}
                            </p>

                            <h6
                                className="section-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {educationHeading}
                            </h6>
                            <hr />
                            {education[0].map((edu, index) => (
                                <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{edu.type}</p>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <b>{edu.univercity}</b>
                                    </p>
                                </div>
                            ))}

                            <h6
                                className="section-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {skillsHeading}
                            </h6>
                            <hr />
                            {keyskills[0].map((skill, index) => (
                                <div key={index}>
                                    <ul>
                                        <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{skill.keyskills}</li>
                                    </ul>
                                </div>
                            ))}

                            <h6
                                className="section-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {languageHeading}
                            </h6>
                            <hr />
                            {LLanguage[0].map((lan, index) => (
                                <div key={index}>
                                    <ul>
                                        <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{lan.language}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="main-content" style={{ padding: `${padding}px` }}>
                        <h4
                            style={{
                                fontSize: `${headingSize * 1.2}px`,
                                color: headingColor,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.firstName} {personalInfo.lastName}
                        </h4>
                        <div className="work-experience" style={{ marginBottom: `${sectionSpacing}px` }}>
                            {work[0].map((i, index) => (
                                <p
                                    key={index}
                                    style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                >
                                    {i.jobtitle}
                                </p>
                            ))}
                        </div>
                        <h6
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {objectHeading}
                        </h6>
                        <hr />
                        <p
                            style={{
                                textAlign: 'justify',
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.object}
                        </p>

                        <h6
                            className="section-title"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {experienceHeading}
                        </h6>
                        {work[0].map((i, index) => (
                            <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{i.jobtitle}</b>
                                </p>
                                <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{i.organization}</b>
                                </p>
                                <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{i.startYear}-{i.endYear}</b>
                                </p>
                            </div>
                        ))}

                        <h6
                            className="section-title"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {hobbiesHeading}
                        </h6>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{hobb.hobbies}</li>
                                </ul>
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
                    elementId="Alish_mirza1"
                />
            </div>
            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview3;