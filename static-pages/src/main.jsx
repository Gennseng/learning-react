import { createRoot } from 'react-dom/client'
import './App.css'
import Header from '/src/Header.jsx'
import MainContent from '/src/MainContent.jsx'
import Footer from '/src/Footer.jsx'

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
