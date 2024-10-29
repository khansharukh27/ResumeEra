import { useDispatch} from "react-redux";
import { addSoftSkills } from "../Redux/action";
import { useState, useEffect } from "react";
// import Language from "./Language";
import SocialMedia from "./SocialMedia";
// import { useLocation } from "react-router-dom";
// import KeySkills from "./KeySkill";
import HonorAndAward from "./HonorAndAward";
import Certificate from "./Certificate";
import GoogleAd from "./adFolder/GoogleAd";

const SoftSkills = () => {
  const [input, setInput] = useState(() => {
    // Load soft skills from local storage if available
    const savedSoftSkills = localStorage.getItem("softSkillsData");
    return savedSoftSkills ? JSON.parse(savedSoftSkills) : [{ softSkill: "" }];
  });

  const [showSoftSkill, setShowSoftSkill] = useState(true);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [showHonor,setShowHonor] = useState(false);
  const [showCertificate,setShowCertificate] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    // Save soft skills to local storage whenever it changes
    localStorage.setItem("softSkillsData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSoftSkills(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { softSkill: "" }]);
  };

//   const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
      setShowSocialMedia(false);
      setShowSoftSkill(false);
      setShowHonor(true);
      dispatch(addSoftSkills(input));
  };

  const handleClickBack = () => {
    setShowHonor(false);
    setShowSoftSkill(false);
    // setShowSocialMedia(true);
    setShowCertificate(true)
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setInput((prev) => {
      const updateInput = [...prev];
      updateInput[index] = {
        ...updateInput[index],
        [name]: value.toUpperCase(),
      };
      return updateInput;
    });
  };

  const handleDelete = (index) => {
    setInput((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showSoftSkill && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Soft Skills You Possess</h1>
            <p>
              Including soft skills in a resume is crucial as they demonstrate
              your ability to work well with others and adapt to various
              situations. Soft skills such as communication, teamwork, problem-solving,
              and leadership are highly valued by employers because they
              contribute to a positive and productive workplace. Highlighting
              these skills can make you stand out as a candidate who is not only
              technically proficient but also capable of thriving in a team
              environment and contributing to the company culture.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-flex justify-content-center mt-2">
              <input
                type="text"
                className="input"
                name="softSkill"
                value={inp.softSkill}
                onChange={(e) => handleChange(e, index)}
                placeholder="Soft Skill"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <button
                className="button1 ms-2"
                onClick={() => handleDelete(index)}
                type="button"
              >
                <span>Delete</span>
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-around mt-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
  <GoogleAd/>
</div>
          <div className="d-flex justify-content-around">
            <button className="button1" type="button" onClick={handleClickBack}>
              <span className="text">BACK</span>
            </button>
            <button className="button1" onClick={handleClick} type="submit">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showSocialMedia && <SocialMedia />}
      {/* {showSoftSkill && <SoftSkill />} */}
      {showHonor && <HonorAndAward />}
      {showCertificate && (<Certificate/>)}
    </form>
  );
};

export default SoftSkills;
