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
import babysitterresumeexample from '../../../image/Fresher resume image folder/babysitter-resume-example.webp'
import ResumeBuilder from "../../ResumeBuilder";
import FresherResume from "../../FresherResume";
export default function TeenagerResumewithNoWorkExperience(prop) {
    const [hoveredImage, setHoveredImage] = useState();
    const { techImages, fresherResumeImage } = prop
    const navigate = useNavigate();
    const ArticleUrl = "https://resumeera.xyz/teenager-resume-with-no-work-experience";
    const ArticleTitle = "Teenager Resume with No Work Experience: Free Create and Download Now";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const title = 'Teenager Resume with No Work Experience: Free Create and Download Now'
    const publishDate = '2025-02-15'
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
        {/* Title */}
        <title>Teenager Resume with No Work Experience: Free Create and Download Now</title>

        {/* Meta Description */}
        <meta name="description" content="Create a professional teenager resume with no work experience. Get free resume templates, tips, and examples to help you land your first job, internship, or volunteer opportunity. Download now!" />

        {/* Meta Keywords */}
        <meta name="keywords" content="teenager resume, teenager resume with no work experience, resume for teenager with no experience, free resume templates, teenager job resume, first job resume, teenager internship resume" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Teenager Resume with No Work Experience: Free Create and Download Now" />
        <meta property="og:description" content="Create a professional teenager resume with no work experience. Get free resume templates, tips, and examples to help you land your first job, internship, or volunteer opportunity. Download now!" />
        <meta property="og:image" content="https://i.postimg.cc/1gFGw9Hq/Teenager-Resume-with-No-Work-Experience-2.jpg" />
        <meta property="og:url" content="https://resumeera.xyz/teenager-resume-with-no-work-experience" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Resumeera" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teenager Resume with No Work Experience: Free Create and Download Now" />
        <meta name="twitter:description" content="Create a professional teenager resume with no work experience. Get free resume templates, tips, and examples to help you land your first job, internship, or volunteer opportunity. Download now!" />
        <meta name="twitter:image" content="https://i.postimg.cc/1gFGw9Hq/Teenager-Resume-with-No-Work-Experience-2.jpg" />
        <meta name="twitter:site" content="@resumeera" />

        {/* Article Schema (JSON-LD) */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Teenager Resume with No Work Experience: Free Create and Download Now",
            "description": "Create a professional teenager resume with no work experience. Get free resume templates, tips, and examples to help you land your first job, internship, or volunteer opportunity. Download now!",
            "image": "https://i.postimg.cc/1gFGw9Hq/Teenager-Resume-with-No-Work-Experience-2.jpg",
            "author": {
              "@type": "Organization",
              "name": "Resumeera"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Resumeera",
              "logo": {
                "@type": "ImageObject",
                "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
              }
            },
            "datePublished": "2025-02-15",
            "url": "https://resumeera.xyz/teenager-resume-with-no-work-experience"
          }`}
        </script>
        <script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I make my teenager resume stand out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on highlighting your skills, volunteer work, and extracurricular activities that show leadership and commitment. Use action verbs to describe your experiences. For example, instead of saying 'helped at the shelter,' you could say 'coordinated donation drives' or 'managed team of volunteers.' This makes your experiences sound more impactful."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include hobbies on my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only include hobbies that are relevant to the job you're applying for. For example, if you're applying for a creative role, hobbies like photography or writing could be relevant. Hobbies like reading or gaming might not be as relevant unless the job directly involves these activities."
        }
      },
      {
        "@type": "Question",
        "name": "How do I write a teenager resume with no work experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on your education, skills, volunteer work, and school projects. Highlight your soft skills, such as communication, problem-solving, and teamwork, which are valuable to employers. Also, mention any leadership roles or responsibilities you’ve had in school clubs or sports."
        }
      }
    ]
  }
  `}
