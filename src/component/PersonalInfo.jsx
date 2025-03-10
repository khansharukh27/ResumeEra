import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalInfoData } from "../Redux/action";
import WorkExperience from "./WorkExperience";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/personalinfo.css";
// import '../component/adFolder/GoogleAd.jsx'
import GoogleAd from "../component/adFolder/GoogleAd.jsx";
import {careerObjectives} from "./suggetionList.jsx";
const PersonalInfo = () => {
  const [selectImage, setSelectImage] = useState(null);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const [inputData, setInputData] = useState({
    image: "https://via.placeholder.com/150", // Default image URL
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    mobileNumber: "",
    postalCode: "",
    object: "",
    address: "",
    maritalstatus: "",
    nationality: "",
    dateofbirth: "",
  });

  // const [setSelectImage] = useState(null); // For file preview

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalInfoData"));
    if (savedData) {
      setInputData(savedData);
    }
  }, []);

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "object") {
    if (value) {
      // Filter suggestions only for the 'object' field
      const filtered = careerObjectives.filter((suggestion) =>
        suggestion.toUpperCase().includes(value.toUpperCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      // Clear suggestions if the 'object' input is empty
      setFilteredSuggestions([]);
    }
  }

  // Update the specific input field in inputData
  setInputData((prevData) => ({
    ...prevData,
    [name]: value.toUpperCase(),
  }));
};

  const handleSuggestionClick = (suggestion) => {
  // Update the `object` field in `inputData` with the clicked suggestion
  setInputData((prevData) => ({
    ...prevData,
    object: suggestion, // Update only the 'object' field
  }));
  // Clear the suggestions after selection
  setFilteredSuggestions([]);
};

  // Convert file to Base64 and update inputData.image
  const convertFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setInputData((prevData) => ({
        ...prevData,
        image: reader.result, // Set base64 string as image source
      }));
    };
    reader.readAsDataURL(file);
  };

  // Handle image selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectImage(file);
      convertFileToBase64(file); // Convert to base64 and set in inputData
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personalInfoData", JSON.stringify(inputData)); // Save data to local storage
    dispatch(personalInfoData(inputData));
    console.log("formData in PersonalInfo:", inputData);
  };

  const location = useLocation();
  console.log("location", location);

  const result = useSelector((state) => state.reducer.coverletter);
  console.log("personlainfo to id:-", result);

  const handleClickBack = () => {
    if (location.pathname === `/cover_letter/${result}`) {
      setShowPersonalInfo(true);
      setShowWorkExperience(false);
      navigate("/cover_letter");
    } else {
      setShowPersonalInfo(true);
      setShowWorkExperience(false);
      navigate("/");
    }
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(inputData).filter(
      ([key, value]) => !value
    );
    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");

      // Focus on the first empty input
      const firstEmptyField = emptyFields[0][0]; // Get the key of the first empty field
      document.getElementsByName(firstEmptyField)[0].focus(); // Focus the first empty input
      return; // Prevent proceeding to the next step
    }

    localStorage.setItem("personalInfoData", JSON.stringify(inputData)); // Save data to local storage
    dispatch(personalInfoData(inputData));
    setShowWorkExperience(true);
    setShowPersonalInfo(false);
    console.log("formData in PersonalInfo:", inputData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {showPersonalInfo && (
        <div className="prefetional-main">
          <header className="profetional-detail">
            <h1 className="multicolor-heading">Your Profetional detail</h1>
            <p>
              Personal information in a resume serves as the foundational layer
              that helps employers connect with you on a basic level. It
              includes essential details like your name, contact information,
              and sometimes a brief profile summary. This information ensures
              that potential employers can reach out to you easily for
              interviews and further communication. It also gives them a first
              impression of who you are beyond your professional qualifications.
              Including accurate and updated personal information is crucial
              because it reflects your attention to detail and professionalism,
              making your resume complete and effective in the hiring process.
            </p>
          </header>
          
          <div className="personal-profile">
            <input
              type="file"
              id="image"
              name="image"
              className="profile-input"
              onChange={handleImageChange}
              style={{ display: "none" }} // Hide file input field
            />

            {/* Display default or selected image */}
            <img
              onClick={() => document.getElementById("image").click()} // Trigger file input on click
              src={
                selectImage ? URL.createObjectURL(selectImage) : inputData.image
              } // Display selected image or default
              alt="profile"
              className="profile-imgs"
              style={{ width: "150px", height: "150px", cursor: "pointer" }}
            />
          </div>
          <div className="mt-5 input-div">
            <div className="d-sm-flex one">
              <input
                className="input m-2"
                type="text"
                placeholder="first name"
                name="firstName"
                value={inputData.firstName}
                onChange={handleChange}
              />
              <input
                className="input m-2"
                type="text"
                placeholder="last name"
                name="lastName"
                value={inputData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="d-sm-flex one">
              <input
                className="input m-2"
                type="text"
                placeholder="email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
              />
              <input
                className="input m-2"
                type="number"
                placeholder="mobile number"
                name="mobileNumber"
                value={inputData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="d-sm-flex one w-sm-50">
              <textarea
                className="input m-2"
                type="text"
                placeholder="address"
                name="address"
                value={inputData.address}
                onChange={handleChange}
              />
              <textarea
                className="input m-2"
                type="text"
                placeholder="marital status"
                name="maritalstatus"
                value={inputData.maritalstatus}
                onChange={handleChange}
              />
            </div>
            <div className="d-sm-flex one">
              <input
                className="input m-2"
                type="text"
                placeholder="city"
                name="city"
                value={inputData.city}
                onChange={handleChange}
              />
              <input
                className="input m-2"
                type="text"
                placeholder="state"
                name="state"
                value={inputData.state}
                onChange={handleChange}
              />
            </div>
            <div className="d-sm-flex one">
              <input
                className="input m-2"
                type="number"
                placeholder="postal code"
                name="postalCode"
                value={inputData.postalCode}
                onChange={handleChange}
              />
              <input
                className="input m-2"
                type="text"
                placeholder="Nationality"
                name="nationality"
                value={inputData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className=" textarea1">
              <textarea
                className="input1 m-2"
                type="text"
                placeholder="object"
                name="object"
                value={
                  inputData.object === "" 
                    ? "" 
                    : inputData?.object || inputData // Use a specific property like "name"
                }
                
                onChange={handleChange}
                style={{ width: "100%" }}
              />
          {filteredSuggestions.length > 0 && (
                <ol
                  style={{
                    // position:'absolute',
                    maxWidth:'620px',
                    padding: "0",
                    margin: "5px 0",
                    border: "1px solid transparent",
                    borderColor:'oldlace',
                    borderRadius: "4px",
                    backgroundColor: "",
                    maxHeight: "100%",
                    overflowY: "auto",
                    className:'suggetion_to_object'
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
                </ol>
              )}    
              <textarea
                className="input1 m-2"
                type="text"
                placeholder="date of birth"
                name="dateofbirth"
                value={inputData.dateofbirth}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            style={{ marginLeft: "0px", width: "100%" }}
            className="GoogleAd"
          >
            <GoogleAd />
          </div>
          <div className="d-sm-flex justify-content-around m-2 button-div">
            <button onClick={handleClickBack} className="button1">
              <span className="text">BACK</span>
            </button>

            <button onClick={handleClickNext} type="submit" className="button1">
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showWorkExperience && <WorkExperience />}
      {/* Add other components based on your flow */}
    </form>
  );
};

export default PersonalInfo;
