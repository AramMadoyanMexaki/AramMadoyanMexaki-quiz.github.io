import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: "Մեծ Բրիտանիայի մայրաքաղաքը:",
      answerOptions: [
        {answerText: "Լոնդոն", isCorrect : true},
        {answerText: "Նյու-Յորք", isCorrect : false},
        {answerText: "Փարիզ", isCorrect : false},
        {answerText: "Վաշինգտոն", isCorrect : false}
      ]
    },
    {
      questionText: "Որտեղ է ամենաերկար ճոպանուղին:",
      answerOptions: [
        {answerText: "ԱՄՆ", isCorrect : false},
        {answerText: "Չինաստան", isCorrect : false},
        {answerText: "Հայաստան", isCorrect : true},
        {answerText: "Ճապոնյա", isCorrect : false}
      ]
    },
    {
      questionText: "Ինչ լեզվով են խոսում Մեքսիկայում:",
      answerOptions: [
        {answerText: "Անգլերեն", isCorrect : false},
        {answerText: "Ֆրանսերեն", isCorrect : false},
        {answerText: "Մեքսիկերեն", isCorrect : false},
        {answerText: "Իսպաներեն", isCorrect : true}
      ]
    },
    {
      questionText: "Որը ծրագրավորման լեզու չէ:",
      answerOptions: [
        {answerText: "GO", isCorrect : false},
        {answerText: "PHP", isCorrect : false},
        {answerText: "Python", isCorrect : false},
        {answerText: "HTML", isCorrect : true}
      ]
    },
    {
      questionText: "Երբ է սկսվել և ավարտվել երկրորդ համաշխարհային պատերազմը:",
      answerOptions: [
        {answerText: "1914-1918թթ", isCorrect : false},
        {answerText: "1941-1945թթ", isCorrect : false},
        {answerText: "1939-1945թթ", isCorrect : true},
        {answerText: "1122-1225թթ", isCorrect : false}
      ]
    },
    {
      questionText: "Երբ է ընդունվել Քրիստոնեությունը Հայաստանում:",
      answerOptions: [
        {answerText: "405թ", isCorrect : false},
        {answerText: "301թ", isCorrect : true},
        {answerText: "33թ", isCorrect : false},
        {answerText: "451թ", isCorrect : false}
      ]
    }
  ];

const [currentQuestion, setCurretnQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);

const handleAnswerOptionClick = (isCorrect) => {
  if(isCorrect) {
    setScore(score + 1);
  }

  
  const nextQuestion = currentQuestion + 1

  if(nextQuestion < questions.length) {
    setCurretnQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};

function App2() {
  return(
    <div className='App'>
      <div className="title">
            <h2>Հարց համար` {currentQuestion + 1}/{questions.length}</h2>
        </div>
        <div className="question_text">
           <span>{questions[currentQuestion].questionText}</span>
        </div>
        <div className='variants'>
          {
            questions[currentQuestion].answerOptions.map((variant) => {
              return(
                <button onClick={() => {
                  handleAnswerOptionClick(variant.isCorrect);
                }}>{variant.answerText}</button>
              )
            })
          }
        </div>
    </div>
  )
}

  return (
    <div className="quiz">

      {
        showScore 
           ? <div className="result_section">
           <div className='result_text'>
               <h2>Հարցերի քանակը՝ {questions.length}:</h2>
               <h2>Ճիշտ պատասխանների {score}:</h2>
           </div>
       </div>  : <App2 />
      }

        {/* <div className="title">
            <h2>Հարց համար` {currentQuestion + 1}/{questions.length}</h2>
        </div>
        <div className="question_text">
           <span>{questions[currentQuestion].questionText}</span>
        </div>
        <div className='variants'>
          {
            questions[currentQuestion].answerOptions.map((variant) => {
              return(
                <button onClick={() => {
                  handleAnswerOptionClick(variant.isCorrect);
                }}>{variant.answerText}</button>
              )
            })
          }
        </div> */}
    </div>
  )
}

export default App;
