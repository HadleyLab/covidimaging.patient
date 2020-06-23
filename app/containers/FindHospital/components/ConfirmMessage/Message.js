import trans from 'trans'
import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import FlexCover from '../../../../components/FlexCover/index'
import FullColumn from '../../../../components/FullColumn/index'
import styled from 'styled-components'


const Alert = styled.div`
    position: relative;
    top:63px;
    width: 100%;
    background: #FFBD1D;
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
        return (
            <Alert>
                <FlexCover>
                    <FullColumn>
                        <div style={styles.container}>
                            <span>{trans('alert.confirm.added.hospital')}</span>
                        </div>
                    </FullColumn>
                </FlexCover>

            </Alert>
        );
    }
}

export default (withStyles(styles))(NotConfirmMessage);
