import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview12.css'
import GoogleAd from '../adFolder/GoogleAd';

const Preview12 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [headingColor, setHeadingColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')
    const [fontSize, setFontSize] = useState(16); // Initial font size for paragraphs
    const [fontSizeheading, setFontSizeheading] = useState(16); // Initial font size for headings

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies]);
    const keyskills = useSelector((state) => [state.reducer.keySkills]);
    const work = useSelector((state) => [state.reducer.workExperience]);
    const sMedia = useSelector((state) => [state.reducer.socialMediaLink])
    const result = useSelector((state) => [state.reducer])
    console.log('reducer:-', result)


    const lineStyle = {
        height: '5px',
        width: '75%',
        background: 'linear-gradient(to right, darkgrey 75%, white 75%)',
        margin: '20px auto',
        borderRadius: '5px',
        border: '1px solid grey'
    };

    return (
        <div>
            <GoogleAd/>
               <GoogleAd/>
               <h1>coming soon...</h1>
                 </div>
    )
}
export default Preview12;