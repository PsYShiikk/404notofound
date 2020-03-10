import React, {useEffect, useState} from "react";
import Answer from "./Answer";
import Question from "./Questions";
import axios from "axios";
import QuestionVideo from "./QuestionsVideo";



function Quizz(props) {

    let id = props.match.params.id;
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);



    async function getQuestion(){
        const data = (await axios.get('http://localhost:8000/quizz/' + id )).data;
        setQuestions(data);
    }
    useEffect(() => {
        getQuestion();
    }, []);



    let jsxQuestions = questions.map(p => {
            if (p.video_url != "") {
                return <Question question={p.sentence}/>
            } else {
                return <QuestionVideo url={p.video_url}/>

            }
        });





    return (
        <div>
            quizz n° {id}


                {jsxQuestions}


        </div>
    );

}

export default Quizz;