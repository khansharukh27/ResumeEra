import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NewAds from '../../component/adFolder/NewAds'
import GoogleAd from "../adFolder/GoogleAd";
const Blog_Career = () => {
    return (
        <div className="important-posts aboutResumeEra" >
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/Blog_or_Career_Tips_Page" />
                <title>Blog or Career Tips Page</title>
                <meta name="description" content="this page is releted to Blog to show valuable things." />
                
            </Helmet>
            <header>
                <h1>Blog or Career Tips Page</h1>
            </header>
            <div className="flex">
            <section>
                <ul>
                    <li><Link to="/how-to-land-your-dream-job">How to Land Your Dream Job in 2024</Link></li>
                    <GoogleAd/>
                    <li><Link to="/top-job-search-websites">Top Job Search Websites to Explore</Link></li>
                    <GoogleAd/>
                    <li><Link to="/networking-tips">Networking Tips to Boost Your Job Search</Link></li>
                    <GoogleAd/>
                    <li><Link to="/linkedin-job-hunting">How to Use LinkedIn Effectively for Job Hunting</Link></li>
                    <GoogleAd/>
                    <li><Link to="/follow-up-after-interview">How to Follow Up After a Job Interview</Link></li>
                    <GoogleAd/>
                    <li><Link to="/Salary_Negotiation_Component">Salary Negotiation Tips - Get the Best Deal | ResumeEra free online resume builder</Link></li>
                    <GoogleAd/>
                    <li><Link to="/Best_Online_CV_Builder">Best Online CV Builder - Create a Free Resume Online at ResumeEra</Link></li>
                    <GoogleAd/>
                    <li><Link to="/Best_AI_Resume_Builder">Best AI Resume Builder - Build Your Free Resume Online | ResumeEra That A Best Ai Resume Builder</Link></li>
                    <GoogleAd/>
                    <li><Link to="/free-online-resume-maker">Free Online Resume Maker - Create Professional Resumes for Free | ResumeEra That A Best Ai Resume Builder</Link></li>
                    <GoogleAd/>
                    <li><Link to="/9-things-you-need-to-know-about-ATS-in-2024">9 Things You Need to Know About ATS in 2024 - ResumeEra That A Free Resume Maker</Link></li>
                    <GoogleAd/>
                    <li><Link to="/tailor-resume-to-job-description">How to Tailor Your free Resume to a Job Description with ChatGPT:ResumeEra 2024</Link></li>
                    <GoogleAd/>
                    <li><Link to="/recruiters-guide-writing-resume">A Recruiter’s Guide To Writing A Resume || Free Resume With ResumeEra</Link></li>
                    <GoogleAd/>

                </ul>
            </section>
            <div>
                <NewAds/>
            </div>
            </div>

        </div>
    )
}
export default Blog_Career;