import React, { useState } from 'react';

function EditableResume() {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.innerHTML); // Store the HTML content
  };

  return (
    <div style={{ width: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Resume</h1>

      {/* Editable Content Section */}
      <div
        contentEditable
        onInput={handleContentChange} // Update state on input
        suppressContentEditableWarning={true} // Suppress warning
        style={{
          border: '1px solid #ddd',
          padding: '10px',
          minHeight: '200px', // Adjust as needed
          background: 'transparent',
          color: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit',
        }}
      >
        {content ? (
          // If content exists, display it
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          // Placeholder text
          <p style={{ color: 'gray', margin: '0' }}>Type your resume content here...</p>
        )}
      </div>

      {/* Displaying Raw HTML for Reference (optional) */}
      <h2>Raw Content:</h2>
      <pre>{content}</pre>
    </div>
  );
}

export default EditableResume;
