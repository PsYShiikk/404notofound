import React, {useEffect, useState} from "react";
import {useCookies, withCookies} from 'react-cookie';
import axios from "axios";

function Score() {
    const [cookies, removeCookie] = useCookies(['login']);
    const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";
    let test = cookies.login.username;

    const [user, setUser] = useState([]);



    async function getUser(){
        const data = (await axios.get('http://localhost:8000/user/' + test )).data;
        setUser(data);
    }
    useEffect(() => {
        getUser();
    }, []);

    if (user.length==0){
        console.log("ça charge")
    }
    else {
        console.log(user)
    }

    if(user.length == 0 )
        return (<div>Chargement</div>);



    return (
        <div id="container">
            <div id="logo"></div>
            <div id="score_list">
                <div className="score_item">
                    <div className="score_item_pseudo">Player 1</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">1</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 2</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">2</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 3</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">3</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 4</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">4</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 5</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">5</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 6</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">6</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 7</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">7</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 8</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">8</div>
                </div>
                <div className="score_item">
                    <div className="score_item_pseudo">Player 9</div>
                    <div className="score_item_points">125 <span>pts</span></div>
                    <div className="score_item_num">9</div>
                </div>
            </div>
            <div id="score_local">
                <div>{user[0].username}</div>
                <div>{user[0].score}</div>
                <div>{user[0].id}</div>
            </div>
        </div>
    );
}

export default Score;