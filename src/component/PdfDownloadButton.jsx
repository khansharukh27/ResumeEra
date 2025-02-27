// PdfDownloadButton.jsx
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfDownloadButton = ({ elementId, fileName }) => {
    const handleDownloadPDF = async () => {
        const loadingSpinner = document.getElementById('loadingSpinner');
        loadingSpinner.style.display = "block"; // Show the spinner

        const element = document.getElementById(elementId);
        try {
            const scale = 3;
            const canvas = await html2canvas(element, {
                scale: scale,
                useCORS: true,
                logging: false,
            });

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                pdf.addPage();
                position = -pageHeight;
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                heightLeft -= pageHeight;
            }

            pdf.save(`${fileName}.pdf`);
            loadingSpinner.style.display = "none";

            const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
            savedResumes.push(imgData);
            localStorage.setItem('savedResumes', JSON.stringify(savedResumes));

            alert('Your Resume is downloaded');
        } catch (error) {
            loadingSpinner.style.display = "none";
            console.error('Error downloading PDF:', error);
        }
    };

    return (
        
        <button onClick={handleDownloadPDF} 
        type="btn" className="btn btn-primary ms-2 download-button">Download</button>
    );
};

export default PdfDownloadButton;