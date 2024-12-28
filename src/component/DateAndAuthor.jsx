import React from "react";
import "../css/DateAndAuther.css"; // Import the CSS for styling

export default function DateAndAuthor() {
  return (

    <div className="date-author-container">
      <img
        src="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        alt="ResumeEra Logo"
        className="author-logo"
      />
      <small className="author-details">
        ✍️ By the <span className="author-highlight">ResumeEra Team</span> | Published:{" "}
        <span className="author-highlight">December 22, 2024</span> | ⏱️{" "}
        <span className="author-highlight">8 min read</span>
      </small>
    </div>
  );
}
