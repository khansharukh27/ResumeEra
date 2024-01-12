import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const cards = [
    { id: '1', src: 'https://namratauniversal.com/img/namrata-universal/Brajesh-Kumar-Jaiswal(CEO&FOUNDER).jpg', cardTitle: 'Brajesh Kumar Jaiswal', cardText: 'CO-FOUNDER', alt: 'Brajesh-Kumar-Jaiswal(CEO&FOUNDER)' },
    { id: '2', src: 'https://namratauniversal.com/img/namrata-universal/Preeti(Co-Founder).jpg', cardTitle: 'Preeti', cardText: 'CEO & Founder', alt: '' },
    { id: '3', src: 'https://namratauniversal.com/img/namrata-universal/Saurabh-Mahawar(Co-Founder).jpg', cardTitle: 'Sourabh Mahawar', cardText: 'Co-Founder', alt: 'Saurabh-Mahawar(Co-Founder)' },
];

function MainTeam() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleEnter = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div data-aos = 'flip-left'data-aos-duration = '3000'>
            <div style={{ textAlign: 'center ' }} className="p-5">
                <h1 style={{ fontWeight: '900' }}>
                    Main Team of Namrata Universal</h1>
                <p style={{ fontSize: '22px', fontWeight: '300', textTransform: 'capitalize' }}>
                    Our main team comprises passionate individuals from various <br />
                    backgrounds. From creative designers to meticulous engineers and <br />
                    skilled marketers, we work together synergistically to deliver <br />
                    innovative solutions that exceed expectations.
                </p>
            </div>

            <div className="d-flex justify-content-around" style={{ height: '600px' }}>
                {cards && cards.map((card) => (
                    <div key={card.id} className="" style={{ width: '25rem', backgroundColor: 'grey', height: '350px' }}>
                        <img src={card.src} className="card-img-top" alt={card.alt} style={{ height: '350px' }} />
                        <div onMouseEnter={() => handleEnter(card.id)} onMouseLeave={handleLeave} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
                            {hoveredCard === card.id && (
                                <>
                                    <i className="bi bi-twitter"></i>
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-linkedin"></i>
                                    <i className="bi bi-instagram"></i>
                                </>
                            )}
                        </div>
                        <div className="card-body" style={{ backgroundColor: 'lightgray', textAlign: 'center' }}>
                            <h5 className="card-title">{card.cardTitle}</h5>
                            <p className="card-text">{card.cardText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainTeam;
