import { useDispatch, useSelector } from "react-redux";
import { addHobbies } from "../Redux/action";
import { useState, useEffect } from "react";
// import KeySkills from "./KeySkill";
import Language from "./Language";
import SocialMedia from "./SocialMedia";
import { useLocation } from "react-router-dom";
import KeySkills from "./KeySkill";

const Hobbies = () => {
  const [input, setInput] = useState(() => {
    // Load hobbies from local storage if available
    const savedHobbies = localStorage.getItem("hobbiesData");
    return savedHobbies ? JSON.parse(savedHobbies) : [{ hobbies: "" }];
  });

  const [showLanguage, setShowLanguage] = useState(false);
  const [showHobbies, setShowHobbies] = useState(true);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [showSkills,setShowSkills] = useState(false)
  const dispatch = useDispatch();
  const result = useSelector((state)=>state.reducer.templatePage[0])
  console.log('hobbies mai id ko lana h:-,',result)

  useEffect(() => {
    // Save hobbies to local storage whenever it changes
    localStorage.setItem("hobbiesData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHobbies(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { hobbies: "" }]);
  };
const location = useLocation()
console.log(location)
  const handleClick = (e) => {
    e.preventDefault();
    if(location.pathname === `/mainpage/${result}`){
      setShowLanguage(false);
      setShowHobbies(false);
      setShowSkills(true);
      dispatch(addHobbies(input));
    }else if(location.pathname=== `/techmain/${result}`){
      setShowLanguage(false);
      setShowHobbies(false);
      setShowSocialMedia(true);
      dispatch(addHobbies(input));
    }
  };

  const handleClickBack = () => {
    setShowLanguage(true);
    setShowHobbies(false);
    setShowSocialMedia(false);
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
      {showHobbies && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Hobbies that You Have</h1>
            <p>
              Including hobbies in a resume can provide a more well-rounded
              view of who you are beyond your professional qualifications.
              Hobbies can showcase your personality, interests, and soft skills
              that may not be evident from your work experience or education.
              For example, involvement in team sports can indicate strong
              teamwork and leadership abilities, while creative hobbies like
              painting or writing may highlight your creativity and
              problem-solving skills. Additionally, sharing hobbies that align
              with the job role can demonstrate your passion and dedication to
              the field, making you a more appealing candidate. Overall, hobbies
              add a personal touch to your resume, helping you stand out and
              connect with potential employers on a deeper level.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-flex justify-content-center">
              <input
                type="text"
                className="input"
                name="hobbies"
                value={inp.hobbies}
                onChange={(e) => handleChange(e, index)}
                placeholder="Hobbies"
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
            <button
              className="button1"
              type="button"
              onClick={handleAddMore}
            >
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div className="d-flex justify-content-around">
            <button
              className="button1"
              type="button"
              onClick={handleClickBack}
            >
              <span className="text">BACK</span>
            </button>
            <button className="button1" onClick={handleClick} type="submit">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showSocialMedia && <SocialMedia />}
      {showLanguage && <Language />}
      {showSkills && <KeySkills/>}
    </form>
  );
};

export default Hobbies;
