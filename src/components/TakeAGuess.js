export default function TakeAGuess(props) {

    const { disableInput, guessInput, setGuessInput, guessWord } = props

    return (
        <div className="guessContainer">
            <p>I already know what word is it!</p>
            <input
                disabled={disableInput}
                type="text"
                value={guessInput}
                onChange={e => setGuessInput(e.target.value)}
            />
            <button onClick={guessWord}>Take a guess!</button>
        </div>
    )
}