import React, { PureComponent } from 'react'
import { FormContainer } from 'style/containers'
import trans from 'trans'
import TextField from 'components/ReduxForm/TextField'
import ErrorText from 'components/ErrorText'
import RoundedButton from 'components/RoundedButton'
import Actions from 'components/Actions'
import FullColumn from 'components/FullColumn'
import Link from 'components/Link'
import FlexCover from 'components/FlexCover'
import { withStyles } from '@material-ui/core/styles/index'
import styled from 'styled-components'
import colors from '../../../../style/colors'
import FlexedContainer from 'components/FlexedContainer'
import ImgCover from 'components/ImgCover'
import MenuLogin from 'components/MenuLogin'
import FooterLogin from 'components/FooterLogin'
import LockIcon from 'components/Icons/PassWordIcon'

const styles = {
    form:{
        width: 400,
    },
    title:{
        color:colors.fontDark,
        fontFamily: 'Prata',
        fontWeight: 300,
      fontFamily: 'Titillium Web',
        fontSize: '32px',
        textAlign: 'center',
        margin: '0 auto 1.2em',
    },
    flexedLink:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span:{
        marginLeft: 10,
    },
    linkBtn:{
        backgroundColor: colors.brandSecondary,
        '&:hover':{
            backgroundColor: colors.brandSecondaryHover,
        }
    },
    action:{
        margin: '2.2em auto 3.2em',
    }

}

class ResetStep extends PureComponent {

  handleSave = () => {
    const {handleSubmit} = this.props;
    const submitter = handleSubmit(this.handleResetPWD);
    submitter();
  }

  handleResetPWD = (data) => {
    const {onResetPWD, match} = this.props;
    onResetPWD({
      data: match.params.hash,
      id: match.params.action,
      password: data._root.entries[0][1]
    });
    location.href = '/login?resetpwd=ok';
  }

  render () {
    const {error, submitting, valid, classes} = this.props
    // &&
    return (
        <FlexedContainer>
            <FormContainer>
                <MenuLogin  path='/register'
                            classes={{cssRoot: classes.linkBtn}}
                            label={trans('forms.registration.title')}/>
                <form  className={classes.form}>
                    <h2 className={classes.title}>{trans('set.new.pwd.title')}</h2>
                  <FlexCover>
                      <FullColumn>
                            <TextField name="password" type="password" label={trans('set.new.pwd.form.new.pwd')} fullWidth/>
                      </FullColumn>
                      <FullColumn>
                          <TextField name="passwordConfirm" type="password" label={trans('set.new.pwd.form.repeat.pwd')}
                                     fullWidth/>
                      </FullColumn>
                    {error && (
                      <ErrorText>{error}</ErrorText>
                    )}
                    <Actions  className={classes.action}>
                      <RoundedButton  onClick={this.handleSave} variant='raised'
                              disabled={!valid || submitting} color="primary">{trans('set.new.pwd.form.submit.btn')}</RoundedButton>
                        {/*після підтвердження перехід на сторінку Sign in*/}
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