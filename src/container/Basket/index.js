import React from 'react'
import BasketComp from '../../components/Basket'
import { connect } from "react-redux"; 
function Basket({basket}) {
    return <BasketComp item={basket}/>
}

function mapStateToProps(state) { return { basket: state.basket } }
  
export default connect(mapStateToProps)(Basket);