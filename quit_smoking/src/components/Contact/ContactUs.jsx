import React, { useState } from "react";
import "./contact.css";
import ScrollVisibility from "./../ScrollVisibility/ScrollVisibility";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات النموذج:", formData);
  };

  return (
    <div className="form-main">
      <div className="main-wrapper">
        <ScrollVisibility>
          <h2 className="form-head">Contact us</h2>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="full_name">
                Full Name
              </label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="number"
                name="phone_number"
                required
                value={formData.phone_number}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="phone_number">
                Phone number
              </label>
            </div>

            <div className="form-card">
              <textarea
                className="form-textarea"
                rows="3"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label className="form-textarea-label" htmlFor="message">
                message
              </label>
            </div>

            <div className="btn-wrap">
              <button type="submit">Submit</button>
            </div>
          </form>
        </ScrollVisibility>
      </div>

      <div className="text_call">
        <p className="text">Call us: 123456789</p>

        <div className="icon">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
