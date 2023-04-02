import React from "react";
import "./style.css";
const Index = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  console.log(highScores);

  return (
    <div className="leaderboard-cont">
      <h2>
        leaderBoard <sub>still cooking</sub>
      </h2>
      {highScores.map((score, index) => {
        return (
          <ul key={index}>
            <li>
              {score.name}- {score.score}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Index;
