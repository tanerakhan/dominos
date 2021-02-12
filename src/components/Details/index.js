import React from 'react'
import {Details} from './style'
import { Redirect } from "react-router-dom";
function DetailComp({ data }) {
        let dataControl = data && Object.keys(data);
        if(dataControl && dataControl.length > 0){
                return (
                        <Details>
                                <div className="coverImage">
                                        <img src={data.coverImage && data.coverImage}/> 
                                </div>
                                <div className="product">
                                        <h1> {data.name && data.name} </h1>
                                        <span> { data.price && data.price } </span>
                                </div>
                        </Details>
                )
        }else{
                return <Details> <div style={{ textAlign: 'center', padding: '10px' }}> Sonuç bulunamadı </div> </Details>
        }
}

export default DetailComp