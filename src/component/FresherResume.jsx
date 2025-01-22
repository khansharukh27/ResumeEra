import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../Redux/action";

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
    console.log('images show in normal resume:-',fresherResumeImage)

    return (
        <div>
            <section className="template-grid-container">
                
                <h2 style={{textAlign:'center'}}>
                    Fresher Resume Template's
                </h2>
                <hr className="template-grid-divider" />
                <div className="template-grid row m-3 ">
                    {fresherResumeImage ? fresherResumeImage.map((image) => (
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
                                    href={`/freshertemplate/${hoveredImage}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    Go To  Resume
                                </a>
                            )}
                            <div style={{textAlign:'center',color:'black'}}>{image.alt}</div>
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
