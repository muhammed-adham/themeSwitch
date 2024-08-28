import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  // dark mode state
  const [themeState, setThemeState] = useState();

  // get prefer color schema from local storage or operating system if no explicit theme is specified before
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        darkMode();
      } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
        lightMode();
      }
    } else {
      if (localStorage.getItem("theme") === "dark") {
        darkMode();
      } else if (localStorage.getItem("theme") === "light") {
        lightMode();
      }
    }
  }, [themeState]);

  // theme mode handlers
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.getElementById("dark-mode-input").checked = true;
    localStorage.setItem("theme", "dark");
    setThemeState("dark");
  };
  const lightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.getElementById("dark-mode-input").checked = false;
    localStorage.setItem("theme", "light");
    setThemeState("light");
  };

  // theme toggle handler
  const toggleHandler = (e) => {
    if (e.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <div className="theme-toggle-container">
        <p className={`${themeState === "light" ? "active-theme" : null}`}>
          light
        </p>
        <input
          id="dark-mode-input"
          type="checkBox"
          className="theme-toggle-input"
          onChange={toggleHandler}
        />
        <label htmlFor="dark-mode-input" className="theme-toggle-label">
          <span className="theme-btn" />
          <span className="theme-icon">
            <span className="ray" style={{ "--i": 1 }}></span>
            <span className="ray" style={{ "--i": 2 }}></span>
            <span className="ray" style={{ "--i": 3 }}></span>
            <span className="ray" style={{ "--i": 4 }}></span>
            <span className="ray" style={{ "--i": 5 }}></span>
            <span className="ray" style={{ "--i": 6 }}></span>
            <span className="ray" style={{ "--i": 7 }}></span>
            <span className="ray" style={{ "--i": 8 }}></span>
            <span className="star star-1"></span>
            <span className="star star-2"></span>
            <span className="star star-3"></span>
          </span>
        </label>
        <p className={`${themeState === "dark" ? "active-theme" : null}`}>
          dark
        </p>
      </div>
    </>
  );
};

export default ThemeToggle;
