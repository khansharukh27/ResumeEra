import { useAuth0 } from "@auth0/auth0-react";
import logo from "../image/logo.png";
import step1 from "../image/step1.png";
import step2 from "../image/step2.png";
import step3 from "../image/step3.png";
import changeCV_image from "../image/changeCV_image.png";
import CoverLetterCrousel from "./CoverLetterCrousel";
import "../css/home.css";
import { Link } from "react-router-dom";
import best_logo from "../image/best_logo.webp";
import { Helmet } from "react-helmet";
import SEO from "./SEO";
import { useEffect } from "react";

const Home = (prop) => {
  const { images } = prop;
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    // Dynamically add the Home CSS when this component is loaded
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/home.css"; // Link to Home's specific CSS file
    document.head.appendChild(link);

    // Preload additional images for faster loading
    const preloadImages = [
      step1,
      step2,
      step3,
      changeCV_image,
      best_logo,
    ].forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      document.head.removeChild(link); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        {/* Core SEO Tags */}
        <title>
          Create Your Professional Resume Online | Free Resume Format PDF | ResumeEra
        </title>
        <meta
          name="description"
          content="Create a professional resume online for free with ResumeEra. Choose from beautiful, free resume templates, customize easily, and download as a polished PDF format."
        />
        <meta
          name="keywords"
          content="ResumeEra, free resume format PDF, resume builder, create resume PDF, download resume PDF, professional resume template, resume maker online, free resume creator, resume formatting, job application resume, CV builder, curriculum vitae PDF, teen resume template, high school resume"
        />
        <link rel="canonical" href="https://resumeera.xyz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="ResumeEra Team" />

        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Free Resume Format PDF | Professional Resume Builder | ResumeEra"
        />
        <meta
          property="og:description"
          content="Build a professional resume for free with ResumeEra. Access stunning resume templates, customize easily, and download your resume as a PDF format."
        />
        <meta property="og:url" content="https://resumeera.xyz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        />
        <meta property="og:image:alt" content="ResumeEra Resume Builder Preview" />
        <meta property="og:site_name" content="ResumeEra" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Resume Format PDF | Professional Resume Builder | ResumeEra"
        />
        <meta
          name="twitter:description"
          content="Build a professional resume for free with ResumeEra. Access stunning resume templates, customize easily, and download your resume as a PDF format."
        />
        <meta
          name="twitter:image"
          content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
        />
        <meta
          name="twitter:image:alt"
          content="ResumeEra Resume Builder Preview"
        />
        <meta name="twitter:site" content="@ResumeEra" />

        {/* Structured Data for SEO (Website Schema) */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ResumeEra",
  "url": "https://resumeera.xyz",
  "description": "Create and download professional resumes for free with ResumeEra. Access beautiful templates and build your PDF resume easily.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://resumeera.xyz/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
          `}
        </script>

        {/* Preload and Performance Optimization */}
        <link rel="preload" href="../image/step1.png" as="image" />
        <link rel="preload" href="../image/step2.png" as="image" />
        <link rel="preload" href="../image/step3.png" as="image" />
        <link rel="preload" href="../image/changeCV_image.png" as="image" />
        <link rel="preload" href="../image/best_logo.webp" as="image" />
        <link rel="preload" href="../css/home.css" as="style" />
        <link rel="dns-prefetch" href="//resumeera.xyz" />
      </Helmet>

      <div className="home-div">
        <div className="home-logo">
          {/* <img src={best_logo} alt="ResumeEra Logo" loading="lazy" /> */}
        </div>
      </div>

      <div className="home-welcome" style={{ padding: "2rem", background: "linear-gradient(135deg, #f5f7fa, #e0e7ff)" }}>
        <h1 className="gradient-text">
          <span>WELCOME TO RESUMEERA! </span>
          <span>CREATE AND DOWNLOAD </span>
          <span>FREE RESUME FORMATS.</span>
        </h1>
        <p className="intro-text" style={{ color: "#333", fontSize: "1.1rem", marginTop: "1rem" }}>
          ResumeEra is a stunning, user-friendly platform that lets you create, customize, and download your free resume format PDF with ease.
        </p>
        <span className="highlighted-text" style={{ color: "#2d6adf", fontWeight: "bold", fontSize: "1.2rem" }}>
          Choose from our beautiful, free resume templates to make your resume shine.
        </span>
        <p style={{ color: "#666", fontSize: "1rem", marginTop: "0.5rem" }}>
          Whether you’re showcasing work experience, education, skills, or personal info, ResumeEra makes it simple to craft a professional-looking resume and download it as a polished PDF format. Get started today and elevate your career journey!
        </p>
        <Link to="/template" className="cta-button" style={{ display: "inline-block", marginTop: "1.5rem", padding: "12px 24px", background: "#2d6adf", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", transition: "background 0.3s" }}>
          Create Your Free Resume Now
        </Link>
      </div>

      <div className="home-how-to" style={{ padding: "4rem 2rem", background: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", color: "#2d6adf", fontSize: "2rem", marginBottom: "2rem" }}>How to Create a Stunning Free Resume Format PDF</h2>
        <div className="home-steps" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="home-step" style={{ flex: "1 1 300px", maxWidth: "300px", textAlign: "center", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <img src={step1} alt="Pick a CV template" loading="lazy" style={{ width: "100%", maxWidth: "150px", marginBottom: "1rem" }} />
            <h4 style={{ color: "#2d6adf", fontSize: "1.2rem" }}>Pick a Stunning CV Template</h4>
            <p style={{ color: "#666", fontSize: "1rem" }}>Choose a sleek, beautiful design and layout to get started. Select the template that matches your style and industry needs from ResumeEra.xyz.</p>
          </div>
          <div className="home-step" style={{ flex: "1 1 300px", maxWidth: "300px", textAlign: "center", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <img src={step2} alt="Fill in the blanks" loading="lazy" style={{ width: "100%", maxWidth: "150px", marginBottom: "1rem" }} />
            <h4 style={{ color: "#2d6adf", fontSize: "1.2rem" }}>Fill in the Blanks</h4>
            <p style={{ color: "#666", fontSize: "1rem" }}>Type in a few words. Let the ResumeEra wizard fill the rest, preparing your resume for download in PDF format, quickly and beautifully.</p>
          </div>
          <div className="home-step" style={{ flex: "1 1 300px", maxWidth: "300px", textAlign: "center", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <img src={step3} alt="Customize your document" loading="lazy" style={{ width: "100%", maxWidth: "150px", marginBottom: "1rem" }} />
            <h4 style={{ color: "#2d6adf", fontSize: "1.2rem" }}>Customize Your Document</h4>
            <p style={{ color: "#666", fontSize: "1rem" }}>Make it truly yours in a few clicks. Add your unique touch, then easily download your resume as a professional PDF format from ResumeEra.xyz.</p>
          </div>
        </div>
      </div>

      <hr className="home-divider" style={{ border: "1px solid #e0e7ff", margin: "2rem 0" }} />

      <div
  className="home-change-cv"
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "4rem 1rem", // Reduced padding for smaller screens
    background: "#f5f7fa",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px", // Added to prevent overflow on large screens
    margin: "0 auto", // Centered on the page
  }}
>
  <div
    className="home-change-cv-image"
    style={{
      flex: "1 1 300px",
      minWidth: "250px", // Reduced minWidth for smaller screens
      maxWidth: "100%", // Ensures image doesn’t overflow on small screens
    }}
  >
    <img
      src={changeCV_image}
      alt="Change Your CV"
      loading="lazy"
      style={{
        width: "100%", // Full width on small screens
        maxWidth: "400px", // Limits image size on larger screens
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        objectFit: "cover", // Ensures image scales properly
      }}
    />
  </div>
  <div
    className="home-change-cv-info"
    style={{
      flex: "1 1 300px",
      minWidth: "250px", // Reduced minWidth for smaller screens
      maxWidth: "100%", // Ensures text doesn’t overflow
      padding: "0 1rem", // Added padding for better spacing
    }}
  >
    <h4
      style={{
        color: "#2d6adf",
        fontSize: "1.5rem",
        marginBottom: "1rem",
        textAlign: "center", // Centered for better mobile view
      }}
    >
      Change Your CV, Change Your Life!
    </h4>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        color: "#333",
        fontSize: "1rem",
        lineHeight: "1.6", // Improved readability on small screens
      }}
    >
      <li style={{ marginBottom: "1rem" }}>
        ResumeEra builder isn’t just an app—it’s your personal career expert. If your CV feels outdated, transform it with our stunning, free resume templates and download your polished PDF format.
      </li>
      <li style={{ marginBottom: "1rem" }}>
        Click on ready-to-use expert suggestions to build your CV in minutes, then download it as a professional PDF format from ResumeEra.xyz.
      </li>
      <li style={{ marginBottom: "1rem" }}>
        Impress recruiters with sleek, downloadable PDF designs that showcase your true potential.
      </li>
      <li style={{ marginBottom: "1rem" }}>
        Let employers see your best self—the top candidate for the job—with a beautiful resume in PDF format crafted on ResumeEra.xyz.
      </li>
    </ul>
    <Link
      to="/template"
      className="cta-button"
      style={{
        display: "block", // Changed to block for better mobile centering
        padding: "12px 24px", // Increased padding for touch targets
        background: "#2d6adf",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
        textAlign: "center", // Centered for mobile
        transition: "background 0.3s",
        margin: "1rem auto 0", // Centered and spaced from text
        maxWidth: "200px", // Limits button width on small screens
      }}
    >
      Create Your Free Resume Now
    </Link>
  </div>
</div>
      <hr className="home-divider" style={{ border: "1px solid #e0e7ff", margin: "2rem 0" }} />

      <div className="home-resume-builder" style={{ padding: "4rem 2rem", background: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ textAlign: "center", color: "#2d6adf", fontSize: "1.5rem", marginBottom: "2rem" }}>Easy Online Free Resume Format PDF Downloader</h4>
        <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Create an awesome free resume in PDF format in minutes, right from your web browser, with ResumeEra.xyz.
        </p>
        <div className="home-resume-features" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="home-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h5 style={{ color: "#2d6adf", fontSize: "1.2rem", fontWeight: "900" }}>
              <i className="bi bi-buildings"></i> Your Data is Safe
            </h5>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              At ResumeEra, your privacy is our priority. We collect only what’s needed for your resume, and you can download it as a secure PDF format. Learn more at our <a href="/template" style={{ color: "#2d6adf", textDecoration: "none" }}>Privacy Policy</a>.
            </p>
          </div>
          <div className="home-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h5 style={{ color: "#2d6adf", fontSize: "1.2rem", fontWeight: "900" }}>
              <i className="bi bi-newspaper"></i> Approved Templates
            </h5>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Professionally-designed free resume templates are ready for you. Edit and download in 5 minutes as a stunning PDF format from ResumeEra.xyz.
            </p>
          </div>
          <div className="home-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h5 style={{ color: "#2d6adf", fontSize: "1.2rem", fontWeight: "900" }}>
              <i className="bi bi-option me-3 rotating-icon"></i> PDF Resume Options
            </h5>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Save your perfect free resume in PDF with one click, directly from ResumeEra.xyz.
            </p>
          </div>
          <div className="home-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h5 style={{ color: "#2d6adf", fontSize: "1.2rem", fontWeight: "900" }}>
              <i className="bi bi-card-text me-3 rotating-icon"></i> Cover Letters
            </h5>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Our cover letter builder works seamlessly with free resume templates, letting you download both as professional PDFs from ResumeEra.xyz.
            </p>
          </div>
        </div>
      </div>

      <div className="home-professional-story" style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #f5f7fa, #e0e7ff)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "#2d6adf", fontSize: "1.8rem", fontWeight: "900", marginBottom: "1.5rem" }}>
          Use the Best Free Resume Maker as Your Guide
        </h3>
        <p style={{ color: "#333", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Landing your dream job can feel tough, but ResumeEra is here to help. Our stunning, free online resume maker, crafted by experts and trusted by millions, gives you a real edge. Create and download your professional resume format PDF to stand out from the crowd.
        </p>
        <div className="home-story-feature-main" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="home-story-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h3 style={{ color: "#2d6adf", fontSize: "1.3rem", marginBottom: "1rem" }}>
              <i className="bi bi-trophy-fill"></i> Make a Resume That Wins Interviews
            </h3>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Use our free resume maker with advanced tools to tell a professional story that impresses recruiters and hiring managers. Download your PDF format from ResumeEra.xyz.
              <Link to="/Interview_Question_Post" className="button" style={{ display: "block", marginTop: "1rem", padding: "10px 20px", background: "#2d6adf", color: "white", borderRadius: "8px", textDecoration: "none", fontSize: "1rem", fontWeight: "400", textAlign: "center", transition: "background 0.3s" }}>
                Interview Guide
              </Link>
            </p>
          </div>
          <div className="home-story-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h3 style={{ color: "#2d6adf", fontSize: "1.3rem", marginBottom: "1rem" }}>
              <i className="bi bi-pencil-square me-5"></i> Resume Writing Made Easy
            </h3>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Resume writing is effortless with ResumeEra. Use pre-generated text, stunning designs, and more—fill in your details and download your PDF format.
              <Link to="/template" className="button" style={{ display: "block", marginTop: "1rem", padding: "10px 20px", background: "#2d6adf", color: "white", borderRadius: "8px", textDecoration: "none", fontSize: "1rem", fontWeight: "400", textAlign: "center", transition: "background 0.3s" }}>
                Make Resume
              </Link>
            </p>
          </div>
          <div className="home-story-feature" style={{ flex: "1 1 300px", maxWidth: "300px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s" }}>
            <h3 style={{ color: "#2d6adf", fontSize: "1.3rem", marginBottom: "1rem" }}>
              <i className="bi bi-gear-fill"></i> A Recruiter-Tested Resume Maker
            </h3>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Our free resume builder, tested by recruiters and IT experts, ensures your resume is competitive. Build and download your PDF format from ResumeEra.xyz.
              <Link to="/template" className="button" style={{ display: "block", marginTop: "1rem", padding: "10px 20px", background: "#2d6adf", color: "white", borderRadius: "8px", textDecoration: "none", fontSize: "1rem", fontWeight: "400", textAlign: "center", transition: "background 0.3s" }}>
                Make Resume
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="home-cover-letter" style={{ padding: "4rem 2rem", background: "#f5f7fa", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#2d6adf", fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>
          Craft a Professional Story in Minutes with Our Cover Letter Maker
        </h2>
        <p style={{ color: "#333", fontSize: "1.1rem", marginBottom: "2rem", textAlign: "center" }}>
          Struggling with cover letters? Our free cover letter maker turns hours of work into minutes. Use stunning templates and persuasive phrases to highlight your skills, then download both your resume and cover letter as professional PDFs from ResumeEra.xyz. Simplify your job applications and stand out effortlessly!
        </p>
        <div className="home-cover-letter-carousel">
          <CoverLetterCrousel />
        </div>
        <Link to="/template" className="cta-button" style={{ display: "block", margin: "2rem auto 0", padding: "12px 24px", background: "#2d6adf", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", textAlign: "center", transition: "background 0.3s" }}>
          Create Your Resume & Cover Letter Now
        </Link>
      </div>
    </div>
  );
};

export default Home;