import { useState } from "react";
import Quiz from "../../components/quiz";
import CompleteQuiz from "../../components/completeQuiz";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [showComplete, setShowComplete] = useState(false);

  const questions = [
    {
      question: "what is 2 + 3",
      answerOpt: [
        { opt: "4", isCorrect: false },
        { opt: "5", isCorrect: true },
        { opt: "2", isCorrect: false },
        { opt: "1", isCorrect: false },
      ],
    },
    {
      question: "what is 7 + 3",
      answerOpt: [
        { opt: "4", isCorrect: false },
        { opt: "5", isCorrect: false },
        { opt: "10", isCorrect: true },
        { opt: "1", isCorrect: false },
      ],
    },
    {
      question: "what is 5 + 3",
      answerOpt: [
        { opt: "4", isCorrect: false },
        { opt: "5", isCorrect: false },
        { opt: "2", isCorrect: false },
        { opt: "8", isCorrect: true },
      ],
    },
    {
      question: "what is 10 + 19",
      answerOpt: [
        { opt: "4", isCorrect: false },
        { opt: "29", isCorrect: true },
        { opt: "2", isCorrect: false },
        { opt: "1", isCorrect: false },
      ],
    },
  ];

  const [play, setPlay] = useState(false);
  const [tscore, setTscore] = useState(0);
  const [tWrongans, setTwrongans] = useState(0);
  const [tCorrectAns, setTcorrectAns] = useState(0);
  const [time, setTime] = useState();

  let counter;
  // useEffect(() => {
  //   localStorage.setItem("recentScore", JSON.stringify(tscore));
  // }, [tscore]);
  function start() {
    setPlay(true);
    startTimer();
  }
  function startTimer() {
    counter = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          clearInterval(counter);
          setTime("time off");
          // setShowComplete(true);
        }
        return time - 1;
      });
    }, 1000);
  }

  const getData = (tScore, tCorrectans, tWrongans) => {
    setTscore(tScore);
    setTcorrectAns(tCorrectans);
    setTwrongans(tWrongans);
  };

  return (
    <div className="game-container">
      {play ? (
        <>
          {showComplete ? (
            <CompleteQuiz
              navigate={navigate}
              wrongAnswer={tWrongans}
              question={questions.length}
              correctAnswer={tCorrectAns}
              score={tscore}
            />
          ) : (
            <Quiz
              time={time}
              getData={getData}
              questions={questions}
              setShowComplete={setShowComplete}
            />
          )}
        </>
      ) : (
        <div className="mode">
          <h1>select mode</h1>
          <div className="btn-container">
            <button
              onClick={(e) => {
                setTime(e.target.value);
                start();
              }}
              value="35"
              className="easy"
            >
              easy <br />
            </button>
            <small>35:00 min</small>
          </div>
          <div className="btn-container">
            <button
              onClick={(e) => {
                setTime(e.target.value);
                start();
              }}
              value="25"
              className="medium"
            >
              medium <br />
            </button>
            <small>25:00 min</small>
          </div>{" "}
          <div className="btn-container">
            <button
              onClick={(e) => {
                setTime(e.target.value);
                start();
              }}
              value="15"
              className="hard"
            >
              hard <br />
            </button>
            <small>15:00 min</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
