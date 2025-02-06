// ImageCard.js
import React from "react";

const ImageCard = ({ image, hoveredImage, setHoveredImage, handleClick }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      className=""
      onMouseEnter={() => setHoveredImage(image.id)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <img
      style={{height:'auto',width:'100%'}}
        className="template-image"
        src={image.src}
        alt={image.alt}
        loading="lazy"
      />
      {hoveredImage === image.id && (
        <a
          href={`/techmain/${hoveredImage}`}
          onClick={handleClick}
          className="template-link"
        >
          Go To Your Resume
        </a>
      )}
    </div>
  );
};

export default ImageCard;
