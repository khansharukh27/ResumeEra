import React from "react";
import '../../css/Important_Post/ResumeVsCV.css';
import { Helmet } from "react-helmet";

const ResumeVsCV = () => {
  return (
    <div className="resume-vs-cv-container container">
      <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/resume-vs-cv-what-you-need-to-know" />
      <title>Resume vs. CV: What You Need to Know</title>
            <meta name="description" content="When it comes to job applications, two documents are commonly required: a resume and a CV. While they may seem similar, there are key differences you should be aware of." />
            </Helmet>
      <h1 className="resume-vs-cv-title">Resume vs. CV: What You Need to Know</h1>
      <p className="resume-vs-cv-intro">
        When it comes to job applications, two documents are commonly required: a resume and a CV. While they may seem similar, there are key differences you should be aware of.
      </p>

      <div className="resume-vs-cv-section">
        <h2 className="resume-vs-cv-subtitle">What is a Resume?</h2>
        <p className="resume-vs-cv-text">
          A resume is a concise document that highlights your skills, experience, and achievements. It’s typically tailored to a specific job and is usually no longer than one or two pages.
        </p>
      </div>

      <div className="resume-vs-cv-section">
        <h2 className="resume-vs-cv-subtitle">What is a CV?</h2>
        <p className="resume-vs-cv-text">
          A CV (Curriculum Vitae) is a more detailed document that provides an in-depth overview of your career, including your education, work experience, skills, and accomplishments. It is typically used in academia, research, and international job applications.
        </p>
      </div>

      <div className="resume-vs-cv-section">
        <h2 className="resume-vs-cv-subtitle">Key Differences</h2>
        <ul className="resume-vs-cv-list">
          <li>Length: Resumes are shorter, while CVs are longer and more detailed.</li>
          <li>Purpose: Resumes are used for most job applications, while CVs are used for academic or international positions.</li>
          <li>Customization: Resumes are tailored for each job, but CVs remain more static over time.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeVsCV;
