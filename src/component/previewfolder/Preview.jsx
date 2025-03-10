import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';

const Preview = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3');
    const [fontStyle, setFontStyle] = useState('Arial');
    const [fontColor, setFontColor] = useState('black');
    const [headingColor, setHeadingColor] = useState('black');
    const [fontSize, setFontSize] = useState(16);
    const [fontSizeheading, setFontSizeheading] = useState(16);

    // New states for headings and editable content
    const [editableHobbies, setEditableHobbies] = useState([
        { hobbies: "Reading" },
        { hobbies: "Travelling" },
        { hobbies: "Cooking" },
    ]);
    const [detailHeading, setDetailHeading] = useState('Detail');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [profileHeading, setProfileHeading] = useState('Profile');
    const [employmentHistoryHeading, setEmploymentHistoryHeading] = useState('Employment History');
    const [nameHeading, setNameHeading] = useState(null);
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies'); // Hobbies के लिए अलग स्टेट
    const [headingFontSize, setHeadingFontSize] = useState(fontSizeheading);

    // Additional UI customizations
    const [headingSize, setHeadingSize] = useState(20);
    const [margin, setMargin] = useState(10);
    const [padding, setPadding] = useState(10);
    const [lineSpacing, setLineSpacing] = useState(1.5);
    const [sectionSpacing, setSectionSpacing] = useState(10);

    // Local states for editable personal info (Redux के बजाय)
    const [editablePersonalInfo, setEditablePersonalInfo] = useState(null);

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);

    // Resize functionality for heading font size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 720) {
                setHeadingFontSize(10);
            } else {
                setHeadingFontSize(fontSizeheading);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [fontSizeheading]);

    // Set nameHeading and editablePersonalInfo from Redux store if not set
    useEffect(() => {
        if (personalInfo) {
            if (!nameHeading) {
                setNameHeading(`${personalInfo.firstName} ${personalInfo.lastName}`);
            }
            if (!editablePersonalInfo) {
                setEditablePersonalInfo(personalInfo);
            }
        }
    }, [personalInfo, nameHeading, editablePersonalInfo]);

    // Update state on content edit
    const handleEdit = (e, section, setter) => {
        setter(e.target.textContent.trim() || section);
    };

    // Handle personal info edit locally
    const handlePersonalInfoEdit = (field, value) => {
        setEditablePersonalInfo((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle text change for hobbies
    const handleTextChange = (section, value, index, setter) => {
        const updatedHobbies = [...editableHobbies];
        updatedHobbies[index] = { hobbies: value };
        setter(updatedHobbies);
    };

    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1 style={{ fontSize: headingSize, lineHeight: `${lineSpacing}em` }}>
                    Congratulations on Creating a Winning Resume!
                </h1>
                <small style={{ textAlign: 'center' }}>
                    <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume, please refresh the page
                </small>
                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                    Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine. Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards. Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!
                </p>
            </header>

            <div style={{ width: '100%' }}><GoogleAd /></div>

            <div className="preview-container d-md-flex" style={{ position: 'relative' }}>
                <div
                    className="preview-page"
                    id="Alish_mirza1"
                    style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle, padding: `${padding}px`, margin: `${margin}px` }}
                >
                    <div className="d-flex justify-content-center preview-image-container" 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handlePersonalInfoEdit('image', e.target.src)}

                    >
                        <img src={editablePersonalInfo?.image || personalInfo.image} alt="Selected" className="preview-image" />
                    </div>

                    <div className="text-center preview-text">
                        <div>
                            <h3
                                className="preview-name"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, `${personalInfo.firstName} ${personalInfo.lastName}`, setNameHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em` }}
                            >
                                {nameHeading || `${personalInfo.firstName} ${personalInfo.lastName}`}
                            </h3>
                        </div>
                        <span className="preview-address" 
                        contentEditable
                        suppressContentEditableWarning
                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                            {work.map((works, index) => (
                                <div key={index} className="preview-job-title"
                                
                                >
                                    {works.jobtitle}
                                </div>
                            ))}.
                            {editablePersonalInfo?.address || personalInfo.address} {editablePersonalInfo?.city || personalInfo.city} {editablePersonalInfo?.state || personalInfo.state} {editablePersonalInfo?.postalCode || personalInfo.postalCode}
                        </span>
                    </div>

                    <div className="d-flex preview-details">
                        <div className="me-4 text-center preview-details-section">
                            {/* Editable Detail Heading */}
                            <h6
                                className="details-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Detail', setDetailHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {detailHeading}
                            </h6>

                            {/* Editable Address */}
                            <span className="details-address" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handlePersonalInfoEdit('address', e.target.textContent.trim() || personalInfo.address)}
                                >
                                    {editablePersonalInfo?.address || personalInfo.address}
                                </div>
                            </span>

                            <span className="details-city-state" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handlePersonalInfoEdit('city', e.target.textContent.trim() || personalInfo.city)}
                                >
                                    {editablePersonalInfo?.city || personalInfo.city} {editablePersonalInfo?.state || personalInfo.state}
                                </div>
                            </span><br />

                            <span className="details-mobile" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handlePersonalInfoEdit('mobileNumber', e.target.textContent.trim() || personalInfo.mobileNumber)}
                                >
                                    {editablePersonalInfo?.mobileNumber || personalInfo.mobileNumber}
                                </div>
                            </span><br />

                            <span className="details-email" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                <div
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handlePersonalInfoEdit('email', e.target.textContent.trim() || personalInfo.email)}
                                >
                                    {editablePersonalInfo?.email || personalInfo.email}
                                </div>
                            </span>

                            {/* Skills Section */}
                            <h6
                                className="details-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {skillsHeading}
                            </h6>
                            {keyskills.map((keys, index) => (
                                <div key={index} className="skill-item" 
                                contentEditable
                                        suppressContentEditableWarning
                                style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                    {keys.keyskills}
                                    <hr className="skill-divider" style={{ height: '5px', color: 'black', backgroundColor: '' }} />
                                </div>
                            ))}

                            {/* Education Section */}
                            {education.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <h6
                                        className="details-title"
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleEdit(e, `Education ${index + 1}`, setEducationHeading)}
                                        style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                                    >
                                        {educationHeading} {index + 1}
                                    </h6>
                                    <span className="education-duration" 
                                    contentEditable
                                    suppressContentEditableWarning
                                    style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.startYear} - {edu.endYear}
                                    </span>
                                    <span className="education-detail" 
                                    contentEditable
                                    suppressContentEditableWarning
                                    style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {edu.type} from {edu.univercity}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="preview-profile-section">
                            {/* Profile Section */}
                            <h6
                                className="details-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Profile', setProfileHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {profileHeading}
                            </h6>
                            <span className="profile-description" 
                            contentEditable
                            suppressContentEditableWarningstyle={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                {editablePersonalInfo?.object || personalInfo.object}
                            </span>

                            {/* Employment History Section */}
                            <h6
                                className="details-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Employment History', setEmploymentHistoryHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {employmentHistoryHeading}
                            </h6>
                            {work.map((works, index) => (
                                <div key={index} className="employment-history" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <span className="employment-detail" style={{ fontSize: `${fontSize}px`, fontWeight: '500', lineHeight: `${lineSpacing}em` }}>
                                        {works.organization} {works.jobtitle}
                                    </span>
                                    <br />
                                    <span className="employment-duration" 
                                    contentEditable
                                        suppressContentEditableWarning
                                    style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        
                                        {works.startYear} - {works.endYear}
                                    </span><br />
                                    <span className="aboutexperience" 
                                        contentEditable
                                        suppressContentEditableWarning
                                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {works.aboutexperience}
                                    </span>
                                </div>
                            ))}

                            {/* Hobbies Section */}
                            <h6
                                className="details-title"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                {hobbiesHeading}
                            </h6>
                            {editableHobbies.map((hobb, index) => (
                                <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <ul>
                                        <li>
                                            <p
                                                contentEditable
                                                suppressContentEditableWarning
                                                onBlur={(e) => handleTextChange('hobbies', e.target.textContent.trim() || hobb.hobbies, index, setEditableHobbies)}
                                                style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}
                                            >
                                                {hobb.hobbies}
                                            </p>
                                        </li>
                                    </ul>
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

            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview;