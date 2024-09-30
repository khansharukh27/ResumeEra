import React from 'react';
import '../css/termsAndServices.css'; // Custom CSS for the Terms and Services component
import { Helmet } from 'react-helmet';

const TermsAndServices = () => {
  return (
    <div className="aboutResumeEra">
      <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/terms-of-service" />
      <title>Terms and Services</title>
            <meta name="description" content="this page is releted to services terms to avoid miss consumption." />
            </Helmet>
      <h1>Terms and Services</h1>
      <p>Effective date: September 14, 2024</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using ResumeEra.xyz, you agree to comply with and be bound by these terms and services, 
          which govern your use of our website. If you do not agree with these terms, please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. Changes to the Terms</h2>
        <p>
          We may update or modify these terms at any time without prior notice. It is your responsibility to review 
          the terms regularly. Continued use of our services after any changes will indicate your acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>
          You agree to use our website for lawful purposes only. You are prohibited from:
        </p>
        <ul>
          <li>Engaging in any activity that violates any local, state, national, or international law</li>
          <li>Posting harmful or malicious content</li>
          <li>Attempting to interfere with the website’s security, services, or network</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All content on ResumeEra.xyz, including text, graphics, logos, and software, is the property of ResumeEra 
          and is protected by intellectual property laws. You may not use, reproduce, or distribute any part of our 
          content without prior written permission.
        </p>
      </section>

      <section>
        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to ResumeEra.xyz if you violate these terms or 
          engage in any harmful behavior that impacts our services or users.
        </p>
      </section>

      <section>
        <h2>6. Disclaimer of Warranties</h2>
        <p>
          Our website and services are provided on an "as is" and "as available" basis. We make no warranties, 
          expressed or implied, regarding the operation of our website, or the accuracy or reliability of any 
          information or content provided.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, ResumeEra.xyz and its affiliates shall not be liable for any 
          direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, 
          even if we have been advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. 
          Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction 
          of the courts of Delhi.
        </p>
      </section>

      <section>
        <h2>9. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these terms, please contact us at <strong>support@resumeera.xyz</strong>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndServices;
