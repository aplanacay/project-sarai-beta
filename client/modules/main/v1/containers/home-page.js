import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Header from './main-header';
import Footer from './main-footer';

import {Logo, Nav} from '/client/modules/comp-lib';
import HomePage from './../components/home-page.jsx';

const composer = ({}, onData) => {
  const header = React.createElement(Header)
  const footer = React.createElement(Footer)
  // const banner = React.createElement(Logo, {label: 'Title'})

  const links = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/',
      name: 'About Us'
    },
    {
      url: '#',
      name: 'Explore',
      links: [
        {
          url: '/',
          name: 'Suitability Maps'
        },
        {
          url: '/',
          name: 'Weather Monitoring'
        },
        {
          url: '/',
          name: 'Crop Production Area'
        },
        {
          url: '/',
          name: 'Normalized Difference Vegetation Index (NDVI)'
        },
        {
          url: '/',
          name: 'Rainfall'
        },
        {
          url: '/',
          name: 'Open Data'
        },

      ]
    },
    {
      url: '/',
      name: 'Planting Dates'
    },
    {
      url: '#',
      name: 'DSS',
      links: [
        {
          url: '/',
          name: 'Corn Nutrient Expert'
        }
      ]
    },
    {
      url: '#',
      name: 'Get Involved',
      links: [
        {
          url: '/',
          name: 'Contact Us'
        },
        {
          url: '/',
          name: 'Submit a Story'
        },
        {
          url: '/',
          name: 'Join the Discussion'
        }
      ]
    },
  ];

  // const navpos = 'header'
  // const alwaysVisible = true
  // const banner = React.createElement(Nav, {links, navpos, alwaysVisible})
  const footer = React.createElement(Footer)

  onData(null, {header, footer})
}

export default composeAll(
  compose(composer),
  useDeps()
)(HomePage);
