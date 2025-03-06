import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../Redux/action";
import '../css/FresherResume.css'; // Import the CSS file

const FresherResume = (props) => {
    const { fresherResumeImage } = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/freshertemplate/${hoveredImage}`;
            navigate(path);
            dispatch(templatePage(hoveredImage));
        }
    };

    return (
        <div>
            <section className="template-grid-container">
                <h2 className="section-title">
                    Fresher Resume Template's
                </h2>
                <hr className="template-grid-divider" />
                <div className="template-grid">
                    {fresherResumeImage.length > 0 ? fresherResumeImage.map((image, index) => (
                        <div
                            className="template-card"
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
                                className="template-image"
                                style={{backgroundColor:'white'}}
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/mainpage/${image.id}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    Go To Resume
                                </a>
                            )}
                            <div className="template-footer">
                                <p>{image.alt}</p>
                                <p>{index + 1}/{fresherResumeImage.length}</p>
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

export default FresherResume;
