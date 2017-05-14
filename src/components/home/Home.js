// @flow

import React from 'react';
import { Grid } from 'react-bootstrap';
import ArtCarousel from './ArtCarousel';

export default class Home extends React.Component {

  render() {
    return (
      <section>
      <Grid>
        <ArtCarousel />
        <br></br>
        <p>
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        </p>
      </Grid>
      </section>
    );
  }

}
