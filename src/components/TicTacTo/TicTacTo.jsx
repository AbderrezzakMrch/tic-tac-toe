import React, { useRef, useState } from "react";
import './TicTacTo.css'
import circle_icon from '../Assets/circle.png'
import croos_icon from '../Assets/cross.png'


let data = ["","","","","","","","",""]


const TicTacTo = () => {



    let [count,setCount] = useState(0)
    let [lock,setLock] = useState(false) 
    let titleRef = useRef(null)
    let square1 = useRef(null)
    let square2 = useRef(null)
    let square3 = useRef(null)
    let square4 = useRef(null)
    let square5 = useRef(null)
    let square6 = useRef(null)
    let square7 = useRef(null)
    let square8 = useRef(null)
    let square9 = useRef(null)


    let square_array = [square1,square2,square3,square4,square5,square6,square7,square8,square9]


    const press_square = (e,index) => {
        if (lock){
            return 0;
        }
        // here whene count is even it means X or if it is odd mean O
        if(count%2 ===0) { 
            e.target.innerHTML = `<img src='${croos_icon}' alt='croos_icon'/>` // instert X picture to square
            data[index] = "X"; // instert X to data array
            setCount(++count) 
        }else {
            e.target.innerHTML = `<img src='${circle_icon}' alt='circle_logo'/>` // instert O picture to square
            data[index]= "O"; // instert O to data array
            setCount(++count)
        }
        checkWin();
    }

    const reset = () => {
        setLock(false)
        data = ["","","","","","","","",""]
        titleRef.current.innerHTML = 'Tic Tac To Game in <span>React</span>'
        setCount(0)
        square_array.map((square)=> {
            return square.current.innerHTML = ""
        })
    }
    const checkWin = () => {
        if(data[0]===data[1]&& data[1]===data[2] && data[2] !== '') {
            won(data[2]);
        }
        else if(data[3]===data[4]&& data[4]===data[5] && data[5] !== '') {
            won(data[5]);
        }
        else if(data[6]===data[7]&& data[7]===data[8] && data[8] !== '') {
            won(data[8]);
        }
        else if(data[0]===data[3]&& data[3]===data[6] && data[6] !== '') {
            won(data[6]);
        }
        else if(data[1]===data[4]&& data[4]===data[7] && data[7] !== '') {
            won(data[7]);
        }
        else if(data[2]===data[5]&& data[5]===data[8] && data[8] !== '') {
            won(data[8]);
        }
        else if(data[0]===data[4]&& data[4]===data[8] && data[8] !== '') {
            won(data[8]);
        }
        else if(data[2]===data[4]&& data[4]===data[6] && data[6] !== '') {
            won(data[6]);
        }
    }

    const won = (Winner) => {
        setLock(true)
        if(Winner === "X") {
            titleRef.current.innerHTML = `Congratulation: <img src='${croos_icon}'/> Wins`
        }else {
            titleRef.current.innerHTML = `Congratulation: <img src='${circle_icon}'/> Wins`
        }

    } 
    return(
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac To Game in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="square" onClick={(e) => press_square(e,0)} ref={square1}></div>
                    <div className="square" onClick={(e) => press_square(e,1)} ref={square2}></div>
                    <div className="square" onClick={(e) => press_square(e,2)} ref={square3}></div>
                </div>
                <div className="row2">
                    <div className="square" onClick={(e) => press_square(e,3)} ref={square4}></div>
                    <div className="square" onClick={(e) => press_square(e,4)} ref={square5}></div>
                    <div className="square" onClick={(e) => press_square(e,5)} ref={square6}></div>
                </div>
                <div className="row3">
                    <div className="square" onClick={(e) => press_square(e,6)} ref={square7}></div>
                    <div className="square" onClick={(e) => press_square(e,7)} ref={square8}></div>
                    <div className="square" onClick={(e) => press_square(e,8)} ref={square9}></div>
                </div>
            </div>
            <button className="reset" onClick={() => reset()}>Reset</button>
        </div>
    );
}


export default TicTacTo