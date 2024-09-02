import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';
import '../css/templates.css';

const TemplatePage = (props) => {
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

    return (
        <div className='template-page-container'>
            {/* Hero Section */}
            <section className='hero-banner'>
                <h1 className='hero-title'>Create Your Perfect Resume</h1>
                <p className='hero-description'>
                    Choose a template and customize it to stand out from the crowd. Start your career journey with a professional resume.
                </p>
            </section>

            {/* Template Grid */}
            <section className="template-grid-container">
                <h2 className="template-grid-title">Select a Template</h2>
                <p className="template-grid-description">
                    Browse our collection of professional resume templates and find the one that suits your needs.
                </p>
                <hr className="template-grid-divider" />
                <div className="template-grid row m-3">
                    {images && images.map((image) => (
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
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/mainpage/${hoveredImage}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    Go To Your Resume
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className='footer-section'>
                <p>© 2024 Resume Era. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </footer>
        </div>
    );
};

export default TemplatePage;
