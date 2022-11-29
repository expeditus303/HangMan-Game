export default function Letter(props) {

    const { letter } = props

    return (
        <button> {letter.toUpperCase()} </button>
    )
}