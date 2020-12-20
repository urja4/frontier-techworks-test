import React, { useState } from 'react';
import './App.css';
import questions from './utility/questions.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerOption from './components/AnswerOption';
import * as functions from './utility/utilityFunctions';
import Difficulty from './components/Difficulty';

interface AppProps {
  noOfQuestions : number
}

const App : React.FunctionComponent<AppProps> = (props: AppProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [noOfCorrectResponses, setNoOfCorrectResponses] = useState(0);
  const [noOfWrongResponses, setNoOfWrongResponses] = useState(0);

  return (
    <div className = 'App'>
      <div className = 'Progress-bar' style = {{width: functions.printProgress(currentQuestion,props.noOfQuestions) + '%' }} />
      <div className = 'Quiz'>
        <div className = 'Header'>
          <div className = 'Number'>
            Question {currentQuestion} of {props.noOfQuestions}
          </div>
          <div className = 'Category'>
            {decodeURIComponent(questions[currentQuestion - 1].category)}
          </div>
          <div className = 'Difficulty'>
            <Difficulty currentQuestion = {currentQuestion} />
          </div>
        </div>
        <div className = 'Question'>
          {decodeURIComponent(questions[currentQuestion - 1].question)}
        </div>
        <div className = 'Response'>
          <AnswerOption currentQuestion = {currentQuestion} setCurrentQuestion = {setCurrentQuestion} setNoOfCorrectResponses = {setNoOfCorrectResponses} score = {functions.printScore(noOfCorrectResponses,noOfWrongResponses)} noOfQuestions = {props.noOfQuestions} noOfCorrectResponses = {noOfCorrectResponses} noOfWrongResponses = {noOfWrongResponses} setNoOfWrongResponses = {setNoOfWrongResponses} />
        </div>
      </div>
      <div className = 'Score-bar'>
        <div className = 'Score'>
          Score: {functions.printScore(noOfCorrectResponses,noOfWrongResponses)}%
        </div>
        <div className = 'Max-score'>
          Max Score: {functions.printMaxScore(noOfWrongResponses,props.noOfQuestions)}%
        </div>
        <div className = 'Bar'>
          <div className = 'Progress' style = {{backgroundColor: 'red', width: functions.printMinScore(noOfCorrectResponses,props.noOfQuestions) + '%',
            zIndex: (functions.printMinScore(noOfCorrectResponses,props.noOfQuestions) == functions.printScore(noOfCorrectResponses,noOfWrongResponses)) ? 3:5 }} />
          <div className = 'Progress' style = {{backgroundColor: 'green', width: functions.printScore(noOfCorrectResponses,noOfWrongResponses) + '%', zIndex: 4 }} />
          <div className = 'Progress' style = {{backgroundColor: 'blue', width: functions.printMaxScore(noOfWrongResponses,props.noOfQuestions) + '%', zIndex: 2 }} />
          <div className = 'Progress' style = {{backgroundColor: 'white', width: 100 + '%', zIndex: 1 }} />
        </div>
      </div>
    </div>
  )
}

export default App;
