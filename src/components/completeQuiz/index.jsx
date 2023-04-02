import React, { createRef, useEffect, useState } from "react";
import "./style.css";
import { useScreenshot } from "use-react-screenshot";
const Index = ({ correctAnswer, score, question, wrongAnswer, navigate }) => {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  //let imgUrl = document.getElementById("img").src;
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("score", JSON.stringify(score));
  }, [name, score]);
  const getImage = () => {
    takeScreenshot(ref.current);
  };
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
      {saved ? (
        <>
          <div ref={ref} className="stats-cont">
            <p onClick={() => navigate("/")}>back</p>
            <h1>Masha Allah {name}</h1>
            <p>you did Amazing !</p>
            <h3>
              POINTS <br />
              <br /> <span>{score}</span>
            </h3>
            <p>
              Total correct answers:
              <span>
                {correctAnswer} out of {question}
              </span>
            </p>
            <p>
              Total wrong answers:
              <span>
                {wrongAnswer} out of {question}
              </span>
            </p>
            <button onClick={getImage}>
              Take a screenshot for the socials
            </button>
            <div className="img-cont">
              <img
                id="img"
                className="img-social"
                src={image}
                alt="screenshot"
              />
            </div>
          </div>
          <div className="socials">
            <a
              href={`whatsapp://send?text=${encodeURIComponent(image)}`}
              id="btn"
            >
              share
            </a>
          </div>
        </>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
        >
          <p>Enter your name to save your POINT!</p>
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
    </section>
  );
};

export default Index;
