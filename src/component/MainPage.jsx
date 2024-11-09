import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
// import WorkExperience from "./WorkExperience";
import '../css/mainpage.css';
// import CoverComponent from "./CoverComponent";

const MainPage = (props) => {
    // Using array destructuring for useState hooks
    const [personalInfo, setPersonalInfo] = useState(true);
    const [ setWorkExperience] = useState(false);
    
    const { hoveredImage, CoverImage } = props;
    
    // Ensure CoverImage is an array to avoid errors
    const result = Array.isArray(CoverImage) ? CoverImage.map((res) => res.id) : []; 
    const location = useLocation();

    // Using useEffect to update state based on URL path
    useEffect(() => {
        if (location.pathname === `/cover_letter/${result}`) {
            setPersonalInfo(false);
            setWorkExperience(true);
        } else if (location.pathname === `/mainpage/${hoveredImage}`) {
            setPersonalInfo(true);
            setWorkExperience(false);
        } else if (location.pathname === `/techmain/${hoveredImage}`) {
            setPersonalInfo(true);
            setWorkExperience(false);
        }
    },[location.pathname, hoveredImage, result]);

    return (
        <div className="mt-2 mainpage" data-aos="flip-left" data-aos-duration="2000">
            { personalInfo && <PersonalInfo /> }
            {/* { workExperience && <CoverComponent CoverImage={CoverImage} /> } */}
        </div>
    );
};

export default MainPage;
