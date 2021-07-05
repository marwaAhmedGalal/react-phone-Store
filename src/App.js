import React, { Component } from "react";
import { Route, Switch as Router, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './container/Navbar';
import ProductList from './container/ProductsList';
import Details from './components/pages/Details';
import Cart from './components/pages/Cart/Cart';
import Default from './components/pages/Default';
import Modal from './components/pages/Modal';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>

          <Route exact path="/" component={ProductList} />
          <Route path="/Details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route component={Default} />

        </Switch>

        <Modal />
      </>
    );
  }
}
export default App;
