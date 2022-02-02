import React, { useEffect, useState } from "react";
import { QuizComponentWrapper } from "./quiz-component.style";
import Button from "../../../reusecore/Button";

const Instruction = ({closeInstruction}) => {
  return (
    <section className="instruction__container">
      <div className="ins__main">
        <ul className="ins__list">
          <li>The Time Limit for the quiz is 3 minutes.</li>
          <li>If you want to choose an answer, simply click on the option of your choice.</li>
          <li>The total score for the quiz is based on your responses to all questions.</li>
          <li>In case you are not satisfied with the results, you can retake the quiz until you get the best results.</li>
        </ul>
        <button className="ins__btn" onClick={closeInstruction}>Start</button>
      </div>
    </section>
  );
};

const ResultBox = ({ score, resetQuiz,correct, incorrect,total  }) => (
  <div className="resultbox__container">
    <div className="resultbox__main">
      <h1>Quiz Finished!</h1>
      <p>Your Score : <span>{score.toFixed(2)}%</span></p>
      <p>Correct Answers : <span>{correct}</span></p>
      <p>Incorrect Answers : <span>{incorrect}</span></p>
      <p>Total Question : <span>{total}</span></p>
      <div onClick={resetQuiz}>
        <Button secondary title="Go to Learning Paths"
          url={"/learn/learning-paths"}
          external={false} />
      </div>
    </div>
  </div>
);

const ListItem = (props) => {
  const onClickAnswer = () => {
    props.answerCallback(props.index);
  };
  return (
    <li
      onClick={(event) => {
        const e = event.target;
        e.style.backgroundColor = "#00b39f";
        e.style.color = "white";
        setTimeout(() => {
          e.style.backgroundColor = "transparent";
          e.style.color = "#222";
          onClickAnswer();
        }, 300);
      }}
    >
      {props.answerItem}
    </li>
  );
    
};
  
const QuestionBox = (props) => {
  return (
    <div className="quizbox__container">
      <div className="quizbox__head--container"> 
        <h2 className="quizbox__head">{props.title}</h2>
        {/* <Timer time={props.time} /> */}
      </div>
      <div className="quizbox__main">
        <h4>
          {props.questionIndex}. {props.questionDatum.prompt}
        </h4>
        <ul>
          {props.answers.map(function (answer, index) {
            return (
              <ListItem
                answerItem={answer}
                answerCallback={props.answerCallback}
                index={index}
              />
            );
          }, this)}
        </ul>
        <div className="quizbox__progress">
          <div>
            <h4>Attempted</h4>
            <p className="quizbox__progress--score">{props.attempted}</p>
          </div>
          <div>
            <h4>Not Attempted</h4>
            <p className="quizbox__progress--score">{props.notattempted}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizComponent = () => {
  const [questionData, setQuestionData] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const [score, setScore] =  useState(0);
  const [time, setTime] = useState(Date.now() + 180000);
  const [showInstruction, setShowInstruction] = useState(true);

  const finishTimer = () => {
    setTimeout(() => {
      setProgress(5);
    }, 180000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let fetchedQuestion = [
      { prompt: "Question 1", answers: ["Answer 1","Answer 2","Answer 3","Answer 4"], correct: 1},
      { prompt: "Question 2", answers: ["Answer 1","Answer 2","Answer 3","Answer 4"], correct: 1},
      { prompt: "Question 3", answers: ["Answer 1","Answer 2","Answer 3","Answer 4"], correct: 1},
      { prompt: "Question 4", answers: ["Answer 1","Answer 2","Answer 3","Answer 4"], correct: 1},
    ];

    // Will be fetching the title from backend
    setQuizTitle("Test Quiz")

    // Will be fetching these questions from backend
    setQuestionData(fetchedQuestion);
  };

  const checkAnswer = (index) => {
    if(!questionData[progress]){
      return;
    }
    let correct = questionData[progress].correct;
    let newScore = 0,
        newProgress = 0;
    if (correct === index) {
      newScore = score + 1;
      setScore(newScore);
      newProgress = progress + 1;
      setProgress(newProgress);
    } else {
      newProgress = progress + 1;
      setProgress(newProgress);
    }
  };

  const resetQuiz = () => {
    setScore(0); 
    setProgress(0); 
    setTime(Date.now() + 180000);
    finishTimer();
  };

  let questionDatum = questionData[progress];

  if (showInstruction){
    return (
      <QuizComponentWrapper>
        <Instruction closeInstruction={() => {
          setShowInstruction(false);
          setTime(Date.now() + 180000);
          finishTimer();
        }} 
        />
      </QuizComponentWrapper>
    );
  }

  if (questionData.length > progress) {
    return (
      <QuizComponentWrapper>
        <QuestionBox
          title={quizTitle}
          questionIndex={progress + 1}
          answers={questionDatum.answers}
          answerCallback={checkAnswer}
          questionDatum={questionDatum}
          time={time}
          attempted={progress}
          notattempted={questionData.length-progress}
        />
      </QuizComponentWrapper>
    );
  } else {
    return (
      <QuizComponentWrapper>
        <ResultBox
          resetQuiz={resetQuiz}
          correct={score}
          incorrect={questionData.length - score}
          total={questionData.length}
          score={(score / questionData.length) * 100}
        />
      </QuizComponentWrapper>
    );
  }
};


export default QuizComponent;