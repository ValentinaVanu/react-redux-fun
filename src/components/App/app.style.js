import styled from 'styled-components'
import { Router } from '@reach/router'

export const StyledAppWrapper= styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
`
export const StyledRouter= styled(Router)`
  grid-row: 2/12;
  grid-column: 4/12;
`
