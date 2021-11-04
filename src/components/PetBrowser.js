import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets
    return (
      <div className="ui cards">
      {pets.map(pet => 
        <div key={pet.id}>
          <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>
        </div>
      )}
      </div>
    )
  }
}

export default PetBrowser
