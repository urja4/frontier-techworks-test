import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface EnterButtonProps {
    currentQuestion: number;
    setCurrentQuestion: (currentQuestion: number) => void;
    setNoOfCorrectResponses: (noOfCorrectResponses: number) => void;
    setNoOfWrongResponses: (noOfWrongResponses: number) => void;
    noOfWrongResponses: number;
    score: number;
    noOfQuestions: number;
    visible: boolean;
}

const EnterButton : React.FunctionComponent<EnterButtonProps> = (props: EnterButtonProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateQuestion = () => {
        props.setCurrentQuestion(props.currentQuestion + 1);
    }
    const handleRetakeQuiz = () => {
        props.setCurrentQuestion(1);
        props.setNoOfCorrectResponses(0);
        props.setNoOfWrongResponses(0);
        setShow(false);
    }
    if(props.visible) {
        if(props.currentQuestion == props.noOfQuestions) {
            return (
                <>
                    <Button className = 'End-button' variant="primary" onClick={handleShow}>
                        End Test
                    </Button>
                    <Modal className = 'Result-modal' show={show} onHide={handleClose}>
                        <Modal.Header className = 'Result-header' closeButton>
                            <Modal.Title className = 'Result-title'>Score</Modal.Title>
                         </Modal.Header>
                        <Modal.Body className = 'Result-body'>{props.score}</Modal.Body>
                        <Modal.Footer className = 'Result-footer'>
                            <Button className = 'Close-button' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className = 'Retake-button' variant="primary" onClick={handleRetakeQuiz}>
                                Retake
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
        }
    
        else {
            return (
                <>
                    <Button className = 'Next-button' variant="primary" onClick={updateQuestion}>
                        Next
                    </Button>
                </>
            )
        }
    }
    else {
        return (
            <> </>
        )
    }
}

export default EnterButton;