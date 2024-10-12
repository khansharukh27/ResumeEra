import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '.././previewfolder/CSS/Preview201.css'
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Preview201 = () => {
    const [localData, setLocalData] = useState({});
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const navigate = useNavigate();

    const handleDownloadPDF = async () => {
        const element = document.getElementById('Alish_mirza');

        try {
            const scale = 5; // Increase the scale for better resolution
            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true, // Allows cross-origin images to be rendered correctly
                logging: true, // Enable logging for debugging
            });

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');

            // Calculate the aspect ratio to fit A4
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

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
    // Create a local state to store retrieved data


    // Retrieve Redux state
    const reduxData = useSelector((state) => state.reducer.personalInfo?.[0] || {});

    // Check if there is data in localStorage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('personalInfoData'));
        if (savedData) {
            setLocalData(savedData);  // Set local data if available
        }
    }, []);

    // Combine redux data with local data, prioritize redux data
    const result = Object.keys(reduxData).length > 0 ? reduxData : localData;

    // Check if required fields are available
    const hasRequiredData = result && result.fullname && result.jobposition;

    return (
        <div className="">
            <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153"
                    crossorigin="anonymous"></script>
                {/* <!-- horizontal --> */}
                <ins class="adsbygoogle"

                    data-ad-client="ca-pub-7258253904826153"
                    data-ad-slot="9663652543"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </div>
            <div className="preview-container201">
                <div className="preview201" id='Alish_mirza' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                    {hasRequiredData ? (
                        <div className="name-201">
                            <h3 >{result.fullname}
                                <br />
                            </h3>
                            <p>{result.jobposition}</p>
                        </div>
                    ) : (
                        <p>Loading or No data available...</p> // Fallback message
                    )}
                    <div className="contact-201" style={{ color: fontColor }} >
                        <p style={{ color: fontColor }}>{result.email}</p>
                        <p style={{ color: fontColor }}>{result.mobileNumber}</p>
                        <p style={{ color: fontColor }}>{result.city} {result.state}</p>
                        <p style={{ color: fontColor }}>{result.linkedin}</p>
                    </div>
                    <div className="company-detail-201">
                        To <br />
                        <p style={{ color: fontColor }}>{result.hiringManager}</p>
                        <p style={{ color: fontColor }}>{result.companyName}</p>
                        <p style={{ color: fontColor }}>{result.companyWebsite}</p>
                        <p style={{ color: fontColor }}>{result.companyLocation}</p>
                    </div>
                    <div className="your-object-201">
                        <p style={{ color: fontColor }}>DEAR {result.hiringManager}</p>
                        <p style={{ color: fontColor }}>{result.object}</p>
                    </div>
                    <div className="sincerely-201"><p style={{ color: fontColor }}>SINCERELY</p>
                        <p style={{ color: fontColor }}>{result.fullname}</p>
                    </div>
                </div>
                <div className="resume-download-section">
                    <div className='d-flex'>
                        <input type="text" placeholder="resume name" className="resume-name-input" style={{ borderRadius: '5px', padding: '10px' }} onChange={(e) => setInputFields(e.target.value)} />
                        <button onClick={handleDownloadPDF} type="btn" className="btn btn-primary ms-2 download-button">Download</button>

                    </div>

                    {/* Color Picker for Background Color */}
                    <div className='d-flex border' style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
                    <div>
                        <span>Font Color </span>
                        <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="bg-color-picker ms-2" />
                    </div>
                    <div>
                        <span>Heading Color </span>
                        <input type="color" value={headingColor} onChange={(e) => setHeadingColor(e.target.value)} className="bg-color-picker ms-2" />
                    </div>
                </div>
            </div>
            <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153"
                    crossorigin="anonymous"></script>
                {/* <!-- horizontal --> */}
                <ins class="adsbygoogle"

                    data-ad-client="ca-pub-7258253904826153"
                    data-ad-slot="9663652543"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </div>
        </div>
    );
};

export default Preview201;
