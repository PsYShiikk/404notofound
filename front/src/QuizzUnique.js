import React, {useEffect, useState} from "react";
import axios from "axios";
import AffichageDebutQuizz from "./AffichageDebutQuizz";




////PAGE DE LANCEMENT DU QUIZZ
function Quizz(props) {

    let id = props.match.params.id;






        const data = (await axios.get('http://localhost:8000/quizz/' + id )).data;


    }
    useEffect(() => {

    }, []);


    let jsxQuizz = quizz.map(p => <AffichageDebutQuizz id ={p.id} url = {p.picture_url} name = {p.name}/>)


    return (
        <div className="pageDeLancement">
            <div id="logo"></div>
            {jsxQuizz}
        </div>
    );

}

export default Quizz;