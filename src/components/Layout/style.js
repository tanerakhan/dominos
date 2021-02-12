import styled from 'styled-components'

const Notification = styled.div`
    position: absolute;
    left: 50%;
    top: 20%;
    font-size: 13px;
    padding: 10px;
    transform: translate(-50%,-50%);
    background-color: #b3ffd1;
    border: 1px #b3ffd1 solid;
    border-radius: 3px;
    text-align: center;
    max-width: 200px;
    width: 100%;
    z-index: 99;
`;
const LayoutContainer = styled.div`
    width: 100%;
`;
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width:100%;
    max-width: 1000px;
    margin: auto;
    padding: 10px;
    background-color: #191919;
    color: #fff;
    align-items:center;
    .side{
        img{
            width: 200px;
        }
    }
`



export {LayoutContainer, Nav, Notification}