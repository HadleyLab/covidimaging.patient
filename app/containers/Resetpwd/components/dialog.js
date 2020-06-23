import trans from 'trans'
import React from 'react';
import RoundedButton from '../../../components/RoundedButton'
import FlatButton from 'components/FlatButton'
import colors from "../../../style/colors";
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Logo from 'components/Logo'
import Button from '@material-ui/core/Button';
import redirect from '../../../utils/redirect'


const styles = {
    modalBack: {
        backgroundColor: 'rgba(242, 243, 244, 0.98);',
        backdropFilter: 'blur(2.3px)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: '10',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Titillium Web',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '32px',
        color: '#040429',
        margin: '0.5em 0',
    },
    contentCover: {
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'column',
        textAlign: 'center',
    },
    topBar: {
        padding: '10px 40px',
        width: '100%',
    },
    bottomBar: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1em',
        width: '100%',
    },
    linkButton: {
        color: '#54BFFF',
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 14,
    },
    description:{
        color:'#626285',
        fontSize: 16,
        margin: '0 30px 0',
        fontWeight: 100,
    },
    resend:{
        fontSize: 14,
        color: '#9497A2',
        fontWeight: 300,
    },
    button:{
      margin: '3em 0',
      backgroundColor: 'rgba(242, 243, 244, 0.98)',
      color: colors.brandPrimary,
      borderColor: colors.brandPrimary,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    email:{
        color: '#FAA900',
        fontWeight: 400,
        marginLeft: 10,
    }
};

class Dialog extends React.Component {

    link() {
      redirect('/login/');
    }

    render() {
        const { classes, email, handleCloseDialog} = this.props;
        return (
            <div className={classes.modalBack}>
                <div className={classes.topBar}>
                    <Logo/>
                </div>
                <div className={classes.contentCover}>
                    <h3 className={classes.title}>{trans('reset.pwd.dialog.title')}</h3>
                    <h4 className={classes.description} >
                      {trans('reset.pwd.dialog.description')}
                        <span className={classes.email}>
                            {email}
                            </span>
                      </h4>
                    <RoundedButton  variant='raised' color='primary' onClick={this.link} style={styles.button}>
                        {trans('reset.pwd.dialog.back.btn')}
                    </RoundedButton>
                </div>
                <div className={classes.bottomBar}>
                    <span className={classes.resend}>{trans('reset.pwd.dialog.resend')}</span>
                    {/*при кліку повторна відправка листа та зміну паролю*/}
                    <Button onClick={handleCloseDialog} variant="flat"  style={styles.linkButton}>
                        {trans('dialog.email.confirm.resend.btn')}
                    </Button>

                </div>
            </div>
        );
    }
}

export default (withStyles(styles))(Dialog);