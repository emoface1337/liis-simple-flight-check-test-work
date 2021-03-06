import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import PlaneIcon from '../Icons/PlaneIcon/PlaneIcon'
import FlightArrowIcon from '../Icons/FlightArrowIcon/FlightArrowIcon'
import FlightFavouriteIcon from '../Icons/FlightFavouriteIcon/FlightFavouriteIcon'

const FlightItemWrapper = styled.li`
  padding: 18px 10px;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
  display: flex;
  justify-content: center;
  margin-right: 12px;
  align-items: stretch;
  align-content: center;
`

const FlightItemIcon = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(0, 119, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`

const FlightItemInfo = styled.div`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  flex-grow: 1;
`

const FlightItemInfoHead = styled.div`
  display: flex;
  align-items: center;
`

const FlightArrowIconWrapper = styled.span`
  margin: 0 12px;
`

const FlightItemInfoDesc = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #878787;
`

const FlightItemRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
`

const FlightFavouriteIconWrapper = styled.div`
  cursor: pointer;
`

const FlightItemPrice = styled.div`
  > span {
    font-weight: 300;
    font-size: 11px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #878787;
  }

  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
`

type Props = {
    favourite?: boolean
}

const FlightItem: FC<Props> = ({ favourite }): ReactElement => {
    return (
        <FlightItemWrapper>
            <FlightItemIcon>
                <PlaneIcon/>
            </FlightItemIcon>
            <FlightItemInfo>
                <FlightItemInfoHead>
                    Moscow (SVO)
                    <FlightArrowIconWrapper><FlightArrowIcon/></FlightArrowIconWrapper>
                    New York City (JFK)
                </FlightItemInfoHead>
                <FlightItemInfoDesc>28 June, 2020 - 14:50</FlightItemInfoDesc>
                <FlightItemInfoDesc>Aeroflot</FlightItemInfoDesc>
            </FlightItemInfo>
            <FlightItemRightWrapper>
                <FlightFavouriteIconWrapper>
                    <FlightFavouriteIcon favourite={favourite}/>
                </FlightFavouriteIconWrapper>
                <FlightItemPrice>
                    <span>Price: </span>
                    23 924 ₽
                </FlightItemPrice>
            </FlightItemRightWrapper>
        </FlightItemWrapper>
    )
}

export default FlightItem