import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from './adFolder/GoogleAd';
import '../css/ImportantPostLink.css'

const ImportantPostLink = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Array of posts in an object format for easy filtering
    const posts = [
        { path: '/about-resumeera', title: 'ResumeEra: Craft Your Perfect Resume Today', src: 'https://resumeera.xyz/static/media/download.96cc600c1311eb5dce13.jpg', alt: 'ResumeEra logo' },
        { path: '/how-to-create-a-professional-resume', title: 'How to Create a Professional Resume', src: 'https://img.freepik.com/free-photo/handsome-young-man-working-laptop-smiling-while-sitting-sidewalk-cafe_231208-12079.jpg', alt: 'how to create resume online' },
        { path: '/tips-for-writing-a-cover-letter', title: 'Tips for Writing a Cover Letter', src: 'https://img.freepik.com/free-photo/close-up-female-typing-laptop_23-2148889241.jpg', alt: 'tips for writing cover letter' },
        { path: '/why-soft-skills-matter', title: 'Why Soft Skills Matter in Your Resume', src: 'https://resumeera.xyz/static/media/soft_skill_image.99deb76d8f4fd0d357ae.jpg', alt: 'Why Soft Skills Matter in Your Resume' },
        { path: '/top-resume-templates-for-2024', title: 'Top Resume Templates for 2024', src: 'https://img.freepik.com/free-photo/creative-resume-template_23-2149100848.jpg', alt: 'Top Resume Templates for 2024' },
        { path: '/common-mistakes-to-avoid-on-your-resume', title: 'Common Mistakes to Avoid on Your Resume', src: 'https://img.freepik.com/free-photo/smiling-business-woman-working-laptop-office_23-2148880288.jpg', alt: 'Common resume mistakes' },
        { path: '/how-to-choose-the-right-resume-template', title: 'How to Choose the Right Resume Template', src: 'https://img.freepik.com/free-photo/man-checking-application-form-tablet_23-2149035090.jpg', alt: 'Choosing the right resume template' },
        { path: '/creating-a-resume-for-your-first-job', title: 'Creating a Resume for Your First Job', src: 'https://img.freepik.com/free-photo/high-angle-man-writing-notes_23-2149100843.jpg', alt: 'Resume for first job' },
        { path: '/how-to-highlight-achievements-in-a-resume', title: 'How to Highlight Achievements in a Resume', src: 'https://img.freepik.com/free-photo/successful-business-people-working-together-modern-office_23-2148897896.jpg', alt: 'Highlight achievements in resume' },
        { path: '/resume-tips-for-experienced-professionals', title: 'Resume Tips for Experienced Professionals', src: 'https://img.freepik.com/free-photo/smiling-business-woman-working-laptop-office_23-2148880288.jpg', alt: 'Tips for experienced professionals' },
        { path: '/crafting-a-modern-resume', title: 'Crafting a Modern Resume', src: 'https://img.freepik.com/free-photo/freelance-man-working-laptop_23-2149050165.jpg', alt: 'Crafting a modern resume' },
        { path: '/tip_for_interview', title: 'Tip For Interview', src: 'https://img.freepik.com/free-photo/hands-holding-resume-form_23-2149100841.jpg', alt: 'Interview tips' },
        { path: '/how-to-format-a-resume-correctly', title: 'How to Format a Resume Correctly', src: 'https://img.freepik.com/free-photo/high-angle-man-writing-notes_23-2149100843.jpg', alt: 'Correct resume formatting' },
        { path: '/what-employers-look-for-in-a-resume', title: 'What Employers Look for in a Resume', src: 'https://img.freepik.com/free-photo/serious-young-african-american-business-woman-thinking-holding-documents_23-2149120735.jpg', alt: 'Employer expectations for resume' },
        { path: '/how-to-use-keywords-in-a-resume', title: 'How to Use Keywords in a Resume', src: 'https://img.freepik.com/free-photo/close-up-hand-writing-laptop_23-2148902636.jpg', alt: 'Using keywords in resume' },
        { path: '/improving-your-resume-with-action-verbs', title: 'Improving Your Resume with Action Verbs', src: 'https://img.freepik.com/free-photo/person-using-laptop_23-2149034987.jpg', alt: 'Using action verbs in resume' },
        { path: '/how-to-create-a-resume-for-international-jobs', title: 'How to Create a Resume for International Jobs', src: 'https://img.freepik.com/free-photo/successful-business-woman-laptop_23-2148897892.jpg', alt: 'Resume for international jobs' },
        { path: '/resume-vs-cv-what-you-need-to-know', title: 'Resume vs. CV: What You Need to Know', src: 'https://img.freepik.com/free-photo/woman-writing-resume_23-2148998403.jpg', alt: 'Difference between resume and CV' },
        { path: '/how-to-showcase-your-education-in-a-resume', title: 'How to Showcase Your Education in a Resume', src: 'https://img.freepik.com/free-photo/successful-business-woman-working-laptop_23-2148897890.jpg', alt: 'Showcasing education in resume' },
        { path: '/creating-a-resume-with-no-experience', title: 'Creating a Resume with No Experience', src: 'https://img.freepik.com/free-photo/student-studying-laptop_23-2148998405.jpg', alt: 'Resume with no experience' },
        { path: '/how-to-write-a-resume-for-career-change', title: 'How to Write a Resume for Career Change', src: 'https://img.freepik.com/free-photo/female-working-resume-template_23-2148998412.jpg', alt: 'Resume for career change' },
        { path: '/resume-writing-tips-for-remote-jobs', title: 'Resume Writing Tips for Remote Jobs', src: 'https://img.freepik.com/free-photo/person-using-laptop_23-2149034987.jpg', alt: 'Remote job resume tips' },
        { path: '/resume-tip-component', title: 'Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?...with ResumeEra', src: 'https://img.freepik.com/free-photo/business-meeting-collaboration_23-2148899008.jpg', alt: 'Resume tips' },
        { path: '/xyz-formula-resume', title: 'XYZ Formula: A Simple Approach to Showcasing Your Achievements in Your Resume', src: 'https://img.freepik.com/free-photo/man-working-laptop_23-2149050162.jpg', alt: 'XYZ formula for resume' },
        { path: '/resume_component', title: 'Create a Professional Resume with Free Templates and Showcase Your Skills', src: 'https://img.freepik.com/free-photo/businessman-preparing-resume_23-2149050332.jpg', alt: 'Professional resume templates' },
        { path: '/Things_To_Remove_From_Your_Cv', title: 'Things to Remove from Your CV - Resume Tips: ResumeEra', src: 'https://img.freepik.com/free-photo/human-resources-interview_23-2149050143.jpg', alt: 'Things to remove from CV' },
        { path: '/Tip_for_Interview', title: 'Tip for Interview: ResumeEra', src: 'https://img.freepik.com/free-photo/business-interview_23-2149122432.jpg', alt: 'Interview tips by ResumeEra' },
        { path: '/AnupamKher_resume', title: 'Anupam Kher Resume with ResumeEra', src: 'https://img.freepik.com/free-photo/actor-anupam-kher-speaking-microphone_23-2148998417.jpg', alt: 'Anupam Kher Resume' },
        { path: '/free_resumesites_component', title: 'What Resume Site is Actually Free', src: 'https://img.freepik.com/free-photo/searching-free-resume-template_23-2149122524.jpg', alt: 'Free resume sites' },
        { path: '/tailor-resume-job-description-chatgpt', title: 'ResumeEra: How to Tailor Your Resume to a Job Description with ChatGPT', src: 'https://img.freepik.com/free-photo/man-using-laptop_23-2149011460.jpg', alt: 'Tailoring resume with ChatGPT' },
        { path: '/free-resume-builder', title: 'Online Resume Maker Free PDF | ResumeEra - Create Free Resumes for Freshers', src: 'https://img.freepik.com/free-photo/student-using-free-resume-builder_23-2149122257.jpg', alt: 'Free online resume maker' },
        { path: '/resume-trends-2024', title: '10 Free Resume Trends In 2024: What You Need To Know To Stand Out', src: 'https://img.freepik.com/free-photo/person-reviewing-trendy-resume_23-2148998421.jpg', alt: '2024 Resume Trends' },
        { path: '/remote-work-experience', title: 'Remote Work Experience | Customized Resumes for Each Application', src: 'https://img.freepik.com/free-photo/person-working-remote-resume_23-2149050343.jpg', alt: 'Remote work experience resume' },
        { path: '/how-to-write-a-resume-in-7-easy-steps', title: 'How To Write A Resume In 7 Easy Steps', src: 'https://img.freepik.com/free-photo/easy-resume-steps_23-2148998418.jpg', alt: 'Resume writing steps' },
    ];


    // Filter posts based on search term
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Important Post to Gain Knowledge</h1>
            <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem' }}>
                {filteredPosts.map((post, index) => (
                    <>
                        <div key={index} className="card" style={{ width: '100%', height: '380px' }}>
                            <img style={{ width: '100%', height: '200px', borderRadius: '15px' }} src={post.src} className="card-img-top" alt={post.alt} />
                            <div className="card-body">
                                <h3 className="card-title" style={{marginTop:'-10px'}}>{post.title}</h3>
                                <a href={post.path} className="btn btn-primary">Read</a>
                            </div>
                        </div>

                        {/* Insert an ad after every 4 cards */}
                        {(index + 1) % 4 === 0 && (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1rem' }}>
                                <div className="ad-container">
                                    <GoogleAd />
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>



        </div>
    );
}

export default ImportantPostLink;
