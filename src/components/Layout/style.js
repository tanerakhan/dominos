import styled from 'styled-components'

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

export {LayoutContainer, Nav}