import React from 'react'
import {Card} from './style'
import { useHistory } from "react-router-dom";
export default function Cards({items}) {
    let history = useHistory();
    function clicked(e){
        history.push(`/detay/${e}`);
    }
    return (
        <>
            {
                items && items.map(({id, name, image, price}) => (
                    <Card onClick={ () => clicked(id) } key={id}>
                        <div className="cardContainer">
                            <img src={image} />
                            <h5 className="common">{name}</h5>
                            <span className="common">{price}</span>
                            <small className="common">'den başlayan fiyatlarla</small>
                            <button className="common">Sipariş ver</button>
                        </div>
                    </Card>
                ))
            }
        </>
    )
}
