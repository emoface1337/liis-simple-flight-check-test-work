import React, { FC, ReactElement } from 'react'
import Header from '../components/Header/Header'
import Flights from '../components/Flights/Flights'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const HomePage: FC = (): ReactElement | null => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    if (!isAuth)
        return null

    return (
        <>
            <Header/>
            <Flights/>
        </>
    )
}

export default HomePage