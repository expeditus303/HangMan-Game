import styled from "styled-components"
import hanged0 from "../assets/forca0.png"
import hanged1 from "../assets/forca1.png"
import hanged2 from "../assets/forca2.png"
import hanged3 from "../assets/forca3.png"
import hanged4 from "../assets/forca4.png"
import hanged5 from "../assets/forca5.png"
import hanged6 from "../assets/forca6.png"


export default function Game(props) {

    const { startGame, errors, gameWord, wordColor } = props
    const images = [hanged0, hanged1, hanged2, hanged3, hanged4, hanged5, hanged6]

    return (
        <GameContainer>
            <img src={images[errors]} alt="hanged" />
            <div>
                <button onClick={startGame}>Take a word!</button>
                <Word wordColor={wordColor}>{gameWord}</Word>
            </div>
        </GameContainer>
    )
}

const GameContainer = styled.div`
    display: flex;
    margin-top: 59px;
    justify-content: space-between;
    padding: 0 55px;

    img {
    width: 400px;
    }

    div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin: 30px 0px;
    }

    button {
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    border: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: white;
    }

    button:hover{
        cursor: pointer;
        background-color: #1b7842;;
    }

    @media (max-width: 415px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;

        div {
        flex-direction: column-reverse;
        align-items: center;
        }

        img {
        width: 70%;
        }
    }
`

const Word = styled.h1`
    font-size: 50px;
    color: ${(props) => {
        if (props.wordColor === "red") {
            return "red"
        } else if (props.wordColor === "green") {
            return "green"
        } else {
            return "black"
        }
    }};

    @media (max-width: 415px) {
        margin-bottom: 30px;
        font-size: 40px;
    }
`
