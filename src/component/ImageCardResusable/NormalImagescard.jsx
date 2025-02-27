import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";
import ImageCard from "./ImageCard";  // Import the ImageCard component

const NormalImagescard = (props) => {
  const { images } = props;
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
        <div className="template-grid row m-3 mt-5">
          {images.length > 0 ? (
            images.map((image) => (
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

export default NormalImagescard;
