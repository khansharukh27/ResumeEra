import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { workExData } from "../Redux/action";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import GoogleAd from "./adFolder/GoogleAd";
import Blank from "./Blank";
import { jobTitles } from "./suggetionList";

const WorkExperience = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);

  // Initialize work experiences from localStorage or default structure
  const [workExperiences, setWorkExperiences] = useState(() => {
    const saved = localStorage.getItem("workExperiences");
    return saved
      ? JSON.parse(saved)
      : [{ jobtitle: "", organization: "", startYear: "", endYear: "", aboutexperience: "" }];
  });

  const inputRefs = useRef([]);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("workExperiences", JSON.stringify(workExperiences));
  }, [workExperiences]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "jobtitle") {
      if (value) {
        const filtered = jobTitles.filter((suggestion) =>
          suggestion.toUpperCase().includes(value.toUpperCase())
        );
        setFilteredSuggestions(filtered);
        setActiveSuggestionIndex(index); // Track which input is active for suggestions
      } else {
        setFilteredSuggestions([]);
      }
    }

    setWorkExperiences((prev) =>
      prev.map((experience, i) =>
        i === index ? { ...experience, [name]: value } : experience
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    if (activeSuggestionIndex !== null) {
      setWorkExperiences((prev) =>
        prev.map((experience, i) =>
          i === activeSuggestionIndex ? { ...experience, jobtitle: suggestion } : experience
        )
      );
    }
    setFilteredSuggestions([]); // Clear suggestions
    setActiveSuggestionIndex(null);
  };

  const handleAddMore = () => {
    setWorkExperiences([
      ...workExperiences,
      { jobtitle: "", organization: "", startYear: "", endYear: "", aboutexperience: "" },
    ]);
  };

  const handleDelete = (index) => {
    setWorkExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClickBack = () => {
    setShowPersonalInfo(true);
    setShowWorkExperience(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    const firstEmptyIndex = workExperiences.findIndex((experience) =>
      !experience.jobtitle || !experience.organization || !experience.startYear || !experience.endYear || !experience.aboutexperience
    );

    if (firstEmptyIndex !== -1) {
      alert("Please fill in all fields.");
      const fieldNames = ["jobtitle", "organization", "startYear", "endYear", "aboutexperience"];
      const emptyFieldName = fieldNames.find(
        (field) => !workExperiences[firstEmptyIndex][field]
      );
      inputRefs.current[firstEmptyIndex]?.[emptyFieldName]?.focus();
      return;
    }
    setShowEducation(true);
    setShowWorkExperience(false);
    dispatch(workExData(workExperiences));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(workExData(workExperiences));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showWorkExperience && (
        <div>
          <Blank />
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Work Experience</h1>
            <p>
              Work experience is a crucial part of a resume that highlights your career journey, skills, and
              achievements...
            </p>
          </div>
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <h1 style={{ color: "white", textAlign: "center" }}>Work Experience {index + 1}</h1>
              <hr style={{ width: "inherit" }} />
              <div className="d-sm-flex one">
                <input
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], jobtitle: el })}
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Job Title"
                  name="jobtitle"
                  value={experience.jobtitle}
                />
              {filteredSuggestions.length > 0 && (
                <ul
                  style={{
                    listStyleType: "none",
                    padding: "0",
                    margin: "5px 0",
                    border: "1px solid transparent",
                    
                    borderRadius: "4px",
                    backgroundColor: "white",
                    maxHeight: "70px",
                    overflowY: "auto",
                  }}
                >
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{
                        color:'black',
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          index < filteredSuggestions.length - 1
                            ? "1px solid #eee"
                            : "none",
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}  
                <input
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], organization: el })}
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Organization Name"
                  name="organization"
                  value={experience.organization}
                />
              </div>
              
              <div className="d-sm-flex one">
                <input 
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], startYear: el })}
                  type="text" 
                  className="input mb-2" 
                  onChange={(e) => handleChange(e, index)} 
                  placeholder="Start Year" 
                  name="startYear" 
                  value={experience.startYear} 
                />
                <input 
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], endYear: el })}
                  type="text" 
                  className="input mb-2" 
                  onChange={(e) => handleChange(e, index)} 
                  placeholder="End Year" 
                  name="endYear" 
                  value={experience.endYear} 
                />
              </div>
              <div className="second">
                <textarea 
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], aboutexperience: el })}
                  type="text" 
                  className="textarea mb-2" 
                  onChange={(e) => handleChange(e, index)} 
                  placeholder="About Work" 
                  name="aboutexperience" 
                  cols="200" 
                  rows="5" 
                  value={experience.aboutexperience}
                ></textarea>
              </div>
              {/* Additional Fields */}
              <div className="d-flex justify-content-center m-2">
                <button
                  className="button1"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
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
          <GoogleAd />
          <div className="d-flex justify-content-around">
            <button onClick={handleClickBack} className="button1"><span className="text">BACK</span></button>
            <button onClick={handleClickNext} type="submit" className="button1"><span className="text">NEXT</span></button>
          </div>
        </div>
      )}
      {showPersonalInfo && <PersonalInfo />}
      {showEducation && <Education />}
    </form>
  );
};

export default WorkExperience;
