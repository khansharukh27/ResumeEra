import React, { useState } from "react";
import GoogleAd from "./adFolder/GoogleAd";
import "../css/ImportantPostLink.css";
import How_to_Make_a_Resume_2024 from "../../src/image/How to Make a Resume 2024.jpg";
import Crafting_Modern_Resume from "../image/image_for_link/Crafting a Modern Resume.jpg";
import Top_Resume_Templates_for_2024 from '../image/image_for_link/Top Resume Templates for 2024.jpg'
import What_Employers_Look_for_in_a_Resume from '../image/image_for_link/What Employers Look for in a Resume.jpg'
import How_to_Format_a_Resume_Correctly from '../image/image_for_link/How to Format a Resume Correctly.jpg'
// import Improving_Your_Resume_with_Action_Verbs from '../image/image_for_link/Improving Your Resume with Action Verbs.jpg'
import xyz_formula from '../image/image_for_link/XYZ Formula.jpg'
import Resume_for_International_Jobs from '../image/image_for_link/Resume for International Jobs.jpg'
import How_to_Showcase_Your_Education_in_a_Resume from '../image/image_for_link/Showcase Your Education in a Resume.jpg'
import Crafting_Powerful_Cybersecurity_Resume from '../image/image_for_link/Crafting Powerful Cybersecurity Resume.jpg'
import Tips_to_Get_Your_CV_Noticed from '../image/image_for_link/Tips to Get Your CV Noticed.jpg'
import Difference_Between_CV_and_Resume from '../image/image_for_link/Difference Between CV and Resume.jpg'
import freeResumeBuilders from '../image/image_for_link/freeResumeBuilders.jpeg.jpg'
import ATS_Formatting_Mistakes from '../image/image_for_link/ATS Formatting Mistakes.jpg'
import It_Cover_Letter from '../image/image_for_link/IT Cover Letter Tips.jpg'
import Management_Cover_Letter_Example from '../image/image_for_link/Management Cover Letter Example.jpg'
import Mechanical_Engineering_Cover_Letter from '../image/image_for_link/Mechanical Engineering Cover Letter Example.jpg'
import action_verbs_resume_intro from '../image/image_for_link/action-verbs-resume-intro.jpg'
import Administrative_Assistant_Cover_Letter from '../image/image_for_link/Administrative Assistant Cover Letter.jpg'
import Lawyer_Cover_Letter_Example from '../image/image_for_link/Lawyer Cover Letter Example.jpg'
import Resume_Formatting_Kya_Hai from '../image/image_for_link/Resume Formatting Kya Hai.jpg'
import Fresher_Resume_Formatting from '../image/image_for_link/Fresher Ke Liye Resume Formatting Kaise Karein.webp'
import Resume_Formatting_Tips_Entry_Level from '../image/image_for_link/Resume Formatting Tips for Entry-Level Jobs.jpg'
import Resume_Formatting_Steps from '../image/image_for_link/Resume Formatting Tips for Entry-Level Jobs.jpg'
import ATS_Friendly_Resume_Format_for_Beginners from '../image/image_for_link/ATS-Friendly Resume Format for Beginners.jpg'
import Simple_Resume_Formatting_Best_Practices from '../image/image_for_link/Simple Resume Formatting Best Practices.webp'
import Fresher_Resume_Mistakes from '../image/image_for_link/Fresher Resume Mistakes.jpg'
import College_Graduates_Perfect_Resumez_Formatting from '../image/image_for_link/College Graduates Perfect Resume Formatting.jpg'
import Resume_Formatting_First_Time_Job_Seekers from '../image/image_for_link/Resume Formatting Tips for First-Time Job Seekers.jpg'
import Fresher_Resume_Font_Aur_Layout from '../image/image_for_link/Fresher Resume Font Aur Layout.jpg'
import Professional_Resume_Format_for_Experienced_Candidates from '../image/image_for_link/Professional Resume Format for Experienced Candidates.jpg'
import Executive_Level_Resume_Formatting from '../image/image_for_link/Executive-Level Resume Formatting.jpg'
import Career_Change_Resume_Formatting from '../image/image_for_link/Career Change ke Liye Resume Formatting Kaise Karein.jpg'
import Chronological_Resume_Formatting from '../image/image_for_link/Experienced Candidates Ke Liye Chronological Resume Formatting Guide.webp'
import Resume_Leadership_Jobs from '../image/image_for_link/Resume Leadership Jobs.webp'
import Highlight_Achievements_Resume_Formatting from '../image/image_for_link/Highlight Achievements Resume Formatting.jpg'
import Multi_Page_Resume_Formatting from '../image/image_for_link/Multi-Page Resume Formatting.jpg'
import Job_Description from '../image/image_for_link/How to Tailor Your Resume to Match the Job Description Perfectly.jpg'
import Functional_vs_Chronological_Resume_Formatting from '../image/image_for_link/Functional vs Chronological Resume Formatting.jpg'
import It_Profetional_image from '../image/image_for_link/IT Professionals Ke Liye Resume Formatting Tipss.png'
import HealthCare_images from '../image/image_for_link/Healthcare Industry Ke Liye Resume Formatting Guide.jpg'
import Creative_Designer from '../image/image_for_link/Creative and Designers Resume Formatting Tips.jpg'
import Sales_Marketing from '../image/image_for_link/resume formatting for sales and marketing professionals.jpg'
import teachers_Professors from '../image/image_for_link/Professional Resume Formatting for Teachers and Professors.jpg'
import Resume_Formating_Engineering_Students from '../image/image_for_link/Resume Formatting Tips for Engineering Students.jpg'
import resume_formate_freelancers_remote_workers from '../image/image_for_link/Resume Formatting for Freelancers and Remote Workers.jpg'
import Government_Job_Applications from '../image/image_for_link/Ideal Resume Formatting Guide for Government Job Applications.jpg'
import Hospitality_tourism from '../image/image_for_link/Resume Formatting Tips for Hospitality and Tourism Professionals.jpg'
import Resume_Formatting_Real_Estate_Agents from '../image/image_for_link/Resume Formatting Tips for Real Estate Agents.jpg'
import Free_Resume_Formatting_Tools_for_2025 from '../image/image_for_link/Best Free Resume Formatting Tools for 2024.jpg'
import Resume_Writing_Tips_for_Remote_Jobs from '../image/image_for_link/Resume Writing Tips for Remote Jobs.jpg'
import blank_page from '../image/image_for_link/blank page.jpg'
import Infographic_Resume from '../image/image_for_link/Infographic Resume Formatting Tools_ A Creative Approach.jpg'
import Resume_Formatting_Mistakes from '../image/image_for_link/20 Resume Formatting Mistakes You Should Avoid.jpg'
import Resume_Formatting_Errors from '../image/image_for_link/Top 10 Resume Formatting Errors and How to Fix Them-2025.png'
import ATS_Unfriendly_Formatting from '../image/image_for_link/ATS-Unfriendly Formatting.jpeg'
import Avoid_OvwerDesign_Resume from '../image/image_for_link/overDesign image.jpeg'
import Font_and_Size from '../image/image_for_link/Font and Size Selection Mistakes.jpeg'
import Reflect_Career_Breaks from '../image/image_for_link/Reflect Career Breaks.jpeg'
import Grammar_mistake from '../image/image_for_link/Grammar Mistakes.jpeg'
import common_layout_mistake from '../image/image_for_link/Common Layout Mistakes.jpeg'
import resum_Download_pdf from '../image/image_for_link/resume format PDF Download.jpeg'
import pdf_vs_word from '../image/image_for_link/PDF vs. Word.jpg'
import Chronological_vs_functional from '../image/image_for_link/Chronological vs. Functional Resume.jpeg'
import Infographics_vs_traditional from '../image/image_for_link/infographic vs traditional resume.jpeg'
import online_vs_manual from '../image/image_for_link/Online Resume Builder vs Manual Resume.jpeg'
import onepage_vs_multipage from '../image/image_for_link/one page vs multi page resume.jpeg'
import modern_vs_tradinal from '../image/image_for_link/modern vs tradinal image.jpeg'
import ats_vs_creative from '../image/image_for_link/ats vs creative resume.jpeg'
import minimalistvsgraphics from '../image/image_for_link/minimalist vs graphics resume.jpeg'
import summaryvsobjective from '../image/image_for_link/Objective Statement Vs Summary Statement.jpeg'
import resumeformatintrend from '../image/image_for_link/2025 Resume Formatting Trends.jpeg'
import resumeformattingaidriver from '../image/motivational_image/resume formatting ai drivern.jpg'
import Presenting_Personal_Branding from '../image/image_for_link/Presenting Personal Branding.jpeg'
import Matches_Your_LinkedIn_Profile from '../image/image_for_link/Matches Your LinkedIn Profile.jpeg'
import modern_resume from '../image/image_for_link/thoko.jpeg'
import Data_Driven_Resume from '../image/image_for_link/Data-Driven Resume.jpeg'
import SocialMediaInfluencer from '../image/image_for_link/SocialMediaInfluencer.jpeg'
import CreateJobSpecificResume from '../image/image_for_link/Create Job-Specific Resume.webp'
import FreelancersPortfolioResumeFormatting from '../image/image_for_link/FreelancersPortfolio Resume Formatting.jpeg'
import RemoteResumeFormatting from '../image/image_for_link/Remote Resume Formatting.jpeg'
import PersonalizedResumeFormatting from '../image/image_for_link/Personalized Resume Formatting International.jpeg'
import ResumeFormatting from '../image/image_for_link/Resume Formatting Your Ultimate.png'
import DownloadtheBestResumeFormatPDF from '../image/image_for_link/Download the Best Resume Format PDF.webp'
import topResumeFormatepdfforjob from '../image/image_for_link/Top Resume Format PDF for Job Seekers.jpeg'
import EffortlessResumeCreations from '../image/image_for_link/Effortless Resume Creation.jpeg'
import ResumeFormatepdf from '../image/image_for_link/Resume Format PDF Guides.jpeg'
import GetHiredFasters from "../image/image_for_link/Get Hired Faster.jpeg";
import rightResumeFormat from '../image/image_for_link/Right Resume Format PDF.jpeg'
import FreeResumeFormats from '../image/image_for_link/FreeResumeFormatPDF.jpeg'
import CreateYourDreamJob from '../image/image_for_link/Create Your Dream Job Resume.jpeg'
import StepbyStepResumeCreations from "../image/image_for_link/Step-by-Step Resume Creation.jpeg";
import FreeResumeFormate from '../image/image_for_link/Free Resume Format PDFs.jpeg'
import ACompleteGuide from '../image/image_for_link/A Complete Guide to Resume Format PDF.jpeg'
import DownloadProfessional from '../image/image_for_link/DownloadaProfessionalResumeFormatPDF.jpeg'
import ResumeGuides from '../image/image_for_link/Resume Format PDF Guides.jpeg'
import TheUltimateCollectionofResumeFormatPDF from '../image/image_for_link/The Ultimate Collection of Resume Format PDF.jpeg'
import MyTop10FreeResumeFormatPD from '../image/image_for_link/My Top 10 Free Resume Format PDF.jpeg'
import DownloadYourFreeResumeFormat from '../image/image_for_link/Download Your Free Resume Format.jpeg'
import FindtheRightResumeFormat from '../image/image_for_link/Find the Right Resume Format.jpeg'
import LookingforaResumeFormat from '../image/image_for_link/Looking for a Resume Format.jpeg'
import DownloadResumeFormatPDF from '../image/image_for_link/Download Resume Format PDF.jpeg'
import Bestresumeformat from '../image/image_for_link/Best Resume Format PDF for.jpeg'
import HowtoCreateaWinning from '../image/image_for_link/How to Create a Winning Resume Using.jpeg'
import easytouse from '../image/image_for_link/easy to use.jpeg'
import HighImpactResumes from '../image/image_for_link/High-Impact Resumes.jpeg'
import freeresumeformat from '../image/image_for_link/Free Resume Format PDF Templates.jpeg'
import HowtoCreateaStunning from '../image/image_for_link/How to Create a Stunning Resume.jpeg'
import CraftthePerfectResume from '../image/image_for_link/Craft the Perfect Resume.jpeg'
import freeresumeform from '../image/image_for_link/Free Resume Format PDF Templates.jpeg'
import resumeformate from '../image/image_for_link/Resume Format.jpeg'
import resumeformatpdf from '../image/image_for_link/Resume Format PDF Guides.jpeg'
import resumeformatting from '../image/image_for_link/Resume Formatting Kya Hai.jpg'
import professionalresumeformat from '../image/image_for_link/Professional Resume Format PDF.jpeg'
import crafttheperfectresume from '../image/image_for_link/Craft the Perfect Resume pdf.jpeg'
import YourStepbyStepGuidetoaProfessional from '../image/image_for_link/Your Step-by-Step Guide to a Professional.jpeg'
import CreateresumeThatGets from '../image/image_for_link/Create a Resume That Gets Result.jpeg'
import TopResumeFormatPDFforJobSeeker from '../image/image_for_link/Top Resume Format PDF for Job Seeker.jpeg'
import Optimizeyourresume from '../image/image_for_link/Optimize Your Resume with the Best Resume.jpeg'
import gettherightresume from '../image/image_for_link/Get the Right Resume Format PDF.jpeg'
import TheBestResumeFormat from "../image/image_for_link/The Best Resume Format PDF.jpeg";
import Downloadthetop from '../image/image_for_link/Download Resume Format PDF.jpeg'
import FreeResumeFormat from "../image/image_for_link/Free Resume Format PDF for Freshers.jpeg";
import Theultimateresume from '../image/image_for_link/Free Resume Format PDF for Fresher.jpeg'
import HowtoPicktheRightResume from '../image/image_for_link/How to Pick the Right Resume Format.jpeg'
import GetHiredwiththeBestResume from '../image/image_for_link/Get Hired with the Best Resume.jpeg'
import FreeResumeFormatss from "../image/image_for_link/Free Resume Format PDF Templates.jpeg";
import TopResumeFormat from '../image/image_for_link/Top Resume Format PDF Downloads for a Perfect.jpeg'
import BestResumeFormat from '../image/image_for_link/Best Resume Format PDFfor.jpeg'
import ResumeFormatPDF from '../image/image_for_link/Resume Format PDF for Freshers.jpeg'
import SimpleYetProfessional from "../image/image_for_link/Simple Yet Professional Resume Format.jpeg";
import UnlockYourCareer from '../image/image_for_link/Unlock Your Career Potential.jpeg'
import FreeDownloadableResume from '../image/image_for_link/Free Downloadable Resume Format PDFs.jpeg'
import HowtoBuildanImpactful from '../image/image_for_link/How to Build an Impactful Resume.jpeg'
import ResumeFormatPDFs from '../image/image_for_link/Resume Format PDFs.jpeg'
import GetNoticedwith from "../image/image_for_link/Get Noticed with the Best Resume.jpeg";
import GetNoticed from '../image/image_for_link/Get Noticed with a Professional Resume Format PDF.jpeg'
import SimpleResumeFormatPDF from '../image/image_for_link/Format PDFJob Seekers 2025.jpeg'
import TheCompleteGuide  from '../image/image_for_link/The Complete Guide to Choosing.jpeg'
import PerfectforCareerSuccess from '../image/image_for_link/Perfect for Career Success.jpeg'
import GetYouenergy from '../image/image_for_link/Get You Energy in Interview.jpeg'
import ResumeMistakess from '../image/image_for_link/Resume Mistakes You Need to Avoid in 2025.jpg'
import JobApplications from '../image/image_for_link/Job Applications Resume Format PDF Download now  2025.jpg'
import HowToUseResume from '../image/image_for_link/How to Use Resume Format PDFs 2025 Winning Job Application.jpg'
import PerfectYourResume from '../image/image_for_link/Perfect Your Resume with the Best Resume Format PDFs.jpg'
import BestResumeFormats from '../image/image_for_link/Best Resume Format PDF for Immediate Job Offers Copy.jpg'
import FreeTopResume from '../image/image_for_link/free Top Resume Format PDF Successfull career -2025 Download now .jpg'
import TopResumeFormatPDFforCareerSuc from '../image/image_for_link/free Top Resume Format PDF Successfull career -2025 Download now .jpg'
import GetHiredSoon from '../image/image_for_link/Download Your Resume Format PDF Today Get Hired Soon.jpg'
import BuildYourBestCV from '../image/image_for_link/Build Your Best CV Now.jpg'
import FresherExpertProfessional from '../image/image_for_link/Get Free Resume Format Download Now Fresher & Expert Professional.jpg'
import Howtooptimise from '../image/image_for_link/How to Optimize Your Killer Resume Format PDF in 2025.jpg'
import Howtohandle from '../image/image_for_link/How to handle recruiters.jpg'
import SimpleResumeFormatWord from '../image/technical_Image/Basic_Ats_Resume_Template.png'
import pdfImage from '../image/technical_Image/Creative-ATS-Resume-Template.png'
import ResumeFormatPDFFree from'../image/Fresher resume image folder/a-man-that-take-a-resume-in-hand-and-around-him-chair-that-take-.svg'
import pdfresumeformat from '../image/image_for_link/PDF Resume Format Free Download.jpg'
 
