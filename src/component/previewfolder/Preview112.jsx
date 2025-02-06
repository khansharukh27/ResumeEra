import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview11.css';
import GoogleAd from '../adFolder/GoogleAd';

const Preview12 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black');
    const [fontColor, setFontColor] = useState('black');

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const result = useSelector((state) => [state.reducer]);
    console.log('reducer:-', result);

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alish_mirza1');
        try {
            const scale = 4; // Slightly higher resolution without excessive file size
            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true,
                logging: true,
            });

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/jpeg', 0.75); // Use JPEG format with 75% quality for compression

            const a4Width = 210; // A4 width in mm
            const a4Height = 297;
            const imgHeight = (canvas.height * a4Width) / canvas.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, a4Width, imgHeight > a4Height ? a4Height : imgHeight, undefined, 'FAST');

            const fileName = `${inputFields}.pdf`;
            pdf.save(fileName);

            // Store the image data URL in localStorage
            const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
            savedResumes.push(imgData);
            localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

            alert('Your Resume is downloaded');
            navigate('/myresume');
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 75%)',
        margin: '20px auto',
        borderRadius: '5px'
    };

    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <h1>Congratulations on Creating a Winning Resume!</h1>
                <small style={{ textAlign: 'center' }}> <i style={{ color: 'white', backgroundColor: 'red' }}> warning </i>: if resume dont show your data in resume , please refresh the page</small>

                <p>Your journey towards your dream job starts here! By crafting a professional resume with ResumeEra, you've taken the first step in showcasing your skills, experiences, and aspirations effectively. A well-structured resume is more than just a document—it's your story, your voice, and your opportunity to shine.

                    Whether you're a fresher stepping into the professional world or an experienced professional climbing the career ladder, a compelling resume can make all the difference. Our platform ensures your resume is not only visually appealing but also tailored to meet industry standards.

                    Take a moment to review your resume. Remember, the right opportunity is just around the corner. Stand out, stay confident, and let ResumeEra be your trusted partner in achieving your career goals!"
                </p>
            </header>
            <div><GoogleAd /></div>
            <div className="main11">
                <div>
                    {/* Empty div replaced with resume content */}
                    <div id="Alish_mirza1" style={{ backgroundColor: bgColor, fontFamily: fontStyle, color: fontColor, padding: '20px' }}>
                        <h1 style={{ color: headingColor }}>Aarav Patel</h1>
                        <h2 style={{ color: headingColor }}>Data Scientist</h2>
                        <p>Data Scientist with 4+ years of broad-based experience in building data-intensive applications, overcoming complex architectural, and scalability issues in diverse industries. Proficient in predictive modeling, data processing, and data mining algorithms, as well as scripting languages, including Python and Java.</p>

                        <h3 style={{ color: headingColor }}>WORK EXPERIENCE</h3>
                        <h4>Data Scientist</h4>
                        <p>Future Energy® Limited<br />06/2020 - Present</p>
                        <ul>
                            <li>Develop action plans to mitigate risks in decision making while increasing profitability by leveraging data science.</li>
                            <li>Drive the interaction and partnership between the managers to ensure active cooperation in identifying as well as defining analytical needs, and generating the pull-through of insights with the business.</li>
                            <li>Build predictive models using various machine learning tools to predict the possibility of equipment failure.</li>
                            <li>Develop algorithms using Natural Language Processing and Deep Learning models for predictive maintenance.</li>
                            <li>Design algorithms to track and detect anomalies in multiple sensors data for the Energy Industry.</li>
                            <li>Demonstrate knowledge and execution of application programming interface development and test automation.</li>
                        </ul>

                        <h4>Data Analyst</h4>
                        <p>THETA Financial Group<br />03/2016 - 05/2020</p>
                        <ul>
                            <li>Utilized analytical and technical expertise to provide insights and proposals to support business improvements.</li>
                            <li>Evaluated analytical model findings in the Global Monitoring Report, the company’s flagship product.</li>
                            <li>Conducted business analysis to understand business needs and requirements to translate into conceptual designs.</li>
                        </ul>

                        <h4>Business Analyst / Statistician</h4>
                        <p>Maxicare Healthcare<br />02/2014 - 02/2016</p>
                        <ul>
                            <li>Developed Key Performance Indicators (KPI) and presented it to the management and led to the execution plan.</li>
                            <li>Analyzed and produced KPI reports allowing to monitor field service engineer and customer care center closely.</li>
                        </ul>

                        <h3 style={{ color: headingColor }}>EDUCATION</h3>
                        <p>Master of Science in Computer Science and Informatics<br />San Francisco University<br />2014 - 2016</p>

                        <h3 style={{ color: headingColor }}>TECHNICAL SKILLS</h3>
                        <p><strong>Database/Server:</strong> My SQL, Postgres, SQL Server</p>
                        <p><strong>Programming Language:</strong> Python, scikit-learn, Python, OpenCV, D3.js, H2O.ai, Spark, Hadoop, R Programming, Django, Angular.js, HTML, SQL, JavaScript, PHP</p>
                        <p><strong>Other Software/Tools:</strong> Tableau, Deep Learning, Machine Learning, IP Cameras, AWS Services, Microsoft Azure</p>

                        <h3 style={{ color: headingColor }}>SKILLS</h3>
                        <ul>
                            <li>Data Visualization</li>
                            <li>Machine Learning</li>
                            <li>Pattern Recognition</li>
                            <li>Deep Learning</li>
                            <li>Database Structures</li>
                            <li>Database Algorithms</li>
                            <li>Statistical Analysis</li>
                            <li>Quality Management</li>
                            <li>Agile Methodologies</li>
                        </ul>

                        <h3 style={{ color: headingColor }}>CERTIFICATES</h3>
                        <ul>
                            <li>Certification for Applied Data Analytics (2019)</li>
                            <li>Cloudera Data Science Essentials Certificate (2018)</li>
                            <li>Essentials of High Performance and Parallel Statistical Computing with R (2018)</li>
                        </ul>
                    </div>
                </div>
                <div className="resume-download-section0">
                    <GoogleAd />
                    <div className='downloadbuttondiv'>
                        <input type="text" placeholder="Enter your resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                        <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>
                    </div>
                    {/* Color Picker for Background Color */}
                    <div className='d-flex border fontfamilydiv' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="bg-color-picker ms-2" />
                        {/* Font Style Selector */}
                        <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)} className="font-style-selector ms-2">
                            <option value="Arial">Arial</option>
                            <option value="Arial Black">Arial Black</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Tahoma">Tahoma</option>
                            <option value="Trebuchet MS">Trebuchet MS</option>
                            <option value="Impact">Impact</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Palatino Linotype">Palatino Linotype</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Lucida Console">Lucida Console</option>
                            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                            <option value="Gill Sans">Gill Sans</option>
                            <option value="Century Gothic">Century Gothic</option>
                            <option value="Comic Sans MS">Comic Sans MS</option>
                            <option value="Garamond">Garamond</option>
                            <option value="Bookman">Bookman</option>
                            <option value="Arial Narrow">Arial Narrow</option>
                            <option value="Brush Script MT">Brush Script MT</option>
                            <option value="Candara">Candara</option>
                            <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
                            <option value="Goudy Old Style">Goudy Old Style</option>
                            <option value="Herculanum">Herculanum</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Optima">Optima</option>
                            <option value="Perpetua">Perpetua</option>
                            <option value="Rockwell">Rockwell</option>
                            <option value="Segoe UI">Segoe UI</option>
                        </select>
                    </div>
                    <div className='colordiv'>
                        <div>
                            <span>Font Color </span>
                            <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
                        </div>
                        <div>
                            <span>Heading Color </span>
                            <input type="color" value={headingColor} onChange={(e) => setHeadingColor(e.target.value)} className="bg-color-picker ms-2" />
                        </div>
                    </div>
                    <GoogleAd />
                </div>
            </div>
            <GoogleAd />
        </div>
    );
};

export default Preview12;