import { useDispatch } from 'react-redux';
import '../css/coverletter/coverletter.css';
import { Link, useNavigate } from 'react-router-dom';
import { coverletters } from '../Redux/action';
import { useState, useEffect } from 'react';
import what_is_cover from '../image/image_for_link/what_is_cover.jpg'
import importance_of_cover from '../image/image_for_link/importance_of _cover.jpg'
import cover_letter_1 from '../image/image_for_link/cover_letter_1.jpg'
import cover_letter_2 from '../image/image_for_link/cover_letter_2.png'

import cover_letter_3 from '../image/image_for_link/cover_letter_3.jpg'
import '../css/covercomponent.css'
import { Helmet } from 'react-helmet';

const CoverLetter = (props) => {
    const CoverImage = props; // Assuming CoverImage is passed as a prop
    const [hoveredImage, setHoveredImage] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Log the image source from the props
    useEffect(() => {
        if (CoverImage.CoverImage && CoverImage.CoverImage.length > 0) {
            console.log('images show in coverLetter:-', CoverImage.CoverImage[0].src);
        }
    }, [CoverImage]); // Log whenever CoverImage changes

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/cover_letter/${hoveredImage}`;
            navigate(path);
            dispatch(coverletters(hoveredImage));
        }
    };

    return (
        <div className='aboutResumeEra'>
            <Helmet>
                <link rel="canonical" href="https://resumeera.xyz/cover_letter" />
                <title>
                    Resume Formatting for 2024 | Free Resume Formatting | ResumeEra
                </title>

                <meta
                    name="description"
                    content="ResumeEra is a user-friendly And Resume Formatting PlateForm that allows you to create and customize your free resumes. Choose from a variety of templates to make your free resume stand out. Whether you're highlighting your work experience, education, skills, or personal information, ResumeEra as a resume builder makes it easy to create a professional-looking free resume."
                />

                <meta
                    name="keywords"
                    content="ResumeEra, Resume Era, Free Resume, how to create free resume online, free resume creator, free resume creator online, Create Resume Online, Free Resume Builder, free resume maker, Professional Resume, Online Resume Builder, Job Application, CV Maker, Resume Templates, Career, Employment, Resume, Curriculum Vitae, Job Seeker, Resume Writing, Cover Letter, Job Interview, Career Development, Job Search, Online CV, Job Market, Job Board, LinkedIn Resume, Job Portal"
                />

                <meta name="author" content="ResumeEra Team" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta
                    property="og:title"
                    content="Resume Formatting for 2024 | Free Resume Formatting | ResumeEra"
                />
                <meta
                    property="og:description"
                    content="Create and customize professional resumes online with ResumeEra. Choose from free templates, showcase your skills, and build a standout resume effortlessly."
                />
                <meta property="og:url" content="https://resumeera.xyz/cover_letter" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
                />
                <meta
                    property="og:image:alt"
                    content="Preview of ResumeEra's easy-to-use resume builder interface"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Resume Formatting for 2024 | Free Resume Formatting | ResumeEra"
                />
                <meta
                    name="twitter:description"
                    content="Easily create and customize your free resume with ResumeEra. Access professional templates and make your resume stand out."
                />
                <meta
                    name="twitter:image"
                    content="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
                />
                <meta
                    name="twitter:image:alt"
                    content="Preview of ResumeEra's resume builder interface"
                />

                <link
                    rel="icon"
                    href="https://resumeera.xyz/favicon.ico"
                    type="image/x-icon"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            </Helmet>

            <div>
                <div className='covermain '>
                    <h1>How to Write an Effective Cover Letter with ResumeEra: A Complete Guide</h1>
                    <hr style={{ width: 'inherit' }} />
                    <h3>Introduction: What is a Cover Letter?</h3>
                    <div className=' what-is-cover'>

                        <p>
                            A cover letter is a vital component of your job application process.
                            It introduces you to potential employers,
                            highlighting your skills and experiences tailored to the specific role.
                        </p>
                        <p>
                            Understanding how to write a
                            cover letter effectively can significantly increase your chances of landing an
                            interview. In this guide, we'll explore the importance of cover letters,
                        </p>
                        <img src={what_is_cover} loading='lazy' alt="what is coverletter" />
                    </div>
                    <h3>Why is a Cover Letter Important?</h3>
                    <div className='importance_of_cover'>
                        <p>
                            Cover letters are essential because they provide:
                            <ol>
                                <li><b>First Impressions:</b> A well-crafted cover letter is often your first communication with a potential employer, setting the tone for your application.</li>
                                <li><b>Personalization:</b> Unlike resumes, cover letters allow you to customize your message for each application, demonstrating your genuine interest in the position and company.</li>
                                <li><b>Highlighting Key Skills:</b> You can elaborate on specific experiences and skills that make you an ideal candidate for the job.</li>
                                <li><b>Addressing Concerns:</b> A cover letter provides a space to explain any gaps in your employment or career changes.</li>
                                <li><b>Demonstrating Enthusiasm:</b> Your cover letter is an opportunity to express your excitement about the position and the company.</li>
                            </ol></p>
                        <img src={importance_of_cover} alt="importance of cover letter" />

                    </div>

                    <h2>Structure of a Cover Letter</h2>
                    <p>Here’s how to structure your cover letter effectively:</p>
                    <h4>1. Header</h4>
                    <p>Your cover letter should start with your contact information, the date, and the employer’s contact information.</p>
                    <p>Example Format:</p>
                    <p>[Your Name] <br />
                        [Your Address] <br />
                        [City, State, Zip Code] <br />
                        [Your Phone Number] <br />
                        [Your Email Address] <br />
                        <br />

                        [Date] <br />
                        <br />

                        [Employer's Name] <br />
                        [Company's Name] <br />
                        [Company's Address] <br />
                        [City, State, Zip Code] <br />
                    </p>
                    <h4>2. Salutation</h4>
                    <p>Use a personalized greeting if possible:</p>
                    <p>
                        <ul>
                            <li>“Dear [Hiring Manager's Name],”</li>
                            <li>If the name is not available, “Dear Hiring Manager,” is acceptable.</li>

                        </ul>

                    </p>
                    <h4>3. Introduction</h4>
                    <hr />
                    <p>The introduction should:</p>
                    <p>
                        <ul>
                            <li>State the position you’re applying for.</li>
                            <li>Mention where you found the job listing.</li>
                            <li>Include a hook that captivates the reader.</li>

                        </ul>
                        Example: “I am excited to apply for the Marketing Specialist position at XYZ Corporation, as advertised on your careers page.”
                    </p>
                    <h4>4. Body Paragraphs</h4>
                    <p>The body is where you elaborate on your qualifications:</p>
                    <p><ul>
                        <li><b>Relevant Experience:</b> Discuss how your previous roles relate to the job. Use specific examples.</li>
                        <li><b>Skills and Qualifications:</b> Highlight key skills, including both hard and soft skills.</li>
                        <li><b>Company Fit:</b> Explain why you’re drawn to the company and how your values align with theirs.</li>
                    </ul>
                    </p>
                    <h4>5. Conclusion</h4>
                    <p>Summarize your qualifications and express your desire for an interview. Thank the employer for considering your application.</p>
                    <h4>6. Closing</h4>
                    <p>Use a professional closing like “Sincerely,” followed by your name.</p>
                    <h2>Sample Cover Letter</h2>
                    <hr />
                    <p>
                        John Doe <br />
                        123 Main St.
                        <br />
                        Anytown, NY 12345 <br />
                        (123) 456-7890<br />
                        john.doe@email.com<br />
                        <br />
                        October 1, 2024<br />
                        <br />

                        Jane Smith<br />
                        XYZ Corporation<br />
                        456 Market St.<br />
                        Anytown, NY 12345<br />

                        Dear Jane Smith,<br />

                        I am writing to express my interest in the Marketing Specialist position at XYZ Corporation as advertised on your careers page. With over five years of experience in digital marketing and a passion for driving brand growth, I am excited about the opportunity to contribute to your team.

                        In my previous role at ABC Company, I successfully led a team to develop and implement a multi-channel marketing campaign that resulted in a 30% increase in website traffic and a 25% boost in sales. My ability to analyze market trends and consumer behavior has enabled me to create targeted strategies that resonate with our audience. Additionally, my proficiency in social media marketing and content creation has helped elevate brand awareness and engagement.

                        I am particularly drawn to XYZ Corporation's commitment to innovation and sustainability. I admire your efforts in creating eco-friendly products and your dedication to corporate social responsibility. I believe that my skills and values align perfectly with your company's mission, and I am eager to be a part of a team that makes a positive impact.

                        Thank you for considering my application. I look forward to the opportunity to discuss how my experiences and vision align with the goals of XYZ Corporation. I am excited about the possibility of contributing to your team and am available for an interview at your earliest convenience.
                        <br />
                        Sincerely,<br />
                        John Doe<br />

                        <div className='cover_letter_image_sample'>
                            <img src={cover_letter_1} alt="cover letter" />
                            <img src={cover_letter_2} alt="cover letter" />
                            <img src={cover_letter_3} alt="cover letter" />
                        </div>
                    </p>
                    <hr />
                    <h2>Tips for Writing an Effective Cover Letter</h2>
                    <p>
                        <ol>
                            <li><b>Tailor Each Letter:</b> Customize your cover letter for each job application to reflect the specific requirements and culture of the company.</li>
                            <li><b>Keep it Concise:</b> Limit your cover letter to one page. Be straightforward and avoid fluff.</li>
                            <li><b>Use Action Verbs:</b> Start sentences with powerful action verbs to emphasize your achievements.</li>
                            <li><b>Proofread:</b> Ensure your cover letter is free of spelling and grammar errors. A polished cover letter reflects professionalism.</li>
                            <li><b>Maintain a Professional Tone:</b> Use a formal tone throughout your letter, maintaining respect and enthusiasm.</li>
                            <li><b>Include SEO Keywords:</b> Incorporate relevant keywords like "resumeera," "how to make a cover letter online," and "cover letter tips" to enhance visibility if the document is shared online.</li>
                        </ol>
                    </p>
                    <h2>Creating a Cover Letter Online</h2>
                    <p>
                        For those looking to create a cover letter quickly, many online tools can assist you. Websites like resumeera offer templates and step-by-step guides on how to make a cover letter online, making it easier to produce a professional document without starting from scratch.
                    </p>
                    <h2>Conclusion: Mastering the Art of Cover Letters</h2>
                    <p>
                        Crafting an effective cover letter is a critical step in your job application process. By understanding its importance, structure, and best practices, you can create a compelling letter that captures the attention of hiring managers. Whether you choose to write your cover letter from scratch or utilize online resources like resumeera to make a cover letter online, ensure that your document is tailored, professional, and free from errors. <br /><br />
                        By following these guidelines and incorporating relevant keywords, you'll optimize your cover letter for both human readers and search engines, increasing your chances of standing out in the competitive job market.
                    </p>

                </div>
                <div className="template-grid row m-3">
                    {CoverImage.CoverImage && CoverImage.CoverImage.length > 0 ? CoverImage.CoverImage.map((image) => (
                        <div
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            key={image.id}
                            className="template-card col-12 col-md-6 col-lg-4"
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img
                                className="template-image"
                                src={image.src}
                                alt={image.alt}
                                style={{ height: '350px', width: '250px' }}
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/cover_letter/${hoveredImage}`}
                                    onClick={handleClick}
                                    className="template-link"
                                >
                                    create
                                </a>
                            )}
                        </div>
                    )) : (
                        <p style={{ color: 'red' }}>No templates available.</p>
                    )}
                </div>
                <h2>Additional Resources</h2>
                <p>
                    <ul>
                        <li><Link to='https://resumeera.xyz'>ResumeEra: Your Go-To for Resumes and Cover Letters</Link> </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default CoverLetter;
