export default function Joke(props) {
    return(
        <div>
            {/* Conditional Rendering: renders element only if prop attribute exists or was provided */}
            { props.setup && <h3>Q: { props.setup }</h3> }
            <h4>A: { props.punchline }</h4>
            <br />
        </div>
    )
} 