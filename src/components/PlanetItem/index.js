// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails
  //   console.log(name)

  return (
    <div className="planet-item">
      <img className="planet-image" src={imageUrl} alt={`Planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
