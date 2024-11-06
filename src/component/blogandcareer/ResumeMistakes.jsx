import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import false_contact from '../../image/image_for_link/false_contact.jpeg'
import spell_check from '../../image/image_for_link/spell_check.jpeg'
import dont_be_overqualified from '../../image/image_for_link/dont_be_overqualified.jpeg'
import wront_formate from '../../image/image_for_link/wront_formate.jpeg'
import unnecessary_knowledge from  '../../image/image_for_link/unnecessary_knowledge.jpeg'
import GoogleAd from '../adFolder/GoogleAd';
import ShareButtons from '../shareButton/ShareButtons';
const ResumeMistakes = () => {
  const ArticleUrl = 'https://resumeera.xyz/5-mistake-to-getting-job'
  const ArticleTitle = 'काबिल होने के बावजूद नहीं मिलेगी जॉब, मत कर देना ये 5 गलतियां - ResumeEra'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='aboutResumeEra'>
      <Helmet>
        <title>काबिल होने के बावजूद नहीं मिलेगी जॉब, मत कर देना ये 5 गलतियां - ResumeEra</title>
        <meta name="description" content="जानिए 5 ऐसी गलतियां जो आपके काबिलियत के बावजूद आपके रिज्यूमे को रिजेक्ट करवा सकती हैं। ResumeEra के साथ इन गलतियों से बचें और सफल करियर पाएं।" />
        <meta name="keywords" content="रिज्यूमे गलतियाँ, जॉब प्राप्त करने की गलतियाँ, रिजेक्ट होने का कारण, ResumeEra" />
        <link rel="canonical" href="https://resumeera.xyz/5-mistake-to-getting-job" />
      </Helmet>

      <article>
        <header>
          <h1>काबिल होने के बावजूद नहीं मिलेगी जॉब, मत कर देना ये 5 गलतियां</h1>
          <p>अपने सपनों की नौकरी पाने में रिज्यूमे का बड़ा हाथ होता है। लेकिन कभी-कभी, 
            कुछ छोटी गलतियां आपको जॉब पाने से रोक सकती हैं। <a href="https://resumeera.xyz">ResumeEra</a> के साथ जानें, उन गलतियों से कैसे बचें।</p>
            <GoogleAd/>
        </header>

        {/* Mistake 1 */}
        <section>
          <h2>1. गलत संपर्क जानकारी देना</h2>
          <p>रिज्यूमे का उद्देश्य केवल आपकी योग्यता दिखाना ही नहीं, बल्कि यह सुनिश्चित करना भी है कि नियोक्ता आपसे आसानी से संपर्क कर सके। 
            कई बार लोग छोटी गलती के चलते अपना फ़ोन नंबर या ईमेल गलत लिख देते हैं। इससे आपकी पूरी मेहनत पर पानी फिर सकता है। 
            सही संपर्क जानकारी देने के लिए नीचे दिए गए टिप्स अपनाएँ:</p>
            <figure style={{ textAlign: 'center' }}>
      {/* SEO-Optimized Image */}
      <img 
        src={false_contact} 
        alt="गलत संपर्क जानकारी देना" 
        title="रिज्यूमे की सामान्य गलतियाँ - ResumeEra" 
        loading="lazy" 
        decoding="async"
      />
      
      {/* Caption below the image */}
      <figcaption>
        "गलत संपर्क जानकारी देना- <strong><a href="https://resumeera.xyz">ResumeEra</a></strong>
      </figcaption>

      {/* Schema Markup for Image */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": "https://resumeera.xyz/5-mistake-to-getting-job",
          "url": "https://resumeera.xyz/5-mistake-to-getting-job",
          "name": "रिज्यूमे की 5 गलतियाँ",
          "description": "काबिल होने के बावजूद जॉब न मिलने का कारण बन सकती हैं ये सामान्य रिज्यूमे की गलतियाँ।"
          
        })}
      </script>
    </figure>
    <div>
      <GoogleAd/>
    </div>
          <ul>
            <li><strong>अद्यतित फ़ोन नंबर:</strong> अपने फ़ोन नंबर की दोबारा जाँच करें और सुनिश्चित करें कि वह सही हो। 
            हर बार इंटरव्यू में जाने से पहले रिज्यूमे को अपडेट करना न भूलें।</li>
            <li><strong>प्रोफेशनल ईमेल:</strong> अपने ईमेल को प्रोफेशनल बनाएं। <em>funnyemail123@example.com</em> 
            जैसे ईमेल से बचें और एक प्रोफेशनल ईमेल का उपयोग करें।</li>
            <li><strong>सोशल मीडिया प्रोफाइल:</strong> अगर आपके प्रोफेशनल प्रोफाइल लिंक्डइन या अन्य किसी प्लेटफॉर्म पर हैं, 
            तो उन्हें अपने रिज्यूमे में जोड़ें।</li>
          </ul>
          <p>गलत संपर्क जानकारी देना एक सामान्य गलती है, लेकिन यह आपके करियर को प्रभावित कर सकती है। हमेशा जाँच करें कि आपके 
            रिज्यूमे में दी गई जानकारी पूरी तरह से सही और अद्यतित है।</p>
        </section>

        {/* Mistake 2 */}
        <section>
          <h2>2. टाइपो या ग्रामर की गलती</h2>
          <p>एक छोटा टाइपो या ग्रामर की गलती आपके संपूर्ण व्यक्तित्व पर सवाल खड़ा कर सकता है। नियोक्ता को लगेगा कि आप अपने काम में 
            ढिलाई बरतते हैं। किसी भी प्रकार की गलती से बचने के लिए नीचे दिए गए सुझावों का पालन करें:</p>
          <ul>
            <li><strong>प्रूफरीड करें:</strong> एक बार लिखने के बाद अपने रिज्यूमे को प्रूफरीड करें। हो सके तो एक विश्वसनीय साथी या 
            परिवार के सदस्य से भी जाँच करवाएं।</li>
            <li><strong>ऑनलाइन टूल्स का उपयोग करें:</strong> Grammarly या अन्य ग्रामर टूल्स का इस्तेमाल करके छोटी-मोटी गलतियों को 
            सुधारें।</li>
            <li><strong>सही भाषा का चयन:</strong> अपनी भाषा के प्रति सतर्क रहें और सुनिश्चित करें कि आपके शब्द चयन और भाषा नौकरी 
            के स्तर के अनुसार हों।</li>
          </ul>
          <p>प्रस्तुतिकरण की सावधानी के साथ, टाइपो और ग्रामर की गलतियां कम हो सकती हैं। एक छोटा सा बदलाव आपके रिज्यूमे की गुणवत्ता को 
            उच्च स्तर पर ले जा सकता है।</p>
            <figure style={{ textAlign: 'center' }}>
      {/* SEO-Optimized Image */}
      <img 
        src={spell_check} 
        alt="टाइपो या ग्रामर की गलती" 
        title="रिज्यूमे की सामान्य गलतियाँ - ResumeEra" 
        loading="lazy" 
        decoding="async"
      />
      
      {/* Caption below the image */}
      <figcaption>
        "टाइपो या ग्रामर की गलती- <strong><a href="https://resumeera.xyz">ResumeEra</a></strong>
      </figcaption>

      {/* Schema Markup for Image */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": "https://resumeera.xyz/5-mistake-to-getting-job",
          "url": "https://resumeera.xyz/5-mistake-to-getting-job",
          "name": "रिज्यूमे की 5 गलतियाँ",
          "description": "काबिल होने के बावजूद जॉब न मिलने का कारण बन सकती हैं ये सामान्य रिज्यूमे की गलतियाँ।"
          
        })}
      </script>
    </figure>
    <div>
      <GoogleAd/>
    </div>
        </section>

        {/* Mistake 3 */}
        <section>
          <h2>3. ओवर-क्वालिफाइड होना</h2>
          <p>आपका अनुभव और योग्यता आपकी ताकत हो सकती है, लेकिन कभी-कभी यह आपके खिलाफ भी जा सकता है। कई बार नियोक्ता को 
            लगता है कि आप ओवर-क्वालिफाइड हैं और यह नौकरी आपके लिए सही नहीं है। इस स्थिति से बचने के लिए:</p>
          <ul>
            <li><strong>संबंधित योग्यता का उल्लेख करें:</strong> अपनी योग्यता में से केवल उन पहलुओं का जिक्र करें जो इस नौकरी के लिए 
            प्रासंगिक हैं।</li>
            <li><strong>आवश्यकता के अनुसार अनुभव बताएं:</strong> जरूरत से ज्यादा अनुभव बताने की जगह केवल वही बताएं जो इस 
            भूमिका के लिए उपयुक्त हो।</li>
            <li><strong>सभी योग्यताओं का उल्लेख न करें:</strong> अगर कोई उच्च स्तरीय डिग्री या अनुभव जरूरी नहीं है, तो उसे नजरअंदाज 
            करना बेहतर हो सकता है।</li>
          </ul>
          <p>ओवर-क्वालिफाइड होने से बचने के लिए, अपने अनुभव को नौकरी के अनुसार संपादित करें। आपका रिज्यूमे आपका व्यक्तित्व दर्शाएगा, 
            इसलिए इसे सटीक और प्रभावी बनाएं।</p>
            <figure style={{ textAlign: 'center' }}>
      {/* SEO-Optimized Image */}
      <img 
        src={dont_be_overqualified} 
        alt="ओवर-क्वालिफाइड होना" 
        title="रिज्यूमे की सामान्य गलतियाँ - ResumeEra" 
        loading="lazy" 
        decoding="async"
      />
      
      {/* Caption below the image */}
      <figcaption>
        "ओवर-क्वालिफाइड होना- <strong><a href="https://resumeera.xyz">ResumeEra</a></strong>
      </figcaption>

      {/* Schema Markup for Image */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": "https://resumeera.xyz/5-mistake-to-getting-job",
          "url": "https://resumeera.xyz/5-mistake-to-getting-job",
          "name": "रिज्यूमे की 5 गलतियाँ",
          "description": "काबिल होने के बावजूद जॉब न मिलने का कारण बन सकती हैं ये सामान्य रिज्यूमे की गलतियाँ।"
          
        })}
      </script>
    </figure>
    <div>
      <GoogleAd/>
    </div>
        </section>

        {/* Mistake 4 */}
        <section>
          <h2>4. खराब फॉर्मेट</h2>
          <p>आपके रिज्यूमे का फॉर्मेट पहले प्रभाव को बहुत प्रभावित करता है। एक व्यवस्थित और प्रोफेशनल दिखने वाला रिज्यूमे नियोक्ता पर अच्छा 
            प्रभाव छोड़ता है। फॉर्मेट से संबंधित गलतियों से बचने के लिए निम्नलिखित सुझावों को ध्यान में रखें:</p>
          <ul>
            <li><strong>स्पष्ट हेडिंग्स और सबहेडिंग्स:</strong> अपने रिज्यूमे को खंडों में विभाजित करें और हेडिंग्स का इस्तेमाल करें ताकि 
            नियोक्ता को सब कुछ स्पष्ट और क्रम में मिले।</li>
            <li><strong>प्रत्येक अनुभाग का स्पष्ट विवरण:</strong> अनुभाग के अनुसार जानकारी रखें जैसे शिक्षा, अनुभव, कौशल आदि।</li>
            <li><strong>फॉन्ट और रंगों का उचित उपयोग:</strong> केवल प्रोफेशनल फॉन्ट और सरल रंगों का उपयोग करें ताकि आपका रिज्यूमे 
            पढ़ने में आसान हो।</li>
          </ul>
          <p>स्मार्ट फॉर्मेटिंग आपकी छवि को प्रस्तुत करने का सबसे अच्छा तरीका है। ध्यान दें कि फॉर्मेट ऐसा हो जो नियोक्ता के पढ़ने में आसान हो 
            और आकर्षक लगे।</p>
            <figure style={{ textAlign: 'center' }}>
      {/* SEO-Optimized Image */}
      <img 
        src={wront_formate} 
        alt=" खराब फॉर्मेट" 
        title="रिज्यूमे की सामान्य गलतियाँ - ResumeEra" 
        loading="lazy" 
        decoding="async"
      />
      
      {/* Caption below the image */}
      <figcaption>
        " खराब फॉर्मेट- <strong><a href="https://resumeera.xyz">ResumeEra</a></strong>
      </figcaption>

      {/* Schema Markup for Image */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": "https://resumeera.xyz/5-mistake-to-getting-job",
          "url": "https://resumeera.xyz/5-mistake-to-getting-job",
          "name": "रिज्यूमे की 5 गलतियाँ",
          "description": "काबिल होने के बावजूद जॉब न मिलने का कारण बन सकती हैं ये सामान्य रिज्यूमे की गलतियाँ।"
          
        })}
      </script>
    </figure>
    <div>
      <GoogleAd/>
    </div>
        </section>

        {/* Mistake 5 */}
        <section>
          <h2>5. जबरदस्ती जानकारी भरना</h2>
          <p>कई बार लोग अपने रिज्यूमे को भरने के लिए अनावश्यक जानकारी जोड़ देते हैं। यह आपके रिज्यूमे को असंगठित बनाता है और महत्वपूर्ण 
            बिंदु छूट सकते हैं। नीचे बताए गए सुझावों से इस गलती से बचें:</p>
          <ul>
            <li><strong>प्रासंगिक जानकारी ही दें:</strong> केवल वही जानकारी शामिल करें जो नौकरी के लिए प्रासंगिक हो।</li>
            <li><strong>पर्सनल जानकारी की कमी रखें:</strong> अनावश्यक व्यक्तिगत जानकारी, जैसे उम्र, वैवाहिक स्थिति आदि, से बचें।</li>
            <li><strong>जबरदस्ती कौशल न जोड़ें:</strong> अगर किसी विशेष कौशल की आवश्यकता नहीं है, तो उसे जोड़ना जरूरी नहीं है।</li>
          </ul>
          <p>अपने रिज्यूमे को साफ-सुथरा और प्रासंगिक रखने से नियोक्ता को एक साफ और पॉजिटिव छवि मिलती है। अपने रिज्यूमे को बढ़ावा देने के 
            लिए उचित जानकारी जोड़ें, लेकिन जबरदस्ती न करें।</p>
            <figure style={{ textAlign: 'center' }}>
      {/* SEO-Optimized Image */}
      <img 
        src={unnecessary_knowledge} 
        alt=" जबरदस्ती जानकारी भरना" 
        title="रिज्यूमे की सामान्य गलतियाँ - ResumeEra" 
        loading="lazy" 
        decoding="async"
      />
      
      {/* Caption below the image */}
      <figcaption>
        " जबरदस्ती जानकारी भरना- <strong><a href="https://resumeera.xyz">ResumeEra</a></strong>
      </figcaption>

      {/* Schema Markup for Image */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": "https://resumeera.xyz/5-mistake-to-getting-job",
          "url": "https://resumeera.xyz/5-mistake-to-getting-job",
          "name": "रिज्यूमे की 5 गलतियाँ",
          "description": "काबिल होने के बावजूद जॉब न मिलने का कारण बन सकती हैं ये सामान्य रिज्यूमे की गलतियाँ।"
          
        })}
      </script>
    </figure>
    <div>
      <GoogleAd/>
    </div>
        </section>

        <footer>
          <p>यह 5 प्रमुख गलतियां आपके रिज्यूमे को कमजोर बना सकती हैं और नौकरी पाने के मौके को खत्म कर सकती हैं।
             <a href="https://resumeera.xyz"> ResumeEra </a> के माध्यम 
            से आप एक प्रोफेशनल रिज्यूमे तैयार कर सकते हैं जो इन सभी गलतियों से बचा हो।</p>
        </footer>
      </article>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "काबिल होने के बावजूद नहीं मिलेगी जॉब, मत कर देना ये 5 गलतियां",
          "description": "जानिए 5 ऐसी गलतियां जो आपके काबिलियत के बावजूद आपके रिज्यूमे को रिजेक्ट करवा सकती हैं। ResumeEra के साथ इन गलतियों से बचें और सफल करियर पाएं।",
          "image": "https://resumeera.xyz/path-to-image.jpg",
          "author": { "@type": "Person", "name": "ResumeEra-Team" },
          "publisher": {
            "@type": "Organization",
            "name": "ResumeEra",
            "logo": {
              "@type": "ImageObject",
              "url": "https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
            }
          },
          "datePublished": "2024-11-06",
          "mainEntityOfPage": "https://resumeera.xyz"
        })}
      </script>
      <div className='stickyShare'>
        <ShareButtons url={ArticleUrl} title={ArticleTitle}/>
      </div>
      <div>
      <GoogleAd/>
    </div>
    </div>
  );
};

export default ResumeMistakes;
