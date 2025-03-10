import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../previewfolder/CSS/preview13.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview13 = () => {
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
    const [experienceHeading, setExperienceHeading] = useState('Job Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview13-specific section

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
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

    const lineStyle = {
        height: '3px',
        width: '50%',
        background: 'linear-gradient(to right, black 25%, white 75%)',
        margin: `${sectionSpacing}px auto`,
        borderRadius: '5px',
        border: '1px solid grey',
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
            <div className="main13">
                <div
                    className="me-4 resume-13"
                    style={{
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        width: '100%',
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    id="Alish_mirza1"
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="d-flex justify-content-around resume-namediv13">
                        <div className="text-center name-div13">
                            <h3
                                className="pt-5"
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    lineHeight: `${lineSpacing}em`,
                                    whiteSpace: 'nowrap',
                                    fontWeight: '800',
                                    textAlign: 'end',
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
                            >
                                {work[0][0].jobtitle}
                            </p>
                        </div>
                        <div className="image-div13">
                            <img src={personalInfo.image} className="m-2 image13" alt="Selected" />
                        </div>
                    </div>
                    <hr />

                    <div className="d-flex justify-content-between resume-main-2">
                        <div className="ms-3 resume-main-2-1" style={{ padding: `${padding}px` }}>
                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                <i className="bi bi-person-lines-fill me-2"></i> {contactHeading}
                            </h5>
                            <div className="mb-4" style={lineStyle}></div>
                            <div className="contact-div13">
                                <div className="d-flex">
                                    <div
                                        className="me-2 mb-3 div1"
                                        style={{ borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                                    >
                                        <i className="bi bi-telephone-fill"></i>
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
                                    <div className="me-2 div1">
                                        <i className="bi bi-envelope" style={{ color: fontColor, fontSize: `${fontSize}px` }}></i>
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                wordBreak: 'break-all',
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {personalInfo.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-2 div1">
                                        <i
                                            className="bi bi-geo-alt-fill"
                                            style={{ color: fontColor, fontSize: `${fontSize}px` }}
                                        ></i>
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
                                            {personalInfo.address} {personalInfo.city} {personalInfo.state}{' '}
                                            {personalInfo.postalCode}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-2 div1">
                                        <i className="bi bi-linkedin" style={{ color: fontColor, fontSize: `${fontSize}px` }}></i>
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
                                            {sMedia[0].linkedin}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginTop: `${sectionSpacing}px`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                                className="mt-5"
                            >
                                <i className="bi bi-journal-code me-2"></i> {educationHeading}
                            </h5>
                            <div className="mb-4" style={lineStyle}></div>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-div13" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{edu.univercity}</b>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <u>{edu.type}</u>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                </div>
                            ))}

                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginTop: `${sectionSpacing}px`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                                className="mt-5"
                            >
                                <i className="bi bi-mortarboard-fill me-2" style={{ color: '#082f36cc' }}></i> {skillsHeading}
                            </h5>
                            <div className="mb-4" style={lineStyle}></div>
                            <div className="row skills-div13">
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="col-6 d-flex justify-content-between">
                                        <div>
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="ms-3 me-3" style={{ width: '3px', height: '800px', backgroundColor: 'grey' }}></div>

                        <div className="me-3 resume-main-2-2" style={{ padding: `${padding}px` }}>
                            <div>
                                <h5
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
                                    <i className="bi bi-people-fill me-2"></i> <b>{aboutHeading}</b>
                                </h5>
                                <div className="mb-4" style={lineStyle}></div>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    <b>Date of birth:</b> {personalInfo.dateofbirth}
                                </p>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    <b>Marital Status:</b> {personalInfo.maritalstatus}
                                </p>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    <b>Nationality:</b> {personalInfo.nationality}
                                </p>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        textAlign: 'justify',
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {personalInfo.object}
                                </p>
                            </div>

                            <div>
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Job Experience', setExperienceHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginTop: `${sectionSpacing}px`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="mt-4"
                                >
                                    <i className="bi bi-person-workspace me-2"></i> {experienceHeading}
                                </h5>
                                <div className="mb-4" style={lineStyle}></div>
                                {work[0].map((works, index) => (
                                    <div key={index} className="mt-2" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div>
                                            <div>
                                                <p
                                                    style={{
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        whiteSpace: 'nowrap',
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    <b>{works.jobtitle}</b>
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p
                                                        style={{
                                                            color: fontColor,
                                                            fontFamily: fontStyle,
                                                            fontSize: `${fontSize}px`,
                                                            lineHeight: `${lineSpacing}em`,
                                                        }}
                                                    >
                                                        {works.organization}
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
                                                        {works.startYear}-{works.endYear}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p
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
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex justify-content-between mt-5">
                                <div className="">
                                    <h5
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
                                        <i className="bi bi-translate me-2"></i> {languageHeading}
                                    </h5>
                                    <div className="mb-4" style={lineStyle}></div>
                                    <div className="row language13">
                                        {LLanguage[0].map((keys, index) => (
                                            <div key={index} className="language-inner13">
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
                                </div>
                                <div className="row hobbies-div13">
                                    <h5
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
                                        <i className="bi bi-controller me-2"></i> {hobbiesHeading}
                                    </h5>
                                    <div className="mb-4" style={lineStyle}></div>
                                    <div className="row">
                                        {Hobbies[0].map((keys, index) => (
                                            <div key={index} className="hobbies-inner13">
                                                <p
                                                    className="d-sm-flex"
                                                    style={{
                                                        whiteSpace: 'nowrap',
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

export default Preview13;