import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { certificateData } from "../Redux/action"; // Assuming you have an action for certificates
import '../css/Certificate.css';
// import KeySkills from "./KeySkill";
import SocialMedia from "./SocialMedia";
import SoftSkills from "./SoftSkills";

const Certificate = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [showCertificate, setShowCertificate] = useState(true);
  const [showSoftSkill, setShowSoftSkill] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [certificates, setCertificates] = useState(() => {
    const savedCertificates = localStorage.getItem("certificates");
    return savedCertificates
      ? JSON.parse(savedCertificates)
      : [
          {
            certificateName: '',
            organization: '',
            issueDate: '',
            description: ''
          }
        ];
  });

  const dispatch = useDispatch();

  // Save certificates to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("certificates", JSON.stringify(certificates));
  }, [certificates]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setCertificates((prev) => {
      const updatedCertificates = [...prev];
      updatedCertificates[index] = {
        ...updatedCertificates[index],
        [name]: value.toUpperCase() // Example: Convert text to uppercase
      };
      return updatedCertificates;
    });
  };

  const handleAddMore = () => {
    setCertificates((prevCertificates) => [
      ...prevCertificates,
      {
        certificateName: '',
        organization: '',
        issueDate: '',
        description: ''
      }
    ]);
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setShowSocialMedia(true);
    setShowCertificate(false);
    setShowSoftSkill(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    setShowSocialMedia(false);
    setShowSoftSkill(true);
    setShowCertificate(false); // Do not set `certificates` to false
    dispatch(certificateData(certificates));
    console.log('Certificates:', certificates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(certificateData(certificates));
    console.log('Certificates:', certificates);
  };

  const handleDelete = (index) => {
    setCertificates((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showCertificate && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Certificates</h1>
            <p>
              Adding certificates to your resume showcases additional skills and achievements, 
              making you stand out to potential employers. Provide the details of your certifications below.
            </p>
          </div>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Certificate {index + 1}</h1>
              <hr />
              <div className="d-sm-flex one">
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Certificate Name"
                  name="certificateName"
                  value={certificate? certificate.certificateName : ""}
                />
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Organization"
                  name="organization"
                  value={certificate? certificate.organization : ""}
                />
              </div>
              <div className="d-sm-flex one">
                <input
                  type="text"
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Issue Date"
                  name="issueDate"
                  value={certificate? certificate.issueDate : ""}
                />
              </div>
              <div className="second">
                <textarea
                  type="text"
                  className="textarea mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Description (Optional)"
                  name="description"
                  cols="200"
                  rows="5"
                  value={certificate? certificate.description : ""}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center m-2">
                <button className="button1" type="button" onClick={() => handleDelete(index)}>
                  <span className="text">DELETE</span>
                </button>
              </div>
              <hr className="m-2" />
            </div>
          ))}
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div className="d-flex justify-content-around">
            <button onClick={handleClickBack} className="button1">
              <span className="text">BACK</span>
            </button>
            <button onClick={handleClickNext} type="submit" className="button1">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showSoftSkill && <SoftSkills />}
      {showSocialMedia && <SocialMedia />}
    </form>
  );
};

export default Certificate;
