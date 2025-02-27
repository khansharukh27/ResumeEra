import { Helmet } from "react-helmet";
import ResumeEraHeading from "../../ResumeEraHeading";
import GoogleAd from "../../adFolder/GoogleAd";
import WelcomeNotes from "../../WelcomeNotes";
import RandomeArticleToBlogCareer from "../../RandomeArticleToBlogCareer";
import AuthorCard from "../../AuthorCard";
import CallToAction from "../../CallToAction";
import ShareButtons from "../../shareButton/ShareButtons";
import { useEffect } from "react";
import CombinedTemplates from "../../CombinedTemplates";

export default function ResumeTemplateForFresher(prop) {
  const { techImages, fresherResumeImage, images } = prop;
  const ArticleUrl = "https://resumeera.xyz/resume-template-for-fresher";
  const ArticleTitle = "Resume Template for Fresher in 2025: Free Downloads, Tips, and Examples";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const title = "Resume Template for Fresher in 2025: Free Downloads, Tips, and Examples";
  const publishDate = "2025-02-26";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Discover the best resume template for fresher in 2025. Download free templates, get expert tips, and see examples to craft a standout resume with no experience."
        />
        <meta
          name="keywords"
          content="resume template for fresher, fresher resume template, free resume template for fresher, resume template for fresher 2025, best resume for freshers, fresher resume"
        />
        <link rel="canonical" href={ArticleUrl} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Discover the best resume template for fresher in 2025. Download free templates, get expert tips, and see examples to craft a standout resume with no experience."
        />
        <meta property="og:url" content={ArticleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://i.postimg.cc/xyz123/resume-template-for-fresher-2025.webp" />
        <meta property="og:site_name" content="ResumeEra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Discover the best resume template for fresher in 2025. Download free templates, get expert tips, and see examples to craft a standout resume with no experience."
        />
        <meta name="twitter:image" content="https://i.postimg.cc/xyz123/resume-template-for-fresher-2025.webp" />
        <meta name="twitter:site" content="@ResumeEra" />
        <script type="application/ld+json">
          {`
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title}",
    "description": "Discover the best resume template for fresher in 2025. Download free templates, get expert tips, and see examples to craft a standout resume with no experience.",
    "author": {
      "@type": "Organization",
      "name": "ResumeEra",
      "url": "https://resumeera.xyz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ResumeEra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
      }
    },
    "datePublished": "${publishDate}",
    "image": "https://i.postimg.cc/xyz123/resume-template-for-fresher-2025.webp",
    "url": "${ArticleUrl}"
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
        "name": "What is a resume template for fresher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A resume template for fresher is a pre-designed layout tailored for recent graduates or beginners with no work experience, emphasizing education, skills, and projects. You can download free ones from ResumeEra.xyz to kickstart your job search."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find a free resume template for fresher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit ResumeEra.xyz to download a free resume template for fresher. Their template section offers professional, ATS-friendly designs ideal for 2025 job applications—just pick one and customize it."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use a resume template for fresher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download a resume template for fresher from ResumeEra.xyz, input your education, skills, and projects, and tailor it to the job description. Their step-by-step guide makes it easy to create a polished resume."
        }
      },
      {
        "@type": "Question",
        "name": "What should a resume template for fresher include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It should have contact info, an objective, education, skills, and projects or certifications. ResumeEra.xyz’s templates are structured to highlight these key areas effectively for freshers."
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
      "name": "Fresher Resume Formatting",
      "item": "https://resumeera.xyz/fresher-resume-formatting"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "${ArticleTitle}",
      "item": "${ArticleUrl}"
    }
  ]
}
          `}
        </script>
      </Helmet>

      <ResumeEraHeading title={title} publishDate={publishDate} />
      <article className="aboutResumeEra">
        <section>
          <div style={{
            background: "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)",
            width:'100%',
            borderRadius:'15px',
            display: "inline-block",
          }}>
            <img
              src="https://i.postimg.cc/wvcfTJPn/multi-page-resume-formatting-removebg-preview.png"
              style={{ width: "100%" }}
              loading="lazy"
              alt="Resume Template for Fresher Guide"
            />
          </div>
          <p>
            Stepping into the job market as a fresher in 2025 can feel overwhelming, especially without work experience. That’s where a  resume template for fresher  comes in—it’s your ticket to creating a professional resume that highlights your potential. At <a href="https://resumeera.xyz">ResumeEra.xyz</a>, you’ll find free, downloadable  resume templates for fresher  designed to impress employers. This ultimate 3000-word guide dives deep into crafting a  resume template for fresher , offering tips, examples, and free resources to help you land your first job. Let’s explore how to make your resume shine in 2025!
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Why Use a Resume Template for Fresher in 2025?</h2>
          <p>
            A  resume template for fresher  is essential when you’re starting your career with little to no professional background. It provides a structured layout that showcases your education, skills, and potential, making it easier for employers to see your value.
          </p>
          <p>
            Imagine you’ve just graduated with a degree, learned coding through a course, or completed a standout project. A  resume template for fresher  organizes these achievements into a clean, professional format. “For freshers, a resume isn’t about jobs—it’s about promise,” says career expert Priya Sharma. With free options like <a href="https://resumeera.xyz/template">ResumeEra.xyz templates</a>, you can create a  resume template for fresher  that competes in 2025’s job market.
          </p>
          <p>
            In today’s digital age, applicant tracking systems (ATS) screen resumes first. A  resume template for fresher  from <a href="https://resumeera.xyz/ats-friendly-resume-format-for-beginners">ResumeEra.xyz’s ATS-friendly designs</a> ensures you pass these scans, increasing your chances of reaching a hiring manager.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>What Makes a Perfect Resume Template for Fresher?</h2>
          <p>
            A great  resume template for fresher  is simple, focused, and tailored for beginners. It prioritizes your strengths—education, skills, and projects—over work history. Here’s the core structure.
          </p>
          <h3>Structure of a Resume Template for Fresher</h3>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact Info</td>
                <td>Your details</td>
                <td>“Neha Patel, 555-123-4567, neha@email.com, Bangalore”</td>
              </tr>
              <tr>
                <td>Objective</td>
                <td>Your career goal</td>
                <td>“Eager fresher seeking a tech role.”</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>Academic background</td>
                <td>“B.Tech, NIT Trichy, 2025, 8.7 CGPA”</td>
              </tr>
              <tr>
                <td>Skills</td>
                <td>Key abilities</td>
                <td>“Python, teamwork, problem-solving”</td>
              </tr>
              <tr>
                <td>Projects</td>
                <td>Practical work</td>
                <td>“Built a budget app, 2024”</td>
              </tr>
              <tr>
                <td>Certifications</td>
                <td>Extra credentials</td>
                <td>“Google Data Analytics, 2024”</td>
              </tr>
            </tbody>
          </table>
          <p>
            This structure forms the backbone of a  resume template for fresher . Let’s dive into each section—download a free one at <a href="https://resumeera.xyz/resume-format-for-freshers-free-download">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Breaking Down a Resume Template for Fresher</h2>
          <ol>
            <li>
              <strong>Contact Information</strong>
              <p>
                Begin your  resume template for fresher  with your name, phone, email, and city. Example: “Ravi Kumar, 555-789-1234, ravi@email.com, Mumbai.” Keep it professional—learn more at <a href="https://resumeera.xyz/how-to-create-a-professional-resume">professional resume tips</a>.
              </p>
              <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“Priya Sharma, 555-456-7890, priya@email.com, Delhi”</li>
                <li>“Aman Gupta, 555-321-6547, aman@email.com, Pune”</li>
              </ul>
            </li>
            <li>
              <strong>Objective</strong>
              <p>
                A short goal sets the tone. Example: “Motivated B.Sc. fresher seeking a data analyst role.” Tailor it—see <a href="https://resumeera.xyz/how-to-write-a-strong-resume-objective">resume objective guide</a>.
              </p>
               <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“Enthusiastic fresher aiming for a marketing role.”</li>
                <li>“Recent IT grad pursuing a developer job.”</li>
              </ul>
            </li>
            <li>
              <strong>Education</strong>
              <p>
                List your degree, college, year, and grades. Example: “B.Com, Mumbai University, 2025, 82%.” Crucial for a  resume template for fresher —check <a href="https://resumeera.xyz/how-to-showcase-your-education-in-a-resume">education tips</a>.
              </p>
               <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“B.E., Anna University, 2025, 8.5 CGPA”</li>
                <li>“B.A., DU, 2024, 80%”</li>
              </ul>
            </li>
            <li>
              <strong>Skills</strong>
              <p>
                Highlight abilities like “Proficient in Java, communication.” Match the job—see <a href="https://resumeera.xyz/how-to-use-keywords-in-a-resume">keywords guide</a>.
              </p>
               <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“Tech Skills: Python, HTML; Soft Skills: Teamwork”</li>
                <li>“Communication: Presented projects; Tools: Canva”</li>
              </ul>
            </li>
            <li>
              <strong>Projects</strong>
              <p>
                Showcase work like “Developed an e-commerce site, 2024.” Adds value—check <a href="https://resumeera.xyz/how-to-highlight-achievements-in-a-resume">achievements guide</a>.
              </p>
               <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“Created a budget app in Python, 2024”</li>
                <li>“Designed a marketing plan, 2023”</li>
              </ul>
            </li>
            <li>
              <strong>Certifications (Optional)</strong>
              <p>
                Add credentials like “AWS Cloud Practitioner, 2024.” Boosts credibility—see <a href="https://resumeera.xyz/resume-tips-for-experienced-professionals">resume tips</a>.
              </p>
               <h4 className="examplegeneral">Examples</h4>
              <ul className='strong-point'>
                <li>“Digital Marketing by Google, 2024”</li>
                <li>“SQL Basics, Coursera, 2023”</li>
              </ul>
            </li>
          </ol>
          <p>
            A  resume template for fresher  should be one page and ATS-friendly—get started at <a href="https://resumeera.xyz/free-resume-format-pdf-build-a-cv-that-stands-out">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>How to Use a Resume Template for Fresher: Step-by-Step</h2>
          <p>
            Ready to craft your  resume template for fresher  for 2025? Follow these steps.
          </p>
          <ol>
            <li>
              <strong>Gather Your Info</strong>
              <p>
                List education, skills, projects, and achievements for your  resume template for fresher .
              </p>
            </li>
            <li>
              <strong>Download a Template</strong>
              <CombinedTemplates techImages={techImages} fresherResumeImage={fresherResumeImage} images={images} />
              <p>
                Get a free  resume template for fresher  from <a href="https://resumeera.xyz/resume-format-for-freshers-free-download">ResumeEra.xyz</a>. Use Arial, 11-12 pt.
              </p>
            </li>
            <li>
              <strong>Add Contact Info</strong>
              <p>
                Example: “Kiran Patel, 555-234-5678, kiran@email.com, Chennai.”
              </p>
            </li>
            <li>
              <strong>Write an Objective</strong>
              <p>
                Example: “Fresh IT grad seeking a developer role.” Tailor it—see <a href="https://resumeera.xyz/tailor-resume-to-job-description">tailoring tips</a>.
              </p>
            </li>
            <li>
              <strong>List Education</strong>
              <p>
                Example: “B.Tech, VIT, 2025, 8.7 CGPA.” Key for a  resume template for fresher .
              </p>
            </li>
            <li>
              <strong>Add Skills and Projects</strong>
              <p>
                Use bullets: “Coded a chat app, 2024” or “Led a group project.” See <a href="https://resumeera.xyz/how-to-format-a-resume-correctly">formatting tips</a>.
              </p>
            </li>
            <li>
              <strong>Proofread</strong>
              <p>
                Avoid errors—check <a href="https://resumeera.xyz/common-mistakes-to-avoid-on-your-resume">mistakes to avoid</a>.
              </p>
            </li>
          </ol>
          <p>
            Build your  resume template for fresher  now with <a href="https://resumeera.xyz/step-by-step-guide-resume-format-for-freshers">ResumeEra.xyz</a>!
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Resume Template for Fresher Examples</h2>
          <p>
            Here are two  resume template for fresher  examples to inspire you.
          </p>
          <h3>Example 1: Tech Resume Template for Fresher</h3>
          <div className="strong-point">
            <p><strong>Arjun Sharma</strong></p>
            <p>555-678-9012 | arjun@email.com | Hyderabad</p>
            <p><strong>Objective:</strong> B.Tech fresher seeking a developer role.</p>
            <p><strong>Education:</strong> B.Tech, IIT Hyderabad, 2025, 8.9 CGPA</p>
            <p><strong>Skills:</strong></p>
            <ul className='strong-point'>
              <li>Python, JavaScript</li>
              <li>Problem-Solving – Solved 50+ coding problems</li>
            </ul>
            <p><strong>Projects:</strong></p>
            <ul className='strong-point'>
              <li>Built a weather app, 2024</li>
            </ul>
          </div>
          <h3>Example 2: Marketing Resume Template for Fresher</h3>
          <div className="strong-point">
            <p><strong>Sneha Verma</strong></p>
            <p>555-345-6789 | sneha@email.com | Kolkata</p>
            <p><strong>Objective:</strong> BBA fresher aiming for a marketing role.</p>
            <p><strong>Education:</strong> BBA, Calcutta University, 2025, 80%</p>
            <p><strong>Skills:</strong></p>
            <ul className='strong-point'>
              <li>Communication – Wrote college blog</li>
              <li>Creativity – Designed posts</li>
            </ul>
            <p><strong>Projects:</strong></p>
            <ul className='strong-point'>
              <li>Created a mock ad campaign, 2024</li>
            </ul>
          </div>
          <p>
            Customize these  resume templates for fresher  at <a href="https://resumeera.xyz/resume-format-for-freshers-example">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>5 Mistakes to Avoid in a Resume Template for Fresher</h2>
          <ol>
            <li><strong>Typos:</strong> Proofread—see <a href="https://resumeera.xyz/how-to-hide-spelling-and-grammar-mistakes-through-formatting-a-resume">grammar tips</a>.</li>
            <li><strong>Too Long:</strong> One page is best—check <a href="https://resumeera.xyz/one-vs-multi-page-resume">page length guide</a>.</li>
            <li><strong>Unprofessional Email:</strong> Use a clean email.</li>
            <li><strong>Vague Info:</strong> Be specific—use <a href="https://resumeera.xyz/improving-your-resume-with-action-verbs">action verbs</a>.</li>
            <li><strong>Generic:</strong> Tailor it—learn at <a href="https://resumeera.xyz/tailor-your-resume">tailoring tips</a>.</li>
          </ol>
          <p>
            Avoid these with a  resume template for fresher  from <a href="https://resumeera.xyz/fresher-resume-mistakes-you-should-avoid">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Benefits of Using a Resume Template for Fresher</h2>
          <ul className='strong-point'>
            <li><strong>Saves Time:</strong> Pre-made layouts speed up the process.</li>
            <li><strong>Professional:</strong> Clean design—try <a href="https://resumeera.xyz/professional-resume-format-pdf-download">professional formats</a>.</li>
            <li><strong>ATS-Friendly:</strong> Passes scans—see <a href="https://resumeera.xyz/ats-friendly-vs-creative-resume-format">ATS tips</a>.</li>
            <li><strong>Customizable:</strong> Fits your needs.</li>
          </ul>
          <p>
            These advantages make a  resume template for fresher  a must-have—get one at <a href="https://resumeera.xyz/free-resume-format-pdf">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Types of Resume Templates for Fresher</h2>
          <ol>
            <li><strong>Functional:</strong> Skills-focused—see <a href="https://resumeera.xyz/what-is-a-functional-resume">functional guide</a>.</li>
            <li><strong>Chronological:</strong> Timeline-based—check <a href="https://resumeera.xyz/chronological-resume-formatting-experienced-candidates">chronological tips</a>.</li>
            <li><strong>Combination:</strong> Blends both.</li>
          </ol>
          <p>
            Choose the right  resume template for fresher  at <a href="https://resumeera.xyz/types-of-resume-formats-for-freshers">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Customizing a Resume Template for Fresher</h2>
          <ul className='strong-point'>
            <li><strong>Job-Specific:</strong> Use keywords—learn at <a href="https://resumeera.xyz/how-to-use-keywords-in-a-resume">keywords guide</a>.</li>
            <li><strong>Highlight Strengths:</strong> Focus on top skills/projects.</li>
            <li><strong>Action Verbs:</strong> Use “developed”—see <a href="https://resumeera.xyz/improving-your-resume-with-action-verbs">action verbs</a>.</li>
            <li><strong>Simple Design:</strong> Avoid clutter—check <a href="https://resumeera.xyz/simple-resume-formatting-best-practices">best practices</a>.</li>
          </ul>
          <p>
            Tailor your  resume template for fresher  with <a href="https://resumeera.xyz/step-by-step-guide-resume-format-for-freshers">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Where to Find a Resume Template for Fresher</h2>
          <ul className='strong-point'>
            <li><strong>ResumeEra.xyz:</strong> Free templates at <a href="https://resumeera.xyz/free-resume-format-pdf-for-freshers-ready-to-download">ResumeEra.xyz</a>.</li>
            <li><strong>Canva:</strong> Creative options.</li>
            <li><strong>Word:</strong> Basic designs.</li>
          </ul>
          <p>
            Go for <a href="https://resumeera.xyz/resume-format-for-freshers-sample-download-now-free">ResumeEra.xyz</a> for the best  resume template for fresher .
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Industry-Specific Resume Templates for Fresher</h2>
          <ul className='strong-point'>
            <li><strong>Tech:</strong> Coding focus—see <a href="https://resumeera.xyz/it-resume-formatting-tips">IT tips</a>.</li>
            <li><strong>Marketing:</strong> Creativity—check <a href="https://resumeera.xyz/best-resume-formatting-sales-marketing">marketing tips</a>.</li>
            <li><strong>Finance:</strong> Analytical skills.</li>
          </ul>
          <p>
            Find tailored  resume templates for fresher  at <a href="https://resumeera.xyz/job-specific-resume-formatting">ResumeEra.xyz</a>.
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Key Takeaways for Resume Template for Fresher</h2>
          <ul className='strong-point'>
            <li>A  resume template for fresher  highlights education and skills.</li>
            <li>Keep it one page—see <a href="https://resumeera.xyz/ats-friendly-resume-format-for-beginners">ATS guide</a>.</li>
            <li>Use free templates from <a href="https://resumeera.xyz/free-resume-format-pdf-for-freshers-ready-to-download">ResumeEra.xyz</a>.</li>
            <li>Tailor every resume.</li>
            <li>Avoid mistakes—check <a href="https://resumeera.xyz/fresher-resume-mistakes-you-should-avoid">mistakes guide</a>.</li>
          </ul>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>Start Your Career with a Resume Template for Fresher</h2>
          <p>
            A  resume template for fresher  is your launchpad to a 2025 job. It’s about showcasing potential through education and skills. Visit <a href="https://resumeera.xyz">ResumeEra.xyz</a> for free  resume templates for fresher , download one, and build a resume that kickstarts your career today!
          </p>
        </section>
        <div>
          <GoogleAd />
        </div>

        <section>
          <h2>FAQs About Resume Template for Fresher</h2>
          <ol className="faqs">
            <li className="faq-item">
              <strong>What is a resume template for fresher?</strong>
              <p>
                A  resume template for fresher  is a pre-designed layout tailored for recent graduates or beginners with no work experience, emphasizing education, skills, and projects. You can download free ones from <a href="https://resumeera.xyz/resume-format-for-freshers">ResumeEra.xyz</a> to kickstart your job search.
              </p>
            </li>
            <li className="faq-item">
              <strong>How do I find a free resume template for fresher?</strong>
              <p>
                Visit <a href="https://resumeera.xyz/free-resume-format-pdf-for-freshers-ready-to-download">ResumeEra.xyz</a> to download a free  resume template for fresher . Their template section offers professional, ATS-friendly designs ideal for 2025 job applications—just pick one and customize it.
              </p>
            </li>
            <li className="faq-item">
              <strong>How do I use a resume template for fresher?</strong>
              <p>
                Download a  resume template for fresher  from ResumeEra.xyz, input your education, skills, and projects, and tailor it to the job description. Their <a href="https://resumeera.xyz/step-by-step-guide-resume-format-for-freshers">step-by-step guide</a> makes it easy to create a polished resume.
              </p>
            </li>
            <li className="faq-item">
              <strong>What should a resume template for fresher include?</strong>
              <p>
                It should have contact info, an objective, education, skills, and projects or certifications. ResumeEra.xyz’s templates are structured to highlight these key areas effectively for freshers—explore more at <a href="https://resumeera.xyz/how-to-format-a-resume-correctly">formatting tips</a>.
              </p>
            </li>
          </ol>
        </section>
        <div>
          <WelcomeNotes />
          <RandomeArticleToBlogCareer />
          <AuthorCard />
          <CallToAction />
          <div className="stickyShare">
          <ShareButtons url={ArticleUrl} title={ArticleTitle} />

          </div>
        </div>
      </article>
    </div>
  );
}