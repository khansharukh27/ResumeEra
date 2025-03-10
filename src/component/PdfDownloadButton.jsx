// ResumeDownloadSection.jsx
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import GoogleAd from './adFolder/GoogleAd'; // Adjust path as needed

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
        <div className="resume-download-section0">
            <div className="downloadbuttondiv" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter your resume name"
                    className="resume-name-input"
                    style={{ borderRadius: '5px', padding: '10px', flex: 1 }}
                    value={inputFields}
                    onChange={(e) => setInputFields(e.target.value)}
                />
                <button
                    onClick={handleDownloadPDF}
                    type="button"
                    className="btn btn-primary ms-2 download-button"
                    disabled={isLoading}
                    style={{ padding: '10px 20px' }}
                >
                    {isLoading ? 'Downloading...' : 'Download'}
                </button>
            </div>

            {/* Customization Controls */}
            <div className="d-flex border fontfamilydiv" style={{ marginTop: '5px', flexDirection: 'column', padding: '10px' }}>
                <div>
                    <span>Background Color: </span>
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="bg-color-picker ms-2"
                    />
                </div>
                <div>
                    <span>Font Style: </span>
                    <select
                        value={fontStyle}
                        onChange={(e) => setFontStyle(e.target.value)}
                        className="font-style-selector ms-2"
                    >
                        <option value="Arial">Arial</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Times New Roman">Times New Roman</option>
                        {/* Add more font options as needed */}
                    </select>
                </div>
            </div>

            <div className="colordiv" style={{ padding: '10px' }}>
                <div>
                    <span>Font Color: </span>
                    <input
                        type="color"
                        value={fontColor}
                        onChange={(e) => setFontColor(e.target.value)}
                        className="bg-color-picker ms-2"
                    />
                </div>
                <div>
                    <span>Heading Color: </span>
                    <input
                        type="color"
                        value={headingColor}
                        onChange={(e) => setHeadingColor(e.target.value)}
                        className="bg-color-picker ms-2"
                    />
                </div>
            </div>

            <div className="colordiv" style={{ padding: '10px' }}>
                <div>
                    <span>Heading Size: </span>
                    <input
                        type="number"
                        value={headingSize}
                        onChange={(e) => setHeadingSize(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="10"
                        max="40"
                    />
                </div>
                <div>
                    <span>Font Size: </span>
                    <input
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="8"
                        max="30"
                    />
                </div>
            </div>

            <div className="colordiv" style={{ padding: '10px' }}>
                <div>
                    <span>Margin (px): </span>
                    <input
                        type="number"
                        value={margin}
                        onChange={(e) => setMargin(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="0"
                        max="50"
                    />
                </div>
                <div>
                    <span>Padding (px): </span>
                    <input
                        type="number"
                        value={padding}
                        onChange={(e) => setPadding(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="0"
                        max="50"
                    />
                </div>
            </div>
            <div className="colordiv" style={{ padding: '10px' }}>
                <div>
                    <span>Line Spacing: </span>
                    <input
                        type="number"
                        step="0.1"
                        value={lineSpacing}
                        onChange={(e) => setLineSpacing(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="1"
                        max="2"
                    />
                </div>
                <div>
                    <span>Section Spacing (px): </span>
                    <input
                        type="number"
                        value={sectionSpacing}
                        onChange={(e) => setSectionSpacing(Number(e.target.value))}
                        className="bg-color-picker ms-2"
                        min="5"
                        max="50"
                    />
                </div>
            </div>
            <div className="w-100"><GoogleAd /></div>

            <div className="w-100"><GoogleAd /></div>
        </div>
    );
};

export default ResumeDownloadSection;