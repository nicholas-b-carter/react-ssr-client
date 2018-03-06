import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components'

const CarouselContainer = styled.div`
  text-align: center;
  margin: auto;
  width: 85%;
  height: 40vw;
`;

const CarouselItem = styled.div`
  text-align: center;
  background-color: black;
`;

const CarouselImage = styled.img`
  margin: auto;
  max-height: 100%;
  max-width: auto;
`;


const ImageCarousel = (props) => {

  return (
    <CarouselContainer>
      <Carousel autoplay>
        {props.images.map((image) =>
          <CarouselItem key={image}>
            <CarouselImage src={image}/>
          </CarouselItem>
        )}
      </Carousel>
    </CarouselContainer>
  )
}

export default ImageCarousel
