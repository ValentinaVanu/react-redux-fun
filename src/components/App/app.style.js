import styled from 'styled-components'
import { Router } from '@reach/router'

export const StyledAppWrapper= styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
`
export const StyledRouter= styled(Router)`
  grid-row: 2/6;
  grid-column: 2/12;
`
