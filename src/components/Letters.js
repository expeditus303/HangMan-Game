import alfabet from "../alfabet"
import Letter from "./Letter"


export default function Letters(props) {

    const { usedLetters, clickLetter } = props

    return (
        <div className="lettersContainer">
            {alfabet.map((a) => (
                <button
                    key={a}
                    disabled={usedLetters.includes(a)}
                    onClick={() => clickLetter(a)}
                >
                    {a.toUpperCase()}
                </button>
            ))}
        </div>
    )
}