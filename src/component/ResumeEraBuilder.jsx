import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ResumeEraBuilder = () => {
  const features = [
    {
      icon: <FaCheckCircle className="icon" />, 
      title: "Free AND Premium",
      description:
        "We offer both free and premium features. Want your resume to have that extra punch? Upgrade to Premium. On a budget? That's OK too - you can use our resume builder completely free of charge.",
    },
    {
      icon: <FaCheckCircle className="icon" />,
      title: "Creative and Professional Resume Templates",
      description:
        "Whatever resume template you're looking for, we've got it! Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!",
    },
    {
      icon: <FaCheckCircle className="icon" />,
      title: "NO Hidden Fees",
      description:
        "With ResumeEra, you won’t spend hours working on your resume, just to be hit with a hidden paywall. Our resume builder will notify you if you’re using any of our premium features in advance.",
    },
    {
      icon: <FaCheckCircle className="icon" />,
      title: "ATS-Friendly",
      description:
        "Our resume templates are ATS-friendly. It means your resume won’t automatically be rejected because an ATS can’t read it.",
    },
    {
      icon: <FaCheckCircle className="icon" />,
      title: "Live Content Feedback",
      description:
        "Our CV builder provides real-time feedback on your resume content, ensuring that your resume reaches its full potential!",
    },
    {
      icon: <FaCheckCircle className="icon" />,
      title: "Edit Your Resume in Real Time",
      description:
        "As you edit your resume with our builder, you’ll immediately see the changes applied to your document.",
    },
  ];

  return (
    <div className="novoresume-container" style={styles.container}>
      <h1 className="title" style={styles.title}>Why Use The ResumeEra Resume Builder?</h1>
      <div className="features-list" style={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className="feature-item" style={styles.featureItem}>
            {feature.icon}
            <div className="feature-content" style={styles.featureContent}>
              <h2 className="feature-title" style={styles.featureTitle}>{feature.title}</h2>
              <p className="feature-description" style={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333',
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
  featureItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease',
  },
  featureContent: {
    marginLeft: '15px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  featureDescription: {
    fontSize: '1.5rem',
    color: '#666',
    lineHeight: '1.5',
  },
  icon: {
    color: '#28a745',
    fontSize: '5rem',
  }
};

export default ResumeEraBuilder;
