import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyskillsData } from "../Redux/action";
import { useLocation, useNavigate } from "react-router-dom";
import Hobbies from "./Hobbies";
import References from "./Refrences";
import Certificate from "./SocialMedia";
import GoogleAd from "./adFolder/GoogleAd";
import Project from "./Project";

const KeySkills = () => {
  const [showKeySkills, setShowKeySkills] = useState(true);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showCertificate,setShowCertificate] = useState(false)
  const [showProject,setShowProject] = useState(false)
  const [inputFields, setInputFields] = useState(() => {
    const savedKeySkills = localStorage.getItem("keySkills");
    return savedKeySkills ? JSON.parse(savedKeySkills) : [{ keyskills: '', rating: 1 }];
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector((state) => state.reducer.templatePage[0]);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("keySkills", JSON.stringify(inputFields));
  }, [inputFields]);

  const handleClickBack = (e) => {
    e.preventDefault();
     if(location.pathname === '/techmain/108'){
      setShowCertificate(true)
      setShowHobbies(false);
      setShowReferences(false);
      setShowKeySkills(false)

    }else if(location.pathname === '/techmain/109'){
      setShowCertificate(false);
      setShowHobbies(false);
      setShowReferences(false);
      setShowProject(true)
      setShowKeySkills(false)
    }
    else {
      setShowHobbies(true);
      setShowKeySkills(false);
      setShowReferences(false);
    }
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    const emptyFields = inputFields
    .map((entry, index) => ({ ...entry, index }))
    .filter((entry) => !entry.keyskills || entry.rating === 0);

  if (emptyFields.length > 0) {
    alert("Please fill in all fields.");
    const firstEmptyFieldIndex = emptyFields[0].index;
    document.getElementsByClassName("input")[firstEmptyFieldIndex].focus();
    return;
  }


    dispatch(keyskillsData(inputFields));
    const resultMappings = [
      { value: 1, path: '/preview' },
      { value: 2, path: '/preview2' },
      { value: 3, path: '/preview3' },
      { value: 4, path: '/preview4' },
      { value: 5, path: '/preview5' },
      { value: 6, path: '/preview6' },
      { value: 7, path: '/preview7' },
      { value: 8, path: '/preview8' },
      { value: 9, path: '/preview9' },
      { value: 10, path: '/preview10' },
      { value: 11, path: '/preview11' },
      { value: 12, path: '/preview12' },
      { value: 13, path: '/preview13' },
      { value: 14, path: '/preview14' },
      { value: 15, path: '/preview15' },
      { value: 15, path: '/preview16' },
      { value: 15, path: '/preview17' },
      { value: 15, path: '/preview18' },
      { value: 15, path: '/preview19' },
      { value: 15, path: '/preview20' },
      { value: 15, path: '/preview21' },
      { value: 15, path: '/preview22' },
      { value: 101, path: '/preview101' },
      { value: 103, path: '/preview103' },
      { value: 104, path: '/preview104' },
      { value: 102, path: '/preview102' },
      { value: 105, path: '/preview105' },
      { value: 106, path: '/preview106' },
      { value: 107, path: '/preview107' },
      { value: 108, path: '/preview108' },
      { value: 109, path: '/preview109' },
      { value: 110, path: '/preview110' },
      { value: 111, path: '/preview111' },
      { value: 112, path: '/preview112' },
      { value: 113, path: '/preview113' },
      { value: 114, path: '/preview114' },
      { value: 115, path: '/preview115' },
      { value: 116, path: '/preview116' },

      { value:301, path: '/preview301' },
      { value:302, path: '/preview302' },
      { value:303, path: '/preview303' },
      { value:304, path: '/preview304' },
      { value:305, path: '/preview305' },
      { value:306, path: '/preview306' },
      { value:307, path: '/preview307' },
      { value:308, path: '/preview308' },
      { value:309, path: '/preview309' },

    ];

    const resultMapping = resultMappings.find(mapping => mapping.value === result);

    if (resultMapping) {
      const { path } = resultMapping;
      navigate(path);
    } else {
      console.error(`Unexpected result value: ${result}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(keyskillsData(inputFields));
    console.log('keySkills input fields:', inputFields);
  };

  const handleAddMore = () => {
    setInputFields([...inputFields, { keyskills: '', rating: 1 }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setInputFields((prev) => {
      const updatedFields = [...prev];
      updatedFields[index] = {
        ...updatedFields[index],
        [name]: name === "rating" ? Number(value) : value.toUpperCase(),
      };
      return updatedFields;
    });
  };

  const handleDelete = (index) => {
    setInputFields(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} style={{}}>
      {showKeySkills && (
        <div>
          <div className="project-detail">
    <h1 className="multicolor-heading">KEY SKILLS</h1>
    <p>
      Showcasing your project experience in a resume is crucial as it demonstrates your practical application of skills, problem-solving abilities, and hands-on experience with real-world scenarios.
    </p>
</div>

<hr style={{width:'inherit'}}/>
          {inputFields.map((field, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>
                <input
                  type="text"
                  className="input"
                  name="keyskills"
                  placeholder="Key skill"
                  value={field.keyskills}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <label>Rating:</label>
                <input
                  type="number"
                  className="input"
                  name="rating"
                  min="1"
                  max="5"
                  value={field.rating}
                  onChange={(e) => handleInputChange(e, index)}
                  style={{ width: '50px' }}
                />
              </div>
              <div>
                <button
                  className="button1 ms-2 mt-2"
                  onClick={() => handleDelete(index)}
                  type="button"
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
              type="button"
              className="button1 mt-2"
              onClick={handleAddMore}
            >
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <hr className="m-2" />
          <div>
  <GoogleAd/>
</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button className="button1" onClick={handleClickBack} type="button">
              <span className="text">BACK</span>
            </button>
            <button className="button1" onClick={handleClickNext} type="submit">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showHobbies && (<Hobbies />)}
      {showReferences && (<References />)}
      {showCertificate && (<Certificate/>)}
      {showProject && (<Project/>)}
    </form>
  );
};

export default KeySkills;
