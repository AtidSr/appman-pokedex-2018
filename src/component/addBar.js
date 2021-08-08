import React, { useCallback, useEffect, useState } from 'react'
import { fetchPosts, addPokemon } from '../store/cards/action'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './styles/search.css'
import CardComponent from './card'

const AddBarComponent = (props) => {
  const { fetchPosts, addPokemon } = props
  const { cards, pokedex } = props.cardData
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [typeInput, setTypeInput] = useState('')
  const [selectedCard, setSelectedCard] = useState({})
  const [filterCard, setFilterCard] = useState([])

  useEffect(() => {
    if (isSearch) {
      let payload = { limit: 30 }
      if (searchInput.length > 0) {
        payload.name = searchInput
      }
      if (typeInput.length > 0) {
        payload.type = typeInput
      }
      fetchPosts(payload)
    }
  }, [fetchPosts, searchInput, typeInput, isSearch])

  const filterSelectedCard = useCallback(() => {
    if (pokedex.length === 0) {
      setFilterCard(cards)
      return
    }

    let filterArray = cards
    pokedex.forEach(
      (card) =>
        (filterArray = filterArray.filter(
          (cardfilter) => cardfilter.id !== card.id,
        )),
    )
    setFilterCard(filterArray)
  }, [cards, pokedex])

  useEffect(() => {
    if (Object.keys(selectedCard).length > 0) {
      addPokemon(selectedCard)
    }
  }, [selectedCard, addPokemon])

  useEffect(() => {
    filterSelectedCard()
  }, [filterSelectedCard])

  const renderCard = () => {
    return filterCard.map((card) => (
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
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Find pokemon"
                  className="search-input name"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Find pokemon by type"
                  className="search-input type"
                  value={typeInput}
                  onChange={(e) => setTypeInput(e.target.value)}
                />
              </div>

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
