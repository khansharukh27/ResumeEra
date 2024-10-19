import { useEffect } from 'react';

const NewAds = () => {

    useEffect(() => {
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
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
}

export default NewAds;
