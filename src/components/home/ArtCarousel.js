// @flow

import React from 'react';

import { Carousel, Image } from 'react-bootstrap';

import musclesImg from '../../images/muscles.jpg';
import sisterImg from '../../images/sister.jpg';
import nakedImg from '../../images/naked.jpg';
import AnimatedImage from '../shared/AnimatedImage';

const ArtCarousel = (props: Object) => {

  const _renderItem = (imgSrc: string) => {
    return(
      <Carousel.Item>
        <AnimatedImage src={imgSrc}/>
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
