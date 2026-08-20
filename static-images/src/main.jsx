import { createRoot } from 'react-dom/client'
import './App.css'

function Header() {
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

function MainContent() {
    return (
        <main>
            <h1>it's me</h1>
            <ol>
                <li>e</li>
                <li>a</li>
                <li>sports</li>
                <li>it's in the game</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>© 2026 Gennseng. All rights reserved.</footer>
    )
}

function Page() {
    return(
        // empty angle bracket: a shorthand notation for Fragment
        // Replacement for <div> to make DOM cleaner
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

createRoot(document.querySelector('#root')).render(
    <main>
        <Page />
    </main>
    
)
