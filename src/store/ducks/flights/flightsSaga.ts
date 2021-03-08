import { call, put, takeLatest } from 'redux-saga/effects'
import { FetchFlightsInterface, flightsActions, FlightsActionTypes } from './flights'
import { flightsApi, FlightsResponseType } from '../../../api/flightsApi'
import { LoadingStatusEnum } from '../auth/auth'


function* fetchFlights({ payload: date }: FetchFlightsInterface) {
    try {
        yield put(flightsActions.setFlights(undefined))
        yield put(flightsActions.setStatus(LoadingStatusEnum.LOADING))
        const data: FlightsResponseType = yield call(flightsApi.getTickets, date)
        yield put(flightsActions.setFlights(data))
        yield put(flightsActions.setStatus(LoadingStatusEnum.SUCCESS))
    } catch (e) {
        yield put(flightsActions.setStatus(LoadingStatusEnum.ERROR))
    }
}

export function* flightsSaga() {
    yield takeLatest(FlightsActionTypes.FETCH_FLIGHTS, fetchFlights)
}




