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
      <link rel="canonical" href="https://resumeera.xyz" />
      <title> Welcome to ResumeEra </title>
            <meta name="description" content="ResumeEra is a user-friendly platform that allows you to create and customize your free resumes.
                    Choose from a variety of templates to make your free resume stand out. Whether you're highlighting
                    your work experience, education, skills, or personal information, ResumeEra makes it easy to
                    create a professional-looking free resume." />
            </Helmet>
            <div className='home_div'>
                <div className="home-logo">
                    <img src={best_logo} alt="logo" />
                </div>
                <div className="home-welcome">
                    <h4>
                        Welcome to ResumeEra! Please Click
                        <Link className="home-link" to="/template">PERSONALLIZED TEMPLATES FOR EVERY INDUSTRY</Link>
                        to make a resume.
                    </h4>
                </div>
            </div>

            <div className="home-carousel">
                <Carousel images={images} />
            </div>
            <div className="home-description">
                <p>
                    ResumeEra is a user-friendly platform that allows you to create and customize your free resumes.
                    Choose from a variety of templates to make your free resume stand out. Whether you're highlighting
                    your work experience, education, skills, or personal information, ResumeEra makes it easy to
                    create a professional-looking free resume.
                </p>
            </div>
            <hr />
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
            <hr className="home-divider" />
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
                        <h5><i className='bi bi-buildings'></i> Your data is safe</h5>
                        <p>We do not save your data right now.</p>
                    </div>
                    <div className="home-feature" style={{color:'black'}}>
                        <h5 style={{color:'black',fontWeight:'700'}}><i className='bi bi-newspaper'></i> Approved templates</h5>
                        <p style={{color:'black',fontWeight:'200'}}>Professionally-designed free resume templates and examples.
                            Just edit and download in 5 minutes.</p>
                    </div>
                    <div className="home-feature">
                        <h5 style={{color:'black',fontWeight:'700'}}><i className='bi bi-option me-3 rotating-icon'></i> PDF free resume options</h5>
                        <p style={{color:'black',fontWeight:'200'}}>Save your perfect free resume in PDF with a single click.</p>
                    </div>
                    <div className="home-feature">
                        <h5 style={{color:'black',fontWeight:'700'}}><i className='bi bi-card-text me-3 rotating-icon'></i> Cover letters</h5>
                        <p style={{color:'black',fontWeight:'200'}}>Our cover letter builder works with the same ease and use of elegant
                            templates as the free resume creator.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="home-professional-story" style={{backgroundColor:'white'}}>
                <h2>Use the best free resume maker as your guide</h2>
                <p>Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online free resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                <div className='home-story-feature-main'>
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
            <hr />
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
