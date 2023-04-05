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
      question: "When was the prophet muhammad (SAW) born?",
      answerOpt: [
        { opt: "Monday, 9th Rabi Al awwal, 571 AC", isCorrect: true },
        { opt: "thursday, 13th Rabi Al awwal, 571 AC", isCorrect: false },
        { opt: "friday 14th Rabi Al awwal, 571 AC", isCorrect: false },
        { opt: "Monday, 9th Muhram, 571 AC", isCorrect: false },
      ],
    },
    {
      question: "Where Was the prophet born",
      answerOpt: [
        { opt: "Medina", isCorrect: false },
        { opt: "Yathrib", isCorrect: false },
        { opt: "Mekkah", isCorrect: true },
        { opt: "Saudi", isCorrect: false },
      ],
    },
    {
      question: "Prophet Muhammad s.a.w was from ?",
      answerOpt: [
        { opt: "Banu Sa'ad", isCorrect: false },
        { opt: "banu khuzair", isCorrect: false },
        { opt: "Banu Hashim", isCorrect: true },
        { opt: "Banu Israel.", isCorrect: false },
      ],
    },
    {
      question: "What is the name of prophet muhammad's Father?",
      answerOpt: [
        { opt: "Ibrahim", isCorrect: false },
        { opt: "Abdul-mutalib", isCorrect: false },
        { opt: "Abu-talib", isCorrect: false },
        { opt: "Abdullah", isCorrect: true },
      ],
    },
    {
      question: "when and when did the prophet's Muhammad(SAW) father die?",
      answerOpt: [
        { opt: "he died in mekkah when he was a year old", isCorrect: false },
        { opt: "he died in mekkah before he was born", isCorrect: true },
        {
          opt: "he on a journey back to medina when he was six",
          isCorrect: false,
        },
        { opt: "he died in medina when he was an aldult", isCorrect: false },
      ],
    },
    {
      question: "where did the prophet muhammad (SAW) mother die?",
      answerOpt: [
        { opt: "in Yathrib", isCorrect: false },
        { opt: "in mekkah", isCorrect: false },
        { opt: "in bani hashim", isCorrect: false },
        { opt: "Abwa", isCorrect: true },
      ],
    },
    {
      question: "what was the prophets(SAW) age when his mother died?",
      answerOpt: [
        { opt: "2", isCorrect: false },
        { opt: "8", isCorrect: false },
        { opt: "6", isCorrect: true },
        { opt: "12", isCorrect: false },
      ],
    },
    {
      question: "what is the name of the prophets grandfather?",
      answerOpt: [
        { opt: "Abdullah", isCorrect: false },
        { opt: "Abu-talib", isCorrect: false },
        { opt: "hamza", isCorrect: false },
        { opt: "abdull muttalib", isCorrect: true },
      ],
    },
    {
      question: "what is the prophet's lineage up too his fifth ancesstor?",
      answerOpt: [
        {
          opt: "Muhammad ibn Abdullah ibn Abdul muttallib ibn kilab ibn manaf ibn hashim ibn abd manaf",
          isCorrect: false,
        },
        {
          opt: "Muhammad ibn Abdullah ibn Abdul muttallib  ibn manaf ibn kilab ibn hashim ibn Qusai",
          isCorrect: false,
        },
        {
          opt: "Muhammad ibn Abdullah ibn Abdul muttallib ibn hashim ibn Abd manaf ibn Qusai ibn kilab",
          isCorrect: true,
        },
        {
          opt: "Muhammad ibn Abdullah ibn Abdul muttallib ibn hashim ibn kilab ibn manaf",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Who named the Prophet (SAW)",
      answerOpt: [
        { opt: "Abu-talib", isCorrect: false },
        { opt: "Abdull mutallib", isCorrect: true },
        { opt: "Abdullah", isCorrect: false },
        { opt: "Amina", isCorrect: false },
      ],
    },
    {
      question: "Who took charge of his care After his mother died?",
      answerOpt: [
        { opt: "his uncle (abu talib)", isCorrect: false },
        { opt: "his Grandfather (abdull mutalib)", isCorrect: true },
        { opt: "his father (abdulah)", isCorrect: false },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question: "how long did the prophets's grandfather take care of him?",
      answerOpt: [
        { opt: "4 years", isCorrect: false },
        { opt: "3 years", isCorrect: false },
        { opt: "7 years", isCorrect: false },
        { opt: "2 years", isCorrect: true },
      ],
    },
    {
      question: "at what age did the prophet travel to syria with his uncle?",
      answerOpt: [
        { opt: "8 years", isCorrect: false },
        { opt: "12 years", isCorrect: true },
        { opt: "9 years", isCorrect: false },
        { opt: "11 years", isCorrect: false },
      ],
    },
    {
      question: "Who was khadija (RA)",
      answerOpt: [
        {
          opt: " she was A family friend of the prophet (SAW)?",
          isCorrect: false,
        },
        { opt: "she was A wealthy merchant", isCorrect: true },
        { opt: "she Was An idol worshipper", isCorrect: false },
        { opt: "she was An outcast", isCorrect: false },
      ],
    },
    {
      question: "why did she (khadijah) want to marry muhammad (SAW)?",
      answerOpt: [
        { opt: "Because of his good looks", isCorrect: false },
        {
          opt: "because of his truthfulness and good conduct",
          isCorrect: true,
        },
        { opt: "beacuse of his status", isCorrect: false },
        { opt: "because of his wealth", isCorrect: false },
      ],
    },
    {
      question: "How old was the prophet and khadija when they got married? ",
      answerOpt: [
        { opt: "he was 40 she was 25", isCorrect: false },
        { opt: "he was 20 she was 40", isCorrect: false },
        { opt: "he was 25 she was 40", isCorrect: true },
        { opt: "he was 30 she was 40", isCorrect: false },
      ],
    },
    {
      question: "What did the prophet give her (khadija) as dowry? ",
      answerOpt: [
        { opt: "20 camels", isCorrect: true },
        { opt: "50 camels", isCorrect: false },
        { opt: "10 camels", isCorrect: false },
        { opt: "25 camels", isCorrect: false },
      ],
    },
    {
      question:
        "How many times is the name muhammad mentioned in the holy quran?",
      answerOpt: [
        { opt: "3 times", isCorrect: false },
        { opt: "6 times", isCorrect: false },
        { opt: "10 times", isCorrect: false },
        { opt: "4 times", isCorrect: true },
      ],
    },
    {
      question: "where did the prophet go into seclussion?",
      answerOpt: [
        { opt: "cave hira", isCorrect: true },
        { opt: "mount arafah", isCorrect: false },
        { opt: "Kabaah", isCorrect: false },
        { opt: "cave sinai", isCorrect: false },
      ],
    },
    {
      question: "Where did the first revelation come down to him?",
      answerOpt: [
        { opt: "in cave sinai", isCorrect: false },
        { opt: "in Cave hira", isCorrect: true },
        { opt: "in cave utta", isCorrect: false },
        { opt: "in cave tur", isCorrect: false },
      ],
    },
    {
      question: "Who were the first to embrace islam(in order)",
      answerOpt: [
        {
          opt: "khadija(wife), zaid ibn harith(freed slave), ali ibn talib(cousin) and abubakar(friend)",
          isCorrect: true,
        },
        {
          opt: "zaid ibn harith(freed slave), ali ibn talib(cousin), khadija(wife)  and abubakar(friend)",
          isCorrect: false,
        },
        {
          opt: "khadija(wife), zaid ibn harith(freed slave) and ali ibn talib(cousin) ",
          isCorrect: false,
        },
        {
          opt: "abubakar(friend), zaid ibn harith(freed slave), ali ibn talib(cousin) and khadija(wife) ",
          isCorrect: false,
        },
      ],
    },
    {
      question: "how was the dawah(worship) done in the begining",
      answerOpt: [
        { opt: "openly", isCorrect: false },
        { opt: "secretly", isCorrect: true },
        { opt: "secretly and openly", isCorrect: false },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question: "did the prophet's uncle abu talib accept islam",
      answerOpt: [
        { opt: "yes he did", isCorrect: false },
        { opt: "yes but didnt not practice", isCorrect: false },
        { opt: "no he died a polythiest", isCorrect: true },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question: "The Year of Mourning was the year Khadija and _________died",
      answerOpt: [
        { opt: "Abu Bakr", isCorrect: false },
        { opt: "Abu jahl", isCorrect: false },
        { opt: "Abu lahab", isCorrect: false },
        { opt: "Abu talib", isCorrect: true },
      ],
    },
    {
      question: "Who accompanied the Prophet on his migration to Madinah?",
      answerOpt: [
        { opt: "Abu Bakr", isCorrect: true },
        { opt: "Umar ibn al-Kattab", isCorrect: false },
        { opt: "Uthman ibn Affan", isCorrect: false },
        { opt: "Ali ibn Talib", isCorrect: false },
      ],
    },
    {
      question: "Which wife of the prophet was the daughter of Abu Bakr?",
      answerOpt: [
        { opt: "Asma", isCorrect: false },
        { opt: "Aisha", isCorrect: true },
        { opt: "Hafsah", isCorrect: false },
        { opt: "Saudahh", isCorrect: false },
      ],
    },
    {
      question: "At what age did the prophet die",
      answerOpt: [
        { opt: "64", isCorrect: false },
        { opt: "65", isCorrect: false },
        { opt: "67", isCorrect: false },
        { opt: "63", isCorrect: true },
      ],
    },
    {
      question:
        "Which was his only living child present when the Prophet died?",
      answerOpt: [
        { opt: "fatima", isCorrect: true },
        { opt: "Zainab", isCorrect: false },
        { opt: "umme kulsoom", isCorrect: false },
        { opt: "Ruqayya", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following was one of the prophet's occupations before he became a prophet?",
      answerOpt: [
        { opt: "Tailor", isCorrect: false },
        { opt: "Farmer", isCorrect: false },
        { opt: "Merchent", isCorrect: true },
        { opt: "Carpenter", isCorrect: false },
      ],
    },
    {
      question:
        "In which month did the attack during 'Aam al-Fil (Year of the Elephant) take place?",
      answerOpt: [
        { opt: "Ramadan", isCorrect: false },
        { opt: "Muharam", isCorrect: true },
        { opt: "dhul hijjah", isCorrect: false },
        { opt: "sha'ban", isCorrect: false },
      ],
    },
    {
      question:
        "What was the name of the maid who helped to look after the Prophet Muhammad ﷺ as a child?",
      answerOpt: [
        { opt: "Maimoonah bint Harith", isCorrect: false },
        { opt: "Zaynab", isCorrect: false },
        { opt: "Ruqayyah", isCorrect: false },
        { opt: "Barakah bint Tha'alaba (Umm Ayman)", isCorrect: true },
      ],
    },
    {
      question:
        "Aam al-Fil (the Year of the Elephant) was named after an attack launched by which of the following",
      answerOpt: [
        { opt: "The crusaders", isCorrect: false },
        { opt: "The roman empires", isCorrect: false },
        { opt: "An Abyssinian ruler of yemen", isCorrect: true },
        { opt: "The byzantine empire", isCorrect: false },
      ],
    },
    {
      question:
        "What was the name of the wet nurse that looked after the Prophet Muhammad during his childhood?",
      answerOpt: [
        { opt: "Halima al-sadiyah", isCorrect: true },
        { opt: "Umm Sulaim", isCorrect: false },
        { opt: "Amina bint Wahb", isCorrect: false },
        { opt: "Juwayriyah bint Harith", isCorrect: false },
      ],
    },
    {
      question:
        "What was the name of the servant that Khadijah RA sent with the Prophet for business trade prior to their marriage?",
      answerOpt: [
        { opt: "Rabi'ah", isCorrect: false },
        { opt: "maysarah", isCorrect: true },
        { opt: "sumayyah", isCorrect: false },
        { opt: "Nafisah", isCorrect: false },
      ],
    },
    {
      question:
        "How many years did the Qur'an take to be revealed to the prophet Muhammad?",
      answerOpt: [
        { opt: "33", isCorrect: false },
        { opt: "43", isCorrect: false },
        { opt: "3", isCorrect: false },
        { opt: "23", isCorrect: true },
      ],
    },
    {
      question: "How many male children did the prophet Muhammad (Pbuh) have?",
      answerOpt: [
        { opt: "1", isCorrect: false },
        { opt: "2", isCorrect: true },
        { opt: "5", isCorrect: false },
        { opt: "none", isCorrect: false },
      ],
    },
    {
      question: "What was the core of his predication?",
      answerOpt: [
        { opt: "To be proud of being Arab", isCorrect: false },
        { opt: "To fight against the non belivers", isCorrect: false },
        { opt: "To be a nice person", isCorrect: false },
        { opt: "To worship Allah the only Good", isCorrect: true },
      ],
    },
    {
      question: "What battle did the prophet first win?",
      answerOpt: [
        { opt: "Badr", isCorrect: true },
        { opt: "Uhud", isCorrect: false },
        { opt: "Yarmuk", isCorrect: false },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question: "What was the second Surah revealed to Prophet Muhammad?",
      answerOpt: [
        { opt: "Ya-seen", isCorrect: false },
        { opt: "Al fatiha", isCorrect: false },
        { opt: "al mulk", isCorrect: false },
        { opt: "al muddathir", isCorrect: true },
      ],
    },
    {
      question: "the year the prophet was born is called?",
      answerOpt: [
        { opt: "Aamul huzn", isCorrect: false },
        { opt: "Aaamul shajar", isCorrect: false },
        { opt: "Aamul feel", isCorrect: true },
        { opt: "Aamul jamal", isCorrect: false },
      ],
    },
    {
      question:
        "Who was prominent protestants from among makkans against Muslims?",
      answerOpt: [
        { opt: "Abu Lahab", isCorrect: true },
        { opt: "Abu bakr", isCorrect: false },
        { opt: "omar RA", isCorrect: false },
        { opt: "uthman bin khattab", isCorrect: false },
      ],
    },
    {
      question:
        "The first masjid of islam , masjide Quba was made in how many days?",
      answerOpt: [
        { opt: "10 days", isCorrect: false },
        { opt: "12 days", isCorrect: false },
        { opt: "5 days", isCorrect: false },
        { opt: "8 days", isCorrect: true },
      ],
    },
    {
      question:
        "Who was the first sahabi to do hijrat to madinah and preach islam?",
      answerOpt: [
        { opt: "Mussab bin omer", isCorrect: true },
        { opt: "Hz talha", isCorrect: false },
        { opt: "Abdulrahman bin auf", isCorrect: false },
        { opt: "saad bi abi waqqas", isCorrect: false },
      ],
    },
    {
      question: "What is the distance between Quba and Madinah?",
      answerOpt: [
        { opt: "3 miles", isCorrect: true },
        { opt: "10 miles", isCorrect: false },
        { opt: "5 miles", isCorrect: false },
        { opt: "4 miles", isCorrect: false },
      ],
    },
    {
      question:
        "For how many months Baithul Muqaddas was qibla in Madinah for Muslims and then changed to kaaba?",
      answerOpt: [
        { opt: "17 months", isCorrect: true },
        { opt: "10 months", isCorrect: false },
        { opt: "6 months", isCorrect: false },
        { opt: "15 months", isCorrect: false },
      ],
    },
    {
      question:
        "Who was wife of Rasoolallah s.a.w at time of his hijrat to Madinah?",
      answerOpt: [
        { opt: "khadija", isCorrect: false },
        { opt: "zainab", isCorrect: false },
        { opt: "hafsa", isCorrect: false },
        { opt: "sawda", isCorrect: true },
      ],
    },
    {
      question: "Who were Ashabe Suhfa?",
      answerOpt: [
        { opt: "The first people to embrace islam", isCorrect: false },
        {
          opt: "the muhajirins from mecca and other places that came to practice islam",
          isCorrect: true,
        },
        { opt: "the learners from medinnah", isCorrect: false },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question:
        "What is the equivelent of praying salah in masjide Nabuwwi in Madina?",
      answerOpt: [
        { opt: "better than 1000 salah", isCorrect: true },
        { opt: "10,000 salah", isCorrect: false },
        { opt: "50,000 salah", isCorrect: false },
        { opt: "better than a million salah", isCorrect: false },
      ],
    },
    {
      question:
        "the Special place in masjid Nabuwwi which is a piece of jannah is called riyazul jannah",
      answerOpt: [
        { opt: "true", isCorrect: true },
        { opt: "false", isCorrect: false },
      ],
    },
    {
      question: "How many people embraced Islam in the early stage? ",
      answerOpt: [
        { opt: "60", isCorrect: false },
        { opt: "40", isCorrect: true },
        { opt: "10", isCorrect: false },
        { opt: "30", isCorrect: false },
      ],
    },
    {
      question: "What date did the Prophet migrate to Madinah?",
      answerOpt: [
        { opt: "12th Rabi ul Awwal", isCorrect: true },
        { opt: "9th Rabi ul awwal", isCorrect: false },
        { opt: "15th rabi ul awwal", isCorrect: false },
        { opt: "19th rabi ul awwal", isCorrect: false },
      ],
    },
    {
      question: "Did prophet muhammed (SAW) get injured in any battle?",
      answerOpt: [
        { opt: "Yes", isCorrect: true },
        { opt: "No", isCorrect: false },
      ],
    },
    {
      question: "in what battle did the prophet get injured?",
      answerOpt: [
        { opt: "Badr", isCorrect: false },
        { opt: "ditch", isCorrect: false },
        { opt: "uhud", isCorrect: true },
        { opt: "ushayra", isCorrect: false },
      ],
    },
    {
      question:
        "how many expenditions did the prophet(SAW) attend personally in his life time?",
      answerOpt: [
        { opt: "12", isCorrect: false },
        { opt: "17", isCorrect: false },
        { opt: "20", isCorrect: false },
        { opt: "27", isCorrect: true },
      ],
    },
    {
      question: "What was the greatest miracle of the Prophet muhammad SAW",
      answerOpt: [
        { opt: "the splitting of the moon", isCorrect: false },
        { opt: "water gushing from his noble fingers", isCorrect: false },
        { opt: ")stones and trees making salaam to him", isCorrect: false },
        { opt: "The Quran", isCorrect: true },
      ],
    },
  ];

  const [play, setPlay] = useState(false);
  const [tscore, setTscore] = useState(0);
  const [tWrongans, setTwrongans] = useState(0);
  const [tCorrectAns, setTcorrectAns] = useState(0);
  const [time, setTime] = useState(0);
  const [timeOff, setTimeOff] = useState(false);
  const [attemptedq, setAttemptedq] = useState(0);
  const [totalq, setTotalQ] = useState();
  //console.log(questions.length);
  let counter;

  function start() {
    setPlay(true);
    startTimer();
  }
  console.log(time);
  function startTimer() {
    setTimeOff(false);
    counter = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          clearInterval(counter);
          setTime("time off");
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
              Todays Quiz is going to be focused on the life of prophet
              muhammed(SAW)
            </p>
          </div>
          <div className="mode">
            <h1>select mode</h1>
            <div className="btn-container">
              <button
                value={100}
                onClick={(e) => {
                  setTime(e.target.value);
                  setEasyQ(true);
                  start();
                }}
                className="easy"
              >
                easy <small>15 questions</small> <br />
              </button>
              <small>
                1:45<sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                value={120}
                onClick={(e) => {
                  setTime(e.target.value);
                  setMediumQ(true);
                  start();
                }}
                className="medium"
              >
                medium <small>16 questions</small> <br />
              </button>
              <small>
                2:00 <sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                value={240}
                onClick={(e) => {
                  setTime(e.target.value);
                  setHardQ(true);
                  start();
                }}
                className="hard"
              >
                hard <small>24 questions</small> <br />
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
