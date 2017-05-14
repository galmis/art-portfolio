// @flow

import React from 'react';
import {
  Navbar,
  NavItem,
  NavDropdown,
  Nav,
  MenuItem
} from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

const Navigator = (props: Object) => {

  const _onItemClick = (path: string) => {

    browserHistory.push(path);
  };

  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" className="artsy-text">Hollie Francis - fine art</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={_onItemClick.bind(this, '/')}>Home</NavItem>
          <NavDropdown eventKey={2} title="Collections" id="collections-dropdown">
            <MenuItem eventKey={2.1} onClick={_onItemClick.bind(this, '/collections/collection1')}>Collection 1</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Studies" id="studies-dropdown">
            <MenuItem eventKey={3.1} onClick={_onItemClick.bind(this, '/studies/charcoal')}>Charcoal</MenuItem>
            <MenuItem eventKey={3.2} onClick={_onItemClick.bind(this, '/studies/oil')}>Oil</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} onClick={_onItemClick.bind(this, '/about')}>About</NavItem>
          <NavItem eventKey={5} onClick={_onItemClick.bind(this, '/contact')}>Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
