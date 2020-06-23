/**
 *
 * Registration
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import EmailConfirm from './components/EmailConfirm'
import immutableProps from 'hocs/immutableProps'
import trans from 'trans'
import { confirmApi } from './api'
import logIn from '../../utils/logIn'
class EmailConfirmContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    const {match,onConfirmEmail} = this.props
    onConfirmEmail(match.params)
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>{trans('title.emailConfirm')}</title>
          <meta name="description" content={trans('title.emailConfirm')}/>
        </Helmet>
        <EmailConfirm {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isConfirmed: state.getIn(['emailConfirm','isConfirmed']),
  isError: state.getIn(['emailConfirm','isError'])
})

const mapDispatchToProps = (dispatch) => ({
  onConfirmEmail: (data) =>confirmApi(data).then(logIn),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'emailConfirm', reducer})

export default compose(
  withReducer,
  withConnect,
  immutableProps,
)(EmailConfirmContainer)
