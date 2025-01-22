import { useAuth0 } from "@auth0/auth0-react";
// import logo from '../image/logo.png';
import Carousel from "./Crousel";
import step1 from "../image/step1.png";
import step2 from "../image/step2.png";
import step3 from "../image/step3.png";
import changeCV_image from "../image/changeCV_image.png";
import CoverLetterCrousel from "./CoverLetterCrousel";
import "../css/home.css";
import { Link } from "react-router-dom";
import best_logo from "../image/best_logo.webp";
import { Helmet } from "react-helmet";
// import ResumeEraBuilder from "./ResumeEraBuilder";

const Home = ({ images }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="home-container">
      <Helmet>
        <link rel="canonical" href="https://resumeera.xyz" />
        <title>
        Create Your Professional Resume Online | Free Resume Format
        </title>

        <meta
          name="description"
          content="Create your professional resume online for free with our easy-to-use platform. Choose from a variety of resume formats and templates to showcase your skills and experience."
        />

        <meta
          name="keywords"
          content="ResumeEra, Resume format PDF, free resume PDF, resume builder, create resume PDF, download resume PDF, professional resume format, resume template PDF, CV PDF, resume maker, online resume builder, free resume creator, free resume maker, resume formatting, job application, CV builder, curriculum vitae, job seeker resume"
        />

        <meta name="author" content="ResumeEra Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Free Resume Format PDF | Resume Formatting & Builder | ResumeEra"
        />
        <meta
          property="og:description"
          content="Create a professional resume in PDF format with ResumeEra. Choose from free templates, customize your resume, and download it as a polished PDF."
        />
        <meta property="og:url" content="https://resumeera.xyz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        />
        <meta
          property="og:image:alt"
          content="Preview of ResumeEra's resume builder interface"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Resume Format PDF | Resume Formatting & Builder | ResumeEra"
        />
        <meta
          name="twitter:description"
          content="Create and download your resume in PDF format using ResumeEra. Access free templates, customize your resume, and export it as a polished PDF."
        />
        <meta
          name="twitter:image"
          content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Preview of ResumeEra's resume builder interface"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      <div className="home_div">
        <div className="home-logo">
          <img src={best_logo} alt="ResumeEra logo" />
        </div>
        <div className="home-welcome" style={{ }}>
          <h1
            style={{
              
              textAlign: "justify",
              margin: "0 10px 0 40px",
            }}
          >
            {isAuthenticated ? (
              <Link className="home-link" to="/template" style={{textDecoration:'none'}}>
                WELCOME TO RESUMEERA! PLEASE CLICK PERSONALIZED TEMPLATE FOR EVERY
                INDUSTRY TO CREATE AND DOWNLOAD YOUR FREE RESUME FORMAT PDF.
              </Link>
            ) : (
              <span
                style={{ cursor: "pointer", textDecoration: "" }}
                onClick={() => loginWithRedirect()}
              >
                PLEASE LOGIN TO ACCESS PERSONALIZED TEMPLATES FOR EVERY INDUSTRY AND
                DOWNLOAD YOUR FREE RESUME FORMAT PDF.
              </span>
            )}

          </h1>
        </div>
      </div>

      <div className="home-carousel">
        <Carousel images={images} />
      </div>
      <div className="home-description">
        <p>
          ResumeEra is a user-friendly platform that allows you to create, customize,
          and download your free resume format PDF. Choose from a variety of templates to
          make your free resume stand out. Whether you're highlighting your work experience,
          education, skills, or personal information, ResumeEra makes it easy to create a
          professional-looking resume and download it as a polished resume format PDF.
        </p>

      </div>
    
      <div className="home-how-to">
        <h2>HOW TO CREATE A FREE RESUME FORMAT PDF</h2>
        <div className="home-steps">
          <div className="home-step">
            <img src={step1} alt="cv_template_1" />
            <h4>Pick a CV template.</h4>
            <p>Choose a sleek design and layout to get started. Select the template that suits your style and industry needs.</p>
          </div>
          <div className="home-step">
            <img src={step2} alt="fill_in_the_blank" />
            <h4>Fill in the blanks.</h4>
            <p>Type in a few words. Let the ResumeEra wizard fill the rest, preparing your resume for
              download in PDF format.</p>
          </div>
          <div className="home-step">
            <img src={step3} alt="fill_in_the_blank" />
            <h4>Customize your document.</h4>
            <p>Make it truly yours. Uniqueness in a few clicks. Then, easily download your resume as a
              professional PDF format.</p>
          </div>
        </div>
      </div>

      <hr className="home-divider" />
      <div className="home-change-cv">
        <div className="home-change-cv-image">
          <img src={changeCV_image} alt="changeCV_image" />
        </div>
        <div className="home-change-cv-info">
          <h4>Change Your CV. Change Your Life.</h4>
          <ul>
            <li>
              ResumeEra builder. Not just an app. More like a personal career
              expert. <br />
              Your CV is underwhelming, and you deserve better. Get that fresh
              look with our resume templates and download your CV in PDF format.
            </li>
            <li>
              Click on ready-to-use expert suggestions to build your CV in
              minutes, then download it as a professional PDF format.
            </li>
            <li>Blow away recruiters with sleek, downloadable PDF designs.</li>
            <li>
              Let employers see your true self—the best candidate for the job—with
              a polished resume in PDF format.
            </li>
          </ul>
          {isAuthenticated ? (
            <p style={{ textAlign: "center" }}>
              <a href="/template">Create Free Resume Format PDF</a>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>
              <span
                onClick={() => loginWithRedirect()}
                style={{
                  border: "1px solid grey",
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Create Free Resume Format PDF
              </span>
            </p>
          )}
        </div>

      </div>
      <hr className="home-divider" />
      <div className="home-resume-builder">
        <h4>Easy online free resume format pdf downloader</h4>
        <p style={{ textAlign: "center" }}>
          Create an awesome free resume in pdf format in a minutes, without leaving your web
          browser.
        </p>
        <div className="home-resume-features ">
          <div className="home-feature">
            <h5 style={{ color: "black", fontWeight: 900 }}>
              <i className="bi bi-buildings"></i> Your data is safe
            </h5>
            <p>
              At ResumeEra, your privacy is our top priority. We collect only
              the information needed to provide you with a personalized
              resume-building experience. Once you're ready, create and download your resume format PDF.
              To learn more, you can click this
              link... <a href="/template">Privacy Policy</a>
            </p>

          </div>
          <div className="home-feature" style={{ color: "black" }}>
            <h5 style={{ color: "black", fontWeight: 900 }}>
              <i className="bi bi-newspaper"></i> Approved templates
            </h5>
            <p style={{ color: "black", fontWeight: "200" }}>
              Professionally-designed free resume templates and examples. Just
              edit and download in 5 minutes.
            </p>
          </div>
          <div className="home-feature">
            <h5 style={{ color: "black", fontWeight: 900 }}>
              <i className="bi bi-option me-3 rotating-icon"></i> PDF free
              resume options
            </h5>
            <p style={{ color: "black", fontWeight: "200" }}>
              Save your perfect free resume in PDF with a single click.
            </p>
          </div>
          <div className="home-feature">
            <h5 style={{ color: "black", fontWeight: 900 }}>
              <i className="bi bi-card-text me-3 rotating-icon"></i> Cover
              letters
            </h5>
            <p style={{ color: "black", fontWeight: "200" }}>
              Our cover letter builder works with the same ease and use of
              elegant templates as the free resume creator.
            </p>
          </div>
        </div>
      </div>
      <div
        className="home-professional-story"
        style={{ backgroundColor: "white" }}
      >
        <h3 style={{ color: "black", fontWeight: 900 }}>
          Use the best free resume maker as your guide
        </h3>
        <p>
          Getting that dream job can seem like an impossible task. We're here to
          change that. Give yourself a real advantage with the best online free
          resume maker: created by experts, improved by data, and trusted by
          millions of professionals. Easily create and download your professional
          resume format PDF with ResumeEra to stand out from the competition.
        </p>

        <div className="home-story-feature-main d-sm-flex">
          <div className="home-story-feature">
            <h3>
              <i className="bi bi-trophy-fill"></i>Make a free resume  that wins
              interviews
            </h3>
            <p>
              Use our free resume maker with its advanced creation tools to tell
              a professional story that engages recruiters, hiring managers, and
              even CEOs.
              <a className="button" href="/Interview_Question_Post" 
              style={{width:'50%', padding:'15px',fontSize:'1rem',
              margin:'auto',fontWeight:'400'}}>Interview Guide</a>
            </p>
          </div>
          <div className="home-story-feature">
            <h3>
              <i className="bi bi-pencil-square me-5"></i> Resume writing made
              easy
            </h3>
            <p>
              Resume writing has never been this effortless. Pre-generated text,
              visual designs, and more - all already integrated into the free
              resume maker. Just fill in your details.
              <a className="button" href="/template" style={{width:'50%', padding:'15px',
                fontSize:'1rem',margin:'auto',fontWeight:'400'}}>Make Resume</a>

            </p>
          </div>
          <div className="home-story-feature">
            <h3>
              <i className="bi bi-gear-fill"></i> A recruiter-tested CV maker
              tool
            </h3>
            <p>
              Our free resume builder and its pre-generated content are tested
              by recruiters and IT experts. We help your free resume become
              truly competitive in the hiring process.
              <a className="button" href="/template" 
              style={{marginBottom:'2px', width:'50%', padding:'15px',fontSize:'1rem',margin:'auto',
              fontWeight:'400'}}>Make Resume</a>

            </p>
          </div>
        </div>
      </div>

      <div className="home-cover-letter">
        <h2>
          Create a professional story in minutes. Use our cover letter maker.
        </h2>
        <p>
          Tired of struggling with free cover letters? Our free cover letter
          maker transforms hours of work into minutes. Craft compelling pitches
          effortlessly with ready-to-use templates and persuasive phrases. Focus
          on showcasing your skills without the stress of formatting. And when
          you're done, easily download your resume and cover letter as professional
          resume format PDFs. Streamline your job application process today and
          stand out effortlessly.
        </p>

        <div className="home-cover-letter-carousel">
          <CoverLetterCrousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default Home;
