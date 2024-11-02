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
                    <div><NewAds/></div>
                    <li><Link to="/Why_Work_Here">How to Answer "Why Do You Want to Work Here?" | Resumeera</Link></li>
                    <div><NewAds/></div>

                    <li><Link to="/why-should-we-hire-you">Why Should We Hire You? Best Answers for Job Interviews - ResumeEra</Link></li>
                    <div><NewAds/></div>
                    <li><Link to="/why_do_you_want_to_work">Why Do You Want to Work in This Field? - ResumeEra</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/what-are-your-strengths'>What Are Your Strengths? | Resume Tips by ResumeEra</Link></li>
                    <div><NewAds/></div>

                    <li><Link to='/how-employer-describe'>How Would Your Previous Employer Describe You?</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/greatest-weakness'>What's Your Greatest Weakness? | ResumeEra</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/hobbies-interests'>What are Your Hobbies or Interests? | ResumeEra</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/what-does-success-look-like-to-you'>What Does Success Look Like to You? - Interview Prep Guide</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/why-are-you-qualified-for-this-position'>What Makes You Qualified for This Position?</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/skills-for-success-in-role'>Answering 'What Skills Make You Successful?' for Interviews | ResumeEra</Link></li>
                    <div style={{width:'auto',height:'auto'}}><NewAds/></div>
                    <li><Link to='/work-alone-or-group-preference'>Do You Prefer Working Alone or in a Group? - ResumeEra</Link></li>
                    <div><NewAds/></div>
                    <li><Link to='/dealing-with-difficult-customers'>How to Handle Difficult Customers | ResumeEra</Link></li>

                </ul>
                <div>
                    <NewAds/>
                </div>
            </div>
        </div>
    )
}
export default InterviewQuestionPost;