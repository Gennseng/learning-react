export default function Entry(props) {
    return (
        <section className="entry">
            {/* To style an image in a different orientation (i.e. turn portrait to landscape and vice versa) without messing up the scaling, */}
            {/* Make an outside container and style that with the appropriate dimensions. */}
            <div className="entry-img-container">
                <img className="entry-img" src={ props.img.src } alt={ props.img.alt }/>
            </div>
            <div className="entry-content">
                <div className="entry-content-header">
                    <img className="marker-icon" src="/src/assets/marker.png" />
                    <span className="entry-name">{ props.country }</span>
                    <a className="entry-link" href={ props.googleMapsLink }>View on Google Maps</a>
                </div>
                <h2 className="entry-title"> { props.title } </h2>
                <p className="entry-date">{ props.dates }</p>
                <p className="entry-text">{ props.text }</p>

            </div>
            
            
        </section>
    )
}