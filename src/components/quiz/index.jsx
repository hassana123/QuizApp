import React from "react";
import { useState } from "react";
import "./style.css";

const Index = (props) => {
  const [score, setScore] = useState(0);
  const [correctA, setCorrectA] = useState(0);
  const [wrongA, setWrongA] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleNext = () => {
    setClicked(false);
    if (currentQ < props.questions.length - 1) {
      //props.getData(score, correctA);
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
    } else {
      props.setShowComplete(true);
    }
  };

  const handleCorrectAnswer = (isCorrect) => {
    setClicked(true);
    if (isCorrect) {
      setScore(score + 50);
      setCorrectA(correctA + 1);
      setTimeout(() => {
        handleNext();
      }, 1000);
    } else {
      setWrongA(wrongA + 1);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };
  props.getData(score, correctA, wrongA);
  return (
    <div className="quiz">
      <div className="sect-1">
        <section className="q-sect">
          <div className="grid">
            <small className="c-count">
              {correctA}
              <div></div>
            </small>
            <div className="time">
              <h4>{props.time}</h4>
            </div>

            <small className="w-count">
              <div></div>
              {wrongA}
            </small>
          </div>
          <div className="q-count">
            <span>
              Question {currentQ + 1} Of {props.questions.length}
            </span>
          </div>
          <div className="q-cont">
            <h1>{props.questions[currentQ].question}</h1>
          </div>
        </section>
        {/* <progress
          className="progress-bar"
          value={`${(currentQ / props.questions.length) * 100}`}
          max={props.questions.length * 15}
        ></progress> */}
        <div className="score">
          {/* <button>Quit</button> */}
          {/* <button disabled={!clicked} onClick={handleNext}>
            Next
          </button> */}
          <h2>{score}</h2>
        </div>
      </div>
      <div className="answer-sect">
        <div className="options-cont">
          {props.questions[currentQ].answerOpt.map((ans, i) => {
            return (
              <button
                disabled={clicked}
                onClick={() => {
                  handleCorrectAnswer(ans.isCorrect);
                }}
                className={`options ${
                  clicked && ans.isCorrect ? "correct" : "options"
                }`}
                key={i}
              >
                {ans.opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
