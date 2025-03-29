import React, { useState } from "react";
import { saveAs } from "file-saver";
import '../css/ImageConverter.css';
import GoogleAd from "./adFolder/GoogleAd";

const ImageConverter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [outputFormat, setOutputFormat] = useState("jpeg");
  const [quality, setQuality] = useState(100); // Compression quality percentage

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image
    }
  };

  // Convert and download the image
  const convertImage = () => {
    if (!selectedImage) {
      alert("Please upload an image first!");
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Convert the image to the selected format with quality settings
      canvas.toBlob(
        (blob) => {
          saveAs(blob, `converted-image.${outputFormat}`);
        },
        `image/${outputFormat}`,
        quality / 100 // Quality scale (0 to 1)
      );
    };

    img.src = imagePreview; // Use the uploaded image as source
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Image Format Converter & Compressor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ margin: "20px 0" }}
      />
      {imagePreview && (
        <div>
          <h3>Preview:</h3>
          <div>
            <GoogleAd/>
          </div>
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            style={{ width: "300px", margin: "10px 0", borderRadius: "10px" }}
          />
        </div>
      )}
      <div>
        <label>Select Output Format:</label>
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          style={{ margin: "10px" }}
        >
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WEBP</option>
          <option value="bmp">BMP</option>
          <option value="gif">GIF</option>
          <option value="tiff">TIFF</option>
        </select>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>Compression Quality: {quality}%</label>
        <input
          type="range"
          min="10"
          max="100"
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          style={{ width: "50%", margin: "10px 0" }}
        />
      </div>
      
      <button
        onClick={convertImage}
        style={{ padding: "10px 20px", marginTop: "20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Convert & Download
      </button>
      <div>
            <GoogleAd/>
          </div>
      <div>
            <GoogleAd/>
          </div>
    </div>
  );
};

export default ImageConverter;
