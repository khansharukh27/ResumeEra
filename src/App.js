import React, { useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthWrapper from "../src/component/signupAndLogin/AuthWrapper";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

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
import Preview301 from './component/previewfolder/Preview301.jsx'
import Preview302 from './component/previewfolder/Preview302.jsx'
import Preview303 from './component/previewfolder/Preview303.jsx'
import Preview304 from './component/previewfolder/Preview304.jsx'
import Preview305 from './component/previewfolder/Preview305.jsx'
import Preview306 from './component/previewfolder/Preview306.jsx'
import Preview307 from './component/previewfolder/Preview307.jsx'
import Preview308 from './component/previewfolder/Preview308.jsx'
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
import { loadCoverImages, loadImages, loadTechImages } from "./Redux/action";
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
import { Helmet } from "react-helmet";
import GoogleAnalytics from "./component/GoogleAnalytics.jsx";
import ITResumeTips from "./component/ImportantPost/ITResumeTips.jsx";
import HealthcareResumeGuide from "./component/ImportantPost/HealthcareResumeGuide.jsx";
import CreativeAndDesignerResumeTips from "./component/ImportantPost/CreativeAndDesignerResumeTips.jsx";
import ResumeFormattingForSaleAndMarketing from "./component/ImportantPost/ResumeFormattingForSaleAndMarketing.jsx";
import ResumeFormattingForTeachersAndProfessors from "./component/ImportantPost/ResumeFormattingForTeachersAndProfessors.jsx";
import ResumeFormattingEngineeringStudents from "./component/ImportantPost/ResumeFormattingEngineeringStudents.jsx";
import ResumeFormattingforFreelancersandRemoteWorkers from "./component/ImportantPost/ResumeFormattingforFreelancersandRemoteWorkers.jsx";
import GovernmentJobResumeGuide from "./component/ImportantPost/GovernmentJobResumeGuide.jsx";
import Hospitality_and_Tourism from "./component/ImportantPost/HospitalityandTourism.jsx";
import Resume_Formatting_Real_Estate_Agents from "./component/ImportantPost/Resume_Formatting_Real_Estate_Agents.jsx";
import Best_Free_Resume_Formatting_Tools_for_2024 from "./component/ImportantPost/Best_Free_Resume_Formatting_Tools_for_2024.jsx";
import Best_Free_Resume_Formatting_Tools_for_2025 from "./component/ImportantPost/Best_Free_Resume_Formatting_Tools_for_2024.jsx";
import SitemapNotifier from "./component/SitemapNotifier.jsx";
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
import Bank_Resume_Format_for_Freshers_PDF from './image/technical_Image/banking-resume-example.png'
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
import image_301 from './image/Fresher resume image folder/accountant-resume-example.webp'
import image_302 from './image/Fresher resume image folder/babysitter-resume-example.webp'
import image_303 from './image/Fresher resume image folder/cashier-resume-template-no-experiece.webp'
import image_304 from './image/Fresher resume image folder/flight-attendant-resume-template-no-experience.webp'
import image_305 from './image/Fresher resume image folder/line-cook-resume-template-no-experience.webp'
import image_306 from './image/Fresher resume image folder/security-guard-resume-template-no-experience.webp'
import image_307 from './image/Fresher resume image folder/social-media-manager-resume-example.webp'
import image_308 from './image/Fresher resume image folder/web-developer-resume-example.webp'
import image_309 from './image/Fresher resume image folder/internship resume example.png'
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

var images = [
  { id: 1, src: resum1, alt: "Professional Resume Template 1",description:'Professional and elegant resume template with a timeline structure' },
  { id: 2, src: resume2, alt: "Modern Resume Design 2",description:'Clean and modern resume portfolio or cv template' },
  { id: 3, src: resume3, alt: "Creative Resume Layout 3",description:'This Marketing Manager resume template is designed to easily pass the computer screenings.' },
  { id: 4, src: resume4, alt: "Elegant Resume Example 4",description:'' },
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
  { id: 109,src: Creative_ATS_Resume_Template,alt: "Creative ATS",},
  {
    id: 110,src: Executive_ATS_Resume_Template,alt: "Executive ATS Resume Template",},
  {
    id: 111,src: Functional_ATS_Resume_Template,alt: "Functional ATS Resume Template",
  },
  {
    id: 112,src: Minimalist_ATS_Resume_Template,alt: "Minimalist-ATS-Resume-Template",
  },
  {
    id: 113,src: Modern_ATS_Resume_Template,alt: "Modern Ats Resume template",
  },
  {
    id: 114,src: Simple_ATS_Resume_Template,alt: "Simple-ATS-Resume-Template",
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
  { id: 201, src: cover_letter_1, alt: "cover leter" },
  { id: 202, src: cover_letter_2, alt: "INTERNSHIP" },
  { id: 203, src: cover_letter_3, alt: "TEACHER" },
];
const fresherResumeImage = [
  {id:301, src:image_301,alt:'accountant resume'},
  {id:302, src:image_302, alt:'babysitter resume'},
  {id:303, src:image_303, alt:'cashier resume'},
  {id:304,src:image_304, alt:'flight attendant'},
  {id:305, src:image_305, alt:'line cook '},
  {id:306, src:image_306, alt:'security guard '},
  {id:307, src:image_307, alt:'social media'},
  {id:308, src:image_308, alt:'web developer'},
  {id:309, src:image_309, alt:'internship resume'}
]
console.log("images:=", images);
console.log(images[0].id);
const path = "mainpage";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages(images)); // Replace with your actual data
    dispatch(loadTechImages(techImages));
    dispatch(loadCoverImages(CoverImage));
  }, [dispatch]);
  // const result = useSelector((state) =>state.reducer)
  // console.log('image data:-',result)
  useEffect(() => {
    AOS.init();
  }, []);
  
  useEffect(() => {
    // Preload Home CSS when Home page is loaded
    const preloadHomeCSS = document.createElement('link');
    preloadHomeCSS.rel = 'preload';
    preloadHomeCSS.href = '../src/css/home.css'; // Link to Home's specific CSS file
    preloadHomeCSS.as = 'style';
    document.head.appendChild(preloadHomeCSS);
  },[]);
