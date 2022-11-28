import { render } from "@testing-library/react"
import { useState } from "react"

export default function Letter(props) {

    const {letter, classLetters, saveLetter, render} = props

    const [clickedLetter, setClickedLetter] = useState(false)


    function clickLetter(){
        setClickedLetter(true)
        saveLetter(letter)
        render()
    }

    

    return (
            <button disabled={clickedLetter || !classLetters} onClick={clickLetter} className={`${clickedLetter ? "disable" : "" } ${classLetters ? "" : "disable"}`}> {letter.toUpperCase()} </button>
    )
}