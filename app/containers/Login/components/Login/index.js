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
import LockIcon from 'components/Icons/PassWordIcon'
import CloseIcon from 'components/Icons/CloseIcon'
import IconButton from '@material-ui/core/IconButton';

const styles = ({
    form: {
        width: 400,
    },
    title: {
      color: colors.fontDark,
      width: 100,
      height: 50,
      fontFamily: 'Titillium Web',
      fontSize: '32px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      margin: '0 auto 1.2em',
      textAlign: 'center',
    },
    flexedLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span: {
        marginLeft: 10,
    },
    message: {
        backgroundColor: 'rgba(2, 206, 117, .9)',
        height: 62,
        width: '97%',
        top: 15,
        position: 'absolute',
        borderRadius: 4,
        textAlign: 'center',
        lineHeight: '62px',
        color: '#fff',
        fontWeight: 200,
    },
    relative: {
        position: 'relative',
    },

    button: {
        position: 'absolute',
        right: 5,
        top: 8,
    },
    resetLink: {
        margin: '1.5em auto 2.6em',
    },
    buttonSubmit: {
        padding: '14px 41px 15px',
        backgroundColor:colors.brandPrimary,
        '&:hover': {
          backgroundColor: colors.brandHover,
        },
      color: colors.borderGrey
    },
    linkBtn: {
        backgroundColor: colors.brandSecondary,
        '&:hover': {
            backgroundColor: colors.brandSecondaryHover,
        }
    }

})


class LoginStep extends PureComponent {
    constructor(props) {
        super(props);

        const {location} = this.props;
        const query = require('url').parse(location.search, true).query;
        this.state = {
            ShowDialogPWDConfirm: (query.resetpwd === 'ok') ? true : false,
            readOnly: true
        };
    }

    handleCloseDialogPWDConfirm = () => {
        this.setState(
            {
                ShowDialogPWDConfirm: false,
            }
        );
    }

    render() {
        const {error, onLogin, submitting, valid, handleSubmit, classes} = this.props;
        const {ShowDialogPWDConfirm, readOnly} = this.state;

        let showDialogPWDConfirm = null;

        if (ShowDialogPWDConfirm) {
            showDialogPWDConfirm = (<div style={styles.message}>
                <div style={styles.relative}>
                    <span>{trans('reset.pwd.success.message')}</span>
                    <IconButton onClick={this.handleCloseDialogPWDConfirm}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </div>);
        }

        return (
            <FlexedContainer>
                <FormContainer>
                    <MenuLogin
                        path='/register'
                        classes={{cssRoot: classes.linkBtn}}
                        label={trans('forms.registration.title')}
                    />
                    <form onSubmit={handleSubmit(onLogin)} className={classes.form}>
                        <h2 className={classes.title}>{trans('forms.btn.sign.in')}</h2>
                        <FlexCover>
                            <FullColumn>
                                <TextField name="email" readOnly={readOnly} onFocus={ () => {
                                    this.setState({readOnly: false})
                                }} type="email" label={trans('forms.registration.Email')} fullWidth/>
                            </FullColumn>
                            <FullColumn>
                                <TextField name="password" readOnly={readOnly} onFocus={ () => {
                                    this.setState({readOnly: false})
                                }} type="password" label={trans('forms.registration.Password')} fullWidth/>
                            </FullColumn>
                            {error && (
                                <ErrorText>{error}</ErrorText>
                            )}
                            <Actions className={classes.resetLink}>
                                <Link to="/resetpwd" className={classes.flexedLink}>
                                    <span className="icon-ico-unlock"/><span
                                    className={classes.span}>{trans('forms.login.forgot.password')}</span></Link>
                            </Actions>
                            <Actions>
                                <RoundedButton type="submit" variant='raised'
                                               classes={{button: classes.buttonSubmit}}
                                               disabled={submitting}
                                               >{trans('title.login')}</RoundedButton>
                            </Actions>
                        </FlexCover>
                    </form>
                    {showDialogPWDConfirm}
                    <FooterLogin/>
                </FormContainer>
                <ImgCover/>
            </FlexedContainer>

        )
    }
}

export default withStyles(styles)(LoginStep)