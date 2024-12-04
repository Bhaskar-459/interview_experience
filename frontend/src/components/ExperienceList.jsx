import React from 'react';
import '../styles/ExperienceList.css';
import CompanySection from './CompanySection';

const ExperienceList = ({ accentureExperiences, capgeminiExperiences, gyanDataExperiences }) => (
  <section className="experience-list">
    <CompanySection title="Accenture" experiences={accentureExperiences} />
    <CompanySection title="Capgemini" experiences={capgeminiExperiences} />
    <CompanySection title="GyanData" experiences={gyanDataExperiences} />
  </section>
);

export default ExperienceList;
