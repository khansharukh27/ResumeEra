import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import Navbar from '../src/component/Navbar';
import TemplatePage from './component/TemplatePage';
import MainPage from './component/MainPage';
import resum1 from './image/resum1.jpg'
import resume7 from './image/resume7.png'
import resume2 from './image/resume2.jpg'
import resume3 from './image/resume3.jpg'
import resume4 from './image/resume4.jpg'
import resume6 from './image/resume6.jpg'
import resume8 from './image/resume8.png'
import resume9 from './image/resume9.png'
import resume10 from './image/resume10.png'
import resume11 from './image/resume11.png'
import resume12 from './image/resume12.png'
import resume13 from './image/resume13.png'
import resume14 from './image/resume14.png'
import MyResume from './component/MyResume';
import Preview from './component/previewfolder/Preview';
import Preview2 from './component/previewfolder/Preview2';
import Preview3 from './component/previewfolder/Preview3';
import Preview4 from './component/previewfolder/Preview4';
import Preview5 from './component/previewfolder/Preview5';
// import ResumeEra from './component/ResumeEra';
import Preview6 from './component/previewfolder/Preview6';
import Preview7 from './component/previewfolder/Preview7';
import Preview8 from './component/previewfolder/Preview8';
import Preview9 from './component/previewfolder/Preview9';
import Preview10 from './component/previewfolder/Preview10';
import Preview11 from './component/previewfolder/Preview11';
import Preview12 from './component/previewfolder/Preview12';
import Preview13 from './component/previewfolder/Preview13';
import Preview14 from './component/previewfolder/Preview14';
import Home from './component/Home';
// technical resume
import profetional_resume_3 from '../src/image/technical_Image/profetional_resume_3.jpg'
import profetional_resume_1 from '../src/image/technical_Image/profetional_resume_1.jpg'
import profetional_resume_2 from '../src/image/technical_Image/profetional_resume_2.jpg'
import profetional_resume_4 from '../src/image/technical_Image/profetional_resume_4.jpg'
import profetional_resume_5 from '../src/image/technical_Image/profetional_resume_5.jpg'
import profetional_resume_6 from '../src/image/technical_Image/profetional_resume_6.jpg'
import profetional_resume_7 from '../src/image/technical_Image/profetional_resume_7.jpg'
import Basic_Ats_Resume_Template from '../src/image/technical_Image/Basic_Ats_Resume_Template.png'
import Creative_ATS_Resume_Template from '../src/image/technical_Image/Creative-ATS-Resume-Template.png'
import Executive_ATS_Resume_Template from '../src/image/technical_Image/Executive-ATS-Resume-Template.png'
import Functional_ATS_Resume_Template from '../src/image/technical_Image/Functional-ATS-Resume-Template.png'
import Minimalist_ATS_Resume_Template from '../src/image/technical_Image/Minimalist-ATS-Resume-Template.png'
import Modern_ATS_Resume_Template from '../src/image/technical_Image/Minimalist-ATS-Resume-Template.png'
import Simple_ATS_Resume_Template from '../src/image/technical_Image/Simple-ATS-Resume-Template.png'
import Tech_ATS_Resume_Template from '../src/image/technical_Image/Tech-ATS-Resume-Template.png'
import Traditional_ATS_Resume_Template from '../src/image/technical_Image/Traditional-ATS-Resume-Template.png'
import Preview103 from './component/previewfolder/Preview103';
import Preview101 from './component/previewfolder/Preview101';
import Preview102 from './component/previewfolder/Preview102';
import Preview104 from './component/previewfolder/Preview104';
import Preview105 from './component/previewfolder/Preview105';
import Preview106 from './component/previewfolder/Preview106';
import Preview107 from './component/previewfolder/Preview107';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsAndServices from './component/TermsAndServices';
import Contact from './component/Contact';
import ImportantPost from './component/ImportantPost';
import HowToCreateResume from './component/Important_post/HowToCreateResume';
import TipsForWritingCoverLetter from './component/Important_post/TipsForWritingCoverLetter';
import WhySoftSkillsMatter from './component/Important_post/WhySoftSkillsMatter';
import TopResumeTemplates2024 from './component/Important_post/TopResumeTemplates2024';
import CommonMistakesToAvoid from './component/Important_post/CommonMistakesToAvoid';
import ChooseTemplate from './component/Important_post/ChooseTemplate';
import FirstJobResume from './component/Important_post/FirstJobResume';
import HighlightAchievements from './component/Important_post/HighlightAchievements';
import ExperiencedResumeTips from './component/Important_post/ExperiencedResumeTips';
import ModernResumeCrafting from './component/Important_post/ModernResumeCrafting';
import CorrectResumeFormatting from './component/Important_post/CorrectResumeFormatting';
import EmployerResumeExpectations from './component/Important_post/EmployerResumeExpectations';
import ResumeKeywords from './component/Important_post/ResumeKeywords';
import ActionVerbsResume from './component/Important_post/ActionVerbsResume';
import InternationalResume from './component/Important_post/InternationalResume';
import ResumeVsCV from './component/Important_post/ResumeVsCV';
import ShowcaseEducation from './component/Important_post/ShowcaseEducation';
import ResumeNoExperience from './component/Important_post/ResumeNoExperience';
import ResumeCareerChange from './component/Important_post/ResumeCareerChange';
import ResumeRemoteJobs from './component/Important_post/ResumeRemoteJobs';
import ResumeTipsComponent from './component/Important_post/ResumeTipsComponent';
import XYZFormula from './component/Important_post/XYZFormula';
import GoogleForm from './component/GoogleForm';
import NotFoundPage from './component/Important_post/NotFoundPage';
import AboutResumeEra from './component/Important_post/AboutResumeEra';
import CoverLetter from './component/CoverLetter';
import cover_letter_1 from '../src/image/CoverImage/cover_letter_1.png'
import cover_letter_2 from '../src/image/CoverImage/cover_letter_2.webp'
import cover_letter_3 from '../src/image/CoverImage/cover_letter_3.webp'

