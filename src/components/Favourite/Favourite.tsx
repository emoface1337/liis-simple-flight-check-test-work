import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const FavouriteWrapper = styled.div`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 12px;
`

const FavouriteCount = styled.span`
  font-weight: 500;
  color: ${props => props.theme.primaryColor};
`

const Favourite: FC = (): ReactElement => {
    return (
        <FavouriteWrapper>
            Добавлено в Избранное: <FavouriteCount>10</FavouriteCount> рейсов
        </FavouriteWrapper>
    )
}

export default Favourite