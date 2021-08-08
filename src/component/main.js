import React from 'react'
import PokedexComponent from './pokedex'
import AddBarComponent from './addBar'

const Main = () => {
  return (
    <div className="app-container">
      <PokedexComponent />
      <AddBarComponent />
    </div>
  )
}

export default Main
