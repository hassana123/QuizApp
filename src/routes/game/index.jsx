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
      question:
        "Ramadan begins during which month of the Islamic lunar calendar? ",
      answerOpt: [
        { opt: "7th ", isCorrect: false },
        { opt: "8th", isCorrect: false },
        { opt: "9th", isCorrect: true },
        { opt: "10th ", isCorrect: false },
      ],
    },

    {
      question: "What is the meal called before the beginning of the fast? ",
      answerOpt: [
        { opt: " walima", isCorrect: false },
        { opt: " wajabatul khafifa", isCorrect: false },
        { opt: "sahoor ", isCorrect: true },
        { opt: "Taem", isCorrect: false },
      ],
    },

    {
      question: " What is the meal after sunset called?",
      answerOpt: [
        { opt: " Altuham", isCorrect: false },
        { opt: " Taghdaa", isCorrect: false },
        { opt: "Dhahab lil'akl ", isCorrect: false },
        { opt: "iftar ", isCorrect: true },
      ],
    },

    {
      question: "What is the first prayer of the day called? ",
      answerOpt: [
        { opt: " fajr", isCorrect: true },
        { opt: " zuhr", isCorrect: false },
        { opt: "magrihb ", isCorrect: false },
        { opt: " isha", isCorrect: false },
      ],
    },
    {
      question: "What does 'Ramadan Mubarak' mean? ",
      answerOpt: [
        { opt: "It is a food blessing ", isCorrect: false },
        { opt: "Have a blessed Ramadan", isCorrect: true },
        { opt: " Happy Ramadan", isCorrect: false },
        { opt: "Thank you", isCorrect: false },
      ],
    },
    {
      question: "what do muslimsusually break their fast with?",
      answerOpt: [
        { opt: "a cup of water or milk and a date", isCorrect: true },
        { opt: "a cup of orange juice and apple", isCorrect: false },
        { opt: "yoghurt and honey", isCorrect: false },
      ],
    },
    {
      question: "How many people are said to observe Ramadan?",
      answerOpt: [
        { opt: " 1.1 billion", isCorrect: false },
        { opt: "50 million ", isCorrect: false },
        { opt: " 250 million", isCorrect: false },
        { opt: "1.6 billion ", isCorrect: true },
      ],
    },

    {
      question:
        " What is the light or lantern that is traditionally used during Ramadan called?",
      answerOpt: [
        { opt: "Shaeila ", isCorrect: false },
        { opt: "Fanoos ", isCorrect: true },
        { opt: "Nar ", isCorrect: false },
        { opt: "Misbah ", isCorrect: false },
      ],
    },
    {
      question:
        "Muslims are not allowed to chew gum while fasting. True or false?",
      answerOpt: [
        { opt: "True, because it still counts as food ", isCorrect: true },
        { opt: "False, because it's not really food ", isCorrect: false },
      ],
    },

    {
      question: "At the end of Ramadan what is the large festival called? ",
      answerOpt: [
        { opt: "Al-Hijra ", isCorrect: false },
        { opt: "Prophet's Birthday ", isCorrect: false },
        { opt: "Eid Al-Adha ", isCorrect: false },
        { opt: "Eid ul Fitr", isCorrect: true },
      ],
    },

    {
      question: "Ramadan stems from an Arabic word ramad which means what?",
      answerOpt: [
        { opt: "Fast ", isCorrect: false },
        { opt: " Giving", isCorrect: false },
        { opt: " Feast", isCorrect: false },
        { opt: "dryness", isCorrect: true },
      ],
    },

    {
      question:
        "Ramadan is mentioned in which of the following Surahs in the Quran?",
      answerOpt: [
        { opt: "Surah al-Nisa ", isCorrect: false },
        { opt: "Surah al-Hijr ", isCorrect: false },
        { opt: "Surah Ali Imran ", isCorrect: false },
        { opt: "Surah Al-Baqarah", isCorrect: true },
      ],
    },
    {
      question: "On which day does Eid ul-Fitr occur? ",
      answerOpt: [
        { opt: "On the first day of Shawwal ", isCorrect: true },
        { opt: "Nobody knows ", isCorrect: false },
        { opt: "On the final day of Ramadan ", isCorrect: false },
        { opt: "During the full moon ", isCorrect: false },
      ],
    },
    {
      question: "Fasting during Ramadan is which of the 5 pillars in Islam? ",
      answerOpt: [
        { opt: "First ", isCorrect: false },
        { opt: "Second ", isCorrect: false },
        { opt: "Third", isCorrect: false },
        { opt: "Fourth ", isCorrect: true },
      ],
    },
    {
      question: "Which famous battle took place during the month of Ramadan? ",
      answerOpt: [
        { opt: "The Battle of Badr ", isCorrect: true },
        { opt: "The Battle of Uhud ", isCorrect: false },
        { opt: "The Battle of Khaybar ", isCorrect: false },
        { opt: "The Battle of the Trench ", isCorrect: false },
      ],
    },
    {
      question:
        "What was revealed to the prophet muhammad SAW during the month of Ramadan? ",
      answerOpt: [
        { opt: "Hadiths", isCorrect: false },
        { opt: "Torah", isCorrect: false },
        { opt: "Quran", isCorrect: true },
        { opt: "Injeel", isCorrect: false },
      ],
    },

    {
      question:
        "True or false: The Quran was the only holy book revealed by Allah during the month of Ramadan? ",
      answerOpt: [
        { opt: " true", isCorrect: false },
        { opt: "false ", isCorrect: true },
      ],
    },
    {
      question: "Laylatul-Qadr is a night greater than: ",
      answerOpt: [
        { opt: "1000 years ", isCorrect: false },
        { opt: "1000 months ", isCorrect: true },
        { opt: "1000 weeks ", isCorrect: false },
        { opt: "1000 lifetimes ", isCorrect: false },
      ],
    },

    {
      question:
        "True or false: Eating out of forgetfulness will break your fast? ",
      answerOpt: [
        { opt: "true ", isCorrect: false },
        { opt: "false ", isCorrect: true },
      ],
    },
    {
      question:
        " On the Day of Judgement, those who fasted Ramadan will be told to enter paradise through which gate",
      answerOpt: [
        { opt: "Baab al-Hajj ", isCorrect: false },
        { opt: "Baab al-Rayyan ", isCorrect: true },
        { opt: "Baab as-Sadaqah ", isCorrect: false },
        { opt: "Baab al-Iman ", isCorrect: false },
      ],
    },
    {
      question:
        "How many times the word Ramadan was mentioned in the Holy Quran? ",
      answerOpt: [
        { opt: " twice", isCorrect: false },
        { opt: " once", isCorrect: true },
        { opt: "thrice ", isCorrect: false },
        { opt: "6 times ", isCorrect: false },
      ],
    },
    {
      question: "Who started Taraweeh in congregation? ",
      answerOpt: [
        { opt: "Abubarkar ", isCorrect: false },
        { opt: "prophet muhammad SAW ", isCorrect: false },
        { opt: "Umar ibn alkhattab ", isCorrect: true },
        { opt: "zayd  ", isCorrect: false },
      ],
    },
    {
      question: "What is dua for Laylatul Qadr?",
      answerOpt: [
        {
          opt: "O Allah, indeed you are pardoning and generous; you love to pardon, so pardon us",
          isCorrect: true,
        },
        {
          opt: "oh allah assist me in remebering you, in thanking you and wrshiping you in the best of manners ",
          isCorrect: false,
        },
        {
          opt: " glorious is allah and praises are due to allah and allah is the greatest",
          isCorrect: false,
        },
        { opt: "i ask allah to forgive me ", isCorrect: false },
      ],
    },
    {
      question: "What do you do if you accidentally eat/drink while fasting? ",
      answerOpt: [
        {
          opt: "Continue your fast, it is a gift from Allah ",
          isCorrect: true,
        },
        {
          opt: "your fast becomes invalid so break your fast ",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "What is it called when a Muslim stays at the Masjid for 3 or more nights? ",
      answerOpt: [
        { opt: "Itikaf ", isCorrect: true },
        { opt: " laylatul qadr", isCorrect: false },
        { opt: " safa and marwa", isCorrect: false },
        { opt: " taraweeh", isCorrect: false },
      ],
    },
    {
      question:
        "What should you fast from in addition to not eating/drinking? ",
      answerOpt: [
        { opt: "bathing and brushing ", isCorrect: false },
        { opt: "sleeping ", isCorrect: false },
        { opt: " Bad words/actions", isCorrect: true },
        { opt: "applying make-up ", isCorrect: false },
      ],
    },
    {
      question: " Who first gave us the name ‘Muslims’?",
      answerOpt: [
        { opt: "Nabi Ibrahim (pbuh) ", isCorrect: true },
        { opt: " Nabi musa (pbuh) ", isCorrect: false },
        { opt: "Nabi muhammad (pbuh) ", isCorrect: false },
        { opt: "Nabi Adam (pbuh)", isCorrect: false },
      ],
    },
    {
      question: " Who was the first of the prophets to fast?",
      answerOpt: [
        { opt: "Musa AS ", isCorrect: false },
        { opt: "Muhammad SAW ", isCorrect: false },
        { opt: "Adam AS", isCorrect: true },
        { opt: "Isa AS", isCorrect: false },
      ],
    },

    {
      question: "Which fruits are mentioned in Quran? ",
      answerOpt: [
        {
          opt: "gardenegg, dates, apple, olive, grapes and banana",
          isCorrect: false,
        },
        { opt: "dates, olive,  apple and eggplant", isCorrect: false },
        { opt: "dates and olives only ", isCorrect: false },
        {
          opt: "Fig plant, Dates, olive, grapes, pomegrante and banana",
          isCorrect: true,
        },
      ],
    },

    {
      question: "What is sighted to signal the start of Ramadan? ",
      answerOpt: [
        { opt: "The crescent moon", isCorrect: true },
        { opt: "the full moon ", isCorrect: false },
        { opt: " the stars", isCorrect: false },
        { opt: "nothing ", isCorrect: false },
      ],
    },

    {
      question: "How many Ramadans did the prophet fast? ",
      answerOpt: [
        { opt: "10 ramadans", isCorrect: false },
        { opt: " 11 ramadans", isCorrect: false },
        { opt: "9 Ramadans ", isCorrect: true },
        { opt: " 7 ramadans", isCorrect: false },
      ],
    },
    {
      question: "What is the first surah revealed in Quran? ",
      answerOpt: [
        { opt: "Al-ʻAlaq ( Congealed Blood)", isCorrect: true },
        { opt: " fatiha (the opening)", isCorrect: false },
        { opt: " al-baqara (the cow)", isCorrect: false },
        { opt: "an-nas (mankid) ", isCorrect: false },
      ],
    },
    {
      question: " When did fasting start in Islam?",
      answerOpt: [
        { opt: "first year after hijrah", isCorrect: false },
        { opt: " Seconed  year after Hijrah", isCorrect: true },
        { opt: "a year before hijrah", isCorrect: false },
        { opt: "third year after hijrah", isCorrect: false },
      ],
    },

    {
      question:
        "RIDDLE TIME: I am the heart of the Quran yet I am not in the center of the Quran. What am I? ",
      answerOpt: [
        { opt: "surah al-aadiyaat", isCorrect: false },
        { opt: "surah Al hadid ", isCorrect: false },
        { opt: "Surah Yaseen", isCorrect: true },
        { opt: " surah ar-rahmaan", isCorrect: false },
      ],
    },
    {
      question: "What is Umrah equal to when done in Ramadan? ",
      answerOpt: [
        { opt: "1000 salats", isCorrect: false },
        { opt: "A year of good deeds", isCorrect: false },
        { opt: "nothing", isCorrect: false },
        { opt: "Hajj ", isCorrect: true },
      ],
    },

    {
      question: "Who introduced the Islamic calendar?",
      answerOpt: [
        { opt: "Abu bakr", isCorrect: false },
        { opt: "Umar Ibn Al-Khattab ", isCorrect: true },
        { opt: "Ali ibn abi talib ", isCorrect: false },
        { opt: "zayd ibn harithah", isCorrect: false },
      ],
    },
    {
      question: "Who was the İnjil revealed to? ",
      answerOpt: [
        { opt: "Jesus (isah)", isCorrect: true },
        { opt: "Abraham ", isCorrect: false },
        { opt: "musa (moses) ", isCorrect: false },
        { opt: "dawud ", isCorrect: false },
      ],
    },
    {
      question: "Who was the zabur revealed to? ",
      answerOpt: [
        { opt: "Jesus (isah)", isCorrect: false },
        { opt: "suliaman (solomon)", isCorrect: false },
        { opt: "musa (moses) ", isCorrect: false },
        { opt: "dawud (david) ", isCorrect: true },
      ],
    },

    {
      question: " What is the deeper purpose of Ramadan?",
      answerOpt: [
        {
          opt: "being concscious and cognizant of allah, of truth and fear of allah",
          isCorrect: true,
        },
        { opt: "bring Muslims closer to Allah ", isCorrect: false },
        { opt: "protest the government ", isCorrect: false },
        { opt: "get cleansed of one's sins ", isCorrect: false },
      ],
    },
    {
      question: "Why do people fast during Ramadhan?",
      answerOpt: [
        { opt: " as a means of seeking forgiveness of sins", isCorrect: true },
        {
          opt: "as a means of reminder of the plight of those who do not have adequate food, supply and shelter",
          isCorrect: true,
        },
        { opt: "teaches self control, reinforces ones faith", isCorrect: true },
        { opt: "all of the above", isCorrect: true },
      ],
    },

    {
      question: "Who was Torah revealed to? ",
      answerOpt: [
        { opt: " David (dawud)", isCorrect: false },
        { opt: " isah (jesus)", isCorrect: false },
        { opt: "Moses (musa) ", isCorrect: true },
        { opt: " Muhammed SAW", isCorrect: false },
      ],
    },
    {
      question: " What is the origin of the term Ramadan?",
      answerOpt: [
        { opt: " Judism", isCorrect: false },
        { opt: "Indian ", isCorrect: false },
        { opt: "Arabic ", isCorrect: true },
        { opt: "none of the above", isCorrect: false },
      ],
    },

    {
      question: " Are Muslims allowed to take water while fasting?",
      answerOpt: [
        { opt: "Yes, but only 5 sips a day ", isCorrect: false },
        { opt: " Yes, after certain period of hours", isCorrect: false },
        { opt: "No ", isCorrect: true },
      ],
    },
    {
      question: "Why do Ramadhan dates change every year? ",
      answerOpt: [
        { opt: " Because of Muslim leaders", isCorrect: false },
        { opt: " Because of Lunar (gregorian) calendar)", isCorrect: true },
        { opt: "because of the moon", isCorrect: false },
      ],
    },
    {
      question: "who is a mesaharati",
      answerOpt: [
        { opt: "a persoon who prepares iftar desserts", isCorrect: false },
        {
          opt: "a persoon who wakes people up before fast begins to eat and drink",
          isCorrect: true,
        },
        { opt: "a persoon who prepares sahoor foods", isCorrect: false },
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
              How much do you know about the month of ramadan? 🤔
              <br />
              <small>Enjoy🤗!</small>
            </p>
          </div>
          <div className="mode">
            <h1>select mode</h1>
            <div className="btn-container">
              <button
                onClick={() => {
                  setTime("90");
                  setEasyQ(true);
                  start();
                }}
                className="easy"
              >
                easy <small>10 questions</small> <br />
              </button>
              <small>
                1:30<sub>min</sub>
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
                  setTime("240");
                  setHardQ(true);
                  start();
                }}
                className="hard"
              >
                hard <small>20 questions</small> <br />
              </button>
              <small>
                4:00 <sub>min</sub>
              </small>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
