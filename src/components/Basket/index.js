import React from 'react'
import { BasketContainer } from './style'
export default function Basket() {
    return (
            <BasketContainer>
                <div className="basketInfos">
                    <div className="image">
                        <img src="https://dpe-cdn.azureedge.net/api/medium/Coupon/Global/_T0006/NULL/434x404/TR?v=005f54da35c5d5ebb42efc9b4776c32b-1612964040000"/>
                    </div>
                    <div className="productInfos">
                        <h5>Ürün adı</h5>
                        <span>Açıklama</span>
                        <span>55,90 TL</span>
                    </div>
                </div>
            </BasketContainer>
    )
}
