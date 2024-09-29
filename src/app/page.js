"use client"
import { useState } from "react";
import questions from "./data/questions.json";
import styles from "./styling/stye.module.css";


export default function QuizApp() {
  let [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  let [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  let [obtainScore, setObtainScore] = useState(0);

  const onOptionSelected = (selectedOptionIndex) => {
    setSelectedOptionIndex(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuestIndex].correctOptionIndex) {
      setObtainScore(obtainScore + 1);

    }
    else {
      // console.log('hyy')
    }
    // setTimeout(function () {
    //   setCurrentQuestIndex(currentQuestIndex + 1);
    //   setSelectedOptionIndex(null);
    // }, 500);
  };

  const nextQuestion = () => {
    if (selectedOptionIndex == null) {
      alert("Please select an option")
    } else {
      setSelectedOptionIndex(null);
      setCurrentQuestIndex(currentQuestIndex + 1);
    }
  }

  const restart = () => {
    setCurrentQuestIndex(0);
    setObtainScore(0);
  }

  if (currentQuestIndex === questions.length) {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-6 col-sm-6">
              <div className="card text-center">
                <div className="card-header">
                  <h1>Quiz Finished !</h1>
                </div>
                <div className="card-body score">
                  <h5 className="card-title">Score Board</h5>
                  <p className="card-text score">{obtainScore} / {questions.length}</p>
                  <button onClick={restart} className="btn btn-primary">Restart</button>
                </div>
              </div >
            </div>
            <div className="col-md-3 col-sm-3"></div>
          </div>
        </div >
      </>
    )
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-sm-3"></div>
          <div className="col-md-6 col-sm-6">
            <div className="card text-center">
              <div className="card-header">
                <h3>Question # {questions[currentQuestIndex]?.id}</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">{questions[currentQuestIndex]?.statement}</h5>
                <ul className="list-group">
                  {questions[currentQuestIndex]?.options.map((option, index) => (
                    <li
                      // className={selectedOptionIndex === index ? "list-group-item active" : "list-group-item"}
                      onClick={() => onOptionSelected(index)}
                      className={styles['list-group-item']}
                    // className={`$(styles['list-group-item'] $(styles['list-group-item:hover']`}
                    // style={{
                    //   backgroundColor: index === questions[currentQuestIndex].correctOptionIndex ? 'green' : index !== questions[currentQuestIndex].correctOptionIndex ? 'red' : 'black',
                    //   cursor: 'pointer',
                    //   margin: '5px 0',
                    // }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                <button onClick={nextQuestion} className="btn btn-primary mt-3">Next</button>
              </div>
              <div className="card-footer text-body-secondary">
                {questions[currentQuestIndex]?.id}/{questions.length}
              </div>
            </div >
          </div>
          <div className="col-md-3 col-sm-3"></div>
        </div>
      </div >
    </>
  )
}