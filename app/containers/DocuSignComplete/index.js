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
import DocusignComplete from './components/DocusignComplete'
import trans from '../../trans'
import { updateStatusUserApi } from './api'
import logIn from '../../utils/logIn'
import getUser from '../../utils/getUser'
export class DocuSignCompletePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet>
          <title>{trans('title.signComplete')}</title>
          <meta name="description" content={trans('title.signComplete')}/>
        </Helmet>
        <DocusignComplete {...this.props}/>
      </div>
    )
  }

  componentWillMount () {
    const {match, onUpdateStatusUser} = this.props;
    const id = match.params.id;
    let transferId = null;
    let mainDoc = null;
    
    if (match.params.params === 'mainSign') {
        mainDoc = true;
    } else {
        transferId = match.params.params
    }
    
    
    const user = getUser();
    if (user._id === id && (transferId || mainDoc)) {
      onUpdateStatusUser({
          userId: id,
          transferId: transferId,
          mainDoc: mainDoc
      });
    } else {
      location.href = '/sign';
    }
  }

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  onUpdateStatusUser: (data) => updateStatusUserApi(data).then(logIn),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'docuSignComplete', reducer})

export default compose(
  withReducer,
  withConnect,
)(DocuSignCompletePage)
