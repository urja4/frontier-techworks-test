import React, {useEffect, useState, useRef} from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import questions from '../utility/questions.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as functions from '../utility/utilityFunctions';
import Response from './Response';
import '../App.css';
import EnterButton from './EnterButton';

interface AnswerOptionProps {
    currentQuestion : number;
    setCurrentQuestion: (currentQuestion: number) => void;
    setNoOfCorrectResponses: (noOfCorrectResponses: number) => void;
    setNoOfWrongResponses: (noOfWrongResponses: number) => void;
    score: number;
    noOfQuestions: number;
    noOfCorrectResponses: number;
    noOfWrongResponses: number;
}

const AnswerOption : React.FunctionComponent<AnswerOptionProps> = (props: AnswerOptionProps) => {
    const answerType : string = questions[props.currentQuestion - 1].type;
    const [answerSelected, answerChosen] = useState(false);
    const [response, responseCaptured] = useState(false);
    const [isButtonDisabled, disableButton] = useState(false);

    
    const [options, changeOptions] = useState<string[]>([]);
    const checkAnswer: (optionChoosen: string) => void = (optionChoosen: string) => {
        console.log(options);
        if(!response) {
            disableButton(true);
            if(functions.isCorrect(optionChoosen,questions[props.currentQuestion - 1].correct_answer)) {
                console.log("answer true");
                answerChosen(true);
                props.setNoOfCorrectResponses(props.noOfCorrectResponses + 1);
            }
            else {
                console.log("answer false");
                answerChosen(false);
                props.setNoOfWrongResponses(props.noOfWrongResponses + 1);
            }
            responseCaptured(true);
        }
    }

    useEffect(() => {
        let stringOptions : string[] = Object.assign([], questions[props.currentQuestion - 1].incorrect_answers);
        stringOptions.push(questions[props.currentQuestion - 1].correct_answer);
        changeOptions(functions.shuffleArray(stringOptions));
        answerChosen(false);
        responseCaptured(false);
        disableButton(false);
    }, [props.currentQuestion]);

    switch (answerType) {
        case 'multiple' : 
            return (
                <div className = 'Multiple-choice'>
                    <div>
                        <Row className = 'Option-row'>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[0]))}>
                                    {decodeURIComponent(options[0])}
                                </Button>
                            </Col>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[1]))}>
                                    {decodeURIComponent(options[1])}
                                </Button>
                            </Col>
                        </Row>
                        <Row className = 'Option-row'>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[2]))}>
                                    {decodeURIComponent(options[2])}
                                </Button>
                            </Col>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[3]))}>
                                    {decodeURIComponent(options[3])}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className = 'Result'>
                        <div className = 'Comment-div'>
                            <Row className = 'Grade'>
                                <Response visible = {response} response = {answerSelected} />
                            </Row>
                        </div>
                        <div className = 'Button-div'>
                            <Row className = 'Enter-button'>
                                <EnterButton visible = {response} currentQuestion = {props.currentQuestion} setCurrentQuestion =  {props.setCurrentQuestion}  setNoOfCorrectResponses = {props.setNoOfCorrectResponses} 
                                    score = {props.score} noOfQuestions = {props.noOfQuestions} setNoOfWrongResponses = {props.setNoOfWrongResponses} noOfWrongResponses = {props.noOfWrongResponses} />
                            </Row>
                        </div>
                    </div>
                </div>
            )
        break;
        case 'boolean' :
            return (
                <div className = 'Multiple-choice'>
                    <div>
                        <Row className = 'Option-row'>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[0]))}>
                                    {decodeURIComponent(options[0])}
                                </Button>
                            </Col>
                            <Col className = 'Options'>
                                <Button className = 'OptionButton' variant="primary" size="lg" active = {!isButtonDisabled} disabled = {isButtonDisabled} onClick = {checkAnswer.bind(this,decodeURIComponent(options[1]))}>
                                    {decodeURIComponent(options[1])}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className = 'Result'>
                        <div className = 'Comment-div'>
                            <Row className = 'Grade'>
                                <Response visible = {response} response = {answerSelected} />
                            </Row>
                        </div>
                        <div className = 'Button-div'>
                            <Row className = 'Enter-button'>
                                <EnterButton visible = {response} currentQuestion = {props.currentQuestion} setCurrentQuestion =  {props.setCurrentQuestion}  setNoOfCorrectResponses = {props.setNoOfCorrectResponses} 
                                    score = {props.score} noOfQuestions = {props.noOfQuestions} setNoOfWrongResponses = {props.setNoOfWrongResponses} noOfWrongResponses = {props.noOfWrongResponses} />
                            </Row>
                        </div>
                    </div>
                </div>
            )
        break;
        default : 
            return (
                <div />
            )
        break;
    }
}

export default AnswerOption;
