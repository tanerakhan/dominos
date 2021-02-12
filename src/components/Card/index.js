import React from 'react'
import {Card} from './style'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {addBasket, notification} from "../../store/actions";

function Cards({addBasket, notification, items}) {

    let history = useHistory();
    function clicked(e){
        history.push(`/detay/${e}`);
    }
    function addToBasket(e, id){
        e.stopPropagation();
        notification(true)
        addBasket(id)
    }

    return (
        <>
            {
                items && items.map(({id, name, image, price}) => (
                    <Card  onClick={ () => clicked(id) } key={id}>
                        <div className="cardContainer">
                            <img src={image} />
                            <h5 className="common">{name}</h5>
                            <span className="common">{price}</span>
                            <small className="common">'den başlayan fiyatlarla</small>
                            <button onClick={ (e) =>  addToBasket(e, id) } className="common">Sepete Ekle</button>
                        </div>
                    </Card>
                ))
            }
        </>
    )
}

export default connect(null, { addBasket, notification })(Cards);