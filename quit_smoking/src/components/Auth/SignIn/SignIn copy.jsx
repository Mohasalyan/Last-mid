import React, { useState } from "react";
import "../signIn.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {



  const [formData, setFormData] = useState({
    Gender: "",
    age: "",
    number_smoke_daily: "",
    Price_cigarettes: "",
    email: "",
    pswd: "",
  });

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const newErrors = [];

    if (!/[A-Z]/.test(newPassword)) {
      newErrors.push("• Capital letter");
    }

    if (!/[a-z]+/.test(newPassword) || !/[0-9]+/.test(newPassword)) {
      newErrors.push("• Letters and numbers");
    }

    if (!/[!@#$%//**--]/.test(newPassword)) {
      newErrors.push("• Symbols!@#$%//**--");
    }

    if (newPassword.length < 10) {
      newErrors.push("• Not less than 10 letters");
    }

    setErrors(newErrors);
  };


  return (
    <div className="signup_div">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form method="post" id="form_logup" onSubmit={handleSubmitSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>

            <div className="radio_input_Gender">
              <div className="pane">
                <label className="label">
                  <span>Man</span>
                  <input
                    id="left"
                    className="input_Gender"
                    name="Gender"
                    type="radio"
                    value="Man"
                    onChange={handleChangeSignup}
                  />
                </label>

                <label className="label">
                  <span>Woman</span>
                  <input
                    id="middle"
                    className="input_Gender"
                    name="Gender"
                    type="radio"
                    value="Woman"
                    onChange={handleChangeSignup}
                  />
                </label>

                <span className="selection"></span>
              </div>
            </div>

            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              value={formData.age}
              onChange={handleChangeSignup} // إضافة هذا
            />

            <input
              type="number"
              name="number_smoke_daily"
              placeholder="The number of cigarettes they smoke daily"
              value={formData.number_smoke_daily}
              onChange={handleChangeSignup} // إضافة هذا
              required
            />

            <input
              type="number"
              name="Price_cigarettes"
              placeholder="Price of a pack of cigarettes"
              value={formData.Price_cigarettes}
              onChange={handleChangeSignup} // إضافة هذا
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChangeSignup} // إضافة هذا
            />

            <div className="conditions_password">
              <input
                type={showPassword ? "text" : "password"}
                name="pswd"
                placeholder="Password"
                onChange={handlePasswordChange}
                value={formData.pswd}
                required
              />

              <div className="All_Eye" onClick={toggleVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>

            {errors.length > 0 && (
              <div className="error_password">
                {errors.map((error, index) => (
                  <p key={index} className="error">
                    {error}
                  </p>
                ))}
              </div>
            )}

            <input
              disabled={errors.length > 0}
              className="button"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
