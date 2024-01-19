import Loader from 'react-loader-spinner'
import {Component} from 'react'
import PlaceCard from '../PlaceCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {
    placesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPlacesData()
  }

  getPlacesData = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/tg/packages')
      const data = await response.json()

      const formattedData = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))

      this.setState({
        placesList: formattedData,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  render() {
    const {placesList, isLoading} = this.state
    console.log(placesList)
    return (
      <div className="bg-container">
        <div className="main-heading-container">
          <h1 className="main-heading"> Travel Guide </h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="places-cards-container">
            {placesList.map(eachItem => (
              <PlaceCard placeDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
