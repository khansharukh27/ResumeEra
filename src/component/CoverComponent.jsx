import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { personalInfoData } from "../Redux/action";
import '../css/mainpage.css';

const CoverComponent = ({ CoverImage }) => {
    const [selectImage, setSelectImage] = useState(null);
    // const result = useSelector((state) =>state.reducer)
    

    const [inputData, setInputData] = useState({
        image: null,
        fullname: "",
        jobposition: "",
        email: "",
        state: "",
        city: "",
        mobileNumber: "",
        postalCode: "",
        object: "",
        address: '',
        linkedin: '',
        hiringManager: '',
        companyName: '',
        companyLocation: '',
        companyWebsite: '',
        nationality: '',
        dateofbirth: ''
    });

    const result2 = CoverImage;
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
            [name]: value.toUpperCase() // Keep the uppercase behavior
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

    
    const location = useLocation();
    const result = useSelector((state) => state.reducer.coverletterss);
    console.log('coverComponent hoverId:-',result)

    const handleClickBack = () => {
            navigate('/cover_letter');
    };

    const handleClickNext = (e) => {
        e.preventDefault();
        localStorage.setItem('personalInfoData', JSON.stringify(inputData)); // Save data to local storage
        dispatch(personalInfoData(inputData));
        navigate(`/preview/${result}`);
    };

    return (
        <div className="mt-2">
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
                        className="profile-imgs"
                    />
                )}
            </div>
            <div className="m-2 input-div">
                <div className="d-sm-flex one">
                    <input className="input m-2" type="text" placeholder="fullname" name="fullname" value={inputData.fullname} onChange={handleChange} />
                    <input className="input m-2" type="text" placeholder="job position" name="jobposition" value={inputData.jobposition} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one">
                    <input className="input m-2" type="text" placeholder="email" name="email" value={inputData.email} onChange={handleChange} />
                    <input className="input m-2" type="number" placeholder="mobile number" name="mobileNumber" value={inputData.mobileNumber} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one w-sm-50">
                    <textarea className="input m-2" type="text" placeholder="address" name="address" value={inputData.address} onChange={handleChange} />
                    <textarea className="input m-2" type="text" placeholder="linkedin" name="linkedin" value={inputData.linkedin} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one">
                    <input className="input m-2" type="text" placeholder="city" name="city" value={inputData.city} onChange={handleChange} />
                    <input className="input m-2" type="text" placeholder="state" name="state" value={inputData.state} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one">
                    <input className="input m-2" type="number" placeholder='postal code' name="postalCode" value={inputData.postalCode} onChange={handleChange} />
                    <input className="input m-2" type="text" placeholder='Nationality' name="nationality" value={inputData.nationality} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one">
                    <input className="input m-2" type="text" placeholder="Hiring Manager Name" name="hiringManager" value={inputData.hiringManager} onChange={handleChange} />
                    <input className="input m-2" type="text" placeholder="Company Name" name="companyName" value={inputData.companyName} onChange={handleChange} />
                </div>
                <div className="d-sm-flex one">
                    <input className="input m-2" type="text" placeholder="Company Website" name="companyWebsite" value={inputData.companyWebsite} onChange={handleChange} />
                    <input className="input m-2" type="text" placeholder="Company Location" name="companyLocation" value={inputData.companyLocation} onChange={handleChange} />
                </div>
                <div className="d-sm-flex two">
                    <textarea className="textarea1 m-2" type="text" placeholder="object" name="object" value={inputData.object} onChange={handleChange} style={{ width: '100%' }} />
                </div>
            </div>
            <div className="d-sm-flex justify-content-around m-2 button-div">
                <button onClick={handleClickBack} className="button1">
                    <span className="text">BACK</span>
                </button>
                <button onClick={handleClickNext} type="submit" className="button1"><span className="text">NEXT</span></button>
            </div>
        </div>
    );
};

export default CoverComponent;
