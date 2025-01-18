import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";

const TechImageShow = (props) => {
    const { techImages } = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    const [visibleImages, setVisibleImages] = useState(3); // Initially show 3 images
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

    const handleLoadMore = () => {
        // Increase the number of visible images by 3
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
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
                <div className="template-grid row m-3">
                    {techImages && techImages ? (
                        techImages.slice(0, visibleImages).map((image) => (
                            <div
                                data-aos="flip-left"
                                data-aos-duration="1000"
                                key={image.id}
                                className="template-card col-12 col-md-6 col-lg-4"
                                onMouseEnter={() => setHoveredImage(image.id)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <img
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
                        ))
                    ) : (
                        <p>No templates available.</p>
                    )}
                </div>

                {/* Load More Button */}
                {techImages.length > visibleImages && (
                    <div className="text-center">
                        <button onClick={handleLoadMore} className="load-more-btn">
                            Load More
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default TechImageShow;
