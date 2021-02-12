import styled from 'styled-components'

const BasketContainer = styled.div`
    background-color: rgb(240, 248, 255);
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    position: relative;
    .overlay{
        background-position: center center;
        filter: blur(2px) opacity(.7);
        height: 200px;
        @media screen and (max-width: 500px){
            height: 300px;
        }
    }
    .basketInfos{
    display: flex;
    max-width: 450px;
    width: 100%;
    margin: auto;   
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background-color: rgba(255,255,255, .3);
    padding: 10px;
    border-radius: 5px;
    .image{
        margin-right: 30px;
            img{
                width: 150px;
                border-radius: 10px
            }
    }
    .productInfos{
        h5{
            font-size:20px;
            min-height: 50px;
        }
        span{
            font-size: 36px;
            display: block;
            font-weight: 700;
            color: #e4213f;
                &::first-child{
                    margin: 10px 0;
                    font-size: 12px;
                }
        }
    }
    @media screen and (max-width: 500px){
        flex-direction: column;
        .image{ margin: 10px auto }
        .productInfos{
            text-align: center
        }
    }
    }
`



export {BasketContainer}