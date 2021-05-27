import React, { Component } from 'react';
import Nav from './Navbar';
import Banner from './Banner';
import Card from './Card';
import Vedio from './Vedio';
import Design from './Design';
import Flexbility from './Flexbility';
import Bottom from './Bottom';
import Footer from './Footer';
import Footup from './Footup';
import Customer from './Customer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upcard from './Card';



class App extends Component{
  render(){
    return (
      <div className="APP">
        <Nav />
        <Banner />
        <Upcard />
        <Design />
        <Flexbility />
        <Bottom />
        <Customer />
        <Vedio />
        <Footup />
        <Footer />
      </div>
    );
  }
}

export default App;