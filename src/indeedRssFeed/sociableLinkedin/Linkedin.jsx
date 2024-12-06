import React, { useEffect } from "react";

const Linkedin = () => {
  useEffect(() => {
    // Check if the script is already added to avoid duplication
    const scriptId = "sociablekit-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://widgets.sociablekit.com/linkedin-page-posts/widget.js";
      script.id = scriptId;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div class='sk-ww-linkedin-page-post' data-embed-id='25493051'></div>
      <script src='https://widgets.sociablekit.com/linkedin-page-posts/widget.js' defer></script>
    </div>
  );
};

export default Linkedin;
