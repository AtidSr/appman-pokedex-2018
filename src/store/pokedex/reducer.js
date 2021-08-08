import { pokedexConstants } from './constants'

const initialState = {
  pokedex: [],
}

export const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokedexConstants.addPokemon:
      return {
        ...state,
        pokedex: action.payload,
      }
    default:
      return initialState
  }
}
