import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview14.css';
import imagepng from './imagepng.png';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview14 = () => {
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
    const [experienceHeading, setExperienceHeading] = useState('Job Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview14-specific section

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]); // Corrected typo
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    // const sMedia = useSelector((state) => [state.reducer.socialMediaLink[0]]); // Incorrect syntax, commented out as in original

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
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>

            <div className="d-sm-flex justify-content-between main14 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="Resume14"
                    id="Alish_mirza1"
                    style={{
                        height: 'auto',
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="d-flex justify-content-between faltu14">
                        <div className="main1-14" style={{ padding: `${padding}px` }}>
                            <div className="d-flex images14 mt-2 ms-2">
                                <img src={personalInfo.image} className="" alt="Selected" />
                            </div>
                            <div className="mt-2 ms-1 local">
                                <div>
                                    <img className="circle-div" src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                                    <div className="localinner"></div>
                                </div>
                                <div>
                                    <h3
                                        style={{
                                            lineHeight: `${lineSpacing}em`,
                                            whiteSpace: 'nowrap',
                                            fontWeight: '500',
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                    >
                                        {personalInfo.firstName}
                                    </h3>
                                    <h3
                                        style={{
                                            fontWeight: '800',
                                            color: headingColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                            lineHeight: `${lineSpacing}em`,
                                            marginBottom: `${sectionSpacing}px`,
                                        }}
                                    >
                                        {personalInfo.lastName}
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
                            </div>
                            <div className="local ms-1">
                                <div>
                                    <img className="circle-div" src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                                    <div className="localinner"></div>
                                </div>
                                <div className="contact-div14">
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
                                        className="heading14"
                                    >
                                        <i className="bi bi-person-lines-fill me-1"></i> {contactHeading}
                                    </h5>
                                    <div>
                                        <div className="d-flex">
                                            <div
                                                className="me-1"
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
                                            <div className="me-1">
                                                <i className="bi bi-envelope"></i>
                                            </div>
                                            <div style={{ width: 'inherit', wordBreak: 'break-word' }}>
                                                <p
                                                    style={{
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
                                            <div className="me-1">
                                                <i className="bi bi-geo-alt-fill"></i>
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
                                                    {personalInfo.city} {personalInfo.state}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="local ms-1">
                                <div>
                                    <img className="circle-div" src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                                    <div className="localinner"></div>
                                </div>
                                <div>
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
                                        className="heading14"
                                    >
                                        <i className="bi bi-translate me-1"></i> {languageHeading}
                                    </h5>
                                    {LLanguage[0].map((keys, index) => (
                                        <div key={index} className="d-flex justify-content-between">
                                            <div>
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
                                            <div className="star-rating ms-3 w-50">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                                                        style={{ color: i < keys.rating ? '#ffc150' : 'grey' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="local ms-1">
                                <div>
                                    <img className="circle-div" src={imagepng} alt="png" style={{ width: '10px', height: '10px' }} />
                                    <div className="localinner"></div>
                                </div>
                                <div>
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
                                        className="heading14"
                                    >
                                        <i className="bi bi-controller me-1"></i> {hobbiesHeading}
                                    </h5>
                                    {Hobbies[0].map((keys, index) => (
                                        <div key={index} className="d-flex justify-content-between">
                                            <div>
                                                <p
                                                    style={{
                                                        color: fontColor,
                                                        fontFamily: fontStyle,
                                                        fontSize: `${fontSize}px`,
                                                        lineHeight: `${lineSpacing}em`,
                                                    }}
                                                >
                                                    {keys.hobbies}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="devider14" style={{ width: '5px', height: '100%', margin: '5px' }}></div>
                        <div className="main2-14" style={{ padding: `${padding}px` }}>
                            <div className="about-div14">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginTop: `${sectionSpacing}px`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="mt-5 heading14"
                                >
                                    {aboutHeading}
                                </h5>
                                <div style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                                <div className="row">
                                    <div className="d-sm-flex justify-content-between">
                                        <div>
                                            <i
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                Date of Birth:-
                                            </i>{' '}
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                {personalInfo.dateofbirth}
                                            </p>
                                            <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                        </div>
                                        <div>
                                            <i
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                Marital Status:-
                                            </i>{' '}
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                {personalInfo.maritalstatus}
                                            </p>
                                            <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                        </div>
                                        <div>
                                            <i
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                Nationality:-
                                            </i>{' '}
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                {personalInfo.nationality}
                                            </p>
                                            <hr style={{ height: '5px', backgroundColor: 'grey' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 pb-2">
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
                                    className="mt-2 heading14"
                                >
                                    <i className="bi bi-journal-code me-1"></i> {educationHeading}
                                </h5>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="" style={{ marginBottom: `${sectionSpacing}px` }}>
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
                                            {edu.type}
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
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading14"
                                >
                                    <i className="bi bi-person-workspace me-1"></i> {experienceHeading}
                                </h5>
                                {work[0].map((works, index) => (
                                    <div key={index} className="d-flex justify-content-between mt-2" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                            >
                                                <b>{works.jobtitle}</b>
                                            </p>
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
                                ))}
                            </div>
                            <div className="skill14">
                                <h5
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
                                    className="heading14"
                                >
                                    <i className="bi bi-mortarboard-fill me-1" style={{ color: '#082f36cc' }}></i>{' '}
                                    {skillsHeading}
                                </h5>
                                <div className="row">
                                    {keyskills[0].map((keys, index) => (
                                        <div key={index} className="col-12 d-sm-flex justify-content-around">
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
                                            <div className="star-rating ms-3 w-50">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                                                        style={{ color: i < keys.rating ? '#ffc150' : 'grey' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginTop: `${sectionSpacing}px`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading14"
                                >
                                    <i className="bi bi-vector-pen me-1"></i> {objectHeading}
                                </h5>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        textAlign: 'justify',
                                    }}
                                >
                                    {personalInfo.object}
                                </p>
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
        </div>
    );
};

export default Preview14;