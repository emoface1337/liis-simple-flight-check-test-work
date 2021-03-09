import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type FavouriteWrapperProps = {
    readonly isVisible: boolean
}

const FavouriteWrapper = styled.div<FavouriteWrapperProps>`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 12px;
  opacity: ${props => props.isVisible ? '1' : '0'};
`

const FavouriteCount = styled.span`
  font-weight: 500;
  color: ${props => props.theme.primaryColor};
`

const Favourite: FC = (): ReactElement => {

    const favouriteCount = useSelector((state: RootState) => state.flights.favouriteFlights.length)

    return (
        <FavouriteWrapper isVisible={favouriteCount !== 0}>
            Добавлено в Избранное: <FavouriteCount>{favouriteCount}</FavouriteCount> рейсов
        </FavouriteWrapper>
    )
}

export default Favourite