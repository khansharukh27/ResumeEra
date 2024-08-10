import { useState } from "react"
import { useDispatch } from "react-redux"
import { addLanguage } from "../Redux/action"
import Education from "./Education"
import Hobbies from "./Hobbies"


const Language = () => {
    const [inputLanguage, setInputLanguage] = useState([{ language: '' }])
    const [showEducation, setShowEducation] = useState(false);
    const [showLanguage, setShowLanguage] = useState(true);
    const [showHobbies, setShowHobbies] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addLanguage(inputLanguage))
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShowHobbies(true)
        setShowEducation(false)
        setShowLanguage(false)
        dispatch(addLanguage(inputLanguage))
    }
    const handleClickBack = (e) => {
        setShowEducation(true)
        setShowHobbies(false)
        setShowLanguage(false)
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target
        setInputLanguage((prev) => {
            const updateInputLanguage = [...prev]
            updateInputLanguage[index] = {
                ...updateInputLanguage[index],
                [name]: value
            }
            return updateInputLanguage
        })
    }
    const handleAddMore = () => {
        setInputLanguage((prev) => [...prev, { language: '' }])
    }
    const handleDelete = (index) => {
        setInputLanguage((prev) => prev.filter((_, i) => i !== index));
    };


    return (
        <div onSubmit={handleSubmit}>

            {showLanguage && (
                <div>
                    <div className="profetional-detail">
                        <h1 className="multicolor-heading">Language that's You Know</h1>
                        <p>
                        Including languages in a resume is important because it demonstrates 
                        your communication abilities and cultural awareness, which can be 
                        crucial in today's globalized job market. Proficiency in multiple 
                        languages can set you apart from other candidates, making you a more 
                        versatile and valuable asset to potential employers. It shows that you 
                        can effectively interact with clients, colleagues, and stakeholders from 
                        different linguistic backgrounds, thereby expanding the scope of your 
                        professional opportunities. Additionally, listing your language skills 
                        highlights your dedication to learning and adapting, which are qualities 
                        that many employers highly value.
                        </p>
                        </div>
                    <hr className="mb-3" />
                    {inputLanguage.map((inputLan, index) => (
                        <div key={index} className="" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                            <input className="input w-100" 
                            style={{ borderRadius: '5px' ,padding:'10px',marginTop:'7px'}} 
                            type="text" 
                            placeholder={`language ${index + 1}`} 
                            name="language" 
                            value={inputLan.language} 
                            onChange={(e) => handleChange(e, index)} />
                            <div className="d-flex justify-content-around mt-2">
                            <button onClick={()=>handleDelete(index)} type="button" className="button1 ms-2"><span>Delete</span></button>
                            </div>
                        </div>

                    ))}
                    <div className="mt-2 d-flex justify-content-center align-item-center">
                        <button className="button1" type="button" onClick={handleAddMore}><span class="text">ADD MORE</span></button></div>

                    <div className="d-flex justify-content-around mt-2">
                        <button className="button1" type='button' onClick={handleClickBack} ><span class="text">BACK</span></button>
                        <button onClick={handleClick} type="submit" className="button1"><span className="text">NEXT</span></button>
                    </div>
                </div>
            )}
            {showEducation && (<Education />)}
            {showHobbies && (<Hobbies />)}


        </div>
    )
}
export default Language;