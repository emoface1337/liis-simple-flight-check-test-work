import { combineReducers, createStore } from 'redux'
import { enhancedStore, sagaMiddleware } from './middleware'

import { carouselReducer as carousel } from './ducks/carousel/carousel'
import { authReducer as auth } from './ducks/auth/auth'
import { flightsReducer as flights } from './ducks/flights/flights'

import rootSaga from './saga'

const rootReducer = combineReducers({
    carousel,
    auth,
    flights
})

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, enhancedStore)

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga)

export default store
