import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:column;
    flex:0 auto;
    width:100%;
    align-items:center;
    justify-content:center;
    margin: 0 0 1.5em;
    background: #fff;
     border-radius:  5px;
    
    ${media.tablet` 
   
    `}
    ${media.mobile`
        flex-flow:column;
        justify-content:center;
    `}
`