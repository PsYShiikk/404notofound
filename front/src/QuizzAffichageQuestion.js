import React, {useEffect, useState} from "react";
import axios from "axios";
import AffichageQuestion from "./AffichageQuestion";



export default function QuizzQuestion(props) {

    let id = props.match.params.id;

    const [question, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);

    async function getQuestions(){
        const data = (await axios.get('http://localhost:8000/quizz/jouer/' + id )).data;
        setQuestions(data);

    }
    function calculeScoreEtQuestionSuivante(nb) {
        nextQuestion();
    }
    function nextQuestion(){
        setCurrent(current+1);
    }
    useEffect(() => {
        getQuestions();
    }, []);

    if(question.length == 0)
        return (
            <div>En cours de chargement</div>
        );
    if(current >= question.length)
        return (
            <div>Fin</div>
        );

    let jsxQuestions =
        <AffichageQuestion
            id = {question[current].id}
            sentence = {question[current].sentence}
            video_url = {question[current].video_url}
            calculeScoreEtQuestionSuivante = {calculeScoreEtQuestionSuivante}
            current = {current}
        />;



    return (
        <div className="coucou">
            <div id="logo"></div>
            {jsxQuestions}
        </div>
    )
}