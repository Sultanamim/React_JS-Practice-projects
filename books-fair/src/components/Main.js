import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Book from './body/Book/book';
import Orders from './Orders/orders';
import Cart from './body/Cart/Cart';
import Auth from './auth/auth';
import Contact from './body/Contact/Contact';
import './body/body.css';
import {Route, Router} from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className='body container'>
            <Route path="/login" component={Auth} />
            <Route path="/orders" component={Orders} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Book} />
        </div>
         <Header />
         <Footer />
      </div>
    )
  }
}