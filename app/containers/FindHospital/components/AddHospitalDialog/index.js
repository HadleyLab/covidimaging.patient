import trans from 'trans'
import React from 'react';
import RoundedButton from 'components/RoundedButton/index'
import FlatButton from 'components/FlatButton/index'
import FlexBetween from 'components/FlexBetween'
import FullColumn from 'components/FullColumn'
import HalfColumn from 'components/HalfColumn'
import {withStyles} from '@material-ui/core/styles'
import TextField from 'components/ReduxForm/TextField'
import HiddenField from 'components/ReduxForm/HiddenField'
import Typography from '@material-ui/core/Typography';
import {UsaStates} from 'usa-states';
import Autocomplete from "components/ReduxForm/Autocomplete";
import Dialog from '@material-ui/core/Dialog';
import reduxForm from "../../../../hocs/reduxForm";
import {compose} from "redux";
import toJS from "../../../../utils/toJS";

const styles = {
  modalCover: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Prata',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '2em',
    color: '#040429',
    margin: '0.5em 1em 1em',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 600,
    margin: '.5em 0 1.5em',
    color: '#7A8091',
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
  description: {
    color: '#626285',
    fontSize: 16,
    margin: '0 30px 0',
    fontWeight: 100,
  },
  resend: {
    fontSize: 14,
    color: '#9497A2',
    fontWeight: 300,
  },
  button: {
    margin: '3em 0',
  },
  email: {
    color: '#FAA900',
    fontWeight: 400,
    marginLeft: 10,
  },
  formCover: {
    width: 712,
    maxWidth: '100%',
    position: 'relative',
    '@media(max-width: 768px)': {
      width: '100%',
      padding: '0 1em',
      
    }
  },
  cssInput: {
    boxShadow: '0px 0px 3px 0px rgba(98, 98, 133, 0.3)',
    backgroundColor: "#FFFFFF"
  },
  mobileFlex: {
    '@media(max-width: 700px)': {
      flexFlow: 'column',
    },
  },
  mobileState: {
    zIndex: 999,
    '@media(max-width: 700px)': {
      width: '100%',
      flex: '1 1 auto',
    },
  },
  mobileFlexSmall: {
    '@media(max-width: 460px)': {
      flexFlow: 'column',
    },
  },
  mobileSmallColumn: {
    '@media(max-width: 460px)': {
      width: '100%',
      flex: '1 1 auto',
    },
  },
  mobileColumn: {
    '@media(max-width: 460px)': {
      width: '100%',
      flex: '1 1 auto',
    },
  },
  dialogRoot: {
    backgroundColor: 'rgba(243, 244, 249, 0.95)',
  },
  container: {
    backgroundColor: 'rgba(243, 244, 249, 0.95)',
  }
};

class AddHospitalDialog extends React.Component {
  state = {
    open: true,
  };
  
  craeteHospital = (e) => {
    const {onCreateHospital, handleSubmit, reset, handleCloseFormAfterAddHospitals, validate, formValues} = this.props;
    e.preventDefault();
    
    const submitter = handleSubmit(onCreateHospital);
    let resultSubmitter = submitter();
    if (typeof (resultSubmitter.then) === 'function') {
      resultSubmitter.then(() => {
        handleCloseFormAfterAddHospitals();
      });
    }
    
    return false;
  };
  
