import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyskillsData } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import Hobbies from "./Hobbies";

const KeySkills = (props) => {
    const { hoveredImage, images } = props;
    const [showKeySkills, setShowKeySkills] = useState(true);
    const [showHobbies,setShowHobbies] = useState(false)
    const [inputFields, setInputFields] = useState([{ keyskills: '' }]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector((state) => state.reducer.templatePage[0]);
    console.log('result in keyskills:-', result);

    console.log('image for keyskills:-', hoveredImage);

    const handleClickBack = (e) => {
        e.preventDefault();
        setShowHobbies(true)
        setShowKeySkills(false);
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        console.log('images:-,', images);
        dispatch(keyskillsData(inputFields));
    
        const resultMappings = [
            { value: 1, path: '/preview' },
            { value: 2, path: '/preview2' },
            {value: 3, path: '/preview3' },
            {value: 4,path: '/preview4'},
            {value: 5, path: '/preview5'},
            {value: 6, path:'/preview6'},
            {value: 7, path:'/preview7'},
            {value: 8, path:'/preview8'},
            {value: 9, path:'/preview9'},
            {value: 10, path:'/preview10'},
            {value: 11, path:'/preview11'},
            {value: 12, path:'/preview12'},
            {value: 13, path:'/preview13'},
            {value: 14, path:'/preview14'},
            // Add more mappings as needed
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
        setInputFields([...inputFields, { keyskills: '' }]);
    };

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        setInputFields((prev) => {
            const updatedFields = [...prev];
            updatedFields[index] = {
                ...updatedFields[index],
                keyskills: value
            };
            return updatedFields;
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {showKeySkills && (
                <div>
                    {inputFields.map((field, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                className="input"
                                name='keyskills'
                                placeholder="key skills"
                                value={field.keyskills}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>
                    ))}
                    <div>
                        <button type="button" className="text-center mt-2" onClick={handleAddMore}>
                        <span class="text">ADD MORE</span>
                        </button>
                    </div>
                    <hr className="m-2" />
                    <div className="d-flex justify-content-between m-2">
                        <button onClick={handleClickBack} type="button">
                        <span class="text">BACK</span>
                        </button>
                        <button onClick={handleClickNext} type="submit"><span className="text">NEXT</span></button>

                    </div>
                </div>
            )}
            {showHobbies && (<Hobbies />)}
        </form>
    );
};

export default KeySkills;
