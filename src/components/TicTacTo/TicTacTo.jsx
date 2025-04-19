import React from "react";
import './TicTacTo.css'
import circle_icon from '../Assets/circle.png'
import croos_icon from '../Assets/cross.png'


const TicTacTo = () => {

    return(
        <div className="container">
            <h1 className="title">Tic Tac To Game in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row2">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row3">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
            <button className="reset">Reset</button>
        </div>
    );
}


export default TicTacTo