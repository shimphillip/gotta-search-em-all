import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({ pokemonReducer })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
