import {
    GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_BY_ID, POST_POKEMON, SEARCH_POKEMON
} from "../actions/index"

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    types: [],
    pokemonCurrent: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SEARCH_POKEMON:

            const searching = action.payload.toLowerCase()
            let elementsFiltered

            elementsFiltered = state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searching))

            return {
                ...state,
                pokemonsFiltered: elementsFiltered
            }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonCurrent: action.payload,

            }
        case POST_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        default:
            return { ...state }
    }
}

export default rootReducer