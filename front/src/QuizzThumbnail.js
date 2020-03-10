import {HTTP_SERVER_PORT_PICTURES} from "./constants";
import React from "react";

function QuizzThumbnail(props) {

    return (

        <div className="quizz_card">
            <a className="lien_quizz" href={'quizz/'+ props.id}>
                <img className="image_quizz" src={HTTP_SERVER_PORT_PICTURES + props.icon} alt="icon"/>
                <span className="titre_quizz">{props.name}</span>
            </a>
        </div>

    );
}

export default QuizzThumbnail;