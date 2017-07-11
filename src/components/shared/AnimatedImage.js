// @flow

import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import {
  Image,
  Thumbnail
} from 'react-bootstrap';
import './AnimatedImage.css';

const AnimatedImage = (props: Object) => {

  const _renderComp = () => {
    if (props.thumbnail) {
      return (
        <Thumbnail className={props.className} href="#" src={props.src} key={props.src} onClick={props.onClick} />
      );
    } else {
      return (
        <Image responsive src={props.src} key={props.src} />
      );
    }
  };

  return(

    <CSSTransitionGroup transitionName="animated-image" transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      transitionAppearTimeout={500}
      transitionAppear={true}>
      { _renderComp() }
    </CSSTransitionGroup>
  );
};

export default AnimatedImage
