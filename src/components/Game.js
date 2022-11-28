import { useEffect, useState } from "react"

export default function Game(props) {

    const { classLetters, onClick, image, hideWord, winner, Words, looser, startGame} = props

    Words()


    return (
        <div className="gameContainer">
            <img src={`./assets/forca${image}.png`} alt="" />
            <div>
                <button onClick={onClick} >Take a word!</button>
                <h1 className={`${winner ? "green" : ""} ${looser ? "red" : ""} `}>{classLetters && !looser ? hideWord : ""} {looser ? startGame : ""}</h1>
            </div>
        </div>
    )
}