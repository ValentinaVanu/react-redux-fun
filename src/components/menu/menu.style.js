import styled from 'styled-components'
import { Link } from '@reach/router'


export const MenuLayout = styled.div`
  display: grid;
`

export const EachMenuItem = styled(Link) `
  padding: 10px 80px;
  cursor: pointer;
  text-decoration: none;
  color: #00373D;
  /* text-align: center; */
`

export const MenuWrapper = styled.div `
  display: grid;
  grid-row: 2/6;
  grid-column: 1/2;
  grid-gap: 10px;
  background-color: #EBFDFF ;
  color: #00373D;
  line-height: 30px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  height: 80vh;

  /* &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    color: #fff;
    background-color: #00373D;
    cursor: pointer;
  } */
`
export const StyledLogo = styled.div`
  background-color: #EBFDFF ;
  color: #00373D;
  grid-column: 1/-1;
  grid-row: 1/2;
  cursor: pointer;
  padding: 30px;
`
