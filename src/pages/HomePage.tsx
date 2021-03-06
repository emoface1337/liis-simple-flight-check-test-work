import React, { FC, ReactElement } from 'react'
import Header from '../components/Header/Header'
import Flights from '../components/Flights/Flights'

const HomePage: FC = (): ReactElement => {
    return (
        <>
            <Header/>
            <Flights/>
        </>
    )
}

export default HomePage