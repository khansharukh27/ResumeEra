import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { personalInfoData } from "../Redux/action";
import WorkExperience from "./WorkExperience";
import { useNavigate } from "react-router-dom";
import '../css/personalinfo.css';

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
        object: "",
        address: '',
        maritalstatus: '',
        nationality: '',
        dateofbirth: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Load data from local storage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('personalInfoData'));
        if (savedData) {
            setInputData(savedData);
           
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value.toUpperCase()
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
        setSelectImage(file);
        convertFileToBase64(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('personalInfoData', JSON.stringify(inputData)); // Save data to local storage
        dispatch(personalInfoData(inputData));
        console.log('formData in PersonalInfo:', inputData);
    };

    const handleClickBack = () => {
        setShowPersonalInfo(true);
        setShowWorkExperience(false);
        navigate('/');
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        localStorage.setItem('personalInfoData', JSON.stringify(inputData)); // Save data to local storage
        dispatch(personalInfoData(inputData));
        setShowWorkExperience(true);
        setShowPersonalInfo(false);
        console.log('formData in PersonalInfo:', inputData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {showPersonalInfo && (
                <div className="prefetional-main">
                    <div className="profetional-detail">
                        <h1 className="multicolor-heading">Your Profetional detail</h1>
                        <p>Personal information in a resume serves as the foundational layer that helps 
                            employers connect with you on a basic level. It includes essential details 
                            like your name, contact information, and sometimes a brief profile summary. 
                            This information ensures that potential employers can reach out to you easily 
                            for interviews and further communication. It also gives them a first impression 
                            of who you are beyond your professional qualifications. Including accurate and 
                            updated personal information is crucial because it reflects your attention to 
                            detail and professionalism, making your resume complete and effective in the 
                            hiring process.</p>
                    </div>
                    <div className="personal-profile">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="profile-input"
                            onChange={handleImageChange}
                        />
                        {selectImage && (
                            <img
                                onClick={() => document.getElementById('image').click()}
                                src={URL.createObjectURL(selectImage)}
                                alt="selected"
                                name="image1"
                                className="profile-img"
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
                            <textarea className="input m-2" type="text" placeholder="marital status" name="maritalstatus" value={inputData.maritalstatus} onChange={handleChange} />

                        </div>
                        <div className="d-sm-flex one" >
                            <input className="input m-2" type="text" placeholder="city" name="city" value={inputData.city} onChange={handleChange} />
                            <input className="input m-2" type="text" placeholder="state" name="state" value={inputData.state} onChange={handleChange} />
                        </div>
                        <div className="d-sm-flex one" >
                            <input className="input m-2" type="number" placeholder='postal code' name="postalCode" value={inputData.postalCode} onChange={handleChange} />
                            <input className="input m-2" type="text" placeholder='Nationality' name="nationality" value={inputData.nationality} onChange={handleChange} />

                        </div>
                        <div className="d-sm-flex one">
                            <textarea className="input m-2" type="text" placeholder="object" name="object" value={inputData.object} onChange={handleChange} style={{ width: '100%' }} />
                            <textarea className="input m-2" type="text" placeholder="date of birth" name="dateofbirth" value={inputData.dateofbirth} onChange={handleChange} style={{ width: '100%' }} />

                        </div>
                    </div>
                    <div className="d-sm-flex justify-content-around m-2 ">
                        <button onClick={handleClickBack} className="button1">
                            <span className="text">BACK</span>
                        </button>
                        
                        <button onClick={handleClickNext} type="submit" className="button1"><span className="text">NEXT</span></button>
                    </div>
                </div>
            )}
            {showWorkExperience && (<WorkExperience />)}
            {/* Add other components based on your flow */}
            
        </form>
    );
};

export default PersonalInfo;
