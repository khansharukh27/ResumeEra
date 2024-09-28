import React from 'react';
import '../../css/Important_Post/ResumeComponent.css'; // External CSS for styling
import skill_image from '../../image/image_for_link/skill_image.jpg'
import cv_image from '../../image/image_for_link/cv_image.png'

const ResumeComponent = () => {
  return (
    <div className="resume-template-page container">
      <h1>Create a Professional Resume with Free Templates and Showcase Your Skills</h1>
      
      {/* Section 1 */}
      <section>
        <h2>Understanding the Importance of Skills in a Resume</h2>
        <p>
          Skills are one of the most critical aspects of any <strong>resume</strong>. Whether you're applying for your first job or making a career transition, the skills section is where you can truly shine. It's essential to understand what skills are relevant to the job you're applying for and how to highlight them in your <strong>curriculum vitae (CV)</strong>. A professional resume template can help you effectively display these skills to potential employers.
        </p>
        <p>
          For example, if you're applying for a technical role, you may want to emphasize skills like programming, data analysis, or problem-solving. If you're in a creative field, showcasing design skills, creativity, and innovation is key. Many job seekers overlook the importance of soft skills such as communication, teamwork, and adaptability, but these can often be the deciding factor for employers.
        </p>

        {/* First Image */}
        <img 
          src={skill_image} 
          alt="Skills in a Resume" 
          className="resume-image"
        />

        <p>
          Employers often scan resumes quickly, so having a clean, structured template that highlights your skills will ensure your resume makes it past the initial screening.
        </p>
      </section>

      {/* Table 1: Resume Skills Categories */}
      <section>
        <h2>Resume Skills Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Technical Skills</td>
              <td>Programming, Web Development, Data Analysis</td>
            </tr>
            <tr>
              <td>Creative Skills</td>
              <td>Graphic Design, Video Editing, Content Creation</td>
            </tr>
            <tr>
              <td>Soft Skills</td>
              <td>Communication, Teamwork, Adaptability</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Quote 1 */}
      <blockquote>
        "A resume is your first impression. Make it count by showcasing the skills that align with the job you're applying for." – Career Expert
      </blockquote>

      {/* Section 2 */}
      <section>
        <h2>What is a Curriculum Vitae (CV)?</h2>
        <p>
          A <strong>curriculum vitae</strong>, often abbreviated as CV, is a detailed document that outlines your academic and professional achievements. While similar to a resume, a CV is generally longer and more comprehensive.
        </p>

        {/* Second Image */}
        <img 
          src={cv_image} 
          alt="Curriculum Vitae Layout" 
          className="resume-image"
        />

        <p>
          In some countries, the term CV and resume are used interchangeably. When creating a CV, it is essential to include sections like education, work experience, publications, and any professional memberships or certifications you hold.
        </p>
      </section>

      {/* Table 2: Resume vs CV */}
      <section>
        <h2>Resume vs CV: Key Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Resume</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Length</td>
              <td>1-2 Pages</td>
              <td>Multiple Pages</td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>Skills and Work Experience</td>
              <td>Detailed Academic Achievements</td>
            </tr>
            <tr>
              <td>Use Case</td>
              <td>Corporate Jobs</td>
              <td>Academic and Research Jobs</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section 3 */}
      <section>
        <h2>The Benefits of Using a Free Resume Template</h2>
        <p>
          One of the main advantages of using a free resume template is that it simplifies the resume creation process. With a professionally designed template, you don't have to worry about formatting, layout, or design.
        </p>
        <p>
          Free resume templates are available in various <strong>file formats</strong>, such as PDF, Word, and Google Docs, allowing flexibility based on the job you're applying for. PDF is the most recommended format as it preserves formatting.
        </p>

        {/* Table 3: File Format Pros and Cons */}
        <h2>File Formats for Resumes: Pros and Cons</h2>
        <table>
          <thead>
            <tr>
              <th>File Format</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PDF</td>
              <td>Preserves formatting, compatible with ATS</td>
              <td>Not easily editable</td>
            </tr>
            <tr>
              <td>Word</td>
              <td>Easily editable</td>
              <td>Formatting issues on different versions</td>
            </tr>
            <tr>
              <td>Google Docs</td>
              <td>Accessible from any device</td>
              <td>Requires internet access</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Quote 2 */}
      <blockquote>
        "A well-organized resume not only opens doors but can fast-track your career in ways you never thought possible." – HR Professional
      </blockquote>

      {/* Section 4 */}
      <section>
        <h2>How to Choose the Right Resume Template for Your Job Application</h2>
        <p>
          Selecting the right <strong>resume template</strong> depends largely on the type of job you're applying for. If you're applying for a creative role, choose a template that is visually appealing. For traditional roles, a clean and simple template works best.
        </p>
        <p>
          No matter the industry, always make sure the template is easy to read and structured in a way that highlights your <strong>job resume skills</strong>.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2>Final Thoughts on Using Free Resume Templates</h2>
        <p>
          Resume templates save time and make the resume creation process more manageable. With hundreds of options available, from creative to formal layouts, you can find a template that fits your style and industry. By selecting the right format, using relevant skills, and optimizing for ATS, you can increase your chances of landing your dream job.
        </p>
      </section>
    </div>
  );
};

export default ResumeComponent;
