/**
 *
 * Registration
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import Transfer from './components/Transfer'
import immutableProps from 'hocs/immutableProps'
import trans from 'trans'
import reduxForm from 'hocs/reduxForm'
import {makeHospitals} from './selectors'
import { hospitalsListAction} from './actions'
import { transferApi } from './api'
import logIn from '../../utils/logIn'
export class RegistrationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    render () {
        return (
          <div>
            <Helmet>
              <title>{trans('forms.transfer.title')}</title>
              <meta name="description" content={trans('forms.transfer.title')}/>
            </Helmet>
            <Transfer {...this.props} />
          </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hospitals: makeHospitals(),
})

const mapDispatchToProps = (dispatch) => ({
  onTransfer: (data) => transferApi(data).then(logIn),
  onGetHospitalsList: (data) => dispatch(hospitalsListAction(data)),
})


const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'transfer', reducer})

export default compose(
  withReducer,
  withConnect,
  reduxForm('transfer'),
  immutableProps,
)(RegistrationContainer)
