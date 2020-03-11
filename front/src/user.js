import React from "react";

function Score() {
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
                <div>Local Player</div>
                <div>125 pts</div>
                <div>41</div>
            </div>
        </div>
    );
}

export default Score;