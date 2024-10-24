import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import NewAds from "./adFolder/NewAds";

const InterviewQuestionPost = () => {
    return (
        <div className="important-posts">
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/Interview_Question_Post" />
                <title>Question And Answer Link :ResumeEra That Actual Free</title>
                <meta name="description" content="this page is releted to importannt link to show valuable things." />
            </Helmet>
            <div>
                <ul>
                <li><Link to="/tell-us-about-yourself">Tell Us About Yourself: Best Answers for Job Interviews | ResumeEra</Link></li>
                    <li><Link to="/Why_Work_Here">How to Answer "Why Do You Want to Work Here?" | Resumeera</Link></li>
                    <li><Link to="/why-should-we-hire-you">Why Should We Hire You? Best Answers for Job Interviews - ResumeEra</Link></li>
                    <li><Link to="/why_do_you_want_to_work">Why Do You Want to Work in This Field? - ResumeEra</Link></li>

                </ul>
                <div>
                    <NewAds/>
                </div>
            </div>
        </div>
    )
}
export default InterviewQuestionPost;