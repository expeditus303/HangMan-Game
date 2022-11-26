export default function TakeAGuess(props) {

    const {classLetters} = props

    return (
        <div className="guessContainer">
            <p>I already know what word is it!</p>
            <input disabled={classLetters ? "" : "disable"} type="text" name="" id="" />
            <button disabled={classLetters ? "" : "disable"} className={classLetters ? "" : "disable"}>Take a guess!</button>
        </div>
    )
}