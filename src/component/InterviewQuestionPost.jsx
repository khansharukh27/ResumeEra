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
                    <li><Link to='/what-are-your-strengths'>What Are Your Strengths? | Resume Tips by ResumeEra</Link></li>
                    <li><Link to='/how-employer-describe'>How Would Your Previous Employer Describe You?</Link></li>
                    <li><Link to='/greatest-weakness'>What's Your Greatest Weakness? | ResumeEra</Link></li>
                    <li><Link to='/hobbies-interests'>What are Your Hobbies or Interests? | ResumeEra</Link></li>
                    <li><Link to='/what-does-success-look-like-to-you'>What Does Success Look Like to You? - Interview Prep Guide</Link></li>
                    <li><Link to='/why-are-you-qualified-for-this-position'>What Makes You Qualified for This Position?</Link></li>

                </ul>
                <div>
                    <NewAds/>
                </div>
            </div>
        </div>
    )
}
export default InterviewQuestionPost;