import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to load the Google Analytics script
    const loadAnalyticsScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-C5J89ZT9LS";
      script.async = true;
      script.onload = () => {
        // Initialize Google Analytics after the script is loaded
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-C5J89ZT9LS', {
          page_path: location.pathname,
        });
      };
      document.head.appendChild(script);
    };

    // Only load the script once
    if (!window.gtag) {
      loadAnalyticsScript();
    } else {
      // If gtag is already available, just track the page view
      window.gtag("config", "G-C5J89ZT9LS", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <Helmet>
      {/* Helmet is used to manage metadata, like script inclusion */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5J89ZT9LS"></script>
    </Helmet>
  );
};

export default GoogleAnalytics;
