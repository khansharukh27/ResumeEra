import React from "react";
import best_logo from '../image/best_logo.webp'
const AuthorCard = () => {
  return (
    <div style={styles.card}>
      <img
        src={best_logo} // Replace with actual author image URL
        alt="ResumeEra logo"
        style={styles.image}
      />
      <div style={styles.info}>
        <h2 style={styles.name}>ResumeEra Team</h2>
        <p style={styles.designation}>Resume, CV and Cover Letter Writing Expert</p>
        <div style={styles.links}>
          <a
            href="https://www.linkedin.com/company/101703154/admin/dashboard/" // Replace with actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/shahrukhmirza88" // Replace with actual Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  info: {
    flex: 1,
  },
  name: {
    margin: "0",
    fontSize: "1.5em",
    color: "#333",
  },
  designation: {
    margin: "5px 0 15px",
    color: "#555",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#0073b1", // LinkedIn blue
    fontWeight: "bold",
    transition: "color 0.3s",
  },
};

export default AuthorCard;
