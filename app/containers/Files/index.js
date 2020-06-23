/**
 * DicomFiles
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { getListDicomAction, getListAnnotationsAction, saveDicomAction} from './actions'
import injectReducer from 'utils/injectReducer'
import isConfirm from '../../utils/isConfirm'
import { makeSelectGetFileResult, makeAnnotation } from './selectors'
import reducer from './reducer'
import Files from './components/Files'
import immutableProps from 'hocs/immutableProps'
import trans from '../../trans'

import NotConfirmMessage from '../EmailNotConfirm'
import reduxForm from "../../hocs/reduxForm";

export class FilesContainer extends React.PureComponent {

    constructor (props) {
        super(props);
    }

    componentWillMount() {
        const { onGetListDicom, onGetListAnnotations} = this.props;
        onGetListDicom();
        onGetListAnnotations();
    }

    handleOpenDialog = () => {
        const {history} = this.props;
        history.push('/findhospital');
    };


    render () {
        let BlockNotConfirmMessage = null;

         if(!isConfirm('email')) {
           BlockNotConfirmMessage = (<NotConfirmMessage {...this.props} message={true}/>);
         }

        return (
          <div>
            <Helmet>
              <title>{trans('title.files')}</title>
              <meta name="description" content={trans('title.files')}/>
            </Helmet>
              {BlockNotConfirmMessage}
              <Files {...this.props} handleOpenDialog={this.handleOpenDialog}/>
          </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    dicoms: makeSelectGetFileResult(),
    tags: makeAnnotation()
})

const mapDispatchToProps = (dispatch) => ({
    onGetListDicom: (data) => dispatch(getListDicomAction(data)),
    onSaveDicom: (data) => dispatch(saveDicomAction(data)),
    onGetListAnnotations: (data) => dispatch(getListAnnotationsAction(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({key: 'files', reducer})

export default compose(
    withReducer,
    withConnect,
    reduxForm('transfer'),
    immutableProps,
)(FilesContainer)
