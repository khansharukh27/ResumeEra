import React, { useState } from "react";
import GoogleAd from "./adFolder/GoogleAd";
import "../css/ImportantPostLink.css";
import How_to_Make_a_Resume_2024 from "../../src/image/How to Make a Resume 2024.jpg";
import Crafting_Modern_Resume from "../image/image_for_link/Crafting a Modern Resume.jpg";
import Top_Resume_Templates_for_2024 from '../image/image_for_link/Top Resume Templates for 2024.jpg'
import What_Employers_Look_for_in_a_Resume from '../image/image_for_link/What Employers Look for in a Resume.jpg'
import How_to_Format_a_Resume_Correctly from '../image/image_for_link/How to Format a Resume Correctly.jpg'
import Improving_Your_Resume_with_Action_Verbs from '../image/image_for_link/Improving Your Resume with Action Verbs.jpg'
import xyz_formula from '../image/image_for_link/XYZ Formula.jpg'
import Resume_for_International_Jobs from '../image/image_for_link/Resume for International Jobs.jpg'
import How_to_Showcase_Your_Education_in_a_Resume from '../image/image_for_link/Showcase Your Education in a Resume.jpg'
const ImportantPostLink = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(9); // Initially display 9 posts

  const handleSeeMore = () => {
    setVisiblePosts((prevCount) => prevCount + 15); // Show 15 more posts on each click
  };

  const posts = [
    {
      path: "/about-resumeera",
      title: "ResumeEra: Craft Your Perfect Resume Today",
      src: "https://resumeera.xyz/static/media/download.96cc600c1311eb5dce13.jpg",
      alt: "ResumeEra logo",
    },
    {
      path: "/how-to-create-a-professional-resume",
      title: "How to Create a Professional Resume",
      src: "https://img.freepik.com/free-photo/handsome-young-man-working-laptop-smiling-while-sitting-sidewalk-cafe_231208-12079.jpg",
      alt: "how to create resume online",
    },
    {
      path: "/tips-for-writing-a-cover-letter",
      title: "Tips for Writing a Cover Letter",
      src: "https://img.freepik.com/free-photo/close-up-female-typing-laptop_23-2148889241.jpg",
      alt: "tips for writing cover letter",
    },
    {
      path: "/why-soft-skills-matter",
      title: "Why Soft Skills Matter in Your Resume",
      src: "https://resumeera.xyz/static/media/soft_skill_image.99deb76d8f4fd0d357ae.jpg",
      alt: "Why Soft Skills Matter in Your Resume",
    },
    {
      path: "/top-resume-templates-for-2024",
      title: "Top Resume Templates for 2024",
      src: Top_Resume_Templates_for_2024,
      alt: "Top Resume Templates for 2024",
    },
    {
      path: "/common-mistakes-to-avoid-on-your-resume",
      title: "Common Mistakes to Avoid on Your Resume",
      src: "https://img.freepik.com/free-photo/smiling-business-woman-working-laptop-office_23-2148880288.jpg",
      alt: "Common resume mistakes",
    },
    {
      path: "/how-to-choose-the-right-resume-template",
      title: "How to Choose the Right Resume Template",
      src: "https://resumeera.xyz/static/media/choose_temp.050099d5e7367c2b7c47.jpg",
      alt: "Choosing the right resume template",
    },
    {
      path: "/creating-a-resume-for-your-first-job",
      title: "Creating a Resume for Your First Job",
      src: "https://resumeera.xyz/static/media/job_resume.9b3fb1d529d4360da89a.jpg",
      alt: "Resume for first job",
    },
    {
      path: "/how-to-highlight-achievements-in-a-resume",
      title: "How to Highlight Achievements in a Resume",
      src: "https://resumeera.xyz/static/media/highlight_image.deb2ff56bdcf6a809071.jpg",
      alt: "Highlight achievements in resume",
    },
    {
      path: "/resume-tips-for-experienced-professionals",
      title: "Resume Tips for Experienced Professionals",
      src: "https://img.freepik.com/free-photo/smiling-business-woman-working-laptop-office_23-2148880288.jpg",
      alt: "Tips for experienced professionals",
    },
    {
      path: "/crafting-a-modern-resume",
      title: "Crafting a Modern Resume",
      src: Crafting_Modern_Resume,
      alt: "Crafting a modern resume",
    },
    {
      path: "/tip_for_interview",
      title: "Tip For Interview",
      src: "https://resumeera.xyz/static/media/tip_for_interview.9109e4f006a1c28b0414.jpeg",
      alt: "Interview tips",
    },
    {
      path: "/how-to-format-a-resume-correctly",
      title: "How to Format a Resume Correctly",
      src: How_to_Format_a_Resume_Correctly,
      alt: "Correct resume formatting",
    },
    {
      path: "/what-employers-look-for-in-a-resume",
      title: "What Employers Look for in a Resume",
      src: What_Employers_Look_for_in_a_Resume,
      alt: "Employer expectations for resume",
    },
    {
      path: "/how-to-use-keywords-in-a-resume",
      title: "How to Use Keywords in a Resume",
      src: "https://img.freepik.com/free-photo/close-up-hand-writing-laptop_23-2148902636.jpg",
      alt: "Using keywords in resume",
    },
    {
      path: "/improving-your-resume-with-action-verbs",
      title: "Improving Your Resume with Action Verbs",
      src: Improving_Your_Resume_with_Action_Verbs,
      alt: "Using action verbs in resume",
    },
    {
      path: "/how-to-create-a-resume-for-international-jobs",
      title: "How to Create a Resume for International Jobs",
      src: Resume_for_International_Jobs,
      alt: "Resume for international jobs",
    },
    {
      path: "/resume-vs-cv-what-you-need-to-know",
      title: "Resume vs. CV: What You Need to Know",
      src: "https://img.freepik.com/free-photo/woman-writing-resume_23-2148998403.jpg",
      alt: "Difference between resume and CV",
    },
    {
      path: "/how-to-showcase-your-education-in-a-resume",
      title: "How to Showcase Your Education in a Resume",
      src: How_to_Showcase_Your_Education_in_a_Resume,
      alt: "Showcasing education in resume",
    },
    {
      path: "/creating-a-resume-with-no-experience",
      title: "Creating a Resume with No Experience",
      src: "https://img.freepik.com/free-photo/student-studying-laptop_23-2148998405.jpg",
      alt: "Resume with no experience",
    },
    {
      path: "/how-to-write-a-resume-for-career-change",
      title: "How to Write a Resume for Career Change",
      src: "https://img.freepik.com/free-photo/female-working-resume-template_23-2148998412.jpg",
      alt: "Resume for career change",
    },
    {
      path: "/resume-writing-tips-for-remote-jobs",
      title: "Resume Writing Tips for Remote Jobs",
      src: "https://img.freepik.com/free-photo/person-using-laptop_23-2149034987.jpg",
      alt: "Remote job resume tips",
    },
    {
      path: "/resume-tip-component",
      title:
        "Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?...with ResumeEra",
      src: "https://img.freepik.com/free-photo/business-meeting-collaboration_23-2148899008.jpg",
      alt: "Resume tips",
    },
    {
      path: "/xyz-formula-resume",
      title:
        "XYZ Formula: A Simple Approach to Showcasing Your Achievements in Your Resume",
      src: xyz_formula,
      alt: "XYZ formula for resume",
    },
    {
      path: "/resume_component",
      title:
        "Create a Professional Resume with Free Templates and Showcase Your Skills",
      src: "https://img.freepik.com/free-photo/businessman-preparing-resume_23-2149050332.jpg",
      alt: "Professional resume templates",
    },
    {
      path: "/Things_To_Remove_From_Your_Cv",
      title: "Things to Remove from Your CV - Resume Tips: ResumeEra",
      src: "https://img.freepik.com/free-photo/human-resources-interview_23-2149050143.jpg",
      alt: "Things to remove from CV",
    },
    {
      path: "/Tip_for_Interview",
      title: "Tip for Interview: ResumeEra",
      src: "https://resumeera.xyz/static/media/tip_for_interview.9109e4f006a1c28b0414.jpeg",
      alt: "Interview tips by ResumeEra",
    },
    {
      path: "/AnupamKher_resume",
      title: "Anupam Kher Resume with ResumeEra",
      src: "https://img.freepik.com/free-photo/actor-anupam-kher-speaking-microphone_23-2148998417.jpg",
      alt: "Anupam Kher Resume",
    },
    {
      path: "/free_resumesites_component",
      title: "What Resume Site is Actually Free",
      src: "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp",
      alt: "Free resume sites",
    },
    {
      path: "/tailor-resume-job-description-chatgpt",
      title:
        "ResumeEra: How to Tailor Your Resume to a Job Description with ChatGPT",
      src: "https://img.freepik.com/free-photo/man-using-laptop_23-2149011460.jpg",
      alt: "Tailoring resume with ChatGPT",
    },
    {
      path: "/free-resume-builder",
      title:
        "Online Resume Maker Free PDF | ResumeEra - Create Free Resumes for Freshers",
      src: "https://img.freepik.com/free-photo/student-using-free-resume-builder_23-2149122257.jpg",
      alt: "Free online resume maker",
    },
    {
      path: "/resume-trends-2024",
      title:
        "10 Free Resume Trends In 2024: What You Need To Know To Stand Out",
      src: "https://resumeera.xyz/static/media/Stand_Out.abcb740fe3c10ba62b11.jpeg",
      alt: "2024 Resume Trends",
    },
    {
      path: "/remote-work-experience",
      title: "Remote Work Experience | Customized Resumes for Each Application",
      src: "https://img.freepik.com/free-photo/person-working-remote-resume_23-2149050343.jpg",
      alt: "Remote work experience resume",
    },
    {
      path: "/how-to-write-a-resume-in-7-easy-steps",
      title: "How To Write A Resume In 7 Easy Steps",
      src: "https://img.freepik.com/free-photo/easy-resume-steps_23-2148998418.jpg",
      alt: "Resume writing steps",
    },
    {
      path: "/Dont_Copy_Paste_On_Your_Cv",
      title: "CV Writing Tips: क्या आप भी कॉपी-पेस्ट कर बनाते हैं सीवी?",
      src: "https://resumeera.xyz/static/media/Proofread_Edit_Thoroughly.39720e0319743c16a794.jpeg",
      alt: "Dont Copy Past On Your Cv",
    },
    {
      path: "/how-to-write-a-cover-letter-guide-2024",
      title: "How to Write a Cover Letter [Full Guide & Examples for 2024]",
      src: "https://resumeera.xyz/static/media/Proofread_Edit_Thoroughly.39720e0319743c16a794.jpeg",
      alt: "Dont Copy Past On Your Cv",
    },
    {
      path: "/how-to-make-a-resume-2024",
      title: "How to Make a Resume in 2024 | Beginner Guide",
      src: How_to_Make_a_Resume_2024,
      alt: "Dont Copy Past On Your Cv",
    },
  ];

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Important Post to Gain Knowledge</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      />
      <div
        // className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredPosts.slice(0, visiblePosts).map((post, index) => (
          <React.Fragment key={index}>
            <div
              // className="cardss"
              style={{
                width: "100%",
                height: "380px",
                overflow: "hidden",
              }}
            >
              <div className="card-body" style={{}}>
                <a
                  href={post.path}
                  // className="btn btn-primary"
                  style={{ 
                    textAlign: "center", // Ensures proper alignment for inner elements
                    display: "block", // Makes the link behave like a block element
                    padding:'0px',
                    height:'350px'
                  }}
                ><figure>
                  
                </figure>
                  <img
                    style={{
                      marginTop:'1px',
                      paddingTop:'0px',
                      width: "100%",
                      height: "300px",
                      // border:'1px solid green',
                      borderRadius:'10px'
                      
                    }}
                    src={post.src}
                    alt={post.alt}
                  />
                  <h3
                    className="card-title"
                    style={{
                      color: "black",
                      fontSize: "1rem",
                      // margin: "10px 0 0", // Adds spacing above the title
                    }}
                  >
                    {post.title}
                  </h3>
                </a>
              </div>
            </div>

            {/* Insert an ad after every 3 cards */}
            {(index + 1) % 3 === 0 && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <GoogleAd />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {visiblePosts < filteredPosts.length && (
        <button
          onClick={handleSeeMore}
          className="btn btn-secondary"
          style={{
            margin: "20px auto",
            display: "block",
            padding: "10px 20px",
            fontSize: "1.2rem",
            backgroundColor: "green",
          }}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default ImportantPostLink;
