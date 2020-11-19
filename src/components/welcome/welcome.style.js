import styled from 'styled-components'



export const StyledLogo = styled.div`
  background-color: #EBFDFF ;
  color: #00373D;
  grid-column: 1/-1;
  cursor: pointer;
  padding: 30px;
`

export const EachMenuItem = styled.div `
  padding: 10px;
  cursor: pointer;
  border: 1px solid #fff;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    color: #fff;
    background-color: #00373D;
  }
`

export const MenuWrapper = styled.div `
  grid-column: 1/2;
  height: 100%;
  background-color: #EBFDFF ;
  color: #00373D;
  line-height: 30px;
  font-size: 18px;
`