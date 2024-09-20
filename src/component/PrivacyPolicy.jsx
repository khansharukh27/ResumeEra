import React from 'react';
import '../css/privacypolicy.css'; // Custom CSS for the Privacy Policy component
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/privacypolicy" />
      <title>Privacy Policy</title>
            <meta name="description" content="this page is releted to privacy policy to avoid miss consumption." />
            </Helmet>
      <h1>Privacy Policy</h1>
      <p>Effective date: September 14, 2024</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to ResumeEra! We are committed to protecting your personal information and your right to privacy. 
          If you have any questions or concerns about our policy or our practices regarding your personal information, 
          please contact us at support@resumeera.xyz.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when registering on our website, 
          expressing an interest in our services, or otherwise contacting us. This information may include:
        </p>
        <ul>
          <li>Name and contact information (email address, phone number, etc.)</li>
          <li>Resume-related data (work experience, education, etc.)</li>
          <li>Payment and transaction details (if applicable)</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect in the following ways:
        </p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To personalize your experience on our website</li>
          <li>To send administrative information, such as updates, security alerts, and support messages</li>
          <li>For analytics to improve our services</li>
          <li>For legal purposes where necessary</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties. 
          However, we may share data with trusted third parties to help us provide our services, 
          such as payment processors, hosting providers, and analytics services. 
          All such third parties are required to keep your data confidential.
        </p>
      </section>

      <section>
        <h2>5. Your Data Protection Rights</h2>
        <p>
          You have the right to access, correct, update, or request deletion of your personal information. 
          If you would like to exercise these rights, please contact us at support@resumeera.xyz.
        </p>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to provide our services and comply with 
          our legal obligations. You may request the deletion of your personal data by contacting us.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any significant changes 
          by posting the new privacy policy on this page. Your continued use of the service after any changes 
          will constitute your acknowledgment of the changes.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at support@resumeera.xyz.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
