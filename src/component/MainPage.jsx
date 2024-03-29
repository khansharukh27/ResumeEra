import { Link } from "react-router-dom"
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import { useState } from "react";
import WorkExperience from "./WorkExperience";
import KeySkills from "./KeySkill";
import Language from "./Language";
import Hobbies from "./Hobbies";
import SocialMedia from "./SocialMedia";
import '../component/previewfolder/CSS/mainpage.css'

const MainPage = (props) => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(true);
    const [showEducation, setShowEducation] = useState(false);
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    const [showKeySkills, setShowKeySkills] = useState(false);
    const [showLanguage,setShowLanguage] = useState(false)
    const [showHobbies,setShowHobbies] = useState(false);
    const [showSocialMedia,setShowSocialMedia] = useState(false);

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
            setShowSocialMedia(false)
           
        } else if (pathnam === `${path}/workexperience`) {
            setShowPersonalInfo(false);
            setShowWorkExperience(true);
            setShowEducation(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)
            setShowSocialMedia(false)
           
        } else if (pathnam === `${path}/education`) {
            setShowPersonalInfo(false);
            setShowEducation(true);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)
            setShowSocialMedia(false)
        }else if(pathnam === `${path}/language`){    
            setShowPersonalInfo(false);
            setShowEducation(false);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(true)
            setShowHobbies(false)
            setShowSocialMedia(false)
        }else if(pathnam === `${path}/hobbies`){    
            setShowPersonalInfo(false);
            setShowEducation(false);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(true)    
            setShowSocialMedia(false)
        }else if(pathnam === `${path}/socialmedia`){    
            setShowPersonalInfo(false);
            setShowEducation(false);
            setShowWorkExperience(false);
            setShowKeySkills(false);
            setShowLanguage(false)
            setShowHobbies(false)    
            setShowSocialMedia(true)    
        } else if (pathnam === `${path}/keyskills`) {
            setShowPersonalInfo(false);
            setShowKeySkills(true);
            setShowEducation(false);
            setShowWorkExperience(false);
        }
        
    };

    return (
        <div className=" d-sm-flex justify-content-around border mainpage">
            <div className='card me-2' style={{height:'80%'}}>
                <div><Link to={`/${path}/personalinfo`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick}>Personal info</Link></div>
                <div><Link to={`/${path}/workexperience`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick} >Work Experience</Link></div>
                <div><Link to={`/${path}/education`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick}>Education</Link></div>
                <div><Link to={`/${path}/language`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick}>language</Link></div>
                <div><Link to={`/${path}/hobbies`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick}>Hobbies</Link></div>
                <div><Link to={`/${path}/socialmedia`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick} >Social Media Link</Link></div>
                <div><Link to={`/${path}/keyskills`} style={{ textDecoration: 'none',color:'white' }} onClick={handleClick} >Key Skills</Link></div>
                
                
            </div>
            <div className=" mt-2 ms-5" data-aos="flip-left" data-aos-duration="2000">
            
                {showPersonalInfo && <PersonalInfo />}
                {showWorkExperience && <WorkExperience />}
                {showEducation && <Education />}
                {showKeySkills && <KeySkills hoveredImage={hoveredImage} />}
                {showHobbies && (<Hobbies/>)}
                {showLanguage && (<Language/>)}
                {showSocialMedia && (<SocialMedia/>)}

            </div>
        </div>
    )
}
export default MainPage;