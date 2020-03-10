import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './examples.js';
import {quizzes} from "./examples";

import {HTTP_SERVER_PORT_PICTURES} from "./constants";


function App()  {
    const [Questions, setQuestions] = useState(quizzes);
    function Home() {


        function QuizzThumbnail(props) {

            return (

                <a href={'quizz/'+ props.id} ><div className="quizz">

                    <img src={HTTP_SERVER_PORT_PICTURES + props.icon} alt="icon"/>



                    <span>{props.name}</span>


                </div>
                    </a>

            );
        }
        return (
            <div>

                <p>{Questions.map(p =>

                        <QuizzThumbnail

                            name = {p.name}
                            icon = {p.icon}
                            id = {p.id}

                        />)}
                </p>
            </div>

        );


    }

    function About() {
        return (

            <div>
                about
            </div>
        );
    }
    
    function Quizz(props) {
        let id = props.match.params.id;

        let jsxQuestions = Questions
                                .filter(p => p.id == id ? true : false)
                                .map(p => p.questions.map(p =>
                                        <Question

                                        question = {p.question}


                                        />));
        return (
            <div>
                quizz n° {id}

                <p>
                    {jsxQuestions}
                </p>
            </div>
        );

        function Question(props){
            return (
                <div>
                    <p> Question : {props.question}</p>

                </div>
            );
        }
    }





  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/quizz/:id" component={Quizz} />



            <Route path="*" component={() => <p>Page Not Found</p>} />

          </Switch>
        </div>
      </BrowserRouter>
  );
}


export default App;
