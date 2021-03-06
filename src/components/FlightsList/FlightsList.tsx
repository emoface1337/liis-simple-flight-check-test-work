import React, { FC, ReactElement } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import FlightItem from '../FlightItem/FlightItem'
import styled from 'styled-components'

const FlightList = styled.ul`
  margin: 0;
  padding: 0;
`

const FlightsList: FC = (): ReactElement => {

    return (
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
                <FlightItem favourite={true}/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
            </FlightList>
        </Scrollbars>
    )
}

export default FlightsList