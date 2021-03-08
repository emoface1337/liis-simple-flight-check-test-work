import { all } from 'redux-saga/effects'
import { authSaga } from './ducks/auth/authSaga'
import { flightsSaga } from './ducks/flights/flightsSaga'

export default function* rootSaga() {
    yield all([authSaga(), flightsSaga()])
}