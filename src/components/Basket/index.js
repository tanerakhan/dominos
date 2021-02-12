import React from 'react'
import { BasketContainer } from './style'
import { useHistory } from "react-router-dom";
export default function Basket({item}) {
    let basketSameItemRemove = new Set(item);
    let itemTo = Array.from(basketSameItemRemove);
    let history = useHistory();
    function toProduct(id){
        history.push(`/detay/${id}`);
    }
    if(itemTo.length > 0){
        return (
            <>
            {
                itemTo.map(({id, coverImage, image, name, price}) => (
                    <BasketContainer onClick={ () => toProduct(id) } key={id}>
                        <div className="overlay" style={{ backgroundImage: `url(${coverImage})`}}></div>
                        <div className="basketInfos">
                            <div className="image">
                                <img src={image}/>
                            </div>
                            <div className="productInfos">
                                <h5>{name}</h5>
                                <span>{price}</span>
                            </div>
                        </div>
                    </BasketContainer>
                ))
            }
            </>
        )
    }else{
            return <BasketContainer> <div style={{ textAlign: 'center', padding: '10px' }}> Sonuç bulunamadı </div> </BasketContainer>
    }
}
