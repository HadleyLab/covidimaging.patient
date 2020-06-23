import React, { PureComponent } from 'react'
import styled from 'styled-components'
import colors from 'style/colors'
import { FormContainer, media } from 'style/containers'
import trans from 'trans'
import ButtonLink from 'components/Button/ButtonLink';


const FormTitle = styled.h2`
    color:#4A4A4A;
    font-size:2em;
    font-weight:300;
    margin-top:0;
    text-align:center;
    margin-bottom: 0em;
`
const FlexCover = styled.div`
    display:flex;
    flex-flow:row wrap;
    flex:0 auto;
    align-items:center;
    justify-content:space-between;
    ${media.mobile`
    flex-flow:column wrap;
    justify-content:center;
    `}
    ${media.tablet` 
    flex-flow:row wrap;
    justify-content:space-between;
    `}
`
const FullColumn = styled.div`
    display:flex;
    flex-flow:column wrap;
    flex:1 100%;
    width:100%;
`
const Actions = styled.div`
    display:flex;
    flex-flow:row wrap;
    flex:0 auto;
    width:100%;
    align-items:center;
    justify-content:center;
    margin: 1em 0 3em;
    ${media.mobile`
    flex-flow:column wrap;
    justify-content:center;
    > div {
        margin:1em 0;
    }
    `}
    ${media.tablet` 
    flex-flow:row wrap;
    justify-content:space-between;
    `}
    > a {
        text-align:center;
    }
`
const Desc = styled.p`
    font-size:0.8em;
    padding:1em 0;
    text-align:center;
`

const ConsentContainer = styled(FormContainer)`
    position:relative;
    margin: 4em auto 1em;
`


class DocuSignFail extends PureComponent {
  render () {
    return (
        <ConsentContainer>
            <FormTitle>{trans('docusign.fail.title')}</FormTitle>
            <FlexCover>
                <FullColumn>
                    <Desc>{trans('docusign.fail.desc')}
                    </Desc>
                </FullColumn>
                <Actions>
                    <ButtonLink to="/sign"> {trans('docusign.fail.button')}</ButtonLink>
                </Actions>
            </FlexCover>
        </ConsentContainer>
    )
  }
}

export default DocuSignFail
