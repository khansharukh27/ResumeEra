import React from 'react';
// import './NovoresumeBuilder.css';
import { FaCheckCircle } from 'react-icons/fa';

const ResumeEraBuilder = () => {
  const features = [
    {
      icon: <FaCheckCircle className="icon" />, // Replace icons as needed
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
    <div className="novoresume-container">
      <h1 className="title">Why Use The ResumeEra Resume Builder?</h1>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature.icon}
            <div className="feature-content">
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeEraBuilder;
