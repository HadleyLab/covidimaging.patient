import trans from 'trans'
import React from 'react';
import RoundedButton from 'components/RoundedButton'
import colors from "../../../style/colors";
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import redirect from '../../../utils/redirect'


const styles = {
  modalBack: {
    backgroundColor: 'rgba(243, 244, 249, 0.95)',
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
    fontSize: '2.2em',
    color: '#040429',
    margin: '0',
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
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 14,
    backgroundColor: colors.brandPrimary,
    '&:hover': {
      backgroundColor: colors.brandHover,
    }
  },
  description: {
    color: '#626285',
    fontSize: 16,
    margin: '27px auto 34px',
    fontWeight: 100,
  },
  resend: {
    fontSize: 14,
    color: '#9497A2',
  },
  email: {
    color: '#FAA900',
    fontWeight: 400,
  },
  linkBtn: {}
  
};

class Dialog extends React.Component {
  
  link() {
    redirect('/sign/');
  }
  
  render() {
    const {classes, showD, user} = this.props;
    return (
      showD &&
      <div className={classes.modalBack}>
        <div className={classes.topBar}>
        </div>
        <div className={classes.contentCover}>
          <h3 className={classes.title}>{trans('dialog.email.confirm.account.created')}</h3>
          <h4 className={classes.description}>
            {trans('dialog.email.confirm.description1')}
            <span className={classes.email}>{user.email}</span>
            {trans('dialog.email.confirm.description2')}
          </h4>
          <RoundedButton variant='raised' className={classes.linkButton} onClick={this.link}>
            {trans('dialog.email.confirm.later.btn')}
          </RoundedButton>
        </div>
        <div className={classes.bottomBar}>
          <span className={classes.resend}>{trans('dialog.email.confirm.resend')}</span>
          <Button onClick={this.link} variant="flat" className={classes.linkButton}>
            {trans('dialog.email.confirm.resend.btn')}
          </Button>
        
        </div>
      </div>
    );
  }
}

export default (withStyles(styles))(Dialog);