import React, {PureComponent} from 'react'
import {FormContainer} from 'style/containers'
import trans from 'trans'
import TextField from 'components/ReduxForm/TextField'
import ErrorText from 'components/ErrorText'
import RoundedButton from 'components/RoundedButton'
import Actions from 'components/Actions'
import FullColumn from 'components/FullColumn'
import Link from 'components/Link'
import FlexCover from 'components/FlexCover'
import {withStyles} from '@material-ui/core/styles/index'
import colors from '../../../../style/colors'
import FlexedContainer from 'components/FlexedContainer'
import ImgCover from 'components/ImgCover'
import MenuLogin from 'components/MenuLogin'
import FooterLogin from 'components/FooterLogin'

const styles = {
  form: {
    width: 400,
    '@media(max-width: 600px)': {
      width: '100%',
    }
  },
  title: {
    color: colors.fontDark,
    fontFamily: 'Titillium Web',
    fontSize: '32px',
    fontWeight: 300,
    
    margin: '0 auto 0',
    textAlign: 'center',
  },
  flexedLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: '#626285',
    fontFamily: 'Titillium Web',
    fontSize: 16,
    margin: '0 auto 1.8em',
    fontWeight: 100,
    textAlign: 'center',
  },
  linkBtn: {
    backgroundColor: colors.brandSecondary,
    '&:hover': {
      backgroundColor: colors.brandSecondaryHover,
    }
  },
  action: {
    margin: '2.2em auto 3.2em',
  },
  buttonSubmit: {
    padding: '14px 41px 15px',
    backgroundColor:colors.brandPrimary,
    '&:hover': {
      backgroundColor: colors.brandHover,
    },
    color: colors.borderGrey
  },
}

class ResetStep extends PureComponent {
  
  handleSave = () => {
    const {onRequestResetPWD, handleSubmit, handleOpenDialog, resetMail} = this.props;
    
    const submitter = handleSubmit(onRequestResetPWD);
    submitter().then(() => {
      handleOpenDialog(resetMail && resetMail.email);
    });
    
  };
  
  render() {
    const {error, submitting, valid, classes} = this.props;
    return (
      <FlexedContainer>
        <FormContainer>
          <MenuLogin path='/register'
                     classes={{cssRoot: classes.linkBtn}}
                     label={trans('forms.registration.title')}/>
          <form className={classes.form}>
            <h2 className={classes.title}>{trans('reset.pwd.title')}</h2>
            <h4 className={classes.description}>{trans('reset.pwd.description')}</h4>
            <FlexCover className={classes.form}>
              <FullColumn>
                <TextField name="email" type="email" label={trans('forms.registration.Email')}
                           fullWidth/>
              </FullColumn>
              {error && (
                <ErrorText>{error}</ErrorText>
              )}
              <Actions className={classes.action}>
                <RoundedButton onClick={this.handleSave} variant='raised'
                               disabled={!valid || submitting}
                               classes={{button: classes.buttonSubmit}}
                               >{trans('reset.pwd.send.request')}</RoundedButton>
                {/*відправка повідомлення на відновлення паролю і відкриває діалог CheckDialog*/}
              </Actions>
              <Actions>
                <Link to="/login"
                      className={classes.flexedLink}>{trans('reset.pwd.dialog.back.btn')}</Link>
              </Actions>
            </FlexCover>
          </form>
          <FooterLogin/>
        
        </FormContainer>
        <ImgCover/>
      </FlexedContainer>
    
    )
  }
}

export default withStyles(styles)(ResetStep)