</script>

      </Helmet>
            
            <ResumeEraHeading title={title} publishDate={publishDate} />

            <article className='aboutResumeEra'>
                <img src="https://i.postimg.cc/QM4fLCK0/Teenager-Resume-with-No-Work-Experience-2.jpg" style={{ width: '100%', height: 'auto' }} loading="lazy" alt="" />

                <section>
                    <h1>Teenager Resume with No Work Experience: Free Create and Download Now</h1>
                    <p>Creating a teenager resume with no work experience can be a daunting task, but with the right approach, it can be done effectively. Whether you're applying for your first part-time job, internship, or volunteer opportunity, crafting a strong resume is an essential step toward starting your career journey. This guide will walk you through how to create an impactful teenager resume that not only stands out but also demonstrates your potential, even without prior work experience. At <a href="https://Resumeera.xyz">Resumeera.xyz</a>, we offer free teenager resume templates to make this process easier for you.</p>
                </section><div><GoogleAd/></div>


                <section>
                    <h2>Table of Contents:</h2>
                    <ul>
                        <li><a href="#why-important">Why a Teenager Resume is Important</a></li>
                        <li><a href="#key-sections">Key Sections of a Teenager Resume with No Work Experience</a></li>
                        <li><a href="#how-to-write">How to Write a Teenager Resume with No Work Experience</a></li>
                        <li><a href="#examples">Teenager Resume Examples</a></li>
                        <li><a href="#common-mistakes">Common Mistakes to Avoid</a></li>
                        <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                        <li><a href="#key-takeaways">Key Takeaways</a></li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="why-important">
                    <h2>1. Why a Teenager Resume is Important</h2>
                    <p>Having a resume as a teenager, especially when you have no work experience, might seem unnecessary. However, it is one of the most important tools in your career-building journey. When applying for your first job or internship, your resume is the first impression you make on potential employers. Even without formal work experience, a teenager resume allows you to showcase your <strong>skills</strong>, <strong>volunteer work</strong>, <strong>extracurricular activities</strong>, and <strong>education</strong>.</p>
                    <p>A teenager resume is an opportunity to present yourself professionally and highlight experiences that can demonstrate your ability to contribute to a workplace. It reflects your readiness to learn, your work ethic, and your ability to work in teams—qualities that employers value in young candidates. The goal of a teenager resume is to show employers that you're motivated, dedicated, and capable, even without past paid work experience.</p>

                    <h3>The Importance of Customizing Your Resume</h3>
                    <p>One of the key factors in creating an effective teenager resume with no work experience is customization. Every job you apply for requires a resume that reflects your skills and experience tailored to the specific role. Whether you're applying for a teenager retail resume, a teenager internship resume, or a teenager volunteer resume, make sure you adjust your resume to highlight the qualities that employers are looking for.</p>
                </section><div><GoogleAd/></div>

                <section id="key-sections">
                    <h2>2. Key Sections of a Teenager Resume with No Work Experience</h2>
                    <p>When crafting your teenager resume with no work experience, it's essential to structure it well. Here are the key sections you should include:</p>

                    <h3>Contact Information</h3>
                    <p>The first thing employers will need is your contact information. This includes:</p>
                    <ul>
                        <li>Full name</li>
                        <li>Phone number</li>
                        <li>Professional email address</li>
                        <li>Optional: LinkedIn profile or other social media profiles (make sure these are professional)</li>
                    </ul>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>Full Name: John Doe</li>
                        <li>Phone Number: (555) 123-4567</li>
                        <li>Email: john.doe@email.com</li>
                        <li>LinkedIn: linkedin.com/in/johndoe (Optional)</li>
                    </ul>

                    <h3>Objective Statement</h3>
                    <p>An objective statement is a brief section at the beginning of your resume where you can express your career goals and show the value you will bring to the company. This is especially important for teenagers with no work experience, as it allows you to showcase your eagerness to learn and your enthusiasm for the job.</p>
                    <p><strong>Example:</strong> Motivated high school student seeking a part-time position to develop customer service skills and contribute positively to a team.</p>

                    <h3>Education</h3>
                    <p>Since you may not have any work experience, your education section will be crucial. You should list:</p>
                    <ul className="strong-point">
                        <li>Name of school</li>
                        <li>Expected graduation year</li>
                        <li>GPA (if it's above average)</li>
                        <li>Relevant coursework, projects, or honors that showcase your skills</li>
                    </ul>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>School: ABC High School</li>
                        <li>Expected Graduation: 2026</li>
                        <li>GPA: 3.8/4.0</li>
                        <li>Relevant Coursework: Business, Marketing, Computer Science</li>
                        <li>Honors: Dean's List (2024-2025)</li>
                    </ul>

                    <h3>Skills</h3>
                    <p>Your skills section should focus on qualities that will make you a good employee. Even though you don’t have job experience, you have transferable skills. These could include:</p>
                    <ul className="strong-point">
                        <li>Communication</li>
                        <li>Time management</li>
                        <li>Problem-solving</li>
                        <li>Leadership</li>
                        <li>Teamwork</li>
                        <li>Organizational skills</li>
                    </ul>
                    <p><strong>Example:</strong> Excellent communication skills, ability to work collaboratively in teams, and proven time management skills from balancing schoolwork and extracurricular activities.</p>

                    <h3>Experience</h3>
                    <p>If you’ve volunteered, participated in school projects, or taken on leadership roles in extracurricular activities, this is the section where you can highlight that. Even though it's not paid experience, it still shows your ability to contribute, work with others, and handle responsibilities.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>Volunteer | Local Animal Shelter (2024-2025)
                            <ul>
                                <li>Helped with animal care and organized community adoption events.</li>
                            </ul>
                        </li>
                        <li>Team Leader | School Debate Team (2023-2024)
                            <ul>
                                <li>Led weekly meetings, coordinated practice sessions, and represented the team at state competitions.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Achievements/Certifications</h3>
                    <p>If you’ve earned any certifications or awards—such as completing a first-aid course, winning a school award, or getting a perfect attendance award—include those here. These can make your resume stand out, even without work experience.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>CPR Certified (2024)</li>
                        <li>Employee of the Month (Local Coffee Shop - for volunteer work) - April 2025</li>
                        <li>Perfect Attendance Award (2023-2024)</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="how-to-write">
                    <h2>3. How to Write a Teenager Resume with No Work Experience</h2>
                    <p>Writing a teenager resume with no work experience requires some creativity. Here’s a step-by-step guide to help you craft a resume that reflects your strengths and shows your potential to employers.</p>

                    <h3>Step 1: Choose the Right Resume Template</h3>
                    <p>Start by choosing a clean and professional resume template. At <a href="https://resumeera.xyz">Resumeera.xyz</a>, we offer a variety of free teenager resume templates that can help you format your resume in a polished and professional manner. Choose one that highlights your strengths, especially your skills and experiences.</p>

                    <h3>Step 2: Include Your Contact Information</h3>
                    <p>Your contact information is the first section of your resume. It’s essential that this information is clear and up-to-date. Always double-check that your email is professional, especially since this is one of the primary ways potential employers will contact you.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>Full Name: Emma Smith</li>
                        <li>Phone Number: (555) 555-5555</li>
                        <li>Email Address: emma.smith@email.com</li>
                        <li>LinkedIn: linkedin.com/in/emmasmith (optional)</li>
                    </ul>

                    <h3>Step 3: Write an Objective Statement</h3>
                    <p>An objective statement at the beginning of your resume is important, particularly for a teenager resume with no work experience. It should focus on your desire to learn and contribute to the company you’re applying to. You don’t need to have any work experience to craft an effective objective—just be clear about your enthusiasm.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>Objective: Eager high school student looking for a part-time job to build professional skills and contribute to the success of a fast-paced retail team.</li>
                    </ul>

                    <h3>Step 4: Highlight Your Education</h3>
                    <p>If you don’t have much work experience, your education section will be the focal point of your resume. List the name of your school, your expected graduation year, and your GPA (if it’s strong). If you have taken any classes that are relevant to the job you’re applying for, such as business classes or computer science, include them as well.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>School: XYZ High School</li>
                        <li>Expected Graduation Year: 2026</li>
                        <li>GPA: 3.9/4.0</li>
                        <li>Relevant Coursework: Business, Marketing, Advanced English</li>
                    </ul>

                    <h3 className="examplegeneral">Step 5: Emphasize Your Skills</h3>
                    <p>When you’re writing a teenager resume with no work experience, your skills section is your opportunity to highlight the things you’ve learned outside of formal work settings. These can include:</p>
                    <ul className="strong-point">
                        <li>Leadership: Are you a captain of a sports team? Did you organize a school event?</li>
                        <li>Communication: Do you have experience presenting in front of class or writing for a school newspaper?</li>
                        <li>Time Management: Are you balancing school, extracurriculars, and volunteer work?</li>
                    </ul>
                    <p><strong className="examplegeneral">Example:</strong></p>
                    <ul className="strong-point">
                        <li>Strong communication skills</li>
                        <li>Ability to work well with others in team settings</li>
                        <li>Proficient in Microsoft Office Suite and Google Docs</li>
                    </ul>

                    <h3>Step 6: List Your Experience</h3>
                    <p>While you may not have formal work experience, chances are you have participated in activities or volunteer work that has given you valuable experience. Include any school clubs, sports teams, or volunteer work where you took on responsibilities and worked with others.</p>
                    <p><strong className="examplegeneral">Example:</strong></p>
                    <ul className="strong-point">
                        <li>Volunteer Work: Community Food Bank
                            <ul>
                                <li>Organized donation drives and helped distribute food to families in need.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Step 7: Add Certifications or Achievements</h3>
                    <p>Include any certifications or awards you’ve earned that might be relevant to the job. For instance, if you’ve completed an online course or received an award for academic excellence, include it in this section.</p>
                    <p className="examplegeneral"><strong>Example:</strong></p>
                    <ul className="strong-point">
                        <li>First Aid Certified (2025)</li>
                        <li>Honor Roll (2023-2024)</li>
                    </ul>
                </section><div><GoogleAd/></div>

                <section id="teenager-resume-examples">
                    <h2>4. Teenager Resume Examples</h2>
                    <FresherResume fresherResumeImage={fresherResumeImage}/>

                    <h3>Example 1: Retail Job Application</h3>
                    <p>This example demonstrates how a teenager can apply for a part-time retail job without previous work experience.</p>
                    <ul>
                        <li><strong>Objective:</strong> Motivated teenager seeking a part-time retail job to develop customer service skills and learn more about the retail industry.</li>
                        <li><strong>Education:</strong> XYZ High School, Expected Graduation Year: 2026, GPA: 3.8</li>
                        <li><strong>Skills:</strong> Customer service, teamwork, organization, problem-solving</li>
                        <li><strong>Experience:</strong> Volunteer at Local Animal Shelter—Assisted with animal care and organized community adoption events.</li>
                    </ul>
                        <ResumeBuilder/>
                    <h3>Example 2: Internship Application</h3>
                    <p>This example shows how a teenager can apply for an internship without formal work experience by focusing on skills and school-related experiences.</p>
                    <ul>
                        <li><strong>Objective:</strong> Driven high school student seeking an internship in the marketing field to gain experience and contribute to a dynamic team.</li>
                        <li><strong>Education:</strong> XYZ High School, Expected Graduation Year: 2026</li>
                        <li><strong>Skills:</strong> Social media management, research, content creation, writing</li>
                        <li><strong>Experience:</strong> Writer for School Newspaper—Produced articles on various topics, collaborated with peers, and met deadlines.</li>
                    </ul>

                    <h3>Example 3: Volunteer Role</h3>
                    <p>This example shows how to position volunteer work on your resume to demonstrate transferable skills, even without formal work experience.</p>
                    <ul>
                        <li><strong>Objective:</strong> Enthusiastic high school student seeking a volunteer role to gain practical experience in the healthcare industry.</li>
                        <li><strong>Education:</strong> ABC High School, Expected Graduation Year: 2025</li>
                        <li><strong>Skills:</strong> Empathy, communication, time management, organization</li>
                        <li><strong>Experience:</strong> Volunteer at Local Hospital—Assisted with patient intake, provided information to visitors, and helped maintain cleanliness in waiting areas.</li>
                    </ul>
                </section><div><GoogleAd/></div>


                <section id="common-mistakes">
                    <h2>5. Common Mistakes to Avoid</h2>
                    <p>Creating a teenager resume with no work experience is a great way to demonstrate your skills and potential. However, there are a few mistakes you should avoid:</p>
                    <ul className=''>
                        <li><strong>Unprofessional Email Address:</strong> Make sure your email address is professional and appropriate for job applications. Avoid using nicknames or casual terms.</li>
                        <li><strong>Lack of Focus:</strong> Keep your resume focused on relevant experiences and skills. Don’t include unnecessary details like personal hobbies unless they’re related to the job.</li>
                        <li><strong>Not Tailoring the Resume:</strong> Customize your resume for each job application to show that you’ve taken the time to align your skills with the employer’s needs. Generic resumes are less likely to grab attention.</li>
                    </ul>
                </section><div><GoogleAd/></div>


                <section >
                <h2>6. Frequently Asked Questions (FAQ)</h2>
                    <div className="faqs">
                        <div className="faq-item">
                            <h3>Q: How do I make my teenager resume stand out?</h3>
                            <p>A: Focus on highlighting your skills, volunteer work, and extracurricular activities that show leadership and commitment. Use action verbs to describe your experiences. For example, instead of saying "helped at the shelter," you could say "coordinated donation drives" or "managed team of volunteers." This makes your experiences sound more impactful.</p>

                        </div>
                        <div className="faq-item"><h3>Q: Should I include hobbies on my resume?</h3>
                            <p>A: Only include hobbies that are relevant to the job you're applying for. For example, if you're applying for a creative role, hobbies like photography or writing could be relevant. Hobbies like reading or gaming might not be as relevant unless the job directly involves these activities.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Q: How do I write a teenager resume with no work experience?</h3>
                            <p>A: Focus on your education, skills, volunteer work, and school projects. Highlight your soft skills, such as communication, problem-solving, and teamwork, which are valuable to employers. Also, mention any leadership roles or responsibilities you’ve had in school clubs or sports.</p>

                        </div>
                    </div>
                </section><div><GoogleAd/></div>


                <section id="conclusion">
                    <h2>7. Conclusion</h2>
                    <p>Crafting a teenager resume with no work experience doesn’t have to be difficult. By focusing on the skills and experiences you’ve gained through school, extracurricular activities, and volunteer work, you can create a professional and impressive resume that showcases your potential. Employers understand that teenagers are just starting their careers, and they are more interested in your willingness to learn, your work ethic, and how you can contribute to their team.</p>

                    <p>Don’t let the lack of formal work experience hold you back. Use the <Link to='/template'>free templates</Link> at <a href="https://resumeera.xyz">Resumeera.xyz</a> to get started, and soon you’ll have a standout resume that will help you land your first job, internship, or volunteer position. Remember, everyone starts somewhere, and your resume is your first step toward building a successful career.</p>
                </section><div><GoogleAd/></div>


                <section id="key-takeaways">
                    <h2>8. Key Takeaways</h2>
                    <ul>
                        <li><strong>Teenager resumes with no work experience can still showcase valuable skills and experiences.</strong> Your resume can focus on skills gained through school, volunteering, or extracurricular activities.</li>
                        <li><strong>Tailor your resume to each job application.</strong> Customize it to highlight the skills and experiences that align with the employer's needs.</li>
                        <li><strong>Use <Link to='/'>Resumeera.xyz </Link></strong> to access free, professional templates to build your resume quickly and efficiently.</li>
                        <li><strong>Highlight your education, volunteer work, and extracurricular activities</strong> to demonstrate your potential and enthusiasm to employers.</li>
                    </ul>

                    <p>Now you have everything you need to create a teenager resume that helps you stand out, even without work experience. Start building your future today!</p>
                </section><div><GoogleAd/></div>


                <section className='releted-article'>
                    <h2>RELETED ARTICLE :- YOU CAN'T MISS IF YOU WANT TO CREATE A PROFETIONAL RESUME</h2>
                    <br /><Link to='/teenager-resume-for-your-first-job'>TEENAGER REUSME FOR YOUR FIRST </Link>
                    <br /><Link to='/teenager-resume-for-your-first-job-in-high-school'>TEENAGER REUSME FOR YOUR FIRST JOB IN HIGH SCHOOL</Link>
                    <br /><Link to='/resume-for-a-15-year-old-first-job'>RESUME FOR A 15 YEAR OLD FIRST JOB</Link>
                    <br /><Link to='/student-resume-for-your-first-job'>STUDENT RESUME FOR YOUR FURST JOB</Link>
                    <br /><Link to='/crafting-a-sample-resume-for-students-with-no-work-experience'>CRAFTING A SAMPLE RESUME FOR STUDENTS WITH NO WORK EXPERIENCE</Link>
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
