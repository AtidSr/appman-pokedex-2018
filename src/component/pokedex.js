import React, { useEffect } from 'react'
import { addPokemon } from '../store/pokedex/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/pokedex.css'
import CardComponent from './card'

const PokedexComponent = (props) => {
  const { pokedex } = props
  return (
    <div className="pokedex-container">
      <h1 className="pokedex-header">My pokedex</h1>
      <div className="pokedex-list-container">
        {/* <CardComponent
          isFullWidth={false}
          clickSign="x"
          cardInfo={Mock}
        /> */}
      </div>
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  data: (state) => state.pokedexState,
})

const mapDispatchToProps = { addPokemon }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PokedexComponent)
