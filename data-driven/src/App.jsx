import Header from '/src/components/Header.jsx'
import Entry from '/src/components/Entry.jsx'
import travelData from '/src/data.js'

export default function App () {
    const travelled = travelData.map((visit) => {
        return <Entry
                key={ visit.id }
                // aside from doing visit={ visit }, we can "spread" our object
                // this creates and passes several props, with the same name as in the data
                { ...visit }
            />
    })
    return (
        <>
            <Header />
            { travelled }
        </>
    )
}