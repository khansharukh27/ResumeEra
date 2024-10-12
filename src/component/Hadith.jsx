import React from 'react';
import '../css/Hadith.css'; // Assuming you have a CSS file for styling

const Hadith = () => {
  return (
    <div className="hadith-container">
  <h1 className="hadith-heading">हदीस-8</h1>
  <p className="hadith-text">
    हज़रत इब्न उमर (رضي الله عنه) से वर्णित है कि अल्लाह के रसूल (ﷺ) ने फ़रमाया: 
    "इस्लाम की बुनियाद पाँच चीज़ों पर है:
  </p>
  <ul className="hadith-subtext">
    <li>गवाही देना कि अल्लाह के सिवा कोई इबादत के लायक नहीं और मुहम्मद अल्लाह के रसूल हैं।</li>
    <li>नमाज़ क़ायम करना (फर्ज़ नमाज़ों को ठीक से और समय पर अदा करना)।</li>
    <li>ज़कात (अर्थिक इबादत) अदा करना।</li>
    <li>हज करना (जो उसकी ताकत रखे)।</li>
    <li>रमज़ान के महीने में रोज़े रखना।</li>
  </ul>
  <p className="hadith-reference">
    (सहीह अल-बुख़ारी, खंड 1, किताब 2, हदीस 8)
  </p>
</div>
  );
};

export default Hadith;
