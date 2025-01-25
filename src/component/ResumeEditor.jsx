
import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

const ResumeEditor = () => {
  const [text, setText] = useState('');
  const [pdfPreview, setPdfPreview] = useState(null);
  const [formattedText, setFormattedText] = useState(null);

  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = async () => {
      const typedArray = new Uint8Array(fileReader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let extractedText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        textContent.items.forEach((item) => {
          extractedText += item.str + ' ';
        });
      }

      // Extracted text ko format karna for resume structure
      formatExtractedText(extractedText);
    };
  };

  const formatExtractedText = (text) => {
    // Example: Simple formatting for demo
    let sections = text.split('\n').filter((line) => line.trim() !== '');
    
    let formattedText = sections.map((line, index) => {
      if (line.toLowerCase().includes('name')) {
        return <h2 key={index} className="text-xl font-bold">{line}</h2>;
      } else if (line.toLowerCase().includes('experience') || line.toLowerCase().includes('education')) {
        return <h3 key={index} className="text-lg font-semibold mt-2">{line}</h3>;
      } else {
        return <p key={index} className="text-md">{line}</p>;
      }
    });

    setFormattedText(formattedText);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfPreview(URL.createObjectURL(file));
      extractTextFromPDF(file);
    }
  };

  return (
    <div className="container mx-auto p-5">
<div style={{margin:'15px',padding:'25px'}}>
      <h1>Convert PDF To Text</h1>
      <p>
      
      There is an easy way to edit PDF text: convert your PDF documents to text with the help of 
      OCR (Optical Character Recognition). 
      If you wondered how to extract text from a PDF, you can't go wrong using PDF2Go.
      </p>
      </div>

      <div style={{display:'flex',flexDirection:'column',padding:'5px',justifyContent:'center',
        backgroundColor:'magenta',border:'2px dashed black',borderRadius:'15px'}}>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <i class="bi bi-cloud-arrow-up" style={{fontSize:'250px'}}></i>
            </div>
        <div><input type="file" accept="application/pdf" placeholder='upload your pdf' onChange={handleFileChange} className="mb-4" /></div>

      </div>
      
      
      {pdfPreview && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">PDF Preview:</h2>
          <iframe src={pdfPreview} width="100%" height="500px" title="PDF Preview"></iframe>
        </div>
      )}

      <div className="mt-6 p-4 border border-gray-300 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Extracted Resume Data:</h2>
        <div>{formattedText}</div>
      </div>
    </div>
  );
};

export default ResumeEditor;
