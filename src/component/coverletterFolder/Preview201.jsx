import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '.././previewfolder/CSS/Preview201.css'
import { useNavigate } from "react-router-dom";
import PdfDownloadButton from "../PdfDownloadButton";
import GoogleAd from "../adFolder/GoogleAd";
const Preview201 = () => {
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
    

   
    const navigate = useNavigate();

    
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

    // Check if required fields are available
    const hasRequiredData = result && result.fullname && result.jobposition;

    return (
        <div className="">
            <div>
                <GoogleAd/>
            </div>
            <div className="preview-container201"
            style={{ margin:margin,padding:padding }}
            contentEditable
            suppressContentEditableWarning={true}
            spellCheck={false}
            >
                <div className="preview201" id='Alish_mirza' style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle }}>
                    {hasRequiredData ? (
                        <div className="name-201">
                            <h3 style={{ color: headingColor,lineHeight:lineSpacing,fontSize:headingSize,fontFamily:fontStyle}}>{result.fullname}
                                <br />
                            </h3>
                            <p>{result.jobposition}</p>
                        </div>
                    ) : (
                        <p>Loading or No data available...</p> // Fallback message
                    )}
                    <div className="contact-201" style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }} >
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.email}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.mobileNumber}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.city} {result.state}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.linkedin}</p>
                    </div>
                    <div className="company-detail-201">
                        To <br />
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.hiringManager}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.companyName}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.companyWebsite}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.companyLocation}</p>
                    </div>
                    <div className="your-object-201">
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>DEAR {result.hiringManager}</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.object}</p>
                    </div>
                    <div className="sincerely-201"><p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>SINCERELY</p>
                        <p style={{ color: fontColor,lineHeight:lineSpacing,fontSize:fontSize,fontFamily:fontStyle, }}>{result.fullname}</p>
                    </div>
                </div>
                
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
            <div><GoogleAd/></div>
        </div>
    );
};

export default Preview201;
