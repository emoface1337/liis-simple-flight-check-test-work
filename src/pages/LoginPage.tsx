import React, { FC, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import loginBackground from './../assets/login-bg.jpg'

import { FormDataType } from '../api/authApi'

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url(${loginBackground}) no-repeat center center / cover;

  &::after {
    position: absolute;
    width: 100vw;
    height: 100vh;
    content: "";
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.6);
    z-index: 1;
    backdrop-filter: blur(20px);
  }

`

const Login = styled.div`
  border-radius: 20px;
  background: #fff;
  width: 410px;
  height: 338px; 
  display: flex;
  flex-direction: column;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`

const LoginTitle = styled.h3`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 53px 0 16px 0;
  text-align: center;
`

const LoginForm = styled.form`
  position: relative;
  padding: 0 32px;
`

const LoginInputWrapper = styled.div`
  position: relative;
  margin-bottom: 25px;
`

const LoginInputLabel = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 7px 0;
`

const LoginInput = styled.input`
  border-radius: 4px;
  border: 1px solid #C9CACC;
  width: 100%;
  height: 34px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px ${props => props.theme.primaryColor};
  }
`
const LoginButtonWrapper = styled.div`
  text-align: right;
  margin-top: 25px;
`

const LoginButton = styled.button`
  background: linear-gradient(104.34deg, #3C4CAD -15.34%, #00C3FF 145.95%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  padding: 10px 17px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 116px;

  &:hover {
    box-shadow: 0 0 4px #99A0A3;
  }

  &:active {
    background: linear-gradient(104.34deg, #5362BE -15.34%, #4AD5FF 145.95%);
  }
`

const LoginError = styled.span`
  color: ${props => props.theme.redColor};
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: block;
  position: absolute;
  bottom: -17px;
  left: 0;
`

const validationSchema = yup.object().shape({
    email: yup.string().email().required('Введите почту'),
    password: yup.string().required('Введите пароль').min(8, 'Длина пароля должна быть не менее 8 символов')
})

const LoginPage: FC = (): ReactElement => {

    const history = useHistory()

    const { handleSubmit, errors, register } = useForm<FormDataType>(
        {
            resolver: yupResolver(validationSchema)
        })

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password)
    })

    return (
        <LoginWrapper>
            <Login>
                <LoginTitle>Simple Flight Check</LoginTitle>
                <LoginForm onSubmit={onSubmit}>
                    <LoginInputWrapper>
                        <LoginInputLabel>Логин:</LoginInputLabel>
                        <LoginInput type="email" name="email" ref={register}/>
                        <LoginError>{errors.email && errors.email.message}</LoginError>
                    </LoginInputWrapper>
                    <LoginInputWrapper>
                        <LoginInputLabel>Пароль:</LoginInputLabel>
                        <LoginInput type="password" name="password" ref={register}/>
                        <LoginError>{errors.password && errors.password.message}</LoginError>
                    </LoginInputWrapper>
                    <LoginButtonWrapper>
                        <LoginButton>Войти</LoginButton>
                    </LoginButtonWrapper>
                </LoginForm>
            </Login>
        </LoginWrapper>
    )
}

export default LoginPage