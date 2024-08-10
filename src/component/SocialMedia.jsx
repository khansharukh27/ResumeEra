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
                <div className=" ">
                    <div className="profetional-detail">
                        <h1 className="multicolor-heading">
                            Your Social Media link
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
                        and transparent, 
                        offering employers a more comprehensive view of your professional identity.
                        </p>
                    </div>

                    <div className=" " style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                            <input type="text" className="input mb-2" name='linkedin' placeholder="LinkedIn Profile Link" onChange={handleChange} value={textInput.linkedin} />
                           <input type="text" className="input mb-2" name='github' placeholder="GitHub link" onChange={handleChange} value={textInput.github} />
                        <input type="text" className="input mb-2" name='twitter' placeholder="Twitter link" onChange={handleChange} value={textInput.twitter} />

                        
                    </div>
                    <hr className="mb-5"/>
                    <div className="d-flex justify-content-between" style={{  }}>
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
            {showKeySkills && (<KeySkills />)}
        </form>
    )
}

export default SocialMedia;
