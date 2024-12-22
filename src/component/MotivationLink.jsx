import { useState } from "react";
import GoogleAd from "./adFolder/GoogleAd";
import type_lazyness from "../image/motivational_image/type_lazyness.webp";
import pic_1 from "../image/motivational_image/pic_1.png";
import Career_qoutes from "../image/motivational_image/Career_qoutes.jpg";
import creative_image from "../image/motivational_image/creative_image.jpg";
import Be_A_Topper from "../image/motivational_image/Be_A_Topper.jpeg";
import brutal_Carrere from "../image/motivational_image/brutal_image.jpg";
const MotivationLink = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    {
      path: "/types-of-laziness",
      title: "आलस के 7 प्रकार: कारण और समाधान | ResumeEra",
      src: type_lazyness,
      alt: "आलस के 7 प्रकार and कारण और समाधान ",
    },
    {
      path: "/pictures8",
      title: "8 Pictures That Change the Way You Think - ResumeEra",
      src: pic_1,
      alt: "8 Pictures That Change the Way You Think - ResumeEra ",
    },
    {
      path: "/35-career-quotes-to-motivate",
      title: "35 Career Quotes To Motivate You While Making a free Resume",
      src: Career_qoutes,
      alt: "35 Career Quotes To Motivate You While Making a Resume ",
    },
    {
      path: "/motivate-yourself-to-study",
      title:
        "8 Creative Ways to Motivate Yourself When You Dont Feel Like Studying",
      src: creative_image,
      alt: "8 Creative Ways to Motivate Yourself",
    },
    {
      path: "/remove-bad-habits",
      title:
        "Remove 10 Habits to Become a Topper in Your Organization | ResumeEra",
      src: Be_A_Topper,
      alt: "Remove 10 Habits to Become a Topper in Your Organization",
    },
    {
      path: "/13-brutal-career-truths",
      title: "13 Brutal Career Truths: A Comprehensive Guide | ResumeEra",
      src: brutal_Carrere,
      alt: "Brutal Career Truths",
    },
  ];
  const filteredPosts = posts.filter((post) =>
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
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
          gap: "auto",
        }}
      >
        {filteredPosts.map((post, index) => (
          <>
            <div key={index} style={{ width: "100%", height: "300px",marginBottom:'60px',borderRadius:'15px' }}>
              <div className="card-body" style={{borderRadius:'15px'}}>
                <a href={post.path} className="" 
                style={{display:'flex',flexDirection:'column',marginBottom:'15px',borderRadius:'15px',padding:'5px'}}>
                  <img
                    style={{
                      width: "100%",
                      height: "250px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      marginTop:'-0px',
                      objectFit:'fill'

                    }}
                    src={post.src}
                    className="card-img-top"
                    alt={post.alt}
                  />
                  <p
                    className="card-title"
                    style={{ marginTop: "10px", color: "black",fontSize:'small' }}
                  >
                    {post.title}
                  </p>
                </a>
              </div>
            </div>

            {/* Insert an ad after every 4 cards */}
            {(index + 1) % 3 === 0 && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <div
                  className="ad-container"
                  style={{ width: "100%", height: "300px" }}
                >
                  <GoogleAd />
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default MotivationLink;
