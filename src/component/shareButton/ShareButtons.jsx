// src/ShareButtons.js
import React, { useState, useEffect } from 'react';
import './ShareButtons.css';
const ShareButtons = ({ url, title, image }) => {
    const isServer = typeof window === 'undefined';
    const [expanded, setExpanded] = useState(false);

    // Fallbacks
    const safeUrl = url || (isServer ? '' : window.location.href);
    const safeTitle = title || (isServer ? 'Check out this post' : document.title || 'Check out this post');
    const safeImage = image || '';

    // Encoded values
    const encodedUrl = encodeURIComponent(safeUrl);
    const encodedTitle = encodeURIComponent(safeTitle);
    const encodedImage = safeImage ? encodeURIComponent(safeImage) : '';

    // Share URLs
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}${encodedImage ? `&image=${encodedImage}` : ''}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
    const redditShareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
    const emailShareUrl = `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`;

    const copyToClipboard = () => {
        if (!isServer) {
            navigator.clipboard.writeText(safeUrl).then(() => alert('Link copied to clipboard!'));
        }
    };

    useEffect(() => {
        if (!isServer) {
            const script = document.createElement('script');
            script.src = 'https://cdn.flipboard.com/web/buttons/js/flbuttons.min.js';
            script.type = 'text/javascript';
            document.body.appendChild(script);
            return () => document.body.removeChild(script);
        }
    }, []);

    return (
        <div className={`stickyShare ${expanded ? 'expanded' : ''}`}>
            <div className="toggle-button" onClick={() => !isServer && setExpanded(!expanded)}>
                ☰ Share
            </div>
            <div className="share-content">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-facebook"></i></h3>
                </a>
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-twitter-x"></i></h3>
                </a>
                <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-linkedin"></i></h3>
                </a>
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-whatsapp"></i></h3>
                </a>
                <a href={redditShareUrl} target="_blank" rel="noopener noreferrer">
                    <h3><i style={{ color: 'green' }} className="bi bi-reddit"></i></h3>
                </a>
                <a href={emailShareUrl}>
                    <h3><i style={{ color: 'green' }} className="bi bi-envelope"></i></h3>
                </a>
                <a
                    data-flip-widget="shareflip"
                    href="https://flipboard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://cdn.flipboard.com/badges/flipboard_sbsw.png" alt="Flipboard" />
                </a>
                <button onClick={copyToClipboard}>
                    <h3><i style={{ color: 'green' }} className="bi bi-clipboard-fill"></i></h3>
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;