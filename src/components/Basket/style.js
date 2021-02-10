import styled from 'styled-components'

const BasketContainer = styled.div`
    background-color: rgb(240, 248, 255);
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    .basketInfos{
        display: flex;
    max-width: 500px;
    margin: auto;   
    .image{
        margin-right: 30px;
            img{
                width: 150px;
                border-radius: 10px
            }
    }
    .productInfos{
        span{
            display: block;
                &::first-child{
                    margin: 10px 0;
                    font-size: 12px;
                }
        }
    }
    }
`



export {BasketContainer}