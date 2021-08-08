import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/pokedex.css'
import CardComponent from './card'

const PokedexComponent = (props) => {
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
  data: (state) => state.cardState,
})

const mapDispatchToProps = {}
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PokedexComponent)