import ResumeComponent from './component/Important_post/ResumeComponent';
import ThingsToRemoveFromYourCV from './component/Important_post/ThingsToRemoveFromYourCV';
import Tip_For_Interview from './component/Important_post/Tip_For_Interview';
import AnupamKher_resume from './component/Important_post/AnupamKher_resume';
import Blog_Career from './component/Important_post/Blog_Career';
import DreamJob2024 from './component/blogandcareer/DreamJob2024';
import TopJobSearchWebsites from './component/blogandcareer/TopJobSearchWebsites';
import CoverComponent from './component/CoverComponent';
import Networking_tips from './component/blogandcareer/Networking_tips';
import LinkedInJobHunting from './component/blogandcareer/LinkedInJobHunting';
import Preview201 from './component/coverletterFolder/Preview201';
import Follow_Up_After_A_Job_Interview from './component/blogandcareer/Follow_Up_After_A_Job_Interview';
import Preview202 from './component/coverletterFolder/Preview202';
import CoverLettermain from './component/CoverLettermain';
import SalaryNegotiationComponent from './component/blogandcareer/SalaryNegotiation';
import BestOnlineCVBuilder from './component/blogandcareer/BestOnlineCVBuilder';
import BestAIResumeBuilder from './component/blogandcareer/BestAIResumeBuilder';
import FreeOnlineResumeMaker from './component/blogandcareer/FreeOnlineResumeMaker';
import FreeResumeSitesComponent from './component/Important_post/FreeResumeSitesComponent';
import Preview114 from './component/previewfolder/Preview114';
import Preview113 from './component/previewfolder/Preview113';
import Preview112 from './component/previewfolder/Preview112';
import Preview111 from './component/previewfolder/Preview111';
import Preview110 from './component/previewfolder/Preview110';
import Preview109 from './component/previewfolder/Preview109';
import Preview108 from './component/previewfolder/Preview108';
import Preview115 from './component/previewfolder/Preview115';
import Preview116 from './component/previewfolder/Preview116';
import TailorResumeComponent from './component/Important_post/TailorResumeComponent';
import FreeResumeBuilder from './component/Important_post/FreeResumeBuilder';
import ResumeTrends2024 from './component/Important_post/ResumeTrends2024';
import RemoteWorkExperience from './component/Important_post/RemoteWorkExperience';
import HowToWriteAResume from './component/Important_post/HowToWriteAResume';
import WhyWorkHere from './component/blog/WhyWorkHere';
import InterviewQuestionPost from './component/InterviewQuestionPost';
import TellUsAboutYourself from './component/blog/TellUsAboutYourself';
import WhyShouldWeHireYou from './component/blog/WhyShouldWeHireYou';
import WhyDoYouWantToWork from './component/blog/WhyDoYouWantToWork';
import ATS2024 from './component/blogandcareer/ATS2024';
import TailorResume from './component/blogandcareer/TailorResume';
import WhatAreYourStrengths from './component/blog/WhatAreYourStrengths';
import HowEmployerDescribeYou from './component/blog/HowEmployerDescribeYou';
import GreatestWeakness from './component/blog/GreatestWeakness';
import HobbiesInterests from './component/blog/HobbiesInterests';
import WhatDoesSuccessLookLikeToYou from './component/blog/WhatDoesSuccessLookLikeToYou';
import WhyAreYouQualifiedForThisPosition from './component/blog/WhyAreYouQualifiedForThisPosition';
import SkillsForSuccess from './component/blog/SkillsForSuccess';
import WorkPreference from './component/blog/WorkPreference';
import DifficultCustomerExample from './component/blog/DifficultCustomerExample';
import ResumeGuide from './component/blogandcareer/ResumeGuide';
import EditablePage from './component/editablePage/EditablePage';
import JobGapExplanation from './component/blog/JobGapExplanation';
import BuildRelationshipsWithCoworkers from './component/blog/BuildRelationshipsWithCoworkers';
// import CoverLetterInput from './component/CoverLetterInput';
// import CoverComponent from './component/CoverComponent';
var images = [
  { id: 1, src: resum1, alt: 'Professional Resume Template 1' },
  { id: 2, src: resume2, alt: 'Modern Resume Design 2' },
  { id: 3, src: resume3, alt: 'Creative Resume Layout 3' },
  { id: 4, src: resume4, alt: 'Elegant Resume Example 4' },
  // { id: 5, src: resume5, alt: 'Minimalist Resume Style 5' }, // Uncomment if used
  { id: 6, src: resume6, alt: 'Corporate Resume Format 6' },
  { id: 7, src: resume7, alt: 'Academic Resume Sample 7' },
  { id: 8, src: resume8, alt: 'Infographic Resume Design 8' },
  { id: 9, src: resume9, alt: 'Simple Resume Template 9' },
  { id: 10, src: resume10, alt: 'Stylish Resume Example 10' },
  { id: 11, src: resume11, alt: 'Functional Resume Format 11' },
  { id: 12, src: resume12, alt: 'Colorful Resume Design 12' },
  { id: 13, src: resume13, alt: 'Executive Resume Template 13' },
  { id: 14, src: resume14, alt: 'Digital Resume Layout 14' },
];

