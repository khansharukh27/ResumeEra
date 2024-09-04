// import { Link } from "react-router-dom"
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
// import { useState } from "react";
import WorkExperience from "./WorkExperience";
import KeySkills from "./KeySkill";
import Language from "./Language";
import Hobbies from "./Hobbies";
import SocialMedia from "./SocialMedia";
import '../css/mainpage.css'

const MainPage = (props) => {
    const {path,hoveredImage} = props;
    return (
           
            <div className=" mt-2 mainpage" data-aos="flip-left" data-aos-duration="2000">
                { <PersonalInfo />}
                {/* { <WorkExperience />}
                {<Education />}
                { <KeySkills hoveredImage={hoveredImage} />}
                { (<Hobbies/>)}
                { (<Language/>)}
                { (<SocialMedia/>)} */}

            </div>
    )
}
export default MainPage;