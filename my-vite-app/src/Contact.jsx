import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
      });
    } else if (name === "email" && !validateEmail(value)) {
      setErrors({ ...errors, email: "Please enter a valid email address." });
    }
  };

  return (
    <main className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          
          <form id="contact-form" method="post" action="" className="bg-light p-4 shadow rounded">
          <h2 className="text-center mb-4">Contact Me</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="5"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={
                  Object.values(errors).some((error) => error !== "") ||
                  Object.values(formData).some((value) => value.trim() === "")
                }
                className="btn btn-primary w-100"
              >
               Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
