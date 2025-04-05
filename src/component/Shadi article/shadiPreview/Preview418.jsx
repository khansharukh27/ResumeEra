import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PdfDownloadButton from "../../PdfDownloadButton"; // Assuming this is already created
import Toolbar from '../../Toolbar';
import '../shadiPreview/preview401.css'
import GoogleAd from '../../adFolder/GoogleAd';
import Border_Fashion_married from '../../../image/shadi biodata/decorative-border_1048-11718.avif'

export default function Preview418() {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const [fontStyle, setFontStyle] = useState(''); // Default font style
    const [fontColor, setFontColor] = useState('black'); // Default font color
    const [headingColor, setHeadingColor] = useState('black'); // Default heading color
    const [fontSize, setFontSize] = useState(''); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(); // Font size for headings
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(''); // Padding for sections
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
                        height: 'auto',
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
                            <div className="personal-info401 d-flex justify-content-between">
                                <div>
                                    <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                                        Personal Details
                                    </h3>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Full Name:</bold> {data.fullName}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Date of Birth:</bold> {data.dob}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Birth Place:</bold> {data.birthPlace}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Birth Time:</bold> {data.birthTime}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Blood Group:</bold> {data.bloodGroup}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Religion:</bold> {data.religion}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Caste:</bold> {data.caste}
                                    </p>
                                </div>
                                <div style={{ width: '50%', display: 'flex', justifyContent: 'end', maxHeight: '400px' }}>
                                    <img
                                        className="image401"
                                        src={data.image}
                                        alt="man preview"
                                        style={{}}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                                    Family Details
                                </h3>
                                <div>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Father's Name:</bold> {data.fatherName}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Father's Occupation:</bold> {data.fatherOccupation}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Mother's Name:</bold> {data.motherName}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Mother's Occupation:</bold> {data.motherOccupation}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Total Brothers:</bold> {data.totalBrothers}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Total Sisters:</bold> {data.totalSisters}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ color: headingColor, fontSize: `${headingSize}px` }}>
                                    Contact Information
                                </h3>
                                <div>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
                                        <bold>Address:</bold> {data.address}
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, color: fontColor, fontFamily: fontStyle }}>
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