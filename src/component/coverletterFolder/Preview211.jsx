import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import ".././previewfolder/CSS/Preview201.css";
import PdfDownloadButton from "../PdfDownloadButton";
import GoogleAd from "../adFolder/GoogleAd";
import Toolbar from "../Toolbar";

export default function Preview211() {
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

  // Check if required fields are available
  const hasRequiredData = result && result.fullname && result.jobposition;

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
    <div className="w-100">
      <div>
        <GoogleAd />
      </div>

      <div
        className="d-md-flex justify-content-between marging"
        
        style={{width:'100%'}}
      >
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview207"
          id="Alish_mirza"
          contentEditable
        suppressContentEditableWarning={true}
        spellCheck={true}
          style={{
            backgroundColor: bgColor,
            fontFamily: dynamicStyle.fontFamily,
            margin: margin,
            padding: padding,
            width: ''
          }}
        >          
            <div className="d-flex justify-content-between" style={{ padding: '10px' }}>
              <div >
                <h3
                  style={{
                    ...dynamicStyle.heading,
marginBottom:'-5px'
                  }}
                >
                  {result.fullname}
                  <br />
                </h3>
                <p style={dynamicStyle}>{result.jobposition}</p>
                <p style={dynamicStyle}>To</p>
                <p style={dynamicStyle}>{result.hiringManager}</p>
                <p style={dynamicStyle}>{result.companyLocation}</p>
                <p style={dynamicStyle}>{result.companyWebsite}</p>
              </div>

              <div style={{ textAlign: 'end',backgroundColor:'#14514c',padding:'5px',borderRadius:'5px' }}>
                <p style={dynamicStyle} className=""><i class="me-2 fa-solid fa-envelope-open" style={{ color:'#14514c',padding:'5px',backgroundColor:'white',borderRadius:'5px'}}></i>{result.email} </p>
                <p style={dynamicStyle} className=""><i class="me-2 fa-solid fa-mobile" style={{ color:'#14514c',padding:'5px',backgroundColor:'white',borderRadius:'5px'}}></i>{result.mobileNumber} </p>
                <p style={dynamicStyle} className=""><i class="me-2 fa-solid fa-location-dot"style={{ color:'#14514c',padding:'5px',backgroundColor:'white',borderRadius:'5px'}}></i>
                  {result.city} {result.state} {result.zipcode} 
                </p>
                {/* Add link text */}
                <p style={dynamicStyle} className="">
                  <a
                    href={result.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="me-2 fa-brands fa-linkedin" style={{ color:'#14514c',padding:'5px',backgroundColor:'white',borderRadius:'5px'}}></i>LinkedIn Profile 
                  </a>
                </p>
              </div>
            </div>
    <div className="d-flex justify-content-center" style={{width:'80%',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#ffebd5'}}></div>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#14514c'}}></div>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#ffebd5'}}></div>
    </div>

          <div style={{ marginTop: '15px', padding: '15px' }}>
            <p style={dynamicStyle}>Dear {result.hiringManager},</p>
            <p style={dynamicStyle}>{result.object}</p>
            <p style={dynamicStyle}>Sincerely,</p>
            <p style={dynamicStyle}>{result.fullname}</p>
          </div>
          <div className="d-flex justify-content-center" style={{width:'80%',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#ffebd5'}}></div>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#14514c'}}></div>
      <div style={{width:'100%',height:'5px',borderRadius:'5px',backgroundColor:'#ffebd5'}}></div>
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

      <div>
        <GoogleAd />
      </div>
    </div>
  );
}
