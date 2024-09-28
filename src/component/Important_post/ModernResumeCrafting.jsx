import React from 'react';
import '../../css/Important_Post/ModernResumeCrafting.css'; // Assuming you prefer to keep styles separate
import { Helmet } from 'react-helmet';

const ModernResumeCrafting = () => {
  return (
    <div className="modern-resume-crafting container">
       <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/crafting-a-modern-resume" />
      <title>Crafting a Modern Resume</title>
            <meta name="description" content="A modern resume is more than a list of jobs and skills. It’s a visual and professional reflection of your career, designed to capture the attention of recruiters. Here are the key elements you need to craft a resume that stands out in today's job market." />
            </Helmet>
      <h1 className="modern-resume-crafting-title">Crafting a Modern Resume</h1>
      <p className="modern-resume-crafting-intro">
        A modern resume is more than a list of jobs and skills. It’s a visual and professional reflection of your career, designed to capture the attention of recruiters. Here are the key elements you need to craft a resume that stands out in today's job market.
      </p>

      <h3 className="modern-resume-crafting-heading">1. Use a Clean, Professional Layout</h3>
      <p className="modern-resume-crafting-text">
        Opt for a simple and organized layout. Use clear headings, bullet points, and consistent spacing to ensure readability. White space is your friend—it makes your resume more approachable and easier to scan.
      </p>

      <h3 className="modern-resume-crafting-heading">2. Choose Modern Fonts</h3>
      <p className="modern-resume-crafting-text">
        Fonts play a big role in how your resume is perceived. Choose a modern, professional font like Calibri, Arial, or Helvetica. Avoid overly decorative fonts, and ensure your font size is legible, typically between 10-12 points.
      </p>

      <h3 className="modern-resume-crafting-heading">3. Highlight Key Achievements</h3>
      <p className="modern-resume-crafting-text">
        Focus on accomplishments rather than job duties. Use bullet points to emphasize measurable achievements, such as "Increased sales by 30%" or "Managed a team of 15 engineers across multiple projects."
      </p>

      <h3 className="modern-resume-crafting-heading">4. Incorporate Keywords for ATS</h3>
      <p className="modern-resume-crafting-text">
        Many companies use Applicant Tracking Systems (ATS) to filter resumes. Research the job description and include relevant keywords throughout your resume. This ensures your resume gets noticed by both the software and the hiring manager.
      </p>

      <h3 className="modern-resume-crafting-heading">5. Keep It Concise</h3>
      <p className="modern-resume-crafting-text">
        Stick to 1-2 pages unless you’re applying for an academic or technical position that requires detailed experience. Recruiters often spend less than 10 seconds on an initial resume review, so make sure yours is easy to digest.
      </p>

      <h3 className="modern-resume-crafting-heading">6. Add a Personal Touch</h3>
      <p className="modern-resume-crafting-text">
        While modern resumes are professional, adding a slight personal touch—like a well-crafted summary statement or portfolio link—can humanize your resume. This helps hiring managers remember you as a candidate beyond the text.
      </p>

      <div className="modern-resume-crafting-cta">
        <p className="modern-resume-crafting-summary">
          A modern resume combines clean design, professional fonts, and measurable achievements to showcase your value. Focus on readability, concise content, and the right keywords to make your resume stand out.
        </p>
        <a href="/modern-resume-templates" className="modern-resume-crafting-link">Explore Modern Resume Templates</a>
      </div>
    </div>
  );
};

export default ModernResumeCrafting;
