import styled from 'styled-components';
import { media } from 'style/containers'

const FlexedContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row;
  // align-items: center;
 
  ${media.desktop`
  justify-content: center;
  `}
   
  ${media.tablet`
    flex-flow: column;
    justify-content: center;

  `}
  ${media.mobile`

  `}
`

export default FlexedContainer;