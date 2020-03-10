import React, {useEffect, useState} from "react";
import QuizzThumbnail from "./QuizzThumbnail";
import axios from "axios";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";

function Home() {
    const [quizzes, setQuizzes] = useState([]);

    async function getQuizzes(){
        const data = (await axios.get('http://localhost:8000/' + 'quizz')).data;
        setQuizzes(data);
    }
    useEffect(() => {
        getQuizzes();
    }, []);

    if(quizzes.length==0)
        return (
            <div>Load data</div>
        );
    let q=quizzes[0];

    return (
        <div id="container">
            <div id="logo"></div>
            <div id="filters"><div id="btn_filters"></div></div>
            <div id="container_quizz">
                <div id="first_quizz">
                    <a className="lien_quizz" href={'quizz/'+ q.id}>
                        <img className="image_quizz" src={HTTP_SERVER_PORT_PICTURES + q.picture_url} alt="icon"/>
                        <span className="titre_quizz">{q.name}</span>
                    </a>
                </div>
                {quizzes.filter( (q,i) => i !== 0).map(p =>
                    <QuizzThumbnail

                        name = {p.name}
                        icon = {p.picture_url}
                        id = {p.id}
                    />)}
            </div>
        </div>

    );


}
export default Home;