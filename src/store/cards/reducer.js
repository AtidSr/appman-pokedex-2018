import { Pokedex } from './constants'

const initialState = {
  cards: [],
  pokedex: [],
}

export const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case Pokedex.fetchPokedex:
      return {
        ...state,
      }
    case Pokedex.addPokemon:
      return {
        ...state,
        pokedex: [...state.pokedex, action.payload],
      }
    case Pokedex.removePokemon:
      return {
        ...state,
        pokedex: action.payload,
      }
    case Pokedex.fetchPokedexSuccess:
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return initialState
  }
}
