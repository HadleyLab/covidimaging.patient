/**
 *
 * DocuSign
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import EmailNotConfirm from './components/EmailNotConfirm'
import NotConfirmMessage from './components/NotConfirmMessage/NotConfirmMessage.js'
import trans from '../../trans'
import { ResendEmailConfUserApi } from './api'
import logOut from '../../utils/logOut'

export class EmailNotConfirmPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const {message} = this.props;
    let emailNotConfirm = (
      <div>
        <Helmet>
          <title>{trans('title.signComplete')}</title>
          <meta name="description" content={trans('title.signComplete')}/>
        </Helmet>
        <EmailNotConfirm {...this.props}/>
      </div>
    );

    if (message) {
      emailNotConfirm = (<NotConfirmMessage {...this.props}/>);
    }

    return emailNotConfirm;
  }

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  onResendEmailConfUser: (data) => ResendEmailConfUserApi(data),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'docuSignComplete', reducer})

export default compose(
  withReducer,
  withConnect,
)(EmailNotConfirmPage)
