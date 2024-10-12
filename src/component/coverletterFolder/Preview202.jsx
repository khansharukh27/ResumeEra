import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '.././previewfolder/CSS/Preview201.css'
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Hadith from "../Hadith";
const Preview202 = () => {
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
                    <h1>coming soon...</h1>
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

            export default Preview202;
