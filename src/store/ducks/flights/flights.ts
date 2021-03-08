import produce, { Draft } from 'immer'
import { LoadingStatusEnum } from '../auth/auth'
import { InferActionsTypes } from '../../index'
import { FlightsResponseType } from '../../../api/flightsApi'
import { Action } from 'redux'

export enum FlightsActionTypes {
    FETCH_FLIGHTS = 'flights/FETCH_FLIGHTS',
    SET_DATE = 'flights/SET_DATE',
    SET_FLIGHTS = 'flights/SET_FLIGHTS',
    SET_STATUS = 'flights/SET_STATUS',
    ADD_TO_FAVOURITE = 'flights/ADD_TO_FAVOURITE',
    REMOVE_FROM_FAVOURITE = 'flights/REMOVE_FROM_FAVOURITE'
}

export interface SetDateInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.SET_DATE,
    payload: string
}

export interface FetchFlightsInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.FETCH_FLIGHTS,
    payload: string
}

export interface SetFlightsInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.SET_FLIGHTS
    payload: FlightsResponseType
}

export interface SetStatusInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.SET_STATUS
    payload: LoadingStatusEnum
}

export interface AddToFavouriteInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.ADD_TO_FAVOURITE
    payload: number | string
}

export interface RemoveFromFavouriteInterface extends Action<FlightsActionTypes> {
    type: FlightsActionTypes.REMOVE_FROM_FAVOURITE
    payload: number | string
}

export const flightsActions = {
    setDate: (date: string): SetDateInterface => ({
        type: FlightsActionTypes.SET_DATE,
        payload: date
    }),
    fetchFlights: (date: string): FetchFlightsInterface => ({
        type: FlightsActionTypes.FETCH_FLIGHTS,
        payload: date
    }),
    setFlights: (flights: any): SetFlightsInterface => ({
        type: FlightsActionTypes.SET_FLIGHTS,
        payload: flights
    }),
    setStatus: (status: LoadingStatusEnum): SetStatusInterface => ({
        type: FlightsActionTypes.SET_STATUS,
        payload: status
    }),
    addToFavourite: (id: number | string): AddToFavouriteInterface => ({
        type: FlightsActionTypes.ADD_TO_FAVOURITE,
        payload: id
    }),
    removeFromFavourite: (id: number | string): RemoveFromFavouriteInterface => ({
        type: FlightsActionTypes.REMOVE_FROM_FAVOURITE,
        payload: id
    })
}

const initialState = {
    favouriteFlights: [] as string[] | number[],
    flights: undefined as unknown as FlightsResponseType,
    date: new Date().toISOString().substring(0, 10),
    status: LoadingStatusEnum.NEVER
}

export type FlightsStateType = typeof initialState
type FlightsActionsTypes = InferActionsTypes<typeof flightsActions>

export const flightsReducer = produce((draft: Draft<FlightsStateType>, action: FlightsActionsTypes) => {

    switch (action.type) {
        case FlightsActionTypes.SET_DATE: {
            draft.date = action.payload
            break
        }

        case FlightsActionTypes.SET_FLIGHTS: {
            draft.flights = action.payload
            break
        }

        case FlightsActionTypes.SET_STATUS: {
            draft.status = action.payload
            break
        }

        case FlightsActionTypes.ADD_TO_FAVOURITE: {
            // immer bug
            draft.favouriteFlights.push(action.payload as never)
            break
        }

        case FlightsActionTypes.REMOVE_FROM_FAVOURITE: {
            // immer bug
            // @ts-ignore
            const filtered = draft.favouriteFlights.filter((flightId: string | number) => flightId !== action.payload)
            draft.favouriteFlights = filtered
            break
        }

        default:
            break
    }
}, initialState)
