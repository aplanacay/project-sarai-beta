import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Header from './main-header';
import Footer from './main-footer';

import HomePage from './../components/home-page.jsx';

const composer = ({}, onData) => {
  const header = React.createElement(Header)
  const footer = React.createElement(Footer)

  onData(null, {header, footer})
}

export default composeAll(
  compose(composer),
  useDeps()
)(HomePage);