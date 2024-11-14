import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GoogleAd from "../adFolder/GoogleAd";
import { useEffect, useState } from "react";
import Career_Tips from '../../image/carrierTips/Career_Tips.jpg';
import images1 from '../../image/image_for_link/image1.jpg';
import Top_Job_Search_Websites from '../../image/carrierTips/Top_Job_Search_Websites.jpg';
import How_to_Use_LinkedIn from "../../image/carrierTips/How_to_Use_LinkedIn.jpg";
import Networking_Tips from "../../image/carrierTips/Networking_Tips.jpg";
import How_to_Follow from "../../image/carrierTips/How_to_Follow.jpg";
import Salary_Negotiation_Tips from "../../image/carrierTips/Salary_Negotiation_Tips.jpg";
import Interview_Rejection from "../../image/carrierTips/Interview_Rejection.jpg";
import kabil from "../../image/carrierTips/kabil.jpg";
import best_logo from "../../image/best_logo.webp";
import _Things from "../../image/carrierTips/_Things.jpg";
import How_to_Tailor_Your_Resume from "../../image/carrierTips/How_to_Tailor_Your_Resume.jpg";
import A_Recruiters_Guide from "../../image/carrierTips/A_Recruiters_Guide.jpg";

const BlogCareer = () => {
    const [searchTerm, setSearchTerm] = useState("");
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
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        setFilteredTips(tipsList);
    }, []);

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = tipsList.filter((tip) =>
            tip.title.toLowerCase().includes(searchValue)
        );
        setFilteredTips(filtered);
    };

    return (
        <div className="important-posts aboutResumeEra">
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/Blog_or_Career_Tips_Page" />
                <title>Blog or Career Tips Page</title>
                <meta name="description" content="This page is related to Blog to show valuable things." />
            </Helmet>
            <header>
                <h1>Career Tips</h1>
                <p>Welcome to our Blog or Career Tips Page, your go-to source for expert advice, valuable insights, and practical tips...</p>
                <figure>
                    <img src={Career_Tips} alt="career tips" loading="lazy" title="career tips" />
                    <figcaption><a href="https://resumeera.xyz">Career Tips</a></figcaption>
                </figure>
            </header>

            <div className="flex">
                <section>
                    <input 
                        type="text" 
                        placeholder="Search career tips..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
                    />
                    
                    <ul>
                        {filteredTips.map((tip, index) => (
                            <li key={index}>
                                <Link to={tip.path}><h1>{tip.title}</h1></Link>
                                <figure>
                                    <Link to={tip.path}>
                                        <img src={tip.src} alt={tip.alt} />
                                        <figcaption>{tip.alt}</figcaption>
                                    </Link>
                                </figure>
                                <GoogleAd />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default BlogCareer;
