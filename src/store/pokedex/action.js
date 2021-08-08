import { pokedexConstants } from './constants'

export const addPokemon = (data) => {
  return {
    type: pokedexConstants.addPokemon,
    payload: data,
  }
}
