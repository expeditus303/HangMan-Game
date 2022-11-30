import styled from "styled-components"
import alfabet from "../alfabet"

export default function Letters(props) {

    const { usedLetters, clickLetter } = props

    return (
        <LettersContainer>
            {alfabet.map((a) => (
                <button
                    key={a}
                    disabled={usedLetters.includes(a)}
                    onClick={() => clickLetter(a)}
                    onKeyDown
                >
                    {a.toUpperCase()}
                </button>
            ))}
        </LettersContainer>
    )
}

const LettersContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 70px auto 0px;
    flex-wrap: wrap;
    width: 665px; 

    button {
    width: 40px;
    height: 40px;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    margin: 11px 11px 0px 0px;
    }

    button:disabled {
        background-color: #9FAAB5;
        cursor: not-allowed;
    }

    button:disabled:hover {
        cursor: not-allowed;
    }

    button:nth-child(13n+13) {
    margin-right: 0px;
    }

    button:hover {
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }

    @media (max-width: 415px) {
        width: 90%;
        margin-top: 0px;
    }
`