import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../store/cards/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/search.css'
import CardComponent from './card'

const AddBarComponent = (props) => {
  const { fetchPosts } = props
  const { cards } = props.data
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    if (isSearch) fetchPosts()
  }, [fetchPosts, isSearch])

  const renderCard = () => {
    return cards.map((card) => (
      <CardComponent cardInfo={card} key={`card_${card.id}`} />
    ))
  }
  return (
    <div className="bar-container">
      {isSearch ? (
        <>
          <div className="search-container">
            <div className="search-list-container">
              <input
                type="text"
                placeholder="Find pokemon"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {cards ? renderCard() : ''}
            </div>
          </div>
          <div
            className="search-container outer"
            onClick={() => setIsSearch((isSearch) => !isSearch)}
          ></div>
        </>
      ) : (
        ''
      )}
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