  render() {
    const {classes, handleCloseFormNewHospital, change} = this.props;
    const states = new UsaStates().states;
    const listStates = (states && states.map(state => ({
      value: state.abbreviation,
      label: state.name
    })));
    
    change("createTransfer", true);
    
    return (
      <Dialog
        open={this.state.open}
        disableBackdropClick={true}
        fullScreen={true}
        classes={{
          root: classes.dialogRoot,
          paper: classes.container,
        }}>
        
        <div className={classes.modalCover}>
          <form onSubmit={this.craeteHospital}>
            <div className={classes.contentCover}>
              <h3 className={classes.title}>{trans('dialog.manually.add.hospital.title')}</h3>
              <div className={classes.formCover}>
                <HiddenField name="createTransfer"/>
                <FullColumn>
                  <TextField name="name" label={trans('dialog.manually.add.hospital.name')} fullWidth
                             classes={{bootstrapInput: classes.cssInput}}/>
                </FullColumn>
                <FullColumn>
                  <TextField name="address" label={trans('dialog.manually.add.hospital.address')} fullWidth
                             classes={{bootstrapInput: classes.cssInput}}/>
                </FullColumn>
                <FullColumn>
                  <Typography className={classes.subTitle}>{trans('dialog.manually.add.hospital.subtitle')}</Typography>
                </FullColumn>
                <FullColumn>
                  <FlexBetween className={classes.mobileFlex}>
                    <HalfColumn className={classes.mobileState}>
                      <Autocomplete
                        items={listStates}
                        name={"state"}
                        handleInputChange={() => {
                        }}
                        handleChange={() => {
                        }}
                        placeholder={trans('dialog.add.hospital.select.state')}
                      />
                      {/*<TextField  name="state" label={trans('dialog.add.hospital.select.state')} fullWidth classes={{bootstrapInput: classes.cssInput}} />*/}
                    
                    </HalfColumn>
                    <HalfColumn className={classes.mobileColumn}>
                      <FlexBetween className={classes.mobileFlexSmall}>
                        <HalfColumn className={classes.mobileSmallColumn}>
                          <TextField name="city" label={trans('dialog.add.hospital.select.city')} fullWidth
                                     classes={{bootstrapInput: classes.cssInput}}/>
                        </HalfColumn>
                        <HalfColumn className={classes.mobileSmallColumn}>
                          <TextField name="zip" label={trans('dialog.manually.add.hospital.zip')} fullWidth
                                     classes={{bootstrapInput: classes.cssInput}}/>
                        </HalfColumn>
                      </FlexBetween>
                    </HalfColumn>
                  </FlexBetween>
                </FullColumn>
                <FullColumn>
                  <FlexBetween className={classes.mobileFlexSmall}>
                    <HalfColumn className={classes.mobileSmallColumn}>
                      <TextField name="phone" label={trans('dialog.manually.add.hospital.phone')} fullWidth
                                 classes={{bootstrapInput: classes.cssInput}}/>
                    </HalfColumn>
                    <HalfColumn className={classes.mobileSmallColumn}>
                      <TextField name="phone2" label={trans('dialog.manually.add.hospital.phone2')} fullWidth
                                 classes={{bootstrapInput: classes.cssInput}}/>
                    </HalfColumn>
                  </FlexBetween>
                </FullColumn>
                <FullColumn>
                  <Typography
                    className={classes.subTitle}>{trans('dialog.manually.add.hospital.subtitle.pfield')}</Typography>
                </FullColumn>
                <FullColumn>
                  <FlexBetween className={classes.mobileFlexSmall}>
                    <HalfColumn className={classes.mobileSmallColumn}>
                      <TextField name="MRN" label={trans('dialog.manually.add.hospital.mrn')} fullWidth
                                 classes={{bootstrapInput: classes.cssInput}}/>
                    </HalfColumn>
                  </FlexBetween>
                </FullColumn>
              </div>
              
              <RoundedButton variant='raised' type={"submit"} color='secondary'>
                {trans('dialog.manually.add.hospital.submit')}
              </RoundedButton>
              
              <FlatButton onClick={handleCloseFormNewHospital}>{trans('docusign.cancel')}</FlatButton>
            </div>
          </form>
        </div>
      
      </Dialog>
    );
  }
}

const validate = _values => {
  const values = toJS(_values);
  const errors = {};
  
  let name = values.name;
  name = (name) ? name.trim() : false;
  
  let address = values.address;
  address = (address) ? address.trim() : false;
  
  if (!name) {
    errors.name = trans('validation.joi.newhospital.empty.name')
  }
  
  if (!address) {
    errors.address = trans('validation.joi.newhospital.empty.address')
  }
  
  return errors
}

export default compose(
  withStyles(styles),
  reduxForm('new', validate)
)(AddHospitalDialog);

