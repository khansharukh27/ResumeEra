import { useEffect } from 'react';
import './newAds.css';

const NewAds = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const adsbygoogle = window.adsbygoogle || [];
            if (adsbygoogle.loaded !== true) {  // Prevent multiple pushes
                adsbygoogle.push({});
                adsbygoogle.loaded = true;  // Mark as loaded to avoid duplicate calls
            }
        }
    }, []);

    return (
        <div>
            {/* Google AdSense script */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153"
                crossOrigin="anonymous"></script>

            {/* Ad Unit */}
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-7258253904826153"
                data-ad-slot="8203532534"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default NewAds;
