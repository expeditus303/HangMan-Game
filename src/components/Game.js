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
        <div className="gameContainer">
            <img src={images[errors]} alt="hanged" />
            <div>
                <button onClick={startGame}>Take a word!</button>
                <h1 className={wordColor}>{gameWord}</h1>
            </div>
        </div>
    )
}