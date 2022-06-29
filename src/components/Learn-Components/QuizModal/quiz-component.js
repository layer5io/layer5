import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { QuizComponentWrapper } from "./quiz-component.style";
import Button from "../../../reusecore/Button";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";


const Instruction = ({ closeInstruction }) => {
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
      className={`${props.pquestionToAns?.aIndex===props.index ? "ans":"no-ans"}`}
      onClick={(event) => {
        const e = event.target;
        setTimeout(() => {
          onClickAnswer();
        }, 300);
        props.attemptQuestion(props.index);
      }}
    >
      {props.answerItem}
    </li>
  );

};



const Timer = (props) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return <h3 className="timer__text">{minutes}:{seconds}</h3>;
  };

  return (
    <Countdown
      date={props.time}
      renderer={renderer}
    />
  );
};

const QuestionBox = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);


  return (
    <div className="quizbox__container">
      <div className="quizbox__head--container">
        <h2 className="quizbox__head">{props.title}</h2>
        <Timer time={props.time} />
      </div>
      <div className="quizbox__main">
        <h4>
          {props.questionIndex}. {props.questionDatum.prompt}
        </h4>
        <ul>
          {props.answers.map(function (answer, index) {
            return (
              <ListItem
                isSelected={selectedAnswer === index}
                onClick={() => setSelectedAnswer(index)}
                answerItem={answer}
                answerCallback={props.answerCallback}
                index={index}
                attemptQuestion={props.attemptQuestion}
                key={index}
                pquestionToAns={props.pquestionToAns}
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
        <div className="quizbox__control">
          <div>
            <div className="quizbox__progress--score quizbox__progress--control" onClick={() => {
              props.prevQuestion();
              setSelectedAnswer(null);
            }}>
              <BsArrowLeft className="quizbox__progress-control__icon"/>
              <label>Previous</label>
            </div>
          </div>
          <div>
            <div className="quizbox__progress--score quizbox__progress--control" onClick={() => {
              props.nextQuestion();
              setSelectedAnswer(null);
            }}>
              <label>{props.answers.length === props.questionIndex ? "Finish":"Next"} </label>
              <BsArrowRight className="quizbox__progress-control__icon"/>
            </div>
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
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] =  useState(0);
  const [time, setTime] = useState(Date.now() + 180000);
  const [showInstruction, setShowInstruction] = useState(true);
  const [questionToAns,setQuestionToAns]=useState([]);

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
      { prompt : "Question 1", answers : ["Answer 1","Answer 2","Answer 3","Answer 4"], correct : 1 },
      { prompt : "Question 2", answers : ["Answer 1","Answer 2","Answer 3","Answer 4"], correct : 1 },
      { prompt : "Question 3", answers : ["Answer 1","Answer 2","Answer 3","Answer 4"], correct : 1 },
      { prompt : "Question 4", answers : ["Answer 1","Answer 2","Answer 3","Answer 4"], correct : 1 },
    ];

    // Will be fetching the title from backend
    setQuizTitle("Test Quiz");

    // Will be fetching these questions from backend
    setQuestionData(fetchedQuestion);
  };

  const checkAnswer = (index) => {
    if (!questionData[progress]){
      return;
    }
    let correct = questionData[progress].correct;
    let newScore = 0;
    // let  newProgress = 0;
    if (correct === index) {
      newScore = score + 1;
      setScore(newScore);
      // newProgress = progress + 1;
      // setProgress(newProgress);

    } else {
      // newProgress = progress + 1;
      // setProgress(newProgress);

    }
  };

  const resetQuiz = () => {
    setScore(0);
    setProgress(0);
    setTime(Date.now() + 180000);
    finishTimer();
  };

  const prevQuestionHandler = () => {
    let current = progress;
    let newCurrent = progress - 1;
    if (0 <= newCurrent) {
      setProgress(newCurrent);
    }
    let newScore = score-1;
    if (0 <= newScore) {
      setScore(newScore);
    }
  };

  const nextQuestionHandler = () => {
    let current = progress;
    let newCurrent = progress + 1;
    if (newCurrent < questionData.length) {
      setProgress(newCurrent);
    } else {
      setProgress(current + 1);
    }
  };

  let questionDatum = questionData[progress];
  let pquestionToAns=questionToAns.find(item => item.qIndex==progress);

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

  const attemptQuestionHandler = (aIndex) => {
    let qIndex=progress;
    let attemptedQuestionToAns={
      qIndex : qIndex,
      aIndex : aIndex
    };
    // finding if the question is already attempted or not
    let existQuestionIndex=questionToAns.findIndex(item => item.qIndex===qIndex);

    // If it is already exsist replace the old ans with new ans
    if (existQuestionIndex>=0){
      let updatedQuestionToAns=[...questionToAns];
      updatedQuestionToAns[existQuestionIndex]=attemptedQuestionToAns;
      setQuestionToAns(updatedQuestionToAns);

    } else {
      let updatedQuestionToAns=[...questionToAns];
      updatedQuestionToAns.push(attemptedQuestionToAns);

      setQuestionToAns(updatedQuestionToAns);
      // If only new question is attempted then need to update the attempted question state otherwise not
      let newAttempt = attempt+1;
      setAttempt(newAttempt);
    }

  };

  if (questionData.length > progress) {
    return (
      <QuizComponentWrapper>
        <QuestionBox
          title={quizTitle}
          questionIndex={progress + 1}
          answers={questionDatum.answers}
          answerCallback={checkAnswer}
          questionDatum={questionDatum}
          pquestionToAns={pquestionToAns?pquestionToAns:null}
          time={time}
          attempted={attempt}
          notattempted={questionData.length-attempt}
          attemptQuestion={attemptQuestionHandler}
          prevQuestion={prevQuestionHandler}
          nextQuestion={nextQuestionHandler}
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