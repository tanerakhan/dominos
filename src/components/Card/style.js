import styled from 'styled-components'

const Card = styled.div`
    display: grid;
    place-items: center;
    .cardContainer{
        border-radius: 10px;
        border: 1px #ededed solid;
        background-color: #fff;
        overflow: hidden;
            .common{
                text-align: center;
                display: block;
            }
            h5{
                padding: 20px 20px 0 20px;
                font-size: 18px;
                font-weight: 800;
                min-height: 90px;
            }
            span{
                font-size: 2em;
                padding: 20px;
                color: #e4213f;
                font-weight: 800;
            }
            small{
            }
            button{
                margin: 20px auto;
                background-color: transparent;
                padding: 10px;
                border: 2px solid #484848;
                border-radius: 50px;
                max-width: 150px;
                width: 100%;
                transition: .5s ease;
                outline: none !important;
                box-shadow: none !important;
                    &:hover{
                        cursor: pointer;
                        background-color: #484848;
                        color: #fff; 
                        border: 2px solid #484848;
                    }
            }
    }
`



export {Card}