import { useState } from "react";
import Hobbies from "./Hobbies";
import KeySkills from "./KeySkill";
import { useDispatch } from "react-redux";
import { socialMediaLink } from "../Redux/action";

const SocialMedia = () => {
    const [textInput, setTextInput] = useState({
        linkedin:'',
        github:'',
        twitter:''
    })
    const [showHobbies, setShowHobbies] = useState(false)
    const [showKeySkills, setShowKeySkills] = useState(false)
    const [showSocialMedia, setShowSocialMedia] = useState(true)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name,value} = e.target
        setTextInput((prev) =>({
            ...prev,
            [name]:value
        }))
    }

    // const handleDelete = (index) => {

    //     setTextInput((prev) => {
    //         return prev.filter((_, i) => i !== index)
    //     })
    // }

    // const handleAddmore = () => {
    //     setTextInput([...textInput, { social_1: '' }])
    // }

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
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(socialMediaLink(textInput))
    }
    return (
        <form onSubmit={handleSubmit}>
            {showSocialMedia && (
                <div>
                    <div>
                            <input type="text" className="input" name='linkedin' placeholder="LinkedIn Profile Link" onChange={handleChange} value={textInput.linkedin} />
                            <input type="text" className="input" name='github' placeholder="git hub link" onChange={handleChange} value={textInput.github} />
                            <input type="text" className="input" name='twitter' placeholder="twitter link" onChange={handleChange} value={textInput.twitter} />
                        </div>
                    

                    <div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="" onClick={handleClickBack}>
                            <span class="text">BACK</span>
                        </button>
                        <button onClick={handleClickNext} type="submit"><span className="text">NEXT</span></button>

                    </div>
                </div>
            )}
            {showHobbies && (<Hobbies/>)}
            {showKeySkills && (<KeySkills/>)}
        </form>
    )
}
export default SocialMedia