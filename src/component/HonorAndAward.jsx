import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { honorAndAwardData } from "../Redux/action";
import WorkExperience from "./WorkExperience"; // assuming you want to go back to WorkExperience
import Education from "./Education"; // assuming you want to go next to Education
import SoftSkills from "./SoftSkills";
import KeySkills from "./KeySkill";

const HonorAndAward = () => {
    const [showSoftSkill, setShowSoftSkill] = useState(false);
    const [showHonorAndAward, setShowHonorAndAward] = useState(true);
    const [showKeySkills, setShowKeySkills] = useState(false);
  const [honorsAndAwards, setHonorsAndAwards] = useState(() => {
    const savedHonorsAndAwards = localStorage.getItem("honorsAndAwards");
    return savedHonorsAndAwards ? JSON.parse(savedHonorsAndAwards) : [
      {
        title: '',
        organization: '',
        year: '',
        description: ''
      }
    ];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("honorsAndAwards", JSON.stringify(honorsAndAwards));
  }, [honorsAndAwards]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setHonorsAndAwards((prev) => {
      const updatedAwards = [...prev];
      updatedAwards[index] = {
        ...updatedAwards[index],
        [name]: value.toUpperCase()
      };
      return updatedAwards;
    });
  };

  const handleAddMore = () => {
    setHonorsAndAwards([...honorsAndAwards, { title: '', organization: '', year: '', description: '' }]);
  };

  const handleDelete = (index) => {
    setHonorsAndAwards((prev) => (
      prev.filter((_, i) => i !== index)
    ));
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setShowSoftSkill(true);
    setShowHonorAndAward(false);
    setShowSoftSkill(false)
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    setShowKeySkills(true);
    setShowHonorAndAward(false);
    setShowSoftSkill(false)
    dispatch(honorAndAwardData(honorsAndAwards));
    console.log('Honors and Awards:', honorsAndAwards);
  };

  return (
    <form>
      {showHonorAndAward && (
        <div className="">
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Honors & Awards</h1>
            <p>Listing honors and awards in a resume highlights your achievements, 
              sets you apart from other candidates, and showcases recognition of your hard work and expertise.</p>
          </div>
          {honorsAndAwards.map((award, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Award {index + 1}</h1>
              <hr />
              <div className="d-sm-flex one">
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Title' name="title" value={award.title} />
                <input className="input mb-2" onChange={(e) => handleChange(e, index)} type="text" placeholder='Organization' name="organization" value={award.organization} />
              </div>
              <div className="d-sm-flex one">
                <input type="text" className="input mb-2" onChange={(e) => handleChange(e, index)} placeholder="Year" name="year" value={award.year} />
              </div>
              <div className="second">
                <textarea type='text' className="textarea mb-2" onChange={(e) => handleChange(e, index)} placeholder="Description" name="description" cols="200" rows="5" value={award.description}></textarea>
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
            <button onClick={handleClickNext} className="button1">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showSoftSkill && <SoftSkills />}
      {showKeySkills && <KeySkills />}
    </form>
  );
};

export default HonorAndAward;
