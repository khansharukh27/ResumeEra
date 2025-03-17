import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview6.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview6 = () => {
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
    const [contactHeading, setContactHeading] = useState('Contact');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [objectHeading, setObjectHeading] = useState('Object');
    const [experienceHeading, setExperienceHeading] = useState('Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview6-specific section

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink]);

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

            <div className="preview6-main">
                <div
                    className="resume-preview6"
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
                    <div className="name-div">
                        <h5
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="pt-5 ms-5"
                        >
                            <b>{personalInfo.firstName} {personalInfo.lastName}</b>
                        </h5>
                        <p className="ms-5" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                            {work.map((works, index) => (
                                <div key={index}>
                                    <p>{works[0].jobtitle}</p>
                                </div>
                            ))}
                        </p>
                    </div>

                    <div className="information-section6 ms-5" style={{ color: 'grey', marginBottom: `${sectionSpacing}px` }}>
                        <h5
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
                        </h5>
                        <div className="d-flex inner-information6">
                            <div className="mt-2 me-3">
                                <b>
                                    <i className="bi bi-telephone-forward-fill"></i> {personalInfo.mobileNumber}
                                </b>
                            </div>
                            <div className="mt-2 me-3">
                                <b>
                                    <i className="bi bi-geo-alt-fill"></i> {personalInfo.city} {personalInfo.state}
                                </b>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between inner-information6">
                            <div className="mt-2 me-3" style={{ whiteSpace: 'nowrap' }}>
                                <b>
                                    <i className="bi bi-envelope-at"></i> {personalInfo.email}
                                </b>
                            </div>
                            <div className="mt-2 me-3">
                                <b>
                                    {sMedia?.[0]?.linkedin && (
                                        <>
                                            <i className="bi bi-linkedin" /> {sMedia[0].linkedin}
                                        </>
                                    )}
                                </b>
                            </div>
                        </div>
                    </div>

                    <div className="job-experience6 mt-4 ms-5">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="job-heading6"
                        >
                            {experienceHeading}
                        </h5>
                        <hr />
                        {work.map((works, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <p>{works[0].jobtitle}</p>
                                        <p>{works[0].startYear}-{works[0].endYear}</p>
                                        <p>{works[0].organization}</p>
                                        <p>{works[0].aboutexperience}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="ms-5 education-section6">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="mt-5 education-heading6"
                        >
                            {educationHeading}
                        </h5>
                        <hr />
                        {education[0].map((edu, index) => (
                            <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{edu.univercity}</b>
                                </p>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{edu.type}</p>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                    </div>

                    <div className="ms-5 mt-4 hobbies-section6">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="hobbies-heading6"
                        >
                            {hobbiesHeading}
                        </h5>
                        <hr />
                        <div className="row">
                            {Hobbies[0].map((hobb, index) => (
                                <div key={index} className="col-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{hobb.hobbies}</p>
                                            <hr style={{ height: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ms-5 mt-4 skills-section6">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="skills-heading6"
                        >
                            {skillsHeading}
                        </h5>
                        <hr />
                        <div className="row">
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="col-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{keys.keyskills}</p>
                                            <hr style={{ height: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="language-section6 mt-4 ms-5">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="language-heading6"
                        >
                            <i className="bi bi-translate me-2" /> {languageHeading}
                        </h5>
                        <hr />
                        <div className="row">
                            {LLanguage[0].map((lan, index) => (
                                <div key={index} className="col-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{lan.language}</p>
                                            <hr style={{ height: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-section6 mt-5 ms-5">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="about-heading6"
                        >
                            {aboutHeading}
                        </h5>
                        <hr />
                        <div className="about-inner-div6">
                            <div>
                                <b>Date of Birth:- </b>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.dateofbirth}</p>
                                <hr style={{ height: '5px' }} />
                            </div>
                            <div>
                                <b>Marital Status:- </b>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.maritalstatus}</p>
                                <hr style={{ height: '5px' }} />
                            </div>
                            <div>
                                <b>Nationality:- </b>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.nationality}</p>
                                <hr style={{ height: '5px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="ms-5 mt-4">
                        <h5
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
                        </h5>
                        <hr />
                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                            {personalInfo.object}
                        </p>
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

export default Preview6;