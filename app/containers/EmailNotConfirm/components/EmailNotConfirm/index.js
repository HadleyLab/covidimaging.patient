import React, { PureComponent } from 'react'
import styled from 'styled-components'
import colors from 'style/colors'
import { FormContainer, media } from 'style/containers'
import trans from 'trans'
import FlexCenter from 'components/FlexCenter'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'
const FormTitle = styled.h2`
    color:${colors.brandPrimary};
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
    background:transparent;
    position:relative;
    margin: 4em auto 1em;
`

class EmailNotConfirm extends PureComponent {
  render () {
    const {onResendEmailConfUser} = this.props;
    return (
        <ConsentContainer>
            <FlexCover>
                <FullColumn>
                    <Desc>
                      <FormattedMessage id="email.not.confirm.desc"/>
                    </Desc>
                </FullColumn>
              <Button variant='raised' onClick={onResendEmailConfUser} color="primary">{trans('forms.login.btn.resend.confirm.email')}</Button>
            <FlexCenter>
            </FlexCenter>
            </FlexCover>
        </ConsentContainer>
    )
  }
}

export default EmailNotConfirm
