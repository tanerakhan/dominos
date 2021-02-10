import React from 'react'
import {Details} from './style'
export default function Detail() {
    return (
        <Details>
                <div className="coverImage">
                    <img src="https://dpe-cdn.azureedge.net/api/medium/Coupon/DetailNew/_T819/NULL/1170x400/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612986960000"/>
                </div>
                <div className="product">
                    <h1> Ürün adı </h1>
                    <span> 55.90 TL </span>
                </div>
        </Details>
    )
}
