import React from 'react'
import { Link  } from "react-router-dom";
import { Notification, LayoutContainer, Nav } from './style'
import logo from '../../assets/images/logo1.png'
import { connect } from "react-redux"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
function Layout({basket,notification, children}) {
    let history = useHistory();
    function clicked(){
        history.push(`/sepet`);
    }
    let basketSameItemRemove = new Set(basket);
    return (
        <div style={{ position: 'relative' }}>
        {
            notification && <Notification> Siparişiniz sepete eklendi</Notification>
        }
            <LayoutContainer>
        <Nav>
            <div className="side">
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className="side" onClick={ () => clicked() }>
            <FontAwesomeIcon icon={faShoppingBasket} /> Sepet({basketSameItemRemove.size})
            </div>
        </Nav>
            {children}
        </LayoutContainer>
        </div>
    )
}
function mapStateToProps(state) {
    return {
      basket: state.basket,
      notification: state.notification
    };
  }
export default connect(mapStateToProps)(Layout);