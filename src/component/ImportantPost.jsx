import { Link } from 'react-router-dom';
import '../css/importantpost.css'
import { Helmet } from 'react-helmet';

const ImportantPost = () => {
    return (
        <div className="important-posts">
            <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/important_post" />
      <title>Important Links</title>
            <meta name="description" content="this page is releted to importannt link to show valuable things." />
            </Helmet>
            <ul>
                <li>
                    <Link to="/how-to-create-a-professional-resume">
                        How to Create a Professional Resume
                    </Link>
                </li>
                <li>
                    <Link to="/tips-for-writing-a-cover-letter" >
                        Tips for Writing a Cover Letter
                    </Link>
                </li>
                <li>
                    <Link to="/why-soft-skills-matter" >
                        Why Soft Skills Matter in Your Resume
                    </Link>
                </li>
                <li>
                    <Link to="/top-resume-templates-for-2024" >
                        Top Resume Templates for 2024
                    </Link>
                </li>
                <li>
                    <Link to="/common-mistakes-to-avoid-on-your-resume" >
                        Common Mistakes to Avoid on Your Resume
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-choose-the-right-resume-template" >
                        How to Choose the Right Resume Template
                    </Link>
                </li>
                <li>
                    <Link to="/creating-a-resume-for-your-first-job" >
                        Creating a Resume for Your First Job
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-highlight-achievements-in-a-resume" >
                        How to Highlight Achievements in a Resume
                    </Link>
                </li>
                <li>
                    <Link to="/resume-tips-for-experienced-professionals" >
                        Resume Tips for Experienced Professionals
                    </Link>
                </li>
                <li>
                    <Link to="/crafting-a-modern-resume" >
                        Crafting a Modern Resume
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-format-a-resume-correctly" >
                        How to Format a Resume Correctly
                    </Link>
                </li>
                <li>
                    <Link to="/what-employers-look-for-in-a-resume" >
                        What Employers Look for in a Resume
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-use-keywords-in-a-resume" >
                        How to Use Keywords in a Resume
                    </Link>
                </li>
                <li>
                    <Link to="/improving-your-resume-with-action-verbs" >
                        Improving Your Resume with Action Verbs
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-create-a-resume-for-international-jobs" >
                        How to Create a Resume for International Jobs
                    </Link>
                </li>
                <li>
                    <Link to="/resume-vs-cv-what-you-need-to-know" >
                        Resume vs. CV: What You Need to Know
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-showcase-your-education-in-a-resume" >
                        How to Showcase Your Education in a Resume
                    </Link>
                </li>
                <li>
                    <Link to="/creating-a-resume-with-no-experience" >
                        Creating a Resume with No Experience
                    </Link>
                </li>
                <li>
                    <Link to="/how-to-write-a-resume-for-career-change" >
                        How to Write a Resume for Career Change
                    </Link>
                </li>
                <li>
                    <Link to="/resume-writing-tips-for-remote-jobs" >
                        Resume Writing Tips for Remote Jobs
                    </Link>
                </li>
                <li>
                    <Link to="/resume-tip-component" >
                    Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?...with ResumeEra
                    </Link>
                </li>
                <li>
                    <Link to="/xyz-formula-resume" >
                    XYZ Formula: A Simple Approach to Showcasing Your Achievements in Your Resume                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ImportantPost;