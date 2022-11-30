import styled from "styled-components"

export default function TakeAGuess(props) {

    const { disableInput, guessInput, setGuessInput, guessWord } = props

    return (
        <GuessContainer>
            <p>I already know what word is it!</p>
            <input
                disabled={disableInput}
                type="text"
                value={guessInput}
                onChange={e => setGuessInput(e.target.value)}
            />
            <GuessButton onClick={guessWord} disabled={disableInput}>Take a guess!</GuessButton>
        </GuessContainer>
    )
}

const GuessContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 665px;
    margin: 56px auto;

    p, input {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    }

    input {
    width: 220px;
    height: 40px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    }

    @media (max-width: 415px) {
        width: 90%;
        flex-direction: column;
        align-items: center;

        p, input, button {
        margin-bottom: 20px;
        width: 80%;
        text-align: center;
        border-radius: 10px;
        }
    }
`

const GuessButton = styled.button`
    width: 130px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3C76A1;

    &:hover {
        cursor: pointer;
        background-color: #b3d3ea;
        color: #2c5777
    }

    &:disabled {
        background-color: #aab3b9;
        cursor: not-allowed;
    }
`