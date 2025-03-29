import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview10.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview10 = () => {
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
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview10-specific section

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
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, yellow 75%, darkgrey 75%)',
        margin: `${sectionSpacing}px auto`,
        borderRadius: '5px',
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
            <div>
                <GoogleAd />
            </div>
            <div className="d-sm-flex resume-10 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="resume-preview10"
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
                    <div className="main10" style={{ backgroundColor: 'grey', padding: `${padding}px` }}>
                        <div style={{ backgroundColor: 'black', color: 'white' }} className="main1-div10">
                            <div className="imagediv-inner10">
                                <img src={personalInfo.image} className="image10" alt="Selected" />
                            </div>
                            <div className="jobtite10">
                                <p
                                    className="mb-5 p-2"
                                    style={{
                                        backgroundColor: 'yellow',
                                        color: 'black',
                                        borderRadius: '5px',
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {work[0][0].jobtitle}
                                </p>
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
                                    className="education10"
                                >
                                    {educationHeading}
                                </h5>
                                <div style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                                {education[0].map((edu, index) => (
                                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontFamily: fontStyle,
                                                fontSize: `${fontSize}px`,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="work-year10"
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
                                            className="work-year10"
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
                                            className="work-year10"
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
                                            className="work-year10"
                                        >
                                            {edu.startYear} - {edu.endYear}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
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
                                className="heading"
                            >
                                {skillsHeading}
                            </h5>
                            <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div className="row">
                                {keyskills[0].map((keys, index) => (
                                    <div className="d-flex justify-content-around" key={index}>
                                        <div>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="mt-2"
                                            >
                                                {keys.keyskills}
                                            </p>
                                        </div>
                                        <div style={lineStyle}></div>
                                    </div>
                                ))}
                            </div>

                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                    marginTop: `${sectionSpacing}px`,
                                }}
                            >
                                {contactHeading}
                            </h5>
                            <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                            <div>
                                <div className="d-flex">
                                    <div
                                        className="me-2"
                                        style={{ backgroundColor: 'yellow', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                    >
                                        <i className="bi bi-telephone-fill me-2 p-1"></i>
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
                                    <div className="me-2" style={{ backgroundColor: 'yellow' }}>
                                        <i className="bi bi-envelope me-2 p-1"></i>
                                    </div>
                                    <div style={{ wordBreak: 'break-word' }}>
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
                                    <div className="me-2" style={{ backgroundColor: 'yellow' }}>
                                        <i className="bi bi-geo-alt-fill me-2 p-1"></i>
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
                                            {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div
                                        className="me-2"
                                        style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
                                    >
                                        <i className="bi bi-linkedin me-2 p-1"></i>
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
                        </div>
                    </div>

                    <div className="main2-10" style={{ padding: `${padding}px` }}>
                        <div className="p-2 mb-3 name-div10">
                            <h3
                                className="pt-5"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {personalInfo.firstName} {personalInfo.lastName}
                            </h3>
                            <p className="mb-5">
                                <i
                                    className="p-1"
                                    style={{
                                        backgroundColor: 'yellow',
                                        borderRadius: '5px',
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {work[0][0].jobtitle}
                                </i>
                            </p>
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
                            <p
                                style={{
                                    textAlign: 'justify',
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

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                            style={{
                                fontFamily: fontStyle,
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {experienceHeading}
                        </h5>
                        <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {work[0].map((works, index) => (
                            <div key={index} className="d-flex justify-content-around mt-2 job-experience" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div style={{ height: '100px', width: '4px', backgroundColor: 'yellow' }}></div>
                                <div>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="work-title10"
                                    >
                                        {works.jobtitle}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="work-year10"
                                    >
                                        {works.startYear} - {works.endYear}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="work-organization10"
                                    >
                                        {works.organization}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div>
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
                            >
                                {hobbiesHeading}
                            </h5>
                        </div>
                        <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                    className="work-year10"
                                >
                                    {hobb.hobbies}
                                </p>
                            </div>
                        ))}

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
                        >
                            {aboutHeading}
                        </h5>
                        <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        <div className="row">
                            <div className="d-flex justify-content-between col-6">
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
                                    </i>
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
                                <div className="ms-4">
                                    <i
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        Marital Status:-
                                    </i>
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
                                <div className="ms-4">
                                    <i
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        Nationality:-
                                    </i>
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

                        <div>
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
                            >
                                {languageHeading}
                            </h5>
                        </div>
                        <div className="mb-4" style={{ width: '50px', height: '4px', backgroundColor: 'yellow' }}></div>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
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
            <div>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview10;