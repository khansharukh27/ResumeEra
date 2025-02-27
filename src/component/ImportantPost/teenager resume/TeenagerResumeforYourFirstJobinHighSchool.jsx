import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { templatePage } from "../../../Redux/action";
import { Helmet } from "react-helmet";
import ResumeEraHeading from "../../ResumeEraHeading";
import WelcomeNotes from "../../WelcomeNotes";
import RandomeArticleToBlogCareer from "../../RandomeArticleToBlogCareer";
import GoogleAd from "../../adFolder/GoogleAd";
import AuthorCard from "../../AuthorCard";
import CallToAction from "../../CallToAction";
import ShareButtons from "../../shareButton/ShareButtons";
import ImageCard from "../../ImageCardResusable/ImageCardResumeble";
import FresherResume from "../../FresherResume";
import ResumeBuilder from "../../ResumeBuilder";

export default function TeenagerResumeforYourFirstJobinHighSchool(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages, fresherResumeImage } = prop
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school";
    const ArticleTitle = "How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide'
    const publishDate = '2025-01-11'
    const dispatch = useDispatch();

    const selectedImageId = 110;//chronoligical resume
    const selectedimage = techImages.find((image) => image.id === selectedImageId)
    const selectedImageId2 = 101;//functional resume
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
                {/* Basic Meta Tags */}
                <title>How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide</title>
                <meta name="description" content="Learn how to create a professional teenager resume for your first job in high school. This step-by-step guide will help you highlight your skills and experiences to land that first job." />
                <meta name="keywords" content="teenager resume, first job resume, high school resume, resume guide, first job, resume tips, resume for teenagers, job application" />
                <link rel="canonical" href="https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide" />
                <meta property="og:description" content="Learn how to create a professional teenager resume for your first job in high school. This step-by-step guide will help you highlight your skills and experiences to land that first job." />
                <meta property="og:image" content="https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp" />
                <meta property="og:url" content="https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school" />
                <meta property="og:type" content="article" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide" />
                <meta name="twitter:description" content="Learn how to create a professional teenager resume for your first job in high school. This step-by-step guide will help you highlight your skills and experiences to land that first job." />
                <meta name="twitter:image" content="https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp" />
                <meta name="twitter:url" content="https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school" />

                {/* Article Schema (JSON-LD) */}
                <script type="application/ld+json">
                    {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide",
            "description": "Learn how to create a professional teenager resume for your first job in high school. This step-by-step guide will help you highlight your skills and experiences to land that first job.",
            "image": "https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp",
            "author": {
              "@type": "Organization",
              "name": "ResumeEra",
              "logo": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ResumeEra",
              "logo": {
                "@type": "ImageObject",
                "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
              }
            },
            "datePublished": "2025-02-14",
            "dateModified": "2025-02-14",
            "url": "https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school"
          }`}
                </script>
                <script type="application/ld+json">
                    {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide",
            "description": "Learn how to create a professional teenager resume for your first job in high school. This step-by-step guide will help you highlight your skills and experiences to land that first job.",
            "image": "https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp",
            "author": {
              "@type": "Organization",
              "name": "ResumeEra",
              "logo": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ResumeEra",
              "logo": {
                "@type": "ImageObject",
                "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
              }
            },
            "datePublished": "2025-02-14",
            "dateModified": "2025-02-14",
            "url": "https://resumeera.xyz/teenager-resume-for-your-first-job-in-high-school",
            "faqPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I write a resume with no experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on your skills, education, volunteer work, and extracurricular activities. Emphasize transferable skills like communication, teamwork, and time management."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include my GPA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if your GPA is strong (typically 3.5 or higher), include it to demonstrate your academic dedication."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I include my volunteer work on my resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Volunteer work shows responsibility, leadership, and commitment—qualities employers value."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I stand out in a competitive job market?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tailor your resume to each job, use strong action verbs, and highlight relevant skills and experiences."
                  }
                }
              ]
            }
          }`}
                </script>
            </Helmet>
            <ResumeEraHeading title={title} publishDate={publishDate} />
            <article className="aboutResumeEra">
                <img src="https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp" style={{ width: '100%', height: '100%' }} loading="lazy" alt="Teenager Resume for Your First Job in High School" />

                <section>
                    <h1>Introduction</h1>
                    <p>Entering the job market as a high school student can feel like a daunting task, especially when it comes to creating your first resume. Many teenagers find it challenging to craft a resume when they have limited (or no) work experience. But don’t worry—this is completely normal. In fact, your teenager resume for your first job in high school is your chance to shine and demonstrate to employers that you are a motivated, responsible, and eager-to-learn candidate, even without years of professional experience.</p>
                    <p>Whether you’re applying for a part-time job in retail, customer service, food service, or any other entry-level position, a strong resume can help you stand out. While it might seem intimidating at first, creating a resume as a teenager is about showcasing your skills, enthusiasm, and willingness to learn on the job.</p>
                    <p>In this step-by-step guide, we will take you through everything you need to know to craft a professional and polished resume for your first job. We’ll explore how to structure your resume, what to include, and how to tailor it to the type of job you are applying for. Even if you have little to no formal work experience, you’ll learn how to highlight your strengths in a way that impresses employers.</p>
                </section><div><GoogleAd/></div>

                <section>
                    <h1>Table of Contents</h1>
                    <ol>
                        <li><a href="#why-is-resume-important">Why is a Teenager Resume Important for Your First Job?</a></li>
                        <li><a href="#key-sections">Key Sections to Include in a Teenager Resume for First Job High School</a>
                            <ol>
                                <li><a href="#contact-information">Contact Information</a></li>
                                <li><a href="#objective-statement">Objective Statement</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#work-experience">Work Experience (If Any)</a></li>
                                <li><a href="#volunteer-activities">Volunteer and Extracurricular Activities</a></li>
                            </ol>
                        </li>
                        <li><a href="#highlight-skills">How to Highlight Transferable Skills for Your First Job</a></li>
                        <li><a href="#creating-resume">Creating a Resume That Stands Out from the Crowd</a></li>
                        <li><a href="#best-practices">Best Practices for Formatting Your Teenager Resume</a></li>
                        <li><a href="#faqs">Frequently Asked Questions (FAQs)</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ol>
                </section><div><GoogleAd/></div>

                <section id="why-is-resume-important">
                    <h2>Why is a Teenager Resume Important for Your First Job?</h2>
                    <p>A teenager resume for your first job in high school is crucial because it serves as your first introduction to potential employers. Your resume is more than just a piece of paper; it’s your opportunity to demonstrate your strengths, interests, and potential.</p>
                    <p>For a high school student, securing your first job can be a life-changing experience. It helps develop skills like responsibility, time management, and financial independence. Additionally, having a teenager resume gives employers a snapshot of who you are—showcasing your communication, teamwork, and problem-solving abilities.</p>
                    <p>A well-crafted resume will give you a competitive edge, even if you have limited formal work experience. Employers value enthusiasm, a willingness to learn, and dedication, and your resume should convey these traits.</p>
                </section><div><GoogleAd/></div>

                <section id="key-sections">
                    <h2>Key Sections to Include in Your Teenager Resume for First Job High School</h2>
                    <p>When creating your teenager resume for your first job, it's essential to focus on the most relevant sections that will highlight your skills, experiences, and potential. Below are the key sections to include, along with examples and tips for creating an impressive resume that will stand out to hiring managers.</p>

                    <section id="contact-information">
                        <h3>A. Contact Information</h3>
                        <p>Start your resume with your contact information at the top of the page. This section should be clear, concise, and easy to locate. It's the first thing employers will see, so make sure it is correct and professional. Be sure to include:</p>
                        <ul>
                            <li><strong>Full Name:</strong> Use your legal name, as it appears on official documents.</li>
                            <li><strong>Phone Number:</strong> A reliable contact number where you can be reached.</li>
                            <li><strong>Email Address:</strong> Use a professional email address. Avoid using nicknames, personal handles, or anything that might seem unprofessional.</li>
                            <li><strong>LinkedIn Profile (Optional):</strong> If you have a LinkedIn profile, include it. It can help provide more insight into your qualifications and interests.</li>
                        </ul>
                        <p className='examplegeneral'><strong>Example Contact Information:</strong></p>
                        <ul className='strong-point'>
                            <li>Name: John Doe</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: john.doe@email.com</li>
                            <li>LinkedIn: linkedin.com/in/johndoe (optional)</li>
                        </ul>
                    </section><div><GoogleAd/></div>


                    <section >
                        <h3>B. Objective Statement</h3>
                        <p>An objective statement is an opportunity to express your goals and why you're applying for the job. Since this is likely your first job, the objective is where you can highlight your enthusiasm, desire to learn, and transferable skills.</p>
                        <p>A strong objective statement should be short, to the point, and tailored to the job you're applying for.</p>
                        <p className='strong-point'><strong>Example Objective Statement:</strong> "Motivated high school student seeking my first job in retail. Eager to apply strong communication, organizational skills, and a positive attitude in a dynamic work environment. Looking forward to contributing to a team and learning new skills."</p>
                    </section><div><GoogleAd/></div>


                    <section >
                        <h3>C. Education</h3>
                        <p>As a teenager applying for your first job, your education section will likely be one of the most important areas on your resume. Since you may not have extensive work experience, employers will look at your academic achievements to gauge your potential.</p>
                        <ul>
                            <li><strong>School Name and Location:</strong> Your current high school, including the city and state.</li>
                            <li><strong>Expected Graduation Date:</strong> Include the year you are expected to graduate.</li>
                            <li><strong>GPA (Optional):</strong> If your GPA is strong (usually 3.5 or above), feel free to include it. This will showcase your academic commitment.</li>
                            <li><strong>Relevant Coursework:</strong> If you’ve taken courses related to the job, include them here.</li>
                        </ul>
                        <p className='examplegeneral'><strong>Example Education Section:</strong></p>
                        <ul className='strong-point'>
                            <li>Anytown High School, Anytown, USA</li>
                            <li>Expected Graduation: June 2026</li>
                            <li>Relevant Coursework: Business Studies, Communication Skills, Introduction to Marketing, Computer Science</li>
                        </ul>
                    </section><div><GoogleAd/></div>


                    <section id="skills">
                        <h3>D. Skills</h3>
                        <p>In the skills section, focus on both hard and soft skills that you've gained through school, extracurricular activities, or volunteering. These are transferable skills that can be applied to many types of jobs, including your first one.</p>
                        <p>Here are some skills you may want to highlight:</p>
                        <ul>
                            <li><strong>Communication:</strong> The ability to express yourself clearly in both written and spoken forms.</li>
                            <li><strong>Teamwork:</strong> The ability to collaborate with others towards a common goal.</li>
                            <li><strong>Customer Service:</strong> Experience assisting others, even informally or through volunteering.</li>
                            <li><strong>Time Management:</strong> Managing school, extracurriculars, and personal responsibilities effectively.</li>
                            <li><strong>Computer Skills:</strong> Basic knowledge of tools such as Microsoft Office, Google Docs, or other job-relevant software.</li>
                        </ul>
                        <p className='examplegeneral'><strong>Example Skills Section:</strong></p>
                        <ul className='strong-point'>
                            <li>Communication: Effective verbal and written communication skills, able to convey ideas clearly.</li>
                            <li>Teamwork: Experience working on group projects and collaborating with peers during extracurricular activities.</li>
                            <li>Customer Service: Assisted in organizing school events and provided support to peers during events.</li>
                            <li>Time Management: Balancing schoolwork, part-time activities, and volunteer commitments.</li>
                            <li>Computer Skills: Proficient in Microsoft Word, Excel, PowerPoint, and Google Docs.</li>
                        </ul>
                    </section><div><GoogleAd/></div>


                    <section id="work-experience">
                        <h3>E. Work Experience (If Any)</h3>
                        <p>Even if you don’t have formal work experience, you can still include informal work or responsibilities that demonstrate your work ethic, such as babysitting, dog walking, or helping in a family business. This section allows you to showcase your responsibilities and the skills you developed through these experiences.</p>
                        <p className='examplegeneral'><strong>Example Work Experience Section:</strong></p>
                        <ul className='strong-point'>
                            <li><strong>Babysitter — Private Family, Anytown, USA (June 2023 – Present)</strong>
                                <ul>
                                    <li>Responsible for caring for two children, ages 6 and 8.</li>
                                    <li>Assisted with meal preparation and planned educational activities.</li>
                                    <li>Developed skills in communication, time management, and problem-solving.</li>
                                </ul>
                            </li>
                            <li><strong>Lawn Care Assistant — Neighborhood, Anytown, USA (April 2023 – August 2023)</strong>
                                <ul>
                                    <li>Mowed lawns and provided basic landscaping services for local families.</li>
                                    <li>Managed scheduling and coordinated with clients to ensure satisfaction.</li>
                                    <li>Built a reputation for dependability and attention to detail.</li>
                                </ul>
                            </li>
                        </ul>
                    </section><div><GoogleAd/></div>


                    <section id="volunteer-activities">
                        <h3>F. Volunteer and Extracurricular Activities</h3>
                        <p>Volunteering or participating in extracurricular activities can add significant value to your resume. These activities show employers that you're proactive, responsible, and committed to your community or school.</p>
                        <p>Including volunteer work or clubs you’re involved in also demonstrates your leadership potential and teamwork skills, even if you don’t have paid work experience.</p>
                        <p className='examplegeneral'><strong>Example Volunteer Experience:</strong></p>
                        <ul className='strong-point'>
                            <li><strong>Volunteer Tutor — Anytown Community Center, Anytown, USA (September 2023 – Present)</strong>
                                <ul>
                                    <li>Tutored elementary school students in math and reading.</li>
                                    <li>Provided assistance and guidance to students struggling academically.</li>
                                    <li>Developed strong interpersonal skills and patience.</li>
                                </ul>
                            </li>
                        </ul>
                        <p className='examplegeneral'><strong>Example Extracurricular Activities:</strong></p>
                        <ul className='strong-point'>
                            <li><strong>Soccer Team Member — Anytown High School, Anytown, USA (September 2023 – Present)</strong>
                                <ul>
                                    <li>Participated in local tournaments and helped the team win regional championships.</li>
                                    <li>Worked closely with teammates to improve individual and team skills.</li>
                                    <li>Developed leadership, teamwork, and strategic planning abilities.</li>
                                </ul>
                            </li>
                        </ul>
                    </section><div><GoogleAd/></div>

                </section><div><GoogleAd/></div>

                <section id="highlight-skills">
                    <h2>How to Highlight Transferable Skills for Your First Job</h2>
                    <p>Transferable skills are abilities you’ve gained from school, volunteer work, or other life experiences that can apply to a job. These are key because, as a high school student, you may not have professional experience. Some transferable skills to highlight include:</p>
                    <ul className='strong-point'>
                        <li><strong>Communication:</strong> Whether through school presentations, group work, or extracurriculars, your ability to communicate effectively is valuable to employers.</li>
                        <li><strong>Teamwork:</strong> Whether you’re working on group projects in school or playing sports, employers value candidates who can collaborate well with others.</li>
                        <li><strong>Time Management:</strong> Employers love candidates who can juggle multiple responsibilities—show how you balance school and activities.</li>
                        <li><strong>Problem-Solving:</strong> Employers look for candidates who can think critically and solve problems. If you’ve done this in school or in extracurriculars, highlight it.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="stand-out-resume">
                    <h2>Creating a Resume That Stands Out from the Crowd</h2>
                    <p>To stand out from other high school applicants, your resume needs to be professional, clear, and tailored to the job. Here are a few strategies to make your resume shine:</p>
                    <ul className='strong-point'>
                        <li><strong>Use Action Verbs:</strong> Instead of generic terms like "helped" or "assisted," use strong action verbs to describe your experience. For example:
                            <ul>
                                <li>Organized an event for the school.</li>
                                <li>Led a team project to success.</li>
                                <li>Designed a presentation for a class.</li>
                            </ul>
                        </li>
                        <li><strong>Tailor Your Resume:</strong> When applying for different jobs, customize your resume for each position. Highlight the skills and experiences that match the job description. For example, if you're applying for a retail job, emphasize customer service skills. If you’re applying for a tech-related position, highlight your computer skills.</li>
                        <li><strong>Keep It Concise and Professional:</strong> A high school resume doesn’t need to be lengthy. Keep it to one page. Use clear fonts (Arial, Calibri, or Times New Roman) and keep the font size between 10 and 12 points. Stick to simple formatting with bullet points and section headings.</li>
                    </ul>
                </section><div><GoogleAd/></div>


                <section id="formatting-best-practices">
                    <h2>Best Practices for Formatting Your Teenager Resume</h2>
                    <p>When crafting your teenager resume for your first job, the formatting plays a crucial role in presenting your qualifications in a clear and professional manner. A well-organized, visually appealing resume can make a significant difference when applying for your first job. Here are key formatting practices to keep in mind:</p>
                    <ol>
                        <li><strong>Use Standard Margins:</strong> Standard 1-inch margins on all sides are essential to give your resume a clean, balanced appearance. This not only makes your resume easy to read but also ensures that it fits neatly onto a single page, which is ideal for a first-time job application.</li>
                        <li><strong>Font Choice:</strong> Choose easy-to-read fonts such as Arial, Calibri, or Times New Roman. These fonts are not only clear but also commonly used in professional documents. Avoid decorative or hard-to-read fonts, as they may appear unprofessional and detract from the content.
                            <ul>
                                <li><strong>Font Size:</strong> Stick to a font size of 10-12 points for the body of the text. For section headings, a slightly larger font size (around 14-16 points) will help them stand out without being overly bold.</li>
                            </ul>
                        </li>
                        <li><strong>Utilize Bullet Points:</strong> To make your resume more scannable, use bullet points to list your skills, achievements, and responsibilities. Bullet points break down the information into digestible, bite-sized pieces, making it easier for hiring managers to quickly review your qualifications.</li>
                        <li><strong>Separate Sections with Bold Headings:</strong> Clearly defined section headings help organize your resume and make it easier for hiring managers to find specific information. Use bold headings for each section, such as Education, Skills, Work Experience, and Objective Statement.</li>
                    </ol>
                    <p>By adhering to these formatting tips, you’ll ensure that your resume looks polished and professional, helping you make a strong first impression with potential employers.</p>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Frequently Asked Questions (FAQs)</h2>
                    <dl className="faqs">
                        <div className="faq-item">
                            <dt><strong>Q1: How do I write a resume with no experience?</strong></dt>
                            <dd>A1: Focus on your skills, education, volunteer work, and extracurricular activities. Emphasize transferable skills like communication, teamwork, and time management.</dd>

                        </div>

                        <div className="faq-item">
                            <dt><strong>Q2: Should I include my GPA?</strong></dt>
                            <dd>A2: Yes, if your GPA is strong (typically 3.5 or higher), include it to demonstrate your academic dedication.</dd>

                        </div>
                        <div className="faq-item">
                            <dt><strong>Q3: Can I include my volunteer work on my resume?</strong></dt>
                            <dd>A3: Absolutely! Volunteer work shows responsibility, leadership, and commitment—qualities employers value.</dd>

                        </div>
                        <div className="faq-item">
                            <dt><strong>Q4: How can I stand out in a competitive job market?</strong></dt>
                            <dd>A4: Tailor your resume to each job, use strong action verbs, and highlight relevant skills and experiences.</dd>
                        </div>
                    </dl>
                </section><div><GoogleAd/></div>


                <section id="conclusion">
                    <h2>Conclusion</h2>
                    <p>Writing a teenager resume for your first job in high school may seem like a challenging task, but with the right approach, you can create a resume that highlights your strengths and sets you up for success. Focus on transferable skills, include any relevant experience (even if informal), and format your resume professionally.</p>
                    <p>Remember, employers are looking for enthusiasm, reliability, and a willingness to learn. By crafting a tailored, clear, and concise resume, you can increase your chances of landing that first job. Good luck!</p>
                </section><div><GoogleAd/></div>


                <section id="key-takeaways">
                    <h3>Key Takeaways:</h3>
                    <ul>
                        <li>Focus on transferable skills like communication, teamwork, and problem-solving.</li>
                        <li>Tailor your resume for each job application.</li>
                        <li>Keep your resume professional, clear, and concise.</li>
                        <li>Highlight volunteer work and extracurricular activities to show leadership and responsibility.</li>
                    </ul>
                    <p>For extra help building a professional resume, ResumeEra offers an easy-to-use platform to create and customize your teenager resume, ensuring you present the best version of yourself to potential employers.</p>
                </section><div><GoogleAd/></div>




                <section className='releted-article'>
                    <h2>RELETED ARTICLE :- YOU CAN'T MISS IF YOU WANT TO CREATE A PROFETIONAL RESUME</h2>
                    <br /><Link to='/top-careers-for-introverts'>TOP CAREERS FOR INTROVERTS</Link>
                    <br /><Link to='/how-to-spin-job-hopping-as-an-asset'>HOW TO SPIN JOB HOPPING AS AN ASSET</Link>
                    <br /><Link to='/types-of-laziness'>TYPES OF LAZINESS</Link>
                    <br /><Link to='/pictures8'>PICTURE8</Link>
                    <br /><Link to='/motivate-yourself-to-study'>MOTIVATE YOUSELF TO STUDY</Link>

                </section><div><GoogleAd/></div>


                <div><GoogleAd /></div>
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
