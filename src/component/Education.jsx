import { useState } from "react"
import WorkExperience from "./WorkExperience"
import { useDispatch } from "react-redux"
import { educationData} from "../Redux/action"
import Language from "./Language"


const Education = ({images}) => {
    const [showEducation, setShowEducation] = useState(true)
    const [showWorkExperience, setShowWorkExperience] = useState(false)
    const [showLanguage,setShowLanguage] = useState(false)
    const [education, setEducation] = useState([{
        type: '',
        univercity: '',
        degree: '',
        startYear: '',
        endYear: ''
    }])
    console.log('education images:=',images)

    const dispatch = useDispatch();

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setEducation((prev) => {
            const updateEducation = [...prev];
            updateEducation[index] = {
                ...updateEducation[index],
                [name]: value
            }
            return updateEducation
        })
    }
    const handleClickBack = (e) => {
        e.preventDefault()
        setShowWorkExperience(true)
        setShowEducation(false)
       setShowLanguage(false)
    }

    const handleClickNext = (e) => {
        e.preventDefault()
        setShowWorkExperience(false)
        setShowEducation(false)
        setShowLanguage(true)
        dispatch(educationData(education))
        console.log('education in education:-', education)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(educationData(education))
        console.log('education in education:-', education)
    }
    const handleAddMore = () => {
        setEducation([...education, { type: '', univercity: '', degree: '', startYear: '', endYear: '' }])
    }
    const handleDelete = (index) => {
       
        setEducation((prev)=>{
            return prev.filter((_,i)=>i !== index)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            {showEducation && (

                <div>
                    {education.map((edu, index) => (
                        <div key={index}>
                            <h1>Education {index+1}</h1>
                            <hr className="m-3" />
                            <select class="form-select input bg-dark "  onChange={(e) => handleChange(e, index)} aria-label="Default select example" name="type" value={edu.type} >
                                <option defaultValue='B.sc'>Education Type</option>
                                <option value="B.sc">B.sc</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="another">another</option>
                            </select>
                            <div className="d-sm-flex justify-content-between">
                                <input className="input m-2" onChange={(e) => handleChange(e, index)} type="text" placeholder="Univercity" name="univercity" value={edu.univercity} />
                                <input className="input m-2" onChange={(e) => handleChange(e, index)} type="text" placeholder="Degree" name="degree" value={edu.degree} />
                            </div>
                            <div>
                                <input className='input m-2' onChange={(e) => handleChange(e, index)} type="text" placeholder="startYear" name="startYear" value={edu.startYear} />
                                <input className="input m-2" onChange={(e) => handleChange(e, index)} type="text" placeholder="endYear" name="endYear" value={edu.endYear} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" className=" m-2" onClick={()=>handleDelete(index)}><span class="text">delete</span></button>
                            </div>

                        </div>

                    ))}
                    <hr />
                    <div className="d-flex justify-content-center m-2">
                        <button  type="button" onClick={handleAddMore}><span class="text">ADD MORE</span></button>
                    </div>
                    <div className='d-flex justify-content-between m-2'>
                        <button onClick={handleClickBack} type="button" ><span class="text">BACK</span></button>
                        <button onClick={handleClickNext} type="submit"><span className="text">NEXT</span></button>
                    </div>
                </div>

            )}
            {showWorkExperience && (<WorkExperience />)}
            {showLanguage && (<Language/>)}
        </form>
    )
}
export default Education