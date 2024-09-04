import { useState, useEffect } from "react";
import Hobbies from "./Hobbies";
// import KeySkills from "./KeySkill";
import { useDispatch } from "react-redux";
import { socialMediaLink } from "../Redux/action";
import SoftSkills from "./SoftSkills";

const SocialMedia = () => {
    const [textInput, setTextInput] = useState(() => {
        // Load social media links from local storage if available
        const savedLinks = localStorage.getItem("socialMediaLinks");
        return savedLinks ? JSON.parse(savedLinks) : { linkedin: '', github: '', twitter: '' };
    });

    const [showHobbies, setShowHobbies] = useState(false);
    const [showSoftSkills, setShowSoftSkills] = useState(false);
    const [showSocialMedia, setShowSocialMedia] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        // Save social media links to local storage whenever they change
        localStorage.setItem("socialMediaLinks", JSON.stringify(textInput));
    }, [textInput]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTextInput((prev) => ({
            ...prev,
            [name]: value.toUpperCase()
        }));
    };

    const handleClickBack = () => {
        setShowHobbies(true);
        setShowSoftSkills(false);
        setShowSocialMedia(false);
    };

    const handleClickNext = (e) => {
        e.preventDefault()
        setShowHobbies(false);
        setShowSoftSkills(true);
        setShowSocialMedia(false);
        dispatch(socialMediaLink(textInput));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(socialMediaLink(textInput));
    };

    const handleDelete = (index) => {
        setTextInput((prev) => (
            prev.filter((_, i) => i !== index)
        ));
    };

    return (
        <form onSubmit={handleSubmit} style={{}} className="ms-3">
            {showSocialMedia && (
                <div className=" ">
                    <div className="profetional-detail">
                        <h1 className="multicolor-heading">
                            Your Social Media Links
                        </h1>
                        <p>
                            Including social media details in a resume is important because
                            it allows employers to gain a deeper insight into your professional
                            brand and online presence. Platforms like LinkedIn showcase your professional
                            network, endorsements, and additional qualifications that might not fit within the
                            traditional resume format. For creative professionals, links to portfolios on platforms
                            like Behance or GitHub can demonstrate your work and projects in a real-world context.
                            Social media profiles also offer a way to highlight your industry engagement, thought
                            leadership, and communication skills. Providing these details can make you more relatable
                            and transparent, offering employers a more comprehensive view of your professional identity.
                        </p>
                    </div>

                    <div className=" " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='d-flex'>
                            <input
                                type="text"
                                className="input mb-2 me-2"
                                name='linkedin'
                                placeholder="LinkedIn Profile Link"
                                onChange={handleChange}
                                value={textInput.linkedin}
                            />
                            <button className="button1" onClick={(index) => handleDelete(index)}><span>Delete</span> </button>
                        </div>
                        <div className='d-flex'>
                            <input
                                type="text"
                                className="input mb-2 me-2"
                                name='github'
                                placeholder="GitHub Link"
                                onChange={handleChange}
                                value={textInput.github}
                            />
                            <button className="button1" onClick={(index) => handleDelete(index)}><span>Delete</span></button>

                        </div>
                        <div className='d-flex'>
                            <input
                                type="text"
                                className="input mb-2 me-2"
                                name='twitter'
                                placeholder="Twitter Link"
                                onChange={handleChange}
                                value={textInput.twitter}
                            />
                            <button className="button1" onClick={(index) => handleDelete(index)}><span>Delete</span></button>

                        </div>

                    </div>
                    <hr className="mb-5" />
                    <div className="d-flex justify-content-around" style={{}}>
                        <button className="button1" onClick={handleClickBack}>
                            <span className="text">BACK</span>
                        </button>
                        <button className="button1" onClick={handleClickNext} type="submit">
                            <span className="text">NEXT</span>
                        </button>
                    </div>
                </div>
            )}
            {showHobbies && (<Hobbies />)}
            {showSoftSkills && (<SoftSkills />)}
        </form>
    );
};

export default SocialMedia;
