import React from "react";
import {useCookies, withCookies} from 'react-cookie';


function User() {
        const [cookies, removeCookie] = useCookies(['login']);
        const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";

    function disconnect() {
        removeCookie('login');
    }

    if (cookies.login && cookies.login.username) {

        return (

            <div id="container">
                <div id="logo"></div>
                <form id="profil">
                    <span id="titre_profil">MY PROFIL</span>
                    <div className="component_profil">
                        <span className="tittle_component">Username</span>
                        <input className="champ_profil" type="text" />
                    </div>
                    <div className="component_profil">
                        <span className="tittle_component">Password</span>
                        <input className="champ_profil" type="password"/>
                    </div>
                    <div className="component_profil"><input type="submit" value="CHANGE" className="btn_change" id="change"/></div>
                </form>
                <div id="profil " id="myquizz">
                    <span id="titre_profil">MY QUIZZ</span>
                    <div id="addquiz"><a id="btnquizz" href="addquizz"></a></div>

                </div>

            </div>
        );

    }
    else {
        return (
            <div id="container">
                <div id="logo_notlogged"></div>
                <div id="buttons_list">
                    <div><a href="login">Login</a></div>
                    <div><a href="register">Register</a></div>
                </div>
            </div>
        );
    }
}

export default User;