
/* eslint-disable react/prop-types */
export default function Card(props)
{

    console.log("props", props)
    const imageLocation = `/public/${props.imageUrl}`
    console.log(imageLocation)
    return(
        <div className="card">
            
            <img src={`/public/${props.imageUrl}`}  alt={props.title} />
            <div className="card-details">
                <section>
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{props.location}</p>
                    </span>

                    <a href={`${props.googleMapsUrl}`}>View on google maps</a>
                </section>
                <h2>{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            
            
        </div>
    )
}