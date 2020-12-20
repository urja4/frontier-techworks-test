import React from 'react';

export function shuffleArray(array: string[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

export function printProgress(currentQuestion: number, noOfQuestions: number) {
    return (currentQuestion/noOfQuestions) * 100;
}

export function printScore(noOfCorrectResponses: number, noOfWrongResponses: number) {
    let score = 0;
    if(noOfCorrectResponses | noOfWrongResponses) {
        score = (noOfCorrectResponses/(noOfCorrectResponses + noOfWrongResponses)) * 100;
    }
    return score;
}

export function printMaxScore(noOfWrongResponses: number, noOfQuestions: number) {
    return ((noOfQuestions - noOfWrongResponses)/noOfQuestions) * 100;
}

export function printMinScore(noOfCorrectResponses: number, noOfQuestions: number) {
    return (noOfCorrectResponses/noOfQuestions) * 100;
}

export function isCorrect(correctAnswer: string, optionChosen: string) {
    console.log('type',typeof(correctAnswer));
    if((typeof(correctAnswer)) == 'string') {
        console.log(correctAnswer," ",decodeURIComponent(optionChosen)," ",(correctAnswer===decodeURIComponent(optionChosen)));
        if(correctAnswer === decodeURIComponent(optionChosen)) {
            return true;
        }
        else {
            return false;
        }
    }
}