import { useState } from "react"
import { useDispatch } from "react-redux"
import { addLanguage } from "../Redux/action"
import Education from "./Education"
import Hobbies from "./Hobbies"


const Language=()=>{
    const [inputLanguage,setInputLanguage] = useState([{language:''}])
    const [showEducation,setShowEducation] = useState(false);
    const [showLanguage,setShowLanguage] = useState(true);
    const [showHobbies,setShowHobbies] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addLanguage(inputLanguage))
    }

    const handleClick = (e)=>{
        e.preventDefault()
       setShowHobbies(true)
        setShowEducation(false)
        setShowLanguage(false)
        dispatch(addLanguage(inputLanguage))
    }
    const handleClickBack=(e)=>{
        setShowEducation(true)
        setShowHobbies(false)
        setShowLanguage(false)
    }

    const handleChange = (e,index) =>{
        const {name,value} = e.target
        setInputLanguage((prev) =>{
            const updateInputLanguage = [...prev]
            updateInputLanguage[index] ={
                ...updateInputLanguage[index],
                [name]:value
            }
            return updateInputLanguage
        })
    }
    const handleAddMore = () =>{
        setInputLanguage((prev)=>[...prev,{language:''}])
    }


    return (
        <div onSubmit={handleSubmit}>
            
            {showLanguage &&(
                <div>
                    <div><h1>Language that's You Know</h1></div>
                    <hr className="mb-3"/>
                {inputLanguage.map((inputLan,index) =>(
                    <div key={index}>
                        <input className="input w-100 p-2" style={{borderRadius:'5px'}} type="text" placeholder={`language ${index+1}`} name="language" value={inputLan.language} onChange={(e)=>handleChange(e,index)}/>        
                    </div>
    
                ))}
                <div className="mt-2 text-center">
                    <button type="button"  onClick={handleAddMore}><span class="text">ADD MORE</span></button></div>
    
                <div className="d-flex justify-content-between mt-2">
                    <button  type='button' onClick={handleClickBack} ><span class="text">BACK</span></button>
                <button onClick={handleClick} type="submit"><span className="text">NEXT</span></button>
                </div>
                </div>    
            )}
           {showEducation && (<Education/>)}
           {showHobbies && (<Hobbies/>)}
            
            
        </div>
    )
}
export default Language;