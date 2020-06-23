import trans from 'trans'
import React from 'react';
import RoundedButton from 'components/RoundedButton/index'
import FlatButton from 'components/FlatButton/index'
import colors from "../../../../style/colors";
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import FlexCover from '../../../../components/FlexCover/index'
import FullColumn from '../../../../components/FullColumn/index'
import styled from 'styled-components'
import getUser from '../../../../utils/getUser'

const Alert = styled.div`
    position: relative;
    top:63px;
    width: 100%;
    background: #FFB12F;
    font-weight: 100;
    font-size: 13px;
    color: #fff;
    text-align: center;
`
const styles = {
    button:{
        color: 'rgba(255,255, 255, 1)',
        textTransform: 'none',
        padding: '0 10px',
        minHeight: 'auto',
        fontSize: 13,
        fontWeight: 300,
        textDecoration: 'underline',
    },
    email:{
        padding: '0 10px 0 5px',
        fontWeight: 600,
    },
    container:{
        padding: 10,
    },
    resend:{
        color: 'rgba(255,255, 255, 1)',
        fontWeight: 200,
    }
}


class NotConfirmMessage extends React.Component {

    render() {
        const {onResendEmailConfUser} = this.props;
        const user = getUser();
        return (
            <Alert>
                <FlexCover>
                    <FullColumn>
                        <div style={styles.container}>
                            <span>{trans('alert.confirm.email')}</span>
                            <span style={styles.email}>{user.email}</span>
                            <span style={styles.resend}>{trans('alert.confirm.email.resend')}</span>
                        <Button variant='flat' onClick={onResendEmailConfUser} color="primary" style={styles.button}>{trans('forms.login.btn.resend.confirm.email')}</Button>
                        </div>
                    </FullColumn>
                </FlexCover>

            </Alert>
        );
    }
}

export default (withStyles(styles))(NotConfirmMessage);
