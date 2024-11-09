import '../css/importantpost.css'
import { Helmet } from 'react-helmet';
// import NewAds from './adFolder/NewAds';
import GoogleAd from './adFolder/GoogleAd';
import ImportantPostLink from './ImportantPostLink';
const ImportantPost = () => {

    return (
        <div className="important-posts">
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/ImportantPost" />
                <title>Important Links</title>
                <meta name="description" content="this page is releted to importannt link to show valuable things." />
            </Helmet>
            <ImportantPostLink/>
             <div>
                <GoogleAd />
            </div>


        </div>
    );
};

export default ImportantPost;
