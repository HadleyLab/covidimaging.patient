import {Link} from 'react-router-dom'
import styled from 'styled-components';

const A = styled(Link)`
  color: #8998DF;
  text-decoration: none;
  font-weight: 300;

  &:hover {
    color: #5D76EE;
  }
`;

export default A;
