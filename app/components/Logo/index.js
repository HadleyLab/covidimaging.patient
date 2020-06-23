import styled from 'styled-components';
import { media } from 'style/containers'
import logo from '../Img/logo@3x.png'

const Logo = styled.div`
  width: 190px;
  height:73px;
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`

export default Logo;