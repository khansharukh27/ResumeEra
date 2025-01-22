import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';
import '../css/crousel.css'
const Carousel = ({ images }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500, // Adjust speed for swipe transition
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true, // Disable autoplay for manual control
        cssEase: 'ease', // Smooth easing for swipe effect
        swipeToSlide: true, // Allows smooth swiping between slides
        draggable: true, // Allows dragging/sliding on desktop
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    const handleClick = (e, imageId) => {
        e.preventDefault();
        const path = `/mainpage/${imageId}`;
        navigate(path);
        dispatch(templatePage(imageId));
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images && images.map((image) => (
                    <div key={image.id} className="carousel-slide">
                        <div
                            className="carousel-image-wrapper"
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <LazyLoadImage
                                className="carousel-image"
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"

                            />
                            {hoveredImage === image.id && (
                                <button
                                    onClick={(e) => handleClick(e, image.id)}
                                    className="carousel-button"
                                    data-text="Touch"
                                    data-text-desktop="Go Your Resume"
                                >
                                    Go Resume
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
