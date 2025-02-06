import React, { useEffect, useState } from 'react'
import DateAndAuthor from '../DateAndAuthor';
import WelcomeNotes from '../WelcomeNotes';
import RandomeArticleToBlogCareer from '../RandomeArticleToBlogCareer';
import GoogleAd from '../adFolder/GoogleAd';
import AuthorCard from '../AuthorCard';
import CallToAction from '../CallToAction';
import ShareButtons from '../shareButton/ShareButtons';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import GetNoticedwith from '../../image/image_for_link/Get Noticed with the Best Resume.jpeg'
import { useDispatch } from 'react-redux';
import { templatePage } from '../../Redux/action';
import ResumeEraHeading from '../ResumeEraHeading';
import ImageCard from '../ImageCardResusable/ImageCardResumeble';
import FresherResume from '../FresherResume';
export default function ResumeFormatforFreshersSample(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages ,fresherResumeImage} = prop
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/resume-format-for-freshers-sample-download-now-free";
    const ArticleTitle = "Resume Format for Freshers Sample: Download Now for Free";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'Resume Format for Freshers Sample: Download Now for Free'
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
                <title>Resume Format for Freshers Sample: Download Now for Free</title>
                <meta
                    name="description"
                    content="Download a free sample of resume format for freshers. Build a perfect resume with tips, templates, and a professional guide for beginners."
                />
                <meta
                    name="keywords"
                    content="resume format for freshers, free resume sample, fresher resume tips, resume for beginners, download resume format, professional resume template"
                />
                <link rel="canonical" href="https://resumeera.xyz/resume-format-for-freshers-sample-download-now-free" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Resume Format for Freshers Sample: Download Now for Free" />
                <meta
                    property="og:description"
                    content="Download a free sample of resume format for freshers. Build a perfect resume with tips, templates, and a professional guide for beginners."
                />
                <meta property="og:image" content="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg" />
                <meta property="og:url" content="https://resumeera.xyz/resume-format-for-freshers-sample-download-now-free" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:title" content="Resume Format for Freshers Sample: Download Now for Free" />
                <meta
                    name="twitter:description"
                    content="Download a free sample of resume format for freshers. Build a perfect resume with tips, templates, and a professional guide for beginners."
                />
                <meta name="twitter:image" content="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">
                    {`{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://resumeera.xyz/resume-format-for-freshers-sample-download-now-free"
  },
  "headline": "Resume Format for Freshers Sample: download now in free",
  "description": "resume format for freshers sample",
  "image": "https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg",  
  "author": {
    "@type": "Organization",
    "name": "ResumeEra Team",
    "url": "https://resumeera.xyz/about"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "ResumeEra",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
    }
  },
  "datePublished": "2025-02-03",
  "dateModified": "2025-02-03"
}`}
                </script>
                <script type="application/ld+json">
                    {`{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best resume format for freshers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best resume format for freshers is typically the reverse chronological format. This format highlights your most recent educational qualifications and internships, making them the focal point. As freshers usually have limited work experience, it’s crucial to emphasize your education, skills, and any practical exposure through internships, projects, or part-time roles. The reverse chronological format helps recruiters easily see your most relevant qualifications first. Additionally, it demonstrates your ability to present information in a structured manner, showcasing your attention to detail and professionalism."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a resume template for freshers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Using a resume template for fresher sample is a great way to save time while ensuring that your resume is well-organized and professional. Templates are designed to meet the expectations of hiring managers and can be easily customized based on your qualifications. They also help in ensuring that your resume is visually appealing and structured in a way that passes through Applicant Tracking Systems (ATS), which many companies use to filter resumes before they even reach a hiring manager."
        }
      },
      {
        "@type": "Question",
        "name": "How can resumeera.xyz help me build a fresher’s resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resumeera.xyz provides a range of customizable, ATS-friendly resume templates that are specifically designed to help freshers create a polished and professional resume. Whether you're looking for a simple and straightforward design or something more modern and visually appealing, Resumeera.xyz offers templates that can be tailored to suit your qualifications and the job you're applying for. Additionally, the platform's user-friendly interface allows you to quickly build and download your resume, making the process of creating a standout document both easy and efficient."
        }
      }
    ]
  }`}
                </script>
            </Helmet>
            <ResumeEraHeading title={title} publishDate={publishDate} />
            <article className='aboutResumeEra'>
                <div>
                    <img src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg" style={{ width: '100%', height: '70%' }} loading='lazy' alt="resume format for freshers sample" />
                </div>
                <section className="introduction">
                    <p>
                        Creating a strong and professional resume is one of the most crucial steps when 
                        applying for your first job. As a fresher, you might be unsure about how to 
                        structure your resume. The right resume format for fresher can make a huge 
                        difference in getting your foot in the door. This article will walk you through a 
                        resume format for fresher example, give you actionable tips, and provide you with a 
                        resume template for fresher sample that you can customize. Let’s dive in!
                    </p>
                </section><div><GoogleAd/></div>
                        
                <section className="table-of-contents">
                    <h2>Table of Contents</h2>
                    <ol>
                        <li><a href="#what-is-a-freshers-resume">What is a Fresher’s Resume?</a></li>
                        <li><a href="#why-is-the-right-resume-format-important">Why is the Right Resume Format Important for Freshers?</a></li>
                        <li><a href="#key-sections-of-a-freshers-resume">Key Sections of a Fresher’s Resume</a></li>
                        <li><a href="#sample-fresher-resume-format">Sample Fresher Resume Format</a></li>
                        <li><a href="#how-to-write-a-freshers-resume">How to Write a Fresher’s Resume</a></li>
                        <li><a href="#resume-formatting-tips-for-freshers">Resume Formatting Tips for Freshers</a></li>
                        <li><a href="#common-mistakes-to-avoid">Common Mistakes to Avoid in Your Resume</a></li>
                        <li><a href="#using-resumeera">Using Resumeera.xyz to Create a Professional Resume</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                        <li><a href="#faq">Frequently Asked Questions (FAQs)</a></li>
                    </ol>
                </section><div><GoogleAd/></div>

                <section id="what-is-a-freshers-resume">
                    <h2>1. What is a Fresher’s Resume?</h2>
                    <p>
                        A fresher's resume is designed for individuals who are new to the job market and have little to no professional work experience. It focuses primarily on education, skills, certifications, and any practical experience such as internships, part-time work, or projects.
                        As a fresher, you may not have much work experience to highlight, but your skills, academic achievements, and potential should take center stage. Understanding the resume format for fresher example will help you build a professional, appealing resume that catches the attention of hiring managers.
                    </p>
                </section><div><GoogleAd/></div>

                <section id="why-is-the-right-resume-format-important">
                    <h2>2. Why is the Right Resume Format Important for Freshers?</h2>
                    <p>
                        Choosing the right resume format for fresher is crucial because it provides structure and helps showcase your strengths despite limited work experience. A well-organized resume increases your chances of being noticed by recruiters. Here’s why the right format matters:
                    </p>
                    <ul>
                        <li><strong>Clarity:</strong> It ensures your qualifications are clearly presented.</li>
                        <li><strong>Professionalism:</strong> A clean format shows attention to detail and professionalism.</li>
                        <li><strong>Relevance:</strong> It helps highlight your most important skills and achievements.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="key-sections-of-a-freshers-resume">
                    <h2>3. Key Sections of a Fresher’s Resume</h2>
                    <div className='d-md-flex justify-content-around ' style={{ alignItems: 'center', height: '50%' }} >
                        <div className='me-md-5'>
                            <p>When creating a fresher’s resume, there are a few key sections you must include:</p>
                            <ul>
                                <li><strong>Contact Information:</strong> Basic details like your name, phone number, email, and LinkedIn profile.</li>
                                <li><strong>Objective or Professional Summary:</strong> A brief statement of your career goals.</li>
                                <li><strong>Education:</strong> Details of your academic qualifications.</li>
                                <li><strong>Skills:</strong> Highlight key skills like programming languages, communication, etc.</li>
                                <li><strong>Projects and Internships:</strong> Showcase any hands-on experiences you’ve had.</li>
                                <li><strong>Certifications:</strong> Mention any certifications or additional training that enhance your profile.</li>
                            </ul>
                        </div>
                        <div style={{}}>
                            {[selectedimage].map((image) => (
                                <ImageCard
                                    key={image.id}
                                    image={image}
                                    hoveredImage={hoveredImage}
                                    setHoveredImage={setHoveredImage}
                                    handleClick={(e) => handleClick(e, image.id)}

                                />
                            ))}
                        </div>
                    </div>

                </section><div><GoogleAd/></div>

                <section id="sample-fresher-resume-format">
                    <h2>4. Sample Fresher Resume Format</h2>
                    <h3>4.1. Contact Information</h3>
                    <p>Start by listing your contact details at the top of your resume. For example:</p>
                    <pre>
                        John Doe <br />
                        Phone: +91 123 456 7890<br />
                        Email: john.doe@example.com<br />
                        LinkedIn: linkedin.com/in/johndoe<br />
                    </pre>

                    <h3>4.2. Resume Objective/Professional Summary</h3>
                    <p>As a fresher, your objective should focus on your goals and aspirations. Here's an example:</p>
                    <blockquote>
                        "A highly motivated and results-driven graduate with a Bachelor's degree in Computer Science. Seeking an entry-level software development role to apply my programming skills and contribute to innovative solutions in a dynamic work environment."
                    </blockquote>

                    <h3>4.3. Education</h3>
                    <p>Start by listing your most recent degree and academic achievements. Include any relevant courses or certifications that relate to the job you're applying for. Here's an example:</p>
                    <ul style={{ border: '1px dashed grey ', borderRadius: '15px', padding: '15px' }}>
                        <li><strong>Bachelor of Technology in Computer Science</strong></li>
                        <li><em>XYZ University, 2024</em></li>
                        <li><strong>GPA:</strong> 8.9/10</li>
                        <li><strong>Relevant Courses:</strong>
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Web Development</li>
                                <li>Database Management Systems</li>
                                <li>Object-Oriented Programming (OOP)</li>
                            </ul>
                        </li>
                        <li><strong>Academic Achievements:</strong>
                            <ul>
                                <li>Dean's List for Academic Excellence, 2023</li>
                                <li>Top 5% of the class in Data Structures and Algorithms</li>
                            </ul>
                        </li>
                    </ul>


                    <h3>4.4. Skills</h3>
                    <p>In this section, highlight your technical (hard) skills and interpersonal (soft) skills. Make sure to mention skills that are relevant to the role you're applying for. Here’s an example:</p>
                    <ul style={{ border: '1px dashed grey ', borderRadius: '15px', padding: '15px' }}>
                        <li><strong>Hard Skills:</strong>
                            <ul>
                                <li><em>Java</em>: Proficient in object-oriented programming, with experience in building scalable applications using Java frameworks like Spring and Hibernate.</li>
                                <li><em>Python</em>: Strong knowledge of Python for data analysis, web scraping, and machine learning using libraries such as Pandas, NumPy, and Scikit-learn.</li>
                                <li><em>HTML & CSS</em>: Skilled in creating responsive and visually appealing web pages using HTML5 and CSS3, with a focus on UI/UX principles.</li>
                                <li><em>SQL</em>: Experienced in writing complex SQL queries, managing databases, and optimizing database performance with tools like MySQL and PostgreSQL.</li>
                                <li><em>MS Excel</em>: Advanced proficiency in Excel, including pivot tables, macros, and data visualization tools to analyze and present business data effectively.</li>
                            </ul>
                        </li>

                        <li><strong>Soft Skills:</strong>
                            <ul>
                                <li><em>Teamwork</em>: Able to work collaboratively in team settings, valuing diverse perspectives and maintaining a positive attitude to achieve common goals.</li>
                                <li><em>Leadership</em>: Demonstrated leadership skills through managing group projects and leading initiatives such as organizing coding workshops and hackathons.</li>
                                <li><em>Problem-Solving</em>: Strong analytical skills in approaching problems creatively, with the ability to think critically and implement effective solutions under pressure.</li>
                                <li><em>Communication</em>: Excellent verbal and written communication skills, with experience in presenting technical content to both technical and non-technical audiences.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>4.5. Projects and Internships</h3>
