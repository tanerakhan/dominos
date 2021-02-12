import styled from 'styled-components'

const Details = styled.div`
    background-color: rgb(240,248,255);
    max-width: 1000px;
    margin: auto;
    .coverImage{
        min-height: 342px;
        @media screen and (max-width: 500px){
            min-height: auto;
        }
    }
    .product{
        padding: 20px;
        text-align: center;
        span{
                font-size: 2em;
                color: #e4213f;
                font-weight: 700;
        }
    }
`



export {Details}