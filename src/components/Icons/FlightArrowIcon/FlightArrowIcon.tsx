import React, { FC, ReactElement } from 'react'

const FlightArrowIcon: FC = (): ReactElement => {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L13 5" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 1L13 5L9 9" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default FlightArrowIcon