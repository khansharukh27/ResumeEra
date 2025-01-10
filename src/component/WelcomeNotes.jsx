import React from 'react';
import '../css/PromoSection.css'; // Import the CSS file

const WelcomeNotes = () => {
  return (
    <div className="promo-container">
      <h2 className="promo-title">✨ सपनों की नौकरी पाने का पहला कदम यहीं से शुरू करें! ✨</h2>
      <p className="promo-description">
        क्या आप अपनी जॉब एप्लिकेशन के लिए एक परफेक्ट रिज्यूमे तैयार करना चाहते हैं?
      </p>
      <p className="promo-description">
        हमारी वेबसाइट <a href="https://resumeera.xyz" className="promo-link">ResumeEra.xyz</a> पर आपको मिलेगा:
      </p>
      <ul className="promo-list">
        <li>✅ आसान और फ्री ऑनलाइन रिज्यूमे मेकर</li>
        <li>✅ प्रोफेशनल टेम्पलेट्स</li>
        <li>✅ पीडीएफ डाउनलोड की सुविधा</li>
      </ul>
      <p className="promo-highlight">
        💡 10,000+ उपयोगकर्ता अपने करियर को नई ऊंचाइयों पर ले गए। अब आपकी बारी है!
      </p>
      <a href="https://resumeera.xyz" className="promo-button">👉 आज ही विज़िट करें: ResumeEra.xyz</a>
      <p className="promo-footer">
        आपके करियर की सफलता का साथी, <strong>ResumeEra!</strong>
      </p>
    </div>
  );
};

export default WelcomeNotes;