<p>Even if you have limited formal work experience, showcasing any projects or internships is crucial as they demonstrate your practical knowledge and ability to apply your skills. Here's an improved example:</p>
<p style={{ border: '1px dashed grey ', borderRadius: '15px', padding: '15px'}}>
    <strong>Internship – Software Developer</strong><br />
    <strong>XYZ Corp, June 2023 – August 2023</strong><br />
    - Developed a user-friendly mobile application to streamline project progress tracking for internal teams.<br />
    - Utilized Java and Android Studio to design, code, and deploy the app, ensuring high performance and user-friendliness.<br />
    - Collaborated with the design team to implement UI/UX improvements, resulting in a 20% increase in user engagement.<br />
    - Conducted troubleshooting and debugging to enhance functionality and resolve issues, improving app stability.<br />
    - Gained hands-on experience with version control tools like Git to manage codebase updates effectively.<br />
</p>


                    <h3>4.6. Certifications and Achievements</h3>
                    <p>Certifications and achievements provide additional credibility to your qualifications and demonstrate your dedication to continuous learning and personal growth. Below are some examples that can be included in this section:</p>
                    <ul style={{ border: '1px dashed grey ', borderRadius: '15px', padding: '15px' }}>
                        <li><strong>Certification:</strong> <em>Python for Data Science</em> - Coursera (2023)
                            <br /><span class="description">Acquired in-depth knowledge of Python programming, data analysis, and visualization techniques. Completed hands-on projects using Python libraries like Pandas, NumPy, and Matplotlib to solve real-world data challenges.</span>
                        </li>
                        <li><strong>Certification:</strong> <em>Web Development Specialization</em> - Coursera (2022)
                            <br /><span class="description">Completed a comprehensive course covering front-end (HTML, CSS, JavaScript) and back-end (Node.js, Express.js) development. Designed and developed a fully functional e-commerce website as part of the final project.</span>
                        </li>
                        <li><strong>Achievement:</strong> <em>Winner, National Hackathon 2023</em>
                            <br /><span class="description">Led a team of 4 to victory in a national-level coding competition by developing a mobile app aimed at improving mental health awareness among students. The app was praised for its user-friendly design and innovative features.</span>
                        </li>
                        <li><strong>Achievement:</strong> <em>Dean’s List</em> - XYZ University (2022)
                            <br /><span class="description">Awarded for achieving a GPA of 9.5/10 in my second year, ranking in the top 10% of my class. Recognized for academic excellence and consistent high performance in all core courses.</span>
                        </li>
                    </ul>

                </section><div><GoogleAd/></div>

                <section id="how-to-write-a-freshers-resume">
                    <h2>5. How to Write a Fresher’s Resume</h2>
                    <p>Writing a fresher's resume involves focusing on your potential, skills, and education. Here’s how you can approach it:</p>
                    <ul>
                        <li>Start with Contact Information: Make sure your name and contact details are clear and easy to find.</li>
                        <li>Write a Professional Summary: Write a brief statement summarizing your goals and what you aim to achieve in the position you're applying for.</li>
                        <li>Highlight Education: If you’re a fresher, your education should be front and center.</li>
                        <li>Showcase Skills: List key skills that are relevant to the job you’re applying for.</li>
                        <li>Focus on Projects and Internships: Even if you don't have full-time work experience, showcase relevant projects or internships.</li>
                        <li>Add Certifications and Achievements: Highlight any additional qualifications that will make you stand out.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="resume-formatting-tips-for-freshers">
                    <h2>6. Resume Formatting Tips for Freshers</h2>
                    <ul>
                        <li>Use a clean, simple font: Stick to professional fonts like Arial, Calibri, or Times New Roman.</li>
                        <li>Keep it to one page: Freshers should aim to keep their resume concise.</li>
                        <li>Use bullet points: This helps organize information and makes your resume easier to skim.</li>
                        <li>Avoid excessive graphics or colors: Keep it professional and easy to read.</li>
                    </ul>
                    <h3>Resume Format For Freshers Sample</h3>
                    <FresherResume fresherResumeImage={fresherResumeImage}/>
                </section><div><GoogleAd/></div>

                <section id="common-mistakes-to-avoid">
    <h2>7. Common Mistakes to Avoid in Your Resume</h2>
    <p>When creating a resume, it’s important to avoid common pitfalls that can hurt your chances of landing an interview. Here are some of the most frequent mistakes freshers make:</p>
    <ul>
        <li><strong>Overloading it with irrelevant information:</strong> Keep your resume focused and relevant to the job you're applying for. Avoid including unnecessary personal details or unrelated hobbies that don't add value.</li>
        <li><strong>Using a generic template that doesn’t stand out:</strong> Generic templates might not grab a recruiter’s attention. Choose a modern, professional template that reflects your personality and aligns with the role you’re aiming for.</li>
        <li><strong>Not proofreading for spelling and grammar errors:</strong> Small mistakes can make a big impact. Always proofread your resume carefully, and if possible, ask someone else to review it to catch any errors you might have missed.</li>
        <li><strong>Listing skills that are not relevant to the position:</strong> Tailor your skills section to match the job you're applying for. Avoid listing skills that aren't directly related to the position as it can confuse the hiring manager.</li>
    </ul>
