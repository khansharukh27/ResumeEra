import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  workExData } from "../Redux/action";

const WorkExperience = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [workExperiences, setWorkExperiences] = useState([
    {
      jobtitle: '',
      organization: '',
      startYear: '',
      endYear: ''
    }
  ]);

  const dispatch = useDispatch();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setWorkExperiences((prev) => {
      const updatedExperiences = [...prev];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [name]: value
      };
      return updatedExperiences;
    });
  };
  const handleAddMore = () => {
    setWorkExperiences([...workExperiences, { jobtitle: '', organization: '', startYear: '', endYear: '' }]);
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
    dispatch(workExData( workExperiences ));
    console.log('Work Experiences:', workExperiences);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(workExData(workExperiences ));
    console.log('Work Experiences:', workExperiences);
  };

  const handleDelete = (index)=>{
    setWorkExperiences((prev)=>(
      prev.filter((_,i) =>i !==index)
    ))
  }

  return (
    <form onSubmit={handleSubmit}>
      {showWorkExperience && (
        <div>
          
          {workExperiences.map((experience, index) => (
            <div key={index}>
                <h1>Work Experience {index+1}</h1>
          <hr />
              <div className="d-sm-flex one">
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Job Title' name="jobtitle" value={experience.jobtitle} />
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Organization Name' name="organization" value={experience.organization} />
              </div>
              <div className="d-sm-flex one">
                <input type="text" className="input mb-2" onChange={(e) => handleChange(e, index)} placeholder="Start Year" name="startYear" value={experience.startYear} />
                <input type="text" className="input mb-2" onChange={(e) => handleChange(e, index)} placeholder="End Year" name="endYear" value={experience.endYear} />
              </div>
              <button type="button" class=" m-2" onClick={()=>handleDelete(index)}><span class="text">DELETE</span></button>
              <hr className="m-2" />
            </div>
          ))}
          <div className="d-flex justify-content-center m-2">
            <button className="" type="button" onClick={handleAddMore}>
            <span class="text">ADD MORE</span>
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button className="" onClick={handleClickBack}>
            <span class="text">BACK</span>
            </button>
            <button onClick={handleClickNext} type="submit"><span className="text">NEXT</span></button>

          </div>
        </div>
      )}
      {showPersonalInfo && <PersonalInfo/>}
      {showEducation && <Education />}
    </form>
  );
};

export default WorkExperience;
