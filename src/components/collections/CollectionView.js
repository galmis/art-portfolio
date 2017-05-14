// @flow

import React from 'react';
import {
  Grid,
  Row,
  Col,
  Image,
  PageHeader,
  Thumbnail
} from 'react-bootstrap';

import holdImg from '../../images/hold.jpg';
import musclesImg from '../../images/muscles.jpg';
import muscles2Img from '../../images/muscles2.jpg';
//import testImg from '../../images/test.JPG';
import sisterImg from '../../images/sister.jpg';
import horsemenImg from '../../images/horsemen.jpg';

// TODO: spread into several components, could create a template comp
// for different collections...

class CollectionView extends React.Component {

  state: {
    images: [],
    selectedImgIndex: number
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      images: [holdImg, musclesImg, muscles2Img, sisterImg, horsemenImg],
      selectedImgIndex: 0
    }
  }

  _onThumbClick(index: number) {
    this.setState({
      selectedImgIndex: index
    })
  }

  _renderThumb(index: number, imgSrc: string) {
    return (
      <Col md={3} sm={2} xs={3} key={index}>
        <Thumbnail className={index === this.state.selectedImgIndex ? 'active' : ''} href="#" alt="171x180" src={imgSrc} onClick={this._onThumbClick.bind(this, index)} />
      </Col>
    )
  }

  _renderThumbs() {
    const images = this.state.images;
    const len = images.length;
    const thumbsToRender = [];

    for (let index = 0; index < len; index++) {
      thumbsToRender.push(this._renderThumb(index, images[index]));
    }

    return (
      <Row className="section">
        {
          thumbsToRender
        }
      </Row>
    );
  }

  render() {

    const { images, selectedImgIndex } = this.state;
    const selectedImgSrc = images[selectedImgIndex];

    return (
      <Grid>
        <Row>
          <Col md={8} sm={12}>
            <Image responsive src={selectedImgSrc} />
          </Col>
          <Col md={4} sm={12}>
            { this._renderThumbs() }
          </Col>
          <Col md={4} sm={12}>
            <PageHeader><small>Collection Details</small></PageHeader>
            <p>
              Lorem ipsum dolor sit amet, ex vim saperet pericula urbanitas, ad delicata repudiandae mei, at dico civibus consectetuer nam. Mea no feugiat maluisset, sonet oporteat ex mea, has utinam necessitatibus id. Sed ad modo corrumpit, causae theophrastus ea vis. Postulant reprimique ut nam, an libris definitiones pro.

              Cu magna malis his, pri nobis eruditi scribentur in. Quo eu stet assentior, unum mazim atomorum ut vim, ei euismod percipit verterem has. Mei populo animal eu, habemus repudiare his ex. Id natum illum pri, at dicant mandamus deseruisse mei.
            </p>
          </Col>

        </Row>
      </Grid>
    );
  }
};

export default CollectionView;
