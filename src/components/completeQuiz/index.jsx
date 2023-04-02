import * as htmlToImage from "html-to-image";
import React, { createRef, useEffect, useState } from "react";
import "./style.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Index = ({ correctAnswer, score, question, wrongAnswer, navigate }) => {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const ref = createRef(null);
  const shareUrl = "quiz-egsju80e3-hassana123.vercel.app";
  // const [image] = useScreenshot({
  //   type: "image/jpeg",
  //   quality: 1.0,
  // });
  const createFileName = (extension = "", ...names) => {
    if (!extension) {
      return "";
    }
    return `${names.join("")}.${extension}`;
  };
  const takeScreenShot = async (node) => {
    const imgURI = await htmlToImage.toJpeg(node);
    return imgURI;
  };
  const download = (image, { name = "result", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("score", JSON.stringify(score));
  }, [name, score]);
  const getImage = () => {
    takeScreenShot(ref.current).then(download);
  };
  function validate() {
    if (name && name !== " ") {
      setSaved(true);
      const leaderBoard = {
        name: name,
        score: score,
      };
      highScores.push(leaderBoard);

      highScores.sort((a, b) => {
        return b.score - a.score;
      });
      localStorage.setItem("highScores", JSON.stringify(highScores));
    } else {
      alert("cant sumbit empty string");
    }
  }

  return (
    <section className="complete-quiz">
      {saved ? (
        <>
          <div ref={ref} className="stats-cont">
            <h1>
              Masha Allah <span>{name} !!!</span>
            </h1>
            <p>Quiz completed ✅ successfully.👏</p>
            <h3>
              POINTS 👇🏾 <br />
              <br /> <span>✨ {score} 🙌</span>
            </h3>
            <p>
              Total correct answers:
              <span>
                {correctAnswer} out of {question}
              </span>
            </p>
            <p>
              Total wrong answers:
              <span>
                {wrongAnswer} out of {question}
              </span>
            </p>
            <div className="share">
              <small>share with friends:🤗</small>

              <FacebookShareButton
                url={shareUrl}
                quote={`Hey👋🏾 Ramadan Mubarak🤗, let's learn about islam in a fun way ☺😎😃`}
                hashtag={`#RAMADANQUIZ`}
              >
                <FacebookIcon size={35} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={shareUrl}
                quote={`Hey👋🏾 Ramadan Mubarak🤗, let's learn about islam in a fun way ☺😎😃`}
                hashtag={`#RAMADANQUIZ`}
              >
                <WhatsappIcon size={35} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={shareUrl}
                quote={`Hey👋🏾 Ramadan Mubarak🤗, let's learn about islam in a fun way ☺😎😃`}
                hashtag={`#RAMADANQUIZ`}
                ss
              >
                <TwitterIcon size={35} round={true} />
              </TwitterShareButton>
            </div>

            {/* <div className="img-cont">
              <img
                id="img"
                className="img-social"
                src={image}
                alt="screenshot"
              />
            </div> */}
          </div>
          <div className="socials">
            <button
              className="btn-shot"
              onClick={(e) => {
                e.preventDefault();
                getImage();
              }}
            >
              📷 Take a screenshot for the socials 📸
            </button>
          </div>
        </>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
        >
          <p>Enter your name to save your POINT!</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name?"
          />

          <button onClick={(e) => e.preventDefault} type="submit">
            save
          </button>
        </form>
      )}
    </section>
  );
};

export default Index;
