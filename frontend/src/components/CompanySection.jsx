import React from 'react';
import '../styles/ExperienceList.css';
import ExperienceCard from './ExperienceCard';

const CompanySection = ({ title, experiences }) => (
  <div className="company-section">
    <h2>{title}</h2>
    <div className="experience-cards">
      {experiences.length > 0 ? (
        experiences.map((exp) => <ExperienceCard key={exp._id} experience={exp} />)
      ) : (
        <p>No experiences shared yet.</p>
      )}
    </div>
  </div>
);

export default CompanySection;
