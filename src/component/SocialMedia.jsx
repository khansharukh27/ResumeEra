import { useState } from "react";
import Hobbies from "./Hobbies";
import KeySkills from "./KeySkill";
import { useDispatch } from "react-redux";
import { socialMediaLink } from "../Redux/action";

const SocialMedia = () => {
    const [textInput, setTextInput] = useState({
        linkedin: '',
        github: '',
        twitter: ''
    })
    const [showHobbies, setShowHobbies] = useState(false)
    const [showKeySkills, setShowKeySkills] = useState(false)
    const [showSocialMedia, setShowSocialMedia] = useState(true)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setTextInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClickBack = () => {
        setShowHobbies(true)
        setShowKeySkills(false)
        setShowSocialMedia(false)
    }

    const handleClickNext = () => {
        setShowHobbies(false)
        setShowKeySkills(true)
        setShowSocialMedia(false)
        dispatch(socialMediaLink(textInput))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(socialMediaLink(textInput))
    }

    return (
        <form onSubmit={handleSubmit} style={{ height: '600px' }} className="ms-3">
            {showSocialMedia && (
                <div className=" " style={{ height: '100%' }}>
                    <div className=" ">
                        
                            <input type="text" className="input" name='linkedin' placeholder="LinkedIn Profile Link" onChange={handleChange} value={textInput.linkedin} />
                           <input type="text" className="input" name='github' placeholder="GitHub link" onChange={handleChange} value={textInput.github} />
                        <input type="text" className="input" name='twitter' placeholder="Twitter link" onChange={handleChange} value={textInput.twitter} />

                        
                    </div>
                    <hr className="mb-5"/>
                    <div className="d-flex justify-content-between" style={{  }}>
                        <button className="" onClick={handleClickBack}>
                            <span className="text">BACK</span>
                        </button>
                        <button onClick={handleClickNext} type="submit">
                            <span className="text">NEXT</span>
                        </button>
                    </div>
                </div>
            )}
            {showHobbies && (<Hobbies />)}
            {showKeySkills && (<KeySkills />)}
        </form>
    )
}

export default SocialMedia;
