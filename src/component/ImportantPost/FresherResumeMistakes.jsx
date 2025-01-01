import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Fresher_Resume_Mistakes from "../../image/image_for_link/Fresher Resume Mistakes.jpg";
import ShareButtons from "../shareButton/ShareButtons";
import CallToAction from "../CallToAction";
import RandomeArticleToBlogCareer from "../RandomeArticleToBlogCareer";
import AuthorCard from "../AuthorCard";
import GoogleAd from "../adFolder/GoogleAd";
export default function FresherResumeMistakes() {
  const ArticleUrl =
    "https://resumeera.xyz/fresher-resume-mistakes-you-should-avoid";
  const ArticleTitle = "Fresher Resume Mistakes You Should Avoid | ResumeEra";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>{ArticleTitle}</title>
        <meta
          name="description"
          content="Learn the best practices for simple resume formatting to create a professional and impactful resume. Visit ResumeEra.xyz for more tips and templates."
        />
        <meta
          name="keywords"
          content="resume formatting, resume tips, professional resume, resume best practices, ResumeEra"
        />
        <link rel="canonical" href={ArticleUrl} />
        <script type="application/ld+json">
          {`
                                                    {
                                                                    "@context": "https://schema.org",
                                                                    "@type": "Article",
                                                                    "headline": "Fresher Resume Mistakes You Should Avoid",
                                                                    "description": "Learn the best practices for simple resume formatting to create a professional and impactful resume. Visit ResumeEra.xyz for more tips and templates.",
                                                                    "author": {
                                                                                    "@type": "Organization",
                                                                                    "name": "ResumeEra"
                                                                    },
                                                                    "publisher": {
                                                                                    "@type": "Organization",
                                                                                    "name": "ResumeEra",
                                                                                    "logo": {
                                                                                                    "@type": "ImageObject",
                                                                                                    "url": "https://resumeera.xyz/best_logo.webp"
                                                                                    }
                                                                    },
                                                                    "mainEntityOfPage": {
                                                                                    "@type": "WebPage",
                                                                                    "@id": "${ArticleUrl}"
                                                                    }
                                                    }
                                                    `}
        </script>
      </Helmet>
      <div className="aboutResumeEra">
        <h1>Fresher Resume Mistakes You Should Avoid</h1>
        <div className="date-author-container">
          <img
            src="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
            alt="ResumeEra Logo"
            className="author-logo"
            style={{ width: "50px", height: "50px" }}
          />
          <small className="author-details">
            ✍️ By the <span className="author-highlight">ResumeEra Team</span> |
            Published:{" "}
            <span className="author-highlight">December 22, 2024</span> | ⏱️{" "}
            <span className="author-highlight">8 min read</span>
          </small>
        </div>
        <figure>
          <img
            style={{ height: "auto" }}
            src={Fresher_Resume_Mistakes}
            alt="Fresher Resume Mistakes You Should Avoid"
            loading="lazy"
          />
          <figcaption>Fresher Resume Mistakes You Should Avoid</figcaption>
        </figure>
        <p>
          Your resume is like your identity, especially when you're a fresher
          and don’t have much work experience. In today’s competitive job
          market, having a well-written and professionally formatted resume is
          essential. However, freshers often make some common mistakes that can
          hurt their chances of landing a job. Let’s go over these mistakes and
          learn how to avoid them. 🌟📄✅
        </p>

        <ol>
          <li>
            <section>
              <h2>Incorrect Personal Information</h2>
              <p>
                It is crucial to provide accurate personal information in your
                resume. Freshers sometimes make errors in their phone number,
                email ID, or address. 🚫📞✉️
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>📌 Double-check your phone number and email ID.</li>
                <li>📌 Use a professional email ID like yourname@gmail.com.</li>
                <li>
                  📌 If you include social media links (like LinkedIn), ensure
                  they are updated and professional.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Overloading the Resume with Information</h2>
              <p>
                Many freshers try to include too much information in their
                resumes, which can overwhelm recruiters. 📚😵🔍
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>📌 Use a simple and clean format.</li>
                <li>📌 Include only the information relevant to the job.</li>
                <li>
                  📌 Leave enough white space so the resume is easy to read.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Lack of a Clear Objective Statement</h2>
              <p>
                An objective statement is a crucial part of your resume, but
                some freshers either skip it or write vague objectives. 🎯❓📜
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Write a short and clear objective that aligns with your
                  career goals and the job requirements.
                </li>
                <li>
                  📌 Example: "To apply my skills and education in [specific
                  field] to help achieve organizational goals."
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Using Unprofessional Fonts and Styles</h2>
              <p>
                Decorative or fancy fonts can make your resume look
                unprofessional. ✍️🚫🎨
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Stick to professional fonts like Times New Roman, Arial, or
                  Calibri.
                </li>
                <li>📌 Keep the font size between 10 and 12.</li>
                <li>
                  📌 Use minimal colors and stick to black-and-white formatting.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Grammatical and Spelling Errors</h2>
              <p>
                Grammar and spelling mistakes can create a bad impression on
                recruiters. ✏️❌📖
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Run a spell check and grammar check after creating your
                  resume.
                </li>
                <li>
                  📌 Ask a trusted friend, teacher, or mentor to proofread it
                  for you.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Not Tailoring the Resume for Each Job</h2>
              <p>
                Sending the same generic resume for all jobs is a common mistake
                freshers make. 🛠️📂🔑
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Customize your resume for each job application based on the
                  job requirements.
                </li>
                <li>
                  📌 Use keywords from the job description to make your resume
                  stand out.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Skipping the Skills Section</h2>
              <p>
                The skills section is very important, yet freshers sometimes
                overlook it or write it poorly. 🧠✨💻
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>📌 Separate technical skills and soft skills.</li>
                <li>
                  📌 Only include skills you actually have and that are relevant
                  to the job.
                </li>
                <li>
                  📌 Example: "Proficient in MS Office, Basic knowledge of
                  Python, Strong communication skills."
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Not Highlighting Achievements</h2>
              <p>
                Freshers often forget to include measurable achievements or
                details about their projects. 🏆📊✅
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Highlight your projects and internships with clear details
                  about your contributions.
                </li>
                <li>
                  📌 Example: "Completed a project on [topic], which increased
                  efficiency by 20%."
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Ignoring the Cover Letter</h2>
              <p>
                Some freshers skip writing a cover letter, which can make a big
                difference. 📩📝💼
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>📌 Write a personalized and targeted cover letter.</li>
                <li>📌 Always attach a cover letter when it’s required.</li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Including Irrelevant Information</h2>
              <p>
                Adding unnecessary details like irrelevant hobbies or personal
                interests can waste a recruiter’s time. 🕒📉🎮
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>📌 Include only professional and relevant information.</li>
                <li>📌 Avoid listing hobbies like "watching TV."</li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Poor Alignment and Formatting</h2>
              <p>
                Bad alignment and formatting can make your resume look messy and
                unorganized. 📐📄❌
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Use proper margins and bullet points to organize
                  information.
                </li>
                <li>
                  📌 Choose a professional template that looks clean and easy to
                  read.
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Using Generic Headings</h2>
              <p>
                Generic headings like "Curriculum Vitae" or "Resume" can seem
                outdated. 🗂️❓📋
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Write your name at the top of your resume in a clear and
                  prominent way.
                </li>
                <li>📌 Make your contact information easy to find.</li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
          <li>
            <section>
              <h2>Not Emphasizing Internships or Training</h2>
              <p>
                Internships and training are strong points for freshers but
                often get overlooked. 💼📅🔧
              </p>
              <h3>How to Fix It:</h3>
              <ul>
                <li>
                  📌 Include details about your internships or training, such as
                  duration, company name, and your role.
                </li>
                <li>
                  📌 Example: "Completed a 3-month internship at [Company Name]
                  working on [specific project]."
                </li>
              </ul>
            </section>
            <div>
              <GoogleAd />
            </div>
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          As a fresher, creating a professional and well-formatted resume can
          give you a strong start in your career. By avoiding the mistakes
          mentioned above, you can make your resume more impressive and
          effective. Remember, the goal of your resume is to showcase your
          skills and potential in the best possible way. So take your time, plan
          carefully, and pay attention to the details when creating your resume.
          🌟💡📈
        </p>
      </div>
      <section>
        <div>
          <AuthorCard />
        </div>
        <div>
          <RandomeArticleToBlogCareer />
        </div>
        <div>
          <CallToAction />
        </div>
        <div className="stickyShare">
          <ShareButtons url={ArticleUrl} title={ArticleTitle} />
        </div>
      </section>
      <div>
        <GoogleAd />
      </div>
    </div>
  );
}
