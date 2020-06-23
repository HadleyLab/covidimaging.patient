import React, {PureComponent} from 'react'
import styled from 'styled-components'
import colors from 'style/colors'
import {FormContainer, media} from 'style/containers'
import trans from 'trans'
import TextField from '@material-ui/core/TextField'
import docusignimg from 'images/logo-DocuSign.svg'
import FlatButton from 'components/FlatButton'
import RoundedButton from 'components/RoundedButton'
import moment from 'moment'
import Link from 'components/Link'
import FormDescription from 'components/FormDescriprion'
import BgImg from 'images/BG-welcome.png'
import getUserStepRegistartion from "../../../../utils/getUserStepRegistartion";


const FormTitle = styled.h2`
    color: ${colors.fontTitle};
    font-family: 'Titillium Web', serif;
    font-size: 32px;
    font-weight: normal;
    margin-top:0;
    width: 70%;
    text-align:center;
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
const HalfColumn = styled.div`
    display:flex;
    flex-flow:column wrap;
    flex:0 0.48 48%;
    ${media.mobile`
    flex:0 auto;
    width:100%;
    `}
    ${media.tablet` 
    flex:0 0.48 48%;
    width:auto;
    `}
`
const Actions = styled.div`
    display:flex;
    flex-flow:row wrap;
    flex:0 auto;
    width:100%;
    align-items:center;
    justify-content:space-between;
    margin:2em 0;
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
`
const DocusignLogo = styled.img`
    margin-left: 10px;
`
const Desc = styled.p`
    font-size:16px;
    text-align:center;
    color: ${colors.fontPrimary};
`
const DocumentForm = styled.div`
    border:1px solid #E5E5E5;
    overflow-y:auto;
    padding:1em;
    text-align:justify;
    margin:1em 0 1.5em;
    height:300px;
`
const ConsentContainer = styled(FormContainer)`
    height:100vh;
    background: url(${BgImg});
    padding-bottom: 56px;
    position: relative;
`

const DateSign = styled(TextField)`
    margin-top:1em !important;
`

const RowSign = styled.p`
    color: #9497A2;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
    position: absolute;
    bottom: 5em;
    
`
const styles = {
    link: {
        color: '#16A7FF',
        marginLeft: 10,
    },
    column: {
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: "center",
        margin: '1em 0',
    },
  linkBtn: {
    fontFamily: 'Titillium Web',
    color: "#FFFFFF",
    backgroundColor: colors.brandSecondary,
    '&:hover': {
      backgroundColor: colors.brandSecondaryHover,
    }
  }
}

class DocuSign extends PureComponent {
    handleSign = () => {
        const {onSign} = this.props;
        
        if (getUserStepRegistartion() === 1) {
            onSign({
                mainSign: true
            })
        } else {
            onSign()
        }
        
    }
    
    render() {
        const {loading} = this.props
        const title = (getUserStepRegistartion() === 1) ? 'welcome.page.permission.title_2' : 'welcome.page.permission.title'
        return (
            <ConsentContainer>
                <FormTitle>{trans(title)}</FormTitle>
                <FlexCover>
                    <FullColumn>
                        <FormDescription>{trans(('welcome.page.permission.description'))}
                        </FormDescription>
                    </FullColumn>
                    <FullColumn style={styles.column}>
                        <RoundedButton disabled={!!loading} variant="raised" style={styles.linkBtn}
                                       onClick={this.handleSign}> {trans(
                            'docusign.proceed')}</RoundedButton>
                    </FullColumn>
                    <FullColumn style={styles.column}>
                        <RowSign>
                            <span>{trans(('docusign.powered'))}</span>
                            <DocusignLogo src={docusignimg}/>
                        </RowSign>
                    </FullColumn>
                </FlexCover>
            </ConsentContainer>
        )
    }
}

export default DocuSign
