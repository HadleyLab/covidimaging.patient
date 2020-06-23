import styled from 'styled-components'
import colors from '../../style/colors'

export default styled.div`
    height: 18px;
    width: 18px;
    font-size: 16px;
    display: block;
    padding: 1px 0;
    box-sizing: border-box;
    width: 100%;
      &:hover {
        // color: #555555;
      }
      &:active, &:focus {
        cursor:pointer;
      }
      ${ ({ active }) => active ? `
        // color: #555555;
        ` : ``
        }
`