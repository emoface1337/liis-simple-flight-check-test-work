import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import DatePicker from '../DatePicker/DatePicker'
import CarouselComponent from '../Carousel/Carousel'

const Wrapper = styled.main`
  background: #FFFFFF;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 680px;
  height: 895px;
  margin: 0 auto;
`
const InnerWrapper = styled.div`
  padding: 65px 40px 25px 40px;
`

//rename Row
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Flights: FC = (): ReactElement => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Row>
                    <Breadcrumbs/>
                    <DatePicker/>
                </Row>
                <CarouselComponent/>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Flights