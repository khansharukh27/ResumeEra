import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { honorAndAwardData } from "../Redux/action";
import SoftSkills from "./SoftSkills";
import KeySkills from "./KeySkill";
import References from "./Refrences";
import { useLocation } from "react-router-dom";
import GoogleAd from "./adFolder/GoogleAd";
import Project from "./Project";

const HonorAndAward = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [showSoftSkill, setShowSoftSkill] = useState(false);
  const [showHonorAndAward, setShowHonorAndAward] = useState(true);
  const [showKeySkills, setShowKeySkills] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showProject,setShowProject] = useState(false)
  const [honorsAndAwards, setHonorsAndAwards] = useState(() => {
    const savedHonorsAndAwards = localStorage.getItem("honorsAndAwards");
    return savedHonorsAndAwards
      ? JSON.parse(savedHonorsAndAwards)
      : [{ title: '', organization: '', year: '', description: '' }];
  });

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
    setHonorsAndAwards((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setShowSoftSkill(true);
    setShowHonorAndAward(false);
    setShowReferences(false);
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    // Check for empty fields
    const emptyFields = honorsAndAwards.findIndex(
      (award) => !award.title || !award.organization || !award.year || !award.description
    );

    if (emptyFields !== -1) {
      alert('Some fields are empty');
      document.querySelectorAll('.input')[emptyFields * 4].focus(); // Focus on the first empty input
      return;
    }

    // Navigate to the next section
    if (location.pathname === '/techmain/101') {
      setShowHonorAndAward(false);
      setShowSoftSkill(false);
      setShowReferences(true);
    }else if(location.pathname === '/techmain/109'){
      setShowHonorAndAward(false);
      setShowSoftSkill(false);
      setShowReferences(false);
      setShowProject(true)
    } 
    else {
      setShowHonorAndAward(false);
      setShowSoftSkill(false);
      setShowKeySkills(true);
    }
    dispatch(honorAndAwardData(honorsAndAwards));
  };

  return (
    <form>
      {showHonorAndAward && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Honors & Awards</h1>
            <p>
              Listing honors and awards in a resume highlights your achievements, 
              sets you apart from other candidates, and showcases recognition of your hard work and expertise.
            </p>
          </div>
          {honorsAndAwards.map((award, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Award {index + 1}</h1>
              <hr />
              <div className="d-sm-flex one">
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={award.title}
                />
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Organization"
                  name="organization"
                  value={award.organization}
                />
              </div>
              <div className="d-sm-flex one">
                <input
                  type="text"
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Year"
                  name="year"
                  value={award.year}
                />
              </div>
              <div className="second">
                <textarea
                  className="textarea mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Description"
                  name="description"
                  cols="200"
                  rows="5"
                  value={award.description}
                ></textarea>
              </div>
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
          <div>
            <GoogleAd />
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
      {showReferences && <References />}
      {showKeySkills && <KeySkills />}
      {showProject && <Project/>}
    </form>
  );
};

export default HonorAndAward;
