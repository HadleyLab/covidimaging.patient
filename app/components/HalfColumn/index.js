import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:column wrap;
    flex:0 0.48 48%;
      ${media.desktop`
      `}
    ${media.tablet`
        flex:0 0.48 48%;
        width:auto;
    `}
    ${media.mobile`
        flex:0 auto;
        width:100%;
        align-items: center;
    `}
`