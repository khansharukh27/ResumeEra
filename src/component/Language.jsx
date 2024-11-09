import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLanguage } from "../Redux/action";
import Education from "./Education";
import Hobbies from "./Hobbies";
import GoogleAd from "./adFolder/GoogleAd";
// import { float } from "html2canvas/dist/types/css/property-descriptors/float";

const Language = () => {
  const [inputLanguage, setInputLanguage] = useState(() => {
    const savedLanguages = localStorage.getItem("inputLanguageData");
    return savedLanguages ? JSON.parse(savedLanguages) : [{ language: "", rating: 0 }];
  });

  const [showEducation, setShowEducation] = useState(false);
  const [showLanguage, setShowLanguage] = useState(true);
  const [showHobbies, setShowHobbies] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("inputLanguageData", JSON.stringify(inputLanguage));
  }, [inputLanguage]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addLanguage(inputLanguage));
  // };

  const handleClick = (e) => {
    e.preventDefault();
    const emptyFields = inputLanguage
      .map((entry, index) => ({ ...entry, index }))
      .filter((entry) => !entry.language || entry.rating === 0);

    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");
      const firstEmptyFieldIndex = emptyFields[0].index;
      document.getElementsByName("language")[firstEmptyFieldIndex].focus();
      return;
    }
    setShowHobbies(true);
    setShowEducation(false);
    setShowLanguage(false);
    dispatch(addLanguage(inputLanguage));
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    // const emptyFields = object.entries()
    setShowEducation(true);
    setShowHobbies(false);
    setShowLanguage(false);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setInputLanguage((prev) => {
      const updatedLanguages = [...prev];
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        [name]: name === "rating" ? Number(value) : value.toUpperCase(),
      };
      return updatedLanguages;
    });
  };

  const handleAddMore = () => {
    setInputLanguage((prev) => [...prev, { language: "", rating: 0 }]);
  };

  const handleDelete = (index) => {
    setInputLanguage((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission if needed
      handleClick(e);
    }
  };

  return (
    <div>
      {showLanguage && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Language You Know</h1>
            <p>
              Including languages in a resume is important because it
              demonstrates your communication abilities and cultural awareness,
              which can be crucial in today's globalized job market. Proficiency
              in multiple languages can set you apart from other candidates,
              making you a more versatile and valuable asset to potential
              employers. It shows that you can effectively interact with
              clients, colleagues, and stakeholders from different linguistic
              backgrounds, thereby expanding the scope of your professional
              opportunities. Additionally, listing your language skills
              highlights your dedication to learning and adapting, which are
              qualities that many employers highly value.
            </p>
          </div>
          <hr className="mb-3" />
          {inputLanguage.map((inputLan, index) => (
            <div
              key={index}
              className=""
              style={{
                display: "flex",
                flexDirection: '',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                className="input w-50 me-2"
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  marginTop: "7px",
                }}
                type="text"
                placeholder={`Language ${index + 1}`}
                name="language"
                value={inputLan.language}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={handleKeyDown}
              />

                Rating:
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                placeholder="Proficiency Number"
                className="input mt-2"
                value={inputLan.rating}
                onChange={(e) => handleChange(e, index)}
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  marginTop: "7px",
                }}

              />
              <div className="d-flex justify-content-around mt-2">
                <button
                  onClick={() => handleDelete(index)}
                  type="button"
                  className="button1 ms-2"
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-2 d-flex justify-content-center align-item-center">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
<div>
  <GoogleAd/>
</div>
          <div className="d-flex justify-content-around mt-2">
            <button className="button1" type="button" onClick={handleClickBack}>
              <span className="text">BACK</span>
            </button>
            <button
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              type="button"
              className="button1"
            >
              <span className="text">NEXT</span>
            </button>
          </div>
        </div>
      )}
      {showEducation && <Education />}
      {showHobbies && <Hobbies />}
    </div>
  );
};

export default Language;
