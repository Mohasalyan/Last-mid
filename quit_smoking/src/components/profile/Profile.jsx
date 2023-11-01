import React from "react";
import "./profile.css";
import ImgMan from "../../assets/man.webp";
import ImgWoman from "../../assets/woman.webp";
import { NavLink, Navigate } from "react-router-dom";

const Profile = () => {
  const loginData = localStorage.getItem("login");

  if (loginData === "true") {
    const userData = JSON.parse(localStorage.getItem("user_data")) || {};

    const emailPrefix = userData.emailSignUp.split("@")[0];

    ///////////////

    const dateSignUp = userData.date_SignUp;

    const [day, month, year] = dateSignUp.split("-").map(Number);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const formattedDate = `${day} / ${monthNames[month - 1]} / ${year}`;

    ///////////////

    const number_cigarettes = userData.number_smoke_daily;

    const cigarette_price = userData.Price_cigarettes;

    const calculate_today = (
      (cigarette_price / 20) *
      number_cigarettes
    ).toFixed(2);

    const calculate_month = (calculate_today * 30).toFixed(2);

    const calculate_year = (calculate_month * 12).toFixed(2);

    return (
      <div className="card_Profile">
        <div className="img">
          {userData.Gender === "Man" ? (
            <img src={ImgMan} alt="man" />
          ) : (
            <img src={ImgWoman} alt="woman" />
          )}
        </div>

        <div className="infos">
          <div className="name">
            <h2>{emailPrefix}</h2>
            <h4>{userData.emailSignUp}</h4>
          </div>

          <ul className="stats">
            <li>
              <h4>Gender</h4>
              <h3>{userData.Gender}</h3>
            </li>
            <li>
              <h4>Age</h4>
              <h3>{userData.age} Year</h3>
            </li>
          </ul>

          <p className="text">
            Date of registration:
            <span className="span"> ( {formattedDate} )</span>
          </p>
          <p className="text">
            The number of cigarettes they smoke daily:
            <span className="span"> ( {number_cigarettes} )</span>
          </p>
          <p className="text">
            Price of a pack of cigarettes:
            <span className="span"> ( {cigarette_price} $ )</span>
          </p>

          <div className="cost_calculation">
            <p>The effect of smoking on spending</p>
            <ul className="stats">
              <li>
                <h4>In Day</h4>
                <h3>{calculate_today} $</h3>
              </li>

              <li>
                <h4>In Month</h4>
                <h3>{calculate_month} $</h3>
              </li>

              <li>
                <h4>In Year</h4>
                <h3>{calculate_year} $</h3>
              </li>
            </ul>
          </div>
        </div>

        <NavLink to="/quit-smoking" className="button_logOut">
          Quit Smoking plan
        </NavLink>
      </div>
    );
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default Profile;
