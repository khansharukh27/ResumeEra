import { useState } from "react";
import GoogleAd from "./adFolder/GoogleAd";
import type_lazyness from '../image/motivational_image/type_lazyness.webp'
import pic_1 from '../image/motivational_image/pic_1.png'
import Career_qoutes from '../image/motivational_image/Career_qoutes.jpg'

const MotivationLink = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const posts = [
        { path: '/types-of-laziness', title: 'आलस के 7 प्रकार: कारण और समाधान | ResumeEra', src:type_lazyness, alt: 'आलस के 7 प्रकार and कारण और समाधान ' },
        { path: '/pictures8', title: '8 Pictures That Change the Way You Think - ResumeEra', src:pic_1, alt: '8 Pictures That Change the Way You Think - ResumeEra ' },
        { path: '/35-career-quotes-to-motivate', title: '35 Career Quotes To Motivate You While Making a free Resume', src:Career_qoutes, alt: '35 Career Quotes To Motivate You While Making a Resume ' },

    ]
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <h1>Important Post to Gain Knowledge</h1>
            <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))', gap: 'auto' }}>
                {filteredPosts.map((post, index) => (
                    <>
                        <div key={index} className="cards" style={{ width: '100%', height: '380px' }}>
                            <img style={{ width: '100%', height: '200px', borderRadius: '15px' }} src={post.src} className="card-img-top" alt={post.alt} />
                            <div className="card-body">
                                <h3 className="card-title" style={{marginTop:'10px',color:'black'}}>{post.title}</h3>
                                <a href={post.path} className="btn btn-primary">Read</a>
                            </div>
                        </div>

                        {/* Insert an ad after every 4 cards */}
                        {(index + 1) % 3 === 0 && (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1rem' }}>
                                <div className="ad-container" style={{width:'100%',height:'300px'}}>
                                    <GoogleAd/>
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
export default MotivationLink;
