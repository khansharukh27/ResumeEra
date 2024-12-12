import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CallToAction = () => {
  const [randomImages, setRandomImages] = useState([]);
const images = useSelector((state)=>state.reducer.images)
const techImages = useSelector((state)=>state.reducer.techImages)
console.log('techImages in callto action:-',techImages)

  useEffect(() => {
    const getRandomImages = () => {
      const allImages = [...images, ...techImages]; // Combine both arrays
      const selectedImages = [];

      if (allImages.length === 0) {
        console.error("No images available to select from.");
        return;
      }

      while (selectedImages.length < 3 && selectedImages.length < allImages.length) {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        const randomImage = allImages[randomIndex];

        // Avoid duplicates in the selected images
        if (!selectedImages.includes(randomImage)) {
          selectedImages.push(randomImage);
        }
      }

      setRandomImages(selectedImages);
    };

    getRandomImages();
  }, [images, techImages]);

  return (
    <div
      style={{
        margin: "30px 0",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#333" }}>
        Take the First Step Towards Success!
      </h2>
      <p style={{ fontSize: "16px", marginBottom: "20px", color: "#555" }}>
        Are you ready to boost your productivity and achieve your academic goals? Start implementing these strategies today and see the difference for yourself!
      </p>

      {/* Display Random Images */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {randomImages.length > 0 ? (
          randomImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          ))
        ) : (
          <p>No images available to display.</p>
        )}
      </div>

      {/* Call-to-Action Button */}
      <a
        href="/free-resume-builder"
        style={{
          display: "inline-block",
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Build Your Free Resume Now
      </a>
    </div>
  );
};

export default CallToAction;
