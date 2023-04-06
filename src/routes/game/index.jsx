import { useState } from "react";
import Quiz from "../../components/quiz";
import CompleteQuiz from "../../components/completeQuiz";
import "./style.css";
import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [showComplete, setShowComplete] = useState(false);
  const [easyQ, setEasyQ] = useState(false);
  const [mediumQ, setMediumQ] = useState(false);
  const [hardQ, setHardQ] = useState(false);

  const questions = [
    {
      question: "Where was prophet Musa AS born?",
      answerOpt: [
        { opt: "Hadramout", isCorrect: false },
        { opt: "Yemen", isCorrect: false },
        { opt: "Egypt", isCorrect: true },
        { opt: "Palestine", isCorrect: false },
      ],
    },
    {
      question: "Who was Haroon AS to Musa AS? ",
      answerOpt: [
        { opt: "Musa's Father", isCorrect: false },
        { opt: "musa's Brother", isCorrect: true },
        { opt: "musa's helper", isCorrect: false },
        { opt: "musa's father-in-law", isCorrect: false },
      ],
    },
    {
      question: "What was the name of Pharaoh’s minister?",
      answerOpt: [
        { opt: "Samiri", isCorrect: false },
        { opt: "Haroon", isCorrect: false },
        { opt: "Malik", isCorrect: false },
        { opt: "Hamaan", isCorrect: true },
      ],
    },
    {
      question: "What were the people of Musa (AS) called?",
      answerOpt: [
        { opt: "The children of taym", isCorrect: false },
        { opt: "The children of Adi.", isCorrect: false },
        { opt: "The children of Israel.", isCorrect: true },
        { opt: "The children of egypt.", isCorrect: false },
      ],
    },
    {
      question:
        "The Prophet Musa (pbuh) was put into the river Nile by his mother inside which object",
      answerOpt: [
        { opt: "A wooden basket", isCorrect: true },
        { opt: "A metal cage", isCorrect: false },
        { opt: "an old Caneo", isCorrect: false },
        { opt: "a wooden box", isCorrect: false },
      ],
    },
    {
      question:
        "What punishment did Pharaoh use to give the children and women of Israel?",
      answerOpt: [
        {
          opt: "he would Banish the children and keep the women",
          isCorrect: false,
        },
        {
          opt: "He would slaughter the daugthers, and keep the sons alive.",
          isCorrect: false,
        },
        {
          opt: "He would slaughter the children, and keep the women alive.",
          isCorrect: true,
        },
        {
          opt: "He would slaughter the women, and keep the men alive.",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "It was the wife of Pharaoh who discovered Musa (pbuh) in the river. What was her name?",
      answerOpt: [
        { opt: "Hafsa", isCorrect: false },
        { opt: "Maryam", isCorrect: false },
        { opt: "Asiya", isCorrect: true },
        { opt: "Hajar", isCorrect: false },
      ],
    },
    {
      question:
        "Who cleverly told the household of Pharaoh that there was a suitable wet nurse nearby for baby Musa (pbuh) after he refused the others, and thus reunited him with his mother?",
      answerOpt: [
        { opt: "his mother's servant", isCorrect: false },
        { opt: "His brother", isCorrect: false },
        { opt: "His uncle", isCorrect: false },
        { opt: "His Sister", isCorrect: true },
      ],
    },
    {
      question:
        " Pharaoh's wife took up the responsibility of bringing up Musa (AS) ?",
      answerOpt: [
        { opt: "True", isCorrect: true },
        { opt: "False", isCorrect: false },
      ],
    },
    {
      question: "Which incident caused Musa (pbuh) to flee from Egypt?",
      answerOpt: [
        { opt: "He accidentally killed an egyptian man", isCorrect: true },
        { opt: "He was accused of theft", isCorrect: false },
        { opt: "there was a plague", isCorrect: false },
        { opt: "There was a plague", isCorrect: false },
      ],
    },
    {
      question: "What was the penalty For Killing an egyptian at the time",
      answerOpt: [
        { opt: "Banishment", isCorrect: false },
        { opt: "Prison", isCorrect: false },
        { opt: "Death", isCorrect: true },
        { opt: "No penalty", isCorrect: false },
      ],
    },
    {
      question:
        "Why did prophet Musa leave Egypt after the incident in his youth?",
      answerOpt: [
        {
          opt: "Because he was scared of the soldiers of pharoah",
          isCorrect: true,
        },
        { opt: "Because he wanted to marry", isCorrect: false },
        { opt: "Because he wanted to see his mother", isCorrect: false },
        { opt: "Because he wanted to migrate", isCorrect: false },
      ],
    },
    {
      question:
        "After fleeing Egypt, Musa (pbuh) eventually arrived at a new location. What was it called?",
      answerOpt: [
        { opt: "Jerusalem", isCorrect: false },
        { opt: "Constantinople", isCorrect: false },
        { opt: "Madyan", isCorrect: true },
        { opt: "Sinai", isCorrect: false },
      ],
    },
    {
      question:
        "Upon arriving at this location, Musa (pbuh) saw two women struggling nearby a well. What were they struggling with?",
      answerOpt: [
        { opt: "Their purchased goods", isCorrect: false },
        { opt: "Their horses", isCorrect: false },
        { opt: "Their flock of sheep", isCorrect: true },
        { opt: "Their elderly father", isCorrect: false },
      ],
    },
    {
      question:
        "Musa (pbuh) eventually married one of these two women. What was her name?",
      answerOpt: [
        { opt: "Sumayyah", isCorrect: false },
        { opt: "Safurah", isCorrect: true },
        { opt: "Safiyyah", isCorrect: false },
        { opt: "Sameerah", isCorrect: false },
      ],
    },
    {
      question: "How many years did Musa stayed away from his home?",
      answerOpt: [
        { opt: "10 Years", isCorrect: true },
        { opt: "7 years", isCorrect: false },
        { opt: "12 years", isCorrect: false },
        { opt: "5 years", isCorrect: false },
      ],
    },
    {
      question:
        "Why did musa AS suddenly decides to return to egypt after 10 years ",
      answerOpt: [
        { opt: "He had a dream ", isCorrect: false },
        { opt: "he felt Homesick", isCorrect: true },
        { opt: "He wanted to see his brother", isCorrect: false },
        { opt: "He wanted to see his sister", isCorrect: false },
      ],
    },
    {
      question:
        "While travelling with his family, Musa (AS) saw something on mount tur which led him to go and investigate. This is where he ulimately spoke to Allah (swt) and received Prophethood what did he see?",
      answerOpt: [
        { opt: "A bright light", isCorrect: false },
        { opt: "A huge cave", isCorrect: false },
        { opt: "A burning fire", isCorrect: true },
        { opt: "A dark cloud", isCorrect: false },
      ],
    },
    {
      question: "As musa AS neared the fire Whose voice he hear  calling him",
      answerOpt: [
        { opt: "Haroon", isCorrect: false },
        { opt: "Allah SWT", isCorrect: true },
        { opt: "pharaoh", isCorrect: false },
        { opt: "angel jibreel", isCorrect: false },
      ],
    },
    {
      question: "where did Musa AS receive the first revelation?",
      answerOpt: [
        { opt: "in Madyn", isCorrect: false },
        { opt: "in towa valley", isCorrect: true },
        { opt: "in cave hira", isCorrect: false },
        { opt: "in the enterance of egypt", isCorrect: false },
      ],
    },
    {
      question: "What miracles did Allah showed him when he got the mission?",
      answerOpt: [
        { opt: "The sea", isCorrect: false },
        { opt: "The moutain", isCorrect: false },
        { opt: "The snake and the hand", isCorrect: true },
        { opt: "the bird", isCorrect: false },
      ],
    },
    {
      question:
        "Which of Musa’s (pbuh) possessions did Allah (swt) order him to throw on to the ground, which then turned into a snake?",
      answerOpt: [
        { opt: "His cloak", isCorrect: false },
        { opt: "His turban", isCorrect: false },
        { opt: "His shoe", isCorrect: false },
        { opt: "His staff", isCorrect: true },
      ],
    },
    {
      question:
        "What happened when Allah (swt) ordered Musa (pbuh) to put his hand into his garment?",
      answerOpt: [
        { opt: "It shined brightly", isCorrect: true },
        { opt: "It grew twice as big", isCorrect: false },
        { opt: "It turned into gold", isCorrect: false },
        { opt: "It vanished for a moment", isCorrect: false },
      ],
    },

    {
      question:
        "What request did Musa (pbuh) make to Allah (swt) when he was commanded to go and confront Pharaoh?",
      answerOpt: [
        { opt: "That it should be during the night", isCorrect: false },
        { opt: "That his brother Harun should go with him", isCorrect: true },
        { opt: "that he send an army with him", isCorrect: false },
        { opt: "That he should not fight him", isCorrect: false },
      ],
    },
    {
      question:
        "How did Pharaoh’s magicians react after they witnessed the miracles that Musa (pbuh) performed in front of them and were defeated?",
      answerOpt: [
        { opt: "They laughed at him", isCorrect: false },
        { opt: "They called him a trickstar", isCorrect: false },
        { opt: "they challenged him to a rematch", isCorrect: false },
        { opt: "They fell down in prostration to Allah", isCorrect: true },
      ],
    },
    {
      question:
        "What did Pharaoh do to the magicians after they accepted Islam?",
      answerOpt: [
        {
          opt: "He cut off their hands and feet on opposite sides and crucified them",
          isCorrect: true,
        },
        { opt: "He locked them up", isCorrect: false },
        { opt: "he banished them ", isCorrect: false },
        { opt: " He let them go", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the follwing is the correct order of the plagues of egypt ",
      answerOpt: [
        {
          opt: "The flood, the locusts, the drought , lice, frogs and blood.",
          isCorrect: true,
        },
        {
          opt: "The flood, the locusts, chickenpox and blood.",
          isCorrect: false,
        },
        {
          opt: "The flood, the locusts, eathquake ,lice,  frogs and  drought.",
          isCorrect: false,
        },
        {
          opt: "The Drought, chickenpox, lice and frogs and blood.",
          isCorrect: false,
        },
      ],
    },
    {
      question: "How many tribes was the people of Musa AS divided into?",
      answerOpt: [
        { opt: "six tribes", isCorrect: false },
        { opt: "Eleven tribes", isCorrect: false },
        { opt: "Twelve tribes.", isCorrect: true },
        { opt: "3 tribes", isCorrect: false },
      ],
    },
    {
      question:
        "Which miracle did Allah (swt) cause to happen for Musa (pbuh) when he put his staff into the Red Sea?",
      answerOpt: [
        { opt: "he sea turned red", isCorrect: false },
        { opt: "The sea parted", isCorrect: true },
        { opt: "He was able to walk on it", isCorrect: false },
        { opt: "An ark appeared", isCorrect: false },
      ],
    },
    {
      question:
        "There was a rebellious man among the people of Musa (pbuh) who tried to lead the people astray, i.e. away from monotheism and worshiping one God. What was his name?",
      answerOpt: [
        { opt: "Melik", isCorrect: false },
        { opt: "Khidr", isCorrect: false },
        { opt: "Dhul Qarnayn", isCorrect: false },
        { opt: "Samiri", isCorrect: true },
      ],
    },
    {
      question:
        "What did this rebellious man do in order to encourage the followers of Musa (pbuh) to fall into idolatry?",
      answerOpt: [
        { opt: "He claimed to be a prophet", isCorrect: false },
        { opt: "He built a golden calf", isCorrect: true },
        { opt: "He built a statue", isCorrect: false },
        { opt: "He built a wall", isCorrect: false },
      ],
    },
    {
      question:
        "When did the rebellious man take the opportunity to encourage the followers of Musa (pbuh) to fall into idolatry?",
      answerOpt: [
        { opt: "On the Day of Ashura", isCorrect: false },
        { opt: "While Musa (pbuh) was sleeping", isCorrect: false },
        { opt: "Openly in front of Musa (pbuh)", isCorrect: false },
        { opt: "While Musa (pbuh) was at Mount Sinai", isCorrect: true },
      ],
    },
    {
      question:
        " Whom did Musa (AS) appoint as incharge when he left his people?",
      answerOpt: [
        { opt: "Samiriy", isCorrect: false },
        { opt: "Qaron", isCorrect: false },
        { opt: "Haroon", isCorrect: true },
        { opt: "Dhul Qarnayn ", isCorrect: false },
      ],
    },
    {
      question: "For how many nights did Musa (AS) leave his people? ",
      answerOpt: [
        { opt: "30 nights", isCorrect: false },
        { opt: " 90 nights", isCorrect: false },
        { opt: " 50 nights ", isCorrect: false },
        { opt: " 40 night", isCorrect: true },
      ],
    },
    {
      question:
        "Allah (swt) continued to forgive and favour Banu Israeel and sent them provisions over the years, including water, shade, and two types of food. What were these foods called?",
      answerOpt: [
        { opt: "Tin and Zaytun", isCorrect: false },
        { opt: "Ruman and thamar", isCorrect: false },
        { opt: "Manna and salwa", isCorrect: true },
        { opt: "Naan and halwa", isCorrect: false },
      ],
    },
    {
      question:
        "What was the name of the wise man with the special knowledge, musa As was informed of?",
      answerOpt: [
        { opt: "Al khidr", isCorrect: true },
        { opt: "Al khali", isCorrect: false },
        { opt: "Al kahaf", isCorrect: false },
        { opt: "Al kabeer", isCorrect: false },
      ],
    },
    {
      question: "What is the main lesson the wise man taught Musa AS?",
      answerOpt: [
        { opt: "Punctuality", isCorrect: false },
        { opt: "Smartness", isCorrect: false },
        { opt: "Patience", isCorrect: true },
        { opt: "Courage", isCorrect: false },
      ],
    },
    {
      question:
        "Musa AS wanted to meet Al-khidr so Allah instructed to journey with a live fish in a water filled vessel and when the fish ___ he would find the location of Al-khidr?",
      answerOpt: [
        { opt: "disappeares", isCorrect: true },
        { opt: "Glows", isCorrect: false },
        { opt: "Turns into a shark", isCorrect: false },
        { opt: "Dies", isCorrect: false },
      ],
    },

    {
      question:
        "who said the words `did i not tell you that you can have no patiience with me` To musa AS ",
      answerOpt: [
        { opt: "ALLAH SWT", isCorrect: false },
        { opt: "Al-khidr", isCorrect: true },
        { opt: "Haroon AS", isCorrect: false },
        { opt: "Samiri", isCorrect: false },
      ],
    },
    {
      question:
        "Through which method was Prophet Musa (pbuh) given the commandments by Allah (swt)?",
      answerOpt: [
        { opt: "Verbal communication only", isCorrect: false },
        { opt: "On leaves", isCorrect: false },
        { opt: "on golden paper", isCorrect: false },
        { opt: "On tablets", isCorrect: true },
      ],
    },
    {
      question: "What did Allah write for Musa (a) on the tablets? ",
      answerOpt: [
        { opt: "Names of all the other prophets ", isCorrect: false },
        { opt: "Prayers and worship chants", isCorrect: false },
        {
          opt: "Instructions and explanation for all thing",
          isCorrect: true,
        },
        { opt: "list of all the idolators", isCorrect: false },
      ],
    },
    {
      question: "Mount Sinai is also called Jabal-ut-Toor",
      answerOpt: [
        { opt: "false", isCorrect: false },
        { opt: "true", isCorrect: true },
      ],
    },

    {
      question:
        "What did musa AS do to the Angel of Death when he came totake his life",
      answerOpt: [
        { opt: "shaked his hands", isCorrect: false },
        { opt: "Slapped him", isCorrect: true },
        { opt: "smiled at him", isCorrect: false },
        { opt: "hit him with his staff ", isCorrect: false },
      ],
    },
  ];

  const [play, setPlay] = useState(false);
  const [tscore, setTscore] = useState(0);
  const [tWrongans, setTwrongans] = useState(0);
  const [tCorrectAns, setTcorrectAns] = useState(0);
  const [time, setTime] = useState(" ");
  const [timeOff, setTimeOff] = useState(false);
  const [attemptedq, setAttemptedq] = useState(0);
  const [totalq, setTotalQ] = useState();
  //console.log(questions.length);
  let counter;

  function start() {
    setPlay(true);
    startTimer();
  }

  function startTimer() {
    setTimeOff(false);
    counter = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          clearInterval(counter);
          setTime(0);
          setTimeOff(true);
          setShowComplete(true);
        } else {
          setTimeOff(false);
        }
        return time - 1;
      });
    }, 1000);
  }

  const getData = (tQs, tScore, tCorrectans, tWrongans, attempts) => {
    setTscore(tScore);
    setTcorrectAns(tCorrectans);
    setTwrongans(tWrongans);
    setAttemptedq(attempts);
    setTotalQ(tQs.length);
  };

  return (
    <div className="game-container">
      {play ? (
        <>
          {showComplete ? (
            <CompleteQuiz
              navigate={navigate}
              wrongAnswer={tWrongans}
              question={totalq}
              correctAnswer={tCorrectAns}
              score={tscore}
              attemptedq={attemptedq}
              timeOff={timeOff}
            />
          ) : (
            <Quiz
              time={time}
              setTime={setTime}
              getData={getData}
              questions={questions}
              setShowComplete={setShowComplete}
              easyQ={easyQ}
              mediumQ={mediumQ}
              hardQ={hardQ}
            />
          )}
        </>
      ) : (
        <section>
          <div className="quiz-info">
            <p>
              Todays Quiz is going to be focused on the life of prophet musa
              (moses) AS
              <br /> <small>Enjoy🤗!</small>
            </p>
          </div>
          <div className="mode">
            <h1>select mode</h1>
            <div className="btn-container">
              <button
                onClick={() => {
                  setTime("65");
                  setEasyQ(true);
                  start();
                }}
                className="easy"
              >
                easy <small>10 questions</small> <br />
              </button>
              <small>
                1:00<sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                onClick={() => {
                  setTime("120");
                  setMediumQ(true);
                  start();
                }}
                className="medium"
              >
                medium <small>15 questions</small> <br />
              </button>
              <small>
                2:00 <sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                onClick={(e) => {
                  setTime("200");
                  setHardQ(true);
                  start();
                }}
                className="hard"
              >
                hard <small>18 questions</small> <br />
              </button>
              <small>
                3:00 <sub>min</sub>
              </small>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
