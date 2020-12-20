import React from 'react';
import questions from '../utility/questions.json';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DifficultyProps {
    currentQuestion: number;
  }
  
const Difficulty: React.FunctionComponent<DifficultyProps> = (props: DifficultyProps) => {
    const difficulty: string = questions[props.currentQuestion - 1].difficulty;
    let rating: number = 0;
    if(difficulty == 'easy') {
      rating = 1;
    }
    else if(difficulty == 'medium') {
      rating = 2;
    }
    else if(difficulty == 'hard') {
      rating = 3;
    }
    
    const stars = [];
  
    while(rating--) {
      stars.push(<span className = 'rating'>&#9734;</span>);
    }
  
    return (
      <div>
        {stars}
      </div>
    )
}

export default Difficulty;