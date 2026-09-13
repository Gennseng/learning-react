import Header from '/src/components/Header.jsx'
import Entry from '/src/components/Entry.jsx'
import Contact from '/src/components/cat_contacts/Contact.jsx'

export default function App () {
    return (
        <>
            {/* 
                arbitrary attributes can be created to react components to pass in specific data 
                this allows for more reusability
            */}
            <Contact 
                img="src/images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                number="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="src/images/fluffykins.png"
                name="Fluffykins"
                number="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="src/images/felix.png"
                name="Felix"
                number="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="src/images/pumpkin.png"
                name="Pumpkin"
                number="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </>
    )
}