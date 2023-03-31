import React from "react";

const Index = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  console.log(highScores);

  return (
    <div>
      leaderBoard
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
