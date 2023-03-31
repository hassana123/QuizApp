import React from "react";
import "./style.css";
import Ramadan from "../../assets/images/moon.png";

const index = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <img src={Ramadan} alt="mosque" />
        <h2>Ramadan Quiz</h2>
      </div>
    </div>
  );
};

export default index;
