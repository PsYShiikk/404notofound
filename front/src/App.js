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
                <div className="quizz_card">
                    <a className="lien_quizz" href={'quizz/'+ props.id}>
                        <img className="image_quizz" src={HTTP_SERVER_PORT_PICTURES + props.icon} alt="icon"/>
                        <span className="titre_quizz">{props.name}</span>
                    </a>
                </div>

            );
        }
        return (
            <div id="container">
                <div id="logo"></div>
                <div id="filters"><div id="btn_filters"></div></div>
                <div id="container_quizz">
                    <div id="first_quizz"></div>
                    {Questions.map(p =>
                        <QuizzThumbnail

                            name = {p.name}
                            icon = {p.icon}
                            id = {p.id}
                    />)}
                </div>
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
    
    function Login() {
        return (
            <div className="login_page">
                <div className="loginform">

                    <div className="txtb">
                        <textarea type="text" className="message_input" name="message" value="" required></textarea>
                        <span data-placeholder="Message"></span>
                    </div>
                    <div className="txtb">
                        <textarea type="text" className="message_input" name="message" value="" required></textarea>
                        <span data-placeholder="Message"></span>
                    </div>

                </div>
            </div>
        );
    }
    
    function Quizz(props) {
        let id = props.match.params.id;
        let jsxQuestions = Questions
                                .filter(p => p.id == id ? true : false)
                                .map(p => p.questions.map(p =>
                                        <Question question = {p.question}/>));
        let jsxAnswers =  Questions
                                .filter(p => p.id == id ? true : false)
                                .map(p => p.questions.map(p =>
        //if(p.txtAnswers.length != 0){

                                        p.txtAnswers.map(a =>
                                            <Answer answer = {a} question = {p.question}/>

                                        )
                                    //}
                                    /*else{
                                        p.imgAnswers.map(a =>
                                            <imgAnswer answer = {a} question = {p.question}/>

                                        );
                                    }*/
                                    ));



        return (
            <div>
                quizz n° {id}

                <p>
                    {jsxQuestions}
                    {jsxAnswers}
                </p>
            </div>
        );
        function Answer(props){
            return (
                <div>
                    <input type="radio" name={props.question} value={props.answer}/><span>{props.answer}</span>
                </div>
            );
        }
       
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

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/quizz/:id" component={Quizz} />
            <Route exact={true} path="/login" component={Login} />



            <Route path="*" component={() => <p>Page Not Found</p>} />

          </Switch>

            <div className="MenuNavigation">
                <div className="btn_menu_div">
                    <a href="/score" className="btn_menu"><div id="btn_score"></div></a>
                    <a href="/" className="btn_menu active"><div id="btn_home"></div></a>
                    <a href="/user" className="btn_menu"><div id="btn_profil"></div></a>
                </div>
            </div>

      </BrowserRouter>
  );
}


export default App;
