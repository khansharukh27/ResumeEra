import React from 'react';
import '../css/ResumeBuilder.css'; // External CSS file for styling
import { Link } from 'react-router-dom';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder-component">
      <div className="resume-builder-header">
        Resume Builder: Craft Your Perfect Resume
      </div>
      
      <div className="resume-builder-description">
        Our Resume Builder helps you create professional, eye-catching resumes quickly. Whether you're starting from scratch or updating an existing resume, this tool guides you through every step to showcase your skills, experience, and achievements in the best possible light.
      </div>
      
      <div className="resume-builder-features">
        <div className="feature">
          <div className="feature-title">Easy-to-Use Interface</div>
          <div className="feature-description">
            With our user-friendly design, you can create your resume without any hassle. Just follow the simple steps and customize to fit your needs.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Multiple Templates</div>
          <div className="feature-description">
            Choose from a variety of modern templates that suit your industry and personal style. 
            Our templates help make your resume stand out.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Instant Export</div>
          <div className="feature-description">
            Once you’ve crafted your resume, export it in multiple formats, including PDF and Word,
             to send out to recruiters in seconds.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Customizable Sections</div>
          <div className="feature-description">
            Tailor each section of your resume to highlight the skills, experience, and achievements that best match the job you’re applying for.
          </div>
        </div>
      </div>

      <div className="resume-builder-footer">
        <Link to='/template' className='btn'>Get started today and create a resume that will get you noticed!</Link>
      </div>
    </div>
  );
};

export default ResumeBuilder;
