/**
 *
 * Login
 *
 */

import React from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {getFormValues} from 'redux-form/immutable'

import injectReducer from 'utils/injectReducer'
import {makeSelectReset} from './selectors'
import reducer from './reducer'
import Reset from './components/Reset'
import SetNewPWD from './components/SetNew'
import immutableProps from 'hocs/immutableProps'
import reduxForm from 'hocs/reduxForm'
import toJS from '../../utils/toJS'
import trans from '../../trans'
import {requestResetPWDAction, resetPWDAction} from './actions'
import Dialog from './components/dialog.js'
import allTrim from '../../utils/allTrim'

export class ResetpwdContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);

        this.state = {
            ShowDialog: false,
            email: null
        };
    }


    handleCloseDialog = () => {
        this.setState(
            {
                ShowDialog: false,
            }
        );
    }

    handleOpenDialog = (email) => {
        this.setState(
            {
                ShowDialog: true,
                email: email,
            }
        );
    }

    render() {
        const {ShowDialog, email} = this.state;
        const {match} = this.props

        let body = (
            <Reset {...this.props} handleOpenDialog={this.handleOpenDialog}/>
        )

        if (ShowDialog) {
            body = (<Dialog {...this.props} email={email} handleCloseDialog={this.handleCloseDialog}/>);
        }

        if (match.params.hash && match.params.action) {
            body = (<SetNewPWD {...this.props} />);
        }
        return (
            <div>
                <Helmet>
                    <title>{trans('title.login')}</title>
                    <meta name="description" content={trans('title.login')}/>
                </Helmet>
                {body}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hospital: state.getIn(['resetContainer', 'reset']),
    resetMail: getFormValues("resetForm")(state)
})

const mapDispatchToProps = (dispatch) => ({
    onRequestResetPWD: (data) => dispatch(requestResetPWDAction(data)),
    onResetPWD: (data) => dispatch(resetPWDAction(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({key: 'reset', reducer})

const validate = _values => {
    const values = toJS(_values)
    const errors = {}

    allTrim(values);

    if (!values.email) {
        errors.email = trans('validation.joi.register.empty.email')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = trans('validation.joi.register.email.email')
    }
    if (!values.password) {
        errors.password = trans('validation.joi.register.empty.password')
    }
    if (values.password && values.password.length < 6) {
        errors.password = trans('validation.joi.register.min.password')
    }
    if (!values.passwordConfirm) {
        errors.passwordConfirm = trans('validation.joi.register.empty.password')
    }
    if (values.passwordConfirm && values.passwordConfirm.length < 6) {
        errors.passwordConfirm = trans('validation.joi.register.min.password')
    }
    if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
        errors.passwordConfirm = trans('validation.joi.register.allowonly.passwordconfirm')
    }
    return errors
}

export default compose(
    withReducer,
    withConnect,
    reduxForm('resetForm', validate),
    immutableProps,
)(ResetpwdContainer)
