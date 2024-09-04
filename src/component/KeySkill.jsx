import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyskillsData } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import Hobbies from "./Hobbies";

const KeySkills = (props) => {
    // const { hoveredImage, images } = props;
    const [showKeySkills, setShowKeySkills] = useState(true);
    const [showHobbies, setShowHobbies] = useState(false);
    const [inputFields, setInputFields] = useState(() => {
        // Load key skills from local storage if available
        const savedKeySkills = localStorage.getItem("keySkills");
        return savedKeySkills ? JSON.parse(savedKeySkills) : [{ keyskills: '' }];
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector((state) => state.reducer.templatePage[0]);

    useEffect(() => {
        // Save key skills to local storage whenever inputFields change
        localStorage.setItem("keySkills", JSON.stringify(inputFields));
    }, [inputFields]);

    const handleClickBack = (e) => {
        e.preventDefault();
        setShowHobbies(true);
        setShowKeySkills(false);
    };

    const handleClickNext = (e) => {
        e.preventDefault();
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
            { value: 101,path: '/preview101'}
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
                keyskills: value.toUpperCase()
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
                <div >
                    <div className="profetional-detail">
                        <h1 className="multicolor-heading">KEY SKILLS</h1>
                        <p>
                            Including key skills in a resume is essential because it quickly
                            communicates your core competencies and expertise to potential employers.
                            This section helps highlight the specific abilities that are most relevant to the
                            job you're applying for, making it easier for hiring managers to see why you're a
                            strong fit for the role. Key skills can include both technical abilities, like
                            proficiency in software or coding languages, and soft skills, like leadership,
                            communication, or problem-solving. By listing your key skills, you provide a
                            snapshot of your qualifications, helping to set you apart from other candidates and
                            ensuring that your resume passes through initial screening processes.
                        </p>
                    </div>

                    {inputFields.map((field, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <input
                                    type="text"
                                    className="input"
                                    name='keyskills'
                                    placeholder="Key skills"
                                    value={field.keyskills}
                                    onChange={(e) => handleInputChange(e, index)}
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
                    <div style={{ display: 'flex', justifyContent:'space-around' }}>
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
        </form>
    );
};

export default KeySkills;
