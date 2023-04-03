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
      question: "Who locked away Yajuj and Majuj",
      answerOpt: [
        { opt: "Dhul Qarnayn", isCorrect: true },
        { opt: "Isa AS", isCorrect: false },
        { opt: "Imam Mahdi", isCorrect: false },
        { opt: "Muhammad SAW", isCorrect: false },
      ],
    },
    {
      question: "Which Angels were sent to Babylon?",
      answerOpt: [
        { opt: "Israfil and Jibreel ", isCorrect: false },
        { opt: "Malik and Harut", isCorrect: false },
        { opt: "Marut and Jibreel", isCorrect: false },
        { opt: "Harut and Marut", isCorrect: true },
      ],
    },
    {
      question:
        "When was it revealed to Prophet Muhammad SAW for Muslims to pray 5 fard prayers ",
      answerOpt: [
        { opt: "Laylatul Qadr", isCorrect: false },
        { opt: "The night of Isra' and Miraaj'", isCorrect: true },
        { opt: "During Hajj", isCorrect: false },
        { opt: "Battle of badr", isCorrect: false },
      ],
    },
    {
      question:
        "Which surah (chapter) is considered as one third (1/3) of the Quran?",
      answerOpt: [
        { opt: "Surah Ar-Rahman, chapter 55", isCorrect: false },
        { opt: "Surah Muhammad, chapter 47", isCorrect: false },
        { opt: "Surah Ya Seen, chapter 36", isCorrect: false },
        { opt: "Surah Ikhlas, chapter 112", isCorrect: true },
      ],
    },
    {
      question: "Which Prophets did Allah SWT order to build the Ka'abah",
      answerOpt: [
        { opt: "Nuh AS and Lut AS", isCorrect: false },
        { opt: "Yusuf AS and Yunus AS", isCorrect: false },
        { opt: "Ibrahim AS and Ismail AS", isCorrect: true },
        { opt: "Musa AS and Adam AS", isCorrect: false },
      ],
    },
    {
      question: "What is the first compulsory act on man?",
      answerOpt: [
        { opt: "As Salat", isCorrect: true },
        { opt: "Az Zakat", isCorrect: false },
        { opt: "Hajj", isCorrect: false },
        { opt: "At Taharah", isCorrect: false },
      ],
    },
    {
      question: "How many Fard Rakaats are there in a day?",
      answerOpt: [
        { opt: "10", isCorrect: false },
        { opt: "15", isCorrect: false },
        { opt: "17", isCorrect: true },
        { opt: "8", isCorrect: false },
      ],
    },
    {
      question: "Which surah is the first Surah of the Quran?",
      answerOpt: [
        { opt: "Surah Ikhlas", isCorrect: false },
        { opt: "Surah Baqara", isCorrect: false },
        { opt: "Surah Fatiha", isCorrect: true },
        { opt: "Surah Yaseen", isCorrect: false },
      ],
    },
    {
      question: "Who was the Prophet's S.A.w mother",
      answerOpt: [
        { opt: "Khadija RA", isCorrect: false },
        { opt: "Amina RA", isCorrect: true },
        { opt: "Halima RA", isCorrect: false },
        { opt: "Fatima RA", isCorrect: false },
      ],
    },
    {
      question: "Which is the longest surah (chapter) of the Quran?",
      answerOpt: [
        { opt: "Al-Baqara", isCorrect: true },
        { opt: "Ya Seen", isCorrect: false },
        { opt: "Ar-Rahman", isCorrect: false },
        { opt: "Al-Hajj", isCorrect: false },
      ],
    },
    {
      question: "How many chapters does the quran have?",
      answerOpt: [
        { opt: "115", isCorrect: false },
        { opt: "108", isCorrect: false },
        { opt: "144", isCorrect: false },
        { opt: "114", isCorrect: true },
      ],
    },
    {
      question: "How many wings does Angel Jibreel (AS) have?",
      answerOpt: [
        { opt: "1", isCorrect: false },
        { opt: "600", isCorrect: true },
        { opt: "598", isCorrect: false },
        { opt: "2", isCorrect: false },
      ],
    },
    {
      question:
        "How many times will the trumpet be blown on the day of judgement",
      answerOpt: [
        { opt: "Once", isCorrect: false },
        { opt: "Twice", isCorrect: true },
        { opt: "3 times", isCorrect: false },
        { opt: "5 Times", isCorrect: false },
      ],
    },
    {
      question: "Which animal was made from fire?",
      answerOpt: [
        { opt: "Snake", isCorrect: false },
        { opt: "Elephant", isCorrect: false },
        { opt: "Cow", isCorrect: false },
        { opt: "Camel", isCorrect: true },
      ],
    },
    {
      question:
        "Who did Allah SWT mention in the Quran as the best example to follow?",
      answerOpt: [
        { opt: "Jinn", isCorrect: false },
        { opt: "Pharoah", isCorrect: false },
        { opt: "Angels", isCorrect: false },
        { opt: "Prophet Muhammed (SAW)", isCorrect: true },
      ],
    },
    {
      question: "What is Taqwa",
      answerOpt: [
        { opt: "Repentance", isCorrect: false },
        { opt: "Fasting", isCorrect: false },
        { opt: "Fear of Allah", isCorrect: true },
        { opt: "Charity", isCorrect: false },
      ],
    },
    {
      question: "How long will the fog last after Mahdi Arrives?",
      answerOpt: [
        { opt: "40days", isCorrect: true },
        { opt: "4 weeks", isCorrect: false },
        { opt: "5 hours", isCorrect: false },
        { opt: "3 years", isCorrect: false },
      ],
    },
    {
      question: "What is the best day in Islam",
      answerOpt: [
        { opt: "Friday", isCorrect: false },
        { opt: "Eid-Fitr", isCorrect: false },
        { opt: "15th Shabban", isCorrect: false },
        { opt: "Arafah", isCorrect: true },
      ],
    },
    {
      question: "What is the best night in Islam",
      answerOpt: [
        { opt: "Friday Night", isCorrect: false },
        { opt: "Night of Arafah", isCorrect: false },
        { opt: "Night of Eid", isCorrect: false },
        { opt: "Laylatul Kadr", isCorrect: true },
      ],
    },
    {
      question: "Who was seen in the fourth heaven on the night if Miraj?",
      answerOpt: [
        { opt: "Ibrahim AS", isCorrect: false },
        { opt: "Idris AS", isCorrect: true },
        { opt: "Musa AS", isCorrect: false },
        { opt: "Ibrahim AS", isCorrect: false },
      ],
    },
    {
      question: "Pillars of Islam are also called what?",
      answerOpt: [
        { opt: "Fi Amanillah", isCorrect: false },
        { opt: "Qadr ul Islam", isCorrect: false },
        { opt: "Arkanal Islam", isCorrect: true },
        { opt: "khairul Islam", isCorrect: false },
      ],
    },
    {
      question: "How many Prophets are Mentioned in the Quran?",
      answerOpt: [
        { opt: "21", isCorrect: false },
        { opt: "30", isCorrect: false },
        { opt: "26", isCorrect: false },
        { opt: "25", isCorrect: true },
      ],
    },
    {
      question: "Where was the qibla before we faced the Ka'abah",
      answerOpt: [
        { opt: "Jordan", isCorrect: false },
        { opt: "Jerusalem", isCorrect: true },
        { opt: "Egypt", isCorrect: false },
        { opt: "Babylon", isCorrect: false },
      ],
    },
    {
      question:
        "Before Allah created humans which other creatures roamed the earth?",
      answerOpt: [
        { opt: "Aliens", isCorrect: false },
        { opt: "Ghost", isCorrect: false },
        { opt: "Angels", isCorrect: false },
        { opt: "Jinn", isCorrect: true },
      ],
    },
  ];

  const [play, setPlay] = useState(false);
  const [tscore, setTscore] = useState(0);
  const [tWrongans, setTwrongans] = useState(0);
  const [tCorrectAns, setTcorrectAns] = useState(0);
  const [time, setTime] = useState();
  const [timeOff, setTimeOff] = useState(false);
  const [attemptedq, setAttemptedq] = useState(0);

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
          setTimeOff(true);
          setShowComplete(true);
        }
        return time - 1;
      });
    }, 1000);
  }

  const getData = (tScore, tCorrectans, tWrongans, attempts) => {
    setTscore(tScore);
    setTcorrectAns(tCorrectans);
    setTwrongans(tWrongans);
    setAttemptedq(attempts);
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
              attemptedq={attemptedq}
              timeOff={timeOff}
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
              value="120"
              className="easy"
            >
              easy <br />
            </button>
            <small>
              2:00<sub>min</sub>
            </small>
          </div>
          <div className="btn-container">
            <button
              onClick={(e) => {
                setTime(e.target.value);
                start();
              }}
              value="60"
              className="medium"
            >
              medium <br />
            </button>
            <small>
              1:00 <sub>min</sub>
            </small>
          </div>{" "}
          <div className="btn-container">
            <button
              onClick={(e) => {
                setTime(e.target.value);
                start();
              }}
              value="35"
              className="hard"
            >
              hard <br />
            </button>
            <small>
              35:00 <sub>sec</sub>
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
