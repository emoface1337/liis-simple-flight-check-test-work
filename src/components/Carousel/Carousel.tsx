import React, { FC, ReactElement } from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styled from 'styled-components'

const CarouselWrapper = styled.div`
  margin: 30px 0;
`

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 -12px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    cursor: pointer;
    outline: none;
  }

  > img {
    width: 164px;
    height: 149px;
    object-fit: cover;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`

const CarouselComponent: FC = (): ReactElement => {

    const carouselItems = useSelector((state: RootState) => state.carousel.items)

    return (
        <CarouselWrapper>
            <Carousel
                pagination={false}
                itemsToShow={3.4}
                showArrows={false}
                transitionMs={300}
                itemPadding={[0, 0]}
                outerSpacing={0}
                isRTL={false}>
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={item.url} alt={`Image ${index}`}/>
                    </CarouselItem>
                ))}
            </Carousel>
        </CarouselWrapper>
    )
}

export default CarouselComponent