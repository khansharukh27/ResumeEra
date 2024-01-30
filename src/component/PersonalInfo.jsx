import { useState } from "react";
import { useDispatch } from "react-redux";
import { personalInfoData } from "../Redux/action";
import WorkExperience from "./WorkExperience";
import { useNavigate } from "react-router-dom";
import TemplatePage from "./TemplatePage";

const PersonalInfo = () => {
    const [selectImage, setSelectImage] = useState(null);
    const [showPersonalInfo, setShowPersonalInfo] = useState(true);
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    const [inputData, setInputData] = useState({
        image: null,
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        city: "",
        mobileNumber: "",
        postalCode: "",
        object: ""
    });

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const convertFileToBase64 = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setInputData((prevData) => ({
                ...prevData,
                image: reader.result
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectImage(file)
        convertFileToBase64(file)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(personalInfoData(inputData));
        console.log('formData in PersonalInfo:', inputData);
    };

    const handleClickBack = () => {
        setShowPersonalInfo(true);
        setShowWorkExperience(false);
        navigation('/');
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch(personalInfoData(inputData));
        setShowWorkExperience(true);
        setShowPersonalInfo(false);
        console.log('formData in PersonalInfo:', inputData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {showPersonalInfo && (
                <div>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            style={{
                                position: 'relative',
                                height: '100px',
                                width: '100px',
                                borderRadius: '50%',
                                border: '1px solid grey'
                            }}
                        />
                        {selectImage && (
                            <img
                                onClick={() => document.getElementById('image').click()}
                                src={URL.createObjectURL(selectImage)}
                                alt="selected"
                                name="image1"
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: '0px',
                                    cursor: 'pointer'
                                }}
                            />
                        )}
                    </div>
                    <div className="m-2">
                        <div className="d-sm-flex one">
                            <input className="input m-2" type="text" placeholder="first name" name="firstName" value={inputData.firstName} onChange={handleChange} />
                            <input className="input m-2" type="text" placeholder="last name" name="lastName" value={inputData.lastName} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one">
                            <input className="input m-2" type="text" placeholder="email" name="email" value={inputData.email} onChange={handleChange} />
                            <input className="input m-2" type="number" placeholder="mobile number" name="mobileNumber" value={inputData.mobileNumber} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one w-sm-50">
                            <textarea className="input m-2" type="text" placeholder="address" name="address" value={inputData.address} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one" >
                            <input className="input m-2" type="text" placeholder="city" name="city" value={inputData.city} onChange={handleChange} />
                            <input className="input m-2" type="text" placeholder="state" name="state" value={inputData.state} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one" >
                            <input className="input m-2" type="number" placeholder='postal code' name="postalCode" value={inputData.postalCode} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one">
                            <textarea className="input m-2" type="text" placeholder="object" name="object" value={inputData.object} onChange={handleChange} style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="d-sm-flex justify-content-between m-2">
                        <button onClick={handleClickBack}>
                            <span class="text">BACK</span>
                        </button>
                        {/* <button >Hover me</button> */}
                        {/* <button onClick={handleClickBack} type="button" className="btn btn-primary">Previous</button> */}
                        <button onClick={handleClickNext} type="submit"><span className="text">NEXT</span></button>
                    </div>
                </div>
            )}
            {showWorkExperience && (<WorkExperience />)}
            {/* Add other components based on your flow */}
            <TemplatePage />
        </form>
    );
};

export default PersonalInfo;
