import React, { useEffect, useState } from 'react'
import { fetchPosts, addPokemon } from '../store/cards/action'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/search.css'
import CardComponent from './card'

const AddBarComponent = (props) => {
  const { fetchPosts, addPokemon } = props
  const { cards } = props.cardData
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [selectedCard, setSelectedCard] = useState({})

  useEffect(() => {
    if (isSearch) fetchPosts({ name: searchInput })
  }, [fetchPosts, searchInput, isSearch])

  useEffect(() => {
    if (Object.keys(selectedCard)) {
      addPokemon(selectedCard)
    }
  }, [selectedCard])

  const renderCard = () => {
    return cards.map((card) => (
      <CardComponent
        cardInfo={card}
        key={`card_${card.id}`}
        onClickEvent={(cardInfo) => setSelectedCard(cardInfo)}
      />
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
  cardData: (state) => state.cardsState,
})

const mapDispatchToProps = { fetchPosts, addPokemon }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(AddBarComponent)
