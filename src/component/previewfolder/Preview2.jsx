import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview2.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview2 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3');
    const [fontStyle, setFontStyle] = useState('Arial');
    const [fontColor, setFontColor] = useState('white');
    const [headingColor, setHeadingColor] = useState('white');
    const [fontSize, setFontSize] = useState(16);
    const [headingsize, setheadingsize] = useState('25');
    // PdfDownloadButton के लिए स्टेट्स
    const [headingSize, setHeadingSize] = useState(25); // headingsize के साथ सिंक करेंगे
    const [margin, setMargin] = useState(10);
    const [padding, setPadding] = useState(10);
    const [lineSpacing, setLineSpacing] = useState(1.2);
    const [sectionSpacing, setSectionSpacing] = useState(15);

    // हेडिंग्स के लिए स्टेट्स
    const [nameHeading, setNameHeading] = useState(null);
    const [contactHeading, setContactHeading] = useState('Contact');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [aboutHeading, setAboutHeading] = useState('About');
    const [jobExperienceHeading, setJobExperienceHeading] = useState('Job Experience');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [headingFontSize, setHeadingFontSize] = useState(headingsize);

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const LLanguage = useSelector((state) => state.reducer.addLanguage);
    const Hobbies = useSelector((state) => state.reducer.addHobbies);

    // स्क्रीन साइज़ के आधार पर हेडिंग साइज़ अपडेट
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 720) {
                setHeadingFontSize(10);
            } else {
                setHeadingFontSize(headingsize);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headingsize]);

    // नाम हेडिंग को Redux से सेट करें और headingSize को headingsize के साथ सिंक करें
    useEffect(() => {
        if (personalInfo && !nameHeading) {
            setNameHeading(`${personalInfo.firstName} ${personalInfo.lastName}`);
        }
        setHeadingSize(headingsize); // headingSize को headingsize के साथ सिंक करें
    }, [personalInfo, nameHeading, headingsize]);

    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1 style={{ fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                    Congratulations on Creating a Winning Resume!
                </h1>
                <small style={{ textAlign: 'center' }}>
                    <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page
                </small>
                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                    Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!
                </p>
            </header>
            <div style={{ width: '100%' }}><GoogleAd /></div>
            <div className="preview2">
                <div
                    className="main"
                    id="Alish_mirza1"
                    style={{
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                >
                    <div className="main1">
                        <div
                            className="maininner1"
                            contentEditable
                            suppressContentEditableWarning
                            style={{ marginBottom: `${sectionSpacing}px` }}
                        >
                            <h3
                                className="pt-5"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setNameHeading(e.target.textContent.trim() || `${personalInfo.firstName} ${personalInfo.lastName}`)}
                                style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                            >
                                {nameHeading || `${personalInfo.firstName} ${personalInfo.lastName}`}
                            </h3>
                            <p style={{ textAlign: 'center', fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                {work[0][0].jobtitle}
                            </p>
                            <div className="maininner2 p-2" style={{ marginTop: `${sectionSpacing}px` }}>
                                <img src={personalInfo.image} alt="Selected" />
                            </div>
                        </div>
                        <div
                            className="maininner3"
                            contentEditable
                            suppressContentEditableWarning
                            style={{ marginBottom: `${sectionSpacing}px` }}
                        >
                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setContactHeading(e.target.textContent.trim() || 'Contact')}
                                style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                            >
                                <i className="bi bi-person-lines-fill" /> {contactHeading}
                            </h3>
                            <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}
                            </p>
                            <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, wordBreak: 'break-all' }}>
                                <i className="bi bi-envelope me-2"></i>{personalInfo.email}
                            </p>
                            <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                            </p>
                        </div>
                        <div className="maininner4" style={{ marginBottom: `${sectionSpacing}px` }}>
                            <h3
                                className="mt-5"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setEducationHeading(e.target.textContent.trim() || 'Education')}
                                style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                            >
                                {educationHeading}
                            </h3>
                            {education[0].map((edu, index) => (
                                <div
                                    key={index}
                                    contentEditable
                                    suppressContentEditableWarning
                                    style={{ marginBottom: `${sectionSpacing}px` }}
                                >
                                    <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        <b>{edu.univercity}</b>
                                    </p>
                                    <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.type}
                                    </p>
                                    <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="main2">
                        <div className="about" style={{ padding: `${padding}px` }}>
                            <h3
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setAboutHeading(e.target.textContent.trim() || 'About')}
                                style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                <i className="bi bi-file-person-fill me-2"></i>{aboutHeading}
                            </h3>
                            <p
                                contentEditable
                                suppressContentEditableWarning
                                style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {personalInfo.object}
                            </p>
                            <div className="jobExperience" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => setJobExperienceHeading(e.target.textContent.trim() || 'Job Experience')}
                                    style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                                >
                                    <i className="bi bi-briefcase-fill me-2"></i>{jobExperienceHeading}
                                </h3>
                                {work[0].map((works, index) => (
                                    <div
                                        key={index}
                                        contentEditable
                                        suppressContentEditableWarning
                                        style={{ marginBottom: `${sectionSpacing}px` }}
                                    >
                                        <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                            {works.jobtitle}
                                        </p>
                                        <p style={{ color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                            {works.startYear}-{works.endYear}
                                        </p>
                                        <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                            {works.organization}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="skill-section" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <h3
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => setSkillsHeading(e.target.textContent.trim() || 'Skills')}
                                    style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                                >
                                    <i className="bi bi-mortarboard me-2"></i>{skillsHeading}
                                </h3>
                                {keyskills[0].map((keys, index) => (
                                    <div
                                        key={index}
                                        contentEditable
                                        suppressContentEditableWarning
                                        style={{ marginBottom: `${sectionSpacing}px` }}
                                    >
                                        <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, textAlign: 'center' }}>
                                            {keys.keyskills}
                                        </p>
                                        <hr style={{ height: '2px' }} />
                                    </div>
                                ))}
                            </div>
                            <div className="d-sm-flex justify-content-between">
                                <div className="language-section" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <h3
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => setLanguageHeading(e.target.textContent.trim() || 'Language')}
                                        style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                                    >
                                        <i className="bi bi-translate me-2" />{languageHeading}
                                    </h3>
                                    {LLanguage.map((lan, index) => (
                                        <div key={index}>
                                            <ul>
                                                <li
                                                    contentEditable
                                                    suppressContentEditableWarning
                                                    style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                                >
                                                    {lan.language}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="hobbies-section" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <h3
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => setHobbiesHeading(e.target.textContent.trim() || 'Hobbies')}
                                        style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}
                                    >
                                        <i className="bi bi-joystick me-2" />{hobbiesHeading}
                                    </h3>
                                    {Hobbies && Hobbies[0].map((hobb, index) => (
                                        <div key={index}>
                                            <ul>
                                                <li
                                                    contentEditable
                                                    suppressContentEditableWarning
                                                    style={{ fontFamily: fontStyle, color: fontColor, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                                >
                                                    {hobb.hobbies}
                                                </li>
                                            </ul>
                                        </div>
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

export default Preview2;