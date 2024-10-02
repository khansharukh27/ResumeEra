import React, { useState } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle thumbnail click
  const handleThumbnailClick = () => {
    setIsPlaying(true);  // Change state to show video
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
      {!isPlaying ? (
        // Show custom thumbnail if video is not playing
        <img
          src="your-thumbnail-image-url.jpg"
          alt="Video Thumbnail"
          style={{ width: '100%', cursor: 'pointer' }}
          onClick={handleThumbnailClick} // OnClick event to handle thumbnail click
        />
      ) : (
        // Show YouTube video embed if video is playing
        <iframe width="100%" height="488" 
        src="https://www.youtube.com/embed/YvEWVC6EjTw" 
        title="Create a Resume in Microsoft Word with Resume Assistant" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
          
        </iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
