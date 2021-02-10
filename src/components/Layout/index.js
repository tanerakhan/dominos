import React from 'react'
import {
    Link
  } from "react-router-dom";
import { LayoutContainer, Nav } from './style'
import logo from '../../assets/images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
export default function Layout({children}) {
    let history = useHistory();
    function clicked(){
        history.push(`/sepet`);
    }
    return (
        <LayoutContainer>
        <Nav>
            <div className="side">
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className="side" onClick={ () => clicked() }>
            <FontAwesomeIcon icon={faShoppingBasket} /> sepet(2)
            </div>
        </Nav>
            {children}
        </LayoutContainer>
    )
}
