import axios from "axios"

import config from "../../config"
import { useSelector } from "react-redux"

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_ALL_POKEMONS_FAIL = "GET_ALL_POKEMONS_FAIL"

export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const GET_ALL_TYPES_FAIL = "GET_ALL_TYPES_FAIL"

export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"

export const SEARCH_POKEMON = "SEARCH_POKEMON"

export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL"

export const POST_POKEMON = "POST_POKEMON"


export const GetAllPOKEMONS = () => async (dispatch) => {

    try {
        const response = await axios.get(`${config.URL}/pokemons`)
        const data = response.data

        dispatch({ type: GET_ALL_POKEMONS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_POKEMONS_FAIL, payload: error.message })
    }
}

export const GetAllTypes = () => async (dispatch) => {
    try {
        const response = await axios.get(`${config.URL}/types`)
        const data = response.data

        dispatch({ type: GET_ALL_TYPES, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_TYPES_FAIL, payload: error.message })
    }
}

export const SearchPokemon = (search) => (dispatch) => {

    dispatch({ type: SEARCH_POKEMON, payload: search })


}

export const GetPokemonByID = (id) => async (dispatch) => {
    const response = await axios.get(`${config.URL}/pokemons/${id}`)
    const data = response.data

    dispatch({ type: GET_POKEMON_BY_ID, payload: data })
}

export const PostPokemon = (formData) => (dispatch) => {
    axios.post(`${config.URL}/pokemons`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => dispatch({ type: POST_POKEMON, payload: response })).catch(error => console.error(error))

}
