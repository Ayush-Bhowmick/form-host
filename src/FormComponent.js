import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name} is required`;
    } else {
      switch (name) {
        case 'emailAddress':
          if (!emailValidator.test(value)) {
            error = 'Email is not valid';
          }
          break;
        case 'password':
          if (!passwordValidator.test(value)) {
            error = 'Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!';
          }
          break;
        case 'passwordConfirmation':
          if (value !== formData.password) {
            error = 'Password does not match Confirmation';
          }
          break;
        default:
          break;
      }
    }
    setErrors({ ...errors, [name]: error });
    return error === "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = Object.keys(formData);
    let isValid = true;
    formFields.forEach(field => {
      isValid = validateField(field, formData[field]) && isValid;
    });

    if (isValid) {
      navigate('/details', { state: formData });
    }
  };

  return (
    <div className="main">
      <h3>SignUp Form</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.firstName && <div className="errorMsg">{errors.firstName}</div>}
        
        <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.lastName && <div className="errorMsg">{errors.lastName}</div>}
        
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.username && <div className="errorMsg">{errors.username}</div>}
        
        <input type="email" placeholder="Email Address" name="emailAddress" value={formData.emailAddress} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.emailAddress && <div className="errorMsg">{errors.emailAddress}</div>}
        
        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"} Password</button>
        {errors.password && <div className="errorMsg">{errors.password}</div>}
        
        <input type="password" placeholder="Confirm Password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.passwordConfirmation && <div className="errorMsg">{errors.passwordConfirmation}</div>}
        
        <input type="text" placeholder="Phone Number" name="phoneNo" value={formData.phoneNo} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.phoneNo && <div className="errorMsg">{errors.phoneNo}</div>}
        
        <select name="country" value={formData.country} onChange={handleChange} onBlur={handleBlur}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <div className="errorMsg">{errors.country}</div>}
        
        <select name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
        </select>
        {errors.city && <div className="errorMsg">{errors.city}</div>}
        
        <input type="text" placeholder="PAN Number" name="panNo" value={formData.panNo} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.panNo && <div className="errorMsg">{errors.panNo}</div>}
        
        <input type="text" placeholder="Aadhar Number" name="aadharNo" value={formData.aadharNo} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
        {errors.aadharNo && <div className="errorMsg">{errors.aadharNo}</div>}
        
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default FormComponent;
