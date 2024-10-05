// import { Link } from "react-router-dom"
import PersonalInfo from "./PersonalInfo";
// import { useState } from "react";

import '../css/mainpage.css'

const CoverComponent = ({CoverImage}) => {
    console.log('coverImage:',CoverImage)
    return (
           
            <div className=" mt-2 mainpage" data-aos="flip-left" data-aos-duration="2000">
                { <PersonalInfo CoverImage={CoverImage} />}
            </div>
    )
}
export default CoverComponent;