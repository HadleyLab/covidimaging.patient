import React, { PureComponent } from 'react'
import { FormContainer } from 'style/containers'
import trans from 'trans'
import TextField from '../../../../components/ReduxForm/TextField'
import CheckBox from 'components/ReduxForm/CheckBox'
import RoundedButton from 'components/RoundedButton'
import DatePicker from 'components/ReduxForm/DatePicker'
import A from 'components/A'
import HalfColumn from 'components/HalfColumn'
import FullColumn from 'components/FullColumn'
import FlexCover from 'components/FlexCover'
import Actions from 'components/Actions'
import ErrorText from 'components/ErrorText'
import { withStyles } from '@material-ui/core/styles'
import colors from 'style/colors'
import { FormattedMessage } from 'react-intl'
import FlexedContainer from 'components/FlexedContainer'
import ImgCover from 'components/ImgCover'
import MenuLogin from 'components/MenuLogin'
import FooterLogin from 'components/FooterLogin'
import FormTitle from 'components/FormTitle'
import Typography from '@material-ui/core/Typography';

const styles =({
    form:{
      width: 660,
        '@media(max-width: 1400px)':{
          width: '100%',
            maxWidth: 660,
        }
    },
    title:{
        color:colors.fontDark,
        textAlign: 'center',
        margin: '0 auto 1.2em',
        '@media(max-width: 1024px)':{
            margin: '1em auto 1.2em',
        },
        fontFamily: 'Titillium Web',
        fontSize: '32px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    },
    linkBtn:{
        backgroundColor: colors.brandPrimary,
        '&:hover':{
            backgroundColor: colors.brandHover,
        }
    }
})

class RegistrationStep extends PureComponent {

    render () {
      const {error, submitting, onRegister, valid, handleSubmit, classes} = this.props

        return (
        <FlexedContainer>
          <FormContainer>
              <MenuLogin path="/login"
                         classes={{cssRoot: classes.linkBtn}}
                         label={trans('forms.btn.sign.in')}/>
              <form onSubmit={handleSubmit(onRegister)}  className={classes.form}>
                <Typography className={classes.title}>{trans('forms.registration.title')}</Typography>
                <FlexCover>
                  <HalfColumn>
                    <TextField name="firstName" label={trans('forms.registration.FirstName')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="lastName" label={trans('forms.registration.LastName')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="otherName" label={trans('forms.registration.OtherName')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <DatePicker name="dob" disableFuture label={trans('forms.registration.DOB')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="email" type="email" label={trans('forms.registration.Email')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="phone" label={trans('forms.registration.Phone')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="password" type="password" label={trans('forms.registration.Password')} fullWidth/>
                  </HalfColumn>
                  <HalfColumn>
                    <TextField name="passwordConfirm" type="password" label={trans('forms.registration.RepeatPassword')}
                               fullWidth/>
                  </HalfColumn>
                  {error && (
                    <ErrorText>{error}</ErrorText>
                  )}

                  <FullColumn>
                    <CheckBox name="terms" label={(
                      <div>
                        <FormattedMessage
                          id='forms.registration.Iagree'
                          values={{
                            link: (<A target="_blank" href="/BWC Terms.pdf">
                                {trans('forms.registration.termsAndConditions')}
                              </A>
                            ),
                          }}
                        />
                      </div>
                    )}/>
                  </FullColumn>
                  <Actions>
                    <RoundedButton type="submit" variant='raised' color='secondary'
                            disabled={submitting}
                    >{trans(
                      'forms.btn.create.account')}</RoundedButton>
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

export default withStyles(styles)(RegistrationStep)