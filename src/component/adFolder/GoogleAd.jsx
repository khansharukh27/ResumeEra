import React, { useEffect } from 'react';
import './adsbygoogle.css';

const GoogleAd = () => {
    const loadAds = () => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdsbyGoogle push error:", e);
        }
    };

    useEffect(() => {
        // Check if the script already exists
        const existingScript = document.querySelector(
            'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153"]'
        );

        if (!existingScript) {
            // Create the AdSense script element
            const script = document.createElement("script");
            script.src =
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153";
            script.async = true;
            script.crossOrigin = "anonymous";
            script.onload = loadAds;
            document.body.appendChild(script);
        } else {
            loadAds();
        }
    }, []);

    return (
        <div className="ad-container">
            {/* Google AdSense ad unit */}
            <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", height: "auto", maxWidth: "728px", margin: "0 auto" }}
                data-ad-client="ca-pub-7258253904826153"
                data-ad-slot="2908264820"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default GoogleAd;
