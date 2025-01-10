import React from 'react';

const SitemapNotifier = () => {
    const notifyIndexNow = async () => {
        const apiKey = '7eb9aa19f01947c3ab5f3d4151be79c8';  // Apni actual API key ko yahan rakhain
        // const corsProxy = 'https://cors-anywhere.herokuapp.com/';  // CORS proxy server
        const endpoint = 'https://your-proxy-server.com/indexnow';  // Proxy server endpoint
        const sitemapUrl = 'https://resumeera.xyz/sitemap.xml';  // Aapka sitemap URL

        const body = {
            host: 'resumeera.xyz',  // Aapka website ka domain
            key: apiKey,  // Aapki API key
            keyLocation: 'https://resumeera.xyz/7eb9aa19f01947c3ab5f3d4151be79c8.txt',  // Aapka API key file URL
            urlList: [sitemapUrl],  // URLs jo aap notify karna chahte hain
        };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('IndexNow Success:', data);
            } else {
                console.error('IndexNow Failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <button onClick={notifyIndexNow}>Notify Sitemap to IndexNow</button>
        </div>
    );
};

export default SitemapNotifier;
