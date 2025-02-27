import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../Redux/action";
import "../css/NormalResume.css";  // Import the CSS file

const NormalResume = (props) => {
    const { images } = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/mainpage/${hoveredImage}`;
            navigate(path);
            dispatch(templatePage(hoveredImage));
        }
    };
    console.log('images show in normal resume:-', images);

    return (
        <div className="normal-resume-container">
            <section className="template-grid-container">

                <div className="template-grid mt-5">
                    {images.length > 0 ? images.map((image, index) => (
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
                                className="template-image"
                                // style={{marginTop:'25px'}}
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
                                <p>{index + 1}/{images.length}</p>
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

export default NormalResume;
