import React, { useEffect, useState } from "react";
import ThemeToggle from "../common/ThemeToggle";

const Home = () => {
  const [themeState, setThemeState] = useState();

  return (
    <>
      <div className="astronaut">
        <img src="./src/assets/images/ARTIST-PP.jpg" alt="" />
      </div>
      <div className="container home-page">
        <div
          className={`theme-banner-container ${
            themeState === "dark" ? "active-dark-banner" : "active-light-banner"
          }`}
        ></div>
        <ThemeToggle />
        <div className="container">
          <h1>theme animation</h1>
          <h3>Elevate Your Website with Animated Theme Switching.</h3>
          <p>
            A website where themes don't just change, they transform. Animated
            theme switching adds a dynamic and captivating element to your
            online presence, making it stand out from the crowd. With seamless
            transitions and visually stunning effects, your website will come
            alive, leaving a lasting impression on visitors.
          </p>
          <h5>by muhammed adham</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
