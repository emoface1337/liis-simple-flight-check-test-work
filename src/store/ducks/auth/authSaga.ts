import { call, put, takeLatest } from 'redux-saga/effects'
import { authActions, AuthActionTypes, FetchSignInInterface, LoadingStatusEnum } from './auth'
import { authApi, LoginResponseType } from '../../../api/authApi'

function* checkIsAuth() {

    yield  put(authActions.setStatus(LoadingStatusEnum.LOADING))
    const isAuth = window.localStorage.getItem('isAuth')

    if (isAuth === 'true') {
        yield put(authActions.setStatus(LoadingStatusEnum.SUCCESS))
        yield put(authActions.setIsAuth(true))
    } else {
        yield put(authActions.setStatus(LoadingStatusEnum.SUCCESS))
        yield put(authActions.setIsAuth(false))
    }
}

function* fetchSignIn({ payload: formData }: FetchSignInInterface) {

    yield put(authActions.setStatus(LoadingStatusEnum.LOADING))

    const data: LoginResponseType = yield call(authApi.logIn, formData)

    if (data.success) {
        yield put(authActions.setStatus(LoadingStatusEnum.SUCCESS))
        yield put(authActions.setIsAuth(true))
        window.localStorage.setItem('isAuth', 'true')
    } else {
        yield put(authActions.setStatus(LoadingStatusEnum.ERROR))
        yield put(authActions.setIsAuth(false))
        window.localStorage.setItem('isAuth', 'false')
    }
}

function* fetchLogOut() {
    yield put(authActions.setStatus(LoadingStatusEnum.LOADING))
    const data: LoginResponseType = yield call(authApi.logOut)

    if (data.success) {
        window.localStorage.removeItem('isAuth')
        yield put(authActions.setIsAuth(false))
        yield put(authActions.setStatus(LoadingStatusEnum.SUCCESS))
    } else {
        yield put(authActions.setStatus(LoadingStatusEnum.SUCCESS))
    }
}

export function* authSaga() {
    yield takeLatest(AuthActionTypes.CHECK_IS_AUTH, checkIsAuth)
    yield takeLatest(AuthActionTypes.FETCH_SIGN_IN, fetchSignIn)
    yield takeLatest(AuthActionTypes.FETCH_LOG_OUT, fetchLogOut)
}




