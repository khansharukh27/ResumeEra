import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GoogleAd from "../component/adFolder/GoogleAd";
import { useEffect, useState } from "react";
import Career_Tips from '../image/carrierTips/Career_Tips.jpg';
import images1 from '../image/image_for_link/image1.jpg';
import Top_Job_Search_Websites from '../image/carrierTips/Top_Job_Search_Websites.jpg';
import How_to_Use_LinkedIn from "../image/carrierTips/How_to_Use_LinkedIn.jpg";
import Networking_Tips from "../image/carrierTips/Networking_Tips.jpg";
import How_to_Follow from "../image/carrierTips/How_to_Follow.jpg";
import Salary_Negotiation_Tips from "../image/carrierTips/Salary_Negotiation_Tips.jpg";
import Interview_Rejection from "../image/carrierTips/Interview_Rejection.jpg";
import kabil from "../image/carrierTips/kabil.jpg";
import best_logo from "../image/best_logo.webp";
import _Things from "../image/carrierTips/_Things.jpg";
import How_to_Tailor_Your_Resume from "../image/carrierTips/How_to_Tailor_Your_Resume.jpg";
import A_Recruiters_Guide from "../image/carrierTips/A_Recruiters_Guide.jpg";
import Brutal_Career_Traps from '../image/carrierTips/Brutal_Career_Traps.jpg';
import Resume_Hacks from '../image/carrierTips/Resume_Hacks.jpg';
import Manage_Workplace_Stress from '../image/carrierTips/Manage Workplace Stress.jpg';
import Hidden_Bias_in_AI_Driven_Hiring from '../image/carrierTips/Hidden Bias in AI-Driven Hiring.jpg';
import Your_Sleep_Might_Be_to_Blame from '../image/carrierTips/Your Sleep Might Be to Blame.jpg';
import  '../css/RandomeArticleToBlogCareer.css'
const RandomeArticleToBlogCareer = () => {
    const [filteredTips, setFilteredTips] = useState([]);

    const tipsList = [
        { title: "How to Land Your Dream Job in 2024", path: "/how-to-land-your-dream-job", src: images1, alt: 'How to Land Your Dream Job' },
        { title: "Top Job Search Websites to Explore", path: "/top-job-search-websites", src: Top_Job_Search_Websites, alt: 'Top Job Search Websites to Explore for Your Next Career Move' },
        { title: "Networking Tips to Boost Your Job Search", path: "/networking-tips", src: Networking_Tips, alt: 'Networking Tips to Boost Your Job Search' },
        { title: "How to Use LinkedIn Effectively for Job Hunting", path: "/linkedin-job-hunting", src: How_to_Use_LinkedIn, alt: "How to Use LinkedIn Effectively for Job Hunting" },
        { title: "How to Follow Up After a Job Interview", path: "/follow-up-after-interview", src: How_to_Follow, alt: 'How to Follow Up After a Job Interview' },
        { title: "Salary Negotiation Tips - Get the Best Deal", path: "/Salary_Negotiation_Component", src: Salary_Negotiation_Tips, alt: 'Salary Negotiation Tips - Get the Best Deal' },
        { title: "Best Online CV Builder", path: "/Best_Online_CV_Builder", src: best_logo, alt: 'Best Online CV Builder' },
        { title: "Best AI Resume Builder", path: "/Best_AI_Resume_Builder", src: best_logo, alt: 'Best AI Resume Builder' },
        { title: "Free Online Resume Maker", path: "/free-online-resume-maker", src: best_logo, alt: 'Free Online Resume Maker' },
        { title: "9 Things You Need to Know About ATS in 2024", path: "/9-things-you-need-to-know-about-ATS-in-2024", src: _Things, alt: "9 Things You Need to Know About ATS in 2024" },
        { title: "How to Tailor Your Resume to a Job Description with ChatGPT", path: "/tailor-resume-to-job-description", src: How_to_Tailor_Your_Resume, alt: 'How to Tailor Your Resume to a Job Description with ChatGPT' },
        { title: "A Recruiter’s Guide To Writing A Resume", path: "/recruiters-guide-writing-resume", src: A_Recruiters_Guide, alt: 'A Recruiter’s Guide To Writing A Resume' },
        { title: "काबिल होने के बावजूद नहीं मिलेगी जॉब", path: "/5-mistake-to-getting-job", src: kabil, alt: 'काबिल होने के बावजूद नहीं मिलेगी जॉब' },
        { title: "8 Reasons for Interview Rejection", path: "/8-reasons-for-interview-rejection", src: Interview_Rejection, alt: '8 Reasons for Interview Rejection' },
        { title: "10 Brutal Career Traps and How to Avoid Them - ResumeEra", path: "/10-brutal-career-traps", src: Brutal_Career_Traps, alt: '10 Brutal Career Traps' },
        { title: "10 Resume Hacks to Secure Your Dream Internship", path: "/10-resume-hacks", src: Resume_Hacks, alt: '10 Resume Hacks to Secure Your Dream Internship' },
        { title: "How to Manage Workplace Stress: Strategies, Insights, and Practical Tips", path: "/workplace-stress-management", src: Manage_Workplace_Stress, alt: 'Manage Workplace Stress' },
        { title: "Is There Hidden Bias in AI-Driven Hiring? Here is the Full Breakdown", path: "/ai-bias-in-hiring", src: Hidden_Bias_in_AI_Driven_Hiring, alt: 'Hidden Bias in AI-Driven Hiring' },
        { title: "Struggling to Stay on Top of Your To-Do List? Your Sleep Might Be to Blame!", path: "/sleep-and-productivity", src: Your_Sleep_Might_Be_to_Blame, alt: 'Your Sleep Might Be to Blame' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const randomTips = tipsList.sort(() => 0.5 - Math.random()).slice(0, 3);
        setFilteredTips(randomTips);
    }, []);

    const handleRefresh = () => {
        const randomTips = tipsList.sort(() => 0.5 - Math.random()).slice(0, 3);
        setFilteredTips(randomTips);
    };

    return (
        <div className="important-posts">
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/Blog_or_Career_Tips_Page" />
                <title>Blog or Career Tips Page</title>
                <meta name="description" content="This page is related to Blog to show valuable things." />
            </Helmet>
            <header>
                <h1>Did you enjoy this article? Then the below might interest you.</h1>
                <hr style={{width:'inherit'}}/>
            </header>

            <div className="artcle">
                <section>
                    <button onClick={handleRefresh} style={{ marginBottom: "20px", padding: "8px" }}>Refresh Tips</button>
                    <ul className="ul d-flex" style={{height:'300px'}}>
                        {filteredTips.map((tip, index) => (
                            <li key={index}>
                                
                                <figure>
                                    <Link to={tip.path}>
                                        <img src={tip.src} alt={tip.alt} style={{height:'200px',width:'100%',borderRadius:'15px'}} />
                                        <figcaption>{tip.alt}</figcaption>
                                    </Link>
                                </figure>
                                <Link to={tip.path}><h1 style={{fontSize:'small',textAlign:'center'}}>{tip.title}</h1></Link>
                                
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RandomeArticleToBlogCareer;