</section><div><GoogleAd/></div>
                <section id="using-resumeera">
                    <h2>8. Using Resumeera.xyz to Create a Professional Resume</h2>
                    <p>
                        Creating a fresher resume has never been easier with resumeera.xyz. This platform provides you with professional resume templates that are easy to customize. Whether you need an ATS-friendly resume or a visually appealing design, resumeera.xyz offers a variety of templates suited to your needs. Here’s why you should use it:
                    </p>
                    <ul>
                        <li>Customizable templates: Modify the template to fit your qualifications and the job you are applying for.</li>
                        <li>ATS-friendly: Ensure your resume passes through Applicant Tracking Systems.</li>
                        <li>Quick and easy: Build your resume in minutes with easy-to-follow instructions.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="conclusion">
    <h2>9. Conclusion</h2>
    <p>
        In conclusion, selecting the appropriate resume format for a fresher is crucial to 
        making a lasting impression on hiring managers. By emphasizing your academic qualifications, 
        skills, and potential, and presenting this information in a well-structured and professional manner, 
        you can significantly improve your chances of securing an interview. It is essential to choose a 
        polished and tailored resume template. For an efficient, streamlined resume-building process, 
        consider leveraging the tools and templates provided by <strong><Link to="/">resumeera.xyz</Link> </strong>.
    </p>
