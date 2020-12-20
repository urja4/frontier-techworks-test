import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ResponseProps {
    visible: boolean | null,
    response: boolean | null
}

const Response : React.FunctionComponent<ResponseProps> = (props: ResponseProps) => {
    const [optionSelected, changeAnswer] = useState(false);
    if(!props.visible) {
        return (
            <> </>
        )
    }
    else if(props.response) {
        return (
            <div>
                Correct!
            </div>
        )
    }
    else {
        return (
            <div>
                Sorry!
            </div>
        )
    }
}

export default Response;