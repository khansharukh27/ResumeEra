import React, { useState } from 'react';
import '../css/templates.css';
import NormalResume from './NormalResume';
import TechnicalResumeImages from './TechResume/TechnicalResumeImages';
const TemplatePage = (props) => {
    const { images ,techImages} = props;
    

    return (
        <div className='template-page-container'>
            {/* Hero Section */}
            <section className='hero-banner'>
                <h1 className='hero-title'>Create Your Perfect Resume</h1>
                <p className='hero-description'>
                    Choose a template and customize it to stand out from the crowd. Start your career journey with a professional resume.
                </p>
            </section>

            {/* Template Grid */}
            <NormalResume images = {images}/>
            <TechnicalResumeImages techImages = {techImages}/>
            {/* Footer */}
            <footer className='footer-section'>
                <p>© 2024 Resume Era. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </footer>
        </div>
    );
};

export default TemplatePage;
