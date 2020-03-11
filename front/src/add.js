import React from "react";
import {useCookies, withCookies} from 'react-cookie';


function Add() {
        const [cookies, removeCookie] = useCookies(['login']);
        const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";

    function disconnect() {
        removeCookie('login');
    }

    if (cookies.login && cookies.login.username) {

        return (

            <div id="container">
                <div id="logo"></div>


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

export default Add;