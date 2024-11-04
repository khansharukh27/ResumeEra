import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { workExData } from "../Redux/action";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import GoogleAd from "./adFolder/GoogleAd";
import Blank from "./Blank";

const WorkExperience = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  // Initialize workExperiences with localStorage data or default structure
  const [workExperiences, setWorkExperiences] = useState(() => {
    const savedWorkExperiences = localStorage.getItem("workExperiences");
    return savedWorkExperiences ? JSON.parse(savedWorkExperiences) : [
      { jobtitle: '', organization: '', startYear: '', endYear: '', aboutexperience: '' }
    ];
  });

  // Refs to focus on empty fields
  const inputRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    // Save work experiences to local storage whenever they change
    localStorage.setItem("workExperiences", JSON.stringify(workExperiences));
  }, [workExperiences]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setWorkExperiences((prev) => {
      const updatedExperiences = [...prev];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [name]: value.toUpperCase()
      };
      return updatedExperiences;
    });
  };

  const handleAddMore = () => {
    setWorkExperiences([
      ...workExperiences, 
      { jobtitle: '', organization: '', startYear: '', endYear: '', aboutexperience: '' }
    ]);
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setShowPersonalInfo(true);
    setShowWorkExperience(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    
    // Check for any empty fields and find the first one
    const firstEmptyIndex = workExperiences.findIndex((experience) =>
      !experience.jobtitle || !experience.organization || !experience.startYear || !experience.endYear || !experience.aboutexperience
    );

    if (firstEmptyIndex !== -1) {
      alert("Your input is blank. Please fill in all fields.");
      
      // Focus on the first empty field
      const fieldNames = ["jobtitle", "organization", "startYear", "endYear", "aboutexperience"];
      for (let fieldName of fieldNames) {
        if (!workExperiences[firstEmptyIndex][fieldName]) {
          inputRefs.current[firstEmptyIndex][fieldName].focus();
          break;
        }
      }
      return; // Stop here if any field is blank
    }

    // Proceed if all fields are filled
    setShowEducation(true);
    setShowWorkExperience(false);
    dispatch(workExData(workExperiences));
    console.log('Work Experiences:', workExperiences);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(workExData(workExperiences));
    console.log('Work Experiences:', workExperiences);
  };

  const handleDelete = (index) => {
    setWorkExperiences((prev) => (
      prev.filter((_, i) => i !== index)
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showWorkExperience && (
        <div>
          <Blank/>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Work Experience</h1>
            <p>Work experience is a crucial component of a resume...</p>
          </div>
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Work Experience {index + 1}</h1>
              <hr style={{width:'inherit'}}/>
              <div className="d-sm-flex one">
                <input 
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], jobtitle: el })}
                  className="input mb-2" 
                  onChange={(e) => handleChange(e, index)} 
                  type="text" 
                  placeholder='Job Title' 
                  name="jobtitle" 
                  value={experience.jobtitle} 
                />
                <input 
                  ref={(el) => (inputRefs.current[index] = { ...inputRefs.current[index], organization: el })}
                  className="input mb-2" 
                  onChange={(e) => handleChange(e, index)} 
                  type="text" 
                  placeholder='Organization Name' 
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
              <div className="d-flex justify-content-center m-2">
                <button className="button1" type="button" onClick={() => handleDelete(index)}>
                  <span className="text">DELETE</span>
                </button>
              </div>
              <hr className="m-2" style={{width:'inherit'}} />
            </div>
          ))}
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
            <GoogleAd />
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
      {showPersonalInfo && <PersonalInfo />}
      {showEducation && <Education />}
    </form>
  );
};

export default WorkExperience;
