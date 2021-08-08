import React from 'react'
import { removePokemon } from '../store/cards/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/pokedex.css'
import CardComponent from './card'

const PokedexComponent = (props) => {
  const { removePokemon } = props
  const { pokedex } = props.data

  const removePokemonFromDex = (info) => {
    let removeDex = pokedex.filter(
      (pokemon) => pokemon.id !== info.id,
    )
    removePokemon(removeDex)
  }
  const renderCard = () => {
    return pokedex.map((dex, index) => (
      <CardComponent
        key={`pokedex_card_${dex.id}_${index}`}
        isFullWidth={false}
        clickSign="x"
        cardInfo={dex}
        onClickEvent={(info) => removePokemonFromDex(info)}
      />
    ))
  }

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

const mapDispatchToProps = { removePokemon }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PokedexComponent)
