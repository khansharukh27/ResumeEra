import '../previewfolder/CSS/preview15.css'

const Preview15 = () => {
    return (
        <div>
            <div class="resume">
                <div class="header">
                    <h1>John Doe</h1>
                    <p>Web Developer</p>
                </div>

                <div class="content">
                    <div class="left-column">
                        <div class="profile-picture">
                            <img src="profile.jpg" alt="Profile Picture"/>
                        </div>

                        <div class="contact-info">
                            <h2>Contact Information</h2>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: johndoe@example.com</p>
                            <p>LinkedIn: linkedin.com/in/johndoe</p>
                        </div>

                        <div class="skills">
                            <h2>Skills</h2>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </div>

                    <div class="right-column">
                        <div class="section">
                            <h2>Profile</h2>
                            <p>Experienced web developer with a strong background in front-end development and a passion for creating user-friendly, visually appealing websites.</p>
                        </div>

                        <div class="section">
                            <h2>Experience</h2>
                            <h3>Web Developer</h3>
                            <p>ABC Company | Jan 2020 - Present</p>
                            <p>Developed and maintained the company’s website, resulting in a 30% increase in user engagement.</p>

                            <h3>Junior Developer</h3>
                            <p>XYZ Company | May 2018 - Dec 2019</p>
                            <p>Assisted in the development of various web projects and contributed to code reviews and debugging processes.</p>
                        </div>

                        <div class="section">
                            <h2>Education</h2>
                            <h3>Bachelor's in Computer Science</h3>
                            <p>University of Technology | Graduated May 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Preview15;