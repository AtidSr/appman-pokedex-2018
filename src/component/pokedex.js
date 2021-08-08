import React, { useEffect } from 'react'
import { fetchPosts } from '../store/cards/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/pokedex.css'
const PokedexComponent = (props) => {
  const { fetchPosts } = props
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
  return (
    <div className="pokedex-container">
      <h1 className="pokedex-header">My pokedex</h1>
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  data: (state) => state.cardsState,
})

const mapDispatchToProps = { fetchPosts }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PokedexComponent)
