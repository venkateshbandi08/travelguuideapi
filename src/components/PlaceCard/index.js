import './index.css'

const PlaceCard = props => {
  const {placeDetails} = props
  const {description, imageUrl, name} = placeDetails
  return (
    <li className="each-card-container">
      <img src={imageUrl} className="place-image" alt={name} />
      <div className="content-container">
        <h2 className="place-heading"> {name} </h2>
        <p className="place-description">{description}</p>
      </div>
    </li>
  )
}

export default PlaceCard
