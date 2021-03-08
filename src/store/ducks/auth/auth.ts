import { Action } from 'redux'
import { FormDataType } from '../../../api/authApi'
import { InferActionsTypes } from '../../index'
import produce, { Draft } from 'immer'

export enum LoadingStatusEnum {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SUCCESS = 'SUCCESS'
}

export enum AuthActionTypes {
    CHECK_IS_AUTH = 'auth/CHECK_IS_AUTH',
    SET_IS_AUTH = 'auth/SET_IS_AUTH',
    SET_STATUS = 'auth/SET_STATUS',
    FETCH_SIGN_IN = 'auth/FETCH_SIGN_IN',
    FETCH_LOG_OUT = 'auth/FETCH_LOG_OUT'
}

export interface SetIsAuthInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.SET_IS_AUTH,
    payload: boolean
}

export interface CheckIsAuthInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.CHECK_IS_AUTH
}

export interface SetStatusInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.SET_STATUS,
    payload: LoadingStatusEnum
}

export interface FetchSignInInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.FETCH_SIGN_IN,
    payload: FormDataType
}

export interface FetchLogOutInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.FETCH_LOG_OUT
}

export const authActions = {
    checkIsAuth: (): CheckIsAuthInterface => ({
        type: AuthActionTypes.CHECK_IS_AUTH
    }),
    setIsAuth: (isAuth: boolean): SetIsAuthInterface => ({
        type: AuthActionTypes.SET_IS_AUTH,
        payload: isAuth
    }),
    setStatus: (status: LoadingStatusEnum): SetStatusInterface => ({
        type: AuthActionTypes.SET_STATUS,
        payload: status
    }),
    fetchSignIn: (formData: FormDataType): FetchSignInInterface => ({
        type: AuthActionTypes.FETCH_SIGN_IN,
        payload: formData
    }),
    fetchLogOut: (): FetchLogOutInterface => ({
        type: AuthActionTypes.FETCH_LOG_OUT
    })
}

const initialState = {
    isAuth: undefined as unknown as boolean,
    status: LoadingStatusEnum.NEVER
}

export type AuthStateType = typeof initialState
type AuthActionsTypes = InferActionsTypes<typeof authActions>

export const authReducer = produce((draft: Draft<AuthStateType>, action: AuthActionsTypes) => {

    switch (action.type) {

        case AuthActionTypes.SET_IS_AUTH: {
            draft.isAuth = action.payload
            break
        }

        case AuthActionTypes.SET_STATUS: {
            draft.status = action.payload
            break
        }

        default:
            break
    }
}, initialState)

