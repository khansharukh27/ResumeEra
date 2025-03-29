import React, { useState } from 'react';
import GoogleAd from './adFolder/GoogleAd'; // Adjust path as needed
import '../css/PdfDownloadButton.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const ResumeDownloadSection = ({
    inputFields,
    setInputFields,
    bgColor,
    setBgColor,
    fontStyle,
    setFontStyle,
    headingColor,
    setHeadingColor,
    fontColor,
    setFontColor,
    fontSize,
    setFontSize,
    headingSize,
    setHeadingSize,
    margin,
    setMargin,
    padding,
    setPadding,
    lineSpacing,
    setLineSpacing,
    sectionSpacing,
    setSectionSpacing,
    elementId,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownloadPDF = async () => {
        setIsLoading(true);
        const element = document.getElementById(elementId);
        if (!element) {
            setIsLoading(false);
            alert('Resume element not found!');
            return;
        }

        try {
            const scale = 2;
            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true,
                logging: false,
                width: element.scrollWidth,
                height: element.scrollHeight,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
            });

            const imgData = canvas.toDataURL('image/jpeg', 0.7);
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                pdf.addPage();
                position = -pageHeight;
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                heightLeft -= pageHeight;
            }

            pdf.save(`${inputFields}.pdf`);
            setIsLoading(false);
            alert('Your Resume is downloaded');
            canvas.width = 0; // Clear canvas to free memory
            canvas.height = 0;
        } catch (error) {
            setIsLoading(false);
            console.error('Error downloading PDF:', error);
            alert('Failed to download PDF.');
        }
    };

    return (
        <div className="resume-download-section" style={{ width:'fit-content', border:'1px solid black' }}>
            

            {/* Customization Controls */}
            <div className="customization-controls" >
                <div className="color-picker" title='Background Color'>
                    <i className="fa-solid fa-fill-drip" />
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="color-input"
                        
                    />
                </div>

                <div className="font-style-selector"title='Font Style'>
                    <i className="fa-solid fa-font" />
                    <select
                        value={fontStyle}
                        onChange={(e) => setFontStyle(e.target.value)}
                        className="font-select"
                    >
                        <option value="Arial">Arial</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>

                <div className="color-picker"  title='Font Color'>
                    <i className="fa-solid fa-fill-drip" />
                    <input
                        type="color"
                        value={fontColor}
                        onChange={(e) => setFontColor(e.target.value)}
                        className="color-input"
                    />
                </div>

                <div className="color-picker" title='Heading Color'>
                    <i className="fa-solid fa-fill-drip" />
                    <input
                        type="color"
                        value={headingColor}
                        onChange={(e) => setHeadingColor(e.target.value)}
                        className="color-input"
                    />
                </div>

                <div className="size-selector" title='Heading Size'>
                    <i className="fa-solid fa-heading" />
                    <input
                        type="number"
                        value={headingSize}
                        onChange={(e) => setHeadingSize(Number(e.target.value))}
                        className="size-input"
                    />
                </div>

                <div className="size-selector" title='Font Size'>
                    <i className="fa-solid fa-font" />
                    <input
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="size-input"
                    />
                </div>

                <div className="spacing-selector" title='Margin'>
                    <i className="fa-solid fa-arrows-up-down-left-right" />
                    <input
                        type="number"
                        value={margin}
                        onChange={(e) => setMargin(Number(e.target.value))}
                        className="spacing-input"
                    />
                </div>

                <div className="spacing-selector" title='Padding'>
                    <i className="fa-solid fa-arrows-up-down-left-right" />
                    <input
                        type="number"
                        value={padding}
                        onChange={(e) => setPadding(Number(e.target.value))}
                        className="spacing-input"
                    />
                </div>

                <div className="spacing-selector" title='Line Spacing'>
                    <i className="fa-solid fa-font" />
                    <input
                        type="number"
                        step="0.1"
                        value={lineSpacing}
                        onChange={(e) => setLineSpacing(Number(e.target.value))}
                        className="spacing-input"
                    />
                </div>

                <div className="spacing-selector" title='Section Spacing'>
                    <i className="fa-solid fa-arrows-up-down-left-right" />
                    <input
                        type="number"
                        value={sectionSpacing}
                        onChange={(e) => setSectionSpacing(Number(e.target.value))}
                        className="spacing-input"
                    />
                </div>
            </div>
            <div className="headers  d-md-flex" title='Give Your Resume a Name'>
                <input
                    type="text"
                    placeholder="Enter your resume name"
                    className="resume-name-input"
                    value={inputFields}
                    onChange={(e) => setInputFields(e.target.value)}
                />
                <button
                    onClick={handleDownloadPDF}
                    type="button"
                    className="btn download-button"
                    disabled={isLoading}
                    title='Download'
                >
                    {isLoading ? 'Downloading...' : 'Download'}
                </button>
            </div>

        </div>
    );
};

export default ResumeDownloadSection;
