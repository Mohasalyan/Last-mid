import { NavLink, useLocation, useNavigate } from "react-router-dom";
import quit_smoking from "../../assets/logo.webp";
import "./header.css";
import { useEffect, useState } from "react";
import { useAuth } from "../Auth/ConditionAuth";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const Auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginData = localStorage.getItem("login");

  useEffect(() => {
    if (loginData === "true") {
      Auth.logIn(loginData);
    }
  }, [loginData]);

  const handleLogout = () => {
    Auth.logOut();

    localStorage.setItem("login", false);

    navigate("/sign-in", { replace: true });
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav>
        <input
          type="checkbox"
          id="nav-toggle"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <div className="logo">
          <NavLink to="/">
            <img src={quit_smoking} alt="quit_smoking" />
          </NavLink>
        </div>
        <ul className="links" onClick={toggleCheckbox}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          {!Auth.userLogin ? (
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>

          {Auth.userLogin && (
            <li>
              <button className="button_logOut" onClick={handleLogout}>
                LogOut
              </button>
            </li>
          )}
        </ul>
        <label className="icon-burger" onClick={toggleCheckbox}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </>
  );
};

export default Header;
