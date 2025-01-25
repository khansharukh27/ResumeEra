import React, { useState } from "react";
import mammoth from "mammoth";

function ResumeUpload() {
  const [docContent, setDocContent] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        mammoth.extractRawText({ arrayBuffer })
          .then((result) => {
            setDocContent(result.value);  // Setting the extracted text
          })
          .catch((err) => console.error("Error extracting docx content: ", err));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <div>
      <h1>Convert PDF To Text</h1>
      <p>
      
      There is an easy way to edit PDF text: convert your PDF documents to text with the help of 
      OCR (Optical Character Recognition). 
      If you wondered how to extract text from a PDF, you can't go wrong using PDF2Go.
      </p>
      </div>
      <div>
      <input type="file" accept=".docx" onChange={handleFileUpload} />
      </div>
      
      
      
      <div>
        {/* Content preview - editable */}
        <div
          contentEditable
          style={{
            border: "1px solid #ccc",
            minHeight: "200px",            padding: "10px",
            marginTop: "10px",
          }}
          dangerouslySetInnerHTML={{ __html: docContent }}
        />
      </div>
    </div>
  );
}

export default ResumeUpload;