import { Link } from "react-router-dom";
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
      src: action_verbs_resume_intro,
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
      src:{Resume_Writing_Tips_for_Remote_Jobs},
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
        "XYZ Formula: A Game-Changer for Your Resume",
      src:"https://i.postimg.cc/NGZ0P9FL/xyz-formula-image.jpg",
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
    {
      path: "/cybersecurity-resume-tips",
      title: "Crafting a Powerful Cybersecurity Resume",
      src: Crafting_Powerful_Cybersecurity_Resume,
      alt: "Cybersecurity Resume",
    },
    {
      path: "/11-essential-cv-tips-2024",
      title: "11 Essential Tips to Get Your CV Noticed in 2024",
      src: Tips_to_Get_Your_CV_Noticed,
      alt: "11 Essential Tips to Get Your CV Noticed in 2024",
    },
    {
      path: "/difference-between-cv-and-resume",
      title: "Difference Between CV and Resume | Comprehensive Guide",
      src: Difference_Between_CV_and_Resume,
      alt: "Difference Between CV and Resume ",
    },
    {
      path: "/create-your-perfect-resume-for-free",
      title: "Create Your Perfect Resume for Free || Free Resume Builder",
      src: freeResumeBuilders,
      alt: "Create Your Perfect Resume for Free || Free Resume Builder",
    },
    {
      path: "/11-ats-formatting-mistakes-that-can-cost-you-a-job",
      title: "11 ATS Formatting Mistakes That Can Cost You a Job",
      src: ATS_Formatting_Mistakes,
      alt: "Create Your Perfect Resume for Free || Free Resume Builder",
    },
    {
      path: "/it-cover-letter-guide-2024",
      title: "11 ATS Formatting Mistakes That Can Cost You a Job",
      src: It_Cover_Letter,
      alt: "IT Cover Letter Tips & Templates",
    },
    {
      path: "/management-cover-letter-example",
      title: "Management Cover Letter Example (With Full Guide for 2024)",
      src: Management_Cover_Letter_Example,
      alt: "Management Cover Letter Example",
    },
    {
      path: "/mechanical-engineering-cover-letter-example/",
      title: "Mechanical Engineering Cover Letter Example (With Templates & Tips for 2024)",
      src: Mechanical_Engineering_Cover_Letter,
      alt: "Mechanical Engineering Cover Letter Example (With Templates & Tips for 2024)",
    },
    {
      path: "/administrative-assistant-cover-letter-example",
      title: "Administrative Assistant Cover Letter Example (With Templates & Tips for 2024)",
      src: Administrative_Assistant_Cover_Letter,
      alt: "Administrative Assistant Cover Letter",
    },
    {
      path: "/lawyer-cover-letter-example",
      title: "Lawyer Cover Letter Example (w/ Templates & Tips for 2024)",
      src: Lawyer_Cover_Letter_Example,
      alt: "Lawyer Cover Letter Example",
    },
    {
      path: "/guide/resume-formatting",
      title: "Resume Formatting Kya Hai? A Complete Beginner's Guide",
      src: Resume_Formatting_Kya_Hai,
      alt: "Resume Formatting Kya Hai",
    },
    {
      path: "/fresher-resume-formatting",
      title: "Fresher Ke Liye Resume Formatting Kaise Karein",
      src: Fresher_Resume_Formatting,
      alt: "Fresher Ke Liye Resume Formatting Kaise Karein",
    },
    {
      path: "/resume-formatting-entry-level",
      title: "Resume Formatting Tips for Entry-Level Jobs",
      src: Resume_Formatting_Tips_Entry_Level,
      alt: "Resume Formatting Tips for Entry-Level Jobs",
    },
    {
      path: "/Resume_Formatting_Steps_for_Freshers",
      title: "Resume Formatting Steps for Freshers | ResumeEra",
      src: Resume_Formatting_Steps,
      alt: "Resume Formatting Steps for Freshers",
    },
    {
      path: "/ats-friendly-resume-format-for-beginners",
      title: "ATS-Friendly Resume Format for Beginners || ResumeEra",
      src: ATS_Friendly_Resume_Format_for_Beginners,
      alt: "ATS-Friendly Resume Format for Beginners",
    },
    {
      path: "/simple-resume-formatting-best-practices",
      title: "Simple Resume Formatting Best Practices | ResumeEra",
      src: Simple_Resume_Formatting_Best_Practices,
      alt: "Simple Resume Formatting Best Practices",
    },
    {
      path: "/fresher-resume-mistakes-you-should-avoid",
      title: "Fresher Resume Mistakes You Should Avoid | ResumeEra",
      src: Fresher_Resume_Mistakes,
      alt: "Fresher Resume Mistakes You Should Avoid",
    },
    {
      path: "/college-graduates-perfect-resume-formatting-tips",
      title: "College Graduates Ke Liye Perfect Resume Formatting Tips | ResumeEra",
      src: College_Graduates_Perfect_Resumez_Formatting,
      alt: "College Graduates Ke Liye Perfect Resume Formatting Tips",
    },
    {
      path: "/Resume-Formatting-First-Time-Job-Seekers",
      title: "Resume Formatting Tips for First-Time Job Seekers | ResumeEra",
      src: Resume_Formatting_First_Time_Job_Seekers,
      alt: "Resume Formatting Tips for First-Time Job Seekers",
    },
    {
      path: "/Fresher-Resume-Formatting-Font-Layout",
      title: "Fresher Resume Formatting Ke Liye Best Font Aur Layout | ResumeEra",
      src: Fresher_Resume_Font_Aur_Layout,
      alt: "Fresher Resume Formatting Ke Liye Best Font Aur Layout",
    },
    {
      path: "/Professional-Resume-Format-Experienced",
      title: "Professional Resume Format for Experienced Candidates",
      src: Professional_Resume_Format_for_Experienced_Candidates,
      alt: "Professional Resume Format for Experienced Candidates",
    },
    {
      path: " /executive-resume-formatting-tips",
      title: "Executive-Level Resume Formatting: Tips for Senior Professionals",
      src: Executive_Level_Resume_Formatting,
      alt: "Executive-Level Resume Formatting: Tips for Senior Professionals",
    },
    {
      path: " /career-change-resume-formatting",
      title: "Career Change ke Liye Resume Formatting Kaise Karein",
      src: Career_Change_Resume_Formatting,
      alt: "Career Change ke Liye Resume Formatting Kaise Karein",
    },
    {
      path: " /chronological-resume-formatting-experienced-candidates",
      title: "Experienced Candidates Ke Liye Chronological Resume Formatting",
      src:Chronological_Resume_Formatting,
      alt: "Experienced Candidates Ke Liye Chronological Resume Formatting",
    },
    {
      path: " /how-to-format-a-resume-for-leadership-jobs",
      title: "How to Format a Resume for Leadership Jobs",
      src:Resume_Leadership_Jobs,
      alt: "How to Format a Resume for Leadership Jobs",
    },
    {
      path: " /how-to-highlight-achievements-in-resume-formatting",
      title: "How to Highlight Achievements in Resume Formatting",
      src:Highlight_Achievements_Resume_Formatting,
      alt: "How to Highlight Achievements in Resume Formatting",
    },
    {
      path: " /multi-page-resume-formatting",
      title: "Multi-Page Resume Formatting - Resumeera.xyz",
      src:Multi_Page_Resume_Formatting,
      alt: "Multi-Page Resume Formatting",
    },
    {
      path: " /tailor-your-resume",
      title: "How to Tailor Your Resume to Match the Job Description Perfectly",
      src:Job_Description,
      alt: "How to Tailor Your Resume to Match the Job Description Perfectly",
    },
    {
      path: " /Functional_vs_Chronological_Resume_Formatting",
      title: "Functional vs Chronological Resume Formatting for Experienced Professionals",
      src:Functional_vs_Chronological_Resume_Formatting,
      alt: "Functional vs Chronological Resume Formatting",
    },
    {
      path: " /it-resume-formatting-tips",
      title: "IT Professionals Ke Liye Resume Formatting Tips",
      src:It_Profetional_image,
      alt: "IT Professionals Ke Liye Resume Formatting Tips",
    },
    {
      path: "/healthcare-industry-ke-liye-resume-formatting-guide",
      title: "Healthcare Industry Ke Liye Resume Formatting Guide-ResumeEra",
      src:HealthCare_images,
      alt: "Healthcare Industry Ke Liye Resume Formatting Guide-ResumeEra",
    },
    {
      path: "/creative-and-designer-resume-tips",
      title: "Creative and Designer Resume Tips",
      src:Creative_Designer,
      alt: "Creative and Designer Resume Tips",
    },
    {
      path: "/best-resume-formatting-sales-marketing",
      title: "Best Resume Formatting for Sales and Marketing Professionals",
      src:Sales_Marketing,
      alt: "Best Resume Formatting for Sales and Marketing Professionals",
    },
    {
      path: "/resume_formatting_for_teachersAndProfessors",
      title: "Professional Resume Formatting for Teachers and Professors",
      src:teachers_Professors,
      alt: "Professional Resume Formatting for Teachers and Professors",
    },
    {
      path: "/resume-formatting-engineerig-students",
      title: "Resume Formatting Tips for Engineering Students || ResumeEra",
      src:Resume_Formating_Engineering_Students,
      alt: "Resume Formatting Tips for Engineering Students || ResumeEra",
    },
    {
      path: "/resume-formatting-for-freelancers-and-remote-workers",
      title: "Resume Formatting for Freelancers and Remote Workers || ResumeEra",
      src:resume_formate_freelancers_remote_workers,
      alt: "Resume Formatting for Freelancers and Remote Workers || ResumeEra",
    },
    {
      path: "/government-job-resume-guide",
      title: "Ideal Resume Formatting Guide for Government Job Applications || ResumeEra",
      src:Government_Job_Applications,
      alt: "Ideal Resume Formatting Guide for Government Job Applications || ResumeEra",
    },
    {
      path: "/hospitality-tourism-resume-tips",
      title: "Resume Tips for Hospitality and Tourism Professionals || ResumeEra",
      src:Hospitality_tourism,
      alt: "Resume Tips for Hospitality and Tourism Professionals || ResumeEra",
    },
    {
      path: "/Best-Resume-Formatting-Tips-for-Real-Estate-Agents",
      title: "Best Resume Formatting Tips for Real Estate Agents || ResumeEra",
      src:Resume_Formatting_Real_Estate_Agents,
      alt: "Best Resume Formatting Tips for Real Estate Agents || ResumeEra",
    },
    {
      path: "/best-free-resume-formatting-tools-for-2025",
      title: "Best Free Resume Formatting Tools for 2025 || ResumeEra",
      src:Free_Resume_Formatting_Tools_for_2025,
      alt: "Best Free Resume Formatting Tools for 2025 || ResumeEra",
    },
    {
      path: "/best-free-resume-formatting-tools-for-2025",
      title: "8 Best Online Tools for Resume Formatting for 2025 || ResumeEra",
      src:blank_page,
      alt: "8 Best Online Tools for Resume Formatting for 2025 || ResumeEra",
    },
    {
      path: "/infographic-resume-formatting",
      title: "Infographic Resume Formatting Tools: A Creative Approach 2025 || ResumeEra",
      src: Infographic_Resume,
      alt: "Infographic Resume Formatting Tools: A Creative Approach 2025 || ResumeEra",
    },
    {
      path: "/20-Resume-Formatting-Mistakes-You-Should-Avoid",
      title: "20 Resume Formatting Mistakes You Should Avoid || ResumeEra",
      src: Resume_Formatting_Mistakes,
      alt: "20 Resume Formatting Mistakes You Should Avoid || ResumeEra",
    },
    {
      path: "/top-10-resume-formatting-errors",
      title: "Top 10 Resume Formatting Errors and How to Fix Them || ResumeEra",
      src: Resume_Formatting_Errors,
      alt: "Top 10 Resume Formatting Errors and How to Fix Them || ResumeEra",
    },
    {
      path: "/why-ats-unfriendly-formatting-can-lead-to-resume-rejection",
      title: "Why ATS-Unfriendly Formatting Can Lead to Resume Rejection | ResumeEra",
      src: ATS_Unfriendly_Formatting,
      alt: "ATS-Unfriendly Formatting",
    },
    {
      path: "/how-to-avoid-over-designing-your-resume-formatting",
      title: "How to Avoid Over-Designing Your Resume Formatting",
      src: Avoid_OvwerDesign_Resume,
      alt: "How to Avoid Over-Designing Your Resume Formatting ",
    },
    {
      path: "/font-and-size-mistakes",
      title: "Font and Size Selection Mistakes in Resume Formatting | ResumeEra",
      src:Font_and_Size,
      alt: "Font and Size Selection Mistakes in Resume Formatting | ResumeEra ",
    },
    {
      path: "/Resume_Formatting_Errors_That_Fail_to_Reflect_Career_Breaks",
      title: "Resume Formatting Errors That Fail to Reflect Career Breaks | ResumeEra",
      src: Reflect_Career_Breaks,
      alt: "Resume Formatting Errors That Fail to Reflect Career Breaks | ResumeEra ",
    },
    {
      path: "/how-to-hide-spelling-and-grammar-mistakes-through-formatting-a-resume",
      title: "How to Hide Spelling and Grammar Mistakes Through Formatting a Resume",
      src: Grammar_mistake,
      alt: "How to Hide Spelling and Grammar Mistakes Through Formatting a Resume ",
    },
    {
      path: "/common-layout-mistakes-that-make-your-resume-unprofessional",
      title: "Common Layout Mistakes That Make Your Resume Unprofessional",
      src: common_layout_mistake,
      alt: "Common Layout Mistakes That Make Your Resume Unprofessional",
    },
    {
      path: "/professional-resume-format-pdf",
      title: "Download Professional Resume Format PDF",
      src: resum_Download_pdf,
      alt: "Download Professional Resume Format PDF",
    },
    {
      path: "/pdf-vs-word-resume",
      title: "PDF vs. Word: Which Format is Best for Resume Formatting",
      src:pdf_vs_word ,
      alt: "PDF vs. Word: Which Format is Best for Resume Formatting",
    },
    {
      path: "/chronological-vs-functional-resume-formatting",
      title: "Chronological vs. Functional Resume Formatting: When and What to Choose",
      src:Chronological_vs_functional ,
      alt: "Chronological vs. Functional Resume Formatting: When and What to Choose",
    },
    {
      path: "/infographic-resume-vs-traditional-resume-formatting",
      title: "Infographic Resume vs. Traditional Resume Formatting: Pros and Cons | ResumeEra",
      src: Infographics_vs_traditional ,
      alt: "Infographic Resume vs. Traditional Resume Formatting: Pros and Cons ",
    },
    {
      path: "/online-resume-builder-vs-manual-resume-builder-formatting",
      title: "Online Resume Builder vs Manual Resume Formatting | ResumeEra",
      src: online_vs_manual,
      alt: "Online Resume Builder vs Manual Resume Formatting",
    },
    {
      path: "/one-vs-multi-page-resume",
      title: "/one-vs-multi-page-resume | ResumeEra",
      src: onepage_vs_multipage,
      alt: "/one-vs-multi-page-resume",
    },
    {
      path: "/Modern-vs-traditiona-resume-formatting",
      title: "Modern vs Traditional Resume Formatting | ResumeEra",
      src: modern_vs_tradinal,
      alt: "Modern vs Traditional Resume Formatting",
    },
    {
      path: "/ats-friendly-vs-creative-resume-format",
      title: "ATS-Friendly Resume Vs Creative Resume Formatting: What Employers Prefer | ResumeEra",
      src: ats_vs_creative,
      alt: "ATS-Friendly Resume Vs Creative Resume Formatting",
    },
    {
      path: "/minimalist-vs-graphic-formatting",
      title: "Minimalist Formatting Vs Graphic Formatting: What Employers Prefer | ResumeEra",
      src: minimalistvsgraphics,
      alt: "Minimalist Formatting Vs Graphic Formatting",
    },
    {
      path: "/objective-vs-summary-statement-the-right-way-to-format-your-resume",
      title: "Objective Statement vs Summary Statement: The Right Way to Format Your Resume | ResumeEra",
      src: summaryvsobjective,
      alt: "Objective Statement vs Summary Statement: The Right Way to Format Your Resume | ResumeEra",
    },
    {
      path: "/2025-resume-formatting-trends",
      title: "2025 Resume Formatting Trends You Need to Know | ResumeEra",
      src: resumeformatintrend,
      alt: "2025 Resume Formatting Trends You Need to Know | ResumeEra",
    },
    {
      path: "/resume-formattin-for-ai-driven-application-tracking-system",
      title: "Resume Formatting for AI-Driven Application Tracking Systems | ResumeEra",
      src: resumeformattingaidriver,
      alt: "Resume Formatting for AI-Driven Application Tracking Systems",
    },
    {
      path: "/how-to-present-personal-branding-through-resume-formatting",
      title: "How to Present Personal Branding Through Resume Formatting | ResumeEra",
      src: Presenting_Personal_Branding,
      alt: "How to Present Personal Branding Through Resume Formatting",
    },
    {
      path: "/how-to-create-resume-formatting-that-matches-your-linkedin-profile",
      title: "How to Create Resume Formatting That Matches Your LinkedIn Profile | ResumeEra",
      src: Matches_Your_LinkedIn_Profile,
      alt: "How to Create Resume Formatting That Matches Your LinkedIn Profile",
    },
    {
      path: "/modern-resume-formatting-with-interactive-elements ",
      title: "Modern Resume Formatting with Interactive Elements: The Ultimate Guide | ResumeEra",
      src: modern_resume,
      alt: "Modern Resume Formatting with Interactive Elemennt",
    },
    {
      path: "/data-driven-resume-formatting-for-analytical-jobs-formatting-for-analytical-jobs",
      title: "Data-Driven Resume formatting for Analytical Jobs | ResumeEra",
      src: Data_Driven_Resume,
      alt: "Data-Driven Resume formatting for Analytical Jobs",
    },
    {
      path: "/social-media-influencer-resume-formatting",
      title: "The Social Media Influencer's Resume formatting: Stand Out & Land Your Dream Brand Collaborations | ResumeEra",
      src: SocialMediaInfluencer,
      alt: "The Social Media Influencer's Resume formatting: Stand Out & Land Your Dream Brand Collaborations",
    },
    {
      path: "/job-specific-resume-formatting",
      title: "Job-Specific Resume Formatting: How to Tailor Your Resume for Success | ResumeEra",
      src: CreateJobSpecificResume,
      alt: "Job-Specific Resume Formatting: How to Tailor Your Resume for Success",
    },
    {
      path: "/freelancers-portfolio-resume-formatting-tips",
      title: "Freelancers' Portfolio Resume Formatting Tips | Stand Out and Attract Clients | ResumeEra",
      src: FreelancersPortfolioResumeFormatting,
      alt: "Freelancers' Portfolio Resume Formatting Tips",
    },
    {
      path: "/remote-resume-formatting-crafting-a-standout-resume-for-remote-jobs",
      title: "Remote Resume Formatting: Crafting a Standout Resume for Remote Jobs | ResumeEra",
      src: RemoteResumeFormatting,
      alt: "Remote Resume Formatting: Crafting a Standout Resume for Remote Jobs",
    },
    {
      path: "/personalized-resume-formatting-for-international-jobs",
      title: "Personalized Resume Formatting for International Jobs: A Comprehensive Guide | ResumeEra",
      src: PersonalizedResumeFormatting,
      alt: "Personalized Resume Formatting for International Jobs: A Comprehensive Guide",
    },
    {
      path: "/resume-formatting-your-ultimate-guide-to-landing-more-interviews",
      title: "Resume Formatting: Your Ultimate Guide to Landing More Interviews | ResumeEra",
      src: ResumeFormatting,
      alt: "Resume Formatting: Your Ultimate Guide to Landing More Interviews",
    },
    {
      path: "/download-best-resume-format-pdf-create-perfect-resume",
      title: "Download the Best Resume Format PDF: Create Your Perfect Resume Today | ResumeEra",
      src: DownloadtheBestResumeFormatPDF,
      alt: "Download the Best Resume Format PDF: Create Your Perfect Resume Today | ResumeEra",
    },
    {
      path: "/top-resume-format-pdf-job-seekers-free-templates-get-hired-fast",
      title: "Top Resume Format PDF for Job Seekers: Free Templates to Get Hired Fast | ResumeEra",
      src: topResumeFormatepdfforjob,
      alt: "Top Resume Format PDF for Job Seekers: Free Templates to Get Hired Fast",
    },
    {
      path: "/effortless-resume-creation-download-professional-resume-format-pdf",
      title: "Effortless Resume Creation: Download Professional Resume Format PDF | ResumeEra",
      src: EffortlessResumeCreations,
      alt: "Effortless Resume Creation: Download Professional Resume Format PDF",
    },
    {
      path: "/resume-format-pdf-guide-perfect-templates-for-a-standout-cv",
      title: "Resume Format PDF Guide: Perfect Templates for a Standout CV",
      src: ResumeFormatepdf,
      alt: "Resume Format PDF Guide: Perfect Templates for a Standout CV",
    },
    {
      path: "  /get-hired-faster-the-ultimate-resume-format-pdf-for-your-career",
      title: "Get Hired Faster: The Ultimate Resume Format PDF for Your Career",
      src: GetHiredFasters,
      alt: "Get Hired Faster: The Ultimate Resume Format PDF for Your Career",
    },
    {
      path: "/how-to-choose-the-right-resume-format-pdf-free-templates-inside",
      title: "How to Choose the Right Resume Format PDF: Free Templates Inside | ResumeEra",
      src: rightResumeFormat,
      alt: "How to Choose the Right Resume Format PDF: Free Templates Inside",
    },
    {
      path: "/free-resume-format-pdf-simple-professional-and-ready-to-download",
      title: "Free Resume Format PDF: Simple, Professional, and Ready to Download | ResumeEra",
      src: FreeResumeFormats,
      alt: "Free Resume Format PDF: Simple, Professional, and Ready to Download",
    },
    {
      path: "/create-your-dream-job-resume-top-resume-format-pdf-templates-available",
      title: "Create Your Dream Job Resume: Top Resume Format PDF Templates Available | ResumeEra",
      src: CreateYourDreamJob,
      alt: "Create Your Dream Job Resume: Top Resume Format PDF Templates Available | ResumeEra",
    },
    {
      path: "/step-by-step-resume-creation-with-our-free-resume-format-pdf-templates",
      title: "Step-by-Step Resume Creation with Our Free Resume Format PDF Templates | ResumeEra",
      src: StepbyStepResumeCreations,
      alt: "Step-by-Step Resume Creation with Our Free Resume Format PDF Templates",
    },
    {
      path: "/free-resume-format-pdf-build-a-cv-that-stands-out",
      title: "Free Resume Format PDF: Build a CV That Stands Out | ResumeEra",
      src: FreeResumeFormate,
      alt: "Free Resume Format PDF: Build a CV That Stands Out",
    },
    {
      path: "/complete-guide-to-resume-format-pdf-your-key-to-landing-any-job",
      title: "A Complete Guide to Resume Format PDF: Your Key to Landing Any Job | ResumeEra",
      src: ACompleteGuide,
      alt: "A Complete Guide to Resume Format PDF: Your Key to Landing Any Job",
    },
    {
      path: "/download-a-professional-resume-format-pdf-simple-fast-effective",
      title: "Download a Professional Resume Format PDF: Simple, Fast & Effective | ResumeEra",
      src: DownloadProfessional,
      alt: "Download a Professional Resume Format PDF: Simple, Fast & Effective",
    },
    {
      path: "/how-to-build-the-perfect-resume-with-a-resume-format-pdf",
      title: "How to Build the Perfect Resume with a Resume Format PDF | ResumeEra",
      src: ResumeGuides,
      alt: "How to Build the Perfect Resume with a Resume Format PDF | ResumeEra",
    },
    {
      path: "/the-ultimate-collection-of-resume-format-pdfs-for-job-seekers",
      title: "The Ultimate Collection of Resume Format PDFs for Job Seekers: Your Guide to Landing That Dream Job | ResumeEra",
      src: TheUltimateCollectionofResumeFormatPDF,
      alt: "The Ultimate Collection of Resume Format PDFs for Job Seekers",
    },
    {
      path: "/my-top-10-free-resume-format-pdfs-for-landing-your-dream-job",
      title: "My Top 10 Free Resume Format PDFs for Landing Your Dream Job | ResumeEra",
      src: MyTop10FreeResumeFormatPD,
      alt: "My Top 10 Free Resume Format PDFs for Landing Your Dream Job | ResumeEra",
    },
    {
      path: "/download-your-free-resume-format-pdf-today-and-stand-out",
      title: "Download Your Free Resume Format PDF Today and Stand Out | ResumeEra",
      src: DownloadYourFreeResumeFormat,
      alt: "Download Your Free Resume Format PDF Today and Stand Out",
    },
    {
      path: "/find-the-right-resume-format-pdf-for-your-career-growth",
      title: "Find the Right Resume Format PDF for Your Career Growth | ResumeEra",
      src: FindtheRightResumeFormat,
      alt: "Find the Right Resume Format PDF for Your Career Growth",
    },
    {
      path: "/looking-for-resume-format-pdf-get-free-templates",
      title: "Looking for a Resume Format PDF? Get Free Templates Now | ResumeEra",
      src: LookingforaResumeFormat,
      alt: "Looking for a Resume Format PDF? Get Free Templates Now",
    },
    {
      path: "/download-resume-format-pdf-for-freshers-simple-and-effective",
      title: "Download Resume Format PDF for Freshers: Simple and Effective",
      src: DownloadResumeFormatPDF,
      alt: "Download Resume Format PDF for Freshers: Simple and Effective",
    },
    {
      path: "/best-resume-format-pdf-for-professionals-download-now",
      title: "Best Resume Format PDF for Professionals: Download Now | ResumeEra",
      src: Bestresumeformat,
      alt: "Best Resume Format PDF for Professionals: Download Now | ResumeEra",
    },
    {
      path: "/how-to-create-a-winning-resume-using-resume-format-pdf",
      title: "How to Create a Winning Resume Using Resume Format PDF",
      src: HowtoCreateaWinning,
      alt: "How to Create a Winning Resume Using Resume Format PDF",
    },
    {
      path: "/easy-to-use-resume-format-pdf-for-job-seekers",
      title: "Easy-to-Use Resume Format PDF for Job Seekers of All Levels | ResumeEra",
      src: easytouse,
      alt: "Easy-to-Use Resume Format PDF for Job Seekers of All Levels",
    },
    {
      path: "/top-resume-format-pdfs-for-high-impact-resumes",
      title: "Top Resume Format PDFs for High-Impact Resumes | ResumeEra",
      src: HighImpactResumes      ,
      alt: "Top Resume Format PDFs for High-Impact Resumes | ResumeEra",
    },
    {
      path: "/free-resume-format-pdf-templates-perfect-for-your-next-job",
      title: "Free Resume Format PDF Templates: Perfect for Your Next Job | ResumeEra",
      src: freeresumeformat,
      alt: "Free Resume Format PDF Templates: Perfect for Your Next Job",
    },
    {
      path: "/how-to-create-a-stunning-resume-using-a-resume-format-pdf",
      title: "How to Create a Stunning Resume Using a Resume Format PDF | ResumeEra",
      src: HowtoCreateaStunning,
      alt: "How to Create a Stunning Resume Using a Resume Format PDF",
    },
    {
      path: "/craft-the-perfect-resume-with-our-free-resume-format-pdf",
      title: "Craft the Perfect Resume with Our Free Resume Format PDF | ResumeEra",
      src: CraftthePerfectResume,
      alt: "Craft the Perfect Resume with Our Free Resume Format PDF | ResumeEra",
    },
    {
      path: "/free-resume-format-pdf-design-your-resume-in-minutes",
      title: "Free Resume Format PDF: Design Your Resume in Minutes | ResumeEra",
      src: freeresumeform,
      alt: "Free Resume Format PDF: Design Your Resume in Minutes | ResumeEra",
    },
    {
      path: "/resume-format",
      title: "Resume Format | ResumeEra",
      src:resumeformate,
      alt: "resume formate",
    },
    {
      path: "/resume-format-pdf",
      title: "Resume Format PDF| ResumeEra",
      src:  resumeformatpdf,
      alt: "resume formate PDF",
    },
    {
      path: "/resume-formatting",
      title: "Resume Formatting | ResumeEra",
      src:  resumeformatting,
      alt: "resume formatting",
    },
    {
      path: "/professional-resume-format-pdf-download",
      title: "Professional Resume Format PDF: Download for Free | ResumeEra",
      src:  professionalresumeformat,
      alt: "Professional Resume Format PDF: Download for Free",
    },
    {
      path: "/craft-perfect-resume-with-free-format-pdf",
      title: "Craft the Perfect Resume with Our Free Resume Format PDF | ResumeEra",
      src:  crafttheperfectresume,
      alt: "Craft the Perfect Resume with Our Free Resume Format PDF",
    },
    {
      path: "/your-step-by-step-guide-to-a-professional-resume-format-pdf",
      title: "Your Step-by-Step Guide to a Professional Resume Format PDF | ResumeEra",
      src:  YourStepbyStepGuidetoaProfessional,
      alt: "Your Step-by-Step Guide to a Professional Resume Format PDF",
    },
    {
      path: "/create-a-resume-that-gets-results-best-resume-format-pdfs",
      title: "Create a Resume That Gets Results: Best Resume Format PDFs | ResumeEra",
      src:  CreateresumeThatGets,
      alt: "Create a Resume That Gets Results: Best Resume Format PDFs",
    },
    {
      path: "/top-resume-format-pdf-for-job-seekers-free-to-download",
      title: "Top Resume Format PDF for Job Seekers: Free to Download | ResumeEra",
      src:  TopResumeFormatPDFforJobSeeker,
      alt: "Top Resume Format PDF for Job Seekers: Free to Download",
    },
    {
      path: "/optimize-your-resume-with-the-best-resume-format-pdf-templates",
      title: "Optimize Your Resume with the Best Resume Format PDF Templates | ResumeEra",
      src:  Optimizeyourresume,
      alt: "Optimize Your Resume with the Best Resume Format PDF Templates",
    },
    {
      path: "/get-the-right-resume-format-pdf-for-your-job-search",
      title: "Get the Right Resume Format PDF for Your Job Search | ResumeEra",
      src:  gettherightresume,
      alt: "Get the Right Resume Format PDF for Your Job Search | ResumeEra",
    },
    {
      path: "/the-best-resume-format-pdf-for-career-success",
      title: "The Best Resume Format PDF for Career Success 🌟 | ResumeEra",
      src:  TheBestResumeFormat,
      alt: "The Best Resume Format PDF for Career Success",
    },
    {
      path: "/download-the-top-resume-format-pdf-for-your-job-application",
      title: "Download the Top Resume Format PDF for Your Job Application | ResumeEra",
      src:  Downloadthetop,
      alt: "Download the Top Resume Format PDF for Your Job Application",
    },
    {
      path: "/free-resume-format-pdf-for-freshers-ready-to-download",
      title: "Free Resume Format PDF for Freshers: Ready to Download | ResumeEra",
      src:  FreeResumeFormat,
      alt: "Free Resume Format PDF for Freshers: Ready to Download | ResumeEra",
    },
    {
      path: "/ultimate-resume-format-pdf-for-career-advancements",
      title: "The Ultimate Resume Format PDF for Career Advancements | ResumeEra",
      src:  Theultimateresume,
      alt: "The Ultimate Resume Format PDF for Career Advancements | ResumeEra",
    },
    {
      path: "/how-to-pick-the-right-resume-format-pdf-for-your-skills",
      title: "How to Pick the Right Resume Format PDF for Your Skills | ResumeEra",
      src:  HowtoPicktheRightResume,
      alt: "How to Pick the Right Resume Format PDF for Your Skills | ResumeEra",
    },
    {
      path: "/get-hired-with-the-best-resume-format-pdf-templates-available",
      title: "Get Hired with the Best Resume Format PDF Templates Available | ResumeEra",
      src:  GetHiredwiththeBestResume,
      alt: "Get Hired with the Best Resume Format PDF Templates Available | ResumeEra",
    },
    {
      path: "/free-resume-format-pdf-templates-to-help-you-land-your-dream-job",
      title: "Free Resume Format PDF Templates to Help You Land Your Dream Job | ResumeEra",
      src:  FreeResumeFormatss,
      alt: "Free Resume Format PDF Templates to Help You Land Your Dream Job | ResumeEra",
    },
    {
      path: "/top-resume-format-pdf-downloads-for-a-perfect-cv",
      title: "Top Resume Format PDF Downloads for a Perfect CV | ResumeEra",
      src:  TopResumeFormat,
      alt: "Top Resume Format PDF Downloads for a Perfect CV | ResumeEra",
    },
    {
      path: "/best-resume-format-pdfs-for-creating-a-professional-cv",
      title: "Best Resume Format PDFs for Creating a Professional CV | ResumeEra",
      src:  BestResumeFormat,
      alt: "Best Resume Format PDFs for Creating a Professional CV ",
    },
    {
      path: "/resume-format-pdf-for-freshers-easy-to-download-and-customize",
      title: "Resume Format PDF for Freshers: Easy to Download and Customize | ResumeEra",
      src:  ResumeFormatPDF,
      alt: "Resume Format PDF for Freshers: Easy to Download and Customize ",
    },
    {
      path: "/simple-yet-professional-resume-format-pdf-get-your-job-now",
      title: "Simple Yet Professional Resume Format PDF: Get Your Job Now | ResumeEra",
      src:  SimpleYetProfessional,
      alt: "Simple Yet Professional Resume Format PDF: Get Your Job Now ",
    },
    {
      path: "/unlock-your-career-potential-with-the-right-resume-format-pdf",
      title: "Unlock Your Career Potential with the Right Resume Format PDF | ResumeEra",
      src:  UnlockYourCareer,
      alt: "Unlock Your Career Potential with the Right Resume Format PDF | ResumeEra ",
    },
    {
      path: "/free-downloadable-resume-format-pdfs-for-all-professions",
      title: "Free Downloadable Resume Format PDFs for All Professions | ResumeEra",
      src:  FreeDownloadableResume,
      alt: "Free Downloadable Resume Format PDFs for All Professions",
    },
    {
      path: "/how-to-build-an-impactful-resume-with-a-resume-format-pdf",
      title: "How to Build an Impactful Resume with a Resume Format PDF | ResumeEra",
      src:  HowtoBuildanImpactful,
      alt: "How to Build an Impactful Resume with a Resume Format PDF | ResumeEra",
    },
    {
      path: "/resume-format-pdf-free-templates-that-make-a-difference",
      title: "Resume Format PDF: Free Templates That Make a Difference | ResumeEra",
      src:  ResumeFormatPDFs,
      alt: "Resume Format PDF: Free Templates That Make a Difference | ResumeEra",
    },
    {
      path: "/get-noticed-with-the-best-resume-format-pdf-free-download-2025",
      title: "Get Noticed with the Best Resume Format PDF Free Download (2025)",
      src: GetNoticedwith,
      alt: "Get Noticed with the Best Resume Format PDF Free Download (2025)",
    },
    {
      path: "/get-noticed-with-a-professional-resume-format-pdf-free-download-now",
      title: "Get Noticed with a Professional Resume Format PDF | Free Download Now",
      src: GetNoticed,
      alt: "Get Noticed with a Professional Resume Format PDF | Free Download Now",
    },
    {
      path: "/simple-resume-format-pdf-job-seekers-2025-download-now",
      title: "Simple Resume Format PDF | Job Seekers 2025 | Download Now",
      src: SimpleResumeFormatPDF,
      alt: "Simple Resume Format PDF | Job Seekers 2025 | Download Now",
    },
    {
      path: "/the-complete-guide-to-choosing-the-right-resume-format-pdf",
      title: "The Complete Guide to Choosing the Right Resume Format PDF | ResumeEra",
      src: TheCompleteGuide,
      alt: "The Complete Guide to Choosing the Right Resume Format PDF | ResumeEra",
    },
    {
      path: "/free-resume-format-pdf-2025-perfect-for-career-success-download-now",
      title: "Free Resume Format PDF-2025 | Perfect for Career Success | Download Now",
      src: PerfectforCareerSuccess,
      alt: "Free Resume Format PDF-2025 | Perfect for Career Success | Download Now",
    },
    {
      path: "/resume-format-pdf-that-will-get-you-energy-in-interview",
      title: "Resume Format PDF That Will Get You Energy in Interview | Download Now",
      src: GetYouenergy,
      alt: "Resume Format PDF That Will Get You Energy in Interview",
    },
    {
      path: "/resume-mistakes-you-need-to-avoid-in-2025",
      title: "Resume Mistakes You Need to Avoid in 2025 | Expert Tips",
      src: ResumeMistakess,
      alt: "Resume Mistakes You Need to Avoid in 2025",
    },
    {
      path: "/job-applications-resume-format-pdf-download-now-2025",
      title: "Job Applications Resume Format PDF | Download Now 2025",
      src: JobApplications,
      alt: "Job Applications Resume Format PDF | Download Now 2025",
    },
    {
      path: "/how-to-use-resume-format-pdfs-2025-winning-job-application",
      title: "How to Use Resume Format PDFs 2025 | Winning Job Application",
      src: HowToUseResume,
      alt: "How to Use Resume Format PDFs 2025 | Winning Job Application",
    },
    {
      path: "/perfect-your-resume-with-the-best-resume-format-pdfs",
      title: "Perfect Your Resume with the Best Resume Format PDFs - ResumeEra",
      src: PerfectYourResume,
      alt: "Perfect Your Resume with the Best Resume Format PDFs - ResumeEra",
    },
    {
      path: "/best-resume-format-pdf-for-immediate-job-offers-2025-download-free-now",
      title: "PBest Resume Format PDF for Immediate Job Offers in 2025 | Download Free Now",
      src: BestResumeFormats,
      alt: "Best Resume Format PDF for Immediate Job Offers in 2025 | Download Free Now",
    },
    {
      path: "/free-top-resume-format-pdf-successful-career-2025-download-now",
      title: "Free Top Resume Format PDF | Successful Career - 2025 | Download Now",
      src: FreeTopResume,
      alt: "Free Top Resume Format PDF | Successful Career - 2025 | Download Now",
    },
    {
      path: "/top-resume-format-pdf-for-careersuccess",
      title: "Top Resume Format PDF for Career Success | Free Download Now",
      src: TopResumeFormatPDFforCareerSuc,
      alt: "Top Resume Format PDF for Career Success | Free Download Now",
    },
    {
      path: "/download-resume-format-pdf-today",
      title: "Download Your Resume Format PDF Today | Get Hired Soon",
      src: GetHiredSoon,
      alt: "Download Your Resume Format PDF Today | Get Hired Soon",
    },
    {
      path: "/free-resume-format-pdfs",
      title: "Free Resume Format PDFs: Build Your Best CV Now",
      src: BuildYourBestCV,
      alt: "Free Resume Format PDFs: Build Your Best CV Now",
    },
    {
      path: "/get-free-resume-format-pdf-fresher-and-expert-professional",
      title: "Get Free Resume Format Download Now | For Fresher & Expert Professional",
      src: FresherExpertProfessional,
      alt: "Get Free Resume Format Download Now | For Fresher & Expert Professional",
    },
    {
      path: "/how-to-optimize-killer-resume-format-pdf-2025",
      title: "How to Optimize Your Killer Resume Format PDF in 2025",
      src: Howtooptimise,
      alt: "How to Optimize Your Killer Resume Format PDF in 2025",
    },
    {
      path: "/how-to-respond-to-a-linkedin-recruiter",
      title: "How to Respond to a LinkedIn Recruiter: A Comprehensive Guide",
      src: Howtohandle,
      alt: "How to Respond to a LinkedIn Recruiter: A Comprehensive Guide",
    },
    {
      path: "/simple-resume-format-word",
      title: "Simple Resume Format Word: A Complete Guide to Crafting Your Perfect Resume",
      src: SimpleResumeFormatWord,
      alt: "Simple Resume Format Word",
    },
    {
      path: "/simple-resume-format-pdf",
      title: "Simple Resume Format PDF - Download Free Templates | Resumeera.xyz",
      src: pdfImage,
      alt: "Simple Resume Format PDF - Download Free Templates",
    },
    {
      path: "/resume-format-pdf-free-download",
      title: "Resume Format PDF Free Download",
      src: ResumeFormatPDFFree,
      alt: "Resume Format PDF Free Download",
    },
    {
      path: "/pdf-resume-format-free-download",
      title: "PDF Resume Format Free Download: A Comprehensive Guide to Crafting Your Perfect Resume",
      src: pdfresumeformat,
      alt: "PDF Resume Format Free Download",
    },
    {
      path: "/resume-pdf",
      title: "Resume PDF: The Ultimate Guide to Creating a Professional Resume in PDF Format",
      src: 'https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5166.jpg',
      alt: "resume pdf",
    },
    {
      path: "/resume-format-pdf-for-fresher",
      title: "Resume Format PDF for Freshers: Your Complete Guide to Crafting a Winning Resume",
      src: 'https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-2770.jpg',
      alt: "Resume Format PDF for Fresher",
    },
    {
      path: "/resume-pdf-download",
      title: "Resume PDF Download - How to Download Your Resume as a PDF",
      src: 'https://img.freepik.com/free-vector/online-cv-illustration-concept_23-2148566615.jpg',
      alt: "Resume PDF Download - How to Download Your Resume as a PDF",
    },
    {
      path: "/resume-quotes",
      title: "Resume Quotes – Inspirational Quotes to Enhance Your Professional Journey",
      src: 'https://img.freepik.com/free-vector/lettering-business-sticker-set_23-2150185946.jpg',
      alt: "Resume Quotes",
    },
    {
      path: "/simple-resume-format-pdf-download",
      title: "Simple Resume Format PDF Download: A Professional Guide to Crafting Your Perfect Resume",
      src: 'https://img.freepik.com/premium-vector/designer-creative-resume-template_23-2147540760.jpg',
      alt: "Simple Resume Format PDF Download",
    },
    {
      path: "/how-to-make-a-resume-for-freshers",
      title: "How to Make a Resume for Freshers | Resume Tips & Templates",
      src: 'https://img.freepik.com/free-vector/recruitment-concept-with-laptop_23-2148621834.jpg',
      alt: "How to Make a Resume for Freshers",
    },
    {
      path: "/how-to-write-a-strong-resume-objective",
      title: "How to Write a Strong Resume Objective - Resumeera",
      src: 'https://img.freepik.com/free-vector/illustrated-choice-worker-concept_52683-44355.jpg',
      alt: "How to Write a Strong Resume Objective",
    },
    {
      path: "/resume-for-internship",
      title: "Resume for Internship - Create Your Perfect Internship Resume",
      src: 'https://img.freepik.com/free-vector/online-cv-concept_23-2148555717.jpg?t=st=1737619117~exp=1737622717~hmac=99f5c909b8d31a5decdb213fea7772d22dd998f43cd39e98ab65452e5826c3e2&w=740',
      alt: "Resume for Internship",
    },
    {
      path: "/attention-grabbing-resume-summary",
      title: "How to Write an Attention-Grabbing Resume Summary - Resumeera",
      src: 'https://img.freepik.com/free-vector/resume-writing-service-abstract-concept-illustration-copywriting-service-cv-online-professional-help-writing-resume-cover-letter-candidate-profile-career-summary_335657-143.jpg',
      alt: "Attention-Grabbing Resume Summary",
    },
    {
      path: "/bank-resume-format-for-freshers-pdf",
      title: "Bank Resume Format for Freshers PDF: A Professional Guide | ResumeEra",
      src: 'https://img.freepik.com/free-vector/flat-design-cooking-class-online-resume_23-2149934784.jpg',
      alt: "Bank Resume Format for Freshers PDF",
    },
    {
      path: "/functional-resume-format",
      title: "functional resume format-free dowload and free edit now",
      src: 'https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-28079.jpg?t=st=1738414491~exp=1738418091~hmac=d918d399fdf07825813cebf8bdb5bfb93c8d560fe0137410f1537dc21774a2eb&w=740',
      alt: "functional resume format",
    },
    {
      path: "/resume-format-for-freshers",
      title: "Resume Format For Freshers:free and easy download now",
      src: 'https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg',
      alt: "Resume Format For Freshers",
    },
    {
      path: "/resume-format-for-freshers-sample-download-now-free",
      title: "Resume Format for Freshers Sample: Download Now for Free",
      src: 'https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-8401.jpg',
      alt: "Resume Format for Freshers Sample",
    },
    {
      path: "/resume-format-for-freshers-example",
      title: "Resume Format for Freshers Example: Free Editing & Downloading Now",
      src: 'https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg',
      alt: "Resume Format for Freshers Example",
    },
    {
      path: "/job-resume-format-for-fresher",
      title: "job reusme format for fresher : Create And Download now",
      src: 'https://i.postimg.cc/jd9B8ZRy/job-resume-format-for-fresher.webp',
      alt: "job reusme format for fresher",
    },
    {
      path: "/good-resume-format-for-freshers",
      title: "Unlock the Best and Good Resume Format for Freshers",
      src: 'https://i.postimg.cc/d34Gbzcn/unloack.webp',
      alt: "Unlock the Best and Good Resume Format for Freshers",
    },
    {
      path: "/pdf-of-resume-format-for-freshers",
      title: "Exclusive Free PDF Of Resume Format for Freshers – Download now | ResumeEra",
      src: 'https://i.postimg.cc/SNJCFJTp/1.webp',
      alt: "Exclusive Free PDF Of Resume Format for Freshers",
    },
    {
      path: "/resume-format-for-freshers-free-download",
      title: "Crafting the Perfect Resume Format for Freshers Free Download",
      src: 'https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg',
      alt: "Resume Format for Freshers Free Download",
    },
    {
      path: "/model-resume-format-for-freshers",
      title: "MODEL RESUME FORMAT FOR FRESHERS - Explore Rich - Download Now",
      src: 'https://i.postimg.cc/vmXXtXQd/3f178a8b-c22f-4d89-bbbd-f34e16a44e6c.webp',
      alt: "MODEL RESUME FORMAT FOR FRESHERS",
    },
    {
      path: "/what-is-the-best-resume-format-for-freshers",
      title: "What is the Best Resume Format for Freshers",
      src: 'https://i.postimg.cc/RZDGpmqV/freepik-the-style-is-candid-image-photography-with-natural-84173.webp',
      alt: "What is the Best Resume Format for Freshers",
    },
    {
      path: "/types-of-resume-formats-for-freshers",
      title: "Types of Resume Formats for Freshers: A Complete Guide",
      src: 'https://i.postimg.cc/pL4GGcd5/type-of-resume-format-for-fresher.jpg',
      alt: "Types of Resume Formats for FresherS",
    },
    {
      path: "/step-by-step-guide-resume-format-for-freshers",
      title: "Step-by-Step Guide to Writing Resume Format for Freshers",
      src: 'https://i.postimg.cc/BQzpQJ4W/Resume-Format-for-Freshers-example.jpg',
      alt: " Resume Format for Freshers",
    },
    {
      path: "/what-is-a-functional-resume",
      title: "What is a Functional Resume and How Does it Work? | Resumeera",
      src: 'https://i.postimg.cc/0Qc3h1nf/functional-resume.jpg',
      alt: " What is a Functional Resume",
    },
    {
      path: "/how-to-create-a-teenager-resume-without-work-experience",
      title: "How to Create a Teenager Resume Without Work Experience",
      src: 'https://i.postimg.cc/B6gtQXVx/teenager-reusme-with-no-experience.webp',
      alt: " How to Create a Teenager Resume Without Work Experience",
    },
    {
      path: "/how-to-create-a-resume-for-your-first-job-as-a-student",
      title: "How to Create a Resume for Your First Job as a Student",
      src: 'https://i.postimg.cc/TKpvbjMD/Create-a-Resume-for-Your-First-Job.webp',
      alt: " How to Create a Resume for Your First Job as a Student",
    },
    {
      path: "/1st-job-resume-examples",
      title: "1st Job Resume Examples – A Guide to Crafting Your Perfect Resume",
      src: 'https://i.postimg.cc/tCWTdwMM/1st-Job-Resume-Examples.jpg',
      alt: " 1st Job Resume Examples – A Guide to Crafting Your Perfect Resume",
    },
    {
      path: "/student-resume-examples-with-no-experience",
      title: "Student Resume Examples with No Experience: How to Stand Out with the Right Resume Format",
      src: 'https://i.postimg.cc/xdWW9fvf/freepik-the-style-is-candid-image-photography-with-natural-52995.jpg',
      alt: "Student Resume Examples with No Experience",
    },
    {
      path: "/how-to-create-a-student-cv-template-with-no-experience",
      title: "How to Create a Student CV Template with No Experience: A Comprehensive Guide",
      src: 'https://i.postimg.cc/KjwQ8mz5/student-cv-template-with-no-experience.jpg',
      alt: "Student CV Template with No Experience",
    },
    {
      path: "/resume-example-for-students-first-job",
      title: "Resume Examples for Students First Job: Professional Guide",
      src: 'https://i.postimg.cc/SN50RtxZ/Resume-Examples-for-Students-First-Job.jpg',
      alt: "Resume Examples for Students First Job",
    },
    {
      path: "/resume-examples-for-no-work-experience",
      title: "Resume Examples for No Work Experience: Crafting Your First Resume for Success",
      src: 'https://i.postimg.cc/8zMvscSj/resume-example-with-no-experience.jpg',
      alt: "Resume Examples for No Work Experience",
    },
    {
      path: "/crafting-a-sample-resume-for-students-with-no-work-experience",
      title: "Crafting a Sample Resume for Students with No Work Experience",
      src: 'https://i.postimg.cc/XqkpbHBL/Crafting-a-Sample-Resume-for-Students-with-No-Work-Experience.jpg',
      alt: "Sample Resume for Students with No Work Experience",
    },
    {
      path: "/student-resume-for-your-first-job",
      title: "How to Write a Winning Student Resume for Your First Job: Tips & Examples",
      src: 'https://i.postimg.cc/jSHYFQCQ/Student-Resume-for-Your-First-Job.png',
      alt: "Student Resume for Your First Job",
    },
    {
      path: "/resume-for-a-15-year-old-first-job",
      title: "How to Write a Resume for a 15-Year-Old First Job: Step-by-Step Guide",
      src: 'https://i.postimg.cc/1zHbcqQ3/How-to-Write-a-Resume-for-a-15-Year-Old-First-Job.webp',
      alt: "Resume for a 15-Year-Old First Job",
    },
    {
      path: "/teenager-resume-for-your-first-job-in-high-school",
      title: "How to Write a Teenager Resume for Your First Job in High School: A Step-by-Step Guide",
      src: 'https://i.postimg.cc/BnxWYvFR/Teenager-Resume-for-Your-First-Job-in-High-School.webp',
      alt: "Teenager Resume for Your First Job in High School",
    },
    {
      path: "/teenager-resume-for-your-first-job",
      title: "How to Write a Teenager Resume for Your First Job: A Professional Guide",
      src: 'https://i.postimg.cc/WpxXWFZ8/freepik-an-asian-man-25-years-old-black-hair-wearing-glass-31571.jpg',
      alt: "Teenager Resume for Your First Job",
    },
    {
      path: "/teenager-resume",
      title: "Create a Perfect Teenager Resume: Fresher’s Download Now (Free)",
      src: 'https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg',
      alt: "Teenager Resume",
    },
    {
      path: "/teenager-resume-examples",
      title: "Teenager Resume Examples: Create and Download Now for Free",
      src: 'https://i.postimg.cc/J0Y0Pwnd/teenager-resume-1.jpg',
      alt: "Teenager Resume Examples",
    },
    {
      path: "/teenager-resume-template",
      title: "Teenager Resume Template: Create Free and Thrilled Download Now!",
      src: 'https://i.postimg.cc/7P1w02Gp/Teenager-Resume-Template.jpg',
      alt: "Teenager Resume Template",
    },
    {
      path: "/teenager-resume-with-no-work-experience",
      title: " Teenager Resume with No Work Experience: Free Create and Download Now",
      src: 'https://i.postimg.cc/1gFGw9Hq/Teenager-Resume-with-No-Work-Experience-2.jpg',
      alt: " Teenager Resume with No Work Experience",
    },
    {
      path: "/teenager-resume-with-no-job-experience",
      title: " How to Build a Winning Teenager Resume with No Job Experience: A Complete Guide",
      src: 'https://i.postimg.cc/g0kgB8jx/Teenager-Resume-with-No-Work-Experience1.jpg',
      alt: "Teenager Resume with No Job Experience",
    },
    {
      path: "/how-to-create-google-resume-format",
      title: " How to Creating Google Resume Format: A Guide for Success",
      src: 'https://i.postimg.cc/g04PB4JX/step-3-2x-97e08972f3bff08cb47fb3b4edf763a5.png',
      alt: "How to Creating Google Resume Format",
    },
    {
      path: "/sample-teenager-resume-free-create-and-download",
      title: " Sample Teenager Resume: Free Create and Download",
      src: 'https://i.postimg.cc/bwWFqDWC/Resume-Format.jpg',
      alt: "Sample Teenager Resume",
    },
    {
      path: "/how-to-write-an-attention-grabbing-resume-summary",
      title: " How to Write an Attention-Grabbing Resume Summary",
      src: 'https://i.postimg.cc/05KZYbg1/Attention-Grabbing-Resume-Summary.jpg',
      alt: "How to Write an Attention-Grabbing Resume Summary",
    },
    {
      path: "/download-free-teenager-resume-templates",
      title: " Free Teenager Resume Templates: First Professional Resume",
      src: 'https://i.postimg.cc/P5vzd6mZ/multi-page-resume-formatting.jpg',
      alt: "Free Teenager Resume Templates: First Professional Resume",
    },
    {
      path: "/hig-hschool-teenager-resume",
      title: " How to Create a Winning High School Teenager Resume: Tips, Examples, and Templates",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Teenager Resume",
    },
    {
      path: "/teenager-resume-for-college-entrance",
      title: " How to Build a Teenager Resume for College Entrance: Tips, Templates, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Teenager Resume for College Entrance",
    },
    {
      path: "/skills-for-teenager-resume-examples",
      title: "Skills for Teenager Resume Examples: Boost Your Resume with These Tips",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Skills for Teenager Resume Examples",
    },
    {
      path: "/sample-of-teenager-resume-template",
      title: "Sample of Teenager Resume Template: Free Examples and Tips",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Sample of Teenager Resume Template",
    },
    {
      path: "/sample-of-teenager-resume-template",
      title: "Sample of Teenager Resume Template: Free Examples and Tips",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Sample of Teenager Resume Template",
    },
    {
      path: "/student-resume-for-internships",
      title: "How to Craft a Student Resume for Internships: Tips, Templates, and Online Tools",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Student Resume for Internships",
    },
    {
      path: "/sample-resume-high-school-internships",
      title: "Sample Resume for High School Students Applying for Internships: Tips, Templates, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Sample Resume for High School Students Applying for Internships",
    },
    {
      path: "/internship-resume-examples-for-teenagers",
      title: "Unleash Your Potential: Internship Resume Examples for Teenagers That Win",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Internship Resume Examples for Teenagers",
    },
    {
      path: "/how-to-write-a-resume-for-a-teenage-internship",
      title: "How to Write a Resume for a Teenage Internship: Step-by-Step Guide for 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to Write a Resume for a Teenage Internship",
    },
    {
      path: "/high-school-student-resume-templates-for-internships",
      title: "Unlock Opportunities: High School Student Resume Templates for Internships in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Student Resume Templates for Internships",
    },
    {
      path: "/best-resume-format-for-teen-internships",
      title: "Best Resume Format for Teen Internships in 2025: Top Tips and Templates",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Best Resume Format for Teen Internships",
    },
    {
      path: "/entry-level-resume-examples-for-high-school-students",
      title: "Kickstart Your Career: Entry-Level Resume Examples for High School Students in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Entry-Level Resume Examples for High School Students",
    },
    {
      path: "/tips-for-creating-a-teenage-internship-resume",
      title: "Top Tips for Creating a Teenage Internship Resume That Stands Out in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Tips for Creating a Teenage Internship Resume",
    },
    {
      path: "/high-school-internship-resume-with-no-experience",
      title: "Build Your Future: High School Internship Resume with No Experience in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Build Your Future: High School Internship Resume with No Experience in 2025",
    },
    {
      path: "/high-school-internship-resume-with-no-experience",
      title: "High School Internship Resume with No Experience: Top Tips and Templates for 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Internship Resume with No Experience",
    },
    {
      path: "/downloadable-teen-internship-templates",
      title: "Downloadable Resume Templates for Teenage Internships: Craft a High School Internship Resume with No Experience",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Downloadable Resume Templates for Teenage Internships",
    },
    {
      path: "/effective-resume-writing-for-high-school-internships",
      title: "Effective Resume Writing for High School Internships: Tips for Teens in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Effective Resume Writing for High School Internships",
    },
    {
      path: "/high-school-student-resume-examples-for-job-applications",
      title: "High School Student Resume Examples for Job Applications: Tips for Teens in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Student Resume Examples for Job Applications",
    },
    {
      path: "/how-to-list-extracurricular-activities-on-a-teen-resume",
      title: "How to List Extracurricular Activities on a Teen Resume: Tips for Success in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to List Extracurricular Activities on a Teen Resume",
    },
    {
      path: "/objective-statement-examples-for-teenage-internship-resumes",
      title: "Objective Statement Examples for Teenage Internship Resumes: Tips for 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Objective Statement Examples for Teenage Internship Resumes: Tips for 2025",
    },
    {
      path: "/high-school-resume-examples-with-no-work-experience",
      title: "High School Resume Examples with No Work Experience: Free Tips for Teens",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Resume Examples with No Work Experience",
    },
    {
      path: "/skills-to-include-on-a-high-school-internship-resume",
      title: "Skills to Include on a High School Internship Resume: Free Tips for Teens",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Skills to Include on a High School Internship Resume",
    },
    {
      path: "/free-resume-templates-for-high-school-students",
      title: "Free Resume Templates for High School Students: Tips and Examples for Teens",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Free Resume Templates for High School Students",
    },
    {
      path: "/how-to-format-a-resume-for-a-teenage-internship",
      title: "How to Format a Resume for a Teenage Internship: Tips for Teens in 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to Format a Resume for a Teenage Internship",
    },
    {
      path: "/high-school-student-resume-for-part-time-jobs",
      title: "High School Student Resume for Part-Time Jobs: Tips and Examples for Teens",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "High School Student Resume for Part-Time Jobs: Tips and Examples for Teens",
    },
    {
      path: "/how-to-write-a-job-resume-for-a-high-school-student",
      title: "How to Write a Job Resume for a High School Student: Tips and Examples for 2025",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to Write a Job Resume for a High School Student: Tips and Examples for 2025",
    },
    {
      path: "/how-to-write-resume-for-12th-pass-student",
      title: "How To Write a Resume for a 12th Pass Student: Tips and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How To Write a Resume for a 12th Pass Student",
    },
    {
      path: "/twelth-student-resume-for-part-time-jobs",
      title: "How to Craft a 12th Student Resume for Part-Time Jobs: Tips and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to Craft a 12th Student Resume for Part-Time Jobs",
    },
    {
      path: "/bank-resume-format",
      title: "Bank Resume Format: A Step-by-Step Guide for Freshers and Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Bank Resume Format",
    },
    {
      path: "/resume-format-for-bank-job",
      title: "Resume Format for Bank Job: Step-by-Step Guide for Freshers and Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume Format for Bank Job",
    },
    {
      path: "/bank-resume-format-for-freshers",
      title: "Bank Resume Format for Freshers: A Step-by-Step Guide for Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Bank Resume Format for Freshers",
    },
    {
      path: "/bank-resume-format-for-freshers",
      title: "HDFC Bank Resume Format: A Step-by-Step Guide for Freshers and Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "HDFC Bank Resume Format",
    },
    {
      path: "/hdfc-bank-resume-format",
      title: "HDFC Bank Resume Format: A Step-by-Step Guide for Freshers and Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "HDFC Bank Resume Format",
    },
    {
      path: "/resume-format-for-bank-job-fresher",
      title: "Resume Format for Bank Job Fresher: A Step-by-Step Guide for Beginners",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume Format for Bank Job Fresher",
    },
    {
      path: "/banking-resume",
      title: "Banking Resume: Guide for Freshers and Download free",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Banking Resume",
    },
    {
      path: "/bank-resume-format-for-freshers-pdf-guide-free-download",
      title: "Bank Resume Format for Freshers PDF: Guide and Free Download Now",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Bank Resume Format for Freshers PDF",
    },
    {
      path: "/icici-bank-resume-format-for-freshers",
      title: "ICICI Bank Resume Format for Freshers: free guide update and download",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "ICICI Bank Resume Format for Freshers",
    },
    {
      path: "/bank-resume-format-freshers",
      title: "Bank Resume Format for Freshers: free guide-update and download now",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Bank Resume Format for Freshers",
    },
    {
      path: "/axis-bank-resume-format-for-freshers-guide-create-update-download",
      title: "Axis Bank Resume Format for Freshers: Guide with Create, Update, and Download",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Axis Bank Resume Format for Freshers",
    },
    {
      path: "/how-to-create-resume-for-freshers",
      title: "How to Create a Resume for Freshers in 2025:free Guide-create-edit and  Templates To Download",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "How to Create a Resume for Freshers",
    },
    {
      path: "/format-of-resume",
      title: "Format of Resume in 2025: Ultimate Guide with Free Templates and Tips",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Format of Resume",
    },
    {
      path: "/fresher-resume-template",
      title: "Fresher Resume Template for 2025: Free Downloads, Tips, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Fresher Resume Template",
    },
    {
      path: "/freshers-resume",
      title: "Freshers Resume Guide for 2025: Free Templates, Tips, and download",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Freshers Resume Guide for 2025",
    },
    {
      path: "/resume-template-for-fresher",
      title: "Resume Template for Fresher in 2025: Free Downloads, Tips, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume Template for Fresher",
    },
    {
      path: "/resume-format-for-fresher",
      title: "Resume Format for Fresher in 2025: Free Templates, Tips, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume Format for Fresher",
    },
    {
      path: "/resume-for-fresher-student",
      title: "Resume for Fresher Student in 2025: Free Templates, Tips, and Examples",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume for Fresher Student",
    },
    {
      path: "/sample-resume-for-freshers",
      title: "Sample Resume for Freshers in 2025: Free create and download templates",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Sample Resume for Freshers",
    },
    {
      path: "/resume-for-fresher",
      title: "Resume for Fresher in 2025:absolutely Free Download now",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume for Fresher",
    },
    {
      path: "/xyz-resume-generator",
      title: "Resume for Fresher in 2025:absolutely Free Download now",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "XYZ Resume Generator",
    },
    {
      path: "/resume-quote",
      title: "Resume Quotes – Inspirational Quotes to Enhance Your Resume",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Resume Quotes ",
    },
    {
      path: "/pattern-of-resume-for-freshers",
      title: "Pattern of Resume for Freshers – Best Formats & Free Templates",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Pattern of Resume for Freshers",
    },
    {
      path: "/fresher-resume-summary",
      title: "Fresher Resume Summary 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/xTLNrmr3/High-School-Teenager-Resume.jpg',
      alt: "Fresher Resume Summary",
    },
    {
      path: "/cv-summary-for-fresher",
      title: "CV Summary for Fresher 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/T3Mt7HMq/cv-summary-for-fresher.jpg',
      alt: "CV Summary for Fresher",
    },
    {
      path: "/resume-summary-for-it-freshers",
      title: "Resume Summary for IT Freshers 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/fLqvs83L/freepik-create-a-colorful-flatstyle-illustration-of-a-prof-45077.jpg',
      alt: "Resume Summary for IT Freshers",
    },
    {
      path: "/resume-synopsis-for-freshers",
      title: "Resume Synopsis for Freshers 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/fLqvs83L/freepik-create-a-colorful-flatstyle-illustration-of-a-prof-45077.jpg',
      alt: "Resume Synopsis for Freshers",
    },
    {
      path: "/profile-summary-for-freshers",
      title: "Profile Summary for Freshers 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/fLqvs83L/freepik-create-a-colorful-flatstyle-illustration-of-a-prof-45077.jpg',
      alt: "Profile Summary for Freshers",
    },
    {
      path: "/professional-summary-in-resume-for-fresher",
      title: "Profile Summary for Freshers 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/rshDHppR/professional-summary-in-resume-for-fresher.jpg',
      alt: "Professional Summary in Resume for Fresher",
    },
    {
      path: "/professional-summary-in-resume-for-fresher",
      title: "Professional Summary for Fresher 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Professional Summary for Fresher",
    },
    {
      path: "/resume-heading-and-summary-for-freshers",
      title: "Resume Heading and Summary for Freshers 2025: How to Write, Examples, and Free Templates",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Resume Heading and Summary for Freshers",
    },
    {
      path: "/summary-for-resume-for-freshers-example",
      title: "Summary for Resume for Freshers Example: Top Tips, Samples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Summary for Resume for Freshers Example",
    },
    {
      path: "/resume-profile-summary-for-freshers",
      title: "Resume Profile Summary for Freshers: Top Tips, Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Resume Profile Summary for Freshers",
    },
    {
      path: "/profile-summary-for-resume-for-freshers",
      title: "Profile Summary for Resume for Freshers: Expert Tips, Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Profile Summary for Resume for Freshers",
    },
    {
      path: "/about-me-resume-examples-for-freshers-tip-guide-sample",
      title: "About Me Resume Examples for Freshers: Top Tips, Samples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "About Me Resume Examples for Freshers",
    },
    {
      path: "/description-for-resume-for-freshers-tip-guide-sample",
      title: "Description for Resume for Freshers: Top Tips, 31 Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Description for Resume for Freshers",
    },
    {
      path: "/description-for-resume-for-freshers-tip-guide-sample",
      title: "Description for Resume for Freshers: Top Tips, 31 Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Description for Resume for Freshers",
    },
    {
      path: "/best-summary-for-resume-for-freshers-tips-examples-templates",
      title: "Best Summary for Resume for Freshers: Top Tips, 31 Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Best Summary for Resume for Freshers",
    },
    {
      path: "/fresher-summary-for-resume-tips-examples-templates",
      title: "Fresher Summary for Resume: Top Tips, 31 Examples, and Free Templates for 2025",
      src: 'https://i.postimg.cc/jS6JvG5Y/Professional-Summary-for-Fresher-2025.webp',
      alt: "Fresher Summary for Resume",
    },
    {
      path: "/what-should-i-add-my-resume-as-a-fresher",
      title: "What Should I Add in My Resume as a Fresher? 10 Essential Tips for Success",
      src: 'https://i.postimg.cc/zBLwX41t/DALL-E-2025-03-05-21-52-43-A-vibrant-imaginative-illustration-with-a-light-blue-sky-background-fe.webp',
      alt: "What Should I Add in My Resume as a Fresher",
    },
    {
      path: "/resume-for-ai-driven-hiring-systems",
      title: "What’s the Best Way to Optimize Your Resume for AI-Driven Hiring Systems",
      src: 'https://i.postimg.cc/7hZH0VdJ/Resume-for-AI-Driven-Hiring-Systems.jpg',
      alt: "Resume for AI-Driven Hiring Systems",
    },
    {
      path: "/enhance-resume-visibility",
      title: "Enhance Resume Visibility And Download free Resume Now",
      src: 'https://i.postimg.cc/d0hdxfS8/enhace-cv-visibility.jpg',
      alt: "Enhance Resume Visibility",
    },
    {
      path: "/tool-for-resume-building",
      title: "Tool for Resume Building: Why Resumeera.xyz is the Best Option for You",
      src: 'https://i.postimg.cc/d0hdxfS8/enhace-cv-visibility.jpg',
      alt: "Tool for Resume Building",
    },
    {
      path: "/hundered-percent-free-resume-builder",
      title: "100% Free Resume Builder: Downlaod Now Your Free Resume",
      src: 'https://i.postimg.cc/d0hdxfS8/enhace-cv-visibility.jpg',
      alt: "100% Free Resume Builder",
    },
    {
      path: "/effective-cover-letter-tips",
      title: "Effective Cover Letter: Tips, Editing, and Free Download",
      src: 'https://i.postimg.cc/T3q2vZ3z/cover-letter-tips.webp',
      alt: "Effective Cover Letter: Tips, Editing, and Free Download",
    },
    {
      path: "/cover-letter-length-guide",
      title: "Cover Letter Length: How Long Should It Be to Make the Best Impression?",
      src: 'https://i.postimg.cc/rwCm4cmp/cover-letter-lenth.webp',
      alt: "Cover Letter Length",
    },
    {
      path: "/cover-letter-with-no-experience",
      title: "How to Write a Cover Letter with No Experience",
      src: 'https://i.postimg.cc/P5vzd6mZ/multi-page-resume-formatting.jpg',
      alt: "Cover Letter with No Experience",
    },
    {
      path: "/cover-letter-best-practices",
      title: "Cover Letter Best Practices:The most Template free download",
      src: 'https://i.postimg.cc/P5vzd6mZ/multi-page-resume-formatting.jpg',
      alt: "Cover Letter Best Practices",
    },
    {
      path: "/common-cover-letter-mistake",
      title: " The Most Common Cover Letter Mistake | 100% Free Download",
      src: 'https://i.postimg.cc/gkN2Vmyg/bg-mid.png',
      alt: "Common Cover Letter Mistake",
    },
    {
      path: "/cover-letter-for-recent-graduates",
      title: " Cover Letter for Recent Graduates: Guide And free download template",
      src: 'https://i.postimg.cc/jjLjZmqy/recent-graduate-cover-letter.jpg',
      alt: "Cover Letter for Recent Graduates",
    },
    {
      path: "/crafting-an-impactful-hr-manager-cover-letter",
      title: " Crafting an Impactful HR Manager Cover Letter: A Comprehensive Guide | ResumeEra",
      src: 'https://i.postimg.cc/mDP5Y48P/hr-manager-cover-letter.jpg',
      alt: "Crafting an Impactful HR Manager Cover Letter",
    },
    {
      path: "/short-cover-letter-sample-for-customer-service",
      title: " Short Cover Letter Sample for Customer Service: Edit and Download Now in Free",
      src: 'https://i.postimg.cc/pLWLV51P/short-cover-letter-for-costumer-services.jpg',
      alt: "Short Cover Letter Sample for Customer Service",
    },
    {
      path: "/short-cover-letter-sample-for-fresher",
      title: " Short Cover Letter Sample for Fresher: Free Template to Kickstart Your Career",
      src: 'https://i.postimg.cc/2jq1ZWwG/Short-Cover-Letter-Sample-for-Fresher.webp',
      alt: "Short Cover Letter Sample for Fresher",
    },
    {
      path: "/sample-cover-letter-for-job-application",
      title: "Sample Cover Letter for Job Application: Free Template to Secure Your Next Role",
      src: 'https://i.postimg.cc/sD913t7W/Sample-Cover-Letter-for-Job-Application.webp',
      alt: "Sample Cover Letter for Job Application",
    },
    {
      path: "/resume-vs-cover-letter-what-you-need-to-know",
      title: "Resume vs Cover Letter: Understanding the Differences and How to Use Them Effectively",
      src: 'https://i.postimg.cc/kgXyv7Mn/resume-vs-cover-letter.jpg',
      alt: "Resume vs Cover Letter",
    },
    {
      path: "/tips-for-writing-a-general-cover-letter",
      title: "General Cover Letter: Your Guide to Crafting an Effective One in 2025",
      src: 'https://i.postimg.cc/kgXyv7Mn/resume-vs-cover-letter.jpg',
      alt: "General Cover Letter",
    },
    {
      path: "/crafting-a-standout-civil-engineering-resume-for-freshers",
      title: "Crafting a Standout Civil Engineering Resume for Freshers | ResumeEra",
      src: 'https://i.postimg.cc/T2qLBKfq/Civil-Engineering-Resume-for-Freshers.jpg',
      alt: "Civil Engineering Resume for Freshers",
    },
    {
      path: "/crafting-an-outstanding-react-js-developer-resume",
      title: "Crafting an Outstanding React JS Developer Resume | ResumeEra",
      src: 'https://i.postimg.cc/T2qLBKfq/Civil-Engineering-Resume-for-Freshers.jpg',
      alt: "React JS Developer Resume",
    },
    {
      path: "/how-to-craft-an-impressive-assistant-professor-resume",
      title: "How to Craft an Impressive Assistant Professor Resume | ResumeEra",
      src: 'https://i.postimg.cc/T2qLBKfq/Civil-Engineering-Resume-for-Freshers.jpg',
      alt: "Assistant Professor Resume",
    },
    {
      path: "/how-to-write-the-perfect-electrician-resume-pdf",
      title: "How to Write the Perfect Electrician Resume Pdf| ResumeEra",
      src: 'https://i.postimg.cc/wjR7Qpcn/Electrician-Resume-pdf.jpg',
      alt: " Electrician Resume pdf",
    },
    {
      path: "/crafting-a-sample-resume-for-assistant-professor-fresher-pdf",
      title: "Crafting a Sample Resume for Assistant Professor Fresher PDF | ResumeEra",
      src: 'https://i.postimg.cc/wjR7Qpcn/Electrician-Resume-pdf.jpg',
      alt: "Sample Resume for Assistant Professor Fresher PDF",
    },
    {
      path: "/crafting-an-effective-servicenow-developer-resume",
      title: "Crafting an Effective ServiceNow Developer Resume | ResumeEra",
      src: 'https://i.postimg.cc/wjR7Qpcn/Electrician-Resume-pdf.jpg',
      alt: "Crafting an Effective ServiceNow Developer Resume",
    },
    {
      path: "/us-it-recruiter-resume-your-gateway-to-career-success",
      title: "US IT Recruiter Resume: Your Gateway to Career Success | ResumeEra",
      src: 'https://i.postimg.cc/RV7Z2Zmj/us-it-requireter-reusme-1.webp',
      alt: "US IT Recruiter Resume",
    },
    {
      path: "/how-to-write-an-automation-testing-resume-for-2-years-in-experience",
      title: "How to Write an Automation Testing Resume for 2 Years in Experience | ResumeEra",
      src: 'https://i.postimg.cc/NjmBP196/Automation-Testing-Resume.jpg',
      alt: "Automation Testing Resume for 2 Years in Experience",
    },
    {
      path: "/how-i-created-the-perfect-ayurveda-doctor-resume-that-got-me-interviews",
      title: "How I Created the Perfect Ayurveda Doctor Resume That Got Me Interviews | ResumeEra",
      src: 'https://i.postimg.cc/qMJ8TP9q/converted-image.webp',
      alt: "Ayurveda Doctor Resume",
    },
    {
      path: "/how-to-craft-the-perfect-bams-doctor-resume-that-will-land-you-interviews",
      title: "How to Craft the Perfect BAMS Doctor Resume That Will Land You Interviews | ResumeEra",
      src: 'https://i.postimg.cc/3NBfwg8v/How-to-Craft-the-Perfect-BAMS-Doctor-Resume-That-Will-Land-You-Interviews.png',
      alt: "BAMS Doctor Resume",
    },
    {
      path: "/how-to-honda-careers-resume-upload",
      title: "How to Successfully Upload Your Resume for Honda Careers | ResumeEra",
      src: 'https://i.postimg.cc/wvKwQ90F/How-to-Successfully-Upload-Your-Resume-for-Honda-Careers.png',
      alt: "Honda Careers resume upload",
    },
    {
      path: "/iti-fitter-resume-format",
      title: "ITI Fitter Resume Format: A Complete Guide for Crafting a Perfect Resume | ResumeEra",
      src: 'https://i.postimg.cc/R0S9KP7b/ITI-Fitter-Resume-Format.png',
      alt: "ITI Fitter Resume Format",
    },
    {
      path: "/process-associate-resume-format",
      title: "Crafting an Effective Process Associate Resume: Download with Guide | ResumeEra",
      src: 'https://i.postimg.cc/qMFmHQM6/Process-Associate-Resume.png',
      alt: "Process Associate Resume",
    },
    {
      path: "/crafting-an-outstanding-react-js-resume",
      title: "How to Build an Impressive React JS Resume with Resumeera.xyz | ResumeEra",
      src: 'https://i.postimg.cc/x8XpqGMc/Impressive-React-JS-Resume.png',
      alt: "React JS Resume",
    },
    {
      path: "/crafting-an-effective-resume-for-c++-developer",
      title: "Crafting an Effective Resume for C++ Developer: A Complete Guide | ResumeEra",
      src: 'https://i.postimg.cc/yYnrV0nH/Resume-for-a-C-Developer.png',
      alt: "Effective Resume for C++ Developer",
    },

    {
      path: "/marriage-biodata-in-hindi",
      title: "Marriage Biodata in Hindi  template: edit and Download now free",
      src: 'https://i.postimg.cc/BvSkhYKV/Marriage-Biodata-in-Hindi.png',
      alt: "Marriage Biodata in Hindi",
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
                <Link
                  to={post.path}
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
                </Link>
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
