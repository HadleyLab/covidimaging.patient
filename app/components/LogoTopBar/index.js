import styled from 'styled-components';
import { media } from 'style/containers'
import logo from '../Img/logoSolo.png'

const Logo = styled.div`
  width: 34px;
  height:40px;
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`

export default Logo;