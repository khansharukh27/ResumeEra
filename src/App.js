import React, { useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthWrapper from "../src/component/signupAndLogin/AuthWrapper";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "../src/component/Navbar";
import TemplatePage from "./component/TemplatePage";
import MainPage from "./component/MainPage";
import resum1 from "./image/resum1.jpg";
import resume7 from "./image/resume7.png";
import resume2 from "./image/resume2.jpg";
import resume3 from "./image/resume3.jpg";
import resume4 from "./image/resume4.jpg";
import resume6 from "./image/resume6.jpg";
import resume8 from "./image/resume8.png";
import resume9 from "./image/resume9.png";
import resume10 from "./image/resume10.png";
import resume11 from "./image/resume11.png";
import resume12 from "./image/resume12.png";
import resume13 from "./image/resume13.png";
import resume14 from "./image/resume14.png";
import MyResume from "./component/MyResume";
import Preview from "./component/previewfolder/Preview";
import Preview2 from "./component/previewfolder/Preview2";
import Preview3 from "./component/previewfolder/Preview3";
import Preview4 from "./component/previewfolder/Preview4";
import Preview5 from "./component/previewfolder/Preview5";
// import ResumeEra from './component/ResumeEra';
import Preview6 from "./component/previewfolder/Preview6";
import Preview7 from "./component/previewfolder/Preview7";
import Preview8 from "./component/previewfolder/Preview8";
import Preview9 from "./component/previewfolder/Preview9";
import Preview10 from "./component/previewfolder/Preview10";
import Preview11 from "./component/previewfolder/Preview11";
import Preview12 from "./component/previewfolder/Preview12";
import Preview13 from "./component/previewfolder/Preview13";
import Preview14 from "./component/previewfolder/Preview14";
import Home from "./component/Home";
// technical resume
import profetional_resume_3 from "../src/image/technical_Image/profetional_resume_3.jpg";
import profetional_resume_1 from "../src/image/technical_Image/profetional_resume_1.jpg";
import profetional_resume_2 from "../src/image/technical_Image/profetional_resume_2.jpg";
import profetional_resume_4 from "../src/image/technical_Image/profetional_resume_4.jpg";
import profetional_resume_5 from "../src/image/technical_Image/profetional_resume_5.jpg";
import profetional_resume_6 from "../src/image/technical_Image/profetional_resume_6.jpg";
import profetional_resume_7 from "../src/image/technical_Image/profetional_resume_7.jpg";
import Basic_Ats_Resume_Template from "../src/image/technical_Image/Basic_Ats_Resume_Template.png";
import Creative_ATS_Resume_Template from "../src/image/technical_Image/Creative-ATS-Resume-Template.png";
import Executive_ATS_Resume_Template from "../src/image/technical_Image/Executive-ATS-Resume-Template.png";
import Functional_ATS_Resume_Template from "../src/image/technical_Image/Functional-ATS-Resume-Template.png";
import Minimalist_ATS_Resume_Template from "../src/image/technical_Image/Minimalist-ATS-Resume-Template.png";
import Modern_ATS_Resume_Template from "../src/image/technical_Image/Minimalist-ATS-Resume-Template.png";
import Simple_ATS_Resume_Template from "../src/image/technical_Image/Simple-ATS-Resume-Template.png";
import Tech_ATS_Resume_Template from "../src/image/technical_Image/Tech-ATS-Resume-Template.png";
import Traditional_ATS_Resume_Template from "../src/image/technical_Image/Traditional-ATS-Resume-Template.png";
import Preview103 from "./component/previewfolder/Preview103";
import Preview101 from "./component/previewfolder/Preview101";
import Preview102 from "./component/previewfolder/Preview102";
import Preview104 from "./component/previewfolder/Preview104";
import Preview105 from "./component/previewfolder/Preview105";
import Preview106 from "./component/previewfolder/Preview106";
import Preview107 from "./component/previewfolder/Preview107";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsAndServices from "./component/TermsAndServices";
import Contact from "./component/Contact";
import ImportantPost from "./component/ImportantPost";
import HowToCreateResume from "./component/ImportantPost/HowToCreateResume";
import TipsForWritingCoverLetter from "./component/ImportantPost/TipsForWritingCoverLetter";
import WhySoftSkillsMatter from "./component/ImportantPost/WhySoftSkillsMatter";
import TopResumeTemplates2024 from "./component/ImportantPost/TopResumeTemplates2024";
import CommonMistakesToAvoid from "./component/ImportantPost/CommonMistakesToAvoid";
import ChooseTemplate from "./component/ImportantPost/ChooseTemplate";
import FirstJobResume from "./component/ImportantPost/FirstJobResume";
import HighlightAchievements from "./component/ImportantPost/HighlightAchievements";
import ExperiencedResumeTips from "./component/ImportantPost/ExperiencedResumeTips";
import ModernResumeCrafting from "./component/ImportantPost/ModernResumeCrafting";
import CorrectResumeFormatting from "./component/ImportantPost/CorrectResumeFormatting";
import EmployerResumeExpectations from "./component/ImportantPost/EmployerResumeExpectations";
import ResumeKeywords from "./component/ImportantPost/ResumeKeywords";
import ActionVerbsResume from "./component/ImportantPost/ActionVerbsResume";
import InternationalResume from "./component/ImportantPost/InternationalResume";
import ResumeVsCV from "./component/ImportantPost/ResumeVsCV";
import ShowcaseEducation from "./component/ImportantPost/ShowcaseEducation";
import ResumeNoExperience from "./component/ImportantPost/ResumeNoExperience";
import ResumeCareerChange from "./component/ImportantPost/ResumeCareerChange";
import ResumeRemoteJobs from "./component/ImportantPost/ResumeRemoteJobs";
import ResumeTipsComponent from "./component/ImportantPost/ResumeTipsComponent";
import XYZFormula from "./component/ImportantPost/XYZFormula";
import NotFoundPage from "./component/ImportantPost/NotFoundPage";
import AboutResumeEra from "./component/ImportantPost/AboutResumeEra";
import CoverLetter from "./component/CoverLetter";
import cover_letter_1 from "../src/image/CoverImage/cover_letter_1.png";
import cover_letter_2 from "../src/image/CoverImage/cover_letter_2.webp";
import cover_letter_3 from "../src/image/CoverImage/cover_letter_3.webp";
import basic_cover_letter_template from "../src/image/CoverImage/basic-cover-letter-template.png";
import college_cover_letter_template from "../src/image/CoverImage/college-cover-letter-template.png";
import combined_cover_letter_template from "../src/image/CoverImage/combined-cover-letter-template.png";
import creative_cover_letter_template from "../src/image/CoverImage/creative-cover-letter-template.png";
import executive_cover_letter_template from "../src/image/CoverImage/executive-cover-letter-template.png";
import functional_cover_letter_template from "../src/image/CoverImage/functional-cover-letter-template.png";
import general_cover_letter_template from "../src/image/CoverImage/general-cover-letter-template.png";
import hybrid_cover_letter_template from "../src/image/CoverImage/hybrid-cover-letter-template.png";
import it_cover_letter_template from "../src/image/CoverImage/it-cover-letter-template.png";
import minimalist_cover_letter_template from "../src/image/CoverImage/minimalist-cover-letter-template.png";
import modern_cover_letter_template from "../src/image/CoverImage/modern-cover-letter-template.png";
import professional_cover_letter_template from "../src/image/CoverImage/professional-cover-letter-template.png";
import simple_covder_letter_template from "../src/image/CoverImage/simple-cover-letter-template.png";
import tech_cover_letter_template from "../src/image/CoverImage/tech-cover-letter-template.png";
import traditional_cover_letter_template from "../src/image/CoverImage/traditional-cover-letter-template.png";
import skill_based_cover_letter_template from "../src/image/CoverImage/skill-based-cover-letter-template.png";
import Preview301 from "./component/previewfolder/Preview301.jsx";
import Preview302 from "./component/previewfolder/Preview302.jsx";
import Preview303 from "./component/previewfolder/Preview303.jsx";
import Preview304 from "./component/previewfolder/Preview304.jsx";
import Preview305 from "./component/previewfolder/Preview305.jsx";
import Preview306 from "./component/previewfolder/Preview306.jsx";
import Preview307 from "./component/previewfolder/Preview307.jsx";
import Preview308 from "./component/previewfolder/Preview308.jsx";
import ResumeComponent from "./component/ImportantPost/ResumeComponent";
import ThingsToRemoveFromYourCV from "./component/ImportantPost/ThingsToRemoveFromYourCV";
import TipForInterview from "./component/ImportantPost/TipForInterview";
import AnupamKherResume from "./component/ImportantPost/AnupamKherResume";
import BlogCareer from "./component/ImportantPost/BlogCareer";
import DreamJob2024 from "./component/blogandcareer/DreamJob2024";
import TopJobSearchWebsites from "./component/blogandcareer/TopJobSearchWebsites";
import CoverComponent from "./component/CoverComponent";
import NetworkingTips from "./component/blogandcareer/NetworkingTips";
import LinkedInJobHunting from "./component/blogandcareer/LinkedInJobHunting";
import Preview201 from "./component/coverletterFolder/Preview201";
import FollowUpAfterAJobInterview from "./component/blogandcareer/FollowUpAfterAJobInterview";
import Preview202 from "./component/coverletterFolder/Preview202";
import CoverLettermain from "./component/CoverLettermain";
import SalaryNegotiationComponent from "./component/blogandcareer/SalaryNegotiation";
import BestOnlineCVBuilder from "./component/blogandcareer/BestOnlineCVBuilder";
import BestAIResumeBuilder from "./component/blogandcareer/BestAIResumeBuilder";
import FreeOnlineResumeMaker from "./component/blogandcareer/FreeOnlineResumeMaker";
import FreeResumeSitesComponent from "./component/ImportantPost/FreeResumeSitesComponent";
import Preview114 from "./component/previewfolder/Preview114";
import Preview113 from "./component/previewfolder/Preview113";
import Preview112 from "./component/previewfolder/Preview112";
import Preview111 from "./component/previewfolder/Preview111";
import Preview110 from "./component/previewfolder/Preview110";
import Preview109 from "./component/previewfolder/Preview109";
import Preview108 from "./component/previewfolder/Preview108";
import Preview115 from "./component/previewfolder/Preview115";
import Preview116 from "./component/previewfolder/Preview116";
import TailorResumeComponent from "./component/ImportantPost/TailorResumeComponent";
import FreeResumeBuilder from "./component/ImportantPost/FreeResumeBuilder";
import ResumeTrends2024 from "./component/ImportantPost/ResumeTrends2024";
import RemoteWorkExperience from "./component/ImportantPost/RemoteWorkExperience";
import HowToWriteAResume from "./component/ImportantPost/HowToWriteAResume";
import WhyWorkHere from "./component/blog/WhyWorkHere";
import InterviewQuestionPost from "./component/InterviewQuestionPost";
import TellUsAboutYourself from "./component/blog/TellUsAboutYourself";
import WhyShouldWeHireYou from "./component/blog/WhyShouldWeHireYou";
import WhyDoYouWantToWork from "./component/blog/WhyDoYouWantToWork";
import ATS2024 from "./component/blogandcareer/ATS2024";
import TailorResume from "./component/blogandcareer/TailorResume";
import WhatAreYourStrengths from "./component/blog/WhatAreYourStrengths";
import HowEmployerDescribeYou from "./component/blog/HowEmployerDescribeYou";
import GreatestWeakness from "./component/blog/GreatestWeakness";
import HobbiesInterests from "./component/blog/HobbiesInterests";
import WhatDoesSuccessLookLikeToYou from "./component/blog/WhatDoesSuccessLookLikeToYou";
import WhyAreYouQualifiedForThisPosition from "./component/blog/WhyAreYouQualifiedForThisPosition";
import SkillsForSuccess from "./component/blog/SkillsForSuccess";
import WorkPreference from "./component/blog/WorkPreference";
import DifficultCustomerExample from "./component/blog/DifficultCustomerExample";
import ResumeGuide from "./component/blogandcareer/ResumeGuide";
import EditablePage from "./component/editablePage/EditablePage";
import JobGapExplanation from "./component/blog/JobGapExplanation";
import BuildRelationshipsWithCoworkers from "./component/blog/BuildRelationshipsWithCoworkers";
import ResumeMistakes from "./component/blogandcareer/ResumeMistakes";
import RejectionReasonsComponent from "./component/blogandcareer/RejectionReasonsComponent";
// import CVWritingTipsComponent from './component/ImportantPost/CVWritingTipsComponent2';
import CVWritingTipsComponent2 from "./component/ImportantPost/CVWritingTipsComponent2";
import HowDoYouHandleStressAndPressure from "./component/blog/HowDoYouHandleStressAndPressure";
import FiveYearPlanComponent from "./component/blog/FiveYearPlanComponent";
import MotivationToDoBestWork from "./component/blog/MotivationToDoBestWork";
import HandleFeedbackAndCriticism from "./component/blog/HandleFeedbackAndCriticism";
import JobHunting from "./component/Job hunting/JobHunting";
import JobIntrovertComponent from "./component/Job hunting/JobIntrovertComponent";
import JobHoppingAsset from "./component/Job hunting/JobHoppingAsset";
import CareerTraps from "./component/blogandcareer/CareerTraps";
import WorkExperience from "./component/WorkExperience";
import SoftSkills from "./component/SoftSkills";
import SocialMedia from "./component/SocialMedia";
import References from "./component/Refrences";
import PersonalInfo from "./component/PersonalInfo";
import Language from "./component/Language";
import KeySkills from "./component/KeySkill";
import HonorAndAward from "./component/HonorAndAward";
import Hobbies from "./component/Hobbies";
import Education from "./component/Education";
import Certificate from "./component/Certificate";
import AccomplishmentQuestion from "./component/blog/AccomplishmentQuestion";
import QuestionsForUs from "./component/blog/QuestionsForUs";
import MotivationLink from "./component/MotivationLink";
import TypesOfLaziness from "./component/MOTIVATIONAL/TypesOfLaziness";
import Pictures8 from "./component/MOTIVATIONAL/Pictures8";
import ResumeHacks from "./component/blogandcareer/ResumeHacks_10";
import Linkedin from "./indeedRssFeed/sociableLinkedin/Linkedin";
import MotivationalCareerQuotes from "./component/MOTIVATIONAL/MotivationalCareerQuotes";
import Login from "./component/signupAndLogin/Login";
import MotivateToStudy from "./component/MOTIVATIONAL/MotivateToStudy";
import RemoveBadHabits from "./component/MOTIVATIONAL/RemoveBadHabits";
import {
  loadCoverImages,
  loadImages,
  loadTechImages,
  marriedImage,
} from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import CoverLetterGuide from "./component/ImportantPost/CoverLetterGuide";
import HowToMakeResume2024 from "./component/ImportantPost/HowToMakeResume2024";
import CareerTruths from "./component/MOTIVATIONAL/CareerTruths";
import WorkplaceStressGuide from "./component/blogandcareer/WorkplaceStressManagement";
import AIBiasInHiring from "./component/blogandcareer/AIBiasInHiring";
import SleepAndProductivity from "./component/blogandcareer/SleepAndProductivity";
import ResearchCompanyTips from "./component/blogandcareer/ResearchCompanyTips";
import SoftSkillsArticle from "./component/blogandcareer/SoftSkillsArticle";
import RecruitingDifferencesSection from "./component/blogandcareer/RecruitingDifferencesSection";
import CyberSecurittyResume from "./component/ImportantPost/CyberSecurityResume";
import CVTips2024 from "./component/ImportantPost/CVTips2024";
import CvVsResume from "./component/ImportantPost/CvVsResume";
import FreeResumeBuilderForResumeEra from "./component/ImportantPost/FreeResumeBuilderForResumeEra";
import AtsFormattingMistake from "./component/ImportantPost/AtsFormattingMistake";
import ItCoverLetter from "./component/ImportantPost/ItCoverLetter";
import ManagementCoverLetter from "./component/ImportantPost/ManagementCoverLetter";
import MechanicalEngineeringCoverLetterHelmet from "./component/ImportantPost/MechanicalEngineeringCoverLetterHelmet";
import AdministrativeAssistantCoverLetter from "./component/ImportantPost/AdministrativeAssistantCoverLetter";
import LawyerCoverLetter from "./component/ImportantPost/LawyerCoverLetter";
import FormattinResume from "./component/ImportantPost/FormattinResume";
import FresherResumeFormatting from "./component/ImportantPost/FresherResumeFormatting";
import ResumeFormatingForEntryLevel from "./component/ImportantPost/ResumeFormatingForEntryLevel";
import ResumeFormattingStepsForFresher from "./component/ImportantPost/ResumeFormattingStepsForFresher";
import ATS_Friendly_Resume_Format_for_Beginners from "./component/ImportantPost/ATS_Friendly_Resume_Format_for_Beginners";
import Simple_Resume_Formatting from "./component/ImportantPost/Simple_Resume_Formatting";
import FresherResumeMistakes from "./component/ImportantPost/FresherResumeMistakes";
import ResumeTipuForCollegeGraduates from "./component/ImportantPost/ResumeTipuForCollegeGraduates";
import ResumeFormattingFirstTimeJobSeekers from "./component/ImportantPost/ResumeFormattingFirstTimeJobSeekers";
import FresherResumeFormattingComponentWithFontAndLayout from "./component/ImportantPost/FresherResumeFormattingComponentWithFontAndLayout";
import ProfessionalResumeFormatforExperiencedCandidates from "./component/ImportantPost/ProfessionalResumeFormatforExperiencedCandidates";
import ExecutiveLevelResumeFormatting from "./component/ImportantPost/Executive_Level_Resume_Formatting";
import CareerChangeResumeFormatting from "./component/ImportantPost/CareerChangeResumeFormatting";
import ChronologicalResumeGuide from "./component/ImportantPost/ChronologicalResumeGuide";
import FormatResumeLeadershipJobs from "./component/ImportantPost/FormatResumeLeadershipJobs";
import HighlightAchievementsForResume from "./component/ImportantPost/HighlightAchievementsForResume";
import MultiPageResumeFormatting from "./component/ImportantPost/MultiPageResumeFormatting";
import TailorResumeGuide from "./component/ImportantPost/TailorResumeGuide";
import ResumeFormattingArticle from "./component/ImportantPost/ResumeFormattingArticle.jsx";
import GoogleAnalytics from "./component/GoogleAnalytics.jsx";
import ITResumeTips from "./component/ImportantPost/ITResumeTips.jsx";
import HealthcareResumeGuide from "./component/ImportantPost/HealthcareResumeGuide.jsx";
import CreativeAndDesignerResumeTips from "./component/ImportantPost/CreativeAndDesignerResumeTips.jsx";
import ResumeFormattingForSaleAndMarketing from "./component/ImportantPost/ResumeFormattingForSaleAndMarketing.jsx";
import ResumeFormattingForTeachersAndProfessors from "./component/ImportantPost/ResumeFormattingForTeachersAndProfessors.jsx";
import ResumeFormattingEngineeringStudents from "./component/ImportantPost/ResumeFormattingEngineeringStudents.jsx";
import ResumeFormattingforFreelancersandRemoteWorkers from "./component/ImportantPost/ResumeFormattingforFreelancersandRemoteWorkers.jsx";
import GovernmentJobResumeGuide from "./component/ImportantPost/GovernmentJobResumeGuide.jsx";
import Resume_Formatting_Real_Estate_Agents from "./component/ImportantPost/Resume_Formatting_Real_Estate_Agents.jsx";
import Best_Free_Resume_Formatting_Tools_for_2025 from "./component/ImportantPost/Best_Free_Resume_Formatting_Tools_for_2024.jsx";
import ResumeFormattingTool from "./component/ImportantPost/ResumeFormattingTool.jsx";
import Infographic_Resume_Formatting from "./component/ImportantPost/Infographic_Resume_Formatting.jsx";
import ResumeFormattinMistake from "./component/ImportantPost/ResumeFormattinMistake.jsx";
import ResumeFormattinError from "./component/ImportantPost/ResumeFormattinError.jsx";
import AtsUnfriendlyResume from "./component/ImportantPost/AtsUnfriendlyResume.jsx";
import OverDesignFormatting from "./component/ImportantPost/OverDesignFormatting.jsx";
import ReflectCareerBreaks from "./component/ImportantPost/ReflectCareerBreaks.jsx";
import FontAndSixMistake from "./component/ImportantPost/FontAndSixMistake.jsx";
import SpellingandGrammarMistakes from "./component/ImportantPost/SpellingandGrammarMistakes.jsx";
import ResumeLayoutMistakes from "./component/ImportantPost/ResumeLayoutMistakes.jsx";
import ProfessionalResumeFormatPDF from "./component/ImportantPost/ProfessionalResumeFormatPDF.jsx";
import PdfVsWordResume from "./component/ImportantPost/PdfVsWordResume.jsx";
import ChronologicalVsFunctionalResume from "./component/ImportantPost/ChronologicalVsFunctionalResume.jsx";
import InfographicVsTraditionalResumes from "./css/Important_Post/InfographicVsTraditionalResumes.jsx";
import OnlineVsManualResume from "./css/Important_Post/OnlineVsManualResume.jsx";
import OneVsMultiPageResume from "./component/ImportantPost/OneVsMultiPageResume.jsx";
import ModernResumeVsTraditionResume from "./component/ImportantPost/ModernResumeVsTraditionResume.jsx";
import AtsFriendlyVsCreativeResume from "./component/ImportantPost/AtsFriendlyVsCreativeResume.jsx";
import Bank_Resume_Format_for_Freshers_PDF from "./image/technical_Image/banking-resume-example.png";
import MinimalistVsGraphic from "./component/ImportantPost/MinimalistVsGraphic.jsx";
import ObjectiveStatementVsSummaryStatement from "./component/ImportantPost/ObjectiveStatementVsSummaryStatement.jsx";
import ResumeFormattingTrends2025 from "./component/ImportantPost/ResumeFormattingTrends2025.jsx";
import ResumeFormattingforAIDrivenApplicationTrackingSystems from "./component/ImportantPost/ResumeFormattingforAIDrivenApplicationTrackingSystems.jsx";
import PresentingPersonalBranding from "./component/ImportantPost/PresentingPersonalBranding.jsx";
import MatchesYourLinkedInProfile from "./component/ImportantPost/MatchesYourLinkedInProfile.jsx";
import ModernResumeFormatting from "./component/ImportantPost/ModernResumeFormatting.jsx";
import DataDrivenResumeArticle from "./component/ImportantPost/DataDrivenResumeArticle.jsx";
import InfluencerResumeGuide from "./component/ImportantPost/InfluencerResumeGuide.jsx";
import JobSpecificResumeFormatting from "./component/ImportantPost/JobSpecificResumeFormatting.jsx";
import PortfolioResumeTips from "./component/ImportantPost/PortfolioResumeTips.jsx";
import RemoteResumeFormattin from "./component/ImportantPost/RemoteResumeFormattin.jsx";
import ResumeFormattingforInternational from "./component/ImportantPost/ResumeFormattingforInternational.jsx";
import ResumeFormattintoMoreInterview from "./component/ImportantPost/ResumeFormattintoMoreInterview.jsx";
import DownloadtheBestResumeFormatPDF from "./component/ImportantPost/DownloadtheBestResumeFormatPDF.jsx";
import TopResumeFormatPDFforJobSeekers from "./component/ImportantPost/TopResumeFormatPDFforJobSeekers.jsx";
import EffortlessResumeCreation from "./component/ImportantPost/EffortlessResumeCreation.jsx";
import ResumeFormatPDFGuide from "./component/ImportantPost/ResumeFormatPDFGuide.jsx";
import GetHiredFaster from "./component/ImportantPost/GetHiredFaster.jsx";
import HowtoChoosetheRightResumeFormatPDF from "./component/ImportantPost/HowtoChoosetheRightResumeFormatPDF.jsx";
import FreeResumeFormat from "./component/ImportantPost/FreeResumeFormat.jsx";
import CreateYourDreamJobResume from "./component/ImportantPost/CreateYourDreamJobResume.jsx";
import StepbyStepResumeCreation from "./component/ImportantPost/StepbyStepResumeCreation.jsx";
import FreeResumeFormatPDF from "./component/ImportantPost/FreeResumeFormatPDF.jsx";
import CompleteGuidetoResumeFormatPDF from "./component/ImportantPost/CompleteGuidetoResumeFormatPDF.jsx";
import DownloadaProfessionalResumeFormatPDF from "./component/ImportantPost/DownloadaProfessionalResumeFormatPDF.jsx";
import HowtoResumeGuide from "./component/ImportantPost/HowtoResumeGuide.jsx";
import UltimateCollectionofResumeFormatPDF from "./component/ImportantPost/UltimateCollectionofResumeFormatPDF.jsx";
import MyTop10FreeResumeFormatPDF from "./component/ImportantPost/MyTop10FreeResumeFormatPDF.jsx";
import DownloadYourFreeResumeFormatPDF from "./component/ImportantPost/DownloadYourFreeResumeFormatPDF.jsx";
import FindtheRightResumeFormatPDF from "./component/ImportantPost/FindtheRightResumeFormatPDF.jsx";
import LookingforaResumeFormatPDF from "./component/ImportantPost/LookingforaResumeFormatPDF.jsx";
import DownloadResumeFormatPDFforFreshers from "./component/ImportantPost/DownloadResumeFormatPDFforFreshers.jsx";
import HospitalityandTourism from "./component/ImportantPost/HospitalityandTourism.jsx";
import BestResumeFormatPDFforProfessionals from "./component/ImportantPost/BestResumeFormatPDFforProfessionals.jsx";
import HowtoCreateaWinningResume from "./component/ImportantPost/HowtoCreateaWinningResume.jsx";
import EasytoUseResumeFormatPDFforJobSeekers from "./component/ImportantPost/EasytoUseResumeFormatPDFforJobSeekers.jsx";
import TopResumeFormatPDF from "./component/ImportantPost/TopResumeFormatPDF.jsx";
import FreeResumeFormatPDFTemplates from "./component/ImportantPost/FreeResumeFormatPDFTemplates.jsx";
import HowtoCreateaStunningResume from "./component/ImportantPost/HowtoCreateaStunningResume.jsx";
import CraftthePerfectResumewithOurFreeResumeFormatPDF from "./component/ImportantPost/CraftthePerfectResumewithOurFreeResumeFormatPDF.jsx";
import FreeResumeFormatPDFdesign from "./component/ImportantPost/FreeResumeFormatPDFdesign.jsx";
import ResumeFormat from "./component/ImportantPost/ResumeFormat.jsx";
import ResumeFormatPDF from "./component/ImportantPost/ResumeFormatPDF.jsx";
import ResumeFormatting from "./component/ImportantPost/ResumeFormatting.jsx";
import ProfessionalResumeFormat from "./component/ImportantPost/ProfessionalResumeFormat.jsx";
import CraftthePerfectResume from "./component/ImportantPost/CraftthePerfectResume.jsx";
import YourStepbyStepGuide from "./component/ImportantPost/YourStepbyStepGuide.jsx";
import CreateResumeThatGetsResults from "./component/ImportantPost/CreateResumeThatGetsResults.jsx";
import OptimizeYourResumewiththeBestResumeFormatPDFTemplates from "./component/ImportantPost/OptimizeYourResumewiththeBestResumeFormatPDFTemplates.jsx";
import GettheRightResumeFormatPDF from "./component/ImportantPost/GettheRightResumeFormatPDF .jsx";
import TheBestResumeFormat from "./component/ImportantPost/TheBestResumeFormat.jsx";
import DownloadtheTopResumeFormatPDF from "./component/ImportantPost/DownloadtheTopResumeFormatPDF.jsx";
import FreeResumeFormatPDFforFreshers from "./component/ImportantPost/FreeResumeFormatPDFforFreshers.jsx";
import TheUltimateResumeFormatPDF from "./component/ImportantPost/TheUltimateResumeFormatPDF.jsx";
import HowPicktheRightResumeFormatPDF from "./component/ImportantPost/HowPicktheRightResumeFormatPDF.jsx";
import GetHiredwiththeBestResumeFormat from "./component/ImportantPost/GetHiredwiththeBestResumeFormat.jsx";
import TopResumeFormatPDFDownloads from "./component/ImportantPost/TopResumeFormatPDFDownloads.jsx";
import BestResumeFormatPDFforCreatingProfessionalCV from "./component/ImportantPost/BestResumeFormatPDFforCreatingProfessionalCV.jsx";
import ResumeFormatPDFforFreshers from "./component/ImportantPost/ResumeFormatPDFforFreshers.jsx";
import SimpleYetProfessionalResumeFormatPDF from "./component/ImportantPost/SimpleYetProfessionalResumeFormatPDF.jsx";
import UnlockqaqYourCareerPotential from "./component/ImportantPost/UnlockqaqYourCareerPotential.jsx";
import FreeDownloadableResumeFormatPDFs from "./component/ImportantPost/FreeDownloadableResumeFormatPDFs.jsx";
import HowtoBuildanImpactfulResume from "./component/ImportantPost/HowtoBuildanImpactfulResume.jsx";
import ResumeFormatPDFFreeTemplates from "./component/ImportantPost/ResumeFormatPDFFreeTemplates.jsx";
import FreeTemplatesThatMakeaDifference from "./component/ImportantPost/GetNoticedwiththeBestResume.jsx";
import GetNoticedwiththeBestResume from "./component/ImportantPost/GetNoticedwiththeBestResume.jsx";
import GetNoticewithProfetionalResumeFormatPDF from "./component/ImportantPost/GetNoticewithProfetionalResumeFormatPDF.jsx";
import SimpleResumeFormatPDFJobSeekers from "./component/ImportantPost/SimpleResumeFormatPDFJobSeekers.jsx";
import TheCompleteGuidetoChoosing from "./component/ImportantPost/TheCompleteGuidetoChoosing.jsx";
import PerfectforCareerSuccess from "./component/ImportantPost/PerfectforCareerSuccess.jsx";
import GetYouenergyininterview from "./component/ImportantPost/GetYouenergyininterview.jsx";
import ResumeMistakesYouNeed from "./component/ImportantPost/ResumeMistakesYouNeed.jsx";
import JobApplicationsResumeFormat from "./component/ImportantPost/JobApplicationsResumeFormat.jsx";
import WinningJobApplication from "./component/ImportantPost/WinningJobApplication.jsx";
import PerfectResumeBestResume from "./component/ImportantPost/PerfectResumeBestResume.jsx";
import ResumeImmediateJobOffers from "./component/ImportantPost/ResumeImmediateJobOffers.jsx";
import ResumeFormatPDFSuccessfull from "./component/ImportantPost/ResumeFormatPDFSuccessfull.jsx";
import TopResumeFormatPDFforCareer from "./component/ImportantPost/TopResumeFormatPDFforCareer.jsx";
import DownloadYourResumeFormat from "./component/ImportantPost/DownloadYourResumeFormat.jsx";
import BuildYourBestCVNow from "./component/ImportantPost/BuildYourBestCVNow.jsx";
import DownloadNowFresherExpertProfessional from "./component/ImportantPost/DownloadNowFresherExpertProfessional.jsx";
import HowtoOptimizeYourKiller from "./component/ImportantPost/HowtoOptimizeYourKiller.jsx";
import TechImageShow from "./component/TechResume/TechImageShow.jsx";
import LinkedInRecruiterResponseGuide from "./component/ImportantPost/LinkedInRecruiterResponseGuide.jsx";
import SimpleResumeFormatWord from "./component/ImportantPost/SimpleResumeFormatWord.jsx";
import SimpleResumeformatpdf from "./component/ImportantPost/SimpleResumeformatpdf.jsx";
import image_301 from "./image/Fresher resume image folder/accountant-resume-example.webp";
import image_302 from "./image/Fresher resume image folder/babysitter-resume-example.webp";
import image_303 from "./image/Fresher resume image folder/cashier-resume-template-no-experiece.webp";
import image_304 from "./image/Fresher resume image folder/flight-attendant-resume-template-no-experience.webp";
import image_305 from "./image/Fresher resume image folder/line-cook-resume-template-no-experience.webp";
import image_306 from "./image/Fresher resume image folder/security-guard-resume-template-no-experience.webp";
import image_307 from "./image/Fresher resume image folder/social-media-manager-resume-example.webp";
import image_308 from "./image/Fresher resume image folder/web-developer-resume-example.webp";
import image_309 from "./image/Fresher resume image folder/internship resume example.png";
import FresherResume from "./component/FresherResume.jsx";
import ResumeFormatPDFFreeDownload from "./component/ImportantPost/ResumeFormatPDFFreeDownload.jsx";
import PDFResumeFormatFreeDownload from "./component/ImportantPost/PDFResumeFormatFreeDownload.jsx";
import ResumePdf from "./component/ImportantPost/ResumePdf.jsx";
import ResumeFormatPDFforFresher from "./component/ImportantPost/ResumeFormatPDFforFresher.jsx";
import ResumePDFDownload from "./component/ImportantPost/ResumePDFDownload.jsx";
import ResumeQoutes from "./component/ImportantPost/ResumeQoutes.jsx";
import SimpleResumeFormatPDFDownload from "./component/ImportantPost/SimpleResumeFormatPDFDownload.jsx";
import HowtoMakeaResumeforFreshers from "./component/ImportantPost/HowtoMakeaResumeforFreshers.js";
import HowtoWriteaStrongResumeObjective from "./component/blog/HowtoWriteaStrongResumeObjective.jsx";
import { HelmetProvider } from "react-helmet-async";
import ResumeForInternship from "./component/ImportantPost/ResumeForInternship.jsx";
import Upload from "./component/pages/Upload.js";
import Edit from "./component/pages/Edit.js";
import AttentionGrabbingResumeSummary from "./component/ImportantPost/AttentionGrabbingResumeSummary.jsx";
import BankResumeFormatforFreshersPDF from "./component/ImportantPost/BankResumeFormatforFreshersPDF.jsx";
import FunctionResumeFormat from "./component/ImportantPost/FunctionalResumeFormat.jsx";
import Resumeformatforfreshers from "./component/ImportantPost/Resumeformatforfreshers.jsx";
import ResumeFormatforFreshersSample from "./component/ImportantPost/ResumeFormatforFreshersSample.jsx";
import ResumeFormatForFreshersExample from "./component/ImportantPost/ResumeFormatForFreshersExample.jsx";
import Jobresumeformatforfresher from "./component/ImportantPost/Jobresumeformatforfresher.jsx";
import GoodresumeFormatForFreshers from "./component/ImportantPost/GoodResumeFormatForFreshers.jsx";
import PDFofResumeFormatforFreshers from "./component/ImportantPost/PDFofResumeFormatforFreshers.jsx";
import ResumeFormatForFreshersFreeDownload from "./component/ImportantPost/ResumeFormatForFreshersFreeDownload.jsx";
import MODELRESUMEFORMATFORFRESHERS from "./component/ImportantPost/MODELRESUMEFORMATFORFRESHERS.jsx";
import WhatistheBestResumeFormatforFreshers from "./component/ImportantPost/WhatistheBestResumeFormatforFreshers.jsx";
import TypesofResumeFormatsforFresers from "./component/ImportantPost/TypesofResumeFormatsforFresers.jsx";
import Stepd_by_StepGuidetoWritingaFresherResume from "./component/ImportantPost/Stepd_by_StepGuidetoWritingaFresherResume.jsx";
import WhatisaFunctionalResume from "./component/ImportantPost/functional resume/WhatisaFunctionalResume.jsx";
import TeenagerResumeWithoutWorkExperience from "./component/ImportantPost/teenager resume/TeenagerResumeWithoutWorkExperience.jsx";
import HowtoCreateaResumeforYourFirstJobasaStudent from "./component/ImportantPost/teenager resume/HowtoCreateaResumeforYourFirstJobasaStudent.jsx";
import FirstJobResumeExamples from "./component/ImportantPost/teenager resume/FirstJobResumeExamples.jsx";
import StudentResumeExampleswithNoExperience from "./component/ImportantPost/teenager resume/StudentResumeExampleswithNoExperience.jsx";
import StudentCVTemplatewithNoExperience from "./component/ImportantPost/teenager resume/StudentCVTemplatewithNoExperience.jsx";
import ResumeExamplesforStudentsFirstJob from "./component/ImportantPost/teenager resume/ResumeExamplesforStudentsFirstJob.jsx";
import ResumeExamplesforNoWorkExperience from "./component/ImportantPost/teenager resume/ResumeExamplesforNoWorkExperience.jsx";
import SampleResumeforStudentswithNoWorkExperience from "./component/ImportantPost/teenager resume/SampleResumeforStudentswithNoWorkExperience.jsx";
import Studentresumeforfirstjob from "./component/ImportantPost/teenager resume/Studentresumeforfirstjob.jsx";
import Resumefora15YearOldfirstjob from "./component/ImportantPost/teenager resume/Resumefora15YearOldfirstjob.jsx";
import TeenagerResumeforYourFirstJobinHighSchool from "./component/ImportantPost/teenager resume/TeenagerResumeforYourFirstJobinHighSchool.jsx";
import TeenagerResumeforYourFirstJob from "./component/ImportantPost/teenager resume/TeenagerResumeforYourFirstJob.jsx";
import TeenagerResume from "./component/ImportantPost/teenager resume/TeenagerResume.jsx";
import TeenagerResumeexamples from "./component/ImportantPost/teenager resume/TeenagerResumeExamples.jsx";
import TeenagerResumeTemplate from "./component/ImportantPost/teenager resume/TenagerResumeTemplate.jsx";
import TeenagerResumewithNoWorkExperience from "./component/ImportantPost/teenager resume/TeenagerResumewithNoWorkExperience.jsx";
import TeenagerResumewithNoJobExperience from "./component/ImportantPost/teenager resume/TeenagerResumewithNoJobExperience.jsx";
import GoogleResumeformat from "./component/ImportantPost/GoogleResumeformat.jsx";
import FresherimageCard from "./component/ImageCardResusable/FresherimageCard.jsx";
import SampleTeenagerResume from "./component/ImportantPost/teenager resume/SampleTeenagerResume.jsx";
import CombinedTemplates from "./component/CombinedTemplates.jsx";
import ResumeSummary from "./component/ImportantPost/ResumeSummary.jsx";
import FreeTeenagerResumeTemplates from "./component/ImportantPost/FreeTeenagerResumeTemplates.jsx";
import Highschoolteenagerresume from "./component/ImportantPost/teenager resume/Highschoolteenagerresume.jsx";
import Teenagerresumeforcollegeentrance from "./component/ImportantPost/teenager resume/Teenagerresumeforcollegeentrance.jsx";
import SkillsForTeenagerResumeExamples from "./component/ImportantPost/teenager resume/SkillsForTeenagerResumeExamples.jsx";
import SampleoOfTeenagerResumeTemplate from "./component/ImportantPost/teenager resume/SampleoOfTeenagerResumeTemplate.jsx";
import StudentResumeForInternships from "./component/ImportantPost/teenager resume/StudentResumeForInternships.jsx";
import SampleResumeforHighSchoolStudentsApplyingforInternships from "./component/ImportantPost/teenager resume/SampleResumeforHighSchoolStudentsApplyingforInternships.jsx";
import InternshipResumeExamplesForTeenagers from "./component/ImportantPost/teenager resume/InternshipResumeExamplesForTeenagers.jsx";
import HowtoWriteaResumeforaTeenageInternship from "./component/ImportantPost/teenager resume/HowtoWriteaResumeforaTeenageInternship.jsx";
import HighSchoolInternshipResumeTemplates from "./component/ImportantPost/teenager resume/HighSchoolInternshipResumeTemplates.jsx";
import BestTeenInternshipResumeFormat from "./component/ImportantPost/teenager resume/BestTeenInternshipResumeFormat.jsx";
import EntryLevelHighSchoolResumeExamples from "./component/ImportantPost/teenager resume/Entrylevelresumeexamplesforhighschoolstudents.jsx";
import Tipsforcreatingateenageinternshipresume from "./component/ImportantPost/teenager resume/Tipsforcreatingateenageinternshipresume.jsx";
import NoExperienceHighSchoolInternshipResume from "./component/ImportantPost/teenager resume/NoExperienceHighSchoolInternshipResume.jsx";
import HighSchoolInternshipResumeNoExperience from "./component/ImportantPost/teenager resume/HighSchoolInternshipResumeNoExperience.jsx";
import DownloadableTeenInternshipTemplates from "./component/ImportantPost/teenager resume/DownloadableTeenInternshipTemplates.jsx";
import EffectiveResumeWritingForHighSchoolInternships from "./component/ImportantPost/teenager resume/EffectiveResumeWritingForHighSchoolInternships.jsx";
import HighSchoolStudentResumeExamplesForJobApplications from "./component/ImportantPost/teenager resume/HighSchoolStudentResumeExamplesForJobApplications.jsx";
import HowToListExtracurricularActivitiesOnATeenResume from "./component/ImportantPost/teenager resume/HowToListExtracurricularActivitiesOnATeenResume.jsx";
import ObjectiveStatementExamplesForTeenageInternshipResumes from "./component/ImportantPost/teenager resume/ObjectiveStatementExamplesForTeenageInternshipResumes.jsx";
import HighSchoolResumeExamplesWithNoWorkExperience from "./component/ImportantPost/teenager resume/HighSchoolResumeExamplesWithNoWorkExperience.jsx";
import Skillstoincludeonahighschoolinternshipresume from "./component/ImportantPost/teenager resume/Skillstoincludeonahighschoolinternshipresume.jsx";
import FreeResumeTemplatesForHighSchoolStudents from "./component/ImportantPost/teenager resume/Freeresumetemplatesforhighschoolstudent.jsx";
import HowToFormatAResumeForATeenageInternship from "./component/ImportantPost/teenager resume/HowToFormatAResumeForATeenageInternship.jsx";
import HighSchoolStudentResumeForPartTimeJobs from "./component/ImportantPost/teenager resume/HighSchoolStudentResumeForPartTimeJobs.jsx";
import HowToWriteAJobResumeForAHighSchoolStudent from "./component/ImportantPost/teenager resume/HowToWriteAJobResumeForAHighSchoolStudent.jsx";
import ResumeFor12thPassStudent from "./component/ImportantPost/teenager resume/ResumeFor12thPassStudent.jsx";
import ResumeFor12thStudentPartTimeJobs from "./component/ImportantPost/teenager resume/ResumeFor12thStudentPartTimeJobs.jsx";
import BankResumeFormat from "./component/ImportantPost/bank resume artifcle/BankResumeFormat.jsx";
import ResumeFormatForBankJob from "./component/ImportantPost/bank resume artifcle/ResumeFormatForBankJob.jsx";
import BankResumeFormatForFreshers from "./component/ImportantPost/bank resume artifcle/BankResumeFormatForFreshers.jsx";
import HDFCBankResumeFormat from "./component/ImportantPost/bank resume artifcle/HDFCBankResumeFormat.jsx";
import ResumeFormatForBankJobFresher from "./component/ImportantPost/bank resume artifcle/ResumeFormatForBankJobFresher.jsx";
import BankingResume from "./component/ImportantPost/bank resume artifcle/BankingResume.jsx";
import BankResumeFormatForFreshersPDFGuide from "./component/ImportantPost/bank resume artifcle/BankResumeFormatForFreshersPDFGuide.jsx";
import ICICIBankResumeFormatForFreshers from "./component/ImportantPost/bank resume artifcle/ICICIBankResumeFormatForFreshers.jsx";
import BankResumeFormatFreshers from "./component/ImportantPost/bank resume artifcle/BankResumeFormatFreshers.jsx";
import AxisBankResumeFormatForFreshers from "./component/ImportantPost/bank resume artifcle/AxisBankResumeFormatForFreshers.jsx";
import Preview309 from "./component/previewfolder/Preview309.jsx";
// import Preview401 from './component/Shadi Card/shadiCardPreview/Preview401.jsx'
// import Preview402 from './component/Shadi Card/shadiCardPreview/Preview402.jsx'
// import Preview403 from './component/Shadi Card/shadiCardPreview/Preview403.jsx'
// import Preview404 from './component/Shadi Card/shadiCardPreview/Preview404.jsx'
// import Preview405 from './component/Shadi Card/shadiCardPreview/Preview405.jsx'
// import Preview406 from './component/Shadi Card/shadiCardPreview/Preview406.jsx'
// import Preview407 from './component/Shadi Card/shadiCardPreview/Preview407.jsx'
// import Preview408 from './component/Shadi Card/shadiCardPreview/Preview408.jsx'
// import Preview409 from './component/Shadi Card/shadiCardPreview/Preview409.jsx'

import HowToCreateResumeForFreshers from "./component/ImportantPost/teenager resume/HowToCreateResumeForFreshers.jsx";
import FormatOfResume from "./component/ImportantPost/teenager resume/FormatOfResume.jsx";
import FresherResumeTemplate from "./component/ImportantPost/teenager resume/FresherResumeTemplate.jsx";
import FreshersResume from "./component/ImportantPost/teenager resume/FreshersResume.jsx";
import ResumeTemplateForFresher from "./component/ImportantPost/teenager resume/ResumeTemplateForFresher.jsx";
import ResumeFormatForFresher from "./component/ImportantPost/teenager resume/ResumeFormatForFresher.jsx";
import ResumeForFresherStudent from "./component/ImportantPost/teenager resume/ResumeForFresherStudent.jsx";
import SampleResumeForFreshers from "./component/ImportantPost/teenager resume/SampleResumeForFreshers.jsx";
import ResumeForFresher from "./component/ImportantPost/teenager resume/ResumeForFresher.jsx";
import XYZResumeGenerator from "./component/ImportantPost/teenager resume/XyzResumeGenerator.jsx";
import ResumeQuotes from "./component/ImportantPost/teenager resume/ResumeQuotes.jsx";
import Patternofresumeforfreshers from "./component/ImportantPost/teenager resume/Patternofresumeforfreshers.jsx";
import FreshersResumeSummary from "./component/ImportantPost/FreshersResumeSummary.jsx/FreshersResumeSummary.jsx";
import Cvsummaryforfresher from "./component/ImportantPost/FreshersResumeSummary.jsx/Cvsummaryforfresher.jsx";
import Resumesummaryforitfreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/Resumesummaryforitfreshers.jsx";
import Resumesynopsisforfreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/Resumesynopsisforfreshers.jsx";
import Profilesummaryforfreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/Profilesummaryforfreshers.jsx";
import Professionalsummaryinresumeforfresher from "./component/ImportantPost/FreshersResumeSummary.jsx/Professionalsummaryinresumeforfresher.jsx";
import ProfessionalSummaryForFresher from "./component/ImportantPost/FreshersResumeSummary.jsx/ProfessionalSummaryForFresher.jsx";
import ResumeHeadingAndSummaryForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/ResumeHeadingAndSummaryForFreshers.jsx";
import SummaryForResumeForFreshersExample from "./component/ImportantPost/FreshersResumeSummary.jsx/SummaryForResumeForFreshersExample.jsx";
import ResumeProfileSummaryForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/ResumeProfileSummaryForFreshers.jsx";
import ProfileSummaryForResumeForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/ProfileSummaryForResumeForFreshers.jsx";
import AboutMeResumeExamplesForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/AboutMeResumeExamplesForFreshers.jsx";
import DescriptionForResumeForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/DescriptionForResumeForFreshers.jsx";
import BestSummaryForResumeForFreshers from "./component/ImportantPost/FreshersResumeSummary.jsx/BestSummaryForResumeForFreshers.jsx";
import FresherSummaryForResume from "./component/ImportantPost/FreshersResumeSummary.jsx/FresherSummaryForResume.jsx";
import WhatShouldIAddinMyResume from "./component/ImportantPost/WhatShouldIAddinMyResume.jsx";
import AI_DrivenHiringSystems from "./component/ImportantPost/AI_DrivenHiringSystems.jsx";
import Enhanceresumevisibility from "./component/ImportantPost/Enhanceresumevisibility.jsx";
import ToolForResumeBuilding from "./component/ImportantPost/ToolForResumeBuilding.jsx";
import HundredPercentfreeresumebuilder from "./component/ImportantPost/HundredPercentfreeresumebuilder.jsx";
import CoveerLetterTips from "./component/cover letter post/CoverLetterTips.jsx";
import CoverLetterMapping from "./component/CoverLetterMapping.jsx";
import CoverLetterLengthGuide from "./component/cover letter post/CoverLetterLengthGuide.jsx";
import Coverletterwithnoexperience from "./component/cover letter post/Coverletterwithnoexperience.jsx";
import CoverLetterBestPractices from "./component/cover letter post/CoverLetterBestPractices.jsx";
import CommonCoverLetterMistake from "./component/cover letter post/CommonCoverLetterMistake.jsx";
import CoverLetterForRecentGraduates from "./component/cover letter post/CoverLetterForRecentGraduates.jsx";
import CraftingHRManagerCoverLetter from "./component/cover letter post/CraftingHRManagerCoverLetter.jsx";
import ShortCoverLetterCustomerService from "./component/cover letter post/ShortCoverLetterCustomerService.jsx";
import ShortCoverLetterForFresher from "./component/cover letter post/ShortCoverLetterForFresher.jsx";
import SampleCoverLetterForJobApplication from "./component/cover letter post/SampleCoverLetterForJobApplication.jsx";
import ResumeVsCoverLetter from "./component/ImportantPost/ResumeVsCoverLetter.jsx";
import GeneralCoverLetter from "./component/cover letter post/GeneralCoverLetter.jsx";
import Preview203 from "./component/coverletterFolder/Preview203.jsx";
import CivilEngineeringResumeforFreshers from "./component/ImportantPost/CivilEngineeringResumeforFreshers.jsx";
import Preview204 from "./component/coverletterFolder/Preview204.jsx";
import Preview205 from "./component/coverletterFolder/Preview205.jsx";
import Preview206 from "./component/coverletterFolder/Preview206.jsx";
import Preview207 from "./component/coverletterFolder/Preview207.jsx";
import Preview208 from "./component/coverletterFolder/Preview208.jsx";
import Preview209 from "./component/coverletterFolder/Preview209.jsx";
import Preview210 from "./component/coverletterFolder/Preview210.jsx";
import Preview211 from "./component/coverletterFolder/Preview211.jsx";
import Preview212 from "./component/coverletterFolder/Preview212.jsx";
import Preview213 from "./component/coverletterFolder/Preview213.jsx";
import Preview214 from "./component/coverletterFolder/Preview214.jsx";
import Preview215 from "./component/coverletterFolder/Preview215.jsx";
import Preview216 from "./component/coverletterFolder/Preview216.jsx";
import Preview217 from "./component/coverletterFolder/Preview217.jsx";
import Preview218 from "./component/coverletterFolder/Preview218.jsx";
import ReactJsDeveloperResume from "./component/ImportantPost/ReactJsDeveloperResume.jsx";
import AssistantProfessorResumeSamplePdf from "./component/ImportantPost/AssistantProfessorResumeSamplePdf.jsx";
import ElectricianResumedf from "./component/ImportantPost/ElectricianResumedf.jsx";
import SampleResumeForAssistantProfessorFresherPdf from "./component/ImportantPost/SampleResumeForAssistantProfessorFresherPdf.jsx";
import ServicenowDeveloperResume from "./component/ImportantPost/ServicenowDeveloperResume.jsx";
import USITRecruiterResumeGuide from "./component/ImportantPost/USITRecruiterResumeGuide.jsx";
import AutomationTestingResumeGuide from "./component/ImportantPost/AutomationTestingResumeGuide.jsx";
import ImageConverter from "./component/ImageConverter.jsx";
import AyurvedaDoctorResumeGuide from "./component/ImportantPost/AyurvedaDoctorResumeGuide.jsx";
import BAMSDoctorResumeGuide from "./component/ImportantPost/BAMSDoctorResumeGuide.jsx";
import HondaCareersResumeUpload from "./component/ImportantPost/HondaCareersResumeUpload.jsx";
import ITIFitterResumeFormat from "./component/ImportantPost/ITIFitterResumeFormat.jsx";
import ProcessAssociateResumeFormat from "./component/ImportantPost/ProcessAssociateResumeFormat.jsx";
import ReactJSResumeFormat from "./component/ImportantPost/ReactJSResumeFormat.jsx";
import CppDeveloperResumeFormat from "./component/ImportantPost/CppDeveloperResumeFormat.jsx";
import ShadiCard from "./component/Shadi article/ShadiCard.jsx";
import Border_Element from "./image/shadi biodata/Border_Element.png";
import Border_Fashion from "./image/shadi biodata/Border_Fashion_married_Template.png";
import Border_married_Template from "./image/shadi biodata/Border_married_Template.png";
import Corner_Star_Marrige_Template from "./image/shadi biodata/Corner_Star_Marrige_template.png";
import Elegant_Border_marriege_Invitation_Template from "./image/shadi biodata/Elegant_Border_marriege_Invitation_Template.png";
import Free_Heart_Border_Clipart from "./image/shadi biodata/Free_Heart_Border_Clipart.png";
import Free_Wedding_Heart_Border_Clipart from "./image/shadi biodata/Free_Wedding_Heart_Border_Clipart.png";
import Marrige_Clipart from "./image/shadi biodata/Marrige_Clipart.png";
import Simple_Fancy_Border_Marrige_Template from "./image/shadi biodata/Simple_Fancy_Border_Marrige_Template.png";
import ShadiFormForData from "./component/Shadi article/ShadiFormForData.jsx";
import MarriageBiodataInHindi from "./component/Shadi article/MarriageBiodataInHindi.jsx";
import Shadi3d from "./image/shadi biodata/Muslim merrieage biodata/3d-shadi-celebration-with-castle.jpg";
import blue_white from "./image/shadi biodata/Muslim merrieage biodata/BlueGoldenShadiCard.jpeg";
import blueGoden from "./image/shadi biodata/Muslim merrieage biodata/BlueGolderLampShadiCard.jpg";
import Blue_Golden_Lamp from "./image/shadi biodata/Muslim merrieage biodata/BlueGoldenShadiCard.jpeg";
import Converted_Images from "./image/shadi biodata/Muslim merrieage biodata/converted-image (2).webp";
import DarkBlueStar from "./image/shadi biodata/Muslim merrieage biodata/DarkBlueStarShadiCard.jpg";
import GoldenArch from "./image/shadi biodata/Muslim merrieage biodata/GoldenArchWithBlue.jpg";
import GoldenColumn from "./image/shadi biodata/Muslim merrieage biodata/goldenColumnWithblue.jpg";
// import GodenArchWithRed from './image/shadi biodata/Muslim merrieage biodata/'
import GoldenArchWithGreen from "./image/shadi biodata/Muslim merrieage biodata/GolderArchWithGreenbg.jpg";
import GoldenCircle from "./image/shadi biodata/Muslim merrieage biodata/GolderCircleShadibiodata.jpg";
import LightBlueFlower from "./image/shadi biodata/Muslim merrieage biodata/LightBlueFlowerShadiCard.jpg";
import MuslimBiodata from "./image/shadi biodata/Muslim merrieage biodata/Muslim-biodata.png";
// import Shadibackground from './image/shadi biodata/Muslim merrieage biodata/s'
import shadibiodata from "./image/shadi biodata/Muslim merrieage biodata/shadi_biodataWithBlueTaj.jpg";
import shadiBlackBg from "./image/shadi biodata/Muslim merrieage biodata/shadi_black_bg_on_stone.jpg";
import shadiCardWithWhite from "./image/shadi biodata/Muslim merrieage biodata/shadiCardWithWhiteFlower.jpg";
import shadiblackbg from "./image/shadi biodata/Muslim merrieage biodata/shadi_black_bg_on_stone.jpg";
import shadicardwithwhite from "./image/shadi biodata/Muslim merrieage biodata/shadiCardWithwhite.jpeg";
import shadiCardWithWhiteFlower from "./image/shadi biodata/Muslim merrieage biodata/shadiCardWithWhiteFlower.jpg";
import abstract_modern_frame_template from "./image/shadi biodata/abstract-modern-frame-template_1035-8734.avif";
import black_frame_hanging_vintage_style from "./image/shadi biodata/black-frame-hanging-vintage-style-wallpaper_1048-1395.jpg";
import blank_shimmering_golden_frame from "./image/shadi biodata/blank-shimmering-golden-frame-vector_53876-109064.avif";
import chinese_frame_vector_traditional from "./image/shadi biodata/chinese-frame-vector-traditional-clouds-pattern-yellow-square_53876-111829.jpg";
import classic_botanical_frame from "./image/shadi biodata/classic-botanical-frame_53876-87362.jpg";
import colorful_abstract_fram_border from "./image/shadi biodata/colorful-abstract-frame-border-template-with-cartoon-illustration_1308-158672.avif";
import colorful_border_gray_bg from "./image/shadi biodata/colorful-border-gray-background_53876-118888.avif";
import cute_white_daisy_pattern from "./image/shadi biodata/cute-white-daisy-patterned-frame-off-white-background-vector_53876-169183.avif";
import decorative_border from "./image/shadi biodata/decorative-border_1048-11718.avif";
import decorative_ornamental_frame from "./image/shadi biodata/decorative-ornamental-frame_1048-5554.avif";
import download from "./image/shadi biodata/download.jpeg";
import empty_blue_border_frame from "./image/shadi biodata/empty-blue-border-frame-with-flowers-white-backdrop.jpg";
import empty_white_picture_frame_origame from "./image/shadi biodata/empty-white-picture-frame-origami-fan-blue-backdrop.jpg";
import flate_lay_blue_floral_frame from "./image/shadi biodata/flat-lay-blue-floral-frame-yellow-background_23-2148274594.jpg";
import flat_lay_summer_concept_frame from "./image/shadi biodata/flat-lay-summer-concept-with-copy-space.jpg";
import floral_arrangement_isolated_white from "./image/shadi biodata/floral-arrangement-isolated-white-background_23-2151194415.jpg";
import floral_frame_design from "./image/shadi biodata/floral-frame-design_1308-780.avif";
import floral_summer_frame_vector from "./image/shadi biodata/floral-summer-frame-vector-vintage-drawing_53876-127526.jpg";
import freepik_upload from "./image/shadi biodata/freepik__upload__20596.png";
import gift_card_red_gold_border_template from "./image/shadi biodata/gift-card-red-gold-border-template-vertical.jpg";
import golden_ranctangle_with_watercolor from "./image/shadi biodata/golden-rectangle-with-watercolor-leafy-frame_53876-113053.jpg";
import green_tropical_tree_leaves from "./image/shadi biodata/green-tropical-tree-leaves-aframe-border-template_1308-158687.avif";
import hand_drawn_ornament_borders from "./image/shadi biodata/hand-drawn-ornament-borders_23-2151252129.avif";
import leaves_frame_isolated from "./image/shadi biodata/leaves-frame-isolated.png";
import mock_up_empty_frame from "./image/shadi biodata/mock-up-empty-frame-with-rosebuds-blue-background_23-2148351478.jpg";
import realistic_golden_frame_design from "./image/shadi biodata/realistic-golden-frame-design_23-2149247275.jpg";
import realistic_photo_frame_element from "./image/shadi biodata/realistic-photo-frame-element-isolated.jpg";
import realistic_photo_frame from "./image/shadi biodata/realistic-photo-frame.jpg";
import realistic_yellow_frame from "./image/shadi biodata/realistic-yellow-frame_557339-850.avif";
import rectangle_bronze_frame_light_gray from "./image/shadi biodata/rectangle-bronze-frame-light-gray-background-vector_53876-170865.jpg";
import rectangle_bronze_frame_white_bg from "./image/shadi biodata/rectangle-bronze-frame-white-background-vector_53876-166212.jpg";
import squared_realistic_golden_frame from "./image/shadi biodata/squared-realistic-golden-frame_23-2148086255.jpg";
import template_with_mandala_pattern from "./image/shadi biodata/template-with-mandala-patterns_1308-37574.jpg";
import top_view_white_floral_frame_pink from "./image/shadi biodata/top-view-white-floral-frame-pink-background_23-2148274597.jpg";
import vintage_old_school_style_beige_frame from "./image/shadi biodata/vintage-old-school-style-beige-frame-vector_53876-136558.avif";
import vintage_vector_holographkic_floaral_frame from "./image/shadi biodata/vintage-vector-holographic-floral-frame-remix-from-artwork-by-william-morris_53876-173275.jpg";
import white_japanese_crane_with_rosemal from "./image/shadi biodata/white-japanese-crane-with-rosemallows-pattern-frame-template_53876-113726.jpg";

import Preview401 from "./component/Shadi article/shadiPreview/Preview401.jsx";
import Preview402 from "./component/Shadi article/shadiPreview/Preview402.jsx";
import Preview403 from "./component/Shadi article/shadiPreview/Preview403.jsx";
import Preview404 from "./component/Shadi article/shadiPreview/Preview404.jsx";
import Preview405 from "./component/Shadi article/shadiPreview/Preview405.jsx";
import Preview406 from "./component/Shadi article/shadiPreview/Preview406.jsx";
import Preview407 from "./component/Shadi article/shadiPreview/Preview407.jsx";
import Preview408 from "./component/Shadi article/shadiPreview/Preview408.jsx";
import Preview409 from "./component/Shadi article/shadiPreview/Preview409.jsx";
import Preview501 from "./component/Shadi article/shadiPreview/Preview501.jsx";
import Preview502 from "./component/Shadi article/shadiPreview/Preview502.jsx";
import Preview503 from "./component/Shadi article/shadiPreview/Preview503.jsx";
import Preview504 from "./component/Shadi article/shadiPreview/Preview504.jsx";
import Preview505 from "./component/Shadi article/shadiPreview/Preview505.jsx";
import Preview506 from "./component/Shadi article/shadiPreview/Preview506.jsx";
import Preview507 from "./component/Shadi article/shadiPreview/Preview507.jsx";
import Preview508 from "./component/Shadi article/shadiPreview/Preview508.jsx";
import Preview509 from "./component/Shadi article/shadiPreview/Preview509.jsx";
import Preview510 from "./component/Shadi article/shadiPreview/Preview510.jsx";
import Preview511 from "./component/Shadi article/shadiPreview/Preview511.jsx";
import Preview512 from "./component/Shadi article/shadiPreview/Preview512.jsx";
import MuslimShadiCard from "./component/Shadi article/MuslimShadiCard.jsx";
import Preview410 from "./component/Shadi article/shadiPreview/Preview410.jsx";
import Preview411 from "./component/Shadi article/shadiPreview/Preview411.jsx";
import Preview412 from "./component/Shadi article/shadiPreview/Preview412.jsx";
import Preview413 from "./component/Shadi article/shadiPreview/Preview413.jsx";
import Preview414 from "./component/Shadi article/shadiPreview/Preview414.jsx";
import Preview415 from "./component/Shadi article/shadiPreview/Preview415.jsx";
import Preview416 from "./component/Shadi article/shadiPreview/Preview416.jsx";
import Preview417 from "./component/Shadi article/shadiPreview/Preview417.jsx";
import Preview418 from "./component/Shadi article/shadiPreview/Preview418.jsx";
import Preview419 from "./component/Shadi article/shadiPreview/Preview419.jsx";
import Preview420 from "./component/Shadi article/shadiPreview/Preview420.jsx";
import Preview421 from "./component/Shadi article/shadiPreview/Preview421.jsx";
import Preview422 from "./component/Shadi article/shadiPreview/Preview422.jsx";
import Preview423 from "./component/Shadi article/shadiPreview/Preview423.jsx";
import Preview424 from "./component/Shadi article/shadiPreview/Preview424.jsx";
import Preview425 from "./component/Shadi article/shadiPreview/Preview425.jsx";
import Preview426 from "./component/Shadi article/shadiPreview/Preview426.jsx";
import Preview427 from "./component/Shadi article/shadiPreview/Preview427.jsx";
import Preview428 from "./component/Shadi article/shadiPreview/Preview428.jsx";
import Preview429 from "./component/Shadi article/shadiPreview/Preview429.jsx";
import Preview430 from "./component/Shadi article/shadiPreview/Preview430.jsx";
import Preview431 from "./component/Shadi article/shadiPreview/Preview431.jsx";
import Preview432 from "./component/Shadi article/shadiPreview/Preview432.jsx";
import Preview433 from "./component/Shadi article/shadiPreview/Preview433.jsx";
import Preview434 from "./component/Shadi article/shadiPreview/Preview434.jsx";
import Preview435 from "./component/Shadi article/shadiPreview/Preview435.jsx";
import Preview436 from "./component/Shadi article/shadiPreview/Preview436.jsx";
import Preview437 from "./component/Shadi article/shadiPreview/Preview437.jsx";
import Preview438 from "./component/Shadi article/shadiPreview/Preview438.jsx";
import Preview439 from "./component/Shadi article/shadiPreview/Preview439.jsx";
import Preview440 from "./component/Shadi article/shadiPreview/Preview440.jsx";
import Preview441 from "./component/Shadi article/shadiPreview/Preview441.jsx";
import Preview442 from "./component/Shadi article/shadiPreview/Preview442.jsx";
import Preview443 from "./component/Shadi article/shadiPreview/Preview443.jsx";
import Preview444 from "./component/Shadi article/shadiPreview/Preview444.jsx";
import Preview445 from "./component/Shadi article/shadiPreview/Preview445.jsx";
import Preview446 from "./component/Shadi article/shadiPreview/Preview446.jsx";
import HowToWriteBiodataForMarriage from "./component/Shadi article/HowToWriteBiodataForMarriage.jsx";

var images = [
  {
    id: 1,
    src: resum1,
    alt: "Professional Resume Template 1",
    description:
      "Professional and elegant resume template with a timeline structure",
  },
  {
    id: 2,
    src: resume2,
    alt: "Modern Resume Design 2",
    description: "Clean and modern resume portfolio or cv template",
  },
  {
    id: 3,
    src: resume3,
    alt: "Creative Resume Layout 3",
    description:
      "This Marketing Manager resume template is designed to easily pass the computer screenings.",
  },
  { id: 4, src: resume4, alt: "Elegant Resume Example 4", description: "" },
  // { id: 5, src: resume5, alt: 'Minimalist Resume Style 5' }, // Uncomment if used
  { id: 6, src: resume6, alt: "Corporate Resume Format 6" },
  { id: 7, src: resume7, alt: "Academic Resume Sample 7" },
  { id: 8, src: resume8, alt: "Infographic Resume Design 8" },
  { id: 9, src: resume9, alt: "Simple Resume Template 9" },
  { id: 10, src: resume10, alt: "Stylish Resume Example 10" },
  { id: 11, src: resume11, alt: "Functional Resume Format 11" },
  { id: 12, src: resume12, alt: "Colorful Resume Design 12" },
  { id: 13, src: resume13, alt: "Executive Resume Template 13" },
  { id: 14, src: resume14, alt: "Digital Resume Layout 14" },
];

var techImages = [
  { id: 101, src: profetional_resume_1, alt: "auto cade resume" },
  { id: 103, src: profetional_resume_3, alt: "image3" },
  { id: 102, src: profetional_resume_2, alt: "manager resume" },
  { id: 104, src: profetional_resume_4, alt: "hospital resume" },
  { id: 105, src: profetional_resume_5, alt: "hospital resume" },
  { id: 106, src: profetional_resume_6, alt: "hospital resume" },
  { id: 107, src: profetional_resume_7, alt: "hospital resume" },
  { id: 108, src: Basic_Ats_Resume_Template, alt: "Basic Ats Resume Template" },
  { id: 109, src: Creative_ATS_Resume_Template, alt: "Creative ATS" },
  {
    id: 110,
    src: Executive_ATS_Resume_Template,
    alt: "Executive ATS Resume Template",
  },
  {
    id: 111,
    src: Functional_ATS_Resume_Template,
    alt: "Functional ATS Resume Template",
  },
  {
    id: 112,
    src: Minimalist_ATS_Resume_Template,
    alt: "Minimalist-ATS-Resume-Template",
  },
  {
    id: 113,
    src: Modern_ATS_Resume_Template,
    alt: "Modern Ats Resume template",
  },
  {
    id: 114,
    src: Simple_ATS_Resume_Template,
    alt: "Simple-ATS-Resume-Template",
  },
  { id: 115, src: Tech_ATS_Resume_Template, alt: "Tech-ATS-Resume-Template" },
  {
    id: 116,
    src: Traditional_ATS_Resume_Template,
    alt: "Traditional-ATS",
  },
  {
    id: 117,
    src: Bank_Resume_Format_for_Freshers_PDF,
    alt: "Bank Resume ",
  },
];

const CoverImage = [
  { id: 201, src: cover_letter_1, alt: "cover leter", description: "" },
  { id: 202, src: cover_letter_2, alt: "", description: "" },
  {
    id: 203,
    src: basic_cover_letter_template,
    alt: "basic cover letter",
    description:
      "A classic but stylish design for the basic cover letter layout that has a minimalistic approach.",
  },
  {
    id: 204,
    src: college_cover_letter_template,
    alt: "college cover letter template",
    description:
      "College cover letter template for students applying for internships or part-time jobs, or for graduates applying for their first full-time job.",
  },
  {
    id: 205,
    src: combined_cover_letter_template,
    alt: "combined cover letter template",
    description:
      "A cover letter that matches your resume and helps you explain your achievements and skills.",
  },
  {
    id: 206,
    src: creative_cover_letter_template,
    alt: "creative cover letter template",
    description:
      "A creative cover letter template that matches your creative CV to create an eye-catching application.",
  },
  {
    id: 207,
    src: executive_cover_letter_template,
    alt: "executive cover letter template",
    description:
      "Executive cover letter sample having an up-to-date arrangement that aligns with the principles imposed by recruiters and employers.",
  },
  {
    id: 208,
    src: functional_cover_letter_template,
    alt: "functional cover letter template",
    description:
      "A functional cover letter template that will increase your chances of being called for an interview.",
  },
  {
    id: 209,
    src: general_cover_letter_template,
    alt: "general cover letter template",
    description:
      "This versatile cover letter format can be tailored for any job application, no matter the industry.",
  },
  {
    id: 210,
    src: hybrid_cover_letter_template,
    alt: "hybrid cover letter template",
    description:
      "Use this template when you need a job application that showcases your experience and skills equally.",
  },
  {
    id: 211,
    src: it_cover_letter_template,
    alt: "it covdedr letter template",
    description:
      "Are you applying for an IT job? Use this cover letter template to make the right impression.",
  },
  {
    id: 212,
    src: minimalist_cover_letter_template,
    alt: "minimalist cover letter template",
    description:
      "A crisp and simple cover letter is key to making the right impression with your minimalist resume or CV.",
  },
  {
    id: 213,
    src: modern_cover_letter_template,
    alt: "modern cover letter template",
    description:
      "Impress the recruiter with a modern cover letter template that has the perfect blend of functionality and design.",
  },
  {
    id: 214,
    src: professional_cover_letter_template,
    alt: "professional cover letter template",
    description:
      "A professional cover letter template that will make sure you will have higher chances of getting your dream job.",
  },
  {
    id: 215,
    src: simple_covder_letter_template,
    alt: " simple cover letter template",
    description:
      "A simple cover letter layout for those applying in more traditional industries such as banking, academia or law.",
  },
  {
    id: 216,
    src: skill_based_cover_letter_template,
    alt: "skill based cover letter template",
    description:
      "A cover letter template that is the perfect match for your skill-based resume used when changing careers.",
  },
  {
    id: 217,
    src: tech_cover_letter_template,
    alt: "tech cover letter template",
    description:
      "This cover letter format was created primarily to impress the job recruiters in the technology sector.",
  },
  {
    id: 218,
    src: traditional_cover_letter_template,
    alt: "traditional cover letter template",
    description:
      "The traditional cover letter template is one of the most common formats that employers expect to see.",
  },
];
const fresherResumeImage = [
  { id: 301, src: image_301, alt: "accountant resume" },
  { id: 302, src: image_302, alt: "babysitter resume" },
  { id: 303, src: image_303, alt: "cashier resume" },
  { id: 304, src: image_304, alt: "flight attendant" },
  { id: 305, src: image_305, alt: "line cook " },
  { id: 306, src: image_306, alt: "security guard " },
  { id: 307, src: image_307, alt: "social media" },
  { id: 308, src: image_308, alt: "web developer" },
  { id: 309, src: image_309, alt: "internship resume" },
];
const shadi_Card = [
  {
    id: 401,
    src: Border_Element,
    alt: "Border Element",
    number: "1/9",
    link: "https://example.com/1",
  },
  {
    id: 402,
    src: Border_Fashion,
    alt: "Border Fashion",
    number: "2/9",
    link: "https://example.com/2",
  },
  {
    id: 403,
    src: Border_married_Template,
    alt: "Border Married Template",
    number: "3/9",
    link: "https://example.com/3",
  },
  {
    id: 404,
    src: Corner_Star_Marrige_Template,
    alt: "Corner Star Marriage Template",
    number: "4/9",
    link: "https://example.com/4",
  },
  {
    id: 405,
    src: Elegant_Border_marriege_Invitation_Template,
    alt: "Elegant Border Marriage Invitation Template",
    number: "5/9",
    link: "https://example.com/5",
  },
  {
    id: 406,
    src: Free_Heart_Border_Clipart,
    alt: "Free Heart Border Clipart",
    number: "6/9",
    link: "https://example.com/6",
  },
  {
    id: 407,
    src: Free_Wedding_Heart_Border_Clipart,
    alt: "Free Wedding Heart Border Clipart",
    number: "7/9",
    link: "https://example.com/7",
  },
  {
    id: 408,
    src: Marrige_Clipart,
    alt: "Marriage Clipart",
    number: "8/9",
    link: "https://example.com/8",
  },
  {
    id: 409,
    src: Simple_Fancy_Border_Marrige_Template,
    alt: "Simple Fancy Border Marriage Template",
    number: "9/9",
  },

  {
    id: 410,
    src: abstract_modern_frame_template,
    alt: "Abstract Modern Frame Template",
    number: "9/9",
  },
  {
    id: 411,
    src: black_frame_hanging_vintage_style,
    alt: "Black Frame Hanging Vintage Style",
    number: "9/9",
  },
  {
    id: 412,
    src: blank_shimmering_golden_frame,
    alt: "Blank Shimmering Golden Frame",
    number: "9/9",
  },
  {
    id: 413,
    src: chinese_frame_vector_traditional,
    alt: "Chinese Frame Vector Traditional",
    number: "9/9",
  },
  {
    id: 414,
    src: classic_botanical_frame,
    alt: "Classic Botanical Frame",
    number: "9/9",
  },
  {
    id: 415,
    src: colorful_abstract_fram_border,
    alt: "Colorful Abstract Fram Border",
    number: "9/9",
  },
  {
    id: 416,
    src: colorful_border_gray_bg,
    alt: "Colorful Border Gray Bg",
    number: "9/9",
  },
  {
    id: 417,
    src: cute_white_daisy_pattern,
    alt: "Cute White Daisy Pattern",
    number: "9/9",
  },
  { id: 418, src: decorative_border, alt: "Decorative Border", number: "9/9" },
  {
    id: 419,
    src: decorative_ornamental_frame,
    alt: "Decorative Ornamental Frame",
    number: "9/9",
  },
  { id: 420, src: download, alt: "Download", number: "9/9" },
  {
    id: 421,
    src: empty_blue_border_frame,
    alt: "Empty Blue Border Frame",
    number: "9/9",
  },
  {
    id: 422,
    src: empty_white_picture_frame_origame,
    alt: "Empty White Picture Frame Origame",
    number: "9/9",
  },
  {
    id: 423,
    src: flate_lay_blue_floral_frame,
    alt: "Flate Lay Blue Floral Frame",
    number: "9/9",
  },
  {
    id: 424,
    src: flat_lay_summer_concept_frame,
    alt: "Flat Lay Summer Concept Frame",
    number: "9/9",
  },
  {
    id: 425,
    src: floral_arrangement_isolated_white,
    alt: "Floral Arrangement Isolated White",
    number: "9/9",
  },
  {
    id: 426,
    src: floral_frame_design,
    alt: "Floral Frame Design",
    number: "9/9",
  },
  {
    id: 427,
    src: floral_summer_frame_vector,
    alt: "Floral Summer Frame Vector",
    number: "9/9",
  },
  { id: 428, src: freepik_upload, alt: "Freepik Upload", number: "9/9" },
  {
    id: 429,
    src: gift_card_red_gold_border_template,
    alt: "Gift Card Red Gold Border Template",
    number: "9/9",
  },
  {
    id: 430,
    src: golden_ranctangle_with_watercolor,
    alt: "Golden Ranctangle With Watercolor",
    number: "9/9",
  },
  {
    id: 431,
    src: green_tropical_tree_leaves,
    alt: "Green Tropical Tree Leaves",
    number: "9/9",
  },
  {
    id: 432,
    src: hand_drawn_ornament_borders,
    alt: "Hand Drawn Ornament Borders",
    number: "9/9",
  },
  {
    id: 433,
    src: leaves_frame_isolated,
    alt: "Leaves Frame Isolated",
    number: "9/9",
  },
  {
    id: 434,
    src: mock_up_empty_frame,
    alt: "Mock Up Empty Frame",
    number: "9/9",
  },
  {
    id: 435,
    src: realistic_golden_frame_design,
    alt: "Realistic Golden Frame Design",
    number: "9/9",
  },
  {
    id: 436,
    src: realistic_photo_frame,
    alt: "Realistic Photo Frame",
    number: "9/9",
  },
  {
    id: 437,
    src: realistic_photo_frame_element,
    alt: "Realistic Photo Frame Element",
    number: "9/9",
  },
  {
    id: 438,
    src: realistic_yellow_frame,
    alt: "Realistic Yellow Frame",
    number: "9/9",
  },
  {
    id: 439,
    src: rectangle_bronze_frame_light_gray,
    alt: "Rectangle Bronze Frame Light Gray",
    number: "9/9",
  },
  {
    id: 440,
    src: rectangle_bronze_frame_white_bg,
    alt: "Rectangle Bronze Frame White Bg",
    number: "9/9",
  },
  {
    id: 441,
    src: squared_realistic_golden_frame,
    alt: "Squared Realistic Golden Frame",
    number: "9/9",
  },
  {
    id: 442,
    src: template_with_mandala_pattern,
    alt: "Template With Mandala Pattern",
    number: "9/9",
    link: "https://example.com/9",
  },
  {
    id: 443,
    src: top_view_white_floral_frame_pink,
    alt: "Top View White Floral Frame Pink",
    number: "9/9",
    link: "https://example.com/9",
  },
  {
    id: 444,
    src: vintage_old_school_style_beige_frame,
    alt: "Vintage Old School Style Beige Frame",
    number: "9/9",
    link: "https://example.com/9",
  },
  {
    id: 445,
    src: vintage_vector_holographkic_floaral_frame,
    alt: "Vintage Vector Holographkic Floaral Frame",
    number: "9/9",
    link: "https://example.com/9",
  },
  {
    id: 446,
    src: white_japanese_crane_with_rosemal,
    alt: "White Japanese Crane With Rosemal",
    number: "9/9",
    link: "https://example.com/9",
  },
];
const muslim_biodata = [
  {
    id: 501,
    src: Shadi3d,
    alt: "shadi 3d",
    short_description:
      "A luxurious golden arch with intricate designs framing deep red curtains, resembling a theater or grand entrance.",
  },
  {
    id: 502,
    src: blue_white,
    alt: "Blue White",
    short_description:
      "A dark, intricate floral geometric pattern with a three-dimensional effect, creating a mesmerizing background.",
  },
  {
    id: 503,
    src: blueGoden,
    alt: "BlueGolden",
    short_description:
      "A decorative blue frame with intricate floral patterns and scalloped edges, set against a white background.",
  },
  {
    id: 504,
    src: Blue_Golden_Lamp,
    alt: "Blue Golden Lamp",
    short_description:
      "A beautifully carved stone archway surrounded by lush greenery, leading to a bright blue sky with scattered clouds.",
  },
  {
    id: 505,
    src: Converted_Images,
    alt: "Converted image",
    short_description:
      "A majestic mosque with illuminated minarets reflecting on water, set against a night sky with a glowing full moon.",
  },
  {
    id: 506,
    src: DarkBlueStar,
    alt: "Dark BlueStar",
    short_description:
      "A green room with ornate arched windows and hanging lanterns, casting a warm glow in a serene, elegant setting.",
  },
  {
    id: 507,
    src: GoldenArch,
    alt: "Golden Arch",
    short_description:
      "An intricately designed golden window frame with an arched top, featuring detailed patterns and a regal appearance.",
  },
  {
    id: 508,
    src: GoldenColumn,
    alt: "Golden Column",
    short_description:
      "A teal background adorned with hanging lanterns on strings, creating a festive and warm ambiance with floral accents.",
  },
  {
    id: 509,
    src: GoldenArchWithGreen,
    alt: "Golden Arch With Green",
    short_description:
      "A white, three-dimensional floral geometric pattern with layered petals, creating a delicate and elegant design.",
  },
  {
    id: 510,
    src: GoldenCircle,
    alt: "Golden Circle",
    short_description:
      "A deep blue background with an ornate frame, decorated with hanging lanterns and intricate golden patterns, evoking a festive mood.",
  },
  {
    id: 511,
    src: LightBlueFlower,
    alt: "Light Blue Flower",
    short_description:
      "A serene night scene with a crescent moon, hanging lanterns, and starry sky, framed by delicate branches.",
  },
  {
    id: 512,
    src: MuslimBiodata,
    alt: "Muslim Biodata",
    short_description:
      "A black background framed by an intricate floral design with white flowers and swirling branches, creating a striking contrast.",
  },
  {
    id: 513,
    src: shadibiodata,
    alt: "shadi Biodata",
    short_description:
      "A black background framed by an intricate floral design with white flowers and swirling branches, creating a striking contrast.",
  },
  {
    id: 514,
    src: shadiBlackBg,
    alt: "shadi Black BG",
    short_description:
      "A black background framed by an intricate floral design with white flowers and swirling branches, creating a striking contrast.",
  },
  {
    id: 515,
    src: shadiCardWithWhite,
    alt: "Shadi Card With White",
    short_description:
      "A black background framed by an intricate floral design with white flowers and swirling branches, creating a striking contrast.",
  },
  {
    id: 516,
    src: shadiCardWithWhiteFlower,
    alt: "Shadi Card With White Flower",
    short_description:
      "A black background framed by an intricate floral design with white flowers and swirling branches, creating a striking contrast.",
  },
];

console.log("shadi_Card", shadi_Card);
const path = "mainpage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages(images)); // Replace with your actual data
    dispatch(loadTechImages(techImages));
    dispatch(loadCoverImages(CoverImage));
    // dispatch(marriedImage(shadi_Card))
  }, [dispatch]);
  // const result = useSelector((state) =>state.reducer)
  // console.log('image data:-',result)
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Preload Home CSS when Home page is loaded
    const preloadHomeCSS = document.createElement("link");
    preloadHomeCSS.rel = "preload";
    preloadHomeCSS.href = "../src/css/home.css"; // Link to Home's specific CSS file
    preloadHomeCSS.as = "style";
    document.head.appendChild(preloadHomeCSS);
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Router style={{ backgroundColor: "black", width: "100%" }}>
          <GoogleAnalytics />
          <Auth0Provider
            domain="sharukhmirza88.us.auth0.com"
            clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <AuthWrapper>
              <Navbar />
            </AuthWrapper>
          </Auth0Provider>

          <Routes style={{ width: "100%" }}>
            <Route
              path="https://sharukhmirza88.us.auth0.com/u/login?state=hKFo2SBrSmlGbld4Mkh5N2JoMUJVaVJSTUNzei1KRDZlVkxUVqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDZEX1o5bHVra21hRXNpdVFjSTY2YlRpQ1FPLW5VWnBHo2NpZNkgWFFGODVGVFlJODdQOXRYNHoxOE5sdzFucHkxTjhCbng"
              element={<Login />}
            />
            <Route path="/" element={<Home images={images} />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/template"
              exact
              element={
                <TemplatePage
                  images={images}
                  techImages={techImages}
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  shadi_Card={shadi_Card}
                  muslim_biodata={muslim_biodata}
                />
              }
            />
            {images.map((image) => (
              <Route
                key={image.id}
                path={`/mainpage/${image.id}`}
                element={
                  <MainPage
                    path={`/${path}/${image.id}`}
                    images={images}
                    CoverImage={CoverImage}
                  />
                }
              />
            ))}
            {techImages.map((image) => (
              <Route
                key={image.id}
                path={`/techmain/${image.id}`}
                element={
                  <MainPage
                    path={`/${path}/${image.id}`}
                    techImages={techImages}
                  />
                }
              />
            ))}
            {fresherResumeImage.map((image) => (
              <Route
                key={image.id}
                path={`/freshertemplate/${image.id}`}
                element={
                  <MainPage
                    path={`/${path}/${image.id}`}
                    fresherResumeImage={fresherResumeImage}
                  />
                }
              />
            ))}

            {shadi_Card.map((image) => (
              <Route
                key={image.id}
                path={`/shadi-card/${image.id}`}
                element={<ShadiFormForData shadi_Card={shadi_Card} />}
              />
            ))}
            {muslim_biodata.map((image) => (
              <Route
                key={image.id}
                path={`/muslim-biodata/${image.id}`}
                element={<ShadiFormForData muslim_biodata={muslim_biodata} />}
              />
            ))}

            <Route
              path="#"
              element={<TechImageShow techImages={techImages} />}
            />
            <Route
              path="#"
              element={
                <FresherimageCard fresherResumeImage={fresherResumeImage} />
              }
            />
            <Route
              path="#"
              element={
                <CombinedTemplates
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route path="#" element={<ShadiCard shadi_Card={shadi_Card} />} />
            <Route
              path="#"
              element={<MuslimShadiCard muslim_biodata={muslim_biodata} />}
            />
            {CoverImage.map((image) => (
              <Route
                key={image.id}
                path={`/cover_letter/${image.id}`}
                element={
                  <CoverLettermain
                    path={`/${path}/${image.id}`}
                    CoverImage={CoverImage}
                  />
                }
              />
            ))}
            <Route path="/myresume" element={<MyResume />} />
            <Route
              path="#"
              element={<CoverLetterMapping CoverImage={CoverImage} />}
            />
            <Route
              path="/cover_letter"
              element={<CoverLetter CoverImage={CoverImage} />}
            />
            <Route
              path="/coverletter_component"
              element={<CoverComponent CoverImage={CoverImage} />}
            />
            <Route
              path="/upload"
              element={<Upload CoverImage={CoverImage} />}
            />
            <Route path="/edit" element={<Edit CoverImage={CoverImage} />} />
            <Route path="/image-converter" element={<ImageConverter />} />
            <Route
              path="/privacypolicy"
              element={
                <PrivacyPolicy
                  images={images}
                  techImages={techImages}
                  CoverImage={CoverImage}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsAndServices />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/work_experience" element={<WorkExperience />} />
            <Route path="/soft_skills" element={<SoftSkills />} />
            <Route path="/social_media" element={<SocialMedia />} />
            <Route path="/refrences" element={<References />} />
            <Route path="/work_experience" element={<WorkExperience />} />
            <Route path="/personal_info" element={<PersonalInfo />} />
            <Route path="/language" element={<Language />} />
            <Route path="/key_skill" element={<KeySkills />} />
            <Route path="/honor_and_award" element={<HonorAndAward />} />
            <Route
              path="/hobbies"
              element={<Hobbies techImages={techImages} />}
            />
            <Route path="/education" element={<Education />} />
            <Route path="/certificate" element={<Certificate />} />
            {/* important post */}
            <Route
              path="/how-to-make-a-resume-2024"
              element={<HowToMakeResume2024 />}
            />
            <Route
              path="/how-to-write-a-cover-letter-guide-2024"
              element={<CoverLetterGuide />}
            />
            <Route
              path="/Interview_Question_Post"
              element={<InterviewQuestionPost />}
            />
            <Route path="/job_hunting" element={<JobHunting />} />
            <Route path="/ImportantPost" element={<ImportantPost />} />
            <Route path="/about-resumeera" element={<AboutResumeEra />} />
            <Route
              path="/how-to-create-a-professional-resume"
              element={<HowToCreateResume />}
            />
            <Route
              path="/tips-for-writing-a-cover-letter"
              element={<TipsForWritingCoverLetter />}
            />
            <Route
              path="/why-soft-skills-matter"
              element={<WhySoftSkillsMatter />}
            />
            <Route
              path="/top-resume-templates-for-2024"
              element={<TopResumeTemplates2024 />}
            />
            <Route
              path="/common-mistakes-to-avoid-on-your-resume"
              element={<CommonMistakesToAvoid />}
            />
            <Route
              path="/how-to-choose-the-right-resume-template"
              element={<ChooseTemplate />}
            />
            <Route
              path="/creating-a-resume-for-your-first-job"
              element={<FirstJobResume />}
            />
            <Route
              path="/how-to-highlight-achievements-in-a-resume"
              element={<HighlightAchievements />}
            />
            <Route
              path="/resume-tips-for-experienced-professionals"
              element={<ExperiencedResumeTips />}
            />
            <Route
              path="/crafting-a-modern-resume"
              element={<ModernResumeCrafting />}
            />
            <Route
              path="/how-to-format-a-resume-correctly"
              element={<CorrectResumeFormatting />}
            />
            <Route
              path="/what-employers-look-for-in-a-resume"
              element={<EmployerResumeExpectations />}
            />
            <Route
              path="/how-to-use-keywords-in-a-resume"
              element={<ResumeKeywords />}
            />
            <Route
              path="/improving-your-resume-with-action-verbs"
              element={<ActionVerbsResume />}
            />
            <Route
              path="/how-to-create-a-resume-for-international-jobs"
              element={<InternationalResume />}
            />
            <Route
              path="/resume-vs-cv-what-you-need-to-know"
              element={<ResumeVsCV />}
            />
            <Route
              path="/how-to-showcase-your-education-in-a-resume"
              element={<ShowcaseEducation />}
            />
            <Route
              path="/creating-a-resume-with-no-experience"
              element={<ResumeNoExperience />}
            />
            <Route
              path="/how-to-write-a-resume-for-career-change"
              element={<ResumeCareerChange techImages={techImages} />}
            />
            <Route
              path="/resume-writing-tips-for-remote-jobs"
              element={
                <ResumeRemoteJobs fresherResumeImage={fresherResumeImage} />
              }
            />
            <Route
              path="/resume-tip-component"
              element={<ResumeTipsComponent />}
            />
            <Route
              path="/xyz-formula-resume"
              element={
                <XYZFormula
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route path="/resume_component" element={<ResumeComponent />} />
            <Route
              path="/Things_To_Remove_From_Your_Cv"
              element={<ThingsToRemoveFromYourCV />}
            />
            <Route path="/Tip_for_Interview" element={<TipForInterview />} />
            <Route path="/AnupamKher_resume" element={<AnupamKherResume />} />
            <Route
              path="/free_resumesites_component"
              element={<FreeResumeSitesComponent />}
            />
            <Route
              path="/tailor-resume-job-description-chatgpt"
              element={<TailorResumeComponent />}
            />
            <Route path="/resume-trends-2024" element={<ResumeTrends2024 />} />
            <Route
              path="/remote-work-experience"
              element={<RemoteWorkExperience />}
            />
            <Route
              path="/how-to-write-a-resume-in-7-easy-steps"
              element={<HowToWriteAResume />}
            />
            <Route
              path="/what-are-your-strengths"
              element={<WhatAreYourStrengths />}
            />
            <Route
              path="/Dont_Copy_Paste_On_Your_Cv"
              element={<CVWritingTipsComponent2 />}
            />
            <Route
              path="/cybersecurity-resume-tips"
              element={<CyberSecurittyResume />}
            />
            <Route path="/11-essential-cv-tips-2024" element={<CVTips2024 />} />
            <Route
              path="/difference-between-cv-and-resume"
              element={<CvVsResume techImages={techImages} />}
            />
            <Route
              path="/create-your-perfect-resume-for-free"
              element={<FreeResumeBuilderForResumeEra />}
            />
            <Route
              path="/11-ats-formatting-mistakes-that-can-cost-you-a-job"
              element={<AtsFormattingMistake />}
            />
            <Route
              path="/it-cover-letter-guide-2024"
              element={<ItCoverLetter />}
            />
            <Route
              path="/management-cover-letter-example"
              element={<ManagementCoverLetter CoverImage={CoverImage} />}
            />
            <Route
              path="/mechanical-engineering-cover-letter-example/"
              element={<MechanicalEngineeringCoverLetterHelmet />}
            />
            <Route
              path="/administrative-assistant-cover-letter-example"
              element={
                <AdministrativeAssistantCoverLetter
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/lawyer-cover-letter-example"
              element={<LawyerCoverLetter />}
            />
            <Route
              path="/guide/resume-formatting"
              element={
                <FormattinResume
                  techImages={techImages}
                  images={images}
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route
              path="/fresher-resume-formatting"
              element={<FresherResumeFormatting />}
            />
            <Route
              path="/resume-formatting-entry-level"
              element={
                <ResumeFormatingForEntryLevel
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route
              path="/Resume_Formatting_Steps_for_Freshers"
              element={<ResumeFormattingStepsForFresher />}
            />
            <Route
              path="/ats-friendly-resume-format-for-beginners"
              element={
                <ATS_Friendly_Resume_Format_for_Beginners
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route
              path="/simple-resume-formatting-best-practices"
              element={<Simple_Resume_Formatting />}
            />
            <Route
              path="/fresher-resume-mistakes-you-should-avoid"
              element={<FresherResumeMistakes />}
            />
            <Route
              path="/college-graduates-perfect-resume-formatting-tips"
              element={<ResumeTipuForCollegeGraduates />}
            />
            <Route
              path="/Resume-Formatting-First-Time-Job-Seekers"
              element={<ResumeFormattingFirstTimeJobSeekers />}
            />
            <Route
              path="/Fresher-Resume-Formatting-Font-Layout"
              element={<FresherResumeFormattingComponentWithFontAndLayout />}
            />
            <Route
              path="/Professional-Resume-Format-Experienced"
              element={<ProfessionalResumeFormatforExperiencedCandidates />}
            />
            <Route
              path="/executive-resume-formatting-tips"
              element={<ExecutiveLevelResumeFormatting />}
            />
            <Route
              path="/career-change-resume-formatting"
              element={<CareerChangeResumeFormatting />}
            />
            <Route
              path="/chronological-resume-formatting-experienced-candidates"
              element={<ChronologicalResumeGuide />}
            />
            <Route
              path="/how-to-format-a-resume-for-leadership-jobs"
              element={<FormatResumeLeadershipJobs />}
            />
            <Route
              path="/how-to-highlight-achievements-in-resume-formatting"
              element={<HighlightAchievementsForResume />}
            />
            <Route
              path="/multi-page-resume-formatting"
              element={<MultiPageResumeFormatting />}
            />
            <Route
              path="/it-resume-formatting-tips"
              element={<ITResumeTips />}
            />
            <Route
              path="/healthcare-industry-ke-liye-resume-formatting-guide"
              element={<HealthcareResumeGuide />}
            />
            <Route
              path="/creative-and-designer-resume-tips"
              element={<CreativeAndDesignerResumeTips />}
            />
            <Route
              path="/best-resume-formatting-sales-marketing"
              element={<ResumeFormattingForSaleAndMarketing />}
            />
            <Route
              path="/resume_formatting_for_teachersAndProfessors"
              element={<ResumeFormattingForTeachersAndProfessors />}
            />
            <Route
              path="/resume-formatting-engineerig-students"
              element={
                <ResumeFormattingEngineeringStudents techImages={techImages} />
              }
            />
            <Route
              path="/resume-formatting-for-freelancers-and-remote-workers"
              element={<ResumeFormattingforFreelancersandRemoteWorkers />}
            />
            <Route
              path="/best-free-resume-formatting-tools-for-2025"
              element={<Best_Free_Resume_Formatting_Tools_for_2025 />}
            />
            <Route
              path="/8-best-online-tools-for-resume-formatting-for-2025"
              element={<ResumeFormattingTool />}
            />
            <Route
              path="/infographic-resume-formatting"
              element={<Infographic_Resume_Formatting />}
            />
            <Route
              path="/infographic-resume-formatting"
              element={<Infographic_Resume_Formatting />}
            />

            {/* interview quation and answer*/}

            <Route path="/Why_Work_Here" element={<WhyWorkHere />} />
            <Route
              path="/tell-us-about-yourself"
              element={<TellUsAboutYourself />}
            />
            <Route
              path="/why-should-we-hire-you"
              element={<WhyShouldWeHireYou />}
            />
            <Route
              path="/why_do_you_want_to_work"
              element={<WhyDoYouWantToWork />}
            />
            <Route
              path="/how-employer-describe"
              element={<HowEmployerDescribeYou />}
            />
            <Route path="/greatest-weakness" element={<GreatestWeakness />} />
            <Route path="/hobbies-interests" element={<HobbiesInterests />} />
            <Route
              path="/what-does-success-look-like-to-you"
              element={<WhatDoesSuccessLookLikeToYou />}
            />
            <Route
              path="/why-are-you-qualified-for-this-position"
              element={<WhyAreYouQualifiedForThisPosition />}
            />
            <Route
              path="/skills-for-success-in-role"
              element={<SkillsForSuccess />}
            />
            <Route
              path="/work-alone-or-group-preference"
              element={<WorkPreference />}
            />
            <Route
              path="/dealing-with-difficult-customers"
              element={<DifficultCustomerExample />}
            />
            <Route
              path="/Interview_Question_Post/How_Do_You_Handle_Stress_and_Pressure"
              element={<HowDoYouHandleStressAndPressure />}
            />
            <Route
              path="/where-do-you-see-yourself-in-five-years"
              element={<FiveYearPlanComponent />}
            />
            <Route
              path="/what-motivates-you-to-do-your-best-work"
              element={<MotivationToDoBestWork />}
            />
            <Route
              path="/how-do-you-handle-feedback-and-criticism"
              element={<HandleFeedbackAndCriticism />}
            />
            <Route
              path="/what-accomplishment-are-you-most-proud-of"
              element={<AccomplishmentQuestion techImages={techImages} />}
            />
            <Route
              path="/do-you-have-any-questions-for-us"
              element={<QuestionsForUs />}
            />
            <Route path="/tailor-your-resume" element={<TailorResumeGuide />} />
            <Route
              path="/Functional_vs_Chronological_Resume_Formatting"
              element={<ResumeFormattingArticle techImages={techImages} />}
            />
            <Route
              path="/government-job-resume-guide"
              element={<GovernmentJobResumeGuide />}
            />
            <Route
              path="/hospitality-tourism-resume-tips"
              element={<HospitalityandTourism />}
            />
            <Route
              path="/Best-Resume-Formatting-Tips-for-Real-Estate-Agents"
              element={<Resume_Formatting_Real_Estate_Agents />}
            />
            <Route
              path="/20-Resume-Formatting-Mistakes-You-Should-Avoid"
              element={<ResumeFormattinMistake />}
            />

            <Route
              path="/top-10-resume-formatting-errors"
              element={
                <ResumeFormattinError
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/why-ats-unfriendly-formatting-can-lead-to-resume-rejection"
              element={<AtsUnfriendlyResume />}
            />
            <Route
              path="/how-to-avoid-over-designing-your-resume-formatting"
              element={<OverDesignFormatting />}
            />
            <Route
              path="/font-and-size-mistakes"
              element={<FontAndSixMistake />}
            />
            <Route
              path="/Resume_Formatting_Errors_That_Fail_to_Reflect_Career_Breaks"
              element={
                <ReflectCareerBreaks
                  CoverImage={CoverImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/how-to-hide-spelling-and-grammar-mistakes-through-formatting-a-resume"
              element={<SpellingandGrammarMistakes />}
            />
            <Route
              path="/common-layout-mistakes-that-make-your-resume-unprofessional"
              element={<ResumeLayoutMistakes />}
            />
            <Route
              path="/professional-resume-format-pdf"
              element={<ProfessionalResumeFormatPDF />}
            />
            <Route path="/pdf-vs-word-resume" element={<PdfVsWordResume />} />
            <Route
              path="/chronological-vs-functional-resume-formatting"
              element={
                <ChronologicalVsFunctionalResume techImages={techImages} />
              }
            />
            <Route
              path="/infographic-resume-vs-traditional-resume-formatting"
              element={<InfographicVsTraditionalResumes />}
            />
            <Route
              path="/online-resume-builder-vs-manual-resume-builder-formatting"
              element={<OnlineVsManualResume />}
            />
            <Route
              path="/one-vs-multi-page-resume"
              element={<OneVsMultiPageResume />}
            />
            <Route
              path="/Modern-vs-traditiona-resume-formatting"
              element={<ModernResumeVsTraditionResume />}
            />
            <Route
              path="/ats-friendly-vs-creative-resume-format"
              element={<AtsFriendlyVsCreativeResume />} // done for submit
            />
            <Route
              path="/minimalist-vs-graphic-formatting"
              element={<MinimalistVsGraphic />} // done for submit
            />
            <Route
              path="/objective-vs-summary-statement-the-right-way-to-format-your-resume"
              element={<ObjectiveStatementVsSummaryStatement />} // done for submit
            />
            <Route
              path="/2025-resume-formatting-trends"
              element={<ResumeFormattingTrends2025 />} // done for submit
            />
            <Route
              path="/resume-formattin-for-ai-driven-application-tracking-system"
              element={
                <ResumeFormattingforAIDrivenApplicationTrackingSystems />
              } // done for submit
            />
            <Route
              path="/how-to-present-personal-branding-through-resume-formatting"
              element={<PresentingPersonalBranding />} // done for submit
            />
            <Route
              path="/how-to-create-resume-formatting-that-matches-your-linkedin-profile"
              element={<MatchesYourLinkedInProfile />} // done for submit
            />
            <Route
              path="/modern-resume-formatting-with-interactive-elements"
              element={<ModernResumeFormatting />} // done for submit
            />

            <Route
              path="/data-driven-resume-formatting-for-analytical-jobs-formatting-for-analytical-jobs"
              element={<DataDrivenResumeArticle />} // done for submit
            />
            <Route
              path="/social-media-influencer-resume-formatting"
              element={<InfluencerResumeGuide />} // done for submit
            />
            <Route
              path="/job-specific-resume-formatting"
              element={<JobSpecificResumeFormatting />} // done for submit
            />
            <Route
              path="/freelancers-portfolio-resume-formatting-tips"
              element={<PortfolioResumeTips />} // done for submit
            />
            <Route
              path="/remote-resume-formatting-crafting-a-standout-resume-for-remote-jobs"
              element={<RemoteResumeFormattin />} // done for submit
            />
            <Route
              path="/personalized-resume-formatting-for-international-jobs"
              element={<ResumeFormattingforInternational />} // done for submit
            />
            <Route
              path="/resume-formatting-your-ultimate-guide-to-landing-more-interviews"
              element={<ResumeFormattintoMoreInterview />} // done for submit
            />
            <Route
              path="/download-best-resume-format-pdf-create-perfect-resume"
              element={<DownloadtheBestResumeFormatPDF />} // done for submit
            />
            <Route
              path="/top-resume-format-pdf-job-seekers-free-templates-get-hired-fast"
              element={<TopResumeFormatPDFforJobSeekers />} // done for submit
            />
            <Route
              path="/effortless-resume-creation-download-professional-resume-format-pdf"
              element={<EffortlessResumeCreation />} // done for submit
            />
            <Route
              path="/resume-format-pdf-guide-perfect-templates-for-a-standout-cv"
              element={
                <ResumeFormatPDFGuide
                  images={images}
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                />
              } // done for submit
            />
            <Route
              path="/get-hired-faster-the-ultimate-resume-format-pdf-for-your-career"
              element={<GetHiredFaster />} // done for submit
            />
            <Route
              path="/how-to-choose-the-right-resume-format-pdf-free-templates-inside"
              element={<HowtoChoosetheRightResumeFormatPDF />} // done for submit
            />
            <Route
              path="/free-resume-format-pdf-simple-professional-and-ready-to-download"
              element={<FreeResumeFormat />} // done for submit
            />
            <Route
              path="/create-your-dream-job-resume-top-resume-format-pdf-templates-available"
              element={<CreateYourDreamJobResume />} // done for submit
            />
            <Route
              path="/step-by-step-resume-creation-with-our-free-resume-format-pdf-templates"
              element={<StepbyStepResumeCreation />} // done for submit
            />
            <Route
              path="/free-resume-format-pdf-build-a-cv-that-stands-out"
              element={
                <FreeResumeFormatPDF
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                  images={images}
                />
              } // done for submit
            />
            <Route
              path="/complete-guide-to-resume-format-pdf-your-key-to-landing-any-job"
              element={<CompleteGuidetoResumeFormatPDF />} // done for submit
            />
            <Route
              path="/download-a-professional-resume-format-pdf-simple-fast-effective"
              element={<DownloadaProfessionalResumeFormatPDF />} // done for submit
            />
            <Route
              path="/how-to-build-the-perfect-resume-with-a-resume-format-pdf"
              element={<HowtoResumeGuide />} // done for submit
            />
            <Route
              path="/the-ultimate-collection-of-resume-format-pdfs-for-job-seekers"
              element={<UltimateCollectionofResumeFormatPDF />} // done for submit
            />
            <Route
              path="/my-top-10-free-resume-format-pdfs-for-landing-your-dream-job"
              element={<MyTop10FreeResumeFormatPDF />} // done for submit
            />
            <Route
              path="/download-your-free-resume-format-pdf-today-and-stand-out"
              element={<DownloadYourFreeResumeFormatPDF />} // done for submit
            />
            <Route
              path="/find-the-right-resume-format-pdf-for-your-career-growth"
              element={<FindtheRightResumeFormatPDF />} // done for submit
            />
            <Route
              path="/looking-for-resume-format-pdf-get-free-templates"
              element={<LookingforaResumeFormatPDF />} // done for submit
            />
            <Route
              path="/download-resume-format-pdf-for-freshers-simple-and-effective"
              element={<DownloadResumeFormatPDFforFreshers />}
            />
            <Route
              path="/best-resume-format-pdf-for-professionals-download-now"
              element={<BestResumeFormatPDFforProfessionals />}
            />
            <Route
              path="/how-to-create-a-winning-resume-using-resume-format-pdf"
              element={<HowtoCreateaWinningResume />}
            />
            <Route
              path="/easy-to-use-resume-format-pdf-for-job-seekers"
              element={<EasytoUseResumeFormatPDFforJobSeekers />}
            />
            <Route
              path="/top-resume-format-pdfs-for-high-impact-resumes"
              element={<TopResumeFormatPDF />}
            />
            <Route
              path="/free-resume-format-pdf-templates-perfect-for-your-next-job"
              element={<FreeResumeFormatPDFTemplates />}
            />
            <Route
              path="/how-to-create-a-stunning-resume-using-a-resume-format-pdf"
              element={<HowtoCreateaStunningResume />}
            />
            <Route
              path="/craft-the-perfect-resume-with-our-free-resume-format-pdf"
              element={
                <CraftthePerfectResumewithOurFreeResumeFormatPDF
                  techImages={techImages}
                  images={images}
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route
              path="/free-resume-format-pdf-design-your-resume-in-minutes"
              element={<FreeResumeFormatPDFdesign />}
            />
            <Route
              path="/resume-format"
              element={<ResumeFormat techImages={techImages} />}
            />
            <Route
              path="/resume-format-pdf"
              element={
                <ResumeFormatPDF
                  fresherResumeImage={fresherResumeImage}
                  images={images}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-formatting"
              element={
                <ResumeFormatting
                  fresherResumeImage={fresherResumeImage}
                  images={images}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/professional-resume-format-pdf-download"
              element={<ProfessionalResumeFormat />}
            />
            <Route
              path="/craft-perfect-resume-with-free-format-pdf"
              element={<CraftthePerfectResume />}
            />
            <Route
              path="/your-step-by-step-guide-to-a-professional-resume-format-pdf"
              element={<YourStepbyStepGuide />}
            />
            <Route
              path="/create-a-resume-that-gets-results-best-resume-format-pdfs"
              element={<CreateResumeThatGetsResults />}
            />
            <Route
              path="/top-resume-format-pdf-for-job-seekers-free-to-download"
              element={<TopResumeFormatPDFforJobSeekers />}
            />
            <Route
              path="/optimize-your-resume-with-the-best-resume-format-pdf-templates"
              element={
                <OptimizeYourResumewiththeBestResumeFormatPDFTemplates />
              }
            />
            <Route
              path="/get-the-right-resume-format-pdf-for-your-job-search"
              element={<GettheRightResumeFormatPDF />}
            />
            <Route
              path="/the-best-resume-format-pdf-for-career-success"
              element={<TheBestResumeFormat />}
            />
            <Route
              path="/download-the-top-resume-format-pdf-for-your-job-application"
              element={<DownloadtheTopResumeFormatPDF />}
            />
            <Route
              path="/free-resume-format-pdf-for-freshers-ready-to-download"
              element={<FreeResumeFormatPDFforFreshers />}
            />
            <Route
              path="/ultimate-resume-format-pdf-for-career-advancements"
              element={<TheUltimateResumeFormatPDF />}
            />
            <Route
              path="/how-to-pick-the-right-resume-format-pdf-for-your-skills"
              element={<HowPicktheRightResumeFormatPDF />}
            />
            <Route
              path="/get-hired-with-the-best-resume-format-pdf-templates-available"
              element={<GetHiredwiththeBestResumeFormat />}
            />
            <Route
              path="/free-resume-format-pdf-templates-to-help-you-land-your-dream-job"
              element={<FreeResumeFormatPDFTemplates />}
            />
            <Route
              path="/top-resume-format-pdf-downloads-for-a-perfect-cv"
              element={<TopResumeFormatPDFDownloads />}
            />
            <Route
              path="/best-resume-format-pdfs-for-creating-a-professional-cv"
              element={<BestResumeFormatPDFforCreatingProfessionalCV />}
            />
            <Route
              path="/resume-format-pdf-for-freshers-easy-to-download-and-customize"
              element={<ResumeFormatPDFforFreshers />}
            />
            <Route
              path="/simple-yet-professional-resume-format-pdf-get-your-job-now"
              element={<SimpleYetProfessionalResumeFormatPDF />}
            />
            <Route
              path="/unlock-your-career-potential-with-the-right-resume-format-pdf"
              element={<UnlockqaqYourCareerPotential />}
            />
            <Route
              path="/free-downloadable-resume-format-pdfs-for-all-professions"
              element={<FreeDownloadableResumeFormatPDFs />}
            />
            <Route
              path="/free-downloadable-resume-format-pdfs-for-all-professions"
              element={<HowtoBuildanImpactfulResume />}
            />
            <Route
              path="/resume-format-pdf-free-templates-that-make-a-difference"
              element={
                <ResumeFormatPDFFreeTemplates
                  images={images}
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            {/*  */}
            <Route
              path="/get-noticed-with-the-best-resume-format-pdf-free-download-2025"
              element={<GetNoticedwiththeBestResume />}
            />
            <Route
              path="/get-noticed-with-a-professional-resume-format-pdf-free-download-now"
              element={<GetNoticewithProfetionalResumeFormatPDF />}
            />
            <Route
              path="/simple-resume-format-pdf-job-seekers-2025-download-now"
              element={<SimpleResumeFormatPDFJobSeekers />}
            />
            <Route
              path="/the-complete-guide-to-choosing-the-right-resume-format-pdf"
              element={<TheCompleteGuidetoChoosing />}
            />
            <Route
              path="/free-resume-format-pdf-2025-perfect-for-career-success-download-now"
              element={<PerfectforCareerSuccess />}
            />
            <Route
              path="/resume-format-pdf-that-will-get-you-energy-in-interview"
              element={<GetYouenergyininterview />}
            />
            <Route
              path="/resume-mistakes-you-need-to-avoid-in-2025"
              element={<ResumeMistakesYouNeed />}
            />
            <Route
              path="/job-applications-resume-format-pdf-download-now-2025"
              element={<JobApplicationsResumeFormat />}
            />
            <Route
              path="/how-to-use-resume-format-pdfs-2025-winning-job-application"
              element={<WinningJobApplication />}
            />
            <Route
              path="/perfect-your-resume-with-the-best-resume-format-pdfs"
              element={<PerfectResumeBestResume />}
            />
            <Route
              path="/best-resume-format-pdf-for-immediate-job-offers-2025-download-free-now"
              element={<ResumeImmediateJobOffers />}
            />
            <Route
              path="/free-top-resume-format-pdf-successful-career-2025-download-now"
              element={
                <ResumeFormatPDFSuccessfull
                  images={images}
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                />
              }
            />
            <Route
              path="/top-resume-format-pdf-for-careersuccess"
              element={<TopResumeFormatPDFforCareer />}
            />
            <Route
              path="/download-resume-format-pdf-today"
              element={<DownloadYourResumeFormat />}
            />
            <Route
              path="/free-resume-format-pdfs"
              element={<BuildYourBestCVNow />}
            />
            <Route
              path="/how-to-optimize-killer-resume-format-pdf-2025"
              element={<HowtoOptimizeYourKiller />}
            />
            <Route
              path="/how-to-respond-to-a-linkedin-recruiter"
              element={<LinkedInRecruiterResponseGuide />}
            />
            <Route
              path="/simple-resume-format-word"
              element={<SimpleResumeFormatWord />}
            />
            <Route
              path="/simple-resume-format-pdf"
              element={<SimpleResumeformatpdf />}
            />
            <Route
              path="/resume-format-pdf-free-download"
              element={
                <ResumeFormatPDFFreeDownload
                  fresherResumeImage={fresherResumeImage}
                  images={images}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/pdf-resume-format-free-download"
              element={<PDFResumeFormatFreeDownload techImages={techImages} />}
            />
            <Route
              path="/resume-pdf"
              element={<ResumePdf techImages={techImages} />}
            />
            <Route
              path="/resume-format-pdf-for-fresher"
              element={<ResumeFormatPDFforFresher techImages={techImages} />}
            />
            <Route
              path="/resume-pdf-download"
              element={<ResumePDFDownload techImages={techImages} />}
            />
            <Route
              path="/resume-quotes"
              element={<ResumeQoutes techImages={techImages} />}
            />
            <Route
              path="/simple-resume-format-pdf-download"
              element={
                <SimpleResumeFormatPDFDownload techImages={techImages} />
              }
            />
            <Route
              path="/how-to-make-a-resume-for-freshers"
              element={<HowtoMakeaResumeforFreshers techImages={techImages} />}
            />
            <Route
              path="/how-to-write-a-strong-resume-objective"
              element={
                <HowtoWriteaStrongResumeObjective
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-for-internship"
              element={
                <ResumeForInternship
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/attention-grabbing-resume-summary"
              element={
                <AttentionGrabbingResumeSummary
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/bank-resume-format-for-freshers-pdf"
              element={
                <BankResumeFormatforFreshersPDF
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/functional-resume-format"
              element={
                <FunctionResumeFormat
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-format-for-freshers"
              element={
                <Resumeformatforfreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-format-for-freshers-sample-download-now-free"
              element={
                <ResumeFormatforFreshersSample
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-format-for-freshers-example"
              element={
                <ResumeFormatForFreshersExample
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/job-resume-format-for-fresher"
              element={
                <Jobresumeformatforfresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/good-resume-format-for-freshers"
              element={
                <GoodresumeFormatForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/pdf-of-resume-format-for-freshers"
              element={
                <PDFofResumeFormatforFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-format-for-freshers-free-download"
              element={
                <ResumeFormatForFreshersFreeDownload
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/model-resume-format-for-freshers"
              element={
                <MODELRESUMEFORMATFORFRESHERS
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/what-is-the-best-resume-format-for-freshers"
              element={
                <WhatistheBestResumeFormatforFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/types-of-resume-formats-for-freshers"
              element={
                <TypesofResumeFormatsforFresers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/step-by-step-guide-resume-format-for-freshers"
              element={
                <Stepd_by_StepGuidetoWritingaFresherResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/what-is-a-functional-resume"
              element={
                <WhatisaFunctionalResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/how-to-create-a-teenager-resume-without-work-experience"
              element={
                <TeenagerResumeWithoutWorkExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/how-to-create-a-resume-for-your-first-job-as-a-student"
              element={
                <HowtoCreateaResumeforYourFirstJobasaStudent
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/1st-job-resume-examples"
              element={
                <FirstJobResumeExamples
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/student-resume-examples-with-no-experience"
              element={
                <StudentResumeExampleswithNoExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/how-to-create-a-student-cv-template-with-no-experience"
              element={
                <StudentCVTemplatewithNoExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-example-for-students-first-job"
              element={
                <ResumeExamplesforStudentsFirstJob
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-examples-for-no-work-experience"
              element={
                <ResumeExamplesforNoWorkExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/crafting-a-sample-resume-for-students-with-no-work-experience"
              element={
                <SampleResumeforStudentswithNoWorkExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/student-resume-for-your-first-job"
              element={
                <Studentresumeforfirstjob
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/resume-for-a-15-year-old-first-job"
              element={
                <Resumefora15YearOldfirstjob
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-for-your-first-job-in-high-school"
              element={
                <TeenagerResumeforYourFirstJobinHighSchool
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-for-your-first-job"
              element={
                <TeenagerResumeforYourFirstJob
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume"
              element={
                <TeenagerResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-examples"
              element={
                <TeenagerResumeexamples
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-template"
              element={
                <TeenagerResumeTemplate
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-with-no-work-experience"
              element={
                <TeenagerResumewithNoWorkExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/teenager-resume-with-no-job-experience"
              element={
                <TeenagerResumewithNoJobExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/how-to-create-google-resume-format"
              element={
                <GoogleResumeformat
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                />
              }
            />
            <Route
              path="/sample-teenager-resume-free-create-and-download"
              element={
                <SampleTeenagerResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-an-attention-grabbing-resume-summary"
              element={
                <ResumeSummary
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/download-free-teenager-resume-templates"
              element={
                <FreeTeenagerResumeTemplates
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/hig-hschool-teenager-resume"
              element={
                <Highschoolteenagerresume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/teenager-resume-for-college-entrance"
              element={
                <Teenagerresumeforcollegeentrance
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/skills-for-teenager-resume-examples"
              element={
                <SkillsForTeenagerResumeExamples
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/sample-of-teenager-resume-template"
              element={
                <SampleoOfTeenagerResumeTemplate
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/student-resume-for-internships"
              element={
                <StudentResumeForInternships
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/sample-resume-high-school-internships"
              element={
                <SampleResumeforHighSchoolStudentsApplyingforInternships
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/internship-resume-examples-for-teenagers"
              element={
                <InternshipResumeExamplesForTeenagers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-a-resume-for-a-teenage-internship"
              element={
                <HowtoWriteaResumeforaTeenageInternship
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-student-resume-templates-for-internships"
              element={
                <HighSchoolInternshipResumeTemplates
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/best-resume-format-for-teen-internships"
              element={
                <BestTeenInternshipResumeFormat
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/entry-level-resume-examples-for-high-school-students"
              element={
                <EntryLevelHighSchoolResumeExamples
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/tips-for-creating-a-teenage-internship-resume"
              element={
                <Tipsforcreatingateenageinternshipresume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-internship-resume-with-no-experience"
              element={
                <NoExperienceHighSchoolInternshipResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-internship-resume-with-no-experience"
              element={
                <HighSchoolInternshipResumeNoExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/downloadable-teen-internship-templates"
              element={
                <DownloadableTeenInternshipTemplates
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/effective-resume-writing-for-high-school-internships"
              element={
                <EffectiveResumeWritingForHighSchoolInternships
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-student-resume-examples-for-job-applications"
              element={
                <HighSchoolStudentResumeExamplesForJobApplications
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-list-extracurricular-activities-on-a-teen-resume"
              element={
                <HowToListExtracurricularActivitiesOnATeenResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/objective-statement-examples-for-teenage-internship-resumes"
              element={
                <ObjectiveStatementExamplesForTeenageInternshipResumes
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-resume-examples-with-no-work-experience"
              element={
                <HighSchoolResumeExamplesWithNoWorkExperience
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/skills-to-include-on-a-high-school-internship-resume"
              element={
                <Skillstoincludeonahighschoolinternshipresume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/free-resume-templates-for-high-school-students"
              element={
                <FreeResumeTemplatesForHighSchoolStudents
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-format-a-resume-for-a-teenage-internship"
              element={
                <HowToFormatAResumeForATeenageInternship
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/high-school-student-resume-for-part-time-jobs"
              element={
                <HighSchoolStudentResumeForPartTimeJobs
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-a-job-resume-for-a-high-school-student"
              element={
                <HowToWriteAJobResumeForAHighSchoolStudent
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-resume-for-12th-pass-student"
              element={
                <ResumeFor12thPassStudent
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/twelth-student-resume-for-part-time-jobs"
              element={
                <ResumeFor12thStudentPartTimeJobs
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/bank-resume-format"
              element={
                <BankResumeFormat
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-format-for-bank-job"
              element={
                <ResumeFormatForBankJob
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/bank-resume-format-for-freshers"
              element={
                <BankResumeFormatForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/hdfc-bank-resume-format"
              element={
                <HDFCBankResumeFormat
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-format-for-bank-job-fresher"
              element={
                <ResumeFormatForBankJobFresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/banking-resume"
              element={
                <BankingResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/bank-resume-format-for-freshers-pdf-guide-free-download"
              element={
                <BankResumeFormatForFreshersPDFGuide
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/icici-bank-resume-format-for-freshers"
              element={
                <ICICIBankResumeFormatForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/bank-resume-format-freshers"
              element={
                <BankResumeFormatFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/axis-bank-resume-format-for-freshers-guide-create-update-download"
              element={
                <AxisBankResumeFormatForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-create-resume-for-freshers"
              element={
                <HowToCreateResumeForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/format-of-resume"
              element={
                <FormatOfResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/fresher-resume-template"
              element={
                <FresherResumeTemplate
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/freshers-resume"
              element={
                <FreshersResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-template-for-fresher"
              element={
                <ResumeTemplateForFresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-format-for-fresher"
              element={
                <ResumeFormatForFresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-for-fresher-student"
              element={
                <ResumeForFresherStudent
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/sample-resume-for-freshers"
              element={
                <SampleResumeForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-for-fresher"
              element={
                <ResumeForFresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/xyz-resume-generator"
              element={
                <XYZResumeGenerator
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-quote"
              element={
                <ResumeQuotes
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/pattern-of-resume-for-freshers"
              element={
                <Patternofresumeforfreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/fresher-resume-summary"
              element={
                <FreshersResumeSummary
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/cv-summary-for-fresher"
              element={
                <Cvsummaryforfresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-summary-for-it-freshers"
              element={
                <Resumesummaryforitfreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-synopsis-for-freshers"
              element={
                <Resumesynopsisforfreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/profile-summary-for-freshers"
              element={
                <Profilesummaryforfreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/professional-summary-in-resume-for-fresher"
              element={
                <Professionalsummaryinresumeforfresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/professional-summary-in-resume-for-fresher"
              element={
                <ProfessionalSummaryForFresher
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-heading-and-summary-for-freshers"
              element={
                <ResumeHeadingAndSummaryForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/summary-for-resume-for-freshers-example"
              element={
                <SummaryForResumeForFreshersExample
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-profile-summary-for-freshers"
              element={
                <ResumeProfileSummaryForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/profile-summary-for-resume-for-freshers"
              element={
                <ProfileSummaryForResumeForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/about-me-resume-examples-for-freshers-tip-guide-sample"
              element={
                <AboutMeResumeExamplesForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/description-for-resume-for-freshers-tip-guide-sample"
              element={
                <DescriptionForResumeForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/best-summary-for-resume-for-freshers-tips-examples-templates"
              element={
                <BestSummaryForResumeForFreshers
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/fresher-summary-for-resume-tips-examples-templates"
              element={
                <FresherSummaryForResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/what-should-i-add-my-resume-as-a-fresher"
              element={
                <WhatShouldIAddinMyResume
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/resume-for-ai-driven-hiring-systems"
              element={
                <AI_DrivenHiringSystems
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/enhance-resume-visibility"
              element={
                <Enhanceresumevisibility
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/tool-for-resume-building"
              element={
                <ToolForResumeBuilding
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/hundered-percent-free-resume-builder"
              element={
                <HundredPercentfreeresumebuilder
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/effective-cover-letter-tips"
              element={<CoveerLetterTips CoverImage={CoverImage} />}
            />
            <Route
              path="/cover-letter-length-guide"
              element={<CoverLetterLengthGuide CoverImage={CoverImage} />}
            />
            <Route
              path="/cover-letter-with-no-experience"
              element={<Coverletterwithnoexperience CoverImage={CoverImage} />}
            />
            <Route
              path="/cover-letter-best-practices"
              element={<CoverLetterBestPractices CoverImage={CoverImage} />}
            />
            <Route
              path="/common-cover-letter-mistake"
              element={<CommonCoverLetterMistake CoverImage={CoverImage} />}
            />
            <Route
              path="/cover-letter-for-recent-graduates"
              element={
                <CoverLetterForRecentGraduates CoverImage={CoverImage} />
              }
            />
            <Route
              path="/crafting-an-impactful-hr-manager-cover-letter"
              element={<CraftingHRManagerCoverLetter CoverImage={CoverImage} />}
            />
            <Route
              path="/short-cover-letter-sample-for-customer-service"
              element={
                <ShortCoverLetterCustomerService CoverImage={CoverImage} />
              }
            />
            <Route
              path="/short-cover-letter-sample-for-fresher"
              element={<ShortCoverLetterForFresher CoverImage={CoverImage} />}
            />
            <Route
              path="/sample-cover-letter-for-job-application"
              element={
                <SampleCoverLetterForJobApplication CoverImage={CoverImage} />
              }
            />
            <Route
              path="/resume-vs-cover-letter-what-you-need-to-know"
              element={
                <ResumeVsCoverLetter
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/tips-for-writing-a-general-cover-letter"
              element={<GeneralCoverLetter CoverImage={CoverImage} />}
            />
            <Route
              path="/crafting-a-standout-civil-engineering-resume-for-freshers"
              element={
                <CivilEngineeringResumeforFreshers
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/crafting-an-outstanding-react-js-developer-resume"
              element={
                <ReactJsDeveloperResume
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-craft-an-impressive-assistant-professor-resume"
              element={
                <AssistantProfessorResumeSamplePdf
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-the-perfect-electrician-resume-pdf"
              element={
                <ElectricianResumedf
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/crafting-a-sample-resume-for-assistant-professor-fresher-pdf"
              element={
                <SampleResumeForAssistantProfessorFresherPdf
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/crafting-an-effective-servicenow-developer-resume"
              element={
                <ServicenowDeveloperResume
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/us-it-recruiter-resume-your-gateway-to-career-success"
              element={
                <USITRecruiterResumeGuide
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-write-an-automation-testing-resume-for-2-years-in-experience"
              element={
                <AutomationTestingResumeGuide
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-i-created-the-perfect-ayurveda-doctor-resume-that-got-me-interviews"
              element={
                <AyurvedaDoctorResumeGuide
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-craft-the-perfect-bams-doctor-resume-that-will-land-you-interviews"
              element={
                <BAMSDoctorResumeGuide
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/how-to-honda-careers-resume-upload"
              element={
                <HondaCareersResumeUpload
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/iti-fitter-resume-format"
              element={
                <ITIFitterResumeFormat
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/process-associate-resume-format"
              element={
                <ProcessAssociateResumeFormat
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/crafting-an-outstanding-react-js-resume"
              element={
                <ReactJSResumeFormat
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/crafting-an-effective-resume-for-c++-developer"
              element={
                <CppDeveloperResumeFormat
                  CoverImage={CoverImage}
                  fresherResumeImage={fresherResumeImage}
                  techImages={techImages}
                  images={images}
                />
              }
            />
            <Route
              path="/marriage-biodata-in-hindi"
              element={
                <MarriageBiodataInHindi
                  shadi_Card={shadi_Card}
                  muslim_biodata={muslim_biodata}
                />
              }
            />
            <Route
              path="/how-to-write-biodata-for-marriage"
              element={
                <HowToWriteBiodataForMarriage
                  shadi_Card={shadi_Card}
                  muslim_biodata={muslim_biodata}
                />
              }
            />





            <Route path="/Blog_or_Career_Tips_Page" element={<BlogCareer />} />
            <Route
              path="/how-to-land-your-dream-job"
              element={<DreamJob2024 />}
            />
            <Route
              path="/top-job-search-websites"
              element={<TopJobSearchWebsites />}
            />
            <Route path="/networking-tips" element={<NetworkingTips />} />
            <Route
              path="/linkedin-job-hunting"
              element={<LinkedInJobHunting />}
            />
            <Route
              path="/follow-up-after-interview"
              element={<FollowUpAfterAJobInterview />}
            />
            <Route
              path="/Salary_Negotiation_Component"
              element={<SalaryNegotiationComponent />}
            />
            <Route
              path="/Best_Online_CV_Builder"
              element={<BestOnlineCVBuilder />}
            />
            <Route
              path="/Best_AI_Resume_Builder"
              element={<BestAIResumeBuilder />}
            />
            <Route
              path="/free-online-resume-maker"
              element={<FreeOnlineResumeMaker />}
            />
            <Route
              path="/free-resume-builder"
              element={<FreeResumeBuilder />}
            />
            <Route
              path="/9-things-you-need-to-know-about-ATS-in-2024"
              element={<ATS2024 />}
            />
            <Route
              path="/tailor-resume-to-job-description"
              element={
                <TailorResume
                  techImages={techImages}
                  fresherResumeImage={fresherResumeImage}
                  images={images}
                />
              }
            />
            <Route
              path="/recruiters-guide-writing-resume"
              element={<ResumeGuide />}
            />
            <Route
              path="/why-do-you-have-a-gap-in-your-job-history"
              element={<JobGapExplanation />}
            />
            <Route
              path="/how-to-build-relationships-with-your-coworkers"
              element={<BuildRelationshipsWithCoworkers />}
            />
            <Route
              path="/5-mistake-to-getting-job"
              element={<ResumeMistakes />}
            />
            <Route
              path="/8-reasons-for-interview-rejection"
              element={<RejectionReasonsComponent />}
            />
            <Route path="/10-brutal-career-traps" element={<CareerTraps />} />
            <Route path="/10-resume-hacks" element={<ResumeHacks />} />
            <Route
              path="/workplace-stress-management"
              element={<WorkplaceStressGuide />}
            />
            <Route path="/ai-bias-in-hiring" element={<AIBiasInHiring />} />
            <Route
              path="/sleep-and-productivity"
              element={<SleepAndProductivity />}
            />
            <Route
              path="/research-company-tips"
              element={<ResearchCompanyTips />}
            />
            <Route
              path="/Growing_Gap_in_Soft_Skills"
              element={<SoftSkillsArticle />}
            />
            <Route
              path="/how-recruiting-in-europe-differs-from-us"
              element={<RecruitingDifferencesSection />}
            />
            {/* job hunting */}
            <Route
              path="/top-careers-for-introverts"
              element={<JobIntrovertComponent />}
            />
            <Route
              path="/how-to-spin-job-hopping-as-an-asset"
              element={<JobHoppingAsset />}
            />

            {/* Motivational Link */}
            <Route path="/motivation-link" element={<MotivationLink />} />
            <Route path="/types-of-laziness" element={<TypesOfLaziness />} />
            <Route path="/pictures8" element={<Pictures8 />} />
            <Route
              path="/motivate-yourself-to-study"
              element={<MotivateToStudy />}
            />
            <Route path="/remove-bad-habits" element={<RemoveBadHabits />} />
            <Route path="/linkedIn_post" element={<Linkedin />} />
            <Route
              path="/35-career-quotes-to-motivate"
              element={<MotivationalCareerQuotes />}
            />
            <Route path="/13-brutal-career-truths" element={<CareerTruths />} />

            {/* preview resume path */}
            <Route path="/preview" element={<Preview />} />
            <Route path="/preview2" element={<Preview2 />} />
            <Route path="/preview3" element={<Preview3 />} />
            <Route path="/preview4" element={<Preview4 />} />
            <Route path="/preview5" element={<Preview5 />} />
            <Route path="/preview6" element={<Preview6 />} />
            <Route path="/preview7" element={<Preview7 />} />
            <Route path="/preview8" element={<Preview8 />} />
            <Route path="/preview9" element={<Preview9 />} />
            <Route path="/preview10" element={<Preview10 />} />
            <Route path="/preview11" element={<Preview11 />} />
            <Route path="/preview12" element={<Preview12 />} />
            <Route path="/preview13" element={<Preview13 />} />
            {/* Technical resume link */}
            <Route path="/preview14" element={<Preview14 />} />
            <Route path="/preview101" element={<Preview101 />} />
            <Route path="/preview102" element={<Preview102 />} />
            <Route path="/preview103" element={<Preview103 />} />
            <Route path="/preview104" element={<Preview104 />} />
            <Route path="/preview105" element={<Preview105 />} />
            <Route path="/preview106" element={<Preview106 />} />
            <Route path="/preview107" element={<Preview107 />} />
            <Route path="/preview108" element={<Preview108 />} />
            <Route path="/preview109" element={<Preview109 />} />
            <Route path="/preview110" element={<Preview110 />} />
            <Route path="/preview111" element={<Preview111 />} />
            <Route path="/preview112" element={<Preview112 />} />
            <Route path="/preview113" element={<Preview113 />} />
            <Route path="/preview114" element={<Preview114 />} />
            <Route path="/preview115" element={<Preview115 />} />
            <Route path="/preview116" element={<Preview116 />} />

            {/* CoverLetter Link */}
            <Route path="/preview/201" element={<Preview201 />} />
            <Route path="/preview/202" element={<Preview202 />} />
            <Route path="/preview/203" element={<Preview203 />} />
            <Route path="/preview/204" element={<Preview204 />} />
            <Route path="/preview/205" element={<Preview205 />} />
            <Route path="/preview/206" element={<Preview206 />} />
            <Route path="/preview/207" element={<Preview207 />} />
            <Route path="/preview/208" element={<Preview208 />} />
            <Route path="/preview/209" element={<Preview209 />} />
            <Route path="/preview/210" element={<Preview210 />} />
            <Route path="/preview/211" element={<Preview211 />} />
            <Route path="/preview/212" element={<Preview212 />} />
            <Route path="/preview/213" element={<Preview213 />} />
            <Route path="/preview/214" element={<Preview214 />} />
            <Route path="/preview/215" element={<Preview215 />} />
            <Route path="/preview/216" element={<Preview216 />} />
            <Route path="/preview/217" element={<Preview217 />} />
            <Route path="/preview/218" element={<Preview218 />} />
            <Route path="/EditablePage" element={<EditablePage />} />
            <Route path="/preview301" element={<Preview301 />} />
            <Route path="/preview302" element={<Preview302 />} />
            <Route path="/preview303" element={<Preview303 />} />
            <Route path="/preview304" element={<Preview304 />} />
            <Route path="/preview305" element={<Preview305 />} />
            <Route path="/preview306" element={<Preview306 />} />
            <Route path="/preview307" element={<Preview307 />} />
            <Route path="/preview308" element={<Preview308 />} />
            <Route path="/preview309" element={<Preview309 />} />
            <Route path="/preview401" element={<Preview401 />} />
            <Route path="/preview402" element={<Preview402 />} />
            <Route path="/preview403" element={<Preview403 />} />
            <Route path="/preview404" element={<Preview404 />} />
            <Route path="/preview405" element={<Preview405 />} />
            <Route path="/preview406" element={<Preview406 />} />
            <Route path="/preview407" element={<Preview407 />} />
            <Route path="/preview408" element={<Preview408 />} />
            <Route path="/preview409" element={<Preview409 />} />
            <Route path="/preview410" element={<Preview410 />} />
            <Route path="/preview411" element={<Preview411 />} />
            <Route path="/preview412" element={<Preview412 />} />
            <Route path="/preview413" element={<Preview413 />} />
            <Route path="/preview414" element={<Preview414 />} />
            <Route path="/preview415" element={<Preview415 />} />
            <Route path="/preview416" element={<Preview416 />} />
            <Route path="/preview417" element={<Preview417 />} />
            <Route path="/preview418" element={<Preview418 />} />
            <Route path="/preview419" element={<Preview419 />} />
            <Route path="/preview420" element={<Preview420 />} />
            <Route path="/preview421" element={<Preview421 />} />
            <Route path="/preview422" element={<Preview422 />} />
            <Route path="/preview423" element={<Preview423 />} />
            <Route path="/preview424" element={<Preview424 />} />
            <Route path="/preview425" element={<Preview425 />} />
            <Route path="/preview426" element={<Preview426 />} />
            <Route path="/preview427" element={<Preview427 />} />
            <Route path="/preview428" element={<Preview428 />} />
            <Route path="/preview429" element={<Preview429 />} />
            <Route path="/preview430" element={<Preview430 />} />
            <Route path="/preview431" element={<Preview431 />} />
            <Route path="/preview432" element={<Preview432 />} />
            <Route path="/preview433" element={<Preview433 />} />
            <Route path="/preview434" element={<Preview434 />} />
            <Route path="/preview435" element={<Preview435 />} />
            <Route path="/preview436" element={<Preview436 />} />
            <Route path="/preview437" element={<Preview437 />} />
            <Route path="/preview438" element={<Preview438 />} />
            <Route path="/preview439" element={<Preview439 />} />
            <Route path="/preview440" element={<Preview440 />} />
            <Route path="/preview441" element={<Preview441 />} />
            <Route path="/preview442" element={<Preview442 />} />
            <Route path="/preview443" element={<Preview443 />} />
            <Route path="/preview444" element={<Preview444 />} />
            <Route path="/preview445" element={<Preview445 />} />
            <Route path="/preview446" element={<Preview446 />} />

            <Route path="/preview501" element={<Preview501 />} />
            <Route path="/preview502" element={<Preview502 />} />
            <Route path="/preview503" element={<Preview503 />} />
            <Route path="/preview504" element={<Preview504 />} />
            <Route path="/preview505" element={<Preview505 />} />
            <Route path="/preview506" element={<Preview506 />} />
            <Route path="/preview507" element={<Preview507 />} />
            <Route path="/preview508" element={<Preview508 />} />
            <Route path="/preview509" element={<Preview509 />} />
            <Route path="/preview510" element={<Preview510 />} />
            <Route path="/preview511" element={<Preview511 />} />
            <Route path="/preview512" element={<Preview512 />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
