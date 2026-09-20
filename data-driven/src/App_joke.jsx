import Joke from '/src/components/jokes/Joke.jsx'

export default function AppJoke() {
    return(
        <>
            <Joke 
                setup="What's the perfect time to go to the dentist?"
                punchline="Tooth-hurty!"
                upvotes={100}
            />
            {/* non-string variables can be passed as JS values */}
            <Joke 
                setup="What do you call a car that's not moving?"
                punchline="Parked."
            />
            <Joke 
                setup="How do you keep someone in suspense?"
                punchline="..."
            />
            <Joke 
                setup="What do you call 2 crows on top of a branch?"
                punchline="Attempted murder."
            />
            <Joke 
                punchline="Technically, alcohol is a solution."             
            />
        </>
    )
}