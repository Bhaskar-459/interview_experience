import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ExperienceList from './components/ExperienceList';
import AddExperienceForm from './components/AddExperienceForm';
import Footer from './components/Footer';

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

const App = () => {
  const [accentureExperiences, setAccentureExperiences] = useState([]);
  const [capgeminiExperiences, setCapgeminiExperiences] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/experiences`)
      .then((res) => res.json())
      .then((data) => {
        const accenture = data.filter((exp) => exp.company.toLowerCase() === 'accenture');
        const capgemini = data.filter((exp) => exp.company.toLowerCase() === 'capgemini');
        setAccentureExperiences(accenture);
        setCapgeminiExperiences(capgemini);
      })
      .catch((err) => console.error('Error fetching experiences:', err));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <ExperienceList
          accentureExperiences={accentureExperiences}
          capgeminiExperiences={capgeminiExperiences}
        />
        <AddExperienceForm
          onAddExperience={(newExperience) => {
            const company = newExperience.company.toLowerCase();
            if (company === 'accenture') {
              setAccentureExperiences((prev) => [...prev, newExperience]);
            } else if (company === 'capgemini') {
              setCapgeminiExperiences((prev) => [...prev, newExperience]);
            }
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
