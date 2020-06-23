import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import FlexedBetween from 'components/FlexBetween'
import Logo from 'components/Logo'
import HeaderCover from "./HeaderCover"
import colors from "../../style/colors";
import Button from '@material-ui/core/Button';

const styles = ({
    cssRoot:{
        padding: '8px 20px 9px',
        textDecoration: 'none',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize:13,
        borderRadius: 0,
        color: colors.white,
    }
})

const MenuLogin = ({label, path, color, classes}) => {
    return (
            <HeaderCover>
                <FlexedBetween>
                    <div><Logo/></div>
                    <Button href={path} classes={{root: classes.cssRoot}} variant='raised'>
                        {label}</Button>

                </FlexedBetween>
            </HeaderCover>
        )
}

export default withStyles(styles)(MenuLogin)