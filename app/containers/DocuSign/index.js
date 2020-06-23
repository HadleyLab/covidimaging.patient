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
import Docusign from './components/Docusign'
import trans from '../../trans'
import { signStory } from './story'

export class DocuSignPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet>
          <title>{trans('title.sign')}</title>
          <meta name="description" content={trans('title.sign')}/>
        </Helmet>
        <Docusign {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.getIn(['docuSign', 'loading']),
})

const mapDispatchToProps = (dispatch) => ({
  onSign: (data) => signStory(dispatch, data),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'docuSign', reducer})

export default compose(
  withReducer,
  withConnect,
)(DocuSignPage)
