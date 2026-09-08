export default function Entry() {
    return (
        <section className="entry">
            {/* To style an image in a different orientation (i.e. turn portrait to landscape and vice versa) without messing up the scaling, */}
            {/* Make an outsid econtainer and style that with the appropriate dimensions. */}
            <div className="entry-img-container">
                <img className="entry-img" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mt. Fuji"/>
            </div>
            <div className="entry-content">
                <div className="entry-content-header">
                    <img className="marker-icon" src="/src/assets/marker.png" />
                    <span className="entry-name">Japan</span>
                    <a className="entry-link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h2 className="entry-title"> Mt. Fuji </h2>
                <p className="entry-date">July 2024</p>
                <p className="entry-text">I've seen this up close! It's big! And it's REALLY cold!!</p>

            </div>
            
            
        </section>
    )
}