var techImages = [
  {id:101, src: profetional_resume_1, alt : 'auto cade resume'},
  {id:103, src: profetional_resume_3, alt : 'image3'},
  {id:102, src: profetional_resume_2, alt : 'manager resume'},  
  {id:104, src: profetional_resume_4, alt : 'hospital resume'}
  ,{id:105, src: profetional_resume_5, alt : 'hospital resume'}
  ,{id:106, src: profetional_resume_6, alt : 'hospital resume'}
  ,{id:107, src: profetional_resume_7, alt : 'hospital resume'}
  ,{id:108, src: Basic_Ats_Resume_Template, alt : 'Basic Ats Resume Template'}
  ,{id:109, src: Creative_ATS_Resume_Template, alt : 'Creative ATS Resume Template'}
  ,{id:110, src: Executive_ATS_Resume_Template, alt : 'Executive ATS Resume Template'}
  ,{id:111, src: Functional_ATS_Resume_Template, alt : 'Functional ATS Resume Template'}
  ,{id:112, src: Minimalist_ATS_Resume_Template, alt : 'Minimalist-ATS-Resume-Template'}
  ,{id:113, src: Modern_ATS_Resume_Template, alt : 'Modern Ats Resume template'}
  ,{id:114, src: Simple_ATS_Resume_Template, alt : 'Simple-ATS-Resume-Template'}
  ,{id:115, src: Tech_ATS_Resume_Template, alt : 'Tech-ATS-Resume-Template'}
  ,{id:116, src: Traditional_ATS_Resume_Template, alt : 'Traditional-ATS-Resume-Template'}
]

