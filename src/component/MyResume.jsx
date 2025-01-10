import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import '../css/myresume.css'
// import Footer from "./Footer";
const MyResume = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    // Retrieve saved images from local storage
    const storedImages = JSON.parse(localStorage.getItem("savedResumes")) || [];
    setSavedImages(storedImages);
  }, []);

  const handleDelete = (index) => {
     const updatedResumes = [...savedImages];
    updatedResumes.splice(index, 1);
    setSavedImages(updatedResumes);
    localStorage.setItem("savedResumes", JSON.stringify(updatedResumes));
  };

  const handleDownload = async (index) => {
    const element = document.getElementById(`resumeImage_${index}`);

    try {
      const canvas = await html2canvas(element);
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`Resume_${index + 1}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="myresume">
      <h1>Your Saved Resumes</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 " style={{}}>
        {savedImages.map((image, index) => (
          <div key={index} className="col">
            <div className="card">
              <img
                id={`resumeImage_${index}`}
                src={image}
                className="card-img-top"
                alt={`Saved Resume ${index + 1}`}
              />
              <div className="card-body ">
                <div className="d-lg-flex  justify-content-between">
                  <button className="btn btn-primary me-2" onClick={() => handleDownload(index)}>
                    Download
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResume;
