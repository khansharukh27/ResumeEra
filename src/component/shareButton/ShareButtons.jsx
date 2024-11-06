import React from 'react';
import '../../component/shareButton/ShareButtons.css'
const ShareButtons = ({ url, title }) => {
    // URLs for social media sharing
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
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

    return (
        <div ClassName='stickyShare'>
            <h3>Share</h3>

            {/* Facebook Share */}
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-facebook"></i></h3>
            </a>

            {/* Twitter Share */}
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-twitter-x"></i></h3>      </a>

            {/* LinkedIn Share */}
            <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-linkedin"></i></h3>      </a>

            {/* WhatsApp Share */}
            <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-whatsapp"></i></h3>
            </a>

            {/* Reddit Share */}
            <a href={redditShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-reddit"></i></h3>
            </a>

            {/* Email Share */}
            <a href={emailShareUrl} target="_blank" rel="noopener noreferrer">
                <h3><i style={{color:'green'}} Class="bi bi-envelope"></i></h3>
            </a>

            {/* Copy to Clipboard */}
            <a onClick={copyToClipboard}>
                <h3><i style={{color:'green'}} Class="bi bi-clipboard-fill"></i></h3></a>
        </div>
    );
};

export default ShareButtons;
