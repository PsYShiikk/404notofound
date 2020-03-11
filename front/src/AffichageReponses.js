import React from "react";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";


export default function AffichageReponse(props) {
    let jsxAnswer = "erreur";
    if (props.picture_url){
        jsxAnswer = <img src={HTTP_SERVER_PORT_PICTURES + props.picture_url} alt={"Réponse Question" + props.sentence}/>

    }
    else{
        jsxAnswer =  <span className="reponseName" >{props.sentence}</span>;
    }
    return (
        <div onClick={()=>props.selectResponse(props.id)} >
            <div className={props.checked ? "overlayRep checked" : "overlayRep"}></div>
            {jsxAnswer}
        </div>
    );
}
