import React from 'react';
import '../styles/ExperienceList.css';
import CompanySection from './CompanySection';

const ExperienceList = ({ accentureExperiences, capgeminiExperiences }) => (
  <section className="experience-list">
    <CompanySection title="Accenture" experiences={accentureExperiences} />
    <CompanySection title="Capgemini" experiences={capgeminiExperiences} />
  </section>
);

export default ExperienceList;
