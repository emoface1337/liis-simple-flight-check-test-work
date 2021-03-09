import React, { FC, ReactElement, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import FlightItem from '../FlightItem/FlightItem'
import styled, { keyframes } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { flightsActions } from '../../store/ducks/flights/flights'
import { CarrierType, QuoteType } from "../../api/flightsApi";

const FlightList = styled.ul`
  margin: 0;
  padding: 0;
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loader = styled.div`
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #3DBDF6 transparent #3DBDF6 transparent;
    animation: ${rotateAnimation} 1.2s linear infinite
  }
`

const FlightsList: FC = (): ReactElement => {

    const date = useSelector((state: RootState) => state.flights.date)
    const flights = useSelector((state: RootState) => state.flights.flights)
    const favouriteFlightsIds = useSelector((state: RootState) => state.flights.favouriteFlights)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(flightsActions.fetchFlights(date))
        return () => {
            dispatch(flightsActions.setFlights(undefined))
        }
    }, [date, dispatch])

    if (!flights) {
        return (
            <LoaderWrapper>
                <Loader/>
            </LoaderWrapper>
        )
    }

    return (
        <>
            {
                flights.Quotes.length !== 0 ?
                    <Scrollbars style={{ width: '100%', height: 515 }}
                                renderTrackVertical={({ style, ...props }) =>
                                    <div {...props} style={{
                                        ...style, backgroundColor: '#E7E7E7', right: '2px', bottom: '2px', top: '2px',
                                        borderRadius: '3px', width: '2px'
                                    }}/>
                                }
                                renderThumbVertical={() => (
                                    <div style={{ backgroundColor: '#1157A7', borderRadius: '2px', width: '2px' }}/>)}
                                renderTrackHorizontal={() => <div/>}
                    >
                        <FlightList>
                            {
                                flights.Quotes && flights.Quotes.map((flight, index: number) => <FlightItem key={index}
                                                                                                            flight={flight as QuoteType}
                                                                                                            carrier={flights.Carriers.find((carrier: CarrierType) => carrier.CarrierId === flight.OutboundLeg.CarrierIds[0])}
                                                                                                            favourite={favouriteFlightsIds.some((flightId: number | string) => flightId === flight.QuoteId)}
                                />)
                            }
                        </FlightList>
                    </Scrollbars>
                    : null
            }
        </>
    )
}

export default FlightsList