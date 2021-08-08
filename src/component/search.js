import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CardComponent from './card'
import './styles/search.css'

const SearchComponent = () => {
  return <div className="search-container"></div>
}

const structuredSelector = createStructuredSelector({
  data: (state) => state.cardsState,
})

const mapDispatchToProps = { fetchPosts }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(SearchComponent)
