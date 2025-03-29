import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PdfDownloadButton from "../../PdfDownloadButton"; // Assuming this is already created
import Toolbar from '../../Toolbar';
import './preview401.css/preveiew401.css';
import GoogleAd from '../../adFolder/GoogleAd';
import Border_Fashion_married from '../../../image/shadi biodata/Simple_Fancy_Border_Marrige_Template.png'
export default function Preview401() {
  const result = useSelector((state) => state.reducer.shadiData[0]);
  const [data, setData] = useState(null);
  console.log("result in preview401:-", result);

  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState(''); // Default background color
  const [fontStyle, setFontStyle] = useState(''); // Default font style
  const [fontColor, setFontColor] = useState('black'); // Default font color
  const [headingColor, setHeadingColor] = useState('black'); // Default heading color
  const [fontSize, setFontSize] = useState(''); // Font size for paragraphs
  const [headingSize, setHeadingSize] = useState(); // Font size for headings
  const [margin, setMargin] = useState(10); // Margin for resume wrapper
  const [padding, setPadding] = useState(''); // Padding for sections
  const [lineSpacing, setLineSpacing] = useState(''); // Line spacing for text
  const [sectionSpacing, setSectionSpacing] = useState(''); // Spacing between sections

  // Handle resizing for responsive heading size



  // Function to handle text alignment for <p> tags
  const changeAlignment = (alignment) => {
    document.execCommand('justify' + alignment, false, null);
  };

  // Function to toggle text styles (bold, italic, etc.)
  const toggleStyle = (style) => {
    document.execCommand(style, false, null);
  };

  // Function to toggle lists (bullet and numbered) for <p> tags
  const toggleList = (listType) => {
    document.execCommand(listType, false, null);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  

  // Function to handle window resize event
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener for resize when component mounts, and clean up when unmounts
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine image width based on window width
  const imageWidth = windowWidth <= 768 ? '100px' : '350px';
useEffect(() => {
    if (result) {
      setData(result);
      localStorage.setItem('shadiData', JSON.stringify(result)); // Store in localStorage
    } else {
      const localData = JSON.parse(localStorage.getItem('shadiData'));
      if (localData) {
        setData(localData);
      }
    }
  }, [result]);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className=''>
          <GoogleAd />
          <GoogleAd />
          <Toolbar
            toggleStyle={toggleStyle}
            changeAlignment={changeAlignment}
            toggleList={toggleList}
          />
          <div><p>
            Agar aap is page ko Hindi mein Translate karna chahte hain, toh aap Chrome browser mein Google 
            Translate ka istemal kar sakte hain. Bas page par right-click karke "Translate to Hindi" 
            option ko select karen aur aapka page asaani se Hindi mein translate ho jayega. 
            📱🌐 Ye ek simple aur jaldi tarika hai jo aapko kisi bhi webpage ko Hindi mein translate mein madad karega!
          </p></div>
          <div
            className='preview401'
            style={{
              padding: `${padding}px`,
              margin: `${margin}px`,
              backgroundColor: bgColor,
              fontFamily: fontStyle,
              color: fontColor,
              fontSize: `${fontSize}px`,
              marginTop: '350px',
              height: 'auto',
              background: `url(${Border_Fashion_married})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
            contentEditable
            suppressContentEditableWarning
            id='Alish_mirza1'
          >
            {/* Personal Information Section */}
            <div className='personal-info401 d-flex justify-content-between'>
              <div>
                <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                  Personal Details
                </h3>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Full Name:</strong> {data.fullName || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Date of Birth:</strong> {data.dob || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Birth Place:</strong> {data.birthPlace || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Birth Time:</strong> {data.birthTime || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Blood Group:</strong> {data.bloodGroup || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Religion:</strong> {data.religion || 'N/A'}
                </p>
                <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                  <strong>Caste:</strong> {data.caste || 'N/A'}
                </p>
              </div>
              <div style={{ width: '50%', display: 'flex', justifyContent: 'end', maxHeight: '400px' }}>
                <img
                  className='image401'
                  src={data.image || 'fallback_image.png'} // Provide fallback image if none exists
                  alt="man preview"
                  style={{ width: imageWidth, height: '80%' }}
                />
              </div>
            </div>
    
            {/* Family Details Section */}
            <div>
              <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>Family Details</h3>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Father's Name:</strong> {data.fatherName || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Father's Occupation:</strong> {data.fatherOccupation || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Mother's Name:</strong> {data.motherName || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Mother's Occupation:</strong> {data.motherOccupation || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Total Brothers:</strong> {data.totalBrothers || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Total Sisters:</strong> {data.totalSisters || 'N/A'}
              </p>
            </div>
    
            {/* Contact Information Section */}
            <div>
              <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>Contact Information</h3>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Address:</strong> {data.address || 'N/A'}
              </p>
              <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                <strong>Mobile Number:</strong> {data.mobile || 'N/A'}
              </p>
            </div>
          </div>
    
          {/* Pdf Download Button Section */}
          <div className='pdf-download-button'>
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
              elementId="Alish_mirza1"
            />
          </div>
    
          <GoogleAd />
          <GoogleAd />
        </div>
  );
}
