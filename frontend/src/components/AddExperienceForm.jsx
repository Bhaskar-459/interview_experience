import React, { useState } from 'react';
import '../styles/AddExperienceForm.css';

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

const AddExperienceForm = ({ onAddExperience }) => {
  const [formData, setFormData] = useState({ person: '', company: 'Capgemini', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiBaseUrl}/api/experiences/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add experience');
        }
        return res.json();
      })
      .then((newExperience) => {
        alert('Experience added successfully!');
        window.location.reload(); // Reload the page after success
      })
      .catch((err) => {
        console.error('Error adding experience:', err);
        alert('An error occurred while adding the experience.');
      });
  };

  return (
    <form className="add-experience-form" onSubmit={handleSubmit}>
      <h3>Share Your Experience</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="person"
          value={formData.person}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Company</label>
        <select
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        >
          <option value="Capgemini">Capgemini</option>
          <option value="Accenture">Accenture</option>
        </select>
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddExperienceForm;
