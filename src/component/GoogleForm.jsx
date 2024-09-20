import React, { useState } from 'react';

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXW28hWuIsTK_6BrOjDEJMYFYxxMPEi-IR5vq8zTtwU4uvgWg2xCdTyEwH3hxwnP_FOA/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Form data saved successfully!');
      } else {
        alert('Error saving data. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error!');
    }

    // Reset form
    setFormData({ Name: '', Email: '', Message: '' });
  };

  return (
    <div>
      <h2>Submit Your Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GoogleForm;
