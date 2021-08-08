import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../store/cards/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CardComponent from './card'
import './styles/search.css'

const AddBarComponent = (props) => {
  const { fetchPosts } = props
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    console.log(isSearch)
  }, [isSearch])

  return (
    <div className="bar-container">
      <CardComponent />
      <div className="bar-footer">
        <div
          className="bar-add-btn"
          onClick={() => setIsSearch((isSearch) => !isSearch)}
        >
          +
        </div>
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
)(AddBarComponent)
