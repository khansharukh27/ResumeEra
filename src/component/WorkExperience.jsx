import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { workExData } from "../Redux/action";

const WorkExperience = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [workExperiences, setWorkExperiences] = useState(() => {
    // Get the saved work experiences from local storage, or set the initial state
    const savedWorkExperiences = localStorage.getItem("workExperiences");
    return savedWorkExperiences ? JSON.parse(savedWorkExperiences) : [
      {
        jobtitle: '',
        organization: '',
        startYear: '',
        endYear: '',
        aboutexperience: ''
      }
    ];
  });

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
    setWorkExperiences([...workExperiences, { jobtitle: '', organization: '', startYear: '', endYear: '', aboutexperience: '' }]);
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setShowPersonalInfo(true);
    setShowWorkExperience(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();
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
        <div className="">
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Work Experience</h1>
            <p>Work experience is a crucial component of a resume as it provides tangible 
              evidence of a candidate's skills, abilities, and accomplishments. It offers 
              potential employers a clear understanding of a candidate's professional journey, 
              including the roles they've held, responsibilities undertaken, and results achieved.</p>
          </div>
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Work Experience {index + 1}</h1>
              <hr />
              <div className="d-sm-flex one">
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Job Title' name="jobtitle" value={experience.jobtitle} />
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Organization Name' name="organization" value={experience.organization} />
              </div>
              <div className="d-sm-flex one">
                <input type="text" className="input mb-2" onChange={(e) => handleChange(e, index)} placeholder="Start Year" name="startYear" value={experience.startYear} />
                <input type="text" className="input mb-2" onChange={(e) => handleChange(e, index)} placeholder="End Year" name="endYear" value={experience.endYear} />
              </div>
              <div className="second">
                <textarea type='text' className="textarea mb-2" onChange={(e) => handleChange(e, index)} placeholder="about work" name="aboutexperience" cols="200" rows="5" value={experience.aboutexperience}></textarea>
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
