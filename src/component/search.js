import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/cards/action'
import { createStructuredSelector } from 'reselect'
import CardComponent from './card'
import './styles/search.css'

const SearchComponent = (props) => {
  const { fetchPosts } = props
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div className="search-container">
      <div className="search-list-container">
        <input type="text" className="search-input" />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
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
)(SearchComponent)
