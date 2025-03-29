import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
// import WorkExperience from "./WorkExperience";
import '../css/mainpage.css';
import PersonalInfoForm from "./Shadi Card/PersonalInfoForm";
// import CoverComponent from "./CoverComponent";

const MainPage = (props) => {
    // Using array destructuring for useState hooks
    const [personalInfo, setPersonalInfo] = useState(true);
    const [ setWorkExperience] = useState(false);
    const [personalInfoForm,setPersonalInfoForm] = useState(false);
    
    const { hoveredImage, CoverImage } = props;
    console.log("hoveredImage:-",hoveredImage)
    // Ensure CoverImage is an array to avoid errors
    const result = Array.isArray(CoverImage) ? CoverImage.map((res) => res.id) : []; 
    const location = useLocation();
console.log("location:-",location.pathname)
    // Using useEffect to update state based on URL path
    useEffect(() => {
        if (location.pathname === `/cover_letter/${result}`) {
            setPersonalInfo(false);
            setWorkExperience(true);
            setPersonalInfoForm(false);
        } else if (location.pathname === `/mainpage/${hoveredImage}`) {
            setPersonalInfo(true);
            setWorkExperience(false);
            setPersonalInfoForm(false);
        } else if (location.pathname === `/techmain/${hoveredImage}`) {
            setPersonalInfo(true);
            setWorkExperience(false);
            setPersonalInfoForm(false);
        }else if (location.pathname === `/freshertemplate/${hoveredImage}`) {
            setPersonalInfo(true);
            setWorkExperience(false);
            setPersonalInfoForm(false);
            
        }else if (location.pathname === `/shadi-card/${hoveredImage}`) {
            setPersonalInfoForm(true);
            setPersonalInfo(false);
            setWorkExperience(false);
            
        }

    },[location.pathname, hoveredImage, result]);
    return (
        <div className="mt-2 mainpage" data-aos="flip-left" data-aos-duration="2000">
            { personalInfo && <PersonalInfo /> }
            { personalInfoForm && <PersonalInfoForm /> }
            {/* { workExperience && <CoverComponent CoverImage={CoverImage} /> } */}
        </div>
    );
};

export default MainPage;
