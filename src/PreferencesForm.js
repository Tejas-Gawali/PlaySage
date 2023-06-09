import React, { useState } from 'react';

const PreferencesForm = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({ genre: '', platform: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Genre:
        <input type="text" name="genre" value={preferences.genre} onChange={handleChange} />
      </label>
      <label>
        Platform:
        <input type="text" name="platform" value={preferences.platform} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PreferencesForm;
