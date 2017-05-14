// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import AboutMe from './components/about/AboutMe';
import CharcoalView from './components/studies/CharcoalView';
import OilView from './components/studies/OilView';
import CollectionView from './components/collections/CollectionView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='about' component={AboutMe} />
    <Route path='studies/charcoal' component={CharcoalView} />
    <Route path='studies/oil' component={OilView} />
    <Route path='collections/collection1' component={CollectionView} />
  </Route>
);
