import React from 'react';
import Layout from './components/Layout';
import Card from './components/Card'
import Details from './components/Details'
import Basket from './components/Basket'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App(){
  let mock = [
    {   
      "id": 0,
      "image": "https://dpe-cdn.azureedge.net/api/medium/Coupon/Global/_T0006/NULL/434x404/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612964040000",
      "name" : "Gel Al - 2 Büyük Boy Pizza + Coca-Cola Pet 1 lt",
      "price": "54.99 TL"
  },
  {   
      "id": 1,
      "image": "https://dpe-cdn.azureedge.net/api/medium/Coupon/Global/_T797/NULL/434x404/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612964160000",
      "name" : "Tek kişilik paketos",
      "price": "25.99 TL"
  },
  {   
      "id": 2,
      "image": "https://dpe-cdn.azureedge.net/api/medium/Coupon/Global/_T944/NULL/434x404/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612964160000",
      "name" : "2 Adet Ekmek Arası veya Dürümos",
      "price": "24.99 TL"
  },
  {   
      "id": 3,
      "image": "https://dpe-cdn.azureedge.net/api/medium/Coupon/Global/_T0006/NULL/434x404/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612964160000",
      "name" : "2 Büyük Boy Pizza",
      "price": "67.99 TL"
  }
  ]
    return(   
      <Router>
      <Switch>
      <Layout>
          <Route exact path="/">
            <div style={{ backgroundColor: '#f0f8ff', maxWidth: '1000px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', padding: '20px' }}>
                <Card items={mock} />
            </div>
          </Route>
          <Route exact path="/sepet" component={Basket} />
          <Route exact path="/detay/:id" component={Details} />
          <Route render={() => <Redirect to="/" />} />
          </Layout>
        </Switch>
      </Router>
   )
}
export default App