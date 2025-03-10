import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview9.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview9 = () => {
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
    const [objectHeading, setObjectHeading] = useState('Object');
    const [experienceHeading, setExperienceHeading] = useState('Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview9-specific section

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
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
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
            <div className="preview9">
                <div
                    className="resume-preview9"
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
                    <div className="main-one-9" style={{ position: 'relative', padding: `${padding}px` }}>
                        <div
                            className="image-div9"
                            style={{
                                position: 'absolute',
                                left: '15px',
                                backgroundColor: 'yellow',
                                borderBottomLeftRadius: '70px',
                                borderBottomRightRadius: '70px',
                                borderBottom: `10px solid ${bgColor}`,
                                borderRight: `10px solid ${bgColor}`,
                                borderLeft: `10px solid ${bgColor}`,
                            }}
                        >
                            <img src={personalInfo.image} className="image9" alt="Selected" />
                        </div>
                        <div className="contact-div9" style={{ color: fontColor, backgroundColor: '#e4e2df' }}>
                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
                                    paddingTop: '250px',
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {contactHeading}
                            </h3>
                            <div style={{ color: fontColor }}>
                                <div className="d-flex" style={{ height: '70px', color: fontColor }}>
                                    <div
                                        className="me-2 mb-3"
                                        style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                                    >
                                        <i className="bi bi-telephone-fill me-2 p-1"></i>
                                    </div>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {personalInfo.mobileNumber}
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <div className="me-2" style={{ backgroundColor: 'yellow' }}>
                                        <i className="bi bi-envelope me-2 p-1"></i>
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                color: fontColor,
                                                wordBreak: 'break-all',
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
                                        style={{ backgroundColor: 'yellow', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                                    >
                                        <i className="bi bi-linkedin me-2 p-1"></i>
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
                                            {sMedia?.[0]?.linkedin || ''}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {educationHeading}
                            </h3>
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-inner9" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.degree}
                                    </p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <b>{edu.univercity}</b>
                                    </p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.type}
                                    </p>
                                    <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                </div>
                            ))}

                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {aboutHeading}
                            </h3>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <b>Date of Birth:- </b>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.dateofbirth}</p>
                                    <hr style={{ height: '5px' }} />
                                </div>
                                <div>
                                    <b>Marital Status:- </b>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.maritalstatus}</p>
                                    <hr style={{ height: '5px' }} />
                                </div>
                                <div>
                                    <b>Nationality:- </b>
                                    <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.nationality}</p>
                                    <hr style={{ height: '5px' }} />
                                </div>
                            </div>

                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {objectHeading}
                            </h3>
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
                    </div>

                    <div className="main2-9" style={{ padding: `${padding}px` }}>
                        <div className="name-div9">
                            <h3
                                className="pt-5"
                                style={{
                                    fontWeight: 900,
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {personalInfo.firstName} {personalInfo.lastName}
                            </h3>
                            <p
                                className="mb-5 jobtitles9"
                                style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                            >
                                {work[0][0].jobtitle}
                            </p>
                        </div>
                        <hr className="m-3" style={{ backgroundColor: 'yellow', height: '5px' }} />

                        <h3
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                            className="heading9"
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                fontWeight: 900,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {experienceHeading}
                        </h3>
                        {work[0].map((works, index) => (
                            <div key={index} className="d-flex justify-content-around mt-2 work-div9" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div style={{ height: '100px', width: '3px', backgroundColor: 'yellow' }}></div>
                                <div className="work-inner-div9">
                                    <p
                                        className="jobtitle9"
                                        style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                    >
                                        {works.jobtitle}
                                    </p>
                                    <p
                                        className="job-year9"
                                        style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                    >
                                        {works.startYear}-{works.endYear}
                                    </p>
                                    <p
                                        className="job-organization9"
                                        style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                    >
                                        {works.organization}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div>
                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
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
                                    className="hobbiesp9"
                                    style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                >
                                    {hobb.hobbies}
                                </p>
                            </div>
                        ))}

                        <div className="row">
                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                className="heading9"
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontWeight: 900,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {skillsHeading}
                            </h3>
                            {keyskills[0].map((keys, index) => (
                                <div className="skills9" key={index}>
                                    <div>
                                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                            {keys.keyskills}
                                        </p>
                                        <hr style={{ height: '5px', backgroundColor: 'darkgoldenrod' }} />
                                    </div>
                                </div>
                            ))}
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
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview9;