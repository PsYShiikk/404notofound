import React from "react";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";

export default function AffichageDebutQuizz(props) {
    return(
        <div>
          <div className="headerPageDeLancement">

              <img src={HTTP_SERVER_PORT_PICTURES + props.url} alt={props.name} className="imagePageDeLancement"/>
              <div className="overlayLancementQuizz"></div>
              <h2>{props.name}</h2>
          </div>
            <a href={"/quizz/play/"+props.id} className="btnLancementQuizz">Lancer le quizz</a>
        </div>
    );
}