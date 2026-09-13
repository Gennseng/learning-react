export default function Contact(props) {
    // console logging props will return all Contact objects
    return(
        <article className="contact-card">
            <img 
                src={ props.img }
                alt="Photo of { props.name }"
            />
            <h3>{ props.name }</h3>
            <div className="info-group">
                <img 
                    src="src/images/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{ props.number }</p>
            </div>
            <div className="info-group">
                <img 
                    src="src/images/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{ props.email }</p>
            </div>
        </article>
    )
    
}

/*
1. What do props help us accomplish?
A: reusability across components with different values

2. How do you pass a prop into a component?
A: write it like a regular HTML attribute


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

A: no, as this syntax is only available for JSX
   


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

A: place 'props' as an attribute of the component, then you are free to use the props object as you wish

    ex. 
    function Navbar(props) {
        return (
            <header>
                <h1>Hi { props.name }!</h1>
            </header>
        )
    }

5. What data type is `props` when the component receives it?
A: an object

*/