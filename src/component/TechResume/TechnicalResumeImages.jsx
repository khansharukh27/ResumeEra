import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";
import "./TechnicalResumeImages.css"; // Import the CSS file

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
    
    console.log('images show in technical resume:', techImages);

    return (
        <div>
            <section className="template-grid-container">
                <h2 className="template-grid-title">Technical Free Resume</h2>
                <p className="template-grid-description">
                    Browse our collection of professional resume templates and find the one that suits your needs.
                </p>
                <hr className="template-grid-divider" />
                <div className="template-grid-images">
                    {techImages.length > 0 ? techImages.map((image, index) => (
                        <div
                            className="image-card"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            key={image.id}
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="image-card-img"
                            />
                            {/* Show the link only when image is hovered */}
                            {hoveredImage === image.id && (
                                <a
                                    href={`/mainpage/${image.id}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    Go To Resume
                                </a>
                            )}
                            <div className="image-card-footer">
                                <p>{image.alt}</p>
                                <p>{index + 1}/{techImages.length}</p>
                            </div>
                        </div>
                    )) : (
                        <p>No templates available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TechnicalResumeImages;
