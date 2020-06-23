/**
 *
 * Registration
 *
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import Registration from './components/Registration'
import Dialog from './components/dialog.js'
import immutableProps from 'hocs/immutableProps'
import logIn from 'utils/logIn'
import trans from 'trans'
import reduxForm from 'hocs/reduxForm'
import { registerApi} from './api'
import { registerAction} from './actions'
import validate from './validate'
import { makeSelectForm} from './selectors'

class RegistrationContainer extends PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            ShowDialog: false,
        };
    }


    handleCloseDialog = () => {
        this.setState(
            {
                ShowDialog: false,
            }
        );
    }

    handleOpentDialog() {
      this.setState(
        {
          ShowDialog: true,
        }
      );
    }

  componentDidMount (){
    const {registration} = this.state;
    if (registration) {
      this.handleOpentDialog();
    }
  }
    render () {
      const {ShowDialog} = this.state;
      const {registration} = this.props;

      if (registration && registration.confirm && !ShowDialog) {
        this.handleOpentDialog();
      }
      return (
        <div>
          <Helmet>
            <title>{trans('title.registration')}</title>
            <meta name="description" content={trans('title.registration')}/>
          </Helmet>
          <Registration {...this.props} />
            <Dialog {...this.props}
                    showD={ShowDialog}
                    handleCloseDialog={this.handleCloseDialog}
                    user={registration && registration.user}
            />
        </div>
      )
    }
}

const mapStateToProps = createStructuredSelector({
  registration: makeSelectForm(),
})

const mapDispatchToProps = (dispatch) => ({
  onRegister: (data) => registerApi(data).then((result)=>{dispatch(registerAction(result))}),
})


const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'registration', reducer})

export default compose(
  withReducer,
  withConnect,
  reduxForm('registration', validate),
  immutableProps,
)(RegistrationContainer)
