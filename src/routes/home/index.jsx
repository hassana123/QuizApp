import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/moon1.png";
import "./style.css";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-container">
        <img src={Image} alt="" />
        <h3>let's play!</h3>
        <p>
          Quizzes are a great way to help you learn and remember information
        </p>
        <button onClick={() => navigate("./game")} className="play">
          Play
        </button>
        <button className="topics">Topics</button>
        <button
          onClick={() => navigate("./leaderBoard")}
          className="leaderboard"
        >
          LeaderBoard
        </button>
      </div>
    </div>
  );
};

export default Index;
