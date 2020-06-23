/**
 *
 * Login
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { getFileAction, sendFileAction, setFileAction } from './actions'

import injectReducer from 'utils/injectReducer'
import { makeSelectFile, makeSelectFileHash, makeSelectFileSending, makeSelectGetFileResult } from './selectors'
import reducer from './reducer'
import Files from './components/Files'
import immutableProps from 'hocs/immutableProps'
import trans from '../../trans'

export class FilesContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet>
          <title>{trans('title.files')}</title>
          <meta name="description" content={trans('title.files')}/>
        </Helmet>
        <Files {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  file: makeSelectFile(),
  sending: makeSelectFileSending(),
  hash: makeSelectFileHash(),
  getFileResult: makeSelectGetFileResult(),
})

const mapDispatchToProps = (dispatch) => ({
  onSendFile: (data) => dispatch(sendFileAction(data)),
  onGetFile: (data) => dispatch(getFileAction(data)),
  onSetFile: (data) => dispatch(setFileAction(data)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'files', reducer})

export default compose(
  withReducer,
  withConnect,
)(immutableProps(FilesContainer))
