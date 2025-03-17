import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { coverletters } from '../Redux/action';

export default function CoverLetterMapping(prop) {
    // Corrected useState hook definition
    const [hoveredImage, setHoveredImage] = useState(null); // Destructure the array correctly
    
    const { CoverImage } = prop;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log('CoverImage', CoverImage[0]?.src); // Safely log the first image

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/cover_letter/${hoveredImage}`;
            navigate(path);
            dispatch(coverletters(hoveredImage)); // Dispatch the action
        }
    };

    return (
        <div>
            <div className="template-grid row m-3">
                {CoverImage && CoverImage.length > 0 ? (
                    CoverImage.map((image) => (
                        <div
                            data-aos="flip-left"
                            data-aos-duration="2000"
                            key={image.id}
                            className="template-card col-12 col-md-6 col-lg-4"
                            onMouseEnter={() => setHoveredImage(image.id)} // Set hovered image
                            onMouseLeave={() => setHoveredImage(null)} // Reset hovered image on mouse leave
                        >
                            <img
                                className="template-image"
                                src={image.src}
                                alt={image.alt}
                                style={{ height: '350px', width: '250px' }}
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/cover_letter/${hoveredImage}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    Edit and Download
                                </a>
                            )}
                        </div>
                    ))
                ) : (
                    <p style={{ color: 'red' }}>No templates available.</p>
                )}
            </div>
        </div>
    );
}
