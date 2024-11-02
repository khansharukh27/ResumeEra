import React from 'react';
import { Helmet } from 'react-helmet';
import ShareButtons from '../shareButton/ShareButtons';
import DaysSincePost from '../DaySincePost';
import NewAds from '../adFolder/NewAds';
// import FAQ from './FAQ'; // Assuming FAQ is a separate component if necessary
// import './ResumeGuide.css'; // CSS file for styling

const ResumeGuide = () => {
    const ArticleUrl = 'https://resumeera.xyz/recruiters-guide-writing-resume'
    const ArticleTitle = 'A Recruiter’s Guide To Writing A Resume || Free Resume With ResumeEra'
    const postDate = '24-10-30'

  return (
    <div className="resume-guide aboutResumeEra">
      <Helmet>
        <title>A Recruiter’s Guide To Writing A Resume || Free Resume With ResumeEra</title>
        <meta name="description" content="Comprehensive recruiter insights on creating effective, ATS-compliant resumes." />
        <meta name="keywords" content="resume writing, recruiter tips, ATS compliant resume, resume format, resume length" />
        <link rel="canonical" href="https://resumeera.xyz/recruiters-guide-writing-resume" />
      </Helmet>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://resumeera.xyz/recruiters-guide-writing-resume"
          },
          "headline": "A Recruiter’s Guide To Writing A Resume",
          "datePublished": "2023-11-29",
          "dateModified": "2023-11-29",
          "author": {
            "@type": "Person",
            "name": "James Hudson"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ResumeEra",
            "logo": {
              "@type": "ImageObject",
              "url": "https://resumeera.xyz/logo.png"
            }
          },
          "image": "https://resumeera.xyz/images/resume-guide.png",
          "description": "A detailed guide on crafting an effective, ATS-compliant resume from a recruiting expert with 20 years of experience.",
          "articleBody": "Comprehensive recruiter insights on creating effective resumes..."
        })}
      </script>
<div>
<DaysSincePost postDate={postDate}/>

</div>
      <header>
        <h1>A Recruiter’s Guide To Writing A Resume || Free Resume With ResumeEra</h1>
        <p className="date-author">
          <span> Updated Nov 01, 2024, 09:1pm EST</span><br />
          By <strong>ResumeEra Team</strong>
        </p>
      </header>

      {/* Main Content */}
      <section>
        <h2>What Should My Resume Look Like?</h2>
        <p>This is a subjective question: If you ask five different people, 
            you will get five different answers. Your resume has two primary audiences: 
            the recruiter and the hiring manager. The former might spend a maximum of twenty seconds 
            looking at your resume, and the latter perhaps up to a minute. Therefore, a clean, unfussy 
            format that helps them absorb the most critical information is always going to be the safest bet. 
            Both Canva and Word offer great (free) templates that you can use as a starting point. 
            There is no need to pay for a custom template.</p>
            <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
        <h2>How Do I Make My Resume ATS Compliant?</h2>
        <p>The applicant tracking system (ATS) is the software that recruiting teams use to manage applications. 
            Many major ones still in use today were built during the Clinton administration, and are not much more 
            than digital filing cabinets. If your resume is easily readable by a human being, it’s likely in good 
            shape for ATS too. Avoid overly complex formats or graphics, as they may cause issues with ATS parsing.</p>
        <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
        <h2>How Long Should My Resume Be?</h2>
        <p>In the U.S., the conventional length is one page, though increasingly we’re seeing up to two pages. 
            Anything beyond that is generally superfluous. Allow six bullet points for each role you’ve held in 
            the last decade, and then simply list roles from previous decades. A great way to save space is to 
            turn each company you’ve worked at into a hyperlink, allowing recruiters and hiring managers to navigate 
            to the homepage of brands and businesses unfamiliar to them.</p>
        <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
        <h2>What Should My Resume Say?</h2>
        <p>The biggest mistake is to use all available space focusing on responsibilities. The best resumes balance responsibilities with results. Using the six-bullet framework, use the first three bullet points to describe the size and scope of your role, such as team size and the scale of projects managed. The next three bullet points should focus on quantifiable results. For example, "Delivered double-digit revenue increase by reducing overall ad spend by 20% and increasing conversion by 30% through a new customer journey." Repeat this formula for every role from the last 10 to 12 years, creating a concise, results-focused resume.</p>
        <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
        <h2>What Happens If The ATS Rejects My Resume?</h2>
        <p>Some ATS have parsing features that try to "read" your resume and populate fields in the database, 
            but this often results in mismatches. When this happens, delete pre-filled entries and manually enter 
            your most recent job title and employer. Save your resume as a PDF so the format stays consistent for 
            recruiters and hiring managers.</p>
        <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
        <h2>How Do I Know If My Resume Works?</h2>
        <p>Ask friends and family to read what you’ve produced – the goal is to clearly convey what you do and 
            the results you achieve. Avoid company-specific acronyms and jargon, and ensure your resume is compelling enough to get you into the recruiting process.</p>
      </section>
      <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
      {/* FAQ Section */}
      <section className="faq-section">
  <h1>FAQ</h1>

  <h3>What is the <a href="https://resumeera.xyuz">ideal resume</a> length?</h3>
  <p>One page is conventional; two pages can be used if necessary. Avoid lengthy resumes beyond two pages.</p>

  <h3>How do I <a href="https://resumeera.xyz">make my resume</a> ATS compliant?</h3>
  <p>Use standard formatting, avoid complex graphics, and ensure readability.</p>

  <h3>How can I save space on my resume?</h3>
  <p>Use hyperlinks for company names and keep bullet points concise and results-focused.</p>
</section>
<div>
    <ShareButtons url = {ArticleUrl} title={ArticleTitle}/>
</div>
      {/* Conclusion */}
      <div style={{width:'100%',height:'100%'}}>
                <NewAds/>
            </div>
      <footer>
        <p>A resume with a balance of responsibilities and quantifiable results increases your chance of being noticed.</p>
        <p>Written by <strong>Resumeera Team</strong>, a recruiting expert with 20 years of experience.</p>
      </footer>
    </div>
  );
};

export default ResumeGuide;
