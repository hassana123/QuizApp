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
      question: "translate الله خلقني ",
      answerOpt: [
        { opt: " Allah is my Lord.", isCorrect: false },
        { opt: "Allah is my savior", isCorrect: false },
        { opt: "Allah gave me provision.", isCorrect: false },
        { opt: "Allah created me.", isCorrect: true },
      ],
    },
    {
      question: "Muslims have only ____ God ",
      answerOpt: [
        { opt: " one", isCorrect: true },
        { opt: " two", isCorrect: false },
        { opt: "three ", isCorrect: false },
        { opt: " four", isCorrect: false },
      ],
    },
    {
      question: "Who is our God?",
      answerOpt: [
        { opt: "Prophet Adam As ", isCorrect: false },
        { opt: " Prophet Isa As ", isCorrect: false },
        { opt: "Allah SWT ", isCorrect: true },
        { opt: "Prophet muhammad SAW ", isCorrect: false },
      ],
    },

    {
      question: "Did Allah creates all the living things? ",
      answerOpt: [
        { opt: "yes", isCorrect: true },
        { opt: "nope ", isCorrect: false },
      ],
    },
    {
      question: "translate  الله ربي   ",
      answerOpt: [
        { opt: "Allah gave me provision. ", isCorrect: false },
        { opt: " Allah created me.", isCorrect: false },
        { opt: "Allah is my Lord. ", isCorrect: true },
        { opt: "Allah is all forgiving ", isCorrect: false },
      ],
    },

    {
      question:
        "Allah is also the Creator of the unseen such as angels, heavens and ruh (soul).",
      answerOpt: [
        { opt: "Correct ", isCorrect: true },
        { opt: " false", isCorrect: false },
      ],
    },

    {
      question: "الخا لق  means?",
      answerOpt: [
        { opt: "the opener ", isCorrect: false },
        { opt: " the creator", isCorrect: true },
        { opt: "the one ", isCorrect: false },
        { opt: "the savior", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'Al Haqq' mean ?",
      answerOpt: [
        { opt: " The King.", isCorrect: false },
        { opt: "The truth. ", isCorrect: true },
        { opt: "The Most merciful. ", isCorrect: false },
        { opt: "the begining.", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'Al Qawiyy' mean ?",
      answerOpt: [
        { opt: " The King.", isCorrect: false },
        { opt: "The truth. ", isCorrect: false },
        { opt: "The almighty. ", isCorrect: true },
        { opt: "the patron", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'Ar Raqeeb' mean ?",
      answerOpt: [
        { opt: " The King.", isCorrect: false },
        { opt: "The caretaker. ", isCorrect: true },
        { opt: "The answerer of duas. ", isCorrect: false },
        { opt: "the patron", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'As - saboor' mean ?",
      answerOpt: [
        { opt: " The supporter.", isCorrect: false },
        { opt: "The eternal. ", isCorrect: false },
        { opt: "The most forebearing. ", isCorrect: true },
        { opt: "the deviser", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'Al Waasi' mean ?",
      answerOpt: [
        { opt: " The linient.", isCorrect: true },
        { opt: "The wise. ", isCorrect: false },
        { opt: "The answerer of duas. ", isCorrect: false },
        { opt: "the most loving", isCorrect: false },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'al wadood' mean ?",
      answerOpt: [
        { opt: " The provident.", isCorrect: false },
        { opt: "The ominipresent ", isCorrect: false },
        { opt: "The answerer of duas. ", isCorrect: false },
        { opt: "the most loving", isCorrect: true },
      ],
    },
    {
      question: "What does Allah's Beautiful Name 'an nur' mean ?",
      answerOpt: [
        { opt: " The provident.", isCorrect: false },
        { opt: "The ominipresent ", isCorrect: false },
        { opt: "The light. ", isCorrect: true },
        { opt: "the most loving", isCorrect: false },
      ],
    },

    {
      question: "What does Allah's Beautiful Name 'al mani' mean ?",
      answerOpt: [
        { opt: " The hinderer.", isCorrect: true },
        { opt: "The one who can cause loss ", isCorrect: false },
        { opt: "The assembler. ", isCorrect: false },
        { opt: "the one who gives guidiance", isCorrect: false },
      ],
    },

    {
      question: "What is the meaning of Tawheed?",
      answerOpt: [
        {
          opt: "Tawheed does not have any specific meaning ",
          isCorrect: false,
        },
        { opt: "Tawheed is worshipping Gods in all forms ", isCorrect: false },
        {
          opt: "Tawheed means belief in one unique God, unification and asserting oneness of God ",
          isCorrect: true,
        },
        { opt: "Tawheed means belief in many Gods ", isCorrect: false },
      ],
    },

    {
      question: "How many categories can Tawheed be divided into? ",
      answerOpt: [
        { opt: "Two categories", isCorrect: false },
        { opt: "Four categories", isCorrect: false },
        { opt: "One category ", isCorrect: false },
        { opt: "Three categories ", isCorrect: true },
      ],
    },

    {
      question:
        "What does Allah mention about insulting, abusing or condemning the Gods of other religions, in the Quran? ",
      answerOpt: [
        { opt: "Insult the Gods of other religions ", isCorrect: false },
        {
          opt: "Do not revile those whom they call upon besides Allah as Gods ",
          isCorrect: true,
        },
        { opt: "Abuse the Gods of other religions ", isCorrect: false },
        { opt: "Condemn the Gods of other religions ", isCorrect: false },
      ],
    },

    {
      question: "What does Shirk mean?",
      answerOpt: [
        { opt: " Shirk is a form of worship", isCorrect: false },
        {
          opt: " Shirk means associating partners with Allah and is equivalent to idolatry",
          isCorrect: true,
        },
        {
          opt: " Shirk means asserting the oneness of Allah",
          isCorrect: false,
        },
        { opt: "none of the above ", isCorrect: false },
      ],
    },
    {
      question: "What is Tawheed al-Ibaadah? ",
      answerOpt: [
        {
          opt: " Tawheed al- Ibaadah is maintaining the unity of Lordship",
          isCorrect: false,
        },
        {
          opt: " Tawheed al-Ibaadah is maintaining the unity of worship",
          isCorrect: true,
        },
        {
          opt: "Tawheed al-Ibaadah is maintaining the unity of Allah's name and attributes ",
          isCorrect: false,
        },
        { opt: "none of the above ", isCorrect: false },
      ],
    },

    {
      question: "What is Tawheed ar-Ruboobeeyah? ",
      answerOpt: [
        {
          opt: "Tawheed ar-Ruboobeeyah is maintaining the unity of Allah's name and attributes ",
          isCorrect: false,
        },
        {
          opt: " Tawheed ar-Ruboobeeyah is maintaining the unity of Lordship",
          isCorrect: true,
        },
        {
          opt: " Tawheed ar-Ruboobeeyah is maintaining the unity of worship",
          isCorrect: false,
        },
        { opt: " none of the above", isCorrect: false },
      ],
    },

    {
      question: " What is Tawheed al-Asmaa was-sifaat?",
      answerOpt: [
        {
          opt: "Tawheed al-Asmaa was-sifaat is maintaining the unity of Allah's name and attributes ",
          isCorrect: true,
        },
        {
          opt: " Tawheed al-Asmaa was-sifaat is maintaining the unity of Worship",
          isCorrect: false,
        },
        {
          opt: "Tawheed al-Asmaa was-sifaat is maintaining the unity of Lordship ",
          isCorrect: false,
        },
        { opt: "none of the aabove ", isCorrect: false },
      ],
    },

    {
      question: "What is the greatest sin which Allah will never forgive? ",
      answerOpt: [
        {
          opt: "Shirk is the greatest sin which Allah will never forgive ",
          isCorrect: true,
        },
        {
          opt: "There is nothing which is considered as the greatest sin ",
          isCorrect: false,
        },
        {
          opt: "Adultery is the greatest sin which Allah will never forgive ",
          isCorrect: false,
        },
        {
          opt: "Lying is the greatest sin which Allah will never forgive ",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Belief in the Angels is a fundamental part of Iman (faith) ",
      answerOpt: [
        { opt: " true ", isCorrect: true },
        { opt: " false", isCorrect: false },
      ],
    },

    {
      question: "Angels are created from? ",
      answerOpt: [
        { opt: "fire and Sun light ", isCorrect: false },
        { opt: "light", isCorrect: true },
        { opt: "water and ice ", isCorrect: false },
        { opt: " stars", isCorrect: false },
      ],
    },
    {
      question:
        "What is the name of the angel that will blow the trumpet to signal the coming of the Day of Judgement? ",
      answerOpt: [
        { opt: "Azrael AS", isCorrect: false },
        { opt: "Mika'il AS", isCorrect: false },
        { opt: "Jibreel AS", isCorrect: false },
        { opt: "Israfil AS", isCorrect: true },
      ],
    },

    {
      question: "How many angels do you have specifically assigned to you? ",
      answerOpt: [
        { opt: "1 ", isCorrect: false },
        { opt: " 2", isCorrect: false },
        { opt: " 4", isCorrect: true },
        { opt: " 6", isCorrect: false },
      ],
    },

    {
      question: "Who is the Angel of Death ",
      answerOpt: [
        { opt: "Nakir AS", isCorrect: false },
        { opt: "Azrael AS", isCorrect: true },
        { opt: "Maalik AS", isCorrect: false },
        { opt: "Munkar AS ", isCorrect: false },
      ],
    },
    {
      question:
        "What is the name of The Angel who manage man’s mundane necessities, bring forth rain and oversee the cultivation of crops. ",
      answerOpt: [
        { opt: "Ridwan AS ", isCorrect: false },
        { opt: " Maalik AS", isCorrect: false },
        { opt: "Jibrail AS ", isCorrect: false },
        { opt: " Mikael AS", isCorrect: true },
      ],
    },

    {
      question:
        "what is the name of The Angel who deliver the Divine Revelations from Allah (swt) ",
      answerOpt: [
        { opt: "Mikail AS", isCorrect: false },
        { opt: "Jibrail AS", isCorrect: true },
        { opt: " Izrail AS", isCorrect: false },
        { opt: " Azrael AS", isCorrect: false },
      ],
    },
    {
      question: "Do angels have wings? ",
      answerOpt: [
        { opt: "yes ", isCorrect: true },
        { opt: "No", isCorrect: false },
      ],
    },

    {
      question:
        "Which Angels Sits on man’s left shoulder to record his/her evil deeds. ",
      answerOpt: [
        { opt: "Maalik AS ", isCorrect: false },
        { opt: "Raqib AS ", isCorrect: false },
        { opt: "Atid AS ", isCorrect: true },
        { opt: "Munkar Nakir AS ", isCorrect: false },
      ],
    },
    {
      question:
        " Which Angel Sits on man’s right shoulder to record his/her good deeds.",
      answerOpt: [
        { opt: "Atid AS ", isCorrect: false },
        { opt: "Ridwan AS ", isCorrect: false },
        { opt: "Munkar Nakir AS ", isCorrect: false },
        { opt: "Raqib AS ", isCorrect: true },
      ],
    },
    {
      question:
        " Does the angel recording our bad deeds to the left of us write them down into our Record immediately?",
      answerOpt: [
        {
          opt: " No, there is a delay where the angel waits before writing",
          isCorrect: true,
        },
        { opt: " Yes, as we commit them", isCorrect: false },
      ],
    },
    {
      question:
        "What did the Angels say to Allah when they found out man was to be sent to Earth?",
      answerOpt: [
        {
          opt: "They were hesitant and asked God why, when they worship Him perfectly ",
          isCorrect: true,
        },
        {
          opt: "They were happy, and did not question this ",
          isCorrect: false,
        },
        {
          opt: " They asked if they should go and prepare Earth",
          isCorrect: false,
        },
        { opt: " They asked how many men will be sent", isCorrect: false },
      ],
    },
    {
      question: "Do angels eat and drink or sin? ",
      answerOpt: [
        { opt: " yes ", isCorrect: false },
        { opt: " no", isCorrect: true },
      ],
    },

    {
      question: "How many angels will question us in our graves? ",
      answerOpt: [
        { opt: " 2", isCorrect: true },
        { opt: " 4", isCorrect: false },
        { opt: "6 ", isCorrect: false },
        { opt: " 8", isCorrect: false },
      ],
    },
    {
      question:
        "What are the names of the angels that watch over heaven and hell? (respectively) ",
      answerOpt: [
        { opt: " Munkar (Heaven) and Nakir (Hell)", isCorrect: false },
        { opt: "Nakir (Heaven) and Munkar (Hell) ", isCorrect: false },
        { opt: " Malik (Heaven) and Ridwan (Hell)", isCorrect: false },
        { opt: "Ridwan (Heaven) and Malik (Hell) ", isCorrect: true },
      ],
    },
    {
      question: " what battle did angels participate in? ",
      answerOpt: [
        { opt: "battle of uhud ", isCorrect: false },
        { opt: "battle of badr  ", isCorrect: true },
        { opt: "battle of  tabuk", isCorrect: false },
        { opt: "battle of  khaybar", isCorrect: false },
      ],
    },

    {
      question: " Angels are ?",
      answerOpt: [
        { opt: "Extremely beautiful ", isCorrect: true },
        { opt: "Can take on the form of humans. ", isCorrect: true },
        { opt: "very large  ", isCorrect: true },
        { opt: "all of the above ", isCorrect: true },
      ],
    },

    {
      question:
        "which angel is Responsible for directing the rain and winds according to the will of Allah (swt)? ",
      answerOpt: [
        { opt: " mikail AS", isCorrect: true },
        { opt: "malik AS", isCorrect: false },
        { opt: "ridwan AS", isCorrect: false },
        { opt: " jibrial AS", isCorrect: false },
      ],
    },

    {
      question: "Angels have no free will. This means...",
      answerOpt: [
        { opt: " They do not do what Allah tells them", isCorrect: false },
        { opt: "They can't make their own decisions ", isCorrect: true },
      ],
    },

    {
      question: "The purpose of angels in the Islamic faith is to ",
      answerOpt: [
        { opt: "obey Adam ", isCorrect: false },
        { opt: " obey Allah", isCorrect: true },
        { opt: "obey Abraham ", isCorrect: false },
        { opt: " obey Muhammad", isCorrect: false },
      ],
    },

    {
      question: "The role of the Angel jibril was to ",
      answerOpt: [
        { opt: " act as a messenger of Allah", isCorrect: true },
        {
          opt: "take a persons soul to Allah (Angel of Death) ",
          isCorrect: false,
        },
        { opt: "act as a messenger of Muhammad ", isCorrect: false },
        {
          opt: "reward those who led a good life, and bring rain and thunder to Earth ",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "how many anges visit al - bait-al ma'mur everyday and perform prayers daily and then leave and never return(but a new group comes into it daily) ? ",
      answerOpt: [
        { opt: " 12", isCorrect: false },
        { opt: "limitless ", isCorrect: false },
        { opt: " 70,000", isCorrect: true },
        { opt: "90,000 ", isCorrect: false },
      ],
    },

    {
      question: "what is al-bait al-ma'mur",
      answerOpt: [
        { opt: " the frequented house ", isCorrect: true },
        { opt: "the peacefull house", isCorrect: false },
        { opt: " the sacred house", isCorrect: false },
        { opt: " the flourishing house ", isCorrect: true },
      ],
    },
    {
      question: "where is al-bait al-ma'mur situated",
      answerOpt: [
        {
          opt: " on the 5th heaven directly above the ka'abah",
          isCorrect: false,
        },
        {
          opt: "on the 6th heaven directly above the ka'abah",
          isCorrect: false,
        },
        {
          opt: "on the 7th heaven directly above the ka'abah",
          isCorrect: true,
        },
        {
          opt: "on the 8th heaven directly above the ka'abah",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Who are the archangels in islam",
      answerOpt: [
        { opt: "Jibrail, malik, israfil, and azrail", isCorrect: false },
        { opt: "Jibrail, mikail, israfil, and azrail ", isCorrect: true },
        { opt: "Jibrail, mikail, israfil, and Ridwan ", isCorrect: false },
        { opt: "Jibrail, mikail, munkar, and nakir ", isCorrect: false },
      ],
    },
    {
      question: "Who is the most powerful angel in islam",
      answerOpt: [
        { opt: "mikail AS", isCorrect: false },
        { opt: "Munkar AS", isCorrect: false },
        { opt: "malik AS", isCorrect: false },
        { opt: "Ridwan AS", isCorrect: false },
        { opt: "jibrail AS", isCorrect: true },
        { opt: "nakir AS", isCorrect: false },
        { opt: "israfil AS", isCorrect: false },
      ],
    },
    {
      question: "What is the meaning of the word “AL - Qur’an”? ",
      answerOpt: [
        { opt: " The Recitation", isCorrect: true },
        { opt: "the seeing ", isCorrect: false },
        { opt: " the believed", isCorrect: false },
        { opt: " that book", isCorrect: false },
      ],
    },

    {
      question:
        "How many letters are found in the Arabic alphabet which looks exactly the same but are differentiated by a dot. ",
      answerOpt: [
        { opt: " 2", isCorrect: false },
        { opt: " 6", isCorrect: false },
        { opt: "8 ", isCorrect: true },
        { opt: "9 ", isCorrect: false },
      ],
    },

    {
      question: " is the letter hamza ه the same as the leter alif ا?",
      answerOpt: [
        { opt: "no, not the same ", isCorrect: true },
        { opt: " yes they are the same", isCorrect: false },
      ],
    },

    {
      question: "How is an Arabic vowel represented in English? ",
      answerOpt: [
        { opt: " It is represented with a dot over it", isCorrect: false },
        { opt: "It is represented with an apostrophe ", isCorrect: false },
        {
          opt: "It is represented with a line above the English letter ",
          isCorrect: true,
        },
        { opt: " not represented at all", isCorrect: false },
      ],
    },

    {
      question:
        "How many points of articulation  in the mouth are there for Arabic letters?",
      answerOpt: [
        { opt: " 6", isCorrect: false },
        { opt: "5 ", isCorrect: true },
        { opt: " 9", isCorrect: false },
        { opt: "7 ", isCorrect: false },
      ],
    },

    {
      question: "Which Arabic letter is pronounced as a glottal stop? ",
      answerOpt: [
        { opt: " ه (ha)", isCorrect: false },
        { opt: "ة (ta marbuta)", isCorrect: false },
        { opt: "ي (ya)", isCorrect: false },
        { opt: "ء (hamzah)", isCorrect: true },
      ],
    },

    {
      question: "Which main points of articulation have the most letters? ",
      answerOpt: [
        { opt: " the throat الحلق", isCorrect: false },
        { opt: "the lips الشفتن", isCorrect: false },
        { opt: " the tongue اللسن", isCorrect: true },
        { opt: "the nasal cavity (the nose) الخيشوم", isCorrect: false },
      ],
    },

    {
      question:
        " In points of articulation, which letter belongs to the tongue?",
      answerOpt: [
        { opt: "ض ", isCorrect: false },
        { opt: "ق ", isCorrect: true },
        { opt: "ص ", isCorrect: false },
        { opt: " ع", isCorrect: false },
      ],
    },

    {
      question: "What sound is made by sukun ",
      answerOpt: [
        { opt: " The sound of u", isCorrect: false },
        { opt: " The sound of i", isCorrect: false },
        { opt: "The sound of a ", isCorrect: false },
        { opt: "The absence of sound (no vowel/ silent) ", isCorrect: true },
      ],
    },

    {
      question: "How many vowels exist in Arabic? ",
      answerOpt: [
        { opt: "2 (1 short vowel  and 1 long vowel)", isCorrect: false },
        { opt: "5(2 short vowel  and 3 long vowel)", isCorrect: false },
        { opt: "6(3 short vowel  and 3 long vowel)", isCorrect: true },
        { opt: "3 (1 short vowel  and 2 long vowel)", isCorrect: false },
      ],
    },
    {
      question: "so far how will you rate your self this ramdan ",
      answerOpt: [
        { opt: "10", isCorrect: true },
        { opt: "9", isCorrect: true },
        { opt: "8", isCorrect: true },
        { opt: "7", isCorrect: true },
        { opt: "6", isCorrect: true },
        { opt: "5 ", isCorrect: true },
        { opt: "4 ", isCorrect: false },
        { opt: "3", isCorrect: false },
        { opt: "2 ", isCorrect: false },
        { opt: "1 ", isCorrect: false },
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
              easyQ={easyQ}
              mediumQ={mediumQ}
              hardQ={hardQ}
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
              How deep is your islamic knowledge ? 🤔
              <br />
              <small>let's find out.🤗!</small>
            </p>
          </div>
          <div className="mode">
            <h1>select mode</h1>
            <div className="btn-container">
              <button
                onClick={() => {
                  setTime("180");
                  setEasyQ(true);
                  start();
                }}
                className="easy"
              >
                easy <small>15 questions</small> <br />
              </button>
              <small>
                3:00<sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                onClick={() => {
                  setTime("240");
                  setMediumQ(true);
                  start();
                }}
                className="medium"
              >
                medium <small>20 questions</small> <br />
              </button>
              <small>
                4:00 <sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                onClick={(e) => {
                  setTime("300");
                  setHardQ(true);
                  start();
                }}
                className="hard"
              >
                hard <small>25 questions</small> <br />
              </button>
              <small>
                5:00 <sub>min</sub>
              </small>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
