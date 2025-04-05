import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PdfDownloadButton from "../../PdfDownloadButton"; // Assuming this is already created
import Toolbar from '../../Toolbar';
import '../shadiPreview/preview401.css'
import GoogleAd from '../../adFolder/GoogleAd';
import Border_Fashion_married from '../../../image/shadi biodata/download.jpeg'

export default function Preview420() {
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
          <h1>Comming soon</h1>
        </div>
    );
}