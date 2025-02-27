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

export default function BankingResume(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages, fresherResumeImage } = prop;
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/banking-resume";
    const ArticleTitle = "Banking Resume: Guide for Freshers and Download free";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'Banking Resume: Guide for Freshers and Download free';
    const publishDate = '2025-04-01';
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
                <title>Banking Resume: Guide for Freshers and Download free</title>
                <meta name="description" content="Learn how to create a banking resume for freshers. Get tips, examples, and free fresher resume templates to land your first banking job!" />
                <meta name="keywords" content="banking resume, fresher resume, banking resume format, resume for banking jobs, entry-level banking resume, banking resume tips for beginners" />
                <meta property="og:title" content="Banking Resume: A Step-by-Step Guide for Freshers and Beginners" />
                <meta property="og:description" content="Master the banking resume format with this guide for freshers, including examples and free templates for entry-level banking jobs!" />
                <meta property="og:image" content="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" />
                <meta property="og:url" content="https://resumeera.xyz/banking-resume" />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Banking Resume: Guide for Freshers and Download free" />
                <meta name="twitter:description" content="Discover the perfect banking resume for freshers with examples and free templates to start your banking career!" />
                <meta name="twitter:image" content="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" />
                <meta name="twitter:site" content="@Resumeera" />
                <link rel="icon" href="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp" />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Banking Resume: A Step-by-Step Guide for Freshers and Beginners",
              "description": "A detailed guide to crafting a banking resume for freshers, including tips, examples, and free templates for entry-level banking roles.",
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
              "datePublished": "2025-04-01",
              "url": "https://resumeera.xyz/banking-resume"
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
                  "name": "What’s the best banking resume format for freshers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A functional resume format is best for freshers in banking. It highlights your skills and education over work experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I include in a banking resume for freshers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Include contact info, a banking objective, education, banking skills like math or customer service, and relevant activities or projects."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I create an entry-level banking resume with no experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on your education, banking-related skills, and school projects or volunteering to show you’re ready for banking work."
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
                  "name": "Banking Resume",
                  "item": "https://resumeera.xyz/banking-resume"
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
                <span>Banking Resume</span>
            </nav>

            <article className='aboutResumeEra'>
                <img src="https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg" style={{ width: '100%', height: 'auto' }} loading="lazy" alt="banking resume" />
                <section className="resume-article">
                    <header>
                        <h1>Banking Resume: A Step-by-Step Guide for Freshers and Beginners</h1>
                    </header>

                    <p>
                        Are you a fresher aiming to start your career in banking? A well-crafted <strong>banking resume</strong> can help you land your first job in a bank, such as a teller, customer service rep, or assistant. Whether you’ve just finished 12th grade, college, or have no work experience, this guide will show you how to create a resume that impresses bank employers. It’s simple, professional, and perfect for beginners.
                    </p>
                    <p>
                        Banks look for people who are accurate with numbers, friendly with customers, and eager to learn. Even without experience, you can build a <strong>fresher resume</strong> that highlights your potential for <strong>resume for banking jobs</strong>. We’ll provide clear steps, real examples, and free templates to help you succeed. For more resume basics, check out <Link to="/how-to-create-a-professional-resume">how to create a professional resume</Link>.
                    </p>
                    <p>
                        By the end, you’ll master the <strong>banking resume format</strong> and be ready to apply for your dream banking role. Let’s start building your banking career today!
                    </p>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Why a Banking Resume Is Crucial for Freshers</h2>
                    <p>
                        Your resume is your first impression on bank recruiters. It’s like a quick hello—it shows your skills and education before you meet the hiring team. A strong <strong>banking resume</strong> makes it easy for banks to see your potential, even if you’ve never worked before.
                    </p>
                    <p>
                        Banks need reliable, customer-focused, and quick learners. The right <strong>banking resume format</strong> puts your education and skills first, helping you stand out for jobs like teller or assistant. Learn more about starting with resumes at <Link to="/creating-a-resume-for-your-first-job">creating a resume for your first job</Link>.
                    </p>
                    <blockquote>
                        “A clear banking resume can help freshers land their first job, even without experience.” – Banking Recruiter, Priya Sharma
                    </blockquote>
                    <h3>Benefits for Beginners</h3>
                    <ul>
                        <li><strong>Looks Professional:</strong> A clean <strong>entry-level banking resume</strong> shows you’re serious about the job.</li>
                        <li><strong>Highlights Your Strengths:</strong> Focuses on your education and skills banks need.</li>
                        <li><strong>Improves Your Chances:</strong> Helps you compete with other freshers for <strong>banking resume tips for beginners</strong>.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Steps to Create the Perfect Banking Resume for Freshers</h2>
                    <p>
                        Building a <strong>banking resume</strong> is simple with these steps. It’s all about showing banks you’re ready, even without work experience. Here’s how to craft a <strong>fresher resume</strong> for <strong>resume for banking jobs</strong>. For more formatting ideas, visit <Link to="/resume-format-for-freshers">resume format for freshers</Link>.
                    </p>

                    <h3>Step 1: Add Your Contact Information</h3>
                    <p>
                        Start with your name, phone number, and email at the top. Use a professional email—like “neha.singh@email.com”—not something playful like “bankfresh123@email.com”. This helps banks reach you easily.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li>Neha Singh</li>
                        <li>(+91) 98765-43210</li>
                        <li>neha.singh@email.com</li>
                    </ul>

                    <h3>Step 2: Write a Banking Objective</h3>
                    <p>
                        Add a short statement about your goal for a banking job and what you bring. Keep it focused on banking and your eagerness to learn. Learn more at <Link to="/how-to-write-a-strong-resume-objective">how to write a strong resume objective</Link>.
                    </p>
                    <p><strong>Example:</strong><br /> "A 12th-pass fresher with strong math skills seeking a bank teller job to assist customers and start a banking career."</p>

                    <h3>Step 3: Showcase Your Education</h3>
                    <p>
                        Your school or college details are key for freshers. List your 12th standard or degree info—school/university, board/degree, stream, year, and marks or GPA. It proves you’re ready for an <strong>entry-level banking resume</strong>. See <Link to="/how-to-showcase-your-education-in-a-resume">how to showcase your education in a resume</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li><strong>12th Standard (HSC)</strong></li>
                        <li>Shining Light School, Delhi</li>
                        <li>CBSE Board, Commerce Stream</li>
                        <li>Year: 2024</li>
                        <li>Percentage: 82%</li>
                    </ul>

                    <h3>Step 4: List Banking Skills</h3>
                    <p>
                        Include skills banks value—like math, customer service, or computer use. You’ve likely gained these in school or life, even without a job. Check out <Link to="/skills-for-teenager-resume-examples">skills for teenager resume examples</Link>.
                    </p>
                    <p><strong>Example Skills:</strong></p>
                    <ul>
                        <li>Accurate Cash Handling</li>
                        <li>Effective Customer Communication</li>
                        <li>Basic MS Office Skills</li>
                        <li>Attention to Detail</li>
                    </ul>

                    <h3>Step 5: Include Relevant Activities or Projects</h3>
                    <p>
                        Mention school projects, events, or volunteer work that relate to banking—like managing money or helping people. These show you’re capable for a <strong>banking resume format</strong>. See <Link to="/how-to-create-a-teenager-resume-without-work-experience">how to create a teenager resume without work experience</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li><strong>School Finance Project (2024):</strong> Managed a budget for a class event.</li>
                        <li><strong>Volunteer Fundraiser (2023):</strong> Collected donations for a school drive.</li>
                    </ul>

                    <h3>Step 6: Add Achievements (If Applicable)</h3>
                    <p>
                        If you have awards or certificates, list them to stand out. Even small wins, like a math prize, add value to your <strong>banking resume</strong>. Learn how at <Link to="/how-to-highlight-achievements-in-a-resume">how to highlight achievements in a resume</Link>.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li>1st Place in School Math Competition (2023)</li>
                        <li>Certificate in Basic Banking Skills (2024)</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Examples of Banking Resume for Freshers</h2>
                    <p>
                        Seeing examples makes it easier to start. Here are two <strong>banking resume</strong> samples—one for a bank teller and one for customer service. These <strong>fresher resume</strong> ideas are simple to adapt for <strong>resume for banking jobs</strong>.
                    </p>

                    <h3>Example 1: Bank Teller Banking Resume for Fresher</h3>
                    <div className="d-md-flex justify-content-between">
                        <div className="strong-point">
                            <p><strong>Rahul Sharma</strong><br />(+91) 87654-32109 | rahul.sharma@email.com</p>
                            <p><strong>Objective:</strong> A 12th-pass fresher with strong numerical skills seeking a bank teller role to assist customers and start a banking career."</p>
                            <h4>Education:</h4>
                            <ul>
                                <li>12th Standard (HSC), CBSE, Commerce - 83% (2024)</li>
                                <li>Bright Future School, Mumbai</li>
                            </ul>
                            <h4>Skills:</h4>
                            <ul>
                                <li>Cash Handling</li>
                                <li>Customer Service</li>
                                <li>Basic Computer Skills</li>
                            </ul>
                            <h4>Activities:</h4>
                            <ul>
                                <li>Managed cash for school event (2023)</li>
                            </ul>
                        </div>
                        <div className="strong-point">
                            <img src={babysitterresumeexample} style={{ width: '100%', height: '100%' }} alt="bank teller banking resume for fresher" />
                        </div>
                    </div>

                    <h3>Example 2: Customer Service Banking Resume for Fresher</h3>
                    <div className="d-md-flex justify-content-between">
                        <div className="strong-point">
                            <p><strong>Anita Patel</strong><br />(+91) 98765-43210 | anita.patel@email.com</p>
                            <p><strong>Objective:</strong> A college grad fresher with excellent communication skills seeking a customer service banking job to help clients and grow in banking."</p>
                            <h4>Education:</h4>
                            <ul>
                                <li>Bachelor of Commerce (B.Com), Delhi University - 81% (2024)</li>
                                <li>Sunrise College, Delhi</li>
                            </ul>
                            <h4>Skills:</h4>
                            <ul>
                                <li>Clear Communication</li>
                                <li>Problem-Solving</li>
                                <li>Teamwork</li>
                            </ul>
                            <h4>Projects:</h4>
                            <ul>
                                <li>Led financial literacy initiative at college (2024)</li>
                            </ul>
                        </div>
                        <div className="strong-point">
                            <img src={linecookresume} style={{ width: '100%', height: '100%' }} alt="customer service banking resume for fresher" />
                        </div>
                    </div>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Table: Key Elements of a Banking Resume for Freshers</h2>
                    <p>
                        Use this table to ensure your <strong>banking resume</strong> has everything banks want. It’s a quick guide for your <strong>entry-level banking resume</strong>.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>Section</th>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>What to Include</th>
                                <th style={{ border: '1px solid #ddd', padding: '10px' }}>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Contact Info</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Name, phone, email</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Rahul Sharma, (+91) 87654-32109</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Objective</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Banking goal and skills</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Seeking teller role to assist customers</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Education</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>School/degree and grades</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>12th, CBSE, 83% (2024)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Skills</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Banking abilities</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Cash handling, customer service</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Activities</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Relevant tasks</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>Managed cash for school event</td>
                            </tr>
                        </tbody>
                    </table>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Tips to Perfect Your Banking Resume for Freshers</h2>
                    <p>
                        Want your <strong>banking resume</strong> to stand out? These tips will help your <strong>banking resume format</strong> impress bank recruiters. For more advice, check <Link to="/how-to-write-a-resume-in-7-easy-steps">how to write a resume in 7 easy steps</Link>.
                    </p>
                    <ul>
                        <li><strong>Pick a Simple Format:</strong> Use a <Link to="/what-is-a-functional-resume">functional resume</Link> to focus on skills and education.</li>
                        <li><strong>Customize for Banks:</strong> Adjust your resume for each banking role. Learn how at <Link to="/tailor-resume-to-job-description">tailor resume to job description</Link>.</li>
                        <li><strong>Use Action Words:</strong> Start with verbs like “managed” or “assisted.” See <Link to="/improving-your-resume-with-action-verbs">improving your resume with action verbs</Link>.</li>
                        <li><strong>Avoid Errors:</strong> Proofread to eliminate spelling or grammar mistakes. Prevent issues with <Link to="/common-mistakes-to-avoid-on-your-resume">common mistakes to avoid on your resume</Link>.</li>
                        <li><strong>Be Honest:</strong> Only list true skills and experiences for <strong>banking resume tips for beginners</strong>.</li>
                    </ul>
                    <blockquote>
                        “A clean, tailored banking resume can help freshers land their first job.” – HR Specialist, Anil Kumar
                    </blockquote>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Common Banking Jobs for Freshers</h2>
                    <p>
                        Not sure which banking jobs to target? These entry-level roles match your <strong>banking resume</strong>. They don’t need much experience—just a strong resume!
                    </p>
                    <ul>
                        <li><strong>Bank Teller:</strong> Handles cash, assists customers, and processes transactions.</li>
                        <li><strong>Customer Service Representative:</strong> Answers questions and solves client issues.</li>
                        <li><strong>Data Entry Clerk:</strong> Enters financial data into bank systems accurately.</li>
                        <li><strong>Banking Assistant:</strong> Supports daily banking tasks and staff.</li>
                        <li><strong>Sales Associate:</strong> Promotes bank products like savings accounts or loans.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>How to Make Your Banking Resume for Freshers Stand Out</h2>
                    <p>
                        Want your <strong>banking resume</strong> to catch attention? Here’s how to make it special for an <strong>entry-level banking resume</strong>. For more ideas, check <Link to="/how-to-choose-the-right-resume-template">how to choose the right resume template</Link>.
                    </p>
                    <p>
                        Keep it neat—use a font like Arial and clear sections. Focus on banking skills like math or customer service. Show your excitement for banking in your objective. If you’ve done something banking-related, like a finance project, include it!
                    </p>
                    <p>
                        Even small tasks count. Did you handle money at a school event? That’s relevant for your <strong>banking resume format</strong>! Make every part show you’re ready for a bank job.
                    </p>
                </section><div><GoogleAd/></div>
                <FresherResume fresherResumeImage={fresherResumeImage}/>
                <ResumeBuilder/>

                <section>
                    <h2>FAQ: Banking Resume for Freshers Questions</h2>
                    <div className="faqs">
                        <div className="faq-item">
                            <h3>Q: What’s the best banking resume format for freshers?</h3>
                            <p><strong>A:</strong> A functional resume format is best for freshers in banking. It highlights your skills and education over work experience.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Q: What should I include in a banking resume for freshers?</h3>
                            <p><strong>A:</strong> Include contact info, a banking objective, education, banking skills like math or customer service, and relevant activities or projects.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Q: How can I create an entry-level banking resume with no experience?</h3>
                            <p><strong>A:</strong> Focus on your education, banking-related skills, and school projects or volunteering to show you’re ready for banking work.</p>
                        </div>
                    </div>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Key Takeaways</h2>
                    <p>
                        Here’s what to remember for your <strong>banking resume</strong>:
                    </p>
                    <ul>
                        <li>Use your education as your main strength for a <strong>banking resume format</strong>.</li>
                        <li>List skills banks need, like math or teamwork.</li>
                        <li>Keep your resume simple, clean, and error-free.</li>
                        <li>Add school projects or activities to show experience.</li>
                        <li>Download free templates at <Link to="/resume-format-for-freshers-free-download">resume format for freshers free download</Link>.</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Creating a <strong>banking resume</strong> is your first step to landing a <strong>resume for banking jobs</strong>, even without experience. As a fresher, focus on your education, banking skills, and relevant activities—like school projects or volunteering. These steps will build an <strong>entry-level banking resume</strong> that banks will notice.
                    </p>
                    <p>
                        Keep your resume clear and professional. Use the steps, examples, and tips here to craft a <strong>fresher resume</strong> that opens doors to roles like teller or customer service. Your <strong>banking resume format</strong> can set you on the path to success—start now!
                    </p>
                    <p>
                        Need help? Resumeera.xyz offers free tools and templates to make your resume fast. Try <Link to="/free-online-resume-maker">free online resume maker</Link> or explore <Link to="/top-resume-templates-for-2024">top resume templates for 2024</Link>. Your banking career is closer than you think!
                    </p>
                </section><div><GoogleAd/></div>

                <section className='releted-article'>
                    <h2>Related Articles</h2>
                    <p>More <strong>banking resume tips for beginners</strong> for you:</p>
                    <br /><Link to="/how-to-make-a-resume-for-freshers">How to Make a Resume for Freshers</Link>
                    <br /><Link to="/creating-a-resume-with-no-experience">Creating a Resume with No Experience</Link>
                    <br /><Link to="/resume-format-for-freshers">Resume Format for Freshers</Link>
                    <br /><Link to="/teenager-resume-examples">Teenager Resume Examples</Link>
                    <br /><Link to="/student-resume-for-your-first-job">Student Resume for Your First Job</Link>
                    <br /><Link to="/how-to-choose-the-right-resume-template">How to Choose the Right Resume Template</Link>
                    <br /><Link to="/resume-format-for-bank-job-fresher">Resume Format for Bank Job Fresher</Link>
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