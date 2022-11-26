import palavras from "../palavras"
export default function Game(props) {

    const {onClick, classLetters} = props

    const word = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(word)

    const hide = '_ '.repeat(word.length)

    return (
        <div className="gameContainer">
            <img src="./assets/forca0.png" alt="" />
            <div>
                <button onClick={onClick} >Take a word!</button>
                <h1>{classLetters ? hide : ""}</h1>
            </div>
        </div>
    )
}