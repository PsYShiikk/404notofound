import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Quizz from "./QuizzUnique";
import Login, {ProtectedRoute} from "./Login";
import Register from "./Register";
import Score from "./Score";
import userProfile from "./userProfile";
import User from "./user";
import Add from "./add";



function App()  {



  return (
      <BrowserRouter>

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/quizz/:id" component={Quizz} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/score" component={Score} />
            <Route exact={true} path="/user" component={User} />
            <Route exact={true} path="/add" component={Add} />
            <ProtectedRoute exact={true} path="/userprofile" component={userProfile} />



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
