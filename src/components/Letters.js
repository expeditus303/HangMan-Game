import { useState } from "react"
import Letter from "./Letter"

export default function Letters(props) {

    const { classLetters, setClassLetters} = props

    const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [lettersList, setLettersList] = useState([])

    function createLetterList(newLetter) {
        let newArray = [...lettersList]
        newArray.push(newLetter)
        setLettersList(newArray)
        console.log(newArray)
    }

    return (
        <div className="lettersContainer">
            {alfabet.map((a) => (
                <Letter saveLetter={createLetterList} classLetters={classLetters} setClassLetters={setClassLetters} letter={a} key={a} />
            ))}
        </div>
    )
}