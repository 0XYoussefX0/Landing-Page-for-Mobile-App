import curlyLine from "../assets/curlyLine.svg"
import plusSign from "../assets/plusSign.svg"
import minusSign from "../assets/minusSign.svg"
import { useState } from "react"
function Faq() {
  const [questions, setQuestions] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
  })

  const handleClick = (questionClicked) => {
    setQuestions((prevQuestions) => {
      let newQuestions = { ...prevQuestions }
      Object.keys(newQuestions).forEach((key) => {
        if (key == questionClicked) {
          newQuestions[key] = !newQuestions[key]
        } else {
          newQuestions[key] = false
        }
      })
      return newQuestions
    })
  }

  function getStyle(question) {
    return {
      border: questions[question]
        ? "1px solid transparent"
        : "1px solid #e7ebee",

      boxShadow: questions[question]
        ? "0px 23px 83px 0px rgba(0, 0, 0, 0.25)"
        : null,
    }
  }
  return (
    <div className="faq">
      <div className="semiCircle top-right-position"></div>
      <img className="curlyLine" src={curlyLine.src} alt="" />
      <h2>FAQ's</h2>
      <div className="questions">
        <div className="questionCard" style={getStyle("q1")}>
          <h3>
            <button
              onClick={() => {
                handleClick("q1")
              }}
              className="accordion-trigger"
              style={{ backgroundColor: questions.q1 ? "#FFFFFF" : "#fafafa" }}
            >
              <img
                src={questions.q1 ? minusSign.src : plusSign.src}
                height="30"
                width="30"
                alt={questions.q1 ? "Collapse FAQ" : "Expand FAQ"}
                loading="lazy"
              />
              <span className="question">
                How is it different to other Quran apps ?
              </span>
            </button>
          </h3>

          <div hidden={questions.q1 ? false : true}>
            <p className="accordion-answer">
              Quranly is a habit-building Quran app, all the features and
              functions are to help you read daily, the reading format, tracker,
              goal setter are all unique features on Quranly.
            </p>
          </div>
        </div>
        <div className="questionCard" style={getStyle("q2")}>
          <h3>
            <button
              onClick={() => {
                handleClick("q2")
              }}
              className="accordion-trigger"
              style={{ backgroundColor: questions.q2 ? "#FFFFFF" : "#fafafa" }}
            >
              <img
                src={questions.q2 ? minusSign.src : plusSign.src}
                height="30"
                width="30"
                alt={questions.q2 ? "Collapse FAQ" : "Expand FAQ"}
                loading="lazy"
              />
              <span className="question">Will it help me read daily ? </span>
            </button>
          </h3>

          <div hidden={questions.q2 ? false : true}>
            <p className="accordion-answer">
              We have over 700+ unique notifications which means you will never
              see the same reminder for 2 years straight!
            </p>
          </div>
        </div>
        <div className="questionCard" style={getStyle("q3")}>
          <h3>
            <button
              onClick={() => {
                handleClick("q3")
              }}
              className="accordion-trigger"
              style={{ backgroundColor: questions.q3 ? "#FFFFFF" : "#fafafa" }}
            >
              <img
                src={questions.q3 ? minusSign.src : plusSign.src}
                height="30"
                width="30"
                alt={questions.q3 ? "Collapse FAQ" : "Expand FAQ"}
                loading="lazy"
              />
              <span className="question">Why does it cost ?</span>
            </button>
          </h3>

          <div hidden={questions.q3 ? false : true}>
            <p className="accordion-answer">
              We have spent over $50,000 creating this app, the design,
              development and research is done by the best in the industry, you
              are not paying for the Quran rather you are paying for a software
              that helps you read daily, just like we pay for a gym as opposed
              to exercising for free.
            </p>
          </div>
        </div>
        <div className="questionCard" style={getStyle("q4")}>
          <h3>
            <button
              onClick={() => {
                handleClick("q4")
              }}
              className="accordion-trigger"
              style={{ backgroundColor: questions.q4 ? "#FFFFFF" : "#fafafa" }}
            >
              <img
                src={questions.q4 ? minusSign.src : plusSign.src}
                height="30"
                width="30"
                alt={questions.q4 ? "Collapse FAQ" : "Expand FAQ"}
                loading="lazy"
              />
              <span className="question">What can I track ?</span>
            </button>
          </h3>

          <div hidden={questions.q4 ? false : true}>
            <p className="accordion-answer">
              Quranly allows you to track the time, verses, pages and Hasanat
              you gain while reading.
            </p>
          </div>
        </div>
        <div className="questionCard" style={getStyle("q5")}>
          <h3>
            <button
              onClick={() => {
                handleClick("q5")
              }}
              className="accordion-trigger"
              style={{ backgroundColor: questions.q5 ? "#FFFFFF" : "#fafafa" }}
            >
              <img
                src={questions.q5 ? minusSign.src : plusSign.src}
                height="30"
                width="30"
                alt={questions.q5 ? "Collapse FAQ" : "Expand FAQ"}
                loading="lazy"
              />
              <span className="question">Does it have transliteration ?</span>
            </button>
          </h3>

          <div hidden={questions.q5 ? false : true}>
            <p className="accordion-answer">
              Yes, you can turn it on in the settings.
            </p>
          </div>
        </div>
        <div className="semiCircle bottom-left-position"></div>
      </div>
    </div>
  )
}

export default Faq
