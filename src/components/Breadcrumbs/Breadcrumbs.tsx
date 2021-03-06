import React, { FC, ReactElement } from 'react'
import BreadcrumbsIcon from '../Icons/BreadcrumbsIcon/BreadcrumbsIcon'
import styled from 'styled-components'


const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
`

const Breadcrumbs: FC = (): ReactElement => {
    return (
        <BreadcrumbsWrapper>
            <span>Вылеты</span>
            <BreadcrumbsIcon/>
            <span>SVO - JFK</span>
        </BreadcrumbsWrapper>
    )
}

export default Breadcrumbs