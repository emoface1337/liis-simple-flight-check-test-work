import { Action } from 'redux'
import { FormDataType } from '../../../api/authApi'

export enum AuthActionTypes {
    SET_IS_AUTH = 'auth/SET_IS_AUTH'
}

export interface LogInInterface extends Action<AuthActionTypes> {
    type: AuthActionTypes.SET_IS_AUTH
    payload: FormDataType
}

export const AuthActions = {
    logIn: (formData: any): LogInInterface => ({
        type: AuthActionTypes.SET_IS_AUTH,
        payload: formData
    })
}