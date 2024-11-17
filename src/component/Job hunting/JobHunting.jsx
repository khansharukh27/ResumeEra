import { useState } from "react";
import GoogleAd from "../adFolder/GoogleAd";
import Crafting_Career_Path from '../../image/jobHuntingImage/Crafting_Career_Path.jpeg';
import Top_Careers_Introverts from '../../image/jobHuntingImage/Top_Careers_Introverts.jpeg';
import Spin_Job_Hopping from '../../image/jobHuntingImage/Spin_Job_Hopping.jpeg';
import './jobHuntingcss.css'
const JobHunting = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    { path: "/top-careers-for-introverts", title: "Top Careers For Introverts", src: Top_Careers_Introverts, alt: "Top Careers For Introverts" },
    { path: "/how-to-spin-job-hopping-as-an-asset", title: "How to Spin Job Hopping as an Asset to Your Career", src: Spin_Job_Hopping, alt: "How to Spin Job Hopping as an Asset to Your Career" },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ps-md-5 pe-md-5">
      <h1>The Genius Career Blog</h1>
      <header style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <div className="pe-md-3">
          <img
            src={Crafting_Career_Path}
            alt="Crafting Your Career Path"
            loading="lazy"
            style={{ borderRadius: "5px", maxWidth: "100%" }}
          />
        </div>
        <div>
          <h3 style={{ fontWeight: 900,color:'white' }}>
            Crafting Your Career Path: A Step-by-Step Guide
          </h3>
          <p>
            Job applications can be a challenging process, but with the right strategies and guidance, you can successfully navigate this journey. It's important to remember that you're not alone in this, and many people find the job application process daunting. By tailoring your resume and cover letter to each specific job, researching potential employers, and practicing your interviewing skills, you can increase your chances of landing your dream job. Don't be discouraged by rejections; use them as opportunities to learn and grow. With persistence and a positive mindset, you can overcome the challenges of the job application process and achieve your career goals.
          </p>
        </div>
      </header>

      <div>
        <input
          type="text"
          placeholder="Search your topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            margin: "1rem 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div className="cards-container">
        {filteredPosts.map((post, index) => (
          <div key={index} className="card">
            <img
              src={post.src}
              alt={post.alt}
              className="card-img"
            />
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <a href={post.path} className="btn btn-primary">
                Read
              </a>
            </div>

            {/* Insert an ad after every third card */}
            {(index + 1) % 3 === 0 && (
              <div className="ad-container">
                <GoogleAd />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobHunting;
