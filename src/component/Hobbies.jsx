import { useDispatch } from "react-redux"
import { addHobbies } from "../Redux/action"
import { useState } from "react"
import KeySkills from "./KeySkill"
import Language from "./Language"
import SocialMedia from "./SocialMedia"


const Hobbies=()=>{
    const [input,setInput] = useState([{hobbies:''}])
    const [showLanguage,setShowLanguage] = useState(false)
    const [ showHobbies,setShowHobbies] = useState(true)
    const  [showSocialMedia,setShowSocialMedia] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addHobbies(input))
    }

    const handleAddMore =() =>{
        setInput((prev) =>[...prev,{hobbies:''}])
    }

    const handleClick=(e)=>{
        e.preventDefault()
        setShowLanguage(false)
        setShowHobbies(false)
        setShowSocialMedia(true)
        dispatch(addHobbies(input))
    }
    const handleClickBack = ()=>{
        setShowLanguage(true)
        setShowHobbies(false)
        setShowSocialMedia(false)
    }
    const handleChange=(e,index)=>{
        const {name,value} = e.target;
        setInput((prev)=>{
            const updateInput = [...prev];
            updateInput[index]= {
                ...updateInput[index],
                [name]:value
            }
            return updateInput;
        })
    }
    
    return(
        <form onSubmit={handleSubmit} style={{height:'600px'}}>
            {showHobbies && (

                <div>
                    <div style={{color:'white'}}><h1>Hobbies that's You Have</h1></div>
                    <hr className="mb-3"/>
                {input.map((inp,index)=>(
                    <div key={index}>
                     <input type="text" className="input" name='hobbies' value={inp.hobbies} onChange={(e)=>handleChange(e,index)} placeholder="Hobbies" style={{width:'100%', borderRadius:'5px'}}/>
    
                    </div>
                ))}
                <div className="d-flex justify-content-center mt-2"><button className=" text-center" type="button" onClick={handleAddMore}><span class="text">ADD MORE</span></button></div>
                <div className="d-flex justify-content-between mt-2">
                    <button type="button"  onClick={handleClickBack}><span class="text">BACK</span></button>
                    <button onClick={handleClick} type="submit"><span className="text">NEXT</span></button>

                </div>
                
                </div>
                
            )}
            {showSocialMedia &&(<SocialMedia/>)}
            {showLanguage &&(<Language/>)}
            
        </form>
    )
}
export default Hobbies;