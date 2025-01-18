import React, { useState, useEffect } from 'react';
import '../../component/shareButton/ShareButtons.css';

const ShareButtons = ({ url, title }) => {
    const [expanded, setExpanded] = useState(false);

    // URLs for social media sharing
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}`;
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
    const redditShareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`;
    const emailShareUrl = `mailto:?subject=${title}&body=Check out this article: ${url}`;

    // Function to copy URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    };

    useEffect(() => {
        // Dynamically add the Flipboard script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.flipboard.com/web/buttons/js/flbuttons.min.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            // Clean up the script tag when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={`stickyShare ${expanded ? 'expanded' : ''}`}>
            <div className="toggle-button" onClick={() => setExpanded(!expanded)}>
                ☰ share
            </div>

            <div className="share-content">
                {/* Facebook Share */}
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-facebook"></i></h3>
                </a>

                {/* Twitter Share */}
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-twitter-x"></i></h3>
                </a>

                {/* LinkedIn Share */}
                <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-linkedin"></i></h3>
                </a>

                {/* WhatsApp Share */}
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-whatsapp"></i></h3>
                </a>

                {/* Reddit Share */}
                <a href={redditShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-reddit"></i></h3>
                </a>

                {/* Email Share */}
                <a href={emailShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-envelope"></i></h3>
                </a>

                {/* Flipboard Share */}
                <a data-flip-widget="shareflip"
          href="https://flipboard.com"><img src="https://cdn.flipboard.com/badges/flipboard_sbsw.png"
          /></a><script src="https://cdn.flipboard.com/web/buttons/js/flbuttons.min.js" type="text/javascript"></script>

                {/* Copy to Clipboard */}
                <button onClick={copyToClipboard}>
                    <h3><i style={{ color: 'green' }} className="bi bi-clipboard-fill"></i></h3>
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
