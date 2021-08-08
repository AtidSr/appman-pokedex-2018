import { Pokedex } from './constants'

// *********************************
// NOTE: Fetch Posts
// *********************************

export const fetchPokedexSuccess = (data) => {
  return {
    type: Pokedex.fetchPokedexSuccess,
    payload: data,
  }
}

export const fetchPokedex = (data) => {
  return {
    type: Pokedex.fetchPokedex,
    payload: data,
  }
}

export const fetchPokedexError = (data) => {
  return {
    type: Pokedex.fetchPostsError,
    payload: data,
  }
}

export const addPokemon = (data) => {
  return {
    type: Pokedex.addPokemon,
    payload: data,
  }
}

export const removePokemon = (data) => {
  return {
    type: Pokedex.removePokemon,
    payload: data,
  }
}
