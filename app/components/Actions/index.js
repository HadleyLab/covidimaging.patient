import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:column;
    flex:0 auto;
    width:100%;
    align-items:center;
    justify-content:center;
  
    ${media.tablet` 
        // flex-flow:row wrap;
        // justify-content:space-between;
    `}
     ${media.mobile`

        flex-flow:column;
        justify-content:center;
        > div {
            margin:1em 0;
        }
    `}
`