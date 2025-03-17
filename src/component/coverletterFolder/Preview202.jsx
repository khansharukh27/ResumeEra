import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '.././previewfolder/CSS/Preview201.css'
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import '../../component/previewfolder/CSS/preview202.css';
import PdfDownloadButton from "../PdfDownloadButton";
import GoogleAd from "../adFolder/GoogleAd";
const Preview202 = () => {
    const [localData, setLocalData] = useState({});
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white');
    const [fontStyle, setFontStyle] = useState('Arial');
    const [headingColor, setHeadingColor] = useState('black');
    const [fontColor, setFontColor] = useState('black');
    
    // Adding missing state for PDF formatting
    const [fontSize, setFontSize] = useState('12');
    const [headingSize, setHeadingSize] = useState('16');
    const [margin, setMargin] = useState('10');
    const [padding, setPadding] = useState('5');
    const [lineSpacing, setLineSpacing] = useState('1.5');
    const [sectionSpacing, setSectionSpacing] = useState('10');
    

    
    // Retrieve Redux state
    const reduxData = useSelector((state) => state.reducer.personalInfo?.[0] || {});

    // Check if there is data in localStorage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('personalInfoData'));
        if (savedData) {
            setLocalData(savedData);  // Set local data if available
        }
    }, []);

    // Combine redux data with local data, prioritize redux data
    const result = Object.keys(reduxData).length > 0 ? reduxData : localData;

    return (
        <div >
            <GoogleAd/>
            <GoogleAd/>
            <div className="preview-container202">
            <div className="preview202" id='Alish_mirza' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle,margin:margin,padding:padding }}
             contentEditable
             suppressContentEditableWarning={true}
             spellCheck={false}
            >
                <header className="header" style={{lineHeight:sectionSpacing}}>
                    <h3 style={{ color: headingColor, textAlign: 'center', fontWeight: '900' , fontSize: headingSize,lineHeight:lineSpacing }}>
                        {result.fullname}
                    </h3>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.mobileNumber}</p>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.email}</p>
                </header>
                <hr style={{ width: 'inherit' }} />
                <div className="your-object-202" style={{lineHeight:sectionSpacing}}>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>DEAR {result.hiringManager}</p>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.object}</p>
                </div>
                <div className="sincerely-201" style={{ fontWeight: 'bolder',lineHeight:sectionSpacing }}>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>SINCERELY</p>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.fullname}</p>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.mobileNumber}</p>
                    <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.email}</p>
                </div>
            </div>
            
            {/* Pass props to PdfDownloadButton if needed */}
            <PdfDownloadButton
                inputFields={inputFields}
                setInputFields={setInputFields}
                bgColor={bgColor}
                setBgColor={setBgColor}
                fontStyle={fontStyle}
                setFontStyle={setFontStyle}
                headingColor={headingColor}
                setHeadingColor={setHeadingColor}
                fontColor={fontColor}
                setFontColor={setFontColor}
                fontSize={fontSize}
                setFontSize={setFontSize}
                headingSize={headingSize}
                setHeadingSize={setHeadingSize}
                margin={margin}
                setMargin={setMargin}
                padding={padding}
                setPadding={setPadding}
                lineSpacing={lineSpacing}
                setLineSpacing={setLineSpacing}
                sectionSpacing={sectionSpacing}
                setSectionSpacing={setSectionSpacing}
                elementId="Alish_mirza"
            />
            </div>
            <GoogleAd/>
        </div>
    );
};

export default Preview202;
