
const images = [
    {
        id: 1,
        src: 'https://namratauniversal.com/img/web1.jpeg',
        alt: 'web1',
        cardTitle: 'Business Portal Development',
        cardText: 'At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.',
    },
    {
        id: 2,
        src: 'https://namratauniversal.com/img/mapd.jpeg',
        alt: 'mapd',
        cardTitle: 'Mobile Application Development',
        cardText: 'We have designed and developed Android apps in categories, and productivity, shopping, social messaging, gaming and entertainment, news and publishing and so on.',
    },
    {
        id: 3,
        src: 'https://namratauniversal.com/img/webd.jpeg',
        alt: 'webd',
        cardTitle: 'Website Development',
        cardText: 'We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is a search engine friendly so that it attracts customers and sales.',
    },
    {
        id: 4,
        src: 'https://namratauniversal.com/img/digital.png',
        alt: 'digital',
        cardTitle: 'Digital Marketing',
        cardText: 'Digital marketing connect customers using internet and many types of digital platform such as: Search Engines, Websites, Social Media Marketing, Email Marketing, Mobile apps, Text messaging and Online promoting.',
    },
    {
        id: 5,
        src: 'https://namratauniversal.com/img/cuts.jpeg',
        alt: 'cuts',
        cardTitle: 'Custome Software',
        cardText: 'Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions. We offer quality and valuable price in our software and services without sacrificing quality.'

    },
    {
        id: 6,
        src: 'https://namratauniversal.com/img/gd.jpeg',
        alt: 'gd',
        cardTitle: 'Graphic Designing',
        cardText: 'Graphic design is the most common way of making visual content. The specialty of visual communicate is fundamental, especially for brands looking to connect with their target audience, and graphic design is the perfect solution.'

    },
    {
        id: 7,
        src: 'https://namratauniversal.com/img/apd.jpeg',
        alt: 'apd',
        cardTitle: 'App Designe',
        cardText: 'Our experts cover an entire cycle of mobile app development, including business analysis, UX/UI design and development of your mobile application From ideation to final polish, our UX/UI design process.'
    },
    {
        id: 8,
        src: 'https://namratauniversal.com/img/seo.png',
        alt: 'seo',
        cardTitle: 'Seo',
        cardText: 'SEO stands for search engine optimization. Namrata Universal Provides best Search engine optimization services. SEO is the most common way of doing whatever it takes to help a site or piece of content position higher on Google.'
    }
];

// Now each object in the array has an 'id' property.



function Services() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center' }} className="mt-5" data-aos='flip-left' data-aos-duration="3000" ease-out-cubic>
                <h1 className="p-5" style={{ fontWeight: '700' }}>Services</h1>
                <p style={{ fontSize: '22px', fontWeight: '500' }}>Nationwide Service, Local Expertise Offer The Latest Software And <br /> Solutions To Our Customers!</p>


            </div>
            <div className=" row d-flex justify-content-between  p-5">
                {images && images.map((image) => (
                    <div key={image.id} class=" col-sm-3 mt-2 " style={{ width: '18rem' }} data-aos='flip-left' data-aos-duration='2000'>
                        <div style={{height:'200px'}}><img src={image.src} class="card-img-top" alt={image.alt}  /></div>

                        <div class="card-body bg-light mt-2" data-aos='flip-left' data-aos-duration='2000'>
                            <h5 class="card-title">{image.cardTitle}</h5>
                            <p class="card-text">{image.cardText}</p>

                        </div>
                    </div>
                ))}

            </div>

            

        </div>

    )
}
export default Services;