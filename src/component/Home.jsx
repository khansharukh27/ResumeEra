// import logo from '../image/logo.png';
import Carousel from './Crousel';
import step1 from '../image/step1.png';
import step2 from '../image/step2.png';
import step3 from '../image/step3.png';
import changeCV_image from '../image/changeCV_image.png';
import CoverLetterCrousel from './CoverLetterCrousel';
import '../css/home.css'
import { Link } from 'react-router-dom';
import best_logo from '../image/best_logo.webp'
import { Helmet } from 'react-helmet';

const Home = ({ images }) => {
    return (
        <div className="home-container">
             <Helmet>
      <link rel="canonical" href="/" />
      <title>Resume Era:How to Create Resumes Online ,Professional And Free </title>
            <meta name="description" content="ResumeEra is a user-friendly platform that allows you to create and customize your free resumes.
                    Choose from a variety of templates to make your free resume stand out. Whether you're highlighting
                    your work experience, education, skills, or personal information, ResumeEra makes it easy to
                    create a professional-looking free resume." />
                    <meta name='keyword' content='ResumeEra,Resume Era, Free Resume, how to create free resume online,free resume creator,free resume creator online ,Create Resume Online,Free Resume Builder,free resume maker ,Professional Resume, 
    Online Resume Builder, Job Application, CV Maker, Resume Templates, Career, 
    Employment, Resume, Curriculum Vitae, Job Seeker, Resume Writing, Cover Letter, 
    Job Interview, Career Development, Job Search, Online CV, Job Market, Job Board, 
    LinkedIn Resume, Job Portal, Free CV, Resume Creator, Resume Example, Job Resume, 
    Digital Resume, E-Resume, Career Opportunities, Job Network, Resume Tips, Resume Design, 
    Interview Preparation, Job Hunt, Resume Service, Job Placement, Job Postings, 
    Career Coaching, Resume Format, Resume Writing Service, Professional CV, Resume Samples, 
    Job Listings, Employment Services, Job Recruitment, Career Resources, Resume Editing, 
    Resume Help, Resume Advisor, Job Consultancy, Resume Checklist, Resume Download, 
    Job Openings, Career Guidance, Resume Customization, Job Profiles, Resume Styles, 
    Resume Outline, Resume Enhancements, Resume Highlights, Job Opportunities, 
    Resume Professional, Resume Advice, Job Applications, Resume Guidance, Resume Presentation, 
    Job Offers, Resume Layout, Resume Features, Job Prospects, Career Information, 
    Resume Preparation, Resume Objective, Resume Review, Job Experience, Career Highlights, 
    Resume Overview, Resume Headline, Job Titles, Career Path, Resume Strengths, 
    Job Descriptions, Resume Creator Tool, Resume Formatter, Resume Documentation, 
    Resume Content, Job Highlights, Career Building, Resume Summary, Job Skills, 
    Career Goals, Resume Maker, Job Achievements ,Resume with AI, Free AI resume builder, 
    AI-powered resume, AI resume creation, Free AI resume generator, AI resume maker, 
    Free online AI resume, AI resume writing, Create resume with AI, AI-generated resume, 
    AI-enhanced resume, Free AI CV builder, AI-driven resume tool, AI resume assistance, 
    AI resume service, Free AI job resume, AI resume templates, AI-based resume builder, 
    AI resume design, AI resume help, Resume AI free, Free AI resume creation, 
    AI resume for job seekers, AI-enhanced CV, Free resume with AI assistance, 
    AI resume suggestions, AI resume formatting, AI resume examples, 
    AI-based resume maker free, Free AI resume advisor, 
    AI resume optimization, AI resume checker, AI resume improvements, 
    AI-powered CV, AI-enhanced job resume, Free AI resume samples, 
    AI resume builder online free, AI resume editing free, 
    AI resume tips, AI resume insights, AI resume guide, 
    AI resume analysis, Free AI-driven resume, AI resume features, AI resume for free, 
    AI resume solutions, AI resume generator free, Free AI resume recommendations, 
    AI resume platform free, AI resume resources, AI resume writer free, 
    AI resume creation tool, AI resume software free, AI resume applications, 
    Free AI resume design, AI resume advice free, AI resume creation online, 
    Free AI resume builder tool, AI resume review free, AI resume template free, 
    AI resume customization free, Free AI resume tool online, AI resume development free, 
    AI resume support free, AI resume preparation free, Free AI resume assistant, 
    AI resume building free, AI resume suggestions free, AI resume format free, 
    AI resume layout free, AI resume tips free, AI resume improvements free, 
    Free AI resume creator online, AI resume personalization free, AI resume upgrade free, 
    AI resume technology free, AI resume checker free, AI resume design tool free, 
    AI resume recommendations free, AI resume customization tool, AI resume improvements online, 
    AI resume checker tool free, AI resume builder application free, 
    Free AI resume creation tool, AI resume editing tool free, AI resume formatting tool free, 
    Free AI resume writing tool, AI resume enhancement tool free, AI resume guide online free, 
    AI resume insights free, AI resume analysis tool free, Free AI resume builder online, 
    AI resume creation app free, Free AI resume tools, AI resume generation free, 
    AI resume review tool free'/>
            </Helmet>
            <div className='home_div'>
                <div className="home-logo">
                    <img src={best_logo} alt="logo" />
                </div>
                <div className="home-welcome " style={{color:'orange'}}>
                    <h1 style={{color:'black'}}>
                        
                        <Link className="home-link" to="/template">Welcome to ResumeEra! Please Click
                        PERSONALLIZED TEMPLATES FOR EVERY INDUSTRY  to make a Free Resume.</Link>
                       
                    </h1>
                </div>
            </div>

            <div className="home-carousel">
                <Carousel images={images}  />
            </div>
            <div className="home-description">
                <p>
                    ResumeEra is a user-friendly platform that allows you to create and customize your free resumes.
                    Choose from a variety of templates to make your free resume stand out. Whether you're highlighting
                    your work experience, education, skills, or personal information, ResumeEra makes it easy to
                    create a professional-looking free resume.
                </p>
            </div>
            <hr style={{width:'100%'}}/>
            <div className="home-how-to">
                <h1>HOW TO CREATE FREE RESUME</h1>
                <div className="home-steps">
                    <div className="home-step">
                        <img src={step1} alt="cv_template_1" />
                        <h4>Pick a CV template.</h4>
                        <p>Choose a sleek design and layout to get started.</p>
                    </div>
                    <div className="home-step">
                        <img src={step2} alt="fill_in_the_blank" />
                        <h4>Fill in the blanks.</h4>
                        <p>Type in a few words. Let the ResumeEra wizard fill the rest.</p>
                    </div>
                    <div className="home-step">
                        <img src={step3} alt="fill_in_the_blank" />
                        <h4>Customize your document.</h4>
                        <p>Make it truly yours. Uniqueness in a few clicks.</p>
                    </div>
                </div>

            </div>
            <hr className="home-divider"style={{width:'100%'}} />
            <div className="home-change-cv">
                <div className="home-change-cv-image">
                    <img src={changeCV_image} alt="changeCV_image" />
                </div>
                <div className="home-change-cv-info">
                    <h4>Change Your CV. Change your life.</h4>
                    <ul>
                        <li>ResumeEra builder. Not just an app. More like a personal career expert. <br />Your CV is underwhelming and you deserve better. Get that fresh look with our CV templates.</li>
                        <li>Click on ready-to-use expert suggestions to build your CV in minutes.</li>
                        <li>Blow away recruiters with sleek designs.</li>
                        <li>Let employers see your true self—the best candidate for the job.</li>
                    </ul>
                    <p><a href="/template">Create Free CV</a></p>
                </div>
            </div>
            <hr className="home-divider" />
            <div className="home-resume-builder">
                <h4>Easy online free resume builder</h4>
                <p>Create an awesome free resume in minutes, without leaving your web browser.</p>
                <div className="home-resume-features ">
                    <div className="home-feature">
                        <h5 style={{color:'black',fontWeight:900}}><i className='bi bi-buildings' ></i> Your data is safe</h5>
                        <p>We do not save your data right now.</p>
                    </div>
                    <div className="home-feature" style={{color:'black'}}>
                        <h5 style={{color:'black',fontWeight:900}}><i className='bi bi-newspaper'></i> Approved templates</h5>
                        <p style={{color:'black',fontWeight:200}}>Professionally-designed free resume templates and examples.
                            Just edit and download in 5 minutes.</p>
                    </div>
                    <div className="home-feature">
                        <h5 style={{color:'black',fontWeight:900}}><i className='bi bi-option me-3 rotating-icon'></i> PDF free resume options</h5>
                        <p style={{color:'black',fontWeight:'200'}}>Save your perfect free resume in PDF with a single click.</p>
                    </div>
                    <div className="home-feature">
                        <h5 style={{color:'black',fontWeight:900}}><i className='bi bi-card-text me-3 rotating-icon'></i> Cover letters</h5>
                        <p style={{color:'black',fontWeight:'200'}}>Our cover letter builder works with the same ease and use of elegant
                            templates as the free resume creator.</p>
                    </div>
                </div>
            </div>
            <hr style={{width:'100%'}} />
            <div className="home-professional-story " style={{backgroundColor:'white'}}>
                <h2>Use the best free resume maker as your guide</h2>
                <p>Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online free resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                <div className='home-story-feature-main d-sm-flex'>
                    <div className="home-story-feature">
                        <h3><i className="bi bi-trophy-fill"></i>Make a free resume that wins interviews</h3>
                        <p>Use our free resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers, and even CEOs.</p>
                    </div>
                    <div className="home-story-feature">
                        <h3><i className="bi bi-pencil-square me-5"></i> Resume writing made easy</h3>
                        <p>Resume writing has never been this effortless. Pre-generated text, visual designs, and more - all already integrated into the free resume maker. Just fill in your details.</p>
                    </div>
                    <div className="home-story-feature">
                        <h3><i className='bi bi-gear-fill'></i> A recruiter-tested CV maker tool</h3>
                        <p>Our free resume builder and its pre-generated content are tested by recruiters
                            and IT experts. We help your free resume become truly competitive in the hiring
                            process.</p>
                    </div>
                </div>

            </div>
            <hr style={{width:'100%'}}/>
            <div className="home-cover-letter">
                <h2>Create a professional story in minutes. Use our cover letter maker.</h2>
                <p>Tired of struggling with free cover letters? Our free cover letter maker transforms hours
                    of work into minutes. Craft compelling pitches effortlessly with ready-to-use
                    templates and persuasive phrases. Focus on showcasing your skills without the
                    stress of formatting. Streamline your job application process today and stand
                    out effortlessly.</p>
                <div className="home-cover-letter-carousel">
                    <CoverLetterCrousel images={images} />
                </div>
            </div>
        </div>
    );
};

export default Home;
