import { Link, useNavigate } from "react-router-dom";
import GoogleAd from "../../adFolder/GoogleAd";
import AuthorCard from "../../AuthorCard";
import CallToAction from "../../CallToAction";
import RandomeArticleToBlogCareer from "../../RandomeArticleToBlogCareer";
import ShareButtons from "../../shareButton/ShareButtons";
import WelcomeNotes from "../../WelcomeNotes";
import ResumeEraHeading from "../../ResumeEraHeading";
import { templatePage } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import babysitterresumeexample from '../../../image/Fresher resume image folder/babysitter-resume-example.webp';
import linecookresume from '../../../image/Fresher resume image folder/line-cook-resume-template-no-experience.webp';
import ResumeBuilder from "../../ResumeBuilder";
import FresherResume from "../../FresherResume";

export default function ResumeFor12thStudentPartTimeJobs(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages, fresherResumeImage } = prop;
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/twelth-student-resume-for-part-time-jobs";
    const ArticleTitle = "How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples';
    const publishDate = '2025-03-01';
    const dispatch = useDispatch();

    const selectedImageId = 110; // chronological resume
    const selectedimage = techImages.find((image) => image.id === selectedImageId);
    const selectedImageId2 = 111; // functional resume
    const selectedimage2 = techImages.find((image) => image.id === selectedImageId2);
    const selectedImageId3 = 112; // minimalist
    const selectedimage3 = techImages.find((image) => image.id === selectedImageId3);
    const selectedImageId4 = 109; // creative
    const selectedimage4 = techImages.find((image) => image.id === selectedImageId4);
    const selectedImageId5 = 116; // creative
    const selectedimage5 = techImages.find((image) => image.id === selectedImageId5);
    const selectedImageId6 = 107; // infographic resume
    const selectedimage6 = techImages.find((image) => image.id === selectedImageId6);
    console.log('hoveredImage:-,', hoveredImage);
    const handleClick = (e, imageId) => {
        e.preventDefault();
        const path = `/techmain/${imageId}`;
        navigate(path);
        dispatch(templatePage(hoveredImage));
    };

    return (
        <div>
            <Helmet>
                <title>How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples</title>
                <meta name="description" content="Learn how to create a 12th student resume for part-time jobs with no experience. Get tips, examples, and free fresher resume templates to land your first gig!" />
                <meta name="keywords" content="12th student resume for part-time jobs, fresher resume, first job resume, resume tips for students, entry-level resume, resume without experience" />
                <meta property="og:title" content="How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples" />
                <meta property="og:description" content="Step-by-step guide to building a 12th student resume for part-time jobs. Includes free fresher resume templates and examples!" />
                <meta property="og:image" content="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" />
                <meta property="og:url" content="https://resumeera.xyz/12th-student-resume-for-part-time-jobs" />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples" />
                <meta name="twitter:description" content="Discover how to write a 12th student resume for part-time jobs. Free examples and templates included for freshers!" />
                <meta name="twitter:image" content="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" />
                <meta name="twitter:site" content="@Resumeera" />
                <link rel="icon" href="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp" />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples",
              "description": "A detailed guide to creating a 12th student resume for part-time jobs with no prior work experience. Includes fresher resume tips, examples, and free templates.",
              "image": "https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg",
              "author": {
                "@type": "Organization",
                "name": "Resumeera.xyz"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Resumeera.xyz",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
                }
              },
              "datePublished": "2025-03-01",
              "url": "https://resumeera.xyz/12th-student-resume-for-part-time-jobs"
            }
          `}
                </script>
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What should a 12th student include in a resume for part-time jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Include your contact details, a short objective, your 12th standard education, skills like teamwork or basic computer use, and any school activities or projects. These show employers what you can do, even without job experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I make a fresher resume for part-time jobs with no experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on your education, skills, and activities like school projects or volunteering. Use a simple format to highlight what you’re good at and show you’re eager to learn."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What’s the best format for a 12th student resume for part-time jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A functional resume is best. It puts your skills and education first, which is perfect for students with no work history."
                  }
                }
              ]
            }
          `}
                </script>
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://resumeera.xyz"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Resume Tips",
                  "item": "https://resumeera.xyz/Blog_or_Career_Tips_Page"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "12th Student Resume for Part-Time Jobs",
                  "item": "https://resumeera.xyz/12th-student-resume-for-part-time-jobs"
                }
              ]
            }
          `}
                </script>
            </Helmet>

            <ResumeEraHeading title={title} publishDate={publishDate} />

            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb" style={{ margin: '20px 0', fontSize: '14px' }}>
                <Link to="/">Home</Link>
                <Link to="/Blog_or_Career_Tips_Page">Resume Tips</Link> 
                <span>12th Student Resume for Part-Time Jobs</span>
            </nav>

            <article className='aboutResumeEra'>
                <img src="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" style={{ width: '100%', height: 'auto' }} loading="lazy" alt="12th student resume for part-time jobs" />
                <section className="resume-article">
                    <header>
                        <h1>How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples</h1>
                    </header>

                    <p>
                        Are you a 12th student looking to earn some extra cash with a part-time job? Writing a resume might feel tough, especially if you’ve just finished your 12th standard and haven’t worked before. Don’t worry—this guide will show you how to create a strong <strong>12th student resume for part-time jobs</strong>. We’ll keep it simple and professional, so you can land that first gig easily.
                    </p>
                    <p>
                        Part-time jobs are a great way for 12th students to gain experience, build skills, and make money. Whether you want to work at a store, café, or online, a good resume helps you stand out. Since you’re new to the job world, this <strong>fresher resume</strong> guide will focus on what you already have—like your education and school activities—to impress employers. For more basics, check out <Link to="/how-to-create-a-professional-resume">how to create a professional resume</Link>.
                    </p>
                    <p>
                        In this article, you’ll find step-by-step tips, real examples, and free templates to download. We’ll cover everything you need to know about building an <strong>entry-level resume</strong> that works for part-time jobs. Let’s dive in and get you ready for your first job!
                    </p>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Why a Resume Is Important for 12th Students Seeking Part-Time Jobs</h2>
                    <p>
                        A resume might seem like something only adults need, but it’s just as important for 12th students. It’s your chance to show employers who you are and what you can do, even if you’ve never had a job before. Think of it as your ticket to part-time work—like cashiering, tutoring, or helping at a local shop.
                    </p>
                    <p>
                        Employers want to hire people who are eager and ready to learn. A <strong>12th student resume for part-time jobs</strong> proves you’re serious about working. It highlights your school achievements and skills, making it easier for them to say “yes” to you. Curious about first jobs? Read more at <Link to="/creating-a-resume-for-your-first-job">creating a resume for your first job</Link>.
                    </p>
                    <blockquote>
                        “A resume is your first impression. Make it count, even if you’re just starting out.” – Career Expert, Jane Doe
                    </blockquote>
                    <h3>Benefits of a Resume for 12th Students</h3>
                    <ul>
                        <li><strong>Gets You Noticed:</strong> Shows you’re prepared and professional.</li>
                        <li><strong>Highlights Strengths:</strong> Turns your school skills into job-ready traits.</li>
                        <li><strong>Boosts Confidence:</strong> Helps you see what you’re good at.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>How to Build a 12th Student Resume for Part-Time Jobs</h2>
                    <p>
                        Creating a resume without experience is simple if you know what to include. Here’s a clear guide to help you build a <strong>fresher resume</strong> that works for part-time jobs. We’ll break it down into easy steps. For more formatting ideas, see <Link to="/resume-format-for-freshers">resume format for freshers</Link>.
                    </p>

                    <h3>Step 1: Add Your Contact Information</h3>
                    <p>
                        Start with your name, phone number, and email at the top. Keep your email professional—like “priya.kumar@email.com”—not something silly like “funstudent123@email.com”. This makes it easy for employers to reach you.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li>Priya Kumar</li>
                        <li>(+91) 98765-43210</li>
                        <li>priya.kumar@email.com</li>
                    </ul>

                    <h3>Step 2: Write a Clear Objective</h3>
                    <p>
                        An objective is a short sentence about what you want from the job and what you offer. It’s like saying, “I’m excited to work and learn!” Keep it focused on part-time jobs. Learn more at <Link to="/how-to-write-a-strong-resume-objective">how to write a strong resume objective</Link>.
                    </p>
                    <p><strong>Example:</strong><br /> "A hardworking 12th student seeking a part-time retail job to build customer service skills and support the team."</p>

                    <h3>Step 3: Showcase Your Education</h3>
                    <p>
                        Since you’re a 12th student, your education is your strongest point. List your school, board (like CBSE or State), stream (Science, Commerce, Arts), and marks. This shows you’re responsible and smart. See tips at <Link to="/how-to-showcase-your-education-in-a-resume">how to showcase your education in a resume</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li><strong>12th Standard (HSC)</strong></li>
                        <li>Bright Future School, Mumbai</li>
                        <li>CBSE Board, Arts Stream</li>
                        <li>Year: 2024</li>
                        <li>Percentage: 82%</li>
                    </ul>

                    <h3>Step 4: List Your Skills</h3>
                    <p>
                        You might not have job experience, but you have skills from school or home. Think about teamwork from group projects, talking skills from presentations, or computer use from assignments. These matter for part-time jobs! Check out <Link to="/skills-for-teenager-resume-examples">skills for teenager resume examples</Link>.
                    </p>
                    <p><strong>Example Skills:</strong></p>
                    <ul>
                        <li>Basic Computer Skills (MS Word, Excel)</li>
                        <li>Good Communication</li>
                        <li>Teamwork</li>
                        <li>Time Management</li>
                    </ul>

                    <h3>Step 5: Include School Activities or Projects</h3>
                    <p>
                        Did you help with a school event or finish a cool project? These count as experience. They show you can handle tasks and work with others—perfect for part-time jobs. Need ideas? Visit <Link to="/how-to-create-a-teenager-resume-without-work-experience">how to create a teenager resume without work experience</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li><strong>School Event Helper (2023):</strong> Set up stalls for the annual fair, worked with a team of 5.</li>
                        <li><strong>Art Project (2024):</strong> Created a poster series for a school exhibit.</li>
                    </ul>

                    <h3>Step 6: Add Achievements (If You Have Them)</h3>
                    <p>
                        Got awards or certificates? Include them to shine. Even small wins, like a quiz prize, show you’re a go-getter. Learn how at <Link to="/how-to-highlight-achievements-in-a-resume">how to highlight achievements in a resume</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li>2nd Place in School Quiz Competition (2023)</li>
                        <li>Certificate in English Speaking Course (2024)</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Examples of a 12th Student Resume for Part-Time Jobs</h2>
                    <p>
                        Seeing examples makes it easier to start. Here are two <strong>12th student resume for part-time jobs</strong> samples—one for a retail job and one for tutoring. These are simple <strong>fresher resume</strong> ideas you can tweak.
                    </p>

                    <h3>Example 1: Retail Part-Time Job</h3>
                    <div className="d-md-flex justify-content-between">
                        <div className="strong-point">
                            <p><strong>Ajay Singh</strong><br />(+91) 87654-32109 | ajay.singh@email.com</p>
                            <p><strong>Objective:</strong> A friendly 12th student looking for a part-time retail job to learn customer service and help the store run smoothly.</p>
                            <h4>Education:</h4>
                            <ul>
                                <li>12th Standard (HSC), CBSE, Commerce - 80% (2024)</li>
                                <li>Sunrise School, Delhi</li>
                            </ul>
                            <h4>Skills:</h4>
                            <ul>
                                <li>Cash Handling</li>
                                <li>Communication</li>
                                <li>Teamwork</li>
                            </ul>
                            <h4>Activities:</h4>
                            <ul>
                                <li>Helped organize school book fair (2023)</li>
                            </ul>
                        </div>
                        <div className="strong-point">
                            <img src={babysitterresumeexample} style={{ width: '100%', height: '100%' }} alt="12th student resume for retail job" />
                        </div>
                    </div>

                    <h3>Example 2: Tutoring Part-Time Job</h3>
                    <div className="d-md-flex justify-content-between">
                        <div className="strong-point">
                            <p><strong>Neha Patel</strong><br />(+91) 98765-43210 | neha.patel@email.com</p>
                            <p><strong>Objective:</strong> A 12th student with strong math skills seeking a part-time tutoring job to help younger students succeed.</p>
                            <h4>Education:</h4>
                            <ul>
                                <li>12th Standard (HSC), CBSE, Science - 88% (2024)</li>
                                <li>Green Valley School, Pune</li>
                            </ul>
                            <h4>Skills:</h4>
                            <ul>
                                <li>Math Tutoring</li>
                                <li>Patience</li>
                                <li>Explaining Ideas Clearly</li>
                            </ul>
                            <h4>Projects:</h4>
                            <ul>
                                <li>Math Poster Project: Designed charts for class (2024)</li>
                            </ul>
                        </div>
                        <div className="strong-point">
                            <img src={linecookresume} style={{ width: '100%', height: '100%' }} alt="12th student resume for tutoring job" />
                        </div>
                    </div>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Table: What to Include in Your 12th Student Resume for Part-Time Jobs</h2>
                    <p>
                        Here’s a quick table to help you see what goes into your resume. It’s an easy checklist for your <strong>first job resume</strong>.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>Section</th>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>Details</th>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Contact Info</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Name, phone, email</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Ajay Singh, (+91) 87654-32109, ajay.singh@email.com</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Objective</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Your goal and strengths</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Seeking a retail job to build skills</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Education</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>12th standard details</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>12th, CBSE, 80% (2024)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Skills</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Useful abilities</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Teamwork, communication</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Activities</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>School or volunteer work</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Organized school fair stall</td>
                            </tr>
                        </tbody>
                    </table>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Top Tips for Your 12th Student Resume for Part-Time Jobs</h2>
                    <p>
                        Want your resume to shine? Here are some pro tips to make your <strong>12th student resume for part-time jobs</strong> stand out. For a full guide, see <Link to="/how-to-write-a-resume-in-7-easy-steps">how to write a resume in 7 easy steps</Link>.
                    </p>
                    <ul>
                        <li><strong>Keep It Short:</strong> One page is enough. Use a <Link to="/what-is-a-functional-resume">functional resume</Link> to focus on skills.</li>
                        <li><strong>Match the Job:</strong> Change your resume a bit for each job. Learn how at <Link to="/tailor-resume-to-job-description">tailor resume to job description</Link>.</li>
                        <li><strong>Use Strong Words:</strong> Start lines with words like “helped” or “planned.” See <Link to="/improving-your-resume-with-action-verbs">improving your resume with action verbs</Link>.</li>
                        <li><strong>Check for Mistakes:</strong> Spelling errors look bad. Avoid them with <Link to="/common-mistakes-to-avoid-on-your-resume">common mistakes to avoid on your resume</Link>.</li>
                        <li><strong>Be Honest:</strong> Only write what’s true about yourself.</li>
                    </ul>
                    <blockquote>
                        “Simple resumes win part-time jobs. Show your energy and willingness to learn!” – Hiring Manager, John Smith
                    </blockquote>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Common Part-Time Jobs for 12th Students</h2>
                    <p>
                        Not sure what jobs to apply for? Here are some popular part-time jobs for 12th students that don’t need much experience. Your resume can fit any of these!
                    </p>
                    <ul>
                        <li><strong>Retail Assistant:</strong> Help customers and stock shelves.</li>
                        <li><strong>Tutor:</strong> Teach younger kids subjects you’re good at.</li>
                        <li><strong>Food Server:</strong> Work at a café or fast-food place.</li>
                        <li><strong>Data Entry:</strong> Type info into a computer—great if you know typing.</li>
                        <li><strong>Delivery Helper:</strong> Assist with local deliveries.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>How to Make Your Resume Stand Out</h2>
                    <p>
                        Competition for part-time jobs can be tough. Here’s how to make your <strong>12th student resume for part-time jobs</strong> catch an employer’s eye. Want more? Check <Link to="/how-to-choose-the-right-resume-template">how to choose the right resume template</Link>.
                    </p>
                    <p>
                        First, keep it neat. Use a clear font like Arial and simple headings. Next, focus on what makes you special—like a school project or a skill like talking to people. Finally, show you’re excited to work. Employers love that!
                    </p>
                    <p>
                        If you’ve done something extra, like volunteering, add it. It’s proof you’re responsible. Even helping at home can count if you tie it to the job—like organizing or teamwork.
                    </p>
                </section><div><GoogleAd/></div>
                <FresherResume fresherResumeImage={fresherResumeImage}/>
                <ResumeBuilder/>

                <section>
                    <h2>FAQ: 12th Student Resume for Part-Time Jobs</h2>
                    <div className="faqs">
                        <div className="faq-item">
                            <h3>Q: What should a 12th student include in a resume for part-time jobs?</h3>
                            <p><strong>A:</strong> Include your contact details, a short objective, your 12th standard education, skills like teamwork or basic computer use, and any school activities or projects. These show employers what you can do, even without job experience. See <Link to="/how-to-showcase-your-education-in-a-resume">how to showcase your education in a resume</Link>.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Q: How do I make a fresher resume for part-time jobs with no experience?</h3>
                            <p><strong>A:</strong> Focus on your education, skills, and activities like school projects or volunteering. Use a simple format to highlight what you’re good at and show you’re eager to learn. Check out <Link to="/creating-a-resume-with-no-experience">creating a resume with no experience</Link>.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Q: What’s the best format for a 12th student resume for part-time jobs?</h3>
                            <p><strong>A:</strong> A <Link to="/what-is-a-functional-resume">functional resume</Link> is best. It puts your skills and education first, which is perfect for students with no work history.</p>
                        </div>
                    </div>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Key Takeaways</h2>
                    <p>
                        Here’s what to remember when building your <strong>12th student resume for part-time jobs</strong>:
                    </p>
                    <ul>
                        <li>Use your 12th standard education as your main strength.</li>
                        <li>Add skills and activities to show you’re ready to work.</li>
                        <li>Keep your resume short, clear, and mistake-free.</li>
                        <li>Match your resume to the job you want.</li>
                        <li>Download free templates to save time—try <Link to="/resume-format-for-freshers-free-download">resume format for freshers free download</Link>.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Crafting a <strong>12th student resume for part-time jobs</strong> is easier than you think. You don’t need tons of experience—just your school background, some skills, and a little effort. This guide gives you the tools to make a <strong>fresher resume</strong> that grabs attention and gets you hired for your first job.
                    </p>
                    <p>
                        Start with your education, add skills like teamwork or computer use, and include any school projects or activities. Keep it simple and professional, and you’ll be ready to apply for part-time jobs like retail, tutoring, or delivery. Your resume is your chance to show employers you’re eager and capable—so make it count!
                    </p>
                    <p>
                        Ready to begin? Use the examples and tips here to build your <strong>entry-level resume</strong>. For more help, explore free tools and templates at Resumeera.xyz. Your part-time job is waiting—go get it! Start now with <Link to="/free-online-resume-maker">free online resume maker</Link>.
                    </p>
                </section><div><GoogleAd/></div>

                <section className='releted-article'>
                    <h2>Related Articles</h2>
                    <p>Want more <strong>resume tips for students</strong>? Check these out:</p>
                    <br /><Link to="/how-to-make-a-resume-for-freshers">How to Make a Resume for Freshers</Link>
                    <br /><Link to="/creating-a-resume-with-no-experience">Creating a Resume with No Experience</Link>
                    <br /><Link to="/resume-format-for-freshers">Resume Format for Freshers</Link>
                    <br /><Link to="/teenager-resume-examples">Teenager Resume Examples</Link>
                    <br /><Link to="/student-resume-for-your-first-job">Student Resume for Your First Job</Link>
                    <br /><Link to="/resume-for-a-15-year-old-first-job">Resume for a 15-Year-Old First Job</Link>
                    <br /><Link to="/how-to-choose-the-right-resume-template">How to Choose the Right Resume Template</Link>
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
    );
}