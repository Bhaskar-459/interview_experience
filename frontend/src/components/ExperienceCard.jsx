import React from 'react';
import '../styles/ExperienceList.css';

const ExperienceCard = ({ experience }) => (
  <div className="experience-card">
    <h3>{experience.person}</h3>
    <p>{experience.description}</p>
  </div>
);

export default ExperienceCard;
