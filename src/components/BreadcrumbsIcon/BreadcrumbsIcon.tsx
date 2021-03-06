import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'


const BreadcrumbsIconWrapper = styled.span`
  margin: 0 20px;
`

const BreadcrumbsIcon: FC = (): ReactElement => {
    return (
        <BreadcrumbsIconWrapper>
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </BreadcrumbsIconWrapper>
    )
}

export default BreadcrumbsIcon