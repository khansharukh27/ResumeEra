// CreativeAtsResumeTemplate.js
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import './CSS/preview109.css'
const Preview109 = () => {
  // const [inputFields, setInputFields] = useState('resume.pdf');
  // const [bgColor, setBgColor] = useState('white'); // Default background color (wheat)
  // const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  // const [fontColor, setFontColor] = useState('#rrggbb')
  // const [headingColor, setHeadingColor] = useState('#rrggbb')
  // const [isDownloaded, setIsDownloaded] = useState(false);

  // const navigate = useNavigate();
  // const personalInfo = useSelector((state) => state.reducer.personalInfo);
  // const education = useSelector((state) => [state.reducer.education[0]]);
  // const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
  // const work = useSelector((state) => [state.reducer.workExperience[0]]);
  // const Honor = useSelector((state) => [state.reducer.honorAndaward[0]]);
  // const Refrence = useSelector((state) => [state.reducer.addReference[0]])
  // const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills[0]])
  // const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
  // const languages = useSelector((state) => [state.reducer.addLanguage[0]]);
  // const Certificate = useSelector((state) => state.reducer.certificateData?.[0]?.[0] || []);
  // const result = useSelector((state)=>state.reducer)
  // console.log(result)
  // // console.log('Certificate:-', Certificate[0])
  // console.log('honorand award:-', Honor)
  // const handleDownloadPDF = async () => {
  //   const element = document.getElementById('Alisha_mirza108');
  //   try {
  //     const scale = 2; // Increase the scale for better resolution
  //     const canvas = await html2canvas(element, {
  //       scale: scale,
  //       useCORS: true, // Allows cross-origin images to be rendered correctly
  //       logging: true, // Enable logging for debugging
  //     });
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const imgData = canvas.toDataURL('image/png');
  //     // Calculate the aspect ratio to fit A4
  //     const imgWidth = 210; // A4 width in mm
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
  //     const fileName = `${inputFields}.pdf`;
  //     pdf.save(fileName);
  //     setIsDownloaded(true)
  //     setTimeout(()=>{
  //       setIsDownloaded(false)
  //     },4000)
      // Store the image data URL in localStorage
  //     const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
  //     savedResumes.push(imgData);
  //     localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
      
  //     alert('Your Resume is downloaded');
  //     // navigate('/myresume');
  //   } catch (error) {
  //     console.error('Error downloading PDF:', error);
  //   }
  // };
  return (
    <div>
      <h1>Creative ATS Resume Template</h1>
      <div className='main109'>
      {/* <div className='preview109' id='Alisha_mirza108'>
        <div className='firstdiv109' style={{backgroundColor:'#bcbcbc',marginBlock:'-16px'}}>
          <p style={{fontSize:'x-large',marginBlock:"-15px"}}>{personalInfo.fullname}</p>
          <p style={{color:'black',fontSize:'small'}}>{work[0][0].jobtitle}</p>
          <p style={{color:'white',fontSize:'small'}}>{personalInfo.object}</p>
        </div> */}
        {/* second div */}
        
          {/* <div className='seconddiv109 ' style={{backgroundColor:'#a2a4a3',marginTop:'10px'}}>
            <p style={{color:fontColor,wordBreak: "break-all" }}><i className="bi bi-envelope me-2 me-2" />{personalInfo.email}</p>
            <p style={{color:fontColor}}><i className="bi bi-telephone-fill me-2 ms-2" />{personalInfo.mobileNumber}</p>
            <p style={{color:fontColor}} className=""><i className="bi bi-geo-alt-fill me-2 ms-2" /> {personalInfo.city} {personalInfo.state} {personalInfo.country} </p>
            <p style={{color:fontColor}}><i className="bi bi-linkedin me-2 ms-2" />{socialMediaLink[0].linkedin}</p>
          </div> */}
          
        {/* third div */}
        {/* <div className='thirddiv109'>
          <div className='thirddiv109/1'>

          </div>
          <div className='thirddiv109/2'>
    <h1>work is progress...</h1>
          </div>
        </div>

      </div> */}
          
          
        
        </div>
    </div>
  );
};

export default Preview109;
