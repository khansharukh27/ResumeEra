import { useDispatch } from "react-redux";
import { addReferences } from "../Redux/action";
import { useState, useEffect } from "react";
import HonorAndAward from "./HonorAndAward";
import KeySkills from "./KeySkill";
// import SomeOtherComponent from "./SomeOtherComponent"; // replace with the actual component to show on Next

const References = () => {
  const [input, setInput] = useState(() => {
    // Load references from local storage if available
    const savedReferences = localStorage.getItem("referencesData");
    return savedReferences ? JSON.parse(savedReferences) : [{ name: "", contact: "",email:"",position:"" }];
  });

  const [showHonorAndAward,setShowHonorAndAward] = useState(false);
  const [showKeySkills,setShowKeySkills] = useState(false);
  const [showReferences,setShowReferences] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    // Save references to local storage whenever it changes
    localStorage.setItem("referencesData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReferences(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { name: "", contact: "" }]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setInput((prev) => {
      const updateInput = [...prev];
      updateInput[index] = {
        ...updateInput[index],
        [name]: value,
      };
      return updateInput;
    });
  };

  const handleDelete = (index) => {
    setInput((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    setShowReferences(false);
    setShowHonorAndAward(false);
    setShowKeySkills(true)
    dispatch(addReferences(input));
  };

  const handleBack = () => {
    setShowReferences(false);
    setShowHonorAndAward(true);
    setShowKeySkills(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      {showReferences && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">References</h1>
            <p>
              Including references in your resume can add credibility to your
              application, showing that you have the backing of people who can
              vouch for your skills and work ethic. References provide potential
              employers with trusted, first-hand accounts of your abilities and
              character.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-sm-flex justify-content-center">
              <input
                type="text"
                className="input"
                name="name"
                value={inp.name}
                onChange={(e) => handleChange(e, index)}
                placeholder="Reference Name"
                style={{ width: "45%", borderRadius: "5px" }}
              />
              <input
                type="text"
                className="input ms-2"
                name="contact"
                value={inp.contact}
                onChange={(e) => handleChange(e, index)}
                placeholder="Contact Info"
                style={{ width: "45%", borderRadius: "5px" }}
              />
              <input
                type="text"
                className="input ms-2"
                name="position"
                value={inp.position}
                onChange={(e) => handleChange(e, index)}
                placeholder="Position Info"
                style={{ width: "45%", borderRadius: "5px" }}
              />
              <input
                type="text"
                className="input ms-2 mt-2"
                name="email"
                value={inp.email}
                onChange={(e) => handleChange(e, index)}
                placeholder=" Email"
                style={{ width: "45%", borderRadius: "5px" }}
              />
              <button
                className="button1 ms-2 mt-2"
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
          <div className="d-flex justify-content-around">
            <button className="button1" type="button" onClick={handleBack}>
              <span className="text">BACK</span>
            </button>
            <button className="button1" type="button" onClick={handleNext}>
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showHonorAndAward && <HonorAndAward/>}
      {showKeySkills && <KeySkills/>}
    </form>
  );
};

export default References;
