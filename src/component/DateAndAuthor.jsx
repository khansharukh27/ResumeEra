import React from "react";
import "../css/DateAndAuther.css"; // Import the CSS for styling

export default function DateAndAuthor({publishDate}) {
  const calculateDaysAgo = (publishDate) => {
    const publishDateObj = new Date(publishDate);
    const today = new Date();
    const diffTime = today - publishDateObj;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays;
  };
  const daysAgo = calculateDaysAgo(publishDate);
  return (

    <div className="date-author-containerss">
      <img 
      style={{width:'50px',height:'50px'}}
        src="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        alt="ResumeEra Logo"
        className="author-logo"
      />
      <small className="author-details">
        ✍️ By the <span className="author-highlight">ResumeEra Team</span> | Published:{" "}
        <span className="author-highlight">{publishDate} ({daysAgo} days ago)</span> | ⏱️{" "}
        <span className="author-highlight">8 min read</span>
      </small>
    </div>
  );
}
