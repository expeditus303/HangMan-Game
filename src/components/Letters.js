import { useState } from "react"
import Letter from "./Letter"

export default function Letters(props) {

    const { classLetters, setClassLetters, saveLetter, render} = props

    const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return (
        <div className="lettersContainer">
            {alfabet.map((a) => (
                <Letter saveLetter={saveLetter} classLetters={classLetters} letter={a} key={a} render={render}/>
            ))}
        </div>
    )
}