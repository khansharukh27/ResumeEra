import React, { useEffect, useState } from 'react';
import './previewcss/preview205.css';
import { useSelector } from 'react-redux';
import PdfDownloadButton from '../PdfDownloadButton'
import Toolbar from '../Toolbar';
export default function Preview203() {
    const [localData, setLocalData] = useState({});
    const [inputFields, setInputFields] = useState("resume.pdf");
    const [bgColor, setBgColor] = useState("white");
    const [fontStyle, setFontStyle] = useState("Arial");
    const [headingColor, setHeadingColor] = useState("black");
    const [fontColor, setFontColor] = useState("black");

    // Adding missing state for PDF formatting
    const [fontSize, setFontSize] = useState("12");
    const [headingSize, setHeadingSize] = useState("16");
    const [margin, setMargin] = useState("10");
    const [padding, setPadding] = useState("5");
    const [lineSpacing, setLineSpacing] = useState("1.5");
    const [sectionSpacing, setSectionSpacing] = useState("10");

    // Retrieve Redux state
    const reduxData = useSelector(
        (state) => state.reducer.personalInfo?.[0] || {}
    );

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("personalInfoData"));
        if (savedData) {
            setLocalData(savedData); // Set local data if available
        }
    }, []);

    const result = Object.keys(reduxData).length > 0 ? reduxData : localData;


    const dynamicStyle = {
        fontSize: fontSize,
        fontFamily: fontStyle,
        lineHeight: lineSpacing,
        color: fontColor,
        heading: {
            color: headingColor,
            fontSize: headingSize,
            fontFamily: fontStyle,
            lineHeight: lineSpacing,
        },
    };
    const changeAlignment = (alignment) => {
        document.execCommand('justify' + alignment, false, null);
    };
    
    const toggleStyle = (style) => {
        document.execCommand(style, false, null);
    };

    // Function to toggle lists (bullet and numbered)
    const toggleList = (listType) => {
        document.execCommand(listType, false, null);
    };

    return (
        <div className="d-md-flex justify-content-between marging">
<Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
            <div className="contentss mt-5" id='Alish_mirza'
            contentEditable
            suppressContentEditableWarning={true}
            spellCheck={true}
                style={{ width:'auto',backgroundColor: bgColor, margin: margin, 
                padding: padding ,height:'auto'}}>
                <header>
                    <div className="header-left" style={{padding:'10px'}}>
                        <h3 style={dynamicStyle.heading}>{result.fullname}</h3>
                        <h3 style={dynamicStyle}>{result.jobposition}</h3>
                    </div>

                    <div className="header-right ">
                        <p className='text-end' style={dynamicStyle}>{result.email} <span className="icon" >✉️</span></p>
                        <p className='text-end' style={dynamicStyle}>{result.mobileNumber} <span className="icon" >📞</span></p>
                        <p className='text-end' style={dynamicStyle}>{result.city}, {result.state || "CA"} <span className="icon" >📍</span></p>
                        <p className='text-end' style={dynamicStyle}>{result.linkedin} <span className="icon" >🔗</span></p>
                    </div>
                </header>

                <div style={{lineHeight:sectionSpacing}}>
                    <p style={dynamicStyle}><>To:</></p>
                    <p style={dynamicStyle}>{result.hiringManager}</p>
                    <p style={dynamicStyle}>Human Resources Manager</p>
                    <p style={dynamicStyle}>Optimal Workplace Inc.</p>
                    <p style={dynamicStyle}>321 Employment Avenue</p>
                    <p style={dynamicStyle}>San Francisco, CA</p>
                    <br />
                    <p style={dynamicStyle}>Dear {result.hiringManager},</p>
                    <p style={dynamicStyle}>{result.object}</p>
                    
                    <br />
                    <p style={dynamicStyle}>Sincerely,</p>
                    <p style={dynamicStyle}>{result.fullname}</p>
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
    );
}
