/**
 *
 * FindHospital
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import injectReducer from 'utils/injectReducer'
import { makeSelectErrors } from './selectors'
import reducer from './reducer'
import FindHospital from './components/FindHospital'
import immutableProps from 'hocs/immutableProps'
import trans from '../../trans'
import reduxForm from 'hocs/reduxForm'
import { loginApi } from './api'
import AddHospitalDialog from './components/AddHospitalDialog';
import ConfirmMessage from './components/ConfirmMessage/ConfirmMessage.js';
import {FindAction, createHospitalAction} from "./actions";
import {transferApi} from './api'
import {signStory} from './story'
import toJS from "../../utils/toJS";

import { getFormValues } from 'redux-form/immutable';


export class FindHospitalContainer extends React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            showFormNewHospital: false,
            added: false
        };
    }

    handleOpenFormNewHospital = () => {
        this.setState({showFormNewHospital: true});
    };

    handleCloseFormNewHospital = () => {
        this.setState({showFormNewHospital: false});
    };

    handleCloseFormAfterAddHospitals = () => {
        const {history} = this.props;
        this.setState({added: true});
        this.setState({showFormNewHospital: false});
        history.push('/files');
        setTimeout(() => {
            this.setState({added: false});
        }, 3000)
    };

    render () {
        const {showFormNewHospital, added} = this.state;

        return (
            <div>
                <Helmet>
                    <title>{trans('title.login')}</title>
                    <meta name="description" content={trans('title.login')}/>
                </Helmet>

                {(added) ? <ConfirmMessage/> : null}
                {(showFormNewHospital)
                    ? <AddHospitalDialog {...this.props}
                        handleCloseFormAfterAddHospitals={this.handleCloseFormAfterAddHospitals}
                        handleCloseFormNewHospital={this.handleCloseFormNewHospital}/>
                    :
                    null
                }
                <FindHospital
                    {...this.props}
                    handleOpenFormNewHospital={this.handleOpenFormNewHospital}
                   />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    hospitals: state.getIn(['hospitalsContainer', 'hospitals']),
    count: state.getIn(['hospitalsContainer', 'count']),
    city: state.getIn(['hospitalsContainer', 'city']),
    load: state.getIn(['hospitalsContainer', 'load']),
    formValues: getFormValues('new')(state),
});

const mapDispatchToProps = (dispatch) => ({
    onFind: (data) => dispatch(FindAction(data)),
    onTransfer: (data) => transferApi(data).then(signStory),
    onCreateHospital: (data) => dispatch(createHospitalAction(data)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'hospitalsContainer', reducer});

export default compose(
    withReducer,
    withConnect,
    immutableProps,
)(FindHospitalContainer)
