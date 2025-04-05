import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { marriedData } from '../../Redux/action';
import { useSelector } from 'react-redux';
import '../../component/Shadi article/shadiArticle css/shadiformfordata.css';

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    // Personal Info
    image: null,
    fullName: '',
    dob: '',
    birthTime: '',
    birthPlace: '',
    religion: '',
    caste: '',
    height: '',
    bloodGroup: '',
    education: '',
    occupation: '',

    // Family Background
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    totalSisters: '',
    totalBrothers: '',
    mobile: '',
    address: ''
  });

  const result = useSelector((state) => state.reducer.templatePage[0]) || JSON.parse(localStorage.getItem("templatePage"))
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('result in personal info form:-', result);
  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('personalInfo');
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Populate form with saved data if available
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    // Check if the input is a file (image in this case)
    if (files && files[0]) {
      const file = files[0];
      // Here, you can store the file itself or you can convert it to a URL for previewing
      setFormData({
        ...formData,
        [name]: file  // Storing the file object itself
      });
  
      // Or, if you want to store the image as a URL for preview purposes:
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader.result  // Storing the image as a base64 data URL for preview
        });
      };
      reader.readAsDataURL(file); // This will create a base64 string of the image
    } else {
      setFormData({
        ...formData,
        [name]: value  // If it's not a file, it's a regular input field (e.g., text)
      });
    }
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to localStorage
    localStorage.setItem('personalInfo', [JSON.stringify(formData)]);
    // Dispatch data to Redux
    dispatch(marriedData(formData));
    alert('Data has been saved!');
    const path = `/preview${result}`;
    navigate(path); // Navigate to the preview page
  };

  return (
    <div>
      <h2>Personal Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div>
          <h3>Personal Information</h3>
          <div>
          <input 
          name='image'
          type="file" 
          accept="image/*" 
          onChange={handleChange}  // Trigger when file is selected
        />
        {formData.image && (
          <div>
            <h4>Image Preview:</h4>
            <img src={formData.image} alt="Uploaded Preview" width="200" />
          </div>
        )}
          </div>
          <div>

            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birth Time:</label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birth Place:</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Religion:</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Caste:</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Blood Group:</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Education:</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Occupation/Job:</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Family Background Section */}
        <div>
          <h3>Family Background</h3>
          <div>
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Father's Occupation:</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mother's Name:</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Total Sisters:</label>
            <input
              type="number"
              name="totalSisters"
              value={formData.totalSisters}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Total Brothers:</label>
            <input
              type="number"
              name="totalBrothers"
              value={formData.totalBrothers}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button className='submitbutton' type="submit">Submit</button>
      </form>
    </div>
  );
}