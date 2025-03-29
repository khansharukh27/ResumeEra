import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview8.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';

const Preview8 = () => {
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
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview8-specific section

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
            <div style={{ width: 'inherit' }}><GoogleAd /></div>

            <div className="preview-main8 marging">
      <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />          
                <div
                    className="resume-preview8"
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
                    <div className="main1-8" style={{ backgroundColor: '#c9bca4', padding: `${padding}px` }}>
                        <img
                            src={personalInfo.image}
                            className="mb-3"
                            alt="Selected"
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',

                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {contactHeading}
                        </h5>
                        <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                            <i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}
                        </p>
                        <p style={{ color:fontColor,fontSize: `${fontSize}px`, wordBreak: 'break-all', lineHeight: `${lineSpacing}em` }}>
                            <i className="bi bi-envelope me-2"></i>{personalInfo.email}
                        </p>
                        <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                            <i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                        </p>
                        <div className="mt-2 me-3" style={{ marginBottom: `${sectionSpacing}px` }}>
                            <b>
                                {sMedia?.[0]?.linkedin && (
                                    <>
                                        <i className="bi bi-linkedin" /> {sMedia[0].linkedin}
                                    </>
                                )}
                            </b>
                        </div>

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="mt-5"
                        >
                            {educationHeading}
                        </h5>
                        {education[0].map((edu, index) => (
                            <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{edu.univercity}</b>
                                </p>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{edu.type}</p>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="mt-5"
                        >
                            {skillsHeading}
                        </h5>
                        {keyskills[0].map((keys, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{keys.keyskills}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="main2-8" style={{ padding: `${padding}px` }}>
                        <div className="name-div8">
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
                            <p className="mb-5" style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                {work[0][0].jobtitle}
                            </p>
                        </div>

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {experienceHeading}
                        </h5>
                        {work[0].map((works, index) => (
                            <div key={index} className="jobinner-div8" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                    <b>{works.jobtitle}</b>
                                </p>
                                <p className="year8" style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{works.startYear}-{works.endYear}</p>
                                <p className="year8" style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{works.organization}</p>
                            </div>
                        ))}

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {languageHeading}
                        </h5>
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{lan.language}</li>
                                </ul>
                            </div>
                        ))}

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="mt-5"
                        >
                            {aboutHeading}
                        </h5>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div>
                                <b>Date of Birth:- </b>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.dateofbirth}</p>
                                <hr style={{color:fontColor, height: '5px' }} />
                            </div>
                            <div>
                                <b>Marital Status:- </b>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.maritalstatus}</p>
                                <hr style={{color:fontColor, height: '5px' }} />
                            </div>
                            <div>
                                <b>Nationality:- </b>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{personalInfo.nationality}</p>
                                <hr style={{color:fontColor, height: '5px' }} />
                            </div>
                        </div>

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {hobbiesHeading}
                        </h5>
                        <hr />
                        {Hobbies[0].map((hobb, index) => (
                            <div key={index}>
                                <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>{hobb.hobbies}</p>
                            </div>
                        ))}

                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                            style={{
                                backgroundColor: 'black',
                                color: headingColor,
                                padding: '3px',
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {objectHeading}
                        </h5>
                        <hr />
                        <p style={{color:fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
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
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview8;