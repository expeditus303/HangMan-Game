import { useState } from "react"

export default function Letter(props) {

    const {letter, classLetters, saveLetter} = props

    const [clickedLetter, setClickedLetter] = useState(false)

    function clickLetter(){
        setClickedLetter(true)
        saveLetter(letter)
    }

    

    return (
            <button disabled={classLetters ? "" : "disable"} onClick={clickLetter} className={`${clickedLetter ? "disable" : "" } ${classLetters ? "" : "disable"}`}> {letter.toUpperCase()} </button>
    )
}