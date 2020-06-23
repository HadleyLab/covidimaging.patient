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
import DocusignFail from './components/DocusignFail'
import trans from '../../trans'

export class DocuSignFailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet>
          <title>{trans('title.signFail')}</title>
          <meta name="description" content={trans('title.signFail')}/>
        </Helmet>
        <DocusignFail {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'docuSignFail', reducer})

export default compose(
  withReducer,
  withConnect,
)(DocuSignFailPage)
