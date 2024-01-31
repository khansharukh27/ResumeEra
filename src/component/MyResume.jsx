// Inside the component where you want to display saved images
import { useEffect, useState } from "react";

const MyResume = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    // Retrieve saved images from local storage
    const storedImages = JSON.parse(localStorage.getItem("savedResumes")) || [];
    setSavedImages(storedImages);
  }, []);

  const handleDelete = (index) => {
    // Implement delete functionality for the resume at the specified index
    // Remove the resume data from the savedResumes state and local storage
    const updatedResumes = [...savedImages];
    updatedResumes.splice(index, 1);
    setSavedImages(updatedResumes);
    localStorage.setItem("savedResumes", JSON.stringify(updatedResumes));
  };
  return (
    <div>
      <h1>Your Saved Resumes</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {savedImages.map((image, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={image} className="card-img-top" alt={`Saved Resume ${index + 1}`} />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary me-2">Download</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
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
