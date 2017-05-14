// @flow

import React from 'react';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Image
} from 'react-bootstrap';

import holdImg from '../../images/hold.jpg';
import AnimatedImage from '../shared/AnimatedImage';

const CharcoalView = (props: Object) => {
  return (
    <Grid>
      <Row>
        <Col md={8} sm={12}>
          <AnimatedImage responsive src={holdImg} />
        </Col>
        <Col md={4} sm={12}>
          <PageHeader> <small>Painting Details</small> </PageHeader>
          <p>
            Lorem ipsum dolor sit amet, ex vim saperet pericula urbanitas, ad delicata repudiandae mei, at dico civibus consectetuer nam. Mea no feugiat maluisset, sonet oporteat ex mea, has utinam necessitatibus id. Sed ad modo corrumpit, causae theophrastus ea vis. Postulant reprimique ut nam, an libris definitiones pro.

            Cu magna malis his, pri nobis eruditi scribentur in. Quo eu stet assentior, unum mazim atomorum ut vim, ei euismod percipit verterem has. Mei populo animal eu, habemus repudiare his ex. Id natum illum pri, at dicant mandamus deseruisse mei.
          </p>

        </Col>
      </Row>
    </Grid>
  );
};

export default CharcoalView;
