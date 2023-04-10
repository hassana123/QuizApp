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
      question: "Where did Zam Zam  water come from? ",
      answerOpt: [
        { opt: "safa and Marwa ", isCorrect: true },
        { opt: "cave of hira ", isCorrect: false },
        { opt: "Masjid Al Haram ", isCorrect: false },
        { opt: "Mount Arafah  ", isCorrect: false },
      ],
    },
    {
      question: " who was the first prophet to build the kaabah?",
      answerOpt: [
        { opt: "Muhammad SAW  ", isCorrect: false },
        { opt: " Ismail AS   ", isCorrect: false },
        { opt: "Ibrahim AS ", isCorrect: true },
        { opt: "Nuh AS ", isCorrect: false },
      ],
    },
    {
      question: "whose footsteps is in mecca ?",
      answerOpt: [
        { opt: " Ibrahim AS   ", isCorrect: true },
        { opt: "Ismail AS  ", isCorrect: false },
        { opt: " Muh AS", isCorrect: false },
        { opt: " Musa AS ", isCorrect: false },
      ],
    },
    {
      question:
        " From the previous question where exactly are those Footstep? ",
      answerOpt: [
        { opt: " Mecca ", isCorrect: false },
        { opt: " masjid Nimra ", isCorrect: false },
        { opt: " mount Arafa  ", isCorrect: false },
        { opt: " kaabah", isCorrect: true },
      ],
    },
    {
      question: " What is the Arabic word for the oneness of Allah?",
      answerOpt: [
        { opt: "shirk  ", isCorrect: false },
        { opt: " Tawhid ", isCorrect: true },
        { opt: " iman  ", isCorrect: false },
        { opt: " jihad  ", isCorrect: false },
      ],
    },
    {
      question: "Which angel never smiled since he was created?   ",
      answerOpt: [
        { opt: "Malik  ", isCorrect: true },
        { opt: "Israfil  ", isCorrect: false },
        { opt: "Munkar  ", isCorrect: false },
        { opt: " Jibril  ", isCorrect: false },
      ],
    },
    {
      question: " what are followers of Islam known as?",
      answerOpt: [
        { opt: "Muhammeddans  ", isCorrect: false },
        { opt: " Islamics ", isCorrect: false },
        { opt: " Moumin ", isCorrect: true },
        { opt: " Brethren ", isCorrect: false },
      ],
    },

    {
      question:
        "When Islam first entered Medina what were the names of the two main tribes?",
      answerOpt: [
        { opt: "Anaza and Hard", isCorrect: false },
        { opt: "Qaynuqaa and Nadheer  ", isCorrect: false },
        { opt: "Quraysh and Khazraj ", isCorrect: false },
        { opt: "Aws and the Khazraj ", isCorrect: true },
      ],
    },
    {
      question:
        "How long will The Mahdi  (the rightly guided caliph)  Reign on this earth before his Death?",
      answerOpt: [
        { opt: "2 Years.", isCorrect: false },
        { opt: "7 - 9 Years. ", isCorrect: true },
        { opt: "10 Years .", isCorrect: false },
        { opt: "5 Years. ", isCorrect: false },
      ],
    },
    {
      question: "Which Surah of the Quran has Allah in every single verse? ",
      answerOpt: [
        { opt: "Surah Muhammad.", isCorrect: false },
        { opt: "Surah al-ikhlas.  ", isCorrect: false },
        { opt: " Suraj Al-Mujadilla", isCorrect: true },
        { opt: "Surah Al-Fatiha. ", isCorrect: false },
      ],
    },

    {
      question: "how many verses are there in the Quran?  ",
      answerOpt: [
        {
          opt: " 6025 without Bismillah 6138 with bismillah",
          isCorrect: false,
        },
        { opt: "6235 without Bismillah 6348 with bismillah", isCorrect: true },
        {
          opt: "6465 without Bismillah 6578 with bismillah ",
          isCorrect: false,
        },
        {
          opt: "6553 without Bismillah 6666 with bismillah",
          isCorrect: false,
        },
      ],
    },

    {
      question: " Who was known as khalilullah(friend of Allah)? ",
      answerOpt: [
        { opt: "Ibrahim AS ", isCorrect: true },
        { opt: " Abubakar RA", isCorrect: false },
        { opt: "Muhammad AS ", isCorrect: false },
        { opt: "Musa As ", isCorrect: false },
      ],
    },
    {
      question: "Which Prophet  was Known as Kalimullah? ",
      answerOpt: [
        { opt: "Idris AS ", isCorrect: false },
        { opt: "Muhammad AS ", isCorrect: false },
        { opt: "Yusuf AS ", isCorrect: false },
        { opt: "Musa AS ", isCorrect: true },
      ],
    },
    {
      question: " In a religious context what does islam mean?",
      answerOpt: [
        { opt: "Worshiping multiple gods ", isCorrect: false },
        { opt: " Religion of peace. ", isCorrect: false },
        {
          opt: "submitting to the will of the one God,( Allah )",
          isCorrect: true,
        },
        {
          opt: "submitting to only the sayings of prophet muhammad. ",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Which prophet is mentioned is surah An-Naml?",
      answerOpt: [
        { opt: "Luqman AS. ", isCorrect: false },
        { opt: " Dawud AS.", isCorrect: true },
        { opt: " Al-khidr.", isCorrect: false },
        { opt: "Zakariyya AS. ", isCorrect: false },
      ],
    },

    {
      question:
        "Which Surah has all its verses ending with the letter (س) seen  ",
      answerOpt: [
        { opt: " Ya Seen", isCorrect: false },
        { opt: "Al-Nasr ", isCorrect: false },
        { opt: "An-Nas", isCorrect: true },
        { opt: "Al- Masad ", isCorrect: false },
      ],
    },

    {
      question:
        "Who said 'didn't i say you couldn't be patient with me'  In suratul kahf ? ",
      answerOpt: [
        { opt: " Adam AS", isCorrect: false },
        { opt: "Allah(SWT)", isCorrect: false },
        { opt: " Yusuf AS", isCorrect: false },
        { opt: " Al-khidr", isCorrect: true },
      ],
    },

    {
      question: "how many verses does the longest surah in the quran contain?",
      answerOpt: [
        { opt: "268 ", isCorrect: false },
        { opt: "298 ", isCorrect: false },
        { opt: " 286", isCorrect: true },
        { opt: "300 ", isCorrect: false },
      ],
    },
    {
      question:
        "What is the Name of the river in paradise that Allah gave prophet Muhammad (SAW)?",
      answerOpt: [
        { opt: "Sidrat", isCorrect: false },
        { opt: "At-Tasnime", isCorrect: false },
        { opt: "Al-Khawtar", isCorrect: true },
        { opt: "Az-Zaqqum", isCorrect: false },
      ],
    },

    {
      question: "How many surahs begins with Alif Lam Ra (ا ل ر)",
      answerOpt: [
        { opt: "9", isCorrect: false },
        { opt: "3", isCorrect: false },
        { opt: "6", isCorrect: true },
        { opt: "12", isCorrect: false },
      ],
    },

    {
      question: "Where were surahs that begins with Ha Meem (ح م)Revealed?",
      answerOpt: [
        { opt: "Mecca", isCorrect: true },
        { opt: "Medina", isCorrect: false },
        { opt: "Tabuk", isCorrect: false },
        { opt: "Muta", isCorrect: false },
      ],
    },

    {
      question: "How does surah Al-Ankabut begin?",
      answerOpt: [
        { opt: "Ha meem", isCorrect: false },
        { opt: "Ta sin", isCorrect: false },
        { opt: "Alif Lam Meem", isCorrect: true },
        { opt: "Alif Lam Ra", isCorrect: false },
      ],
    },

    {
      question: "which surah is the hundredth surah of the holy Quran?",
      answerOpt: [
        { opt: "Surrah Al-Bayyinnah", isCorrect: false },
        { opt: "Surrah Al- Adiyat", isCorrect: true },
        { opt: "Surrah Al-Qaria", isCorrect: false },
        { opt: "Surah Al-Asr", isCorrect: false },
      ],
    },

    {
      question: "To which battle does surah Al-Anfal refer to?",
      answerOpt: [
        { opt: "Battle of badr", isCorrect: true },
        { opt: "battle of uhud", isCorrect: false },
        { opt: "battle of hunayn ", isCorrect: false },
        { opt: "battle of mutah", isCorrect: false },
      ],
    },

    {
      question:
        "What month was fasting in the month of ramadan made obligatory",
      answerOpt: [
        { opt: "Rajab", isCorrect: false },
        { opt: "Jumadal al ula", isCorrect: false },
        { opt: "Sha'abban", isCorrect: true },
        { opt: "Muharram", isCorrect: false },
      ],
    },
    {
      question: "A Surah in the Quran's equivalent of what?",
      answerOpt: [
        { opt: "page", isCorrect: false },
        { opt: "chapter", isCorrect: true },
        { opt: "verse", isCorrect: false },
        { opt: "quote", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following names is the Quran also referred to by?",
      answerOpt: [
        { opt: "Al-kitaab", isCorrect: true },
        { opt: "Al-Tanzeel", isCorrect: true },
        { opt: "al-furqan", isCorrect: true },
        { opt: "ath-thikr", isCorrect: true },
        { opt: "All Of The above", isCorrect: true },
      ],
    },
    {
      question: "How many surahs are named after prophets in the quran",
      answerOpt: [
        { opt: "3", isCorrect: false },
        { opt: "10", isCorrect: false },
        { opt: "6", isCorrect: true },
        { opt: "9", isCorrect: false },
      ],
    },

    {
      question:
        "Which of the following prophets DOES NOT have a Surah named after them?",
      answerOpt: [
        { opt: "Hud", isCorrect: false },
        { opt: "Nuh", isCorrect: false },
        { opt: "Ibrahim", isCorrect: false },
        { opt: "Zakariyya", isCorrect: true },
      ],
    },

    {
      question:
        "How old was the Prophet when the first verses of the Quran were revealed to him?",
      answerOpt: [
        { opt: "20", isCorrect: false },
        { opt: "30", isCorrect: false },
        { opt: "40", isCorrect: true },
        { opt: "50", isCorrect: false },
      ],
    },
    {
      question: "How many different names is Allah known by?",
      answerOpt: [
        { opt: "2", isCorrect: false },
        { opt: "10", isCorrect: false },
        { opt: "99", isCorrect: true },
        { opt: "100", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the Quran's Surahs is the only one not to begin with 'Bismillah'?",
      answerOpt: [
        { opt: "Ar-Rahman", isCorrect: false },
        { opt: "At-Tawbah", isCorrect: true },
        { opt: "Az-Zalzalah", isCorrect: false },
        { opt: "At-Tin", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following is the only month the Quran references by name?",
      answerOpt: [
        { opt: "Rajab", isCorrect: false },
        { opt: "Ramadan", isCorrect: true },
        { opt: "Muharram", isCorrect: false },
        { opt: "Rabi’al Awwal", isCorrect: false },
      ],
    },
    {
      question:
        "One of Allah's 99 names is 'The Giver of Life', which translates to which of the following in Arabic?",
      answerOpt: [
        { opt: "As-Samad", isCorrect: false },
        { opt: "Al-Muhyi", isCorrect: true },
        { opt: "Al-Ahad", isCorrect: false },
        { opt: "Al-Qadir", isCorrect: false },
      ],
    },
    {
      question:
        "What is the term Muslims use for those who've completely memorized the Quran?",
      answerOpt: [
        { opt: "Hafiz", isCorrect: true },
        { opt: "Imam", isCorrect: false },
        { opt: "Qari", isCorrect: false },
        { opt: "Murshid", isCorrect: false },
      ],
    },
    {
      question: "How many of the Quran's Surahs are named after animals?",
      answerOpt: [
        { opt: "8", isCorrect: false },
        { opt: "2", isCorrect: false },
        { opt: "4", isCorrect: false },
        { opt: "6", isCorrect: true },
      ],
    },

    {
      question:
        "Who was the only companion of prophet Muhammad SAW to be named in the Quran?",
      answerOpt: [
        { opt: "Zayd", isCorrect: true },
        { opt: "Ali", isCorrect: false },
        { opt: "Abubakr", isCorrect: false },
        { opt: "salman", isCorrect: false },
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
              Todays Quiz contains Random Questions
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
                hard <small>22 questions</small> <br />
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
