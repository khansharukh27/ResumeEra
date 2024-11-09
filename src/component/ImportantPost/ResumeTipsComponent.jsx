import React, { useEffect } from 'react';
import '../../css/Important_Post/ResumeTipsComponent.css'
import { Helmet } from 'react-helmet';
import ShareButtons from '../shareButton/ShareButtons';

const ResumeTipsComponent = () => {
  const ArticleUrl = 'https://resumeera.xyz/resume-tip-component'
  const ArticleTitle = 'Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="aboutResumeEra">
      <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/resume-tip-component" />
      <title>Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?</title>
            <meta name="description" content="this page tell you how to create unique resume for attract employee" />
            <meta name='keyword' content='Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके,ResumeEra,Resume Era, Free Resume, how to create free resume online,free resume creator,free resume creator online ,Create Resume Online,Free Resume Builder,free resume maker ,Professional Resume, 
    Online Resume Builder, Job Application, CV Maker, Resume Templates, Career, 
    Employment, Resume, Curriculum Vitae, Job Seeker, Resume Writing, Cover Letter, 
    Job Interview, Career Development, Job Search, Online CV, Job Market, Job Board, 
    LinkedIn Resume'/>
            </Helmet>
            <div className='stickyShare'>
    <ShareButtons url={ArticleUrl} title={ArticleTitle}/>
</div>
      <h1>Resume कैसे बनाएं जो नियोक्ता को प्रभावित कर सके?</h1>
      
      <h3>1. बुनियादी जानकारी:</h3>
      <p>
        <strong>नाम:</strong> सुनिश्चित करें कि आपका पूरा नाम स्पष्ट और सही लिखा गया हो।<br />
        <strong>संपर्क जानकारी:</strong> अपने फोन नंबर, ईमेल और पता को शामिल करें, ताकि नियोक्ता आपसे आसानी से संपर्क कर सके।
      </p>

      <h3>2. उद्देश्य/सारांश:</h3>
      <p>
        यह एक छोटा सा परिचय होता है, जिसमें आप अपने करियर के लक्ष्य और उस नौकरी के लिए अपनी उपयुक्तता को दर्शाते हैं। इसे संक्षिप्त और प्रभावी ढंग से लिखें।
      </p>

      <h3>3. शैक्षणिक योग्यता:</h3>
      <p>
        अपनी शैक्षणिक उपलब्धियों को उल्टे कालक्रम में लिखें, यानी सबसे हाल की डिग्री पहले। उदाहरण: संस्थान का नाम, डिग्री, और वर्ष शामिल करें।
      </p>

      <h3>4. कार्य अनुभव:</h3>
      <p>
        अपने पिछले काम का विवरण उल्टे कालक्रम में दें। हर काम के लिए कंपनी का नाम, आपकी भूमिका और महत्वपूर्ण जिम्मेदारियों को संक्षेप में लिखें।
      </p>

      <h3>5. कौशल:</h3>
      <p>
        यहां उन तकनीकी और व्यक्तिगत कौशलों को सूचीबद्ध करें, जो आपके नए काम में सहायक होंगे। उदाहरण के लिए: कंप्यूटर स्किल्स, टीमवर्क, लीडरशिप आदि।
      </p>

      <h3>6. उपलब्धियाँ:</h3>
      <p>
        अगर आपने किसी विशेष परियोजना में उत्कृष्ट प्रदर्शन किया है या कोई पुरस्कार जीता है, तो उसे यहां शामिल करें। ये आपकी मेहनत और क्षमता को प्रदर्शित करेंगे।
      </p>

      <h3>7. रुचियाँ और शौक (वैकल्पिक):</h3>
      <p>
        यदि आप चाहें, तो अपने शौक और रुचियों को शामिल कर सकते हैं। यह आपके व्यक्तित्व को प्रदर्शित करने का एक अच्छा तरीका हो सकता है।
      </p>

      <h3>ResumeEra का उपयोग कैसे करें?</h3>
      <p>
        ResumeEra एक मुफ्त ऑनलाइन टूल है, जो आपको एक पेशेवर और आकर्षक Resume बनाने में मदद करता है। इसका उपयोग करना बेहद आसान है:
      </p>
      <ul>
        <li><strong>टेम्पलेट चुनें:</strong> ResumeEra पर आपको कई आकर्षक और पेशेवर टेम्पलेट्स मिलेंगे। अपनी पसंद का टेम्पलेट चुनें।</li>
        <li><strong>जानकारी भरें:</strong> अपनी व्यक्तिगत, शैक्षणिक, और पेशेवर जानकारी को भरें।</li>
        <li><strong>प्रारूप को अनुकूलित करें:</strong> Resume को अपने अनुसार अनुकूलित करें।</li>
        <li><strong>डाउनलोड करें:</strong> Resume तैयार हो जाने के बाद उसे PDF में डाउनलोड करें।</li>
      </ul>

      <h3>निष्कर्ष:</h3>
      <p>
        एक अच्छा Resume आपके करियर को एक नई दिशा दे सकता है। ResumeEra जैसे टूल्स की मदद से आप मुफ्त में और सरल तरीके से एक पेशेवर Resume बना सकते हैं। 
      </p>
    </div>
  );
};

export default ResumeTipsComponent;
