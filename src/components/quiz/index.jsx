import React from "react";
import { useState } from "react";
import "./style.css";
import { useEffect } from "react";

const Index = (props) => {
  const [score, setScore] = useState(0);
  const [correctA, setCorrectA] = useState(0);
  const [wrongA, setWrongA] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [time, setTime] = useState(0);
  let qs;
  if (props.easyQ) {
    qs = props.questions.slice(0, 15);
  } else if (props.mediumQ) {
    qs = props.questions.slice(15, 31);
  } else if (props.hardQ) {
    qs = props.questions.slice(31);
  }
  //console.log(qs);
  const handleNext = () => {
    setClicked(false);
    if (currentQ < qs.length - 1) {
      //props.getData(score, correctA);
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
    } else {
      props.setShowComplete(true);
    }
  };
  let gameTime;
  useEffect(() => {
    setTime(props.time);
  }, [props.time]);

  const handleCorrectAnswer = (isCorrect) => {
    setClicked(true);
    if (isCorrect) {
      setScore(score + 50);
      setCorrectA(correctA + 1);
      setAttempt(attempt + 1);
      setTimeout(() => {
        handleNext();
      }, 1000);
    } else {
      setWrongA(wrongA + 1);
      setAttempt(attempt + 1);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };
  useEffect(() => {
    props.getData(qs, score, correctA, wrongA, attempt);
  }, [props, qs, score, correctA, wrongA, attempt]);

  return (
    <div className="quiz">
      <section className="sect-qs">
        <div className="sect-1">
          <section className="q-sect">
            <div className="grid">
              <small className="c-count">
                {correctA}
                <div></div>
              </small>
              <div className="time">
                <h4>{time}</h4>
              </div>

              <small className="w-count">
                <div></div>
                {wrongA}
              </small>
            </div>
            <div className="q-count">
              <span>
                question {currentQ + 1} Of {qs.length}
              </span>
              <h2>{score}</h2>
            </div>
            <div className="q-cont">
              <h1>{qs[currentQ].question}</h1>
            </div>
          </section>
          {/* <progress
          className="progress-bar"
          value={`${(currentQ / props.questions.length) * 100}`}
          max={props.questions.length * 15}
        ></progress> */}
          <div>
            {/* <button>Quit</button> */}
            {/* <button disabled={!clicked} onClick={handleNext}>
            Next
          </button> */}
          </div>
        </div>
      </section>

      <div className="answer-sect">
        <div className="options-cont">
          {qs[currentQ].answerOpt.map((ans, i) => {
            return (
              <button
                disabled={clicked}
                onClick={() => {
                  handleCorrectAnswer(ans.isCorrect);
                }}
                className={`options ${
                  clicked && ans.isCorrect ? "correct" : "options"
                } ${clicked && !ans.isCorrect ? "wrong" : "options"}`}
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
