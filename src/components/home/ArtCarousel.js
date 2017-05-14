// @flow

import React from 'react';

import { Carousel, Image } from 'react-bootstrap';

import musclesImg from '../../images/muscles.jpg';
import sisterImg from '../../images/sister.jpg';
import nakedImg from '../../images/naked.jpg';

const ArtCarousel = (props) => {

  const _renderItem = (imgSrc: string) => {
    return(
      <Carousel.Item>
        <Image src={imgSrc}/>
      </Carousel.Item>
    );
  };

  // NOTE: could pass imgs from redux and create renderItems method
  return (
    <Carousel>
      { _renderItem(musclesImg) }
      { _renderItem(sisterImg) }
      { _renderItem(nakedImg) }
    </Carousel>
  );

};

export default ArtCarousel;
