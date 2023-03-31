import React, { useEffect, useState } from "react";
import "./style.css";
const Index = ({ correctAnswer, score, question, wrongAnswer, navigate }) => {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("score", JSON.stringify(score));
  }, [name, score]);
  function validate() {
    if (name && name !== " ") {
      setSaved(true);
      const leaderBoard = {
        name: name,
        score: score,
      };
      highScores.push(leaderBoard);

      highScores.sort((a, b) => {
        return b.score - a.score;
      });
      localStorage.setItem("highScores", JSON.stringify(highScores));
    } else {
      alert("cant sumbit empty string");
    }
  }

  return (
    <section className="complete-quiz">
      <div className="stats-cont">
        <p onClick={() => navigate("/")}>back</p>
        <h1>Masha Allah</h1>
        <h3>
          POINTS <br />
          <br /> {score}
        </h3>
        <p>
          correct answers {correctAnswer} out of {question}
        </p>
        <p>
          wrong answers {wrongAnswer} out of {question}
        </p>
      </div>
      <div>
        {saved ? (
          <div>saved</div>
        ) : (
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              validate();
            }}
          >
            <p>Enter your name to save your score in leaderBoard</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name?"
            />

            <button onClick={(e) => e.preventDefault} type="submit">
              save
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Index;
