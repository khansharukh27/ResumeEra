import { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import { useDispatch } from "react-redux";
import { educationData } from "../Redux/action";
import Language from "./Language";
import GoogleAd from "./adFolder/GoogleAd";

const Education = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [education, setEducation] = useState(() => {
    const savedEducation = localStorage.getItem("educationData");
    return savedEducation ? JSON.parse(savedEducation) : [{
      type: "",
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    }];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // window.scrollTo(0, 0);
    localStorage.setItem("educationData", JSON.stringify(education));
  }, [education]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducation(prev => {
      const updatedEducation = [...prev];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value.toUpperCase(),
      };
      return updatedEducation;
    });
  };

  const validateFields = () => {
    const emptyFields = education.some(edu => 
      !edu.type || !edu.university || !edu.degree || !edu.startYear || !edu.endYear
    );

    if (emptyFields) {
      alert(`Please fill in ${education.name}  fields`);
      return false; // Prevent proceeding if there are empty fields
    }
    return true; // Proceed if all fields are filled
  };

  const handleClickBack = () => {
    setShowWorkExperience(true);
    setShowEducation(false);
    setShowLanguage(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    if (validateFields()) {
      dispatch(educationData(education));
      setShowWorkExperience(false);
      setShowEducation(false);
      setShowLanguage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      dispatch(educationData(education));
    }
  };

  const handleAddMore = () => {
    setEducation(prev => [
      ...prev,
      { type: "", university: "", degree: "", startYear: "", endYear: "" },
    ]);
  };

  const handleDelete = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showEducation && (
        <div>
          <div className="professional-detail">
            <h1 className="multicolor-heading">Your Education Detail</h1>
            <p>
              Including education details in a resume is essential because it
              highlights your academic background and qualifications. This
              section helps employers understand the formal training or
              knowledge you've acquired in a specific field, which may be
              relevant to the job role you're applying for. It showcases your
              skills, expertise, and potential, making you stand out from other
              candidates. For recent graduates, education details are a key way
              to demonstrate their achievements, especially when professional
              experience is limited. Therefore, including education details in
              your resume strengthens your overall profile and enhances your
              credibility in the eyes of hiring managers.
            </p>
          </div>
          {education.map((edu, index) => (
            <div key={index}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Education {index + 1}
              </h1>
              <hr className="m-3" style={{width:'inherit'}}/>
              <div className="one" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <select
                  className="input"
                  style={{ color: "black" }}
                  onChange={(e) => handleChange(e, index)}
                  name="type"
                  value={edu.type || ''}
                >
                  <option value="">Education Type</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="d-sm-flex justify-content-around one">
                <input
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="University"
                  name="university"
                  value={edu.university}
                />
                <input
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  value={edu.degree}
                />
              </div>
              <div className="d-sm-flex justify-content-around one">
                <input
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Start Year"
                  name="startYear"
                  value={edu.startYear}
                />
                <input
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="End Year"
                  name="endYear"
                  value={edu.endYear}
                />
              </div>
              <div className="d-flex justify-content-between one">
                <button
                  className="button1 m-2"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span className="text">Delete</span>
                </button>
              </div>
            </div>
          ))}
          <hr style={{width:'inherit'}} />
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <GoogleAd />
          <div className="d-flex justify-content-around m-2">
            <button className="button1" onClick={handleClickBack} type="button">
              <span className="text">BACK</span>
            </button>
            <button className="button1" onClick={handleClickNext} type="submit">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showWorkExperience && <WorkExperience />}
      {showLanguage && <Language />}
    </form>
  );
};

export default Education;
