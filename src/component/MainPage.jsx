import { Link } from "react-router-dom"
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { useState } from "react";
import WorkExperience from "./WorkExperience";
import KeySkills from "./KeySkill";
import Language from "./Language";
import Hobbies from "./Hobbies";

const MainPage = (props) => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(true);
    const [showEducation, setShowEducation] = useState(false);
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    const [showKeySkills, setShowKeySkills] = useState(false);
    const [showLanguage,setShowLanguage] = useState(false)
    const [showHobbies,setShowHobbies] = useState(false);

    const {path,hoveredImage} = props;
    console.log('path in mainpage:-',path)
    console.log('main page hoverdImage:-;',hoveredImage)




    const handleClick = (e) => {
        e.preventDefault();
        const pathnam = `${path}`+e.target.pathname.slice(2).toLowerCase()
        // const pathnam = `${path}${pathnam}`
        console.log('pathnam:-', pathnam);
        // console.log('pathnam',pathnam)
        // console.log('all pathh:-',`/${path}${pathnam}`)
    
        if (pathnam === `${path}/personalinfo`) {
            setShowPersonalInfo(true);
            setShowWorkExperience(false);
            setShowEducation(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)
           
        } else if (pathnam === `${path}/workexperience`) {
            setShowPersonalInfo(false);
            setShowWorkExperience(true);
            setShowEducation(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)
           
        } else if (pathnam === `${path}/education`) {
            setShowPersonalInfo(false);
            setShowEducation(true);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)
        }else if(pathnam === `${path}/language`){    
            setShowPersonalInfo(false);
            setShowEducation(false);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(true)
            setShowHobbies(false)
        }else if(pathnam === `${path}/hobbies`){    
            setShowPersonalInfo(false);
            setShowEducation(false);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(true)    
        } else if (pathnam === `${path}/keyskills`) {
            setShowPersonalInfo(false);
            setShowKeySkills(true);
            setShowEducation(false);
            setShowWorkExperience(false);
        }
        
    };

    return (
        <div className="container d-sm-flex mt-sm-4 m-2 p-2 justify-content-between border">
            <div className='card me-2' style={{height:'100%'}}>
                <div><Link to={`/${path}/personalinfo`} style={{ textDecoration: 'none' }} onClick={handleClick}>Personal info</Link></div>
                <div><Link to={`/${path}/workexperience`} style={{ textDecoration: 'none' }} onClick={handleClick} >Work Experience</Link></div>
                <div><Link to={`/${path}/education`} style={{ textDecoration: 'none' }} onClick={handleClick}>Education</Link></div>
                <div><Link to={`/${path}/language`} style={{ textDecoration: 'none' }} onClick={handleClick}>language</Link></div>
                <div><Link to={`/${path}/hobbies`} style={{ textDecoration: 'none' }} onClick={handleClick}>Hobbies</Link></div>
                <div><Link to={`/${path}/keyskills`} style={{ textDecoration: 'none' }} onClick={handleClick} >Key Skills</Link></div>
                
            </div>
            <div className="secondDiv mt-2" data-aos="flip-left" data-aos-duration="2000">
            
                {showPersonalInfo && <PersonalInfo />}
                {showWorkExperience && <WorkExperience />}
                {showEducation && <Education />}
                {showKeySkills && <KeySkills hoveredImage={hoveredImage} />}
                {showHobbies && (<Hobbies/>)}
                {showLanguage && (<Language/>)}

            </div>
        </div>
    )
}
export default MainPage;