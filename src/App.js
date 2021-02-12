import React from 'react';
import Layout from './components/Layout';
import Home from './container/Home'
import Details from './container/Details'
import Basket from './container/Basket'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App(){
    return(   
      <Router>
      <Switch>
      <Layout>
          <Route exact path="/" component={Home} />           
          <Route exact path="/sepet" component={Basket} />
          <Route exact path="/detay/:id" component={Details} />
          </Layout>
        </Switch>
      </Router>
   )
}