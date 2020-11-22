import styled from 'styled-components'

export const StyledPersonList= styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 15px;
  border: 1px solid #00373D;
  width: 100%;
  `

export const ListWrapper= styled.div`
  height: 400px;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
`