const CoverImage = [
  {id:201, src: cover_letter_1, alt: 'cover leter'},
  {id:202, src: cover_letter_2, alt: 'INTERNSHIP'},
  {id:203, src: cover_letter_3, alt: 'TEACHER'},
]
console.log('images:=',images)
console.log(images[0].id)
const path = 'mainpage'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Router style={{ backgroundColor: 'black',width:'100%' }}>
      <Navbar />
      <Routes style={{ width:'100%' }}>
        <Route path='/login_form' element={<GoogleForm/>}/>
        <Route path='/' element={<Home images = {images}/>}/>
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/template' exact element={<TemplatePage images={images} techImages = {techImages} CoverImage = {CoverImage}/>} />
        {images.map((image) => (
          <Route key={image.id} path={`/mainpage/${image.id}`} 
          element={<MainPage path={`/${path}/${image.id}`} images={images} CoverImage = {CoverImage} />}/>
        ))}
        {techImages.map((image) => (
          <Route key={image.id} path={`/techmain/${image.id}`} 
          element={<MainPage path={`/${path}/${image.id}`} techImages={techImages} />}/>
        ))}
        {CoverImage.map((image) => (
          <Route key={image.id} path={`/cover_letter/${image.id}`} 
          element={<CoverLettermain path={`/${path}/${image.id}`} CoverImage={CoverImage} />}/>
        ))}
                
        <Route path='/myresume' element={<MyResume />} />
        <Route path='/cover_letter' element={<CoverLetter CoverImage={CoverImage}/>}/>
        <Route path='/coverletter_component' element={<CoverComponent CoverImage={CoverImage}/>}/>
        {/* <Route path=`/cover_lett` element={<CoverLetterInput CoverImage={CoverImage}/>}/> */}
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/terms-of-service' element={<TermsAndServices />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Interview_Question_Post' element={<InterviewQuestionPost/>}/>
        <Route path='/important_post' element={<ImportantPost/>} />
        <Route path='/about-resumeera' element={<AboutResumeEra/>} />
        <Route path='/how-to-create-a-professional-resume' element={<HowToCreateResume/>} />
        <Route path='/tips-for-writing-a-cover-letter' element={<TipsForWritingCoverLetter/>} />
        <Route path='/why-soft-skills-matter' element={<WhySoftSkillsMatter/>} />
        <Route path='/top-resume-templates-for-2024' element={<TopResumeTemplates2024/>} />
        <Route path='/common-mistakes-to-avoid-on-your-resume' element={<CommonMistakesToAvoid/>} />
        <Route path='/how-to-choose-the-right-resume-template' element={<ChooseTemplate />} />
       <Route path='/creating-a-resume-for-your-first-job' element={<FirstJobResume />} />
         <Route path='/how-to-highlight-achievements-in-a-resume' element={<HighlightAchievements />} />
         <Route path='/resume-tips-for-experienced-professionals' element={<ExperiencedResumeTips />} />
        <Route path='/crafting-a-modern-resume' element={<ModernResumeCrafting />} />
        <Route path='/how-to-format-a-resume-correctly' element={<CorrectResumeFormatting />} />
        <Route path='/what-employers-look-for-in-a-resume' element={<EmployerResumeExpectations />} />
      <Route path='/how-to-use-keywords-in-a-resume' element={<ResumeKeywords />} />
         <Route path='/improving-your-resume-with-action-verbs' element={<ActionVerbsResume />} />
       <Route path='/how-to-create-a-resume-for-international-jobs' element={<InternationalResume />} />
          <Route path='/resume-vs-cv-what-you-need-to-know' element={<ResumeVsCV/>} />
        <Route path='/how-to-showcase-your-education-in-a-resume' element={<ShowcaseEducation />} />
        <Route path='/creating-a-resume-with-no-experience' element={<ResumeNoExperience/>} />
        <Route path='/how-to-write-a-resume-for-career-change' element={<ResumeCareerChange/>} />
        <Route path='/resume-writing-tips-for-remote-jobs' element={<ResumeRemoteJobs />} />
        <Route path='/resume-tip-component' element={<ResumeTipsComponent />} />
        <Route path='/xyz-formula-resume' element={<XYZFormula />} />
        <Route path='/resume_component' element={<ResumeComponent/>}/>
        <Route path='/Things_To_Remove_From_Your_Cv' element={<ThingsToRemoveFromYourCV/>}/>
        <Route path='/Tip_for_Interview' element={<Tip_For_Interview/>}/>
        <Route path='/AnupamKher_resume' element={<AnupamKher_resume/>}/>
        <Route path='/free_resumesites_component' element={<FreeResumeSitesComponent/>}/>
        <Route path='/tailor-resume-job-description-chatgpt' element={<TailorResumeComponent/>}/>
        <Route path='/resume-trends-2024' element={<ResumeTrends2024/>}/>
        <Route path='/remote-work-experience' element={<RemoteWorkExperience/>}/>
        <Route path='/how-to-write-a-resume-in-7-easy-steps' element={<HowToWriteAResume/>}/>
        <Route path='/what-are-your-strengths' element={<WhatAreYourStrengths/>}/>


        {/* interview quation and answer*/}

        <Route path='/Why_Work_Here' element={<WhyWorkHere/>}/>
        <Route path='/tell-us-about-yourself' element={<TellUsAboutYourself/>}/>
        <Route path='/why-should-we-hire-you' element={<WhyShouldWeHireYou/>}/>
        <Route path='/why_do_you_want_to_work' element={<WhyDoYouWantToWork/>}/>
        <Route path='/how-employer-describe' element={<HowEmployerDescribeYou/>}/>
        <Route path='/greatest-weakness' element={<GreatestWeakness/>}/>
        <Route path='/hobbies-interests' element={<HobbiesInterests/>}/>
        <Route path='/what-does-success-look-like-to-you' element={<WhatDoesSuccessLookLikeToYou/>}/>
        <Route path='/why-are-you-qualified-for-this-position' element={<WhyAreYouQualifiedForThisPosition/>}/>
        <Route path='/skills-for-success-in-role' element={<SkillsForSuccess/>}/>
        <Route path='/work-alone-or-group-preference' element={<WorkPreference/>}/>
        <Route path='/dealing-with-difficult-customers' element={<DifficultCustomerExample/>}/>



        {/* job and carier blog component */}
        
        <Route path='/Blog_or_Career_Tips_Page' element={<Blog_Career/>}/>
        <Route path='/how-to-land-your-dream-job' element={<DreamJob2024/>}/>
        <Route path='top-job-search-websites' element={<TopJobSearchWebsites/>}/>
        <Route path='/networking-tips' element={<Networking_tips/>}/>
        <Route path='/linkedin-job-hunting' element={<LinkedInJobHunting/>}/>
        <Route path='/follow-up-after-interview' element={<Follow_Up_After_A_Job_Interview/>}/>
        <Route path='/Salary_Negotiation_Component' element={<SalaryNegotiationComponent/>}/>
        <Route path='/Best_Online_CV_Builder' element={<BestOnlineCVBuilder/>}/>
        <Route path='/Best_AI_Resume_Builder' element={<BestAIResumeBuilder/>}/>
        <Route path='/free-online-resume-maker' element={<FreeOnlineResumeMaker/>}/>
        <Route path='/free-resume-builder' element={<FreeResumeBuilder/>}/>
        <Route path='/9-things-you-need-to-know-about-ATS-in-2024' element={<ATS2024/>}/>
        <Route path='/tailor-resume-to-job-description' element={<TailorResume/>}/>
        <Route path='/recruiters-guide-writing-resume' element={<ResumeGuide/>}/>
        <Route path='/why-do-you-have-a-gap-in-your-job-history' element={<JobGapExplanation/>}/>
        <Route path='/how-to-build-relationships-with-your-coworkers' element={<BuildRelationshipsWithCoworkers/>}/>




        <Route path='/preview' element={<Preview />} />
        <Route path='/preview2' element={<Preview2 />}/>
        <Route path='/preview3' element={<Preview3/>}/>
        <Route path='/preview4' element={<Preview4/>}/>
        <Route path='/preview5' element={<Preview5/>}/>
        <Route path='/preview6' element={<Preview6/>}/>
        <Route path='/preview7' element={<Preview7/>}/>
        <Route path='/preview8' element={<Preview8/>}/>
        <Route path='/preview9' element={<Preview9/>}/>
        <Route path='/preview10' element={<Preview10/>}/>
        <Route path='/preview11' element={<Preview11 />}/>
        <Route path='/preview12' element={<Preview12/>}/>
        <Route path='/preview13' element={<Preview13/>}/>
        {/* Technical resume link */}
        <Route path='/preview14' element={<Preview14/>}/>
        <Route path='/preview101' element={<Preview101/>}/>
        <Route path='/preview102' element={<Preview102/>}/>
        <Route path='/preview103' element={<Preview103/>}/>
        <Route path='/preview104' element={<Preview104/>}/>
        <Route path='/preview105' element={<Preview105/>}/>
        <Route path='/preview106' element={<Preview106/>}/>
        <Route path='/preview107' element={<Preview107/>}/>
        <Route path='/preview108' element={<Preview108/>}/>
        <Route path='/preview109' element={<Preview109/>}/>
        <Route path='/preview110' element={<Preview110/>}/>
        <Route path='/preview111' element={<Preview111/>}/>
        <Route path='/preview112' element={<Preview112/>}/>
        <Route path='/preview113' element={<Preview113/>}/>
        <Route path='/preview114' element={<Preview114/>}/>
        <Route path='/preview115' element={<Preview115/>}/>
        <Route path='/preview116' element={<Preview116/>}/>

        {/* CoverLetter Link */}
        <Route path='/preview/201' element={<Preview201/>}/>
        <Route path='/preview/202' element={<Preview202/>}/>
        <Route path='/EditablePage' element={<EditablePage/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
