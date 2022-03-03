import React, { Component } from 'react';
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class Main extends Component {
  render() {
    return (
      <div>
         <Header />
         <Body />
         <Footer />
      </div>
    )
  }
}
