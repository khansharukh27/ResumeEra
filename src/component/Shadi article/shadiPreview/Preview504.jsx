import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PdfDownloadButton from "../../PdfDownloadButton"; // Assuming this is already created
import Toolbar from '../../Toolbar';
import '../shadiPreview/preview401.css'
import GoogleAd from '../../adFolder/GoogleAd';
import Border_Fashion_married from '../../../image/shadi biodata/Muslim merrieage biodata/BlueGoldenShadiCard.jpeg'
export default function Preview504() {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const [fontStyle, setFontStyle] = useState(''); // Default font style
    const [fontColor, setFontColor] = useState('white'); // Default font color
    const [headingColor, setHeadingColor] = useState('white'); // Default heading color
    const [fontSize, setFontSize] = useState(''); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(); // Font size for headings
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(170); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(''); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(''); // Spacing between sections
    const data = useSelector((state) => state.reducer.shadiData[0]  || localStorage.getItem('personalInfo')) ;
    console.info('data:-', data)
    useEffect(() => {
        console.warn('data:-', data)
    })


    const toggleStyle = (style) => {
        document.execCommand(style, false, null);
    };

    const changeAlignment = (alignment) => {
        document.execCommand('justify' + alignment, false, null);
    };

    const toggleList = (listType) => {
        document.execCommand(listType, false, null);
    };
    console.log('rahim;-')
    return (
        <div >
            <GoogleAd />
            <GoogleAd />
            <Toolbar
                toggleStyle={toggleStyle}
                changeAlignment={changeAlignment}
                toggleList={toggleList}
            />
            <div>
                <p>

                    Agar aap is page ko Hindi mein Translate karna chahte hain, toh aap Chrome browser mein Google
                    Translate ka istemal kar sakte hain. Bas page par right-click karke "Translate to Hindi"
                    option ko select karen aur aapka page asaani se Hindi mein translate ho jayega. 📱🌐 Ye ek simple aur jaldi
                    tarika hai jo aapko kisi bhi webpage ko Hindi mein translate mein madad karega!
                </p>
            </div>
            <div className='d-md-flex justify-content-between'>
                <div class=" preview401 inner-content"
                    style={{
                        padding: `${padding}px`,
                        margin: `${margin}px`,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        color: fontColor,
                        fontSize: `${fontSize}px`,
                        marginTop: '350px',
                        height: '100%',
                        background: `url(${Border_Fashion_married})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                    }}
                    contentEditable
                    suppressContentEditableWarning

                    id="Alish_mirza1">
                    <div

                    >
                        <div className=''>
                        <div class="container503">
  <p class="arabic-text" style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>الله</p>
  <p class="bismillah" style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
</div>
                            <div className="personal-info401 d-flex justify-content-center p-5" >
                                <div style={{marginTop:'350px'}}>
      
                                    <h3 style={{ color: headingColor, fontSize: `${headingSize}px`,lineHeight:lineSpacing }}>
                                        Personal Details
                                    </h3>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Full Name:</bold> {data.fullName}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Date of Birth:</bold> {data.dob}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Birth Place:</bold> {data.birthPlace}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Birth Time:</bold> {data.birthTime}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Blood Group:</bold> {data.bloodGroup}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Religion:</bold> {data.religion}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Caste:</bold> {data.caste}
                                    </p>
                                </div>
                                <div style={{ marginTop: '350px', width: '50%', display: 'flex', justifyContent: 'start', maxHeight: '400px' }}>
                                    <img
                                        className="image401"
                                        src={data.image}
                                        alt="man preview"
                                        style={{margin:'20px'}}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                                    Family Details
                                </h3>
                                <div>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Father's Name:</bold> {data.fatherName}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Father's Occupation:</bold> {data.fatherOccupation}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Mother's Name:</bold> {data.motherName}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Mother's Occupation:</bold> {data.motherOccupation}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Total Brothers:</bold> {data.totalBrothers}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Total Sisters:</bold> {data.totalSisters}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                                    Contact Information
                                </h3>
                                <div>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Address:</bold> {data.address}
                                    </p>
                                    <p style={{  fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle,lineHeight:lineSpacing }}>
                                        <bold>Mobile Number:</bold> {data.mobile}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pdf-download-button">
                    <GoogleAd />

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
                    <GoogleAd />
                    <GoogleAd />
                </div>
            </div>

        </div>
    );
}