import React, { useEffect, useState } from 'react';
import './previewcss/preview205.css';
import { useSelector } from 'react-redux';
import PdfDownloadButton from '../PdfDownloadButton'
import Toolbar from '../Toolbar';
export default function Preview204() {
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

  // Check if there is data in localStorage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalInfoData"));
    if (savedData) {
      setLocalData(savedData); // Set local data if available
    }
  }, []);

  // Combine redux data with local data, prioritize redux data
  const result = Object.keys(reduxData).length > 0 ? reduxData : localData;


  // Create a dynamic styles object
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
      <div className="contentss" id='Alish_mirza'
        contentEditable
        suppressContentEditableWarning={true}
        spellCheck={true}
        style={{
          width: 'auto', backgroundColor: bgColor, margin: margin,
          padding: padding, height: 'auto'
        }}>
        <div>
          <div className="text-center" style={{ padding: '10px' }}>
            <h3 style={{ ...dynamicStyle.heading, marginTop: '-8px' }}>{result.fullname}</h3>
            <small style={dynamicStyle}>{result.jobposition}</small>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <p className="text-start" style={dynamicStyle}><i class="me-2 fa-solid fa-envelope-open" style={{ color: '#789740', backgroundColor: 'white', borderRadius: '5px' }}></i>{result.mobileNumber}</p>
              <p className="text-start" style={dynamicStyle}><i class="me-2 fa-solid fa-envelope-open" style={{ color: '#789740', backgroundColor: 'white', borderRadius: '5px' }}></i>{result.email}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="text-end"><i class="me-2 fa-solid fa-mobile" style={{ color: '#789740', backgroundColor: 'white', borderRadius: '5px' }}></i>{result.linkedin}</p>
              <p className="text-end"><i class="me-2 fa-solid fa-location-dot" style={{ color: '#789740', backgroundColor: 'white', borderRadius: '5px' }}></i>{result.city} {result.state} {result.zipcode}</p>
            </div>
          </div>

        </div>
        <hr style={{ width: "inherit" }} />

        <div style={{ lineHeight: sectionSpacing }}>
          <p style={dynamicStyle}><>To:</></p>
          <p style={dynamicStyle}>{result.hiringManager}</p>
          <p style={dynamicStyle}>Human Resources Manager</p>
          <p style={dynamicStyle}>Optimal Workplace Inc.</p>
          <p style={dynamicStyle}>321 Employment Avenue</p>
          <p style={dynamicStyle}>San Francisco, CA</p>
          <br />

          <div className="d-flex justify-content-center" style={{height:'10px', width: '80%', alignItems: 'center', margin:'auto',marginBottom:'auto',marginTop:'auto' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: 'blue',marginRight:'-2px' }}></div>
            <div style={{ width: '100%', height: '5px', borderRadius: '5px', backgroundColor: 'blue' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: 'blue',marginLeft:'-2px' }}></div>
          </div>
          <p style={dynamicStyle}>Dear {result.hiringManager},</p>
          <p style={dynamicStyle}>{result.object}</p>

          <br />
          
          <div className="d-flex justify-content-center" style={{ height:'10px',width: '80%', alignItems: 'center', margin:'auto',marginBottom:'auto',marginTop:'auto' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: 'blue',marginRight:'-2px' }}></div>
            <div style={{ width: '100%', height: '5px', borderRadius: '5px', backgroundColor: 'blue' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: 'blue',marginLeft:'-2px' }}></div>
          </div>
          <p style={dynamicStyle}>Sincerely,</p>
          <p style={dynamicStyle}>{result.fullname}</p>
          <div className=" ">
            <p className='' style={dynamicStyle}>{result.email} </p>
            <p className='' style={dynamicStyle}>{result.mobileNumber} </p>
            <p className='' style={dynamicStyle}>{result.city}, {result.state || "CA"} </p>
            <p className='' style={dynamicStyle}>{result.linkedin} </p>
          </div>
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
