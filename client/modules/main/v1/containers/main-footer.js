import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Footer from './../components/footer.jsx';

const composer = ({}, onData) => {

  onData(null, {})
}

export default composeAll(
  compose(composer),
  useDeps()
)(Footer);