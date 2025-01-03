import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet'
import '../css/templates.css';
import NormalResume from './NormalResume';
import TechnicalResumeImages from './TechResume/TechnicalResumeImages';
import GoogleAd from './adFolder/GoogleAd';
// import CoverLetter from './CoverLetter';
const TemplatePage = (props) => {
    const { images ,techImages,CoverImage} = props;
    console.log('coverimage in template:-',CoverImage)
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='template-page-container'>
            {/* Hero Section */}
            <Helmet>
            <link rel="canonical" href="https://resumeera.xyz/template" />
            <title>Create Your Perfect Resume</title>
            <meta name="description" content="Choose a template and customize it to stand out from the crowd. 
            Start your career journey with a professional resume." />
            </Helmet>
            <section className='hero-banner'>
                <h1 className='hero-title'>Create Your Perfect Resume</h1>
                <p className='hero-description'>
                    Choose a template and customize it to stand out from the crowd. Start your career journey with a professional resume.
                </p>
                
            </section>
            <GoogleAd/>

            {/* Template Grid */}
            <NormalResume images = {images}/>
            <GoogleAd/>
            <TechnicalResumeImages techImages = {techImages}/>
            <GoogleAd/>
            {/* Footer */}
            
        </div>
    );
};

export default TemplatePage;
