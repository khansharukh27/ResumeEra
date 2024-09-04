// import { Link } from "react-router-dom"
import PersonalInfo from "./PersonalInfo";
// import { useState } from "react";

import '../css/mainpage.css'

const Techmain = () => {
    return (
           
            <div className=" mt-2 mainpage" data-aos="flip-left" data-aos-duration="2000">
                { <PersonalInfo />}
            </div>
    )
}
export default Techmain;