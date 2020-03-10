import React from "react";

function Answer(props){
    return (
        <div>
            <input type="radio" name={props.question} value={props.answer}/><span>{props.answer}</span>
        </div>
    );
}

export default Answer;