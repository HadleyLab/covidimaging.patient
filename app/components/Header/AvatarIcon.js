import styled from 'styled-components'


export default styled.div`
  display: block;
  background: #f3ad30;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  line-height: 40px;
  color: #fff;
  font-family: 'Prata';
  text-align: center;
  font-size: 20px;
  margin: 0;
  p{
    margin: 0;
    width: 10px;
    padding: 0 12px;
    display: block;
    height: 36px;
    line-height: 36px;  
    &::first-letter {
        text-transform: uppercase;
        overflow: hidden;
        width: 10px;
        color: #fff;
        line-height: 36px;
        text-align: left;
        margin-right:15px;
        font-family: monospace !important;
        
        }
    }
`