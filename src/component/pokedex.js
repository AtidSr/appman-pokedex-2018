import React, { useEffect } from 'react'
import { addPokemon } from '../store/cards/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/pokedex.css'
import CardComponent from './card'

const PokedexComponent = (props) => {
  const { pokedex } = props.data

  const renderCard = () => {
    return pokedex.map((dex, index) => (
      <CardComponent
        key={`pokedex_card_${dex.id}_${index}`}
        isFullWidth={false}
        clickSign="x"
        cardInfo={dex}
      />
    ))
  }
  useEffect(() => {
    console.log(pokedex)
  }, [pokedex])
  return (
    <div className="pokedex-container">
      <h1 className="pokedex-header">My pokedex</h1>
      <div className="pokedex-list-container">
        {pokedex.length > 0 ? renderCard() : ''}
      </div>
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  data: (state) => state.cardsState,
})

const mapDispatchToProps = { addPokemon }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PokedexComponent)
