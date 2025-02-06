import React, { useEffect, useState } from 'react'
import WelcomeNotes from '../WelcomeNotes';
import RandomeArticleToBlogCareer from '../RandomeArticleToBlogCareer';
import GoogleAd from '../adFolder/GoogleAd';
import AuthorCard from '../AuthorCard';
import CallToAction from '../CallToAction';
import ShareButtons from '../shareButton/ShareButtons';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { templatePage } from '../../Redux/action';
import ResumeEraHeading from '../ResumeEraHeading';
import FresherResume from '../FresherResume';
import ResumeBuilder from '../ResumeBuilder';
export default function ResumeFormatForFreshersExample(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages,fresherResumeImage } = prop
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/resume-format-for-freshers-example";
    const ArticleTitle = "Resume Format for Freshers Example: Free Editing & Downloading Now";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'Resume Format for Freshers Example: Free Editing & Downloading Now'
    const publishDate = '2025-01-11'
    const dispatch = useDispatch();

    const selectedImageId = 110;//chronoligical resume
    const selectedimage = techImages.find((image) => image.id === selectedImageId)
    const selectedImageId2 = 111;//functional resume
    const selectedimage2 = techImages.find((image) => image.id === selectedImageId2)
    const selectedImageId3 = 112; //minimalistik
    const selectedimage3 = techImages.find((image) => image.id === selectedImageId3)
    const selectedImageId4 = 109 //creative
    const selectedimage4 = techImages.find((image) => image.id === selectedImageId4)
    const selectedImageId5 = 116 //creative
    const selectedimage5 = techImages.find((image) => image.id === selectedImageId5)
    const selectedImageId6 = 107 // infografic resume
    const selectedimage6 = techImages.find((image) => image.id === selectedImageId6)
    console.log('hoveredImage:-,', hoveredImage)
    const handleClick = (e, imageId) => {
        e.preventDefault();
        const path = `/techmain/${imageId}`;
        navigate(path);
        dispatch(templatePage(hoveredImage));
    };

    return (
        <div>
            <Helmet>
                <title>Resume Format for Freshers Example: Free Editing & Downloading Now</title>
                <meta name="description" content="Get a professional resume format for freshers! Easy-to-edit and downloadable templates for fresh graduates. Stand out in the job market with a perfect resume!" />
                <meta name="keywords" content="Resume format for freshers, free resume template, resume example for freshers, downloadable resume, fresher resume editing, entry-level resume format" />
                <link rel="canonical" href="https://resumeera.xyz/resume-format-for-freshers-example" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Resume Format for Freshers Example: Free Editing & Downloading Now" />
                <meta property="og:description" content="Get a professional resume format for freshers! Download and edit the best templates for fresh graduates looking to land their first job." />
                <meta property="og:image" content="https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg" />
                <meta property="og:url" content="https://resumeera.xyz/resume-format-for-freshers-example" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Resumeera.xyz" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:title" content="Resume Format for Freshers Example: Free Editing & Downloading Now" />
                <meta name="twitter:description" content="Download and edit professional resume templates for freshers. The perfect resume example for graduates looking for their first job." />
                <meta name="twitter:image" content="https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">
                    {`{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://resumeera.xyz/resume-format-for-freshers-example"
  },
  "headline": "Resume Format for Freshers Example: Free Editing & Downloading Now",
  "description": "Get a professional resume format for freshers! Easy-to-edit and downloadable templates for fresh graduates. Stand out in the job market with a perfect resume!",
  "image": "https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg",
  "author": {
    "@type": "Organization",
    "name": "Resumeera.xyz",
    "logo": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Resumeera.xyz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
    }
  },
  "datePublished": "2025-02-04",
  "dateModified": "2025-02-04",
  "url": "https://resumeera.xyz/resume-format-for-freshers-example"
}
`}
                </script>

                <script type="application/ld+json">
                    {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should a fresher include in their resume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fresher should focus on education, skills, and any internships, projects, or volunteer experiences. These sections can help demonstrate your potential to employers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I leave out work experience from my resume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you have no formal work experience, focus on your academic background, projects, and transferable skills instead."
      }
    },
    {
      "@type": "Question",
      "name": "How long should my resume be as a fresher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As a fresher, your resume should ideally be one page. Keep it short, clear, and to the point."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose the best resume template for freshers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for templates that have a clean design and structure. It should allow you to clearly showcase your education and skills."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create a resume for an entry-level job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a resume format designed for freshers, focusing on your academic achievements, internships, and any projects or work experience that demonstrates your suitability for the job."
      }
    }
  ]
}
`}
                </script>

            </Helmet>
            <ResumeEraHeading title={title} publishDate={publishDate} />
            <article className='aboutResumeEra'>
                <img src="https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg"
                    style={{ width: '100%', height: 'auto', marginLeft: 'auto' }} loading='lazy' alt="Resume Format for Freshers Example" />
                <p>
                    When you're starting your career, one of the most important tools you’ll need is a resume. A resume format for freshers is your first opportunity to impress potential employers and stand out from the competition. But what makes a good resume? What key sections should be included? How can you create a professional, well-structured resume that reflects your skills and qualifications?
                </p>
                <p>
                    In this comprehensive guide, we will break down an effective resume format for freshers, provide an example, and offer a free resume template you can download and use to start your job search.
                </p>

                <h2>Table of Contents</h2>
                <ul>
                    <li>What is a Resume Format for Freshers?</li>
                    <li>Key Elements of a Resume Format for Freshers
                        <ul>
                            <li>Contact Information</li>
                            <li>Objective Statement</li>
                            <li>Education Section</li>
                            <li>Skills</li>
                            <li>Work Experience (if applicable)</li>
                            <li>Projects (if applicable)</li>
                            <li>Achievements</li>
                            <li>Personal Details</li>
                        </ul>
                    </li>
                    <li>How to Create a Resume Format for Freshers</li>
                    <li>Example of a Resume Format for Freshers</li>
                    <li>Free Resume Templates for Freshers</li>
                    <li>Key Takeaways</li>
                    <li>Frequently Asked Questions (FAQs)</li>
                </ul>

                <h2>What is a Resume Format for Freshers?</h2>
                <div className='d-md-flex' style={{justifyContent:'space-around',alignItems:'center'}}>
                <div style={{border:'3px solid black' ,margin:'10px', padding:'10px',borderRadius:'15px'}}>
                <p>
                    A resume format for freshers is a structured document that highlights your skills, education, and potential, even if you lack work experience. It is designed to show employers your strengths, academic qualifications, and any internships or projects you've worked on. This format emphasizes transferable skills like communication, teamwork, leadership, and technical skills, which are crucial for someone just entering the workforce.
                </p>
                <p>
                    Unlike experienced professionals, freshers don’t have an extensive job history to showcase, so your resume should focus on relevant coursework, personal projects, internships, and volunteer work.
                </p>
                
</div>
<div>
    <img src="https://resumeera.xyz/static/media/accountant-resume-example.4e6ed0126bc0841ac5ae.webp" alt="fresher resume" />
</div>
                </div>
                
                <section>
                    <h2>1. Contact Information</h2>
                    <p>This is the first thing recruiters see, so make sure it’s clear, professional, and up to date. Place this section at the top of your resume. It should include the following details:</p>
                    <ul>
                        <li><strong>Full Name</strong>: Make sure to include your full legal name.</li>
                        <li><strong>Phone Number</strong>: Preferably a mobile number where you can be reached.</li>
                        <li><strong>Email Address</strong>: Use a professional email address (e.g., john.doe@gmail.com).</li>
                        <li><strong>LinkedIn Profile</strong>: It’s a great way for employers to view your professional background and connections.</li>
                        <li><strong>Portfolio/Website</strong>: Especially if you have one related to the field you are applying for (e.g., a web developer’s GitHub or a designer’s portfolio).</li>
                        <li><strong>Location</strong>: Only city and state or region. Specific address details are not necessary.</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        John Alexander Doe <br />
                        Phone: (123) 456-7890<br />
                        Email: john.alexander.doe@example.com<br />
                        LinkedIn: linkedin.com/in/johndoe<br />
                        Portfolio: johndoeportfolio.com<br />
                        Location: New York, NY, USA<br />
                    </pre>
                </section>

                <section>
                    <h2>2. Objective Statement</h2>
                    <p>An objective statement provides a quick summary of who you are, what you’re looking for, and why you’re a good fit. It should be specific to the job you're applying for and show your enthusiasm.</p>
                    <ul>
                        <li>Mention your area of interest and professional goals.</li>
                        <li>Focus on how you can add value to the company.</li>
                        <li>Keep it concise (2-3 lines).</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        "Motivated and results-driven recent graduate seeking an <br />
                        entry-level marketing position to utilize my skills in <br />
                        digital marketing, content creation, and market research to <br />
                        contribute to a dynamic team."<br />
                    </pre>
                </section>

                <section>
                    <h2>3. Education Section</h2>
                    <p>For freshers, your educational qualifications are one of the most important parts of your resume. This section should highlight your academic background, including degrees, the institution where you studied, and any relevant achievements.</p>
                    <ul>
                        <li><strong>Degree/Qualification</strong>: Include the full name of your degree.</li>
                        <li><strong>Institution Name</strong>: The name of the university/college.</li>
                        <li><strong>Graduation Year</strong>: The year you graduated (or are expected to graduate).</li>
                        <li><strong>Key Achievements</strong>: Mention honors, awards, or notable coursework if relevant.</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        Bachelor of Arts in Marketing<br />
                        XYZ University, 2024<br />
                        Graduated with Honors (3.8/4.0 GPA)<br />
                        Relevant Courses: Digital Marketing, Consumer Behavior, Market Research<br />
                    </pre>
                </section>

                <section>
                    <h2>4. Skills Section</h2>
                    <p>This section is crucial as it demonstrates what you can bring to the job. It should cover both <strong>hard skills</strong> (technical abilities) and <strong>soft skills</strong> (interpersonal and transferable qualities). Focus on the skills most relevant to the position you're applying for.</p>

                    <h3>Hard Skills</h3>
                    <ul>
                        <li>Software or tools you are proficient in.</li>
                        <li>Technical knowledge or certifications (e.g., coding languages, design software, etc.)</li>
                    </ul>

                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Personal attributes like communication, leadership, problem-solving, etc.</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        Hard Skills:<br />
                        - Microsoft Office Suite (Excel, Word, PowerPoint)<br />
                        - HTML, CSS, and JavaScript (for technical roles)<br />
                        - Data analysis (for analytical roles)<br />
                        - Adobe Photoshop (for design roles)<br /><br />

                        Soft Skills:<br />
                        - Strong communication and interpersonal skills<br />
                        - Teamwork and collaboration<br />
                        - Critical thinking and problem-solving<br />
                        - Time management and adaptability<br />
                    </pre>
                </section>

                <section>
                    <h2>5. Work Experience (If Applicable)</h2>
                    <p>Even if you are a fresher, it’s important to showcase any work experience that could be relevant. This includes internships, part-time jobs, volunteering, or freelance work.</p>
                    <ul>
                        <li><strong>Job Title</strong>: The role you held.</li>
                        <li><strong>Company Name</strong>: The name of the organization.</li>
                        <li><strong>Duration</strong>: The period during which you worked.</li>
                        <li><strong>Key Responsibilities/Achievements</strong>: Focus on what you did and what you accomplished.</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        Intern, Digital Marketing – XYZ Corporation (June 2023 – August 2023)<br />
                        - Assisted in content creation for social media platforms, increasing engagement by 25%.<br />
                        - Conducted market research that contributed to the launch of a new product line.<br />
                        - Analyzed website traffic using Google Analytics and provided actionable insights.<br />
                    </pre>
                </section>

                <section>
                    <h2>6. Projects (If Applicable)</h2>
                    <p>If you’ve worked on relevant academic, personal, or freelance projects, this section allows you to showcase practical application of your skills. This can be a strong section for freshers.</p>
                    <ul>
                        <li><strong>Project Title</strong>: Name of the project.</li>
                        <li><strong>Description</strong>: Brief overview of what the project was about and your role.</li>
                        <li><strong>Technologies/Skills Used</strong>: Highlight the tools or skills you utilized.</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        Personal Website (Portfolio)<br />
                        - Developed a personal website to showcase my writing and marketing skills using <br />
                        WordPress and HTML/CSS.<br />
                        - Created a blog section to share marketing tips and trends, <br />
                        receiving over 500 visitors in the first month.<br />
                    </pre>
                </section>

                <section>
                    <h2>7. Achievements</h2>
                    <p>Including any academic or personal achievements adds value to your resume, demonstrating your ability to excel in various areas.</p>
                    <ul>
                        <li>Academic awards, recognitions, or scholarships.</li>
                        <li>Competitions or contests won.</li>
                        <li>Significant milestones achieved during internships, volunteer work, etc.</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        - Winner of the National Debate Championship 2023<br />
                        - Awarded Best Research Paper at University Level (2023)<br />
                        - Completed Google Analytics Certification (2024)<br />
                    </pre>
                </section>

                <section>
                    <h2>8. Personal Details (Optional)</h2>
                    <p>This section is not always necessary and depends on the region or the specific industry. Some recruiters may ask for these details, but they are not mandatory in most countries.</p>
                    <ul>
                        <li><strong>Date of Birth</strong> (only if culturally appropriate or required by the employer).</li>
                        <li><strong>Nationality</strong> (if applying in a specific country where this might be relevant).</li>
                        <li><strong>Languages Spoken</strong> (especially if bilingual skills are useful in the job).</li>
                    </ul>
                    <p><strong>Example:</strong></p>
                    <pre>
                        Date of Birth: January 15, 2002<br />
                        Nationality: American<br />
                        Languages: English (Native), Spanish (Fluent)<br />
                    </pre>
                </section>

                <section>
                    <h2>Additional Sections (Optional)</h2>
                    <ul>
                        <li><strong>Certifications</strong>: Any additional courses, certificates, or online courses.</li>
                        <li><strong>Hobbies/Interests</strong>: Some employers appreciate seeing a well-rounded candidate.</li>
                        <li><strong>References</strong>: Either state that references are available upon request, or provide contact details for previous employers or mentors (ensure permission first).</li>
                    </ul>
                </section>

                <section>
                    <h2>Resume Layout Tips</h2>
                    <ul>
                        <li><strong>Keep it concise</strong>: Limit your resume to one page unless you have substantial experience.</li>
                        <li><strong>Clear headings</strong>: Use bold or slightly larger text for section titles.</li>
                        <li><strong>Consistent formatting</strong>: Stick to the same font style and size throughout.</li>
                        <li><strong>Bullet points</strong>: Use these to keep your descriptions concise and scannable.</li>
                    </ul>
                </section>
                <ResumeBuilder/>


                <h2>How to Create a Resume Format for Freshers</h2>
                <p>
                    Creating a resume format for freshers doesn’t have to be complicated. Follow these tips to make sure your resume stands out:
                </p>
                <ul>
                    <li><strong>Choose the Right Template:</strong> Select a clean, professional design. Avoid using overly complicated fonts, colors, or images that might distract the hiring manager.</li>
                    <li><strong>Be Concise and Clear:</strong> Keep your resume to one page, focusing on your most relevant qualifications and experiences.</li>
                    <li><strong>Tailor Your Resume:</strong> Customize your resume for each job application. Highlight the skills and experiences that align with the specific job description.</li>
                    <li><strong>Use Action Words:</strong> Use strong verbs like "achieved," "led," "designed," or "developed" to describe your accomplishments.</li>
                    <li><strong>Proofread and Edit:</strong> Typos or grammatical mistakes can leave a negative impression. Always proofread your resume before submitting it.</li>
                </ul>

                <h2>Example of a Resume Format for Freshers</h2>
                <p>Here’s an example of what a resume format for freshers could look like:</p>

                <pre>
                    John Doe <br />
                    Phone: 123-456-7890<br />
                    Email: john.doe@email.com<br />
                    LinkedIn: linkedin.com/in/johndoe<br />
                    Portfolio: johndoeportfolio.com<br /><br />

                    Objective<br />
                    Motivated recent graduate with a degree in Computer Science. <br />
                    Looking to apply my skills in software development and coding to <br />
                    contribute to an innovative tech company.<br /><br />

                    Education<br />
                    Bachelor of Science in Computer Science <br />
                    XYZ University, 2024 <br />
                    GPA: 3.7/4.0 <br />
                    Relevant Coursework: Data Structures, Algorithms, Web Development<br /><br />

                    Skills<br />
                    - Programming Languages: Java, Python, C++<br />
                    - Web Development: HTML, CSS, JavaScript<br />
                    - Database Management: MySQL, MongoDB<br />
                    - Strong problem-solving and analytical skills<br />
                    - Excellent teamwork and communication abilities<br /><br />

                    Work Experience<br />
                    Software Development Intern<br />
                    ABC Corp., Summer 2023<br />
                    - Assisted in developing new features for the company’s website.<br />
                    - Collaborated with the development team to troubleshoot and resolve issues.<br />
                    - Conducted research on the latest web technologies.<br />
                    <br />
                    Projects<br />
                    - Personal Portfolio Website<br />
                    - Student Management System<br />
                    <br />
                    Achievements<br />
                    - Dean’s List, XYZ University (2023)<br />
                    - 1st Place in University Hackathon (2022)<br />
</pre>

                <h2>Free Resume Templates for Freshers</h2>
                <FresherResume fresherResumeImage = {fresherResumeImage}/>
                <p>
                    There are plenty of resume templates for freshers available online. Websites like <a href="https://resumeera.xyz">resumeera.xyz</a> offer free, professionally designed templates that you can easily customize. These templates are designed to highlight your strengths, even with limited work experience. Whether you are creating your resume from scratch or improving an existing one, templates help streamline the process.
                </p>

                <h2>Key Takeaways</h2>
                <ul>
                    <li>A resume format for freshers should highlight your education, skills, and any relevant work or project experience.</li>
                    <li>Keep your resume concise and focused on what makes you a strong candidate.</li>
                    <li>Always tailor your resume to the specific job you are applying for.</li>
                    <li>Use professional resume templates to create a clean, easy-to-read document.</li>
                </ul>

                <section id="">
                    <h2>10. Frequently Asked Questions (FAQs)</h2>
                    <div className="faqs">
                        <div className='faq-item'>
                            <h3>Q: What is the best <Link to='/resume-format'>resume format</Link> for freshers?</h3>
                            <p>
                                A: The best resume format for freshers is typically the reverse chronological format. This format highlights your most recent educational qualifications and internships, making them the focal point. As freshers usually have limited work experience, it’s crucial to emphasize your education, skills, and any practical exposure through internships, projects, or part-time roles. The reverse chronological format helps recruiters easily see your most relevant qualifications first. Additionally, it demonstrates your ability to present information in a structured manner, showcasing your attention to detail and professionalism.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <h3>Q: Can I use a resume template for freshers?</h3>
                            <p>
                                A: Absolutely! Using a resume template for freshers is a great way to save time and ensure that your resume is well-organized, clean, and professional. Templates provide structure and formatting that make it easier for you to focus on the content of your resume. A good template will guide you through including the necessary sections, such as your education, skills, and projects, in a coherent and visually appealing way. Additionally, templates often ensure that your resume is ATS (Applicant Tracking System) optimized, helping it pass through the initial stages of recruitment processes that use automated systems to filter candidates. This is especially important as many companies now rely on ATS to handle applications.
                            </p>
                        </div>
                        <div className='faq-item'>
                            <h3>Q: How can resumeera.xyz help me build a fresher’s resume?</h3>
                            <p>
                                A: Resumeera.xyz offers a simple, intuitive platform designed to help freshers create standout resumes quickly and efficiently. Whether you’re applying for your first job or looking to transition into a new industry, Resumeera.xyz provides a wide range of customizable, ATS-friendly resume templates. These templates are specifically crafted to highlight your strengths, such as your education, skills, and internship experience, even if you have little to no professional work history. Additionally, the platform’s user-friendly interface guides you through every step of the resume creation process, making it easy to add sections, adjust formatting, and customize the content based on your personal experiences and career goals. By using Resumeera.xyz, you can ensure that your resume is professional, polished, and optimized for both human recruiters and automated systems.
                            </p>
                        </div>
                    </div>
                </section>

                <p>
                    Whether you are a recent graduate or still in school, crafting an impactful resume is a critical part of securing your first job. By using the right resume format for freshers, highlighting your key strengths, and using professional templates, you can increase your chances of landing the perfect role. You can start by exploring free resume templates from <a href="https://resumeera.xyz">resumeera.xyz</a> to create a resume that will help you stand out in your job search.
                </p>
                <section className='releted-article'>
                    <h2>RELETED ARTICLE: YOU CAN'T MISS IF YOU WANT TO WRITE A RESUME </h2>
                    <br /><br /><Link to='/data-driven-resume-formatting-for-analytical-jobs-formatting-for-analytical-jobs'>DATA DRIVEN RESUME FORMATTING FOR ANALYTICAL JOBS FORMATTING FOR ANALYTICAL JOBS</Link>
                    <br /><br /><Link to='/social-media-influencer-resume-formatting'>SOCIAL MEDIA INFUENCER RESUME FORMATTING</Link>
                    <br /><br /><Link to='/job-specific-resume-formatting'>JOB SPECIFIC RESUME FORMATTING</Link>
                    <br /><br /><Link to='/freelancers-portfolio-resume-formatting-tips'>FREELANCERS PORTFOLIO RESUME FORMATTING TIPS</Link>
                    <br /><br /><Link to='/remote-resume-formatting-crafting-a-standout-resume-for-remote-jobs'>REMOTE RESUME FORMATTING CRAFTING A STANDOUT RESUME FOR REMOMTE JOBS</Link>
                    
                </section>
                <div>
                    <WelcomeNotes />
                    <RandomeArticleToBlogCareer />
                </div>
            </article>
            <div><GoogleAd /></div>
            <div><GoogleAd /></div>
            <section>
                <div>
                    <AuthorCard />
                </div>
                <div>
                    <CallToAction />
                </div>
                <div className="stickyShare">
                    <ShareButtons url={ArticleUrl} title={ArticleTitle} />
                </div>
            </section>
        </div>
    )
}
