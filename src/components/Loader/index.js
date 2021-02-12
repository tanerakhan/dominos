import React from 'react'
import { ClipLoader } from 'react-spinners';
import {Loader} from './style'

export default function Load(){
        return(
                <Loader>
                        <ClipLoader sizeUnit={"px"} size={15} color={'#123abc'}/>
                </Loader>
        )
}