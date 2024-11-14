import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import GoogleAd from "./adFolder/GoogleAd";
import { useEffect } from "react";

const InterviewQuestionPost = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
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
                    <div><GoogleAd/></div>
                    <li><Link to="/Why_Work_Here">How to Answer "Why Do You Want to Work Here?" | Resumeera</Link></li>
                    <div><GoogleAd/></div>

                    <li><Link to="/why-should-we-hire-you">Why Should We Hire You? Best Answers for Job Interviews - ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to="/why_do_you_want_to_work">Why Do You Want to Work in This Field? - ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/what-are-your-strengths'>What Are Your Strengths? | Resume Tips by ResumeEra</Link></li>
                    <div><GoogleAd/></div>

                    <li><Link to='/how-employer-describe'>How Would Your Previous Employer Describe You?</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/greatest-weakness'>What's Your Greatest Weakness? | ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/hobbies-interests'>What are Your Hobbies or Interests? | ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/what-does-success-look-like-to-you'>What Does Success Look Like to You? - Interview Prep Guide</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/why-are-you-qualified-for-this-position'>What Makes You Qualified for This Position?</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/skills-for-success-in-role'>Answering 'What Skills Make You Successful?' for Interviews | ResumeEra</Link></li>
                    <div style={{width:'auto',height:'auto'}}><GoogleAd/></div>
                    <li><Link to='/work-alone-or-group-preference'>Do You Prefer Working Alone or in a Group? - ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to='/dealing-with-difficult-customers'>How to Handle Difficult Customers | ResumeEra</Link></li>
                    <div><GoogleAd/></div>
                    <li><Link to="/why-do-you-have-a-gap-in-your-job-history">Why Do You Have a Gap in Your Job History? | ResumeEra</Link></li>
                    <div>
                        <GoogleAd/>
                    </div>
                    <li><Link to="/how-to-build-relationships-with-your-coworkers">How to Build Relationships with Your Coworkers | ResumeEra</Link></li>
                    <div>
                        <GoogleAd/>
                    </div>
                    <li><Link to="/Interview_Question_Post/How_Do_You_Handle_Stress_and_Pressure">How Do You Handle Stress and Pressure?</Link></li>
                    <div>
                        <GoogleAd/>
                    </div>
                    <li><Link to="/where-do-you-see-yourself-in-five-years">Where Do You See Yourself in Five Years? - Career Guide</Link></li>
                    <div>
                        <GoogleAd/>
                    </div>
                    <li><Link to="/what-motivates-you-to-do-your-best-work">What Motivates You to Do Your Best Work? | ResumeEra</Link></li>
                    <li><Link to="/how-do-you-handle-feedback-and-criticism">How Do You Handle Feedback and Criticism? | ResumeEra</Link></li>

                </ul>
                <div>
                    <GoogleAd/>
                </div>
            </div>
        </div>
    )
}
export default InterviewQuestionPost;