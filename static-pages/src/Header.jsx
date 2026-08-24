export default function Header() {
    return (
        <header className="header">
            <img src="/src/assets/dog.jpg" alt="it's a dog" className="dog" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}