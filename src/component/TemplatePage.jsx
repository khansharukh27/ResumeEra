import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import MainPage from './MainPage';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';

const TemplatePage = (props) => {
    const { images} = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    // const [showMainPage, setShowMainPage] = useState(false);
    const dispatch = useDispatch()
    // const path = `/mainpage/${hoveredImage}`
    // console.log('path in template:=',path)
    
    const history = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        if (hoveredImage !== null) {
            const path = `/mainpage/${hoveredImage}`

            history(`${path}`);
            dispatch(templatePage(hoveredImage))
            // setShowMainPage(true);
        }
    };

    return (
        <div>
    <div>
        <h1>Template</h1>
        <p>Select a template to get started </p>
        <hr />
    </div>

    <div className="row m-3">
        {images &&
            images.map((image) => (
                <div
                    data-aos="flip-left"
                    data-aos-duration="2000s"
                    key={image.id}
                    className="col-12 col-md-6 col-lg-4 boximage m-3"
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setHoveredImage(image.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                >
                    <img
                        className="image border m-3"
                        src={image.src}
                        alt={image.alt}
                        style={{}}
                    />
                    {hoveredImage === image.id && (
                        <a
                            href={`/mainpage/${hoveredImage}`}
                            onClick={handleClick}
                            style={{
                                border: '1px solid grey',
                                borderRadius: '8px',
                                color: 'white',
                                padding: '5px',
                                textDecoration: 'none',
                                backgroundImage:
                                    'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
                                position: 'absolute',
                                top: '50%',
                                left: '20px',
                            }}
                        >
                            Go Your Resume
                        </a>
                    )}
                </div>
            ))}
    </div>
</div>

    );
};

export default TemplatePage;
