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
        "prophet Yusuf AS story started with a —---- and ended with an —------.",
      answerOpt: [
        { opt: "song and  event", isCorrect: false },
        { opt: " Dream and interpretation", isCorrect: true },
        { opt: "Lie and offense", isCorrect: false },
        { opt: " none of the above", isCorrect: false },
      ],
    },
    {
      question: "How many stars did Yusuf AS see in his dream? ",
      answerOpt: [
        { opt: " 20 stars and the sun and the moon", isCorrect: false },
        { opt: "12 stars and the sun and the moon  ", isCorrect: false },
        { opt: " 11 stars and the sun and the moon", isCorrect: true },
        { opt: " 10 stars and the sun and the moon", isCorrect: false },
      ],
    },
    {
      question:
        "In his dream, what did Yusuf (AS) see the stars, sun and moon doing? ",
      answerOpt: [
        { opt: "making him a prophet ", isCorrect: false },
        { opt: "Dancing for him ", isCorrect: false },
        { opt: " praying for him", isCorrect: false },
        { opt: "Prostrating to him  ", isCorrect: true },
      ],
    },
    {
      question: " Were The step brothers of Yosuf AS jealous of him",
      answerOpt: [
        { opt: " yes they were", isCorrect: true },
        { opt: "no the were not", isCorrect: false },
        { opt: " they felt indifferent ", isCorrect: false },
        { opt: " they just did not care", isCorrect: false },
      ],
    },
    {
      question: "why were the step brothers jealous of yusuf and his brother ",
      answerOpt: [
        {
          opt: "they were jealous because yusuf and his brother were loved more by their father",
          isCorrect: true,
        },
        {
          opt: " they were jealous because yusuf told them his dream",
          isCorrect: false,
        },
        {
          opt: "they were jealous because of his extreme beauty ",
          isCorrect: false,
        },
        { opt: " they were not jealous at all", isCorrect: false },
      ],
    },

    {
      question: "What is the name of prophet yusuf AS birth country ",
      answerOpt: [
        { opt: " Mekka", isCorrect: false },
        { opt: "Cannan (Now palestine)", isCorrect: true },
        { opt: " Yathrib (medina)", isCorrect: false },
        { opt: "Egypt ", isCorrect: false },
      ],
    },
    {
      question: "what is the name of prophet yusuf's fathers ",
      answerOpt: [
        { opt: "Yunus AS", isCorrect: false },
        { opt: " yahya As", isCorrect: false },
        { opt: "ibrahim As ", isCorrect: false },
        { opt: "Yaqub As ", isCorrect: true },
      ],
    },
    {
      question: "Who was Ya'qoob (AS) ",
      answerOpt: [
        { opt: "A Prophet ", isCorrect: true },
        { opt: "Son of Ishaq ", isCorrect: true },
        {
          opt: "He was also known as Israeel and his generation was called Bani Israeel ",
          isCorrect: true,
        },
        { opt: "Father of Yusuf ", isCorrect: true },
        { opt: "All of the above", isCorrect: true },
      ],
    },
    {
      question: " what is the name of his mother",
      answerOpt: [
        { opt: "Maryam ", isCorrect: false },
        { opt: "Rebecca ", isCorrect: false },
        { opt: "Rachel ", isCorrect: true },
        { opt: "Hauwa ", isCorrect: false },
      ],
    },

    {
      question:
        "What is the name of his younger brother (from the same mother) ",
      answerOpt: [
        { opt: "Yahudh (judah) ", isCorrect: false },
        { opt: "benjamin (benyamin)", isCorrect: true },
        { opt: "Beynon ", isCorrect: false },
        { opt: " Photiphar", isCorrect: false },
      ],
    },
    {
      question: "How many Brothers did Yusuf AS have ",
      answerOpt: [
        { opt: " 10", isCorrect: false },
        { opt: "8 ", isCorrect: false },
        { opt: " 9", isCorrect: false },
        { opt: "11 ", isCorrect: true },
      ],
    },

    {
      question:
        "The plot by yusuf's step brothers was to either kill him or cast him out ",
      answerOpt: [
        { opt: "true ", isCorrect: true },
        { opt: " false", isCorrect: false },
      ],
    },
    {
      question:
        " after several delibrations on what to do with Yusuf A.  yusuf's step brothers decided to cast him out instead of killing him , which of the step brothers came up with this solution",
      answerOpt: [
        { opt: "Benjamin ", isCorrect: false },
        { opt: "Beynon ", isCorrect: false },
        { opt: "Yahudh (judah) ", isCorrect: true },
        { opt: "Fir'awn ", isCorrect: false },
      ],
    },
    {
      question:
        "When the step brothers approached yaqub and asked him to  Send Yusuf AS with them  to enjoy himself and play. Pophet Yaqub As responded by saying—",
      answerOpt: [
        {
          opt: "verily, you should take him and bring him back home on time ",
          isCorrect: false,
        },
        {
          opt: "Truly, it saddens me that you should take him away. I fear least a wolf should devour him",
          isCorrect: true,
        },
        {
          opt: "Go, go and a fun with him as he is your brother ",
          isCorrect: false,
        },
        { opt: "he said nothing ", isCorrect: false },
      ],
    },

    {
      question: "What happened to Yousuf when he went with his brothers? ",
      answerOpt: [
        { opt: "He was thrown into a well ", isCorrect: true },
        { opt: "He got lost ", isCorrect: false },
        { opt: " A wolf attecked him", isCorrect: false },
        {
          opt: "He was saved from a wolf attack by his brothers ",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        " After throwing yusuf As into the well the brothers took an oath to forever keep the deed a secret, they then killed an animal and  soaked his shirt in the animal's blood. What animal's blood did they soak his shirt in?",
      answerOpt: [
        { opt: "Wolf ", isCorrect: false },
        { opt: "Pig ", isCorrect: false },
        { opt: " Sheep", isCorrect: true },
        { opt: "Camel", isCorrect: false },
      ],
    },
    {
      question:
        "They came to their father in the middle of the night weeping. What did they claim happened to yusuf? They claimed that—",
      answerOpt: [
        { opt: "He fell in to well and died ", isCorrect: false },
        { opt: " He was eaten by a wolf", isCorrect: true },
        { opt: "they lost him ", isCorrect: false },
        { opt: "he was kidnapped ", isCorrect: false },
      ],
    },

    {
      question:
        "when they handed Yaqub AS yusuf's blood soaked shirt, what did the prophet AS say? ",
      answerOpt: [
        {
          opt: " he said What a merciful wolf! he ate up my beloved son without tearing his shirt!",
          isCorrect: true,
        },
        { opt: "He said the brothers were lying  ", isCorrect: false },
        { opt: "He asked for more proff ", isCorrect: false },
        { opt: "he said nothing ", isCorrect: false },
      ],
    },
    {
      question: "How old was yusuf AS when he was thrown into the well ",
      answerOpt: [
        { opt: "20 years old ", isCorrect: false },
        { opt: "25 years old ", isCorrect: false },
        { opt: "18 years old ", isCorrect: true },
        { opt: "16 years old ", isCorrect: false },
      ],
    },

    {
      question: "Did their father Yaqub AS believe that yusuf has died  ",
      answerOpt: [
        { opt: "yes he did ", isCorrect: false },
        { opt: "No he did not", isCorrect: true },
      ],
    },

    {
      question:
        "Who found prophet Yusuf As in the well he was thrown in by his brothers ",
      answerOpt: [
        { opt: "The King ", isCorrect: false },
        { opt: " The cheif minister", isCorrect: false },
        { opt: " caravan Travellers", isCorrect: true },
        { opt: " nobody", isCorrect: false },
      ],
    },

    {
      question:
        " When the travelers found Prophet Yusuf in the well, where did they take him?",
      answerOpt: [
        { opt: " back to cannan", isCorrect: false },
        { opt: " Jerusalem", isCorrect: false },
        { opt: "egypt ", isCorrect: true },
        { opt: "Yemen ", isCorrect: false },
        { opt: "Iran ", isCorrect: false },
      ],
    },

    {
      question: "What did the caravan traveller do with yusuf AS  ",
      answerOpt: [
        { opt: "The kept him as a slave for themselves ", isCorrect: false },
        { opt: "they sold him for a few dhirhams ", isCorrect: true },
        { opt: "They set him free ", isCorrect: false },
        { opt: "they took him to the king", isCorrect: false },
      ],
    },

    {
      question: "Who Bought him from the caravan travellers  ",
      answerOpt: [
        { opt: "The king of egypt ", isCorrect: false },
        { opt: "The cheif Minister of Egypt ", isCorrect: true },
        { opt: "The king's cup bearer ", isCorrect: false },
        { opt: " none of the above", isCorrect: false },
      ],
    },
    {
      question:
        "And when he yusuf attained his full manhood he was blessed with ? ",
      answerOpt: [
        { opt: " beauty and strength", isCorrect: false },
        { opt: "beauty and grace ", isCorrect: false },
        { opt: " wisdom and knowledge", isCorrect: true },
        { opt: "Voice and charisma", isCorrect: false },
      ],
    },

    {
      question:
        " Other then Prophethood, Prophet Yousuf AS was blessed with the knowledge of?",
      answerOpt: [
        { opt: " He was able to predict future", isCorrect: false },
        { opt: "He was able to control jinns ", isCorrect: false },
        { opt: "he was able to tell the outcome of dreams ", isCorrect: true },
        { opt: " He was able to talk to animals", isCorrect: false },
      ],
    },

    {
      question:
        "The name of wife of the cheif minister  of Egypt who liked Prophet Yousuf AS and also falsely accussed him of molesting her , was ",
      answerOpt: [
        { opt: "Zulufa ", isCorrect: false },
        { opt: "Zainab ", isCorrect: false },
        { opt: "Rahmah ", isCorrect: false },
        { opt: " Zulaikha", isCorrect: true },
      ],
    },
    {
      question:
        "The wise and just chief minister apologized to yusuf for his wife's indecency. He also instructed her to beg yusuf's forgiveness for accusing him falsely ",
      answerOpt: [
        { opt: "true ", isCorrect: true },
        { opt: "false ", isCorrect: false },
      ],
    },

    {
      question:
        "when the news of her indecency spread Zuliakha invited women over in order to regain her reputation  (a banquet) what kitchen  item did she give the women in attendance",
      answerOpt: [
        { opt: "A knife ", isCorrect: true },
        { opt: "A plate", isCorrect: false },
        { opt: "A spoon ", isCorrect: false },
        { opt: "A fork ", isCorrect: false },
      ],
    },
    {
      question:
        "and she said (to Joseph): 'Come out before them'. Then, when they (the women) saw him, they exalted him (at his beauty) and (in their astonishment) they ------ ",
      answerOpt: [
        { opt: " stared at him ", isCorrect: false },
        { opt: "tripped and fell ", isCorrect: false },
        { opt: "cut their hands ", isCorrect: true },
        { opt: "lost balance ", isCorrect: false },
      ],
    },

    {
      question: " For how long did Prophet Yousuf stay in the prison",
      answerOpt: [
        { opt: " 12 years", isCorrect: false },
        { opt: "11 years  ", isCorrect: false },
        { opt: "10 years  ", isCorrect: false },
        {
          opt: " Many years(exact time is not known from Quran and Ahadeeth)",
          isCorrect: true,
        },
      ],
    },
    {
      question:
        "When he was in prison two other inmates joined him one was the king's  — and the other was the king's  —  ",
      answerOpt: [
        { opt: "cupbearer and slave ", isCorrect: false },
        { opt: " guard and cook", isCorrect: false },
        { opt: "Cupbrearer and cook ", isCorrect: true },
        { opt: "none of the above ", isCorrect: false },
      ],
    },

    {
      question: " What dreams did the two prison inmates have",
      answerOpt: [
        { opt: "They did not reveal their dreams", isCorrect: false },
        {
          opt: "One saw himself making wine. The other saw himself carrying upon his head some bread, from which the birds were eating.",
          isCorrect: true,
        },
        {
          opt: " one saw himself crying and the other saw birds eating from his food ",
          isCorrect: false,
        },
        {
          opt: "one saw the king dead and the other saw himself making wine for the king ",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "When the prisoners asked about the explanation of there dreams, how did Yousuf (AS) start ",
      answerOpt: [
        {
          opt: "He started thinking about what those dream meant ",
          isCorrect: false,
        },
        {
          opt: "He said: You have chosen the right person to ask ",
          isCorrect: false,
        },
        {
          opt: "He said this is just a normal dream which you had because you are in prison ",
          isCorrect: false,
        },
        {
          opt: " He said: I will inform about the interpretation and that is what Allah has thought me. He then praised Allah then thought them about Tawheed. After this he explained the dream",
          isCorrect: true,
        },
      ],
    },
    {
      question:
        " what message did he give to the inmate with the wine pouring dream",
      answerOpt: [
        {
          opt: " he told him to mention him and his wrongful imprisonment to the king once out",
          isCorrect: true,
        },
        {
          opt: "he told him to remind his master that he is still in prison ",
          isCorrect: false,
        },
        {
          opt: "he told him to ask for the king's forgiveness ",
          isCorrect: false,
        },
        { opt: "he did not give any message, ", isCorrect: false },
      ],
    },
    {
      question:
        " did the wine making dream guy remember to deliver the message",
      answerOpt: [
        { opt: " yes he delivered", isCorrect: false },
        { opt: "No shaytan made him forget ", isCorrect: true },
        { opt: "No he choose to ignore the message ", isCorrect: false },
        { opt: "none of the above ", isCorrect: false },
      ],
    },
    {
      question:
        " After many years of staying in prison Prophet Yousuf was forgotten... How was he remembered",
      answerOpt: [
        {
          opt: "the cheif minister could no longer bear to see him in prison ",
          isCorrect: false,
        },
        { opt: "Zulaikha asked for his release ", isCorrect: false },
        {
          opt: "The king had a strange frightening dream so the wine making dream guy remembered ",
          isCorrect: true,
        },
        { opt: "none of the above ", isCorrect: false },
      ],
    },
    {
      question: "What did the king see in his dream? ",
      answerOpt: [
        { opt: "he saw a lion chasing an elephant ", isCorrect: false },
        {
          opt: "he saw seven fat cows being eaten by seven lean cows, and seven green spikes of grains and seven dry one ",
          isCorrect: true,
        },
        {
          opt: "he saw seven fat cows being eaten by 7 fat lions ",
          isCorrect: false,
        },
        { opt: "it was not revealed ", isCorrect: false },
      ],
    },
    {
      question:
        "According to Prophet Yusuf's interpretation of the kings dream, Egypt will face.. ",
      answerOpt: [
        {
          opt: "7 years of abundant harvest; followed by 7 years of draught",
          isCorrect: true,
        },
        { opt: "Drought for the next 7 years ", isCorrect: false },
        {
          opt: "7 years of drought; followed by 7 years of abundant harvest",
          isCorrect: false,
        },
        { opt: "7 years of misfortune", isCorrect: false },
      ],
    },
    {
      question:
        "The king ordered his envoy to fetch yusuf  immediately after the interpretation of the dream, but yusuf refused to leave the prison unless—--",
      answerOpt: [
        { opt: "His master apologized to him ", isCorrect: false },
        { opt: "His master's wife apologized to him", isCorrect: false },
        { opt: "His innocence is proven ", isCorrect: true },
        { opt: "he was given a chieftancy title ", isCorrect: false },
      ],
    },
    {
      question:
        "when yusuf was set free and proven innocent what did he request he be put in charge off ",
      answerOpt: [
        { opt: "The entire land of egypt ", isCorrect: false },
        { opt: "the affairs of the king ", isCorrect: false },
        { opt: "the expenditions of the land ", isCorrect: false },
        { opt: " the storehouses of the land", isCorrect: true },
      ],
    },
    {
      question: "What was the responsibility of Yousuf AS in the kingdom? ",
      answerOpt: [
        { opt: " health", isCorrect: false },
        {
          opt: "Wealth and Food for the next 7 years of famine coming",
          isCorrect: true,
        },
        { opt: "Education ", isCorrect: false },
        { opt: " None of the above", isCorrect: false },
      ],
    },
    {
      question: "Why was  Yusuf (as) sent to prison? ",
      answerOpt: [
        { opt: "He misbehaved with the nobleman's wife ", isCorrect: false },
        {
          opt: " He was innocent but to save the family honor, he was sent to prison by the nobleman",
          isCorrect: true,
        },
        { opt: "He was accused of stealing ", isCorrect: false },
        { opt: "he was accused of murder ", isCorrect: false },
      ],
    },
    {
      question:
        "7 years passed and famine spread accross the entire region including cannan (yusuf hometown). yaqub sent his sons all except benjamin to egypt for provision yusuf AS immediately recognized them and then he  ask them to —-  in other to get full supplies",
      answerOpt: [
        { opt: "Bring their other brother  ", isCorrect: true },
        { opt: "bring their father ", isCorrect: false },
        { opt: "bring their mothers ", isCorrect: false },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question:
        "when they told their father about the request made by the man in egypt(yusuf As) he refused to send benjamin with them because ",
      answerOpt: [
        { opt: " he did not love them", isCorrect: false },
        {
          opt: "he had entrusted Joseph to them and they failed him ",
          isCorrect: true,
        },
        { opt: "He does not trust benjamin", isCorrect: false },
        { opt: " none of the above", isCorrect: false },
      ],
    },

    {
      question:
        "yaqub AS later agreed to let benjamin go with them to egypt only if his sons swear to him in Allah's name that no harm shall befall benjamin and he shall return safely ",
      answerOpt: [
        { opt: "true", isCorrect: true },
        { opt: "false ", isCorrect: false },
      ],
    },
    {
      question:
        "the brothers left for egypt, yusuf and benjamin met, what did yusuf do to prevent benjamin from going back to cannan with his brothers",
      answerOpt: [
        {
          opt: "He hid benjamin safely in the king's palace  ",
          isCorrect: false,
        },
        {
          opt: "he did nothing to stop benjamin from leaving ",
          isCorrect: false,
        },
        {
          opt: " He put the king’s drinking cup of gold in benjamin's bag And stopped the caravans to search for that stolen cup.",
          isCorrect: true,
        },
        {
          opt: "he asked the brothers to sell benjamin to him ",
          isCorrect: false,
        },
      ],
    },

    {
      question:
        "What did Yaqub’s sons do when their brother was caught as a thief?",
      answerOpt: [
        { opt: "They scolded benjamin for stealing ", isCorrect: false },
        { opt: "they let benjamin take the fall ", isCorrect: false },
        {
          opt: "They offered that the king may take one of them, instead of their younger brother.",
          isCorrect: true,
        },
        {
          opt: " they offered benjamin to the egypt in exchange for their own freedom",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "What happened to Yaqub’s (aS) eyes and what did he say when he cried for Yusuf (aS)? ",
      answerOpt: [
        {
          opt: "his eyes became white with grief and he said “I only complain of my suffering and my grief to Allah.” ",
          isCorrect: true,
        },
        {
          opt: " he became blind and he said he blames his sons for what happened to yusuf",
          isCorrect: false,
        },
        { opt: "all of the above ", isCorrect: false },
        { opt: "none of the above ", isCorrect: false },
      ],
    },

    {
      question:
        "What did Yusuf (aS) announce (what did he declare) as punishment for his brothers when they found out who Yusuf (aS) was?",
      answerOpt: [
        {
          opt: " he asked that allah punishes them for all the sins ",
          isCorrect: false,
        },
        { opt: "He locked them up in prison ", isCorrect: false },
        {
          opt: "He forgave them and asked that allah forgives them to for only he is all forgiving the most merciful  ",
          isCorrect: true,
        },
        { opt: "he threw each one of them into a deep well", isCorrect: false },
      ],
    },

    {
      question: "What did Yusuf (aS) send to his father to cure his eyesight? ",
      answerOpt: [
        {
          opt: "he sent a white scarf and asked them to cast it on his fathers face ",
          isCorrect: false,
        },
        {
          opt: "he sent A gold scarf and asked them to cast it on his fathers face ",
          isCorrect: false,
        },
        {
          opt: "he sent his shirt, and asked them to cast it on his father’s face ",
          isCorrect: true,
        },
        { opt: "none of the above ", isCorrect: false },
      ],
    },

    {
      question:
        "yusuf's story began with a dream and it ends with the interpretation of the dream what would you say is the intepretation",
      answerOpt: [
        {
          opt: "he gave his brothers free food",
          isCorrect: false,
        },
        {
          opt: "his brothers ended up believing in his prophethood ",
          isCorrect: true,
        },
        {
          opt: "his father and brothers bowed to him in prostration as he raised his parents to the thrown",
          isCorrect: true,
        },
        { opt: "none of the above ", isCorrect: false },
      ],
    },
    {
      question:
        "Prophets are the people who are most tested from Allah: How was Prophet Yousuf (AS) tested ",
      answerOpt: [
        {
          opt: "He was throwed in the well by his brothers when he was very young",
          isCorrect: true,
        },
        {
          opt: "He stayed away from his family for many many years ",
          isCorrect: true,
        },
        {
          opt: " from just aaa fake blame on him he was prisoned for a long time",
          isCorrect: true,
        },
        { opt: "All of the above", isCorrect: true },
        { opt: "noneof the above", isCorrect: false },
      ],
    },

    {
      question: " some lessons we learn from the story of Prophet Yousuf (AS) ",
      answerOpt: [
        {
          opt: "We should praise Allah for the knowledge He has given us ",
          isCorrect: true,
        },
        {
          opt: " We learn patience, a beautiful patience of a father and son.",
          isCorrect: true,
        },
        {
          opt: "Jealousy(hasad) is a dangerous emotion and it is cause many bad effects in society ",
          isCorrect: true,
        },
        {
          opt: " We should do our work with honesty, loyalty, hard work, devotion, and wisdom, Yusuf fulfilled his role and he did an excellent job and collected food which lasted for 7 years, even for their nighbours",
          isCorrect: true,
        },
        { opt: "all of the above", isCorrect: true },
        { opt: "none of the above", isCorrect: false },
      ],
    },
    {
      question:
        "prophet yusuf As was said to have died at age 110 and when he died his body was mummified and placed in coffin. why was he not burried on the grounds of egypt ? ",
      answerOpt: [
        {
          opt: "because at the momment of his death he asked his brothers not to burry him",
          isCorrect: false,
        },
        {
          opt: " because at the momment of his death he asked his brothers to burry him beside his forefathers if they were to leave egypt",
          isCorrect: true,
        },
        {
          opt: "because at the momment of his death he asked to be burried next to his mother",
          isCorrect: false,
        },
        { opt: "none of the above", isCorrect: false },
      ],
    },

    {
      question:
        "FUN FACT: family tree of prophet yusuf AS down to the first generation",
      answerOpt: [
        { opt: "yusuf ibn yaqub ibn ishaq ibn ibrahim ... ", isCorrect: true },
        {
          opt: " ibrahim ibn tarikh ibn nahur ibn sarough ibn raghu ibn phaligh ibn aher ibn shalih in arfghshand ibn sam ibn Noah ... ",
          isCorrect: true,
        },
        { opt: "noah ibn lamik ibn mitoshilkh ibn enoch ...", isCorrect: true },
        {
          opt: "enoch ibn yard ibn mahlabeel ibn qinan ibn anoush ibn shees ibn Adam",
          isCorrect: true,
        },
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
              Todays Quiz is going to be focused on the story of prophet Yusuf
              (Joseph) AS <br />
              <sub>my😍fave😍</sub>
              <br />
              <small>Enjoy🤗!</small>
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
                  setTime("300");
                  setMediumQ(true);
                  start();
                }}
                className="medium"
              >
                medium <small>15 questions</small> <br />
              </button>
              <small>
                5:00 <sub>min</sub>
              </small>
            </div>
            <div className="btn-container">
              <button
                onClick={(e) => {
                  setTime("600");
                  setHardQ(true);
                  start();
                }}
                className="hard"
              >
                hard <small>25 questions</small> <br />
              </button>
              <small>
                10:00 <sub>min</sub>
              </small>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
