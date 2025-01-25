import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords,canonical,image }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | My Website` : "My Website"}</title>
      <meta name="description" content={description || "Default description"} />
      <meta name="keywords" content={keywords || "resume, career, jobs"} />
      <link rel="canonical" href={canonical}/>
      <meta property="og:title" content={title || "My Website"} />
      <meta property="og:description" content={description || "Default description"} />
      <meta property="og:url" content="https://resumeera.xyz/how-to-write-a-strong-resume-objective" />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content="How to Write a Strong Resume Objective - Resumeera" />
    <meta name="twitter:description" content="Learn how to write a compelling and professional resume objective that highlights your skills, experience, and career goals effectively on your resume." />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;