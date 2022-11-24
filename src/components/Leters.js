export default function Letters() {

    const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="lettersContainer">
            {alfabet.map((a) => (
                <button className="disable">{a.toUpperCase()}</button>
            ))}
        </div>
    )
}