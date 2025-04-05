import '../../css/shadiCard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { templatePage } from '../../Redux/action';
import { useDispatch, } from 'react-redux';
import { useState } from 'react';

export default function MuslimShadiCard(props) {
    const { muslim_biodata } = props
    const [hoveredImageId, setHoveredImageId] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const handleMouseEnter = (id) => {
        setHoveredImageId(id);
    };
    const handleMouseLeave = () => {
        setHoveredImageId(null);
    };
    const handleButtonClick = (e) => {
        if (hoveredImageId !== null) {
            const path = `/muslim-biodata/${hoveredImageId}`;
            navigate(path);
            dispatch(templatePage(hoveredImageId));
        }
    };
    console.log("shadi_Card in shadiCard:-", hoveredImageId)
    console.log("data of muslim shadi card:-", muslim_biodata)
    return (
        <div className='shadiCardMain'>
            {muslim_biodata.map((image) => (
                <div
                    key={image.id}
                    className='shadiCardKey'
                    style={{ margin: '20px', position: 'relative' }}
                    onMouseEnter={() => handleMouseEnter(image.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={image.src} alt={image.alt} style={{ width: '300px', height: '400px', backgroundColor: 'white' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <p>{image.number}</p>
                        <p>{image.alt}</p>
                    </div>

                    {hoveredImageId === image.id && (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                            <button
                                onClick={() => handleButtonClick(image.id)}
                                style={{ position: 'absolute', top: '40%', left: '25%', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}
                            >
                                Take It
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

