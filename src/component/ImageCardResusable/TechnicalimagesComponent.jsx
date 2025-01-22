import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";
import ImageCard from "./ImageCard";  // Import the ImageCard component

const TechnicalResumeImages = (props) => {
  const { techImages } = props;
  const [hoveredImage, setHoveredImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (hoveredImage !== null) {
      const path = `/techmain/${hoveredImage}`;
      navigate(path);
      dispatch(templatePage(hoveredImage));
    }
  };

  return (
    <div>
      <section className="template-grid-container">
        <h2 className="template-grid-title">Technical Free Resume</h2>
        <p className="template-grid-description">
          Browse our collection of professional resume templates and find the one that suits your needs.
        </p>
        <hr className="template-grid-divider" />
        <div className="template-grid row m-3">
          {techImages.length > 0 ? (
            techImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                hoveredImage={hoveredImage}
                setHoveredImage={setHoveredImage}
                handleClick={handleClick}
              />
            ))
          ) : (
            <p>No templates available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TechnicalResumeImages;