</section><div><GoogleAd/></div>


                <section id="faq">
                    <h2>10. Frequently Asked Questions (FAQs)</h2>
                    <div className="faq">
                        <div className='faq-item'><h3>Q: What is the best <Link to='/resume-format'></Link> for freshers?</h3>
                            <p>
                                A: The best resume format for freshers is typically the reverse chronological format. This format highlights your most recent educational qualifications and internships, making them the focal point. As freshers usually have limited work experience, it’s crucial to emphasize your education, skills, and any practical exposure through internships, projects, or part-time roles. The reverse chronological format helps recruiters easily see your most relevant qualifications first. Additionally, it demonstrates your ability to present information in a structured manner, showcasing your attention to detail and professionalism.
                            </p></div>
                        <div className='faq-item'> <h3>Q: Can I use a resume template for freshers?</h3>
                            <p>
                                A: Absolutely! Using a resume template for freshers is a great way to save time and ensure that your resume is well-organized, clean, and professional. Templates provide structure and formatting that make it easier for you to focus on the content of your resume. A good template will guide you through including the necessary sections, such as your education, skills, and projects, in a coherent and visually appealing way. Additionally, templates often ensure that your resume is ATS (Applicant Tracking System) optimized, helping it pass through the initial stages of recruitment processes that use automated systems to filter candidates. This is especially important as many companies now rely on ATS to handle applications.
                            </p></div>
                        <div className='faq-item'> <h3>Q: How can resumeera.xyz help me build a fresher’s resume?</h3>
                            <p>
                                A: Resumeera.xyz offers a simple, intuitive platform designed to help freshers create standout resumes quickly and efficiently. 
                                Whether you’re applying for your first job or looking to transition into a new industry, Resumeera.xyz provides a wide range of customizable, ATS-friendly resume templates. These templates are specifically crafted to highlight your strengths, such as your education, skills, and internship experience, even if you have little to no professional work history. Additionally, the platform’s user-friendly interface guides you through every step of the resume creation process, making it easy to add sections, adjust formatting, and customize the content based on your personal experiences and career goals. By using Resumeera.xyz, you can ensure that your resume is professional, polished, and optimized for both human recruiters and automated systems.
                            </p></div>
                    </div>
                </section><div><GoogleAd/></div>


                <section className="key-takeaways">
                    <h2>Key Takeaways:</h2>
                    <ul>
                        <li>Choose the right resume format for fresher based on your education and skills.</li>
                        <li>Use a professional resume template for fresher sample for quick and efficient results.</li>
                        <li>Highlight key sections like your education, skills, and projects to stand out.</li>
                        <li>Leverage tools like resumeera.xyz to create a tailored, ATS-friendly resume.</li>
                    </ul>
                </section><div><GoogleAd/></div>
                <section className='releted-article'>
                    <h2>YOU CAN'T MISS IF YOU WANT TO CREATE RESUME</h2>
                    <br /><br /><Link to="/11-ats-formatting-mistakes-that-can-cost-you-a-job">11 ATS-FORAMTTING MISTAKES THAT CAN COST YOU A JOB</Link>
                    <br /><br /><Link to="/difference-between-cv-and-resume">DIFFERENCE BETWEEN CV AND RESUME</Link>
                    <br /><br /><Link to="/11-essential-cv-tips-2024">11 ESSENTIAL CV TIPS 2024</Link>
                    <br /><br /><Link to="/cybersecurity-resume-tips">CYBERSECRITY RESUME TIPS</Link>
                    <br /><br /><Link to="/Dont_Copy_Paste_On_Your_Cv">DONT COPY PAST ON YOUR CV</Link>
                </section><div><GoogleAd/></div>

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
            </section><div><GoogleAd/></div>
        </div>
    )
}
