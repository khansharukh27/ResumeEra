import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog_Career = () => {
    return (
        <div className="aboutResumeEra" >
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/Blog_or_Career_Tips_Page" />
                <title>Blog or Career Tips Page</title>
                <meta name="description" content="this page is releted to Blog to show valuable things." />
            </Helmet>
            <header>
                <h1>Blog or Career Tips Page</h1>
            </header>

            <section>
                <ul>
                    <li><Link to="/how-to-land-your-dream-job">How to Land Your Dream Job in 2024</Link></li>
                    <li><Link to="/top-job-search-websites">Top Job Search Websites to Explore</Link></li>
                    <li><Link to="/networking-tips">Networking Tips to Boost Your Job Search</Link></li>
                    <li><Link to="/linkedin-job-hunting">How to Use LinkedIn Effectively for Job Hunting</Link></li>
                    <li><Link to="/follow-up-after-interview">How to Follow Up After a Job Interview</Link></li>

                </ul>
            </section>

        </div>
    )
}
export default Blog_Career;