// Get the current route location

  // Track pageview whenever location changes
  
  return (
    <div>
      <HelmetProvider>
    <Router style={{ backgroundColor: "black", width: "100%" }}>
    <GoogleAnalytics/>
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
        <Route path="/" element={<Home  images={images} />} />
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
              <MainPage path={`/${path}/${image.id}`} techImages={techImages} />
            }
          />
        ))}
        {fresherResumeImage.map((image)  => (
          <Route
            key={image.id}
            path={`/freshertemplate/${image.id}`}
            element={
              <MainPage path={`/${path}/${image.id}`} fresherResumeImage={fresherResumeImage} />
            }
          />
        ))}
        
        <Route path="#" element={<TechImageShow  techImages={techImages}/>}/>
        <Route path='#' element={<FresherimageCard fresherResumeImage={fresherResumeImage}/>}/>
        <Route path="#" element={<CombinedTemplates fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}/>
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
        <Route
          path="/edit"
          element={<Edit CoverImage={CoverImage} />}
        />
        
{/* <Route
          path="/site-map-notifier"
          element={<SitemapNotifier />}
        /> */}



        {/* <Route path=`/cover_lett` element={<CoverLetterInput CoverImage={CoverImage}/>}/> */}

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
        <Route path="/hobbies" element={<Hobbies techImages={techImages} />} />
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
          element={<HowToCreateResume 
          />}
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
          element={<ResumeCareerChange  techImages={techImages}/>}
        />
        <Route
          path="/resume-writing-tips-for-remote-jobs"
          element={<ResumeRemoteJobs fresherResumeImage={fresherResumeImage}/>}
        />
        <Route path="/resume-tip-component" element={<ResumeTipsComponent />} />
        <Route path="/xyz-formula-resume" element={<XYZFormula techImages={techImages} fresherResumeImage={fresherResumeImage} />} />
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
          element={<CvVsResume techImages={techImages}/>}
        />
        <Route
          path="/create-your-perfect-resume-for-free"
          element={<FreeResumeBuilderForResumeEra />}
        />
        <Route
          path="/11-ats-formatting-mistakes-that-can-cost-you-a-job"
          element={<AtsFormattingMistake />}
        />
        <Route path="/it-cover-letter-guide-2024" element={<ItCoverLetter />} />
        <Route
          path="/management-cover-letter-example"
          element={<ManagementCoverLetter />}
        />
        <Route
          path="/mechanical-engineering-cover-letter-example/"
          element={<MechanicalEngineeringCoverLetterHelmet />}
        />
        <Route
          path="/administrative-assistant-cover-letter-example"
          element={<AdministrativeAssistantCoverLetter fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
        />
        <Route
          path="/lawyer-cover-letter-example"
          element={<LawyerCoverLetter />}
        />
        <Route path="/guide/resume-formatting" element={<FormattinResume techImages={techImages} images={images} fresherResumeImage={fresherResumeImage} />} />
        <Route
          path="/fresher-resume-formatting"
          element={<FresherResumeFormatting />}
        />
        <Route
          path="/resume-formatting-entry-level"
          element={<ResumeFormatingForEntryLevel fresherResumeImage = {fresherResumeImage}/>}
        />
        <Route
          path="/Resume_Formatting_Steps_for_Freshers"
          element={<ResumeFormattingStepsForFresher />}
        />
        <Route
          path="/ats-friendly-resume-format-for-beginners"
          element={<ATS_Friendly_Resume_Format_for_Beginners fresherResumeImage = {fresherResumeImage}/>}
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
          element={<FormatResumeLeadershipJobs/>}
        />
 <Route
          path="/how-to-highlight-achievements-in-resume-formatting"
          element={<HighlightAchievementsForResume/>}
        />
        <Route
          path="/multi-page-resume-formatting"
          element={<MultiPageResumeFormatting/>}
        />
<Route
          path="/it-resume-formatting-tips"
          element={<ITResumeTips/>}
        />
        <Route
          path="/healthcare-industry-ke-liye-resume-formatting-guide"
          element={<HealthcareResumeGuide/>}
        />
        <Route
          path="/creative-and-designer-resume-tips"
          element={<CreativeAndDesignerResumeTips/>}
        />
<Route
          path="/best-resume-formatting-sales-marketing"
          element={<ResumeFormattingForSaleAndMarketing/>}
        />
        <Route
          path="/resume_formatting_for_teachersAndProfessors"
          element={<ResumeFormattingForTeachersAndProfessors/>}
        />
        <Route
          path="/resume-formatting-engineerig-students"
          element={<ResumeFormattingEngineeringStudents techImages={techImages}/>}
        />
        <Route
          path="/resume-formatting-for-freelancers-and-remote-workers"
          element={<ResumeFormattingforFreelancersandRemoteWorkers/>}
        />
        <Route
          path="/best-free-resume-formatting-tools-for-2025"
          element={<Best_Free_Resume_Formatting_Tools_for_2025/>}
        />
         <Route
          path="/8-best-online-tools-for-resume-formatting-for-2025"
          element={<ResumeFormattingTool/>}
        />
        <Route
          path="/infographic-resume-formatting"
          element={<Infographic_Resume_Formatting/>}
        />
        <Route
          path="/infographic-resume-formatting"
          element={<Infographic_Resume_Formatting/>}
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
          element={<AccomplishmentQuestion techImages={techImages}/>}
        />
        <Route
          path="/do-you-have-any-questions-for-us"
          element={<QuestionsForUs />}
        />
<Route
          path="/tailor-your-resume"
          element={<TailorResumeGuide/>}
        />
        <Route
          path="/Functional_vs_Chronological_Resume_Formatting"
          element={<ResumeFormattingArticle techImages={techImages}/>}
        />
        <Route
          path="/government-job-resume-guide"
          element={<GovernmentJobResumeGuide/>}
        />
 <Route
          path="/hospitality-tourism-resume-tips"
          element={<HospitalityandTourism/>}
        />
        <Route
          path="/Best-Resume-Formatting-Tips-for-Real-Estate-Agents"
          element={<Resume_Formatting_Real_Estate_Agents/>}
        />
 <Route
          path="/20-Resume-Formatting-Mistakes-You-Should-Avoid"
          element={<ResumeFormattinMistake/>}
        />
       
        <Route
          path="/top-10-resume-formatting-errors"
          element={<ResumeFormattinError fresherResumeImage={fresherResumeImage} techImages={techImages} images={images} />}
        />
<Route
          path="/why-ats-unfriendly-formatting-can-lead-to-resume-rejection"
          element={<AtsUnfriendlyResume/>}
        />
<Route
          path="/how-to-avoid-over-designing-your-resume-formatting"
          element={<OverDesignFormatting/>}
        />
        <Route
          path="/font-and-size-mistakes"
          element={<FontAndSixMistake/>}
        />
        <Route
          path="/Resume_Formatting_Errors_That_Fail_to_Reflect_Career_Breaks"
          element={<ReflectCareerBreaks CoverImage = {CoverImage} techImages={techImages}/>}
        />
<Route
          path="/how-to-hide-spelling-and-grammar-mistakes-through-formatting-a-resume"
          element={<SpellingandGrammarMistakes/>}
        />
        <Route
          path="/common-layout-mistakes-that-make-your-resume-unprofessional"
          element={<ResumeLayoutMistakes/>}
        />
<Route
          path="/professional-resume-format-pdf"
          element={<ProfessionalResumeFormatPDF/>}
        />
        <Route
          path="/pdf-vs-word-resume"
          element={<PdfVsWordResume/>}
        />
        <Route
          path="/chronological-vs-functional-resume-formatting"
          element={<ChronologicalVsFunctionalResume techImages = {techImages}/>}
        />
         <Route
          path="/infographic-resume-vs-traditional-resume-formatting"
          element={<InfographicVsTraditionalResumes/>}
        />
        <Route
          path="/online-resume-builder-vs-manual-resume-builder-formatting"
          element={<OnlineVsManualResume/>}
        />
         <Route
          path="/one-vs-multi-page-resume"
          element={<OneVsMultiPageResume/>}
        />
         <Route
          path="/Modern-vs-traditiona-resume-formatting"
          element={<ModernResumeVsTraditionResume/>}
        />
        <Route
          path="/ats-friendly-vs-creative-resume-format"
          element={<AtsFriendlyVsCreativeResume/>}// done for submit
        />
        <Route
          path="/minimalist-vs-graphic-formatting"
          element={<MinimalistVsGraphic/>}// done for submit
        />
        <Route
          path="/objective-vs-summary-statement-the-right-way-to-format-your-resume"
          element={<ObjectiveStatementVsSummaryStatement/>}// done for submit
        />
<Route
          path="/2025-resume-formatting-trends"
          element={<ResumeFormattingTrends2025/>}// done for submit
        />
<Route
          path="/resume-formattin-for-ai-driven-application-tracking-system"
          element={<ResumeFormattingforAIDrivenApplicationTrackingSystems/>}// done for submit
        />
        <Route
          path="/how-to-present-personal-branding-through-resume-formatting"
          element={<PresentingPersonalBranding/>}// done for submit
        />
        <Route
          path="/how-to-create-resume-formatting-that-matches-your-linkedin-profile"
          element={<MatchesYourLinkedInProfile/>}// done for submit
        />
        <Route
          path="/modern-resume-formatting-with-interactive-elements"
          element={<ModernResumeFormatting/>}// done for submit
        />

<Route
          path="/data-driven-resume-formatting-for-analytical-jobs-formatting-for-analytical-jobs"
          element={<DataDrivenResumeArticle/>}// done for submit
        />
        <Route
          path="/social-media-influencer-resume-formatting"
          element={<InfluencerResumeGuide/>}// done for submit
        />
        <Route
          path="/job-specific-resume-formatting"
          element={<JobSpecificResumeFormatting/>}// done for submit
        />
        <Route
          path="/freelancers-portfolio-resume-formatting-tips"
          element={<PortfolioResumeTips/>}// done for submit
        />
<Route
          path="/remote-resume-formatting-crafting-a-standout-resume-for-remote-jobs"
          element={<RemoteResumeFormattin/>}// done for submit
        />
        <Route
          path="/personalized-resume-formatting-for-international-jobs"
          element={<ResumeFormattingforInternational/>}// done for submit
        />
        <Route
          path="/resume-formatting-your-ultimate-guide-to-landing-more-interviews"
          element={<ResumeFormattintoMoreInterview/>}// done for submit
        />
        <Route
          path="/download-best-resume-format-pdf-create-perfect-resume"
          element={<DownloadtheBestResumeFormatPDF/>}// done for submit
        />
        <Route
          path="/top-resume-format-pdf-job-seekers-free-templates-get-hired-fast"
          element={<TopResumeFormatPDFforJobSeekers/>}// done for submit
        />
        <Route
          path="/effortless-resume-creation-download-professional-resume-format-pdf"
          element={<EffortlessResumeCreation/>}// done for submit
        />
        <Route
          path="/resume-format-pdf-guide-perfect-templates-for-a-standout-cv"
          element={<ResumeFormatPDFGuide images={images} techImages={techImages} fresherResumeImage = {fresherResumeImage}/>}// done for submit
        />
<Route
          path="/get-hired-faster-the-ultimate-resume-format-pdf-for-your-career"
          element={<GetHiredFaster/>}// done for submit
        />
<Route
          path="/how-to-choose-the-right-resume-format-pdf-free-templates-inside"
          element={<HowtoChoosetheRightResumeFormatPDF/>}// done for submit
        />
<Route
          path="/free-resume-format-pdf-simple-professional-and-ready-to-download"
          element={<FreeResumeFormat/>}// done for submit
        />
        <Route
          path="/create-your-dream-job-resume-top-resume-format-pdf-templates-available"
          element={<CreateYourDreamJobResume/>}// done for submit
        />
         <Route
          path="/step-by-step-resume-creation-with-our-free-resume-format-pdf-templates"
          element={<StepbyStepResumeCreation/>}// done for submit
        />
        <Route
          path="/free-resume-format-pdf-build-a-cv-that-stands-out"
          element={<FreeResumeFormatPDF techImages={techImages} fresherResumeImage={fresherResumeImage} images={images}/>}// done for submit
        />
        <Route
          path="/complete-guide-to-resume-format-pdf-your-key-to-landing-any-job"
          element={<CompleteGuidetoResumeFormatPDF/>}// done for submit
        />
        <Route
          path="/download-a-professional-resume-format-pdf-simple-fast-effective"
          element={<DownloadaProfessionalResumeFormatPDF/>}// done for submit
        />
<Route
          path="/how-to-build-the-perfect-resume-with-a-resume-format-pdf"
          element={<HowtoResumeGuide/>}// done for submit
        />
<Route
          path="/the-ultimate-collection-of-resume-format-pdfs-for-job-seekers"
          element={<UltimateCollectionofResumeFormatPDF/>}// done for submit
        />
<Route
          path="/my-top-10-free-resume-format-pdfs-for-landing-your-dream-job"
          element={<MyTop10FreeResumeFormatPDF/>}// done for submit
        />
<Route
          path="/download-your-free-resume-format-pdf-today-and-stand-out"
          element={<DownloadYourFreeResumeFormatPDF/>}// done for submit
        />
        <Route
          path="/find-the-right-resume-format-pdf-for-your-career-growth"
          element={<FindtheRightResumeFormatPDF/>}// done for submit
        />
        <Route
          path="/looking-for-resume-format-pdf-get-free-templates"
          element={<LookingforaResumeFormatPDF/>}// done for submit
        />
<Route
          path="/download-resume-format-pdf-for-freshers-simple-and-effective"
          element={<DownloadResumeFormatPDFforFreshers/>}
        />
        <Route
          path="/best-resume-format-pdf-for-professionals-download-now"
          element={<BestResumeFormatPDFforProfessionals fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
        />
<Route
          path="/how-to-create-a-winning-resume-using-resume-format-pdf"
          element={<HowtoCreateaWinningResume/>}
        />
<Route
          path="/easy-to-use-resume-format-pdf-for-job-seekers"
          element={<EasytoUseResumeFormatPDFforJobSeekers/>}
        />
        <Route
          path="/top-resume-format-pdfs-for-high-impact-resumes"
          element={<TopResumeFormatPDF/>}
        />
        <Route
          path="/free-resume-format-pdf-templates-perfect-for-your-next-job"
          element={<FreeResumeFormatPDFTemplates/>}
        />
        <Route
          path="/how-to-create-a-stunning-resume-using-a-resume-format-pdf"
          element={<HowtoCreateaStunningResume/>}
        />
        <Route
          path="/craft-the-perfect-resume-with-our-free-resume-format-pdf"
          element={<CraftthePerfectResumewithOurFreeResumeFormatPDF/>}
        />
<Route
          path="/free-resume-format-pdf-design-your-resume-in-minutes"
          element={<FreeResumeFormatPDFdesign/>}
        />
        <Route
          path="/resume-format"
          element={<ResumeFormat techImages={techImages}/>}
        />
         <Route
          path="/resume-format-pdf"
          element={<ResumeFormatPDF fresherResumeImage = {fresherResumeImage} images={images} techImages={techImages}/>}
        />
        <Route
          path="/resume-formatting"
          element={<ResumeFormatting fresherResumeImage = {fresherResumeImage} images={images} techImages={techImages}/>}
        />
        <Route
          path="/professional-resume-format-pdf-download"
          element={<ProfessionalResumeFormat/>}
        />
        <Route
          path="/craft-perfect-resume-with-free-format-pdf"
          element={<CraftthePerfectResume/>}
        />
         <Route
          path="/your-step-by-step-guide-to-a-professional-resume-format-pdf"
          element={<YourStepbyStepGuide/>}
        />
<Route
          path="/create-a-resume-that-gets-results-best-resume-format-pdfs"
          element={<CreateResumeThatGetsResults/>}
        />
        <Route
          path="/top-resume-format-pdf-for-job-seekers-free-to-download"
          element={<TopResumeFormatPDFforJobSeekers/>}
        />
        <Route
          path="/optimize-your-resume-with-the-best-resume-format-pdf-templates"
          element={<OptimizeYourResumewiththeBestResumeFormatPDFTemplates/>}
        />
         <Route
          path="/get-the-right-resume-format-pdf-for-your-job-search"
          element={<GettheRightResumeFormatPDF/>}
        />
         <Route
          path="/the-best-resume-format-pdf-for-career-success"
          element={<TheBestResumeFormat/>}
        />
<Route
          path="/download-the-top-resume-format-pdf-for-your-job-application"
          element={<DownloadtheTopResumeFormatPDF/>}
        />
        <Route
          path="/free-resume-format-pdf-for-freshers-ready-to-download"
          element={<FreeResumeFormatPDFforFreshers/>}
        />
        <Route
          path="/ultimate-resume-format-pdf-for-career-advancements"
          element={<TheUltimateResumeFormatPDF/>}
        />
<Route
          path="/how-to-pick-the-right-resume-format-pdf-for-your-skills"
          element={<HowPicktheRightResumeFormatPDF/>}
        />
        <Route
          path="/get-hired-with-the-best-resume-format-pdf-templates-available"
          element={<GetHiredwiththeBestResumeFormat/>}
        />
        <Route
          path="/free-resume-format-pdf-templates-to-help-you-land-your-dream-job"
          element={<FreeResumeFormatPDFTemplates/>}
        />
        <Route
          path="/top-resume-format-pdf-downloads-for-a-perfect-cv"
          element={<TopResumeFormatPDFDownloads/>}
        />
<Route path="/best-resume-format-pdfs-for-creating-a-professional-cv"
          element={<BestResumeFormatPDFforCreatingProfessionalCV/>}
        />
        <Route path="/resume-format-pdf-for-freshers-easy-to-download-and-customize"
          element={<ResumeFormatPDFforFreshers/>}
        />
<Route path="/simple-yet-professional-resume-format-pdf-get-your-job-now"
          element={<SimpleYetProfessionalResumeFormatPDF/>}
        />
        <Route path="/unlock-your-career-potential-with-the-right-resume-format-pdf"
          element={<UnlockqaqYourCareerPotential/>}
        />
        <Route path="/free-downloadable-resume-format-pdfs-for-all-professions"
          element={<FreeDownloadableResumeFormatPDFs/>}
        />
        <Route path="/free-downloadable-resume-format-pdfs-for-all-professions"
          element={<HowtoBuildanImpactfulResume/>}
        />
        <Route path="/resume-format-pdf-free-templates-that-make-a-difference"
          element={<ResumeFormatPDFFreeTemplates images={images} techImages={techImages} fresherResumeImage={fresherResumeImage}/>}
        />
        {/*  */}
        <Route path="/get-noticed-with-the-best-resume-format-pdf-free-download-2025"
          element={<GetNoticedwiththeBestResume/>}
        />
        <Route path="/get-noticed-with-a-professional-resume-format-pdf-free-download-now"
          element={<GetNoticewithProfetionalResumeFormatPDF/>}
        />
        <Route path="/simple-resume-format-pdf-job-seekers-2025-download-now"
          element={<SimpleResumeFormatPDFJobSeekers/>}
        />
        <Route path="/the-complete-guide-to-choosing-the-right-resume-format-pdf"
          element={<TheCompleteGuidetoChoosing/>}
        />
        <Route path="/free-resume-format-pdf-2025-perfect-for-career-success-download-now"
          element={<PerfectforCareerSuccess/>}
        />
        <Route path="/resume-format-pdf-that-will-get-you-energy-in-interview"
          element={<GetYouenergyininterview/>}
        />
        <Route path="/resume-mistakes-you-need-to-avoid-in-2025"
          element={<ResumeMistakesYouNeed/>}
        />
        <Route path="/job-applications-resume-format-pdf-download-now-2025"
          element={<JobApplicationsResumeFormat/>}
        />
        <Route path="/how-to-use-resume-format-pdfs-2025-winning-job-application"
          element={<WinningJobApplication/>}
        />
        <Route path="/perfect-your-resume-with-the-best-resume-format-pdfs"
          element={<PerfectResumeBestResume/>}
        />
        <Route path="/best-resume-format-pdf-for-immediate-job-offers-2025-download-free-now"
          element={<ResumeImmediateJobOffers/>}
        />
        <Route path="/free-top-resume-format-pdf-successful-career-2025-download-now"
          element={<ResumeFormatPDFSuccessfull images={images} techImages={techImages} fresherResumeImage={fresherResumeImage} />}
        />
        <Route path="/top-resume-format-pdf-for-careersuccess"
          element={<TopResumeFormatPDFforCareer/>}
        />
        <Route path="/download-resume-format-pdf-today"
          element={<DownloadYourResumeFormat/>}
        />
        <Route path="/free-resume-format-pdfs"
          element={<BuildYourBestCVNow/>}
        />
        <Route path="/how-to-optimize-killer-resume-format-pdf-2025"
          element={<HowtoOptimizeYourKiller/>}
        />
        <Route path="/how-to-respond-to-a-linkedin-recruiter"
          element={<LinkedInRecruiterResponseGuide/>}
        />
        <Route path="/simple-resume-format-word"
          element={<SimpleResumeFormatWord/>}
        />
        <Route path="/simple-resume-format-pdf"
          element={<SimpleResumeformatpdf/>}
        />
         <Route path="/resume-format-pdf-free-download"
          element={<ResumeFormatPDFFreeDownload fresherResumeImage={fresherResumeImage} images={images} techImages={techImages}/>}
        />
        <Route path="/pdf-resume-format-free-download"
          element={<PDFResumeFormatFreeDownload techImages={techImages}/>}
        />
        <Route path="/resume-pdf"
          element={<ResumePdf techImages={techImages}/>}
        />
        <Route path="/resume-format-pdf-for-fresher"
          element={<ResumeFormatPDFforFresher techImages={techImages}/>}
        />
        <Route path="/resume-pdf-download"
          element={<ResumePDFDownload techImages={techImages}/>}
        />
         <Route path="/resume-quotes"
          element={<ResumeQoutes techImages={techImages}/>}
        />
<Route
          path="/simple-resume-format-pdf-download"
          element={<SimpleResumeFormatPDFDownload techImages={techImages} />}
        />
        <Route
          path="/how-to-make-a-resume-for-freshers"
          element={<HowtoMakeaResumeforFreshers techImages={techImages} />}
        />
        <Route
          path="/how-to-write-a-strong-resume-objective"
          element={<HowtoWriteaStrongResumeObjective fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-for-internship"
          element={<ResumeForInternship fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/attention-grabbing-resume-summary"
          element={<AttentionGrabbingResumeSummary fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/bank-resume-format-for-freshers-pdf"
          element={<BankResumeFormatforFreshersPDF fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/functional-resume-format"
          element={<FunctionResumeFormat fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-format-for-freshers"
          element={<Resumeformatforfreshers fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-format-for-freshers-sample-download-now-free"
          element={<ResumeFormatforFreshersSample fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-format-for-freshers-example"
          element={<ResumeFormatForFreshersExample fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/job-resume-format-for-fresher"
          element={<Jobresumeformatforfresher fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/good-resume-format-for-freshers"
          element={<GoodresumeFormatForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/pdf-of-resume-format-for-freshers"
          element={<PDFofResumeFormatforFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-format-for-freshers-free-download"
          element={<ResumeFormatForFreshersFreeDownload fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/model-resume-format-for-freshers"
          element={<MODELRESUMEFORMATFORFRESHERS fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/what-is-the-best-resume-format-for-freshers"
          element={<WhatistheBestResumeFormatforFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/types-of-resume-formats-for-freshers"
          element={<TypesofResumeFormatsforFresers fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/step-by-step-guide-resume-format-for-freshers"
          element={<Stepd_by_StepGuidetoWritingaFresherResume fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
<Route
          path="/what-is-a-functional-resume"
          element={<WhatisaFunctionalResume fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/how-to-create-a-teenager-resume-without-work-experience"
          element={<TeenagerResumeWithoutWorkExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/how-to-create-a-resume-for-your-first-job-as-a-student"
          element={<HowtoCreateaResumeforYourFirstJobasaStudent fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/1st-job-resume-examples"
          element={<FirstJobResumeExamples fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/student-resume-examples-with-no-experience"
          element={<StudentResumeExampleswithNoExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/how-to-create-a-student-cv-template-with-no-experience"
          element={<StudentCVTemplatewithNoExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-example-for-students-first-job"
          element={<ResumeExamplesforStudentsFirstJob fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
          path="/resume-examples-for-no-work-experience"
          element={<ResumeExamplesforNoWorkExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
<Route
          path="/crafting-a-sample-resume-for-students-with-no-work-experience"
          element={<SampleResumeforStudentswithNoWorkExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
        
          path="/student-resume-for-your-first-job"
          element={<Studentresumeforfirstjob fresherResumeImage={fresherResumeImage} techImages={techImages} />}
        />
        <Route
        
        path="/resume-for-a-15-year-old-first-job"
        element={<Resumefora15YearOldfirstjob fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume-for-your-first-job-in-high-school"
        element={<TeenagerResumeforYourFirstJobinHighSchool fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume-for-your-first-job"
        element={<TeenagerResumeforYourFirstJob fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume"
        element={<TeenagerResume fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume-examples"
        element={<TeenagerResumeexamples fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume-template"
        element={<TeenagerResumeTemplate fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
<Route
        path="/teenager-resume-with-no-work-experience"
        element={<TeenagerResumewithNoWorkExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/teenager-resume-with-no-job-experience"
        element={<TeenagerResumewithNoJobExperience fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/how-to-create-google-resume-format"
        element={<GoogleResumeformat fresherResumeImage={fresherResumeImage} techImages={techImages} />}
      />
      <Route
        path="/sample-teenager-resume-free-create-and-download"
        element={<SampleTeenagerResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/how-to-write-an-attention-grabbing-resume-summary"
        element={<ResumeSummary fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/download-free-teenager-resume-templates"
        element={<FreeTeenagerResumeTemplates fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/hig-hschool-teenager-resume"
        element={<Highschoolteenagerresume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
<Route
        path="/teenager-resume-for-college-entrance"
        element={<Teenagerresumeforcollegeentrance fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/skills-for-teenager-resume-examples"
        element={<SkillsForTeenagerResumeExamples fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route
        path="/sample-of-teenager-resume-template"
        element={<SampleoOfTeenagerResumeTemplate fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/student-resume-for-internships"
        element={<StudentResumeForInternships fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/sample-resume-high-school-internships"
        element={<SampleResumeforHighSchoolStudentsApplyingforInternships fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/internship-resume-examples-for-teenagers"
        element={<InternshipResumeExamplesForTeenagers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/how-to-write-a-resume-for-a-teenage-internship"
        element={<HowtoWriteaResumeforaTeenageInternship fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-student-resume-templates-for-internships"
        element={<HighSchoolInternshipResumeTemplates fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/best-resume-format-for-teen-internships"
        element={<BestTeenInternshipResumeFormat fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/entry-level-resume-examples-for-high-school-students"
        element={<EntryLevelHighSchoolResumeExamples fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/tips-for-creating-a-teenage-internship-resume"
        element={<Tipsforcreatingateenageinternshipresume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-internship-resume-with-no-experience"
        element={<NoExperienceHighSchoolInternshipResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-internship-resume-with-no-experience"
        element={<HighSchoolInternshipResumeNoExperience fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/downloadable-teen-internship-templates"
        element={<DownloadableTeenInternshipTemplates fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/effective-resume-writing-for-high-school-internships"
        element={<EffectiveResumeWritingForHighSchoolInternships fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-student-resume-examples-for-job-applications"
        element={<HighSchoolStudentResumeExamplesForJobApplications fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/how-to-list-extracurricular-activities-on-a-teen-resume"
        element={<HowToListExtracurricularActivitiesOnATeenResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/objective-statement-examples-for-teenage-internship-resumes"
        element={<ObjectiveStatementExamplesForTeenageInternshipResumes fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-resume-examples-with-no-work-experience"
        element={<HighSchoolResumeExamplesWithNoWorkExperience fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/skills-to-include-on-a-high-school-internship-resume"
        element={<Skillstoincludeonahighschoolinternshipresume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/free-resume-templates-for-high-school-students"
        element={<FreeResumeTemplatesForHighSchoolStudents fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/how-to-format-a-resume-for-a-teenage-internship"
        element={<HowToFormatAResumeForATeenageInternship fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/high-school-student-resume-for-part-time-jobs"
        element={<HighSchoolStudentResumeForPartTimeJobs fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route
        path="/how-to-write-a-job-resume-for-a-high-school-student"
        element={<HowToWriteAJobResumeForAHighSchoolStudent fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route
        path="/how-to-write-resume-for-12th-pass-student"
        element={<ResumeFor12thPassStudent fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/twelth-student-resume-for-part-time-jobs"
        element={<ResumeFor12thStudentPartTimeJobs fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/bank-resume-format"
        element={<BankResumeFormat fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-format-for-bank-job"
        element={<ResumeFormatForBankJob fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/bank-resume-format-for-freshers"
        element={<BankResumeFormatForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/hdfc-bank-resume-format"
        element={<HDFCBankResumeFormat fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-format-for-bank-job-fresher"
        element={<ResumeFormatForBankJobFresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
<Route path="/banking-resume"
        element={<BankingResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/bank-resume-format-for-freshers-pdf-guide-free-download"
        element={<BankResumeFormatForFreshersPDFGuide fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/icici-bank-resume-format-for-freshers"
        element={<ICICIBankResumeFormatForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/bank-resume-format-freshers"
        element={<BankResumeFormatFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/axis-bank-resume-format-for-freshers-guide-create-update-download"
        element={<AxisBankResumeFormatForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/how-to-create-resume-for-freshers"
        element={<HowToCreateResumeForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/format-of-resume"
        element={<FormatOfResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/fresher-resume-template"
        element={<FresherResumeTemplate fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/freshers-resume"
        element={<FreshersResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-template-for-fresher"
        element={<ResumeTemplateForFresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/resume-format-for-fresher"
        element={<ResumeFormatForFresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-for-fresher-student"
        element={<ResumeForFresherStudent fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/sample-resume-for-freshers"
        element={<SampleResumeForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-for-fresher"
        element={<ResumeForFresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/xyz-resume-generator"
        element={<XYZResumeGenerator fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-quote"
        element={<ResumeQuotes fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/pattern-of-resume-for-freshers"
        element={<Patternofresumeforfreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/fresher-resume-summary"
        element={<FreshersResumeSummary fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/cv-summary-for-fresher"
        element={<Cvsummaryforfresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-summary-for-it-freshers"
        element={<Resumesummaryforitfreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/resume-synopsis-for-freshers"
        element={<Resumesynopsisforfreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/profile-summary-for-freshers"
        element={<Profilesummaryforfreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/professional-summary-in-resume-for-fresher"
        element={<Professionalsummaryinresumeforfresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/professional-summary-in-resume-for-fresher"
        element={<ProfessionalSummaryForFresher fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-heading-and-summary-for-freshers"
        element={<ResumeHeadingAndSummaryForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />          
      <Route path="/summary-for-resume-for-freshers-example"
        element={<SummaryForResumeForFreshersExample fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-profile-summary-for-freshers"
        element={<ResumeProfileSummaryForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/profile-summary-for-resume-for-freshers"
        element={<ProfileSummaryForResumeForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/about-me-resume-examples-for-freshers-tip-guide-sample"
        element={<AboutMeResumeExamplesForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/description-for-resume-for-freshers-tip-guide-sample"
        element={<DescriptionForResumeForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/best-summary-for-resume-for-freshers-tips-examples-templates"
        element={<BestSummaryForResumeForFreshers fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/fresher-summary-for-resume-tips-examples-templates"
        element={<FresherSummaryForResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
       <Route path="/what-should-i-add-my-resume-as-a-fresher"
        element={<WhatShouldIAddinMyResume fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      <Route path="/resume-for-ai-driven-hiring-systems"
        element={<AI_DrivenHiringSystems fresherResumeImage={fresherResumeImage} techImages={techImages} images={images}/>}
      />
      
      
      
      
        <Route path="/Blog_or_Career_Tips_Page" element={<BlogCareer />} />
        <Route path="/how-to-land-your-dream-job" element={<DreamJob2024 />} />
        <Route
          path="/top-job-search-websites"
          element={<TopJobSearchWebsites />}
        />
        <Route path="/networking-tips" element={<NetworkingTips />} />
        <Route path="/linkedin-job-hunting" element={<LinkedInJobHunting />} />
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
        <Route path="/free-resume-builder" element={<FreeResumeBuilder />} />
        <Route
          path="/9-things-you-need-to-know-about-ATS-in-2024"
          element={<ATS2024 />}
        />
        <Route
          path="/tailor-resume-to-job-description"
          element={<TailorResume techImages={techImages} fresherResumeImage={fresherResumeImage} images = {images} />}
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
        <Route path="/5-mistake-to-getting-job" element={<ResumeMistakes />} />
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


      </Routes>
      <Footer />
    </Router>
    </HelmetProvider>
    </div>
  );
}

export default